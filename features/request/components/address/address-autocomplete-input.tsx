"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { mapboxClient, MapboxError } from "@/lib/mapbox/mapbox-client";
import type { MapboxErrorCategory } from "@/lib/mapbox/mapbox-client";
import type { AddressSuggestion } from "../../types/address.types";

// ---------------------------------------------------------------------------
// Token-check — éénmalig buiten de component, gedeeld door alle instanties
// NEXT_PUBLIC_* wordt door Next.js inlined als string bij build-time.
// Dit is de enige plek waar we checken of het token aanwezig is.
// ---------------------------------------------------------------------------

const TOKEN_PRESENT: boolean =
  typeof process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN === "string" &&
  process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN.length > 0 &&
  !process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN.startsWith("pk.VERVANG");

// ---------------------------------------------------------------------------
// Debounce helper
// ---------------------------------------------------------------------------

function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
}

// ---------------------------------------------------------------------------
// Dev-only debug bar
//
// Verwijderen als Mapbox werkt:
//   1. Verwijder het DebugBar component hieronder
//   2. Verwijder <DebugBar ... /> in de JSX
//   3. Verwijder alle debug* state variabelen en setDebug* aanroepen
// ---------------------------------------------------------------------------

type DebugStatus = "idle" | "loading" | "ok" | "error" | "empty";

interface DebugBarProps {
  status: DebugStatus;
  query: string;
  count: number;
  httpStatus: number | null;
  errorCategory: MapboxErrorCategory | null;
  errorMessage: string | null;
}

function DebugBar({
  status,
  query,
  count,
  httpStatus,
  errorCategory,
  errorMessage,
}: DebugBarProps) {
  if (process.env.NODE_ENV !== "development") return null;

  const statusColor: Record<DebugStatus, string> = {
    idle: "text-gray-300",
    loading: "text-blue-400",
    ok: "text-green-500",
    error: "text-red-400",
    empty: "text-yellow-500",
  };

  const categoryLabel: Partial<Record<MapboxErrorCategory, string>> = {
    "missing-token": "token ontbreekt",
    "unauthorized": "401 unauthorized",
    "forbidden": "403 forbidden",
    "invalid-request": "422 ongeldige query",
    "not-found": "404 niet gevonden",
    "rate-limited": "429 rate limit",
    "network-error": "netwerk fout",
    "unknown": `HTTP ${httpStatus ?? "?"} onbekend`,
  };

  // Token-status altijd tonen in idle — gedeeld TOKEN_PRESENT, consistent voor alle instanties
  const tokenHint = TOKEN_PRESENT ? "token ✓" : "token ✗ ontbreekt";

  let label: string;
  switch (status) {
    case "idle":
      label = `${tokenHint} · wacht op invoer`;
      break;
    case "loading":
      label = `${tokenHint} · zoeken naar "${query}"…`;
      break;
    case "ok":
      label = `HTTP 200 · ${count} suggestie${count !== 1 ? "s" : ""}`;
      break;
    case "empty":
      label = `HTTP 200 · geen resultaten voor "${query}"`;
      break;
    case "error":
      label = errorCategory
        ? `${categoryLabel[errorCategory] ?? errorCategory} · ${errorMessage ?? ""}`
        : `fout · ${errorMessage ?? "onbekend"}`;
      break;
  }

  return (
    <span className={`font-mono text-[10px] leading-none ${statusColor[status]}`}>
      ⬡ {label}
    </span>
  );
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface AddressAutocompleteInputProps {
  id: string;
  label: string;
  placeholder?: string;
  value: AddressSuggestion | null;
  onChange: (suggestion: AddressSuggestion | null) => void;
  showError?: boolean;
  errorMessage?: string;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function AddressAutocompleteInput({
  id,
  label,
  placeholder = "Straat + huisnummer, stad",
  value,
  onChange,
  showError = false,
  errorMessage = "Kies een adres uit de lijst.",
}: AddressAutocompleteInputProps) {
  const [inputText, setInputText] = useState(value?.fullAddress ?? "");
  const [suggestions, setSuggestions] = useState<AddressSuggestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(value !== null);

  // Debug state — verwijder samen met DebugBar
  const [debugStatus, setDebugStatus] = useState<DebugStatus>("idle");
  const [debugHttpStatus, setDebugHttpStatus] = useState<number | null>(null);
  const [debugErrorCategory, setDebugErrorCategory] =
    useState<MapboxErrorCategory | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const activeIndexRef = useRef<number>(-1);

  const debouncedQuery = useDebounce(inputText, 350);

  // Sluit lijst bij klik buiten component
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fetch suggesties zodra debounced query verandert
  useEffect(() => {
    const trimmed = debouncedQuery.trim();

    if (trimmed.length < 3) {
      setSuggestions([]);
      setFetchError(null);
      setOpen(false);
      setDebugStatus("idle");
      setDebugHttpStatus(null);
      setDebugErrorCategory(null);
      return;
    }

    if (isSelected) return;

    let cancelled = false;
    setLoading(true);
    setFetchError(null);
    setDebugStatus("loading");
    setDebugHttpStatus(null);
    setDebugErrorCategory(null);

    mapboxClient
      .geocode(trimmed)
      .then((results) => {
        if (cancelled) return;
        setSuggestions(results);
        setOpen(results.length > 0);
        setDebugStatus(results.length > 0 ? "ok" : "empty");
        setDebugHttpStatus(200);
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        setSuggestions([]);
        setOpen(false);
        setDebugStatus("error");

        if (err instanceof MapboxError) {
          setFetchError(err.message);
          setDebugHttpStatus(err.httpStatus);
          setDebugErrorCategory(err.category);
        } else {
          const msg = err instanceof Error ? err.message : "Onbekende fout";
          setFetchError(msg);
          setDebugErrorCategory("unknown");
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [debouncedQuery, isSelected]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const text = e.target.value;
      setInputText(text);
      setFetchError(null);
      if (text.trim().length < 3) {
        setDebugStatus("idle");
        setDebugHttpStatus(null);
        setDebugErrorCategory(null);
      }
      if (isSelected) {
        setIsSelected(false);
        onChange(null);
      }
    },
    [isSelected, onChange]
  );

  const handleSelect = useCallback(
    (suggestion: AddressSuggestion) => {
      setInputText(suggestion.fullAddress);
      setIsSelected(true);
      setSuggestions([]);
      setFetchError(null);
      setOpen(false);
      setDebugStatus("idle");
      setDebugHttpStatus(null);
      setDebugErrorCategory(null);
      onChange(suggestion);
      activeIndexRef.current = -1;
    },
    [onChange]
  );

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!open || suggestions.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      activeIndexRef.current = Math.min(
        activeIndexRef.current + 1,
        suggestions.length - 1
      );
      (
        document.getElementById(
          `${id}-suggestion-${activeIndexRef.current}`
        ) as HTMLElement
      )?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      activeIndexRef.current = Math.max(activeIndexRef.current - 1, -1);
      if (activeIndexRef.current === -1) {
        inputRef.current?.focus();
      } else {
        (
          document.getElementById(
            `${id}-suggestion-${activeIndexRef.current}`
          ) as HTMLElement
        )?.focus();
      }
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  const hasValidationError = showError && !isSelected;
  const showNoResults =
    !loading &&
    !fetchError &&
    debouncedQuery.trim().length >= 3 &&
    !isSelected &&
    suggestions.length === 0;

  return (
    <div ref={containerRef} className="relative flex flex-col gap-1">
      <div className="flex items-center justify-between gap-2">
        <label htmlFor={id} className="text-sm font-medium text-gray-700">
          {label}
        </label>
        {/* Dev-only debug bar — verwijder dit als Mapbox werkt */}
        <DebugBar
          status={debugStatus}
          query={debouncedQuery.trim()}
          count={suggestions.length}
          httpStatus={debugHttpStatus}
          errorCategory={debugErrorCategory}
          errorMessage={fetchError}
        />
      </div>

      <div className="relative">
        <input
          ref={inputRef}
          id={id}
          type="text"
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (suggestions.length > 0) setOpen(true);
          }}
          placeholder={placeholder}
          autoComplete="off"
          spellCheck={false}
          aria-autocomplete="list"
          aria-controls={open ? `${id}-listbox` : undefined}
          aria-expanded={open}
          aria-invalid={hasValidationError}
          aria-describedby={
            hasValidationError
              ? `${id}-error`
              : fetchError
              ? `${id}-fetch-error`
              : undefined
          }
          className={[
            "w-full rounded-lg border px-4 py-3 text-sm text-gray-900 placeholder-gray-400",
            "outline-none transition focus:ring-2 focus:ring-gray-900/10",
            hasValidationError
              ? "border-red-400 focus:border-red-500"
              : isSelected
              ? "border-gray-900 bg-white focus:border-gray-900"
              : "border-gray-300 bg-white focus:border-gray-900",
          ].join(" ")}
        />

        {loading && (
          <span
            aria-hidden="true"
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-200 border-t-gray-600" />
          </span>
        )}

        {isSelected && !loading && (
          <span
            aria-hidden="true"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-gray-900"
          >
            ✓
          </span>
        )}
      </div>

      {hasValidationError && (
        <p id={`${id}-error`} className="text-xs text-red-500">
          {errorMessage}
        </p>
      )}

      {fetchError && !hasValidationError && (
        <p id={`${id}-fetch-error`} className="text-xs text-orange-500">
          {fetchError}
        </p>
      )}

      {showNoResults && !open && (
        <p className="text-xs text-gray-400">
          Geen adressen gevonden. Probeer een andere zoekterm.
        </p>
      )}

      {open && suggestions.length > 0 && (
        <ul
          id={`${id}-listbox`}
          role="listbox"
          aria-label={`Suggesties voor ${label}`}
          className="absolute left-0 right-0 top-full z-50 mt-1 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg"
        >
          {suggestions.map((suggestion, index) => (
            <li key={suggestion.mapboxId} role="option" aria-selected={false}>
              <button
                id={`${id}-suggestion-${index}`}
                type="button"
                onMouseDown={(e) => {
                  e.preventDefault();
                  handleSelect(suggestion);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleSelect(suggestion);
                  } else if (e.key === "ArrowDown") {
                    e.preventDefault();
                    (
                      document.getElementById(
                        `${id}-suggestion-${index + 1}`
                      ) as HTMLElement
                    )?.focus();
                  } else if (e.key === "ArrowUp") {
                    e.preventDefault();
                    if (index === 0) {
                      inputRef.current?.focus();
                    } else {
                      (
                        document.getElementById(
                          `${id}-suggestion-${index - 1}`
                        ) as HTMLElement
                      )?.focus();
                    }
                  } else if (e.key === "Escape") {
                    setOpen(false);
                    inputRef.current?.focus();
                  }
                }}
                className="flex w-full flex-col px-4 py-3 text-left transition hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
              >
                <span className="text-sm font-medium text-gray-900">
                  {suggestion.placeName}
                </span>
                <span className="text-xs text-gray-400">
                  {suggestion.fullAddress}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

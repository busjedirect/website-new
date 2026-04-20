"use client";

import { useState, useEffect, useRef } from "react";
import type { ItemCategory_ } from "../../constants/item-options";
import type { RequestItemInput, ItemDimensions } from "../../types/item.types";
import { ITEM_ICON_MAP, CustomIcon } from "./item-icons";
import { QuantitySelector } from "./quantity-selector";

const inputClass =
  "w-full rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/8";

const labelClass = "text-[11px] font-semibold uppercase tracking-wide text-zinc-400";

// ---------------------------------------------------------------------------
// Boolean toggle
// ---------------------------------------------------------------------------

function BooleanField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-sm text-zinc-700">{label}</span>
      <div className="flex overflow-hidden rounded-lg border border-zinc-200">
        <button
          type="button"
          onClick={() => onChange(false)}
          className={[
            "px-3 py-1.5 text-xs font-medium transition",
            !value ? "bg-zinc-900 text-white" : "bg-white text-zinc-500 hover:bg-zinc-50",
          ].join(" ")}
        >
          Nee
        </button>
        <button
          type="button"
          onClick={() => onChange(true)}
          className={[
            "border-l border-zinc-200 px-3 py-1.5 text-xs font-medium transition",
            value ? "bg-zinc-900 text-white" : "bg-white text-zinc-500 hover:bg-zinc-50",
          ].join(" ")}
        >
          Ja
        </button>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Dimensions
// ---------------------------------------------------------------------------

function DimensionsFields({
  value,
  onChange,
  onUserEdit,
}: {
  value: ItemDimensions;
  onChange: (v: ItemDimensions) => void;
  /** Called the first time the user manually changes a field */
  onUserEdit: () => void;
}) {
  function update(key: keyof ItemDimensions, raw: string) {
    onUserEdit();
    const n = parseFloat(raw);
    onChange({ ...value, [key]: isNaN(n) ? undefined : n });
  }

  return (
    <div className="flex flex-col gap-2">
      <span className={labelClass}>
        Afmetingen{" "}
        <span className="font-normal normal-case text-zinc-300">(optioneel, cm)</span>
      </span>
      <div className="grid grid-cols-3 gap-2">
        {(
          [
            { key: "lengthCm" as const, label: "Lengte" },
            { key: "widthCm" as const, label: "Breedte" },
            { key: "heightCm" as const, label: "Hoogte" },
          ] as const
        ).map(({ key, label }) => (
          <div key={key} className="flex flex-col gap-1">
            <label className="text-[10px] text-zinc-400">{label}</label>
            <input
              type="number"
              min={1}
              placeholder="cm"
              // Controlled input so pre-filled defaults render reactively
              value={value[key] ?? ""}
              onChange={(e) => update(key, e.target.value)}
              className={inputClass}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface ItemConfigPanelProps {
  category: ItemCategory_;
  onAdd: (input: RequestItemInput) => void;
  onCancel: () => void;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function ItemConfigPanel({ category, onAdd, onCancel }: ItemConfigPanelProps) {
  const Icon = ITEM_ICON_MAP[category.iconSlug] ?? CustomIcon;

  const [selectedSubtype, setSelectedSubtype] = useState<string>("");
  const [aantal, setAantal] = useState(1);
  const [properties, setProperties] = useState<Record<string, unknown>>({});
  const [dimensions, setDimensions] = useState<ItemDimensions>({});
  const [opmerking, setOpmerking] = useState("");

  // Track whether the user has manually edited the dimension fields.
  // If they have, subtype changes will NOT overwrite their values.
  const dimensionsUserEdited = useRef(false);

  // Apply field defaults on mount
  useEffect(() => {
    const defaults: Record<string, unknown> = {};
    category.fields.forEach((f) => {
      if (f.defaultValue !== undefined) defaults[f.key] = f.defaultValue;
    });
    setProperties(defaults);
  }, [category.fields]);

  // Apply subtype property defaults + default dimensions when subtype changes
  useEffect(() => {
    if (!selectedSubtype) return;
    const sub = category.subtypes.find((s) => s.id === selectedSubtype);
    if (!sub) return;

    // Always apply property defaults
    if (sub.defaults) {
      setProperties((prev) => ({ ...prev, ...sub.defaults }));
    }

    // Only apply dimension defaults if the user hasn't manually edited them
    if (!dimensionsUserEdited.current && sub.defaultDimensions) {
      setDimensions(sub.defaultDimensions);
    }
  }, [selectedSubtype, category.subtypes]);

  function setProp(key: string, value: unknown) {
    setProperties((prev) => ({ ...prev, [key]: value }));
  }

  function isFieldVisible(field: { onlyFor?: string[]; hideFor?: string[] }): boolean {
    if (!selectedSubtype) return false;
    if (field.onlyFor && !field.onlyFor.includes(selectedSubtype)) return false;
    if (field.hideFor && field.hideFor.includes(selectedSubtype)) return false;
    return true;
  }

  const subtypeObj = category.subtypes.find((s) => s.id === selectedSubtype);
  const canAdd = Boolean(selectedSubtype);

  function handleAdd() {
    if (!canAdd || !subtypeObj) return;
    onAdd({
      category: category.id,
      subtype: selectedSubtype,
      label: subtypeObj.label,
      aantal,
      properties,
      dimensions:
        Object.values(dimensions).some((v) => v !== undefined) ? dimensions : undefined,
      opmerking: opmerking.trim() || undefined,
    });
  }

  const visibleFields = category.fields.filter(isFieldVisible);

  return (
    <div className="flex h-full min-h-0 flex-col">
      {/* Header — fixed */}
      <div className="flex shrink-0 items-center justify-between border-b border-zinc-100 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-100">
            <Icon className="text-zinc-600" />
          </div>
          <h3 className="text-base font-semibold text-zinc-900">{category.label}</h3>
        </div>
        <button
          type="button"
          onClick={onCancel}
          aria-label="Sluiten"
          className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-700"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Scrollable body */}
      <div className="flex min-h-0 flex-1 flex-col gap-5 overflow-y-auto py-5">

        {/* Type dropdown */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor={`subtype-${category.id}`} className={labelClass}>
            Type
          </label>
          <select
            id={`subtype-${category.id}`}
            value={selectedSubtype}
            onChange={(e) => {
              // Changing the subtype resets the "user edited" guard so the new
              // subtype's default dimensions are applied cleanly.
              dimensionsUserEdited.current = false;
              setSelectedSubtype(e.target.value);
            }}
            className={inputClass}
          >
            <option value="">Selecteer type…</option>
            {category.subtypes.map((sub) => (
              <option key={sub.id} value={sub.id}>
                {sub.label}
              </option>
            ))}
          </select>
        </div>

        {/* Fields — only shown after subtype selected */}
        {selectedSubtype && (
          <>
            {/* Aantal */}
            <div className="flex flex-col gap-2">
              <span className={labelClass}>Aantal</span>
              <QuantitySelector value={aantal} onChange={setAantal} />
            </div>

            {/* Kenmerken */}
            {visibleFields.length > 0 && (
              <div className="flex flex-col gap-4">
                <span className={labelClass}>Kenmerken</span>
                {visibleFields.map((field) => {
                  if (field.type === "boolean") {
                    return (
                      <BooleanField
                        key={field.key}
                        label={field.label}
                        value={Boolean(
                          properties[field.key] ?? field.defaultValue ?? false
                        )}
                        onChange={(v) => setProp(field.key, v)}
                      />
                    );
                  }
                  if (field.type === "select" && field.options) {
                    return (
                      <div key={field.key} className="flex flex-col gap-1.5">
                        <label className={labelClass}>{field.label}</label>
                        <select
                          value={String(
                            properties[field.key] ?? field.defaultValue ?? ""
                          )}
                          onChange={(e) => setProp(field.key, e.target.value)}
                          className={inputClass}
                        >
                          <option value="">Kies…</option>
                          {field.options.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            )}

            {/* Afmetingen */}
            <DimensionsFields
              value={dimensions}
              onChange={setDimensions}
              onUserEdit={() => { dimensionsUserEdited.current = true; }}
            />

            {/* Opmerking */}
            <div className="flex flex-col gap-1.5">
              <label className={labelClass}>Opmerking</label>
              <textarea
                rows={2}
                value={opmerking}
                onChange={(e) => setOpmerking(e.target.value)}
                placeholder="Bijv. bijzondere vorm, extra zorg nodig…"
                className={inputClass}
              />
            </div>
          </>
        )}
      </div>

      {/* Footer — fixed */}
      <div className="flex shrink-0 gap-2 border-t border-zinc-100 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 rounded-lg border border-zinc-200 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50"
        >
          Annuleren
        </button>
        <button
          type="button"
          onClick={handleAdd}
          disabled={!canAdd}
          className="flex-1 rounded-lg bg-zinc-900 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-40 active:scale-[0.98]"
        >
          Toevoegen
        </button>
      </div>
    </div>
  );
}

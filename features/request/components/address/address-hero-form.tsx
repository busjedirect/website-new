"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useRequestStore } from "../../store/request-store";
import type { AddressSuggestion } from "../../types/address.types";
import { AddressAutocompleteInput } from "./address-autocomplete-input";
import { calculateOperationalDistance } from "../../lib/calculate-distance";
import { calculatePrice } from "../../lib/calculate-price";

function suggestionToAddress(s: AddressSuggestion) {
  return {
    fullAddress: s.fullAddress,
    placeName: s.placeName,
    latitude: s.latitude,
    longitude: s.longitude,
    postcode: s.postcode,
    city: s.city,
    mapboxId: s.mapboxId,
  };
}

function ArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-zinc-400" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function ArrowDown() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400" aria-hidden="true">
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="5 12 12 19 19 12" />
    </svg>
  );
}

const ctaBase = [
  "flex shrink-0 items-center justify-center gap-2 rounded-xl font-bold text-white transition active:scale-[0.98]",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7A00]",
  "bg-[#FF7A00] hover:bg-[#E86E00]",
].join(" ");

function CtaContent({ loading }: { loading: boolean }) {
  if (loading) {
    return (
      <>
        <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
        Berekenen…
      </>
    );
  }
  return (
    <>
      Bekijk volgende stap
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </>
  );
}

export function AddressHeroForm() {
  const router = useRouter();
  const setAddresses = useRequestStore((s) => s.setAddresses);
  const setRouteAndPrice = useRequestStore((s) => s.setRouteAndPrice);
  const resetRequest = useRequestStore((s) => s.resetRequest);

  const [from, setFrom] = useState<AddressSuggestion | null>(null);
  const [to, setTo] = useState<AddressSuggestion | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    if (loading) return;
    setError(null);
    setLoading(true);
    try {
      const fromAddr = suggestionToAddress(from!);
      const toAddr = suggestionToAddress(to!);
      const { totalOperationalMeters, segments } =
        await calculateOperationalDistance({ fromAddress: fromAddr, toAddress: toAddr });
      const { totalCents } = calculatePrice({ totalOperationalMeters });
      resetRequest();
      setAddresses(fromAddr, toAddr);
      setRouteAndPrice(totalOperationalMeters, totalCents, segments);
      router.push("/aanvraag/items");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Er is iets misgegaan. Probeer het opnieuw.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>

      {/* ------------------------------------------------------------------ */}
      {/* DESKTOP — labels row, then inputs + arrow + button row             */}
      {/* ------------------------------------------------------------------ */}
      <div className="hidden lg:block">

        {/* Labels */}
        <div className="mb-2 flex gap-3">
          <div className="flex-1">
            <span className="text-[14px] font-semibold text-zinc-900">
              Waar halen we het op?
            </span>
          </div>
          <div className="w-[26px] shrink-0" aria-hidden="true" />
          <div className="flex-1">
            <span className="text-[14px] font-semibold text-zinc-900">
              Waar moet het naartoe?
            </span>
          </div>
          <div className="w-[196px] shrink-0" aria-hidden="true" />
        </div>

        {/* Inputs + arrow + button */}
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <AddressAutocompleteInput
              id="from-address"
              label=""
              placeholder="Vul ophaaladres in"
              value={from}
              onChange={setFrom}
              showError={submitted}
              errorMessage="Kies een ophaaladres uit de lijst."
            />
          </div>
          <ArrowRight />
          <div className="flex-1">
            <AddressAutocompleteInput
              id="to-address"
              label=""
              placeholder="Vul bestemmingsadres in"
              value={to}
              onChange={setTo}
              showError={submitted}
              errorMessage="Kies een afleveradres uit de lijst."
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`${ctaBase} h-[50px] w-[196px] shrink-0 text-[14px] ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            <CtaContent loading={loading} />
          </button>
        </div>

      </div>

      {/* ------------------------------------------------------------------ */}
      {/* MOBILE — stacked: label → input → arrow → label → input → button  */}
      {/* ------------------------------------------------------------------ */}
      <div className="flex flex-col lg:hidden">

        <p className="mb-1.5 text-[14px] font-semibold text-zinc-900">
          Waar halen we het op?
        </p>
        <AddressAutocompleteInput
          id="from-address-m"
          label=""
          placeholder="Vul ophaaladres in"
          value={from}
          onChange={setFrom}
          showError={submitted}
          errorMessage="Kies een ophaaladres uit de lijst."
        />

        <div className="flex justify-center py-3">
          <ArrowDown />
        </div>

        <p className="mb-1.5 text-[14px] font-semibold text-zinc-900">
          Waar moet het naartoe?
        </p>
        <AddressAutocompleteInput
          id="to-address-m"
          label=""
          placeholder="Vul bestemmingsadres in"
          value={to}
          onChange={setTo}
          showError={submitted}
          errorMessage="Kies een afleveradres uit de lijst."
        />

        <button
          type="submit"
          disabled={loading}
          className={`${ctaBase} mt-4 w-full py-4 text-[15px] ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
        >
          <CtaContent loading={loading} />
        </button>

      </div>

      {error && (
        <p className="mt-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </p>
      )}

    </form>
  );
}

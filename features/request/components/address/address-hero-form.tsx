"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useRequestStore } from "../../store/request-store";
import type { AddressSuggestion } from "../../types/address.types";
import { AddressAutocompleteInput } from "./address-autocomplete-input";
import { calculateOperationalDistance } from "../../lib/calculate-distance";
import { calculatePrice } from "../../lib/calculate-price";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

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

  const canSubmit = from !== null && to !== null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    if (!canSubmit || loading) return;

    setError(null);
    setLoading(true);

    try {
      const fromAddr = suggestionToAddress(from);
      const toAddr = suggestionToAddress(to);

      // Bereken operationele route: depot → ophaal → aflever → depot
      const { totalOperationalMeters, segments } =
        await calculateOperationalDistance({
          fromAddress: fromAddr,
          toAddress: toAddr,
        });

      // Prijs op basis van totale operationele afstand
      const { totalCents } = calculatePrice({ totalOperationalMeters });

      // Sla op in store — klant ziet alleen adressen en totaalprijs
      resetRequest();
      setAddresses(fromAddr, toAddr);
      setRouteAndPrice(totalOperationalMeters, totalCents, segments);

      router.push("/aanvraag/items");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Er is iets misgegaan. Probeer het opnieuw."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      <AddressAutocompleteInput
        id="from-address"
        label="Ophaaladres"
        placeholder="Bijv. Damrak 1, Amsterdam"
        value={from}
        onChange={setFrom}
        showError={submitted}
        errorMessage="Kies een ophaaladres uit de lijst."
      />

      <AddressAutocompleteInput
        id="to-address"
        label="Afleveradres"
        placeholder="Bijv. Coolsingel 40, Rotterdam"
        value={to}
        onChange={setTo}
        showError={submitted}
        errorMessage="Kies een afleveradres uit de lijst."
      />

      {error && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={!canSubmit || loading}
        className="mt-2 w-full rounded-lg bg-gray-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {loading ? "Route berekenen…" : "Start je aanvraag"}
      </button>
    </form>
  );
}

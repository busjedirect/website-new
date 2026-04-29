"use client";

import { useState, useRef } from "react";import { useRouter } from "next/navigation";
import { useRequestStore } from "../../store/request-store";
import { TIME_SLOT_MAP } from "../../constants/time-slots";
import { mapRequestPayload } from "../../lib/map-request-payload";
import { submitRequest } from "../../lib/submit-request";
import { ConfirmationSection } from "./confirmation-section";
import { EditableSummaryBlock } from "./editable-summary-block";
import { AgreementCheckboxes } from "./agreement-checkboxes";
import { SubmitRequestButton } from "./submit-request-button";
import { formatPrice, formatDate } from "@/lib/utils/format";
import {
  hasAddresses,
  hasItems,
  hasSchedule,
  hasCustomerDetails,
  isRequestComplete,
} from "../../store/request-selectors";

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

interface ConfirmationViewProps {
  agreedToTerms: boolean;
  onTermsChange: (v: boolean) => void;
  onLoadingChange: (v: boolean) => void;
}

export function ConfirmationView({
  agreedToTerms,
  onTermsChange,
  onLoadingChange,
}: ConfirmationViewProps) {
  const router = useRouter();

  const fromAddress = useRequestStore((s) => s.fromAddress);
  const toAddress = useRequestStore((s) => s.toAddress);
  const items = useRequestStore((s) => s.items);
  const selectedDate = useRequestStore((s) => s.selectedDate);
  const selectedTimeSlot = useRequestStore((s) => s.selectedTimeSlot);
  const priceCents = useRequestStore((s) => s.priceCents);
  const firstName = useRequestStore((s) => s.firstName);
  const lastName = useRequestStore((s) => s.lastName);
  const phone = useRequestStore((s) => s.phone);
  const email = useRequestStore((s) => s.email);
  const setAgreements = useRequestStore((s) => s.setAgreements);
  const setSubmittedReceipt = useRequestStore((s) => s.setSubmittedReceipt);
  const resetRequest = useRequestStore((s) => s.resetRequest);
  const getFullState = useRequestStore.getState;

  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const submittingRef = useRef(false);

  const timeSlot = selectedTimeSlot ? TIME_SLOT_MAP[selectedTimeSlot] : null;
  const totalItems = items.reduce((sum, item) => sum + item.aantal, 0);

  const storeState = useRequestStore.getState();
  const dataComplete = isRequestComplete(storeState);
  const canSubmit = agreedToTerms && dataComplete;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Dubbele-submit guard — zowel state als ref
    if (!canSubmit || loading || submittingRef.current) return;

    submittingRef.current = true;
    setSubmitError(null);
    setLoading(true);
    onLoadingChange(true);
    try {
      setAgreements(agreedToTerms, false);

      const payload = mapRequestPayload({
        ...getFullState(),
        agreedToTerms,
      });

      const receipt = await submitRequest(payload);

      // Sla receipt op vóór reset — succespagina leest hieruit
      setSubmittedReceipt({
        ...receipt,
        fromAddress: fromAddress!,
        toAddress: toAddress!,
        priceCents,
        firstName,
        items,
        selectedDate,
        selectedTimeSlot,
      });

      resetRequest();
      router.push("/aanvraag/succes");
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Er is iets misgegaan. Probeer het opnieuw."
      );
      // Reset ref zodat gebruiker opnieuw kan proberen
      submittingRef.current = false;
    } finally {
      setLoading(false);
      onLoadingChange(false);
    }
  }

  return (
    <form id="confirmation-form" onSubmit={handleSubmit} className="flex flex-col gap-5">

      {/* Adressen */}
      <ConfirmationSection title="Adressen" editHref="/">
        <EditableSummaryBlock
          rows={[
            { label: "Ophaaladres", value: fromAddress?.fullAddress ?? "—" },
            { label: "Afleveradres", value: toAddress?.fullAddress ?? "—" },
          ]}
        />
      </ConfirmationSection>

      {/* Items */}
      <ConfirmationSection title="Items" editHref="/aanvraag/items">
        {items.length === 0 ? (
          <p className="text-sm text-gray-400">Geen items toegevoegd.</p>
        ) : (
          <div className="divide-y divide-gray-100">
            {items.map((item) => {
              const detail = [
                `${item.aantal}×`,
                item.opmerking ? `· ${item.opmerking}` : null,
              ]
                .filter(Boolean)
                .join(" ");

              return (
                <div key={item.id} className="flex items-start justify-between gap-4 py-2.5">
                  <span className="text-sm text-zinc-900">{item.label}</span>
                  <span className="text-right text-xs text-zinc-500">{detail}</span>
                </div>
              );
            })}
            <div className="flex justify-between pt-3">
              <span className="text-sm text-gray-500">Totaal</span>
              <span className="text-sm font-semibold text-gray-900">
                {totalItems === 1 ? "1 item" : `${totalItems} items`}
              </span>
            </div>
          </div>
        )}
      </ConfirmationSection>

      {/* Datum & tijd */}
      <ConfirmationSection title="Datum & Tijd" editHref="/aanvraag/datum-tijd">
        <EditableSummaryBlock
          rows={[
            {
              label: "Datum",
              value: selectedDate ? formatDate(selectedDate) : "—",
            },
            {
              label: "Tijdvak",
              value: timeSlot ? `${timeSlot.label} (${timeSlot.timeRange})` : "—",
            },
          ]}
        />
      </ConfirmationSection>

      {/* Prijs */}
      <ConfirmationSection title="Prijs">
        <EditableSummaryBlock
          rows={[
            {
              label: "Totaalprijs",
              value: priceCents !== null ? formatPrice(priceCents) : "Wordt berekend",
            },
          ]}
        />
      </ConfirmationSection>

      {/* Belangrijke informatie */}
      <ConfirmationSection title="Belangrijke informatie">
        <div className="flex flex-col gap-3">
          {/* Inbegrepen + drempel */}
          <div className="rounded-lg bg-zinc-50 px-4 py-3">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-400">
              Inbegrepen in de prijs
            </p>
            <ul className="flex flex-col gap-1.5">
              <li className="flex items-center gap-2 text-sm text-zinc-700">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                15 minuten laadtijd
              </li>
              <li className="flex items-center gap-2 text-sm text-zinc-700">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                15 minuten lostijd
              </li>
              <li className="flex items-center gap-2 text-sm text-zinc-700">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                Drempel tot drempel transport
              </li>
            </ul>
          </div>

          {/* Extra kosten */}
          <div className="rounded-lg border border-amber-100 bg-amber-50 px-4 py-3">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-amber-600">
              Mogelijke extra kosten
            </p>
            <ul className="flex flex-col gap-1.5">
              <li className="flex items-start gap-2 text-sm text-zinc-700">
                <span className="mt-0.5 shrink-0 text-amber-500">+</span>
                <span>
                  <span className="font-medium">€25 per 20 minuten</span> extra wachttijd als het laden of lossen langer duurt dan 15 minuten
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-700">
                <span className="mt-0.5 shrink-0 text-amber-500">+</span>
                <span>
                  <span className="font-medium">€15 per adres</span> voor adressen in drukke delen van Amsterdam (grachten, smalle straten of moeilijk bereikbare plekken)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </ConfirmationSection>

      {/* Contactgegevens */}
      <ConfirmationSection title="Contactgegevens" editHref="/aanvraag/gegevens">
        <EditableSummaryBlock
          rows={[
            { label: "Naam", value: `${firstName} ${lastName}`.trim() || "—" },
            { label: "Telefoon", value: phone || "—" },
            { label: "E-mail", value: email || "—" },
          ]}
        />
      </ConfirmationSection>

      {/* Akkoordverklaringen */}
      <AgreementCheckboxes
        agreedToTerms={agreedToTerms}
        onTermsChange={onTermsChange}
      />

      {/* Foutmelding */}
      {submitError && (
        <div
          role="alert"
          className="sticky bottom-0 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 shadow-md"
        >
          <p className="font-semibold">Aanvraag niet verstuurd</p>
          <p className="mt-0.5 text-red-600">{submitError}</p>
        </div>
      )}
    </form>
  );
}

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

      {/* Service & voorwaarden */}
      <ConfirmationSection title="Service & voorwaarden">
        <p className="mb-4 text-[13px] text-zinc-500">Dit is inbegrepen in de prijs en belangrijk om te weten.</p>
        <div className="flex flex-col gap-3">

          {/* Inbegrepen */}
          <div className="flex items-start gap-4 rounded-xl bg-green-50 p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <div>
              <p className="mb-1.5 text-[13px] font-bold text-green-700">Inbegrepen in de prijs</p>
              <ul className="flex flex-col gap-1">
                {["15 minuten laadtijd", "15 minuten lostijd", "Drempel-tot-drempeltransport (tot de eerste deur op de begane grond)"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[13px] text-zinc-700">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Let op */}
          <div className="flex items-start gap-4 rounded-xl bg-blue-50 p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </div>
            <div>
              <p className="mb-1.5 text-[13px] font-bold text-blue-700">Let op bij zware items</p>
              <p className="text-[13px] leading-[1.6] text-zinc-600">
                De chauffeur werkt alleen. Bij zware of grote items vragen wij om hulp bij het in- en uitladen.<br />
                Is dit niet mogelijk? Neem vooraf contact met ons op zodat we extra hulp kunnen inplannen (tegen meerprijs).
              </p>
            </div>
          </div>

          {/* Extra kosten */}
          <div className="flex items-start gap-4 rounded-xl bg-amber-50 p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
            </div>
            <div>
              <p className="mb-1.5 text-[13px] font-bold text-amber-700">Mogelijke extra kosten</p>
              <ul className="flex flex-col gap-1.5">
                <li className="flex items-start gap-2 text-[13px] text-zinc-700">
                  <span className="mt-0.5 shrink-0 font-bold text-amber-600">+</span>
                  <span><span className="font-semibold">€25 per 20 minuten</span> extra wachttijd als het laden of lossen langer duurt dan 15 minuten</span>
                </li>
                <li className="flex items-start gap-2 text-[13px] text-zinc-700">
                  <span className="mt-0.5 shrink-0 font-bold text-amber-600">+</span>
                  <span><span className="font-semibold">€15 per adres</span> voor adressen in drukke gebieden (grachten, smalle straten of moeilijk bereikbare plekken)</span>
                </li>
              </ul>
            </div>
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

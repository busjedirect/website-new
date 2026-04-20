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
  agreedToExtraTime: boolean;
  onTermsChange: (v: boolean) => void;
  onExtraTimeChange: (v: boolean) => void;
  onLoadingChange: (v: boolean) => void;
}

export function ConfirmationView({
  agreedToTerms,
  agreedToExtraTime,
  onTermsChange,
  onExtraTimeChange,
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
      setAgreements(agreedToTerms, agreedToExtraTime);

      const payload = mapRequestPayload({
        ...getFullState(),
        agreedToTerms,
        agreedToExtraTime,
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

      {/* Tijdinformatie */}
      <ConfirmationSection title="Tijdinformatie">
        <ul className="flex flex-col gap-1.5">
          {[
            "Inclusief 15 min laden",
            "Inclusief 15 min lossen",
            "Extra tijd: €25 per 15 minuten",
          ].map((line) => (
            <li key={line} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="mt-0.5 text-gray-300">—</span>
              {line}
            </li>
          ))}
        </ul>
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
        agreedToExtraTime={agreedToExtraTime}
        onTermsChange={onTermsChange}
        onExtraTimeChange={onExtraTimeChange}
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

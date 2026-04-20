"use client";

import { useRequestStore } from "@/features/request/store/request-store";
import {
  formattedItemCount,
  currentPriceCents,
} from "@/features/request/store/request-selectors";
import { TIME_SLOT_MAP } from "@/features/request/constants/time-slots";
import { formatPrice, formatDate } from "@/lib/utils/format";

// ---------------------------------------------------------------------------
// Sub-componenten
// ---------------------------------------------------------------------------

interface SummaryRowProps {
  label: string;
  value: string;
  muted?: boolean;
}

function SummaryRow({ label, value, muted = false }: SummaryRowProps) {
  return (
    <div className="flex items-start justify-between gap-4 py-2.5">
      <span className="text-sm text-zinc-400">{label}</span>
      <span className={`text-right text-sm font-medium ${muted ? "text-zinc-300" : "text-zinc-900"}`}>
        {value}
      </span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface RequestSummaryProps {
  title?: string;
  /** Desktop CTA — rendered under the price block */
  cta?: React.ReactNode;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function RequestSummary({ title = "Overzicht", cta }: RequestSummaryProps) {
  const fromAddress = useRequestStore((s) => s.fromAddress);
  const toAddress = useRequestStore((s) => s.toAddress);
  const items = useRequestStore((s) => s.items);
  const selectedDate = useRequestStore((s) => s.selectedDate);
  const selectedTimeSlot = useRequestStore((s) => s.selectedTimeSlot);
  const itemCount = useRequestStore(formattedItemCount);
  const priceCents = useRequestStore(currentPriceCents);

  const timeSlot = selectedTimeSlot ? TIME_SLOT_MAP[selectedTimeSlot] : null;

  return (
    <div className="w-full rounded-xl border border-zinc-200 bg-white">
      {/* Details */}
      <div className="p-5">
        {title && (
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-400">
            {title}
          </p>
        )}

        <div className="divide-y divide-zinc-100">
          <SummaryRow
            label="Ophaaladres"
            value={fromAddress?.placeName ?? fromAddress?.fullAddress ?? "—"}
            muted={!fromAddress}
          />
          <SummaryRow
            label="Afleveradres"
            value={toAddress?.placeName ?? toAddress?.fullAddress ?? "—"}
            muted={!toAddress}
          />

          {/* Items */}
          <div className="py-2.5">
            <div className="flex items-start justify-between gap-4">
              <span className="text-sm text-zinc-400">Items</span>
              <span className={`text-right text-sm font-medium ${itemCount === "—" ? "text-zinc-300" : "text-zinc-900"}`}>
                {itemCount}
              </span>
            </div>
            {items.length > 0 && (
              <ul className="mt-1.5 space-y-0.5">
                {items.map((item) => (
                  <li key={item.id} className="flex justify-between gap-2">
                    <span className="text-xs text-zinc-400">{item.label}</span>
                    <span className="text-xs text-zinc-400">{item.aantal}×</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <SummaryRow
            label="Datum"
            value={selectedDate ? formatDate(selectedDate) : "—"}
            muted={!selectedDate}
          />
          <SummaryRow
            label="Tijdvak"
            value={timeSlot ? `${timeSlot.label} · ${timeSlot.timeRange}` : "—"}
            muted={!timeSlot}
          />
        </div>

        {/* Prijs */}
        <div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-4">
          <div>
            <p className="text-sm font-semibold text-zinc-900">Totaalprijs</p>
            {priceCents !== null && (
              <p className="text-xs text-zinc-400">incl. btw</p>
            )}
          </div>
          <p className="text-xl font-bold text-zinc-900">
            {priceCents !== null ? formatPrice(priceCents) : "—"}
          </p>
        </div>
      </div>

      {/* CTA — optioneel, altijd onderaan de kaart */}
      {cta && (
        <div className="border-t border-zinc-100 p-4">
          {cta}
        </div>
      )}
    </div>
  );
}

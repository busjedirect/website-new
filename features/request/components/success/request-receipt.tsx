import type { Address } from "../../types/address.types";
import type { RequestItem } from "../../types/item.types";
import type { TimeSlotKey } from "../../types/schedule.types";
import { TIME_SLOT_MAP } from "../../constants/time-slots";
import { formatPrice, formatDate } from "@/lib/utils/format";

// ---------------------------------------------------------------------------
// Sub-component
// ---------------------------------------------------------------------------

function ReceiptRow({
  label,
  value,
  bold = false,
}: {
  label: string;
  value: string;
  bold?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-4 py-2.5">
      <span className="text-sm text-gray-500">{label}</span>
      <span
        className={`text-right text-sm ${bold ? "font-semibold text-gray-900" : "font-medium text-gray-900"}`}
      >
        {value}
      </span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface RequestReceiptProps {
  fromAddress: Address;
  toAddress: Address;
  items: RequestItem[];
  selectedDate: string | null;
  selectedTimeSlot: TimeSlotKey | null;
  priceCents: number | null;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function RequestReceipt({
  fromAddress,
  toAddress,
  items,
  selectedDate,
  selectedTimeSlot,
  priceCents,
}: RequestReceiptProps) {
  const timeSlot = selectedTimeSlot ? TIME_SLOT_MAP[selectedTimeSlot] : null;
  const totalItems = items.reduce((sum, i) => sum + i.aantal, 0);

  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-6">
      <h2 className="mb-1 text-xs font-semibold uppercase tracking-widest text-gray-400">
        Jouw aanvraag
      </h2>

      <div className="divide-y divide-gray-100">
        {/* Adressen */}
        <ReceiptRow label="Ophaaladres" value={fromAddress.fullAddress} />
        <ReceiptRow label="Afleveradres" value={toAddress.fullAddress} />

        {/* Items */}
        {items.length > 0 && (
          <div className="py-2.5">
            <div className="flex items-start justify-between gap-4">
              <span className="text-sm text-gray-500">Items</span>
              <span className="text-right text-sm font-medium text-gray-900">
                {totalItems === 1 ? "1 item" : `${totalItems} items`}
              </span>
            </div>
            <ul className="mt-1.5 flex flex-col gap-0.5">
              {items.map((item) => (
                <li key={item.id} className="flex justify-between gap-2">
                  <span className="text-xs text-zinc-400">{item.label}</span>
                  <span className="text-xs text-zinc-400">{item.aantal}×</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Datum & tijdvak */}
        {selectedDate && (
          <ReceiptRow label="Datum" value={formatDate(selectedDate)} />
        )}
        {timeSlot && (
          <ReceiptRow
            label="Tijdvak"
            value={`${timeSlot.label} · ${timeSlot.timeRange}`}
          />
        )}

        {/* Prijs */}
        {priceCents !== null && (
          <div className="flex items-center justify-between pt-3">
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-900">Totaalprijs</span>
              <span className="text-xs text-gray-400">incl. btw</span>
            </div>
            <span className="text-lg font-bold text-gray-900">
              {formatPrice(priceCents)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

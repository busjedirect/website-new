"use client";

import { useRequestStore } from "../../store/request-store";
import { formattedPrice, hasEstimatedItems } from "../../store/request-selectors";

export function PriceBanner() {
  const price = useRequestStore(formattedPrice);
  const estimated = useRequestStore(hasEstimatedItems);

  if (!price) return null;

  return (
    <div className="rounded-lg border border-zinc-200 bg-white px-5 py-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-zinc-500">Totaalprijs</p>
        <div className="flex items-baseline gap-2">
          <p className="text-2xl font-bold text-zinc-900">{price}</p>
          <p className="text-xs text-zinc-400">excl. btw</p>
        </div>
      </div>
      {estimated && (
        <p className="mt-2 text-xs text-amber-600">
          Prijs is een schatting. Afmetingen van één of meer items ontbreken.
        </p>
      )}
    </div>
  );
}

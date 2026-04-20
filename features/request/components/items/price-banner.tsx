"use client";

import { useRequestStore } from "../../store/request-store";
import { formattedPrice } from "../../store/request-selectors";

export function PriceBanner() {
  const price = useRequestStore(formattedPrice);
  if (!price) return null;

  return (
    <div className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white px-5 py-4">
      <p className="text-sm text-zinc-500">Totaalprijs</p>
      <div className="flex items-baseline gap-2">
        <p className="text-2xl font-bold text-zinc-900">{price}</p>
        <p className="text-xs text-zinc-400">incl. btw</p>
      </div>
    </div>
  );
}

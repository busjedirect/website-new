"use client";

import { useState } from "react";
import type { RequestItemInput, ItemDimensions } from "../../types/item.types";
import { QuantitySelector } from "./quantity-selector";
import { DimensionsFields } from "./dimensions-fields";

const inputClass =
  "w-full rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/8";

interface CustomItemFormProps {
  initialNaam?: string;
  onAdd: (input: RequestItemInput) => void;
  onCancel: () => void;
}

export function CustomItemForm({ initialNaam = "", onAdd, onCancel }: CustomItemFormProps) {
  const [naam, setNaam] = useState(initialNaam);
  const [aantal, setAantal] = useState(1);
  const [dimensions, setDimensions] = useState<Partial<ItemDimensions>>({});
  const [opmerking, setOpmerking] = useState("");

  const canSubmit = naam.trim().length >= 2;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    const hasDimensions =
      dimensions.lengthCm !== undefined &&
      dimensions.widthCm !== undefined &&
      dimensions.heightCm !== undefined;
    onAdd({
      category: "dozen", // generic fallback category
      subtype: "custom",
      label: naam.trim(),
      aantal,
      properties: {},
      dimensions: hasDimensions ? (dimensions as ItemDimensions) : undefined,
      opmerking: opmerking.trim() || undefined,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="flex h-full min-h-0 flex-col">
      {/* Header */}
      <div className="flex shrink-0 items-center justify-between border-b border-zinc-100 pb-4">
        <h3 className="text-base font-semibold text-zinc-900">Eigen item</h3>
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

      <div className="flex min-h-0 flex-1 flex-col gap-5 overflow-y-auto py-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="custom-naam" className="text-xs font-medium uppercase tracking-wide text-zinc-400">
            Naam <span className="text-zinc-300">*</span>
          </label>
          <input
            id="custom-naam"
            type="text"
            value={naam}
            onChange={(e) => setNaam(e.target.value)}
            placeholder="Bijv. pianokruk, aquarium…"
            autoFocus
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-xs font-medium uppercase tracking-wide text-zinc-400">Aantal</span>
          <QuantitySelector value={aantal} onChange={setAantal} />
        </div>

        <DimensionsFields value={dimensions} onChange={setDimensions} />

        <div className="flex flex-col gap-1.5">
          <label htmlFor="custom-opmerking" className="text-xs font-medium uppercase tracking-wide text-zinc-400">
            Opmerking
          </label>
          <textarea
            id="custom-opmerking"
            rows={2}
            value={opmerking}
            onChange={(e) => setOpmerking(e.target.value)}
            placeholder="Bijv. breekbaar, demontage nodig…"
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex shrink-0 gap-2 border-t border-zinc-100 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 rounded-lg border border-zinc-200 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50"
        >
          Annuleren
        </button>
        <button
          type="submit"
          disabled={!canSubmit}
          className="flex-1 rounded-lg bg-zinc-900 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-40 active:scale-[0.98]"
        >
          Toevoegen
        </button>
      </div>
    </form>
  );
}

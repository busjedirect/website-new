"use client";

import type { TimeSlotOption } from "../../types/schedule.types";

interface TimeSlotCardProps {
  slot: TimeSlotOption;
  selected: boolean;
  onSelect: (key: TimeSlotOption["key"]) => void;
}

export function TimeSlotCard({ slot, selected, onSelect }: TimeSlotCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(slot.key)}
      aria-pressed={selected}
      className={[
        "flex w-full flex-col items-start rounded-lg border px-4 py-3.5 text-left transition-all duration-150",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900",
        selected
          ? "border-zinc-900 bg-zinc-900"
          : "border-zinc-200 bg-white hover:border-zinc-400",
      ].join(" ")}
    >
      <span className={`text-sm font-semibold ${selected ? "text-white" : "text-zinc-900"}`}>
        {slot.label}
      </span>
      <span className={`mt-0.5 text-xs ${selected ? "text-zinc-400" : "text-zinc-400"}`}>
        {slot.timeRange}
      </span>
    </button>
  );
}

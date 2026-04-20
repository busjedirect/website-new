"use client";

import { TIME_SLOTS } from "../../constants/time-slots";
import type { TimeSlotKey } from "../../types/schedule.types";
import { TimeSlotCard } from "./time-slot-card";
import { TimeInfoNotice } from "./time-info-notice";

interface TimeSlotSelectorProps {
  selected: TimeSlotKey | null;
  onSelect: (key: TimeSlotKey) => void;
}

export function TimeSlotSelector({ selected, onSelect }: TimeSlotSelectorProps) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5">
      <h2 className="mb-4 text-sm font-semibold text-zinc-900">
        Kies een tijdvak
      </h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {TIME_SLOTS.map((slot) => (
          <TimeSlotCard
            key={slot.key}
            slot={slot}
            selected={selected === slot.key}
            onSelect={onSelect}
          />
        ))}
      </div>

      <div className="mt-4">
        <TimeInfoNotice />
      </div>
    </div>
  );
}

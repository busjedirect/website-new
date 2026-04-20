"use client";

import { useRequestStore } from "../../store/request-store";
import type { TimeSlotKey } from "../../types/schedule.types";
import { DatePickerCalendar } from "./date-picker-calendar";
import { TimeSlotSelector } from "./time-slot-selector";

export function ScheduleSelector() {
  const selectedDate = useRequestStore((s) => s.selectedDate);
  const selectedTimeSlot = useRequestStore((s) => s.selectedTimeSlot);
  const setSchedule = useRequestStore((s) => s.setSchedule);

  function handleDateSelect(iso: string) {
    setSchedule(iso, selectedTimeSlot ?? "ochtend");
  }

  function handleSlotSelect(key: TimeSlotKey) {
    if (!selectedDate) return;
    setSchedule(selectedDate, key);
  }

  return (
    <div className="flex flex-col gap-4">
      <DatePickerCalendar selected={selectedDate} onSelect={handleDateSelect} />

      {selectedDate ? (
        <TimeSlotSelector selected={selectedTimeSlot} onSelect={handleSlotSelect} />
      ) : (
        <div className="rounded-xl border border-zinc-200 bg-white p-6 text-center text-sm text-zinc-400">
          Kies eerst een datum om een tijdvak te kiezen.
        </div>
      )}
    </div>
  );
}

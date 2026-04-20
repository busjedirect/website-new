import type { TimeSlotOption } from "../types/schedule.types";

export const TIME_SLOTS: TimeSlotOption[] = [
  {
    key: "ochtend",
    label: "Ochtend",
    timeRange: "08:00 – 12:00",
    available: true,
  },
  {
    key: "middag",
    label: "Middag",
    timeRange: "12:00 – 17:00",
    available: true,
  },
  {
    key: "avond",
    label: "Avond",
    timeRange: "17:00 – 21:00",
    available: true,
  },
];

/** Opzoeken van een tijdslot op key, handig in samenvattingen en API-payload */
export const TIME_SLOT_MAP = Object.fromEntries(
  TIME_SLOTS.map((slot) => [slot.key, slot])
) as Record<TimeSlotOption["key"], TimeSlotOption>;

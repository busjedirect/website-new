export type TimeSlotKey = "ochtend" | "middag" | "avond";

export interface TimeSlotOption {
  key: TimeSlotKey;
  label: string;
  /** Weergavetijd, bijv. "08:00 – 12:00" */
  timeRange: string;
  available: boolean;
}

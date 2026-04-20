"use client";

import { useState } from "react";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const DAYS = ["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"];

const MONTHS = [
  "Januari", "Februari", "Maart", "April", "Mei", "Juni",
  "Juli", "Augustus", "September", "Oktober", "November", "December",
];

/** ISO 8601 datumstring zonder tijdzone-offset: "2026-05-10" */
function toIso(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function getToday(): Date {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

/** Geeft de maandag van de week terug die de eerste dag van de maand bevat */
function firstCellDate(year: number, month: number): Date {
  const first = new Date(year, month, 1);
  // getDay(): 0=zo, 1=ma … 6=za → omzetten naar ma=0 … zo=6
  const dow = (first.getDay() + 6) % 7;
  const cell = new Date(first);
  cell.setDate(1 - dow);
  return cell;
}

/** Bouw een 6×7 grid van datums voor de gegeven maand */
function buildGrid(year: number, month: number): Date[] {
  const start = firstCellDate(year, month);
  return Array.from({ length: 42 }, (_, i) => {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    return d;
  });
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface DatePickerCalendarProps {
  selected: string | null;
  onSelect: (iso: string) => void;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function DatePickerCalendar({ selected, onSelect }: DatePickerCalendarProps) {
  // Stabiel buiten render — herberekend alleen bij mount
  const [now] = useState(() => getToday());
  const [viewYear, setViewYear] = useState(now.getFullYear());
  const [viewMonth, setViewMonth] = useState(now.getMonth());

  const grid = buildGrid(viewYear, viewMonth);

  function prevMonth() {
    if (viewMonth === 0) {
      setViewYear((y) => y - 1);
      setViewMonth(11);
    } else {
      setViewMonth((m) => m - 1);
    }
  }

  function nextMonth() {
    if (viewMonth === 11) {
      setViewYear((y) => y + 1);
      setViewMonth(0);
    } else {
      setViewMonth((m) => m + 1);
    }
  }

  // Vooruit navigeren mag maximaal 6 maanden
  const maxDate = new Date(now);
  maxDate.setMonth(maxDate.getMonth() + 6);

  const canGoPrev =
    viewYear > now.getFullYear() ||
    (viewYear === now.getFullYear() && viewMonth > now.getMonth());

  const canGoNext =
    new Date(viewYear, viewMonth + 1, 1) <= maxDate;

  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5">
      <h2 className="mb-4 text-sm font-semibold text-zinc-900">
        Kies een datum
      </h2>

      {/* Maandnavigatie */}
      <div className="mb-4 flex items-center justify-between">
        <button
          type="button"
          onClick={prevMonth}
          disabled={!canGoPrev}
          aria-label="Vorige maand"
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 text-zinc-500 transition hover:border-zinc-400 disabled:cursor-not-allowed disabled:opacity-30"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <span className="text-sm font-semibold text-zinc-900">
          {MONTHS[viewMonth]} {viewYear}
        </span>

        <button
          type="button"
          onClick={nextMonth}
          disabled={!canGoNext}
          aria-label="Volgende maand"
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 text-zinc-500 transition hover:border-zinc-400 disabled:cursor-not-allowed disabled:opacity-30"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Dag-headers */}
      <div className="mb-1 grid grid-cols-7 text-center">
        {DAYS.map((d) => (
          <span key={d} className="text-xs font-medium text-zinc-400">
            {d}
          </span>
        ))}
      </div>

      {/* Dag-grid */}
      <div className="grid grid-cols-7 gap-y-1">
        {grid.map((date) => {
          const iso = toIso(date);
          const isCurrentMonth = date.getMonth() === viewMonth;
          const isPast = date < now;
          const isSelected = iso === selected;
          const isToday = iso === toIso(now);
          const isDisabled = isPast;

          return (
            <button
              key={iso}
              type="button"
              disabled={isDisabled}
              onClick={() => !isDisabled && onSelect(iso)}
              aria-label={iso}
              aria-pressed={isSelected}
              className={[
                "mx-auto flex h-9 w-9 items-center justify-center rounded-lg text-sm transition",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-zinc-900",
                isDisabled
                  ? "cursor-not-allowed text-zinc-200"
                  : isSelected
                  ? "bg-zinc-900 font-semibold text-white"
                  : isToday
                  ? "border border-zinc-400 font-semibold text-zinc-900 hover:bg-zinc-100"
                  : isCurrentMonth
                  ? "text-zinc-700 hover:bg-zinc-100"
                  : "text-zinc-300",
              ].join(" ")}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

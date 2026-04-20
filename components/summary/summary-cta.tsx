"use client";

import Link from "next/link";

// ---------------------------------------------------------------------------
// Gedeelde CTA-knop voor de summary column op desktop
// ---------------------------------------------------------------------------

interface SummaryCTAProps {
  href: string;
  label: string;
  disabled?: boolean;
  hint?: string;
}

export function SummaryCTA({ href, label, disabled = false, hint }: SummaryCTAProps) {
  return (
    <div className="flex flex-col gap-2">
      <Link
        href={disabled ? "#" : href}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        className={[
          "block w-full rounded-lg px-4 py-3 text-center text-sm font-semibold transition",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900",
          disabled
            ? "pointer-events-none bg-zinc-100 text-zinc-400"
            : "bg-zinc-900 text-white hover:bg-zinc-700 active:scale-[0.98]",
        ].join(" ")}
      >
        {label}
      </Link>
      {hint && (
        <p className="text-center text-xs text-zinc-400">{hint}</p>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Submit-variant voor de bevestigingsstap (heeft loading state)
// ---------------------------------------------------------------------------

interface SummarySubmitCTAProps {
  disabled: boolean;
  loading: boolean;
  form?: string;
}

export function SummarySubmitCTA({ disabled, loading, form }: SummarySubmitCTAProps) {
  return (
    <div className="flex flex-col gap-2">
      <button
        type="submit"
        form={form}
        disabled={disabled || loading}
        aria-busy={loading}
        className="w-full rounded-lg bg-zinc-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-40 active:scale-[0.98]"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <span
              aria-hidden="true"
              className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
            />
            Versturen…
          </span>
        ) : (
          "Bevestig aanvraag"
        )}
      </button>
      {!loading && (
        <p className="text-center text-xs text-zinc-400">
          Je zit nog nergens aan vast.
        </p>
      )}
    </div>
  );
}

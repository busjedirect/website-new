"use client";

interface SubmitRequestButtonProps {
  disabled: boolean;
  loading: boolean;
}

export function SubmitRequestButton({ disabled, loading }: SubmitRequestButtonProps) {
  return (
    <div className="flex flex-col gap-3">
      <button
        type="submit"
        disabled={disabled || loading}
        aria-busy={loading}
        className="w-full rounded-lg bg-zinc-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <span
              aria-hidden="true"
              className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
            />
            Aanvraag versturen…
          </span>
        ) : (
          "Bevestig aanvraag"
        )}
      </button>
      {!loading && (
        <p className="text-center text-xs text-zinc-400">
          Je zit nog nergens aan vast. We nemen eerst contact met je op.
        </p>
      )}
    </div>
  );
}

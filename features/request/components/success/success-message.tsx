interface SuccessMessageProps {
  firstName?: string;
  referenceNumber?: string;
}

export function SuccessMessage({ firstName, referenceNumber }: SuccessMessageProps) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      {/* Check icon — geen emoji */}
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-900">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M5 13L9 17L19 7"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
          Aanvraag ontvangen
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-zinc-500">
          {firstName ? `Bedankt, ${firstName}. ` : ""}
          We nemen zo snel mogelijk contact op om de aanvraag te bevestigen.
        </p>
      </div>

      {referenceNumber && (
        <div className="rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2.5">
          <p className="text-xs text-zinc-400">Referentienummer</p>
          <p className="mt-0.5 font-mono text-sm font-semibold text-zinc-900">
            {referenceNumber}
          </p>
        </div>
      )}
    </div>
  );
}

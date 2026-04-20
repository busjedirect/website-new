const STEPS = [
  "We controleren je aanvraag en beschikbaarheid.",
  "Je ontvangt een bevestiging per e-mail of telefoon.",
  "Op de afgesproken dag staat ons team voor je klaar.",
];

export function NextStepsCard() {
  return (
    <div className="w-full rounded-xl border border-zinc-200 bg-white p-5">
      <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-zinc-400">
        Wat gebeurt er nu?
      </p>
      <ol className="flex flex-col gap-4">
        {STEPS.map((step, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-xs font-semibold text-zinc-600">
              {i + 1}
            </span>
            <span className="text-sm leading-relaxed text-zinc-600">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

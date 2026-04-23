const TRIGGERS = [
  "Iets gekocht op Marktplaats?",
  "Geen vervoer?",
  "Geen zin in gedoe?",
  "Geen busje beschikbaar?",
];

export function ProblemSection() {
  return (
    <section className="border-b border-zinc-100 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-20">

          {/* Recognition triggers */}
          <div className="flex flex-wrap gap-3">
            {TRIGGERS.map((t) => (
              <span
                key={t}
                className="rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm font-medium text-zinc-700"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Solution */}
          <div className="shrink-0 lg:max-w-xs">
            <p className="text-2xl font-extrabold leading-snug tracking-tight text-zinc-900 sm:text-3xl">
              Wij regelen het voor je.{" "}
              <span className="text-zinc-400">Snel en simpel.</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

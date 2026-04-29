// ---------------------------------------------------------------------------
// Icons
// ---------------------------------------------------------------------------

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFBABA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const STEPS = [
  {
    number: "1",
    title: "Aanvraag",
    description: "Vul eenvoudig de ophaal- en afleverlocatie in en selecteer je items via onze website.",
  },
  {
    number: "2",
    title: "Prijs berekenen",
    description: "Je ziet direct een duidelijke prijs op basis van afstand en items. Geen verrassingen achteraf.",
  },
  {
    number: "3",
    title: "Ophalen",
    description: "We halen je spullen op het afgesproken moment op. In veel gevallen al binnen 24–48 uur, soms dezelfde dag.",
  },
  {
    number: "4",
    title: "Bezorging",
    description: "We leveren netjes af bij de buitendeur op de begane grond. Betaling vindt plaats bij aflevering.",
  },
];

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

export function DienstenHoeHetWerkt() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">

        <div className="mb-10 text-center">
          <h2 className="text-[26px] font-extrabold tracking-tight text-[#111111] sm:text-[32px]">
            Zo werkt het
          </h2>
          <p className="mt-3 text-[14px] text-zinc-500">
            Binnen 4 simpele stappen geregeld.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">

              {/* Arrow between steps — desktop only */}
              {i < STEPS.length - 1 && (
                <div className="absolute -right-3 top-6 hidden lg:block" aria-hidden="true">
                  <ArrowRight />
                </div>
              )}

              {/* Number circle */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF0F0] ring-4 ring-white">
                <span className="text-[18px] font-extrabold text-[#E31B1B]">{step.number}</span>
              </div>

              <h3 className="mt-4 text-[15px] font-bold text-[#111111]">{step.title}</h3>
              <p className="mt-1.5 text-[13px] leading-[1.6] text-zinc-500">{step.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

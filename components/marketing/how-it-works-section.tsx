// ---------------------------------------------------------------------------
// Icons — 20px line-art, orange stroke
// ---------------------------------------------------------------------------

function RouteIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2C8.69 2 6 4.69 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.31-2.69-6-6-6z" />
      <circle cx="12" cy="8" r="2" />
    </svg>
  );
}

function PriceIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="18" rx="2" />
      <path d="M2 9h20M8 3v6" />
      <path d="M12 13v4M10 15h4" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const STEPS = [
  {
    number: "1",
    icon: <RouteIcon />,
    title: "Kies je route",
    description: "Vul je ophaaladres en bestemming in.",
  },
  {
    number: "2",
    icon: <PriceIcon />,
    title: "Ontvang prijsindicatie",
    description: "Je ziet direct de volgende stap of een prijsindicatie.",
  },
  {
    number: "3",
    icon: <CalendarIcon />,
    title: "Plan en vervoer",
    description: "Kies een moment dat jou uitkomt en wij regelen de rest.",
  },
];

// ---------------------------------------------------------------------------
// Step card
// ---------------------------------------------------------------------------

function StepCard({
  number,
  icon,
  title,
  description,
}: typeof STEPS[0]) {
  return (
    <div className="flex flex-col items-start">
      {/* Number circle + icon circle stacked */}
      <div className="relative mb-5">
        {/* Large number circle */}
        <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#FF7A00]/20 bg-[#FFF3E8]">
          <span className="text-[22px] font-extrabold leading-none text-[#FF7A00]">
            {number}
          </span>
        </div>
        {/* Small icon circle — bottom-right overlap */}
        <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full border border-zinc-100 bg-white shadow-sm">
          {icon}
        </div>
      </div>

      <h3 className="text-[15px] font-bold text-[#111111]">{title}</h3>
      <p className="mt-1.5 text-[13px] leading-relaxed text-zinc-500">{description}</p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

export function HowItWorksSection() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-[26px] font-extrabold tracking-tight text-[#111111] sm:text-[30px]">
            Zo werkt het
          </h2>
          <p className="mt-2 text-[14px] text-zinc-500">
            In 3 eenvoudige stappen van A naar B.
          </p>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Desktop: 3 steps with dashed orange connector line between them  */}
        {/* ---------------------------------------------------------------- */}
        <div className="hidden lg:block">
          {/* Connector line — sits behind the step cards */}
          <div className="relative">
            {/* The dashed line runs horizontally through the center of the number circles */}
            <div
              className="absolute left-[calc(14.28%+28px)] right-[calc(14.28%+28px)] top-7"
              aria-hidden="true"
              style={{
                borderTop: "2px dashed #FFCBA0",
              }}
            />

            {/* Steps */}
            <div className="relative grid grid-cols-3 gap-10">
              {STEPS.map((step) => (
                <StepCard key={step.number} {...step} />
              ))}
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Mobile: vertical stack with simple down arrow between steps      */}
        {/* ---------------------------------------------------------------- */}
        <div className="flex flex-col gap-0 lg:hidden">
          {STEPS.map((step, i) => (
            <div key={step.number}>
              <div className="flex items-start gap-5 py-5">
                {/* Number + icon */}
                <div className="relative shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#FF7A00]/20 bg-[#FFF3E8]">
                    <span className="text-[20px] font-extrabold leading-none text-[#FF7A00]">
                      {step.number}
                    </span>
                  </div>
                  <div className="absolute -bottom-1.5 -right-1.5 flex h-7 w-7 items-center justify-center rounded-full border border-zinc-100 bg-white shadow-sm">
                    {step.icon}
                  </div>
                </div>

                {/* Text */}
                <div className="pt-1">
                  <h3 className="text-[15px] font-bold text-[#111111]">{step.title}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-zinc-500">{step.description}</p>
                </div>
              </div>

              {/* Down arrow between steps */}
              {i < STEPS.length - 1 && (
                <div className="flex justify-start pl-6" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFCBA0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <polyline points="5 12 12 19 19 12" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

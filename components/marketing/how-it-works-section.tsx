import Image from "next/image";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const STEPS = [
  {
    number: "1",
    image: "/Zo Werkt Het/ophaal- afleveradres.png",
    imageAlt: "Ophaal- en afleveradres invullen",
    title: "Vul je adressen in",
    description: "Geef aan waar we je spullen ophalen en bezorgen.",
  },
  {
    number: "2",
    image: "/Zo Werkt Het/selecteer je spullen.png",
    imageAlt: "Selecteer je spullen",
    title: "Selecteer je spullen",
    description: "Kies welke meubels of items je wilt laten vervoeren.",
  },
  {
    number: "3",
    image: "/Zo Werkt Het/dag:datum.png",
    imageAlt: "Kies een datum en tijdvak",
    title: "Kies datum & tijdvak",
    description: "Selecteer een moment dat jou uitkomt voor het transport.",
  },
  {
    number: "4",
    image: "/Zo Werkt Het/Transport aangevraagd.png",
    imageAlt: "Verstuur je aanvraag",
    title: "Verstuur je aanvraag",
    description: "Wij bevestigen direct en regelen de rest voor je.",
  },
];

// ---------------------------------------------------------------------------
// Animated step card
// ---------------------------------------------------------------------------

function StepCard({
  number,
  image,
  imageAlt,
  title,
  description,
}: typeof STEPS[0]) {
  return (
    <div className="group relative flex flex-col rounded-2xl border border-zinc-100 bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md">
      {/* Image */}
      <div className="relative h-44 w-full overflow-hidden rounded-t-2xl sm:h-48">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>

      {/* Number badge — overlapping image bottom */}
      <div className="absolute left-1/2 top-[168px] -translate-x-1/2 sm:top-[184px]">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-zinc-100">
          <span className="text-[18px] font-extrabold leading-none text-[#FF7A00]">
            {number}
          </span>
        </div>
      </div>

      {/* Text content */}
      <div className="flex flex-col px-5 pb-6 pt-10">
        <h3 className="text-[15px] font-bold text-[#111111]">{title}</h3>
        <p className="mt-1.5 text-[13px] leading-relaxed text-zinc-500">
          {description}
        </p>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

export function HowItWorksSection() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">

        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#FF7A00]">
            Zo werkt het
          </p>
          <h2 className="text-[26px] font-extrabold tracking-tight text-[#111111] sm:text-[32px]">
            Transport regelen in 4 eenvoudige stappen
          </h2>
          <p className="mt-3 text-[14px] text-zinc-500">
            Van meubels tot complete verhuizingen. Geregeld in een paar minuten.
          </p>
        </div>

        {/* Cards grid */}
        <div className="relative">

          {/* Dotted connector line — desktop only */}
          <div
            className="absolute inset-x-[12.5%] top-[88px] hidden lg:block"
            aria-hidden="true"
            style={{ borderTop: "2px dashed #FFD4A8" }}
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <StepCard key={step.number} {...step} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

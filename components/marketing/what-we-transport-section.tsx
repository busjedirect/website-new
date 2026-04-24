import Link from "next/link";
import Image from "next/image";

// ---------------------------------------------------------------------------
// Icons
// ---------------------------------------------------------------------------

function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1" y="7" width="15" height="11" rx="1.5" />
      <path d="M16 10h4l3 4v4h-7V10z" />
      <circle cx="5.5" cy="18.5" r="1.5" />
      <circle cx="18.5" cy="18.5" r="1.5" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Category data — 6 cards per reference
// ---------------------------------------------------------------------------

const CATEGORIES = [
  {
    label: "Banken",
    description: "Wij vervoeren banken veilig en zonder beschadigingen.",
    image: "/Wat Vervoeren Wij/Banken.png",
    href: "/diensten",
  },
  {
    label: "Kasten",
    description: "Van kleine kasten tot grote garderobekasten, wij regelen het.",
    image: "/Wat Vervoeren Wij/Kasten.png",
    href: "/diensten",
  },
  {
    label: "Witgoed",
    description: "Wasmachines, koelkasten, drogers en meer. Wij vervoeren het zorgvuldig.",
    image: "/Wat Vervoeren Wij/Witgoed.png",
    href: "/diensten",
  },
  {
    label: "Boxsprings & bedden",
    description: "Snel en veilig transport van bedden en boxsprings.",
    image: "/Wat Vervoeren Wij/Matrassen.png",
    href: "/diensten",
  },
];

// ---------------------------------------------------------------------------
// Category card
// ---------------------------------------------------------------------------

function CategoryCard({
  label,
  description,
  image,
  href,
}: (typeof CATEGORIES)[0]) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-[0_1px_4px_rgba(0,0,0,0.05)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(0,0,0,0.09)]"
    >
      {/* Image */}
      <div className="relative h-[160px] w-full overflow-hidden">
        <Image
          src={image}
          alt={label}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 20vw"
        />
        {/* Icon overlay — bottom-left */}
        <div className="absolute bottom-3 left-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-sm">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="1" y="7" width="15" height="11" rx="1.5" />
            <path d="M16 10h4l3 4v4h-7V10z" />
            <circle cx="5.5" cy="18.5" r="1.5" />
            <circle cx="18.5" cy="18.5" r="1.5" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-[14px] font-bold text-[#111111]">{label}</h3>
        <p className="mt-1 flex-1 text-[12.5px] leading-[1.6] text-zinc-400">{description}</p>
        <span className="mt-3 inline-flex items-center gap-1 text-[12.5px] font-semibold text-[#FF7A00] transition-all group-hover:gap-2">
          <ArrowRight />
        </span>
      </div>
    </Link>
  );
}

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

export function WhatWeTransportSection() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-8">

        {/* ── Top: text left + 4 cards right ── */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-12">

          {/* Left: text block */}
          <div className="lg:w-[380px] lg:shrink-0">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-[#FF7A00]">
              Wat we vervoeren
            </p>
            <h2 className="text-[28px] font-extrabold leading-[1.15] tracking-tight text-[#111111] sm:text-[34px]">
              Van meubels en witgoed tot complete inboedels
            </h2>
            <p className="mt-4 text-[15px] leading-[1.7] text-zinc-500">
              Wij vervoeren dagelijks meubels, witgoed en andere grote spullen voor particulieren en kleine verhuizingen. Van banken en kasten tot wasmachines en verhuisdozen. Ook voor complete inboedels kun je bij ons terecht.
            </p>
            <Link
              href="/diensten"
              className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#FF7A00] transition hover:text-[#E86E00]"
            >
              Bekijk alles wat we vervoeren
              <ArrowRight />
            </Link>
          </div>

          {/* Right: 4 cards in a single row */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 h-full">
              {CATEGORIES.map((cat) => (
                <CategoryCard key={cat.label} {...cat} />
              ))}
            </div>
          </div>

        </div>

        {/* ── Bottom CTA block ── */}
        <div className="mt-10 flex flex-col items-start gap-5 rounded-2xl bg-[#F8F9FA] px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF3E8]">
              <TruckIcon />
            </div>
            <div>
              <p className="text-[15px] font-bold text-[#111111]">Groot of klein, wij vervoeren het.</p>
              <p className="text-[13px] text-zinc-400">Of het nu gaat om één bank of een volledige inboedel, wij zorgen voor een snelle, veilige en zorgvuldige levering.</p>
            </div>
          </div>
          <Link
            href="/diensten"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#FF7A00] px-6 py-3 text-[14px] font-bold text-white transition hover:bg-[#E86E00] active:scale-[0.98] sm:w-auto w-full justify-center"
          >
            Bekijk alles wat we vervoeren
            <ArrowRight />
          </Link>
        </div>

      </div>
    </section>
  );
}

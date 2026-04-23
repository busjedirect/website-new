import Link from "next/link";
import Image from "next/image";

const CATEGORIES = [
  {
    label: "Banken",
    image: "/Wat Vervoeren Wij/Banken.png",
  },
  {
    label: "Kasten",
    image: "/Wat Vervoeren Wij/Kasten.png",
  },
  {
    label: "Witgoed",
    image: "/Wat Vervoeren Wij/Witgoed.png",
  },
  {
    label: "Boxspring",
    image: "/Wat Vervoeren Wij/Matrassen.png",
  },
  {
    label: "Dozen",
    image: "/Wat Vervoeren Wij/Dozen.png",
  },
  {
    label: "Fietsen",
    image: "/Wat Vervoeren Wij/Fietsen.png",
  },
  {
    label: "Scooters",
    image: "/Wat Vervoeren Wij/Scooters.png",
  },
  {
    label: "Bouwmaterialen",
    image: "/Wat Vervoeren Wij/Bouwmaterialen.png",
  },
  {
    label: "Koelkast",
    image: "/Wat Vervoeren Wij/Koelkast.png",
  },
];

function CategoryCard({ label, image }: { label: string; image: string }) {
  return (
    <div className="relative h-[200px] w-[160px] shrink-0 overflow-hidden rounded-2xl shadow-sm">
      <Image
        src={image}
        alt={label}
        fill
        className="object-cover transition-transform duration-500 hover:scale-105"
        sizes="160px"
      />
      {/* Dark gradient overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)",
        }}
      />
      {/* Label */}
      <span className="absolute bottom-3 left-3 text-[13.5px] font-semibold text-white">
        {label}
      </span>
    </div>
  );
}

export function WhatWeTransportSection() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Two-column layout: text left, cards right */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">

          {/* ── Left: text block ── */}
          <div className="shrink-0 lg:w-[260px]">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-[#FF7A00]">
              Wat we vervoeren
            </p>
            <h2 className="text-[28px] font-extrabold leading-[1.15] tracking-tight text-[#111111] sm:text-[32px]">
              Van meubels tot
              <br />
              bouwmaterialen
            </h2>
            <p className="mt-4 text-[15px] leading-[1.65] text-zinc-500">
              Wat het ook is, wij vervoeren
              het met zorg.
            </p>
            <Link
              href="/diensten"
              className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#FF7A00] transition hover:text-[#E86E00]"
            >
              Bekijk alles wat we vervoeren
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>

          {/* ── Right: horizontal scrollable card row ── */}
          <div className="min-w-0 flex-1">
            <div
              className="hide-scrollbar flex gap-3 overflow-x-auto pb-2"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {CATEGORIES.map((cat) => (
                <CategoryCard key={cat.label} label={cat.label} image={cat.image} />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

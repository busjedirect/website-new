import Link from "next/link";
import { LOCATIES } from "@/lib/locaties";

function ArrowRightIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function LocationsSection() {
  return (
    <section className="bg-[#F5F6F7] py-14 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">

          {/* Left */}
          <div className="lg:w-[340px] lg:shrink-0">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-[#E31B1B]">
              Werkgebied
            </p>
            <h2 className="text-[28px] font-extrabold leading-[1.15] tracking-tight text-[#111111] sm:text-[34px]">
              Actief in Amsterdam en omgeving
            </h2>
            <p className="mt-4 text-[14px] leading-[1.7] text-zinc-500">
              Ons depot staat in Diemen. Wij zijn snel bij je in Amsterdam, Haarlem, Almere, Utrecht en alle omliggende plaatsen.
            </p>
            <Link
              href="/locaties"
              className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#E31B1B] transition hover:text-[#C91818]"
            >
              Bekijk alle locaties <ArrowRightIcon />
            </Link>
          </div>

          {/* Cities grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
              {LOCATIES.map((locatie) => (
                <Link
                  key={locatie.slug}
                  href={`/locaties/${locatie.slug}`}
                  className="group flex items-center justify-between rounded-xl border border-zinc-200 bg-white px-4 py-3 transition hover:border-[#E31B1B]/30 hover:shadow-sm"
                >
                  <span className="text-[13.5px] font-medium text-[#111111] group-hover:text-[#E31B1B]">
                    {locatie.name}
                  </span>
                  <span className="text-zinc-300 transition group-hover:text-[#E31B1B]">
                    <ArrowRightIcon />
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

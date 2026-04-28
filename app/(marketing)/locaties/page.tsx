import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { LOCATIES } from "@/lib/locaties";

export const metadata: Metadata = {
  title: "Werkgebied",
  description:
    "BusjeDirect rijdt vanuit Diemen door heel Nederland. Actief in Amsterdam, Haarlem, Almere, Utrecht en omgeving. Bekijk alle locaties.",
  alternates: {
    canonical: "/locaties",
  },
};

function ArrowRightIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2C8.69 2 6 4.69 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.31-2.69-6-6-6z" />
      <circle cx="12" cy="8" r="2" />
    </svg>
  );
}

export default function LocatiesPage() {
  // Group by regio
  const regios = Array.from(new Set(LOCATIES.map((l) => l.regio)));

  return (
    <>
      <main>
        {/* Hero */}
        <section className="bg-[#F5F6F7] py-14 sm:py-20">
          <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#FF7A00]">
              Werkgebied
            </p>
            <h1 className="text-[32px] font-extrabold leading-[1.1] tracking-tight text-[#111111] sm:text-[44px]">
              Transport in jouw regio
            </h1>
            <p className="mt-5 max-w-[600px] text-[15px] leading-[1.75] text-zinc-500">
              BusjeDirect is actief in Amsterdam en de directe omgeving. Ons depot staat in Diemen, waardoor we snel bij je zijn. Bekijk hieronder alle locaties waar wij transport verzorgen.
            </p>
          </div>
        </section>

        {/* Locaties per regio */}
        <section className="bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
            <div className="flex flex-col gap-12">
              {regios.map((regio) => {
                const steden = LOCATIES.filter((l) => l.regio === regio);
                return (
                  <div key={regio}>
                    <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-400">
                      {regio}
                    </p>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {steden.map((locatie) => (
                        <Link
                          key={locatie.slug}
                          href={`/locaties/${locatie.slug}`}
                          className="group flex items-start gap-4 rounded-2xl border border-zinc-100 bg-[#F5F6F7] p-5 transition hover:border-[#FF7A00]/30 hover:bg-white hover:shadow-md"
                        >
                          <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFF3E8]">
                            <MapPinIcon />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[15px] font-bold text-[#111111] group-hover:text-[#FF7A00]">
                              {locatie.name}
                            </p>
                            <p className="mt-1 text-[12.5px] leading-[1.6] text-zinc-400">
                              {locatie.description}
                            </p>
                          </div>
                          <span className="mt-1 shrink-0 text-zinc-300 transition group-hover:text-[#FF7A00]">
                            <ArrowRightIcon />
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#F5F6F7] py-14 sm:py-16">
          <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
            <div className="flex flex-col gap-6 rounded-2xl bg-white p-8 shadow-sm sm:p-10 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-[22px] font-extrabold text-[#111111] sm:text-[26px]">
                  Staat jouw stad er niet bij?
                </h2>
                <p className="mt-2 text-[14px] text-zinc-500">
                  Neem contact op. We kijken graag of we jouw locatie kunnen bedienen.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF7A00] px-7 py-3.5 text-[14px] font-bold text-white transition hover:bg-[#E86E00] sm:w-auto"
                >
                  Transport aanvragen <ArrowRightIcon />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-200 px-7 py-3.5 text-[14px] font-semibold text-[#111111] transition hover:bg-zinc-50 sm:w-auto"
                >
                  Contact opnemen
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

import Link from "next/link";

// ---------------------------------------------------------------------------
// Icons
// ---------------------------------------------------------------------------

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E31B1B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

export function DienstenCtaBlok() {
  return (
    <section className="bg-[#F5F6F7] py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="flex flex-col gap-8 rounded-2xl bg-white p-8 shadow-sm sm:p-10 lg:flex-row lg:items-center lg:justify-between">

          {/* Left */}
          <div>
            <h2 className="text-[22px] font-extrabold text-[#111111] sm:text-[26px]">
              Direct transport regelen?
            </h2>
            <p className="mt-1 text-[14px] text-zinc-500">
              Vraag vandaag nog een vrijblijvende offerte aan.
            </p>
            <ul className="mt-5 flex flex-col gap-2.5">
              {[
                "Binnen 1 minuut geregeld",
                "Vrijblijvend en gratis",
                "Snel een prijs op maat",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <CheckIcon />
                  <span className="text-[13.5px] text-zinc-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: CTA */}
          <div className="shrink-0">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-[#E31B1B] px-8 py-4 text-[15px] font-bold text-white transition hover:bg-[#C91818] active:scale-[0.98]"
            >
              Transport aanvragen
              <ArrowRight />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

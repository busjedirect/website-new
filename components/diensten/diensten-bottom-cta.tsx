import Link from "next/link";
import Image from "next/image";

// ---------------------------------------------------------------------------
// Icons
// ---------------------------------------------------------------------------

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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

export function DienstenBottomCta() {
  return (
    <section className="bg-[#F5F6F7] py-14 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="flex flex-col gap-10 overflow-hidden rounded-2xl bg-white shadow-sm lg:flex-row">

          {/* Left: image */}
          <div className="relative h-56 w-full overflow-hidden lg:h-auto lg:w-[360px] lg:shrink-0">
            <Image
              src="/Diensten/Footer Diensten.png"
              alt="BusjeDirect transport"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 360px"
            />
          </div>

          {/* Right: text + CTA */}
          <div className="flex flex-col justify-center px-8 py-10 lg:py-12">
            <h2 className="text-[24px] font-extrabold leading-[1.2] text-[#111111] sm:text-[30px]">
              Klaar om je transport te regelen?
            </h2>
            <p className="mt-3 text-[14px] leading-[1.7] text-zinc-500">
              Snel, veilig en zonder gedoe. Wij staan voor je klaar.
            </p>

            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
              {[
                "Snel geregeld",
                "Vaste prijs vooraf",
                "Geen verrassingen",
                "Tevreden klanten",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckIcon />
                  <span className="text-[13px] text-zinc-600">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl bg-[#FF7A00] px-8 py-4 text-[15px] font-bold text-white transition hover:bg-[#E86E00] active:scale-[0.98]"
              >
                Transport aanvragen
                <ArrowRight />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

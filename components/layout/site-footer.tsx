import Link from "next/link";
import { LOCATIES } from "@/lib/locaties";

// ---------------------------------------------------------------------------
// Icons
// ---------------------------------------------------------------------------

function PhoneIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="#FF7A00" stroke="none" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const DIENSTEN = [
  { label: "Meubeltransport", href: "/diensten/meubeltransport" },
  { label: "Kleine verhuizing", href: "/diensten/kleine-verhuizing" },
  { label: "Ophaalservice", href: "/diensten/ophaalservice" },
  { label: "Zakelijk transport", href: "/diensten/zakelijk-transport" },
  { label: "Internationaal transport", href: "/diensten/internationaal-transport" },
];

const VERVOEREN = [
  { label: "Bank vervoeren", href: "/vervoeren/bank-vervoeren" },
  { label: "Kast vervoeren", href: "/vervoeren/kast-vervoeren" },
  { label: "Wasmachine vervoeren", href: "/vervoeren/wasmachine-vervoeren" },
  { label: "Witgoed vervoeren", href: "/vervoeren/witgoed-vervoeren" },
  { label: "Inboedel vervoeren", href: "/vervoeren/inboedel-vervoeren" },
];

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------

export function SiteFooter() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="mx-auto max-w-[1200px] px-6 py-12 sm:px-8">

        {/* ── Top section: brand + 3 link columns ── */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 lg:grid-cols-[2fr_1fr_1fr_1fr]">

          {/* Brand — full width on mobile, 2fr on desktop */}
          <div className="col-span-2 sm:col-span-4 lg:col-span-1">
            <Link href="/" className="mb-3 inline-flex items-center text-[17px] font-extrabold">
              <span className="text-white">Busje</span>
              <span className="text-[#FF7A00]">Direct</span>
            </Link>
            <p className="mb-5 text-[12px] leading-relaxed text-zinc-400">
              Groot vervoer, zonder gedoe.<br />
              Snel, veilig en transparant van A naar B.
            </p>
            {/* Contact compact */}
            <ul className="mb-5 flex flex-col gap-2">
              <li>
                <a href="tel:0850606126" className="flex items-center gap-2 text-[12px] text-zinc-400 transition hover:text-white">
                  <PhoneIcon /> 085 06 06 126
                </a>
              </li>
              <li>
                <a href="mailto:info@busjedirect.nl" className="flex items-center gap-2 text-[12px] text-zinc-400 transition hover:text-white">
                  <MailIcon /> info@busjedirect.nl
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-[12px] text-zinc-400">
                  <ClockIcon /> Ma – Za 08:00 – 22:00
                </span>
              </li>
            </ul>
            {/* Google rating */}
            <div className="inline-flex items-center gap-3 rounded-xl border border-zinc-700 bg-zinc-800/60 px-4 py-3">
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] font-bold text-white">G</span>
                  <span className="text-[14px] font-extrabold text-white">4.8 / 5</span>
                </div>
                <div className="mt-1 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
                </div>
              </div>
              <p className="text-[11px] leading-snug text-zinc-400">250+<br />reviews</p>
            </div>
          </div>

          {/* Diensten */}
          <div>
            <p className="mb-4 text-[11px] font-bold uppercase tracking-wider text-zinc-500">Diensten</p>
            <ul className="flex flex-col gap-2.5">
              {DIENSTEN.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-[12.5px] text-zinc-400 transition hover:text-white">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Vervoeren */}
          <div>
            <p className="mb-4 text-[11px] font-bold uppercase tracking-wider text-zinc-500">Vervoeren</p>
            <ul className="flex flex-col gap-2.5">
              {VERVOEREN.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-[12.5px] text-zinc-400 transition hover:text-white">
                    {s.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/vervoeren" className="text-[12.5px] text-[#FF7A00] transition hover:text-[#E86E00]">
                  Bekijk alle items →
                </Link>
              </li>
            </ul>
          </div>

          {/* Locaties — 2-column pill grid */}
          <div>
            <p className="mb-4 text-[11px] font-bold uppercase tracking-wider text-zinc-500">Locaties</p>
            <div className="grid grid-cols-2 gap-x-3 gap-y-2">
              {LOCATIES.map((l) => (
                <Link
                  key={l.slug}
                  href={`/locaties/${l.slug}`}
                  className="text-[12.5px] text-zinc-400 transition hover:text-white"
                >
                  {l.name}
                </Link>
              ))}
            </div>
            <Link href="/locaties" className="mt-3 inline-block text-[12.5px] text-[#FF7A00] transition hover:text-[#E86E00]">
              Alle locaties →
            </Link>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-zinc-800 pt-6 sm:flex-row sm:items-center">
          <p className="text-[11px] text-zinc-500">© {new Date().getFullYear()} BusjeDirect.nl · Gevestigd in Diemen</p>
          <div className="flex flex-wrap gap-4">
            {[
              { label: "Algemene voorwaarden", href: "/contact" },
              { label: "Privacyverklaring", href: "/contact" },
              { label: "Cookieverklaring", href: "/contact" },
            ].map((l) => (
              <Link key={l.label} href={l.href} className="text-[11px] text-zinc-500 transition hover:text-zinc-300">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}

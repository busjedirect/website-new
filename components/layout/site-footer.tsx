import Link from "next/link";

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
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#FF7A00" stroke="none" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Main grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">

          {/* Brand col — 2 wide */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-3 flex items-center text-[17px] font-extrabold">
              <span className="text-white">Busje</span>
              <span className="text-[#FF7A00]">Direct</span>
            </Link>
            <p className="mb-4 text-[12px] leading-relaxed text-zinc-400">
              Groot vervoer, zonder gedoe.<br />
              Snel, veilig en transparant<br />
              van A naar B.
            </p>
            {/* Social icons */}
            <div className="flex gap-2">
              {["f", "in", "G"].map((s) => (
                <div key={s} className="flex h-7 w-7 items-center justify-center rounded-full border border-zinc-700 text-[11px] font-bold text-zinc-400">
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Diensten */}
          <div>
            <p className="mb-3 text-[12px] font-bold uppercase tracking-wider text-zinc-400">Diensten</p>
            <ul className="flex flex-col gap-2">
              {["Meubeltransport", "Ophaalservice", "Kleine verhuizing", "Veilingtransport", "Busje met chauffeur"].map((s) => (
                <li key={s}>
                  <Link href="/diensten" className="text-[12px] text-zinc-400 hover:text-white">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Over ons */}
          <div>
            <p className="mb-3 text-[12px] font-bold uppercase tracking-wider text-zinc-400">Over ons</p>
            <ul className="flex flex-col gap-2">
              {["Hoe het werkt", "Over ons", "Veelgestelde vragen", "Contact"].map((s) => (
                <li key={s}>
                  <Link href="/contact" className="text-[12px] text-zinc-400 hover:text-white">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Klantenservice */}
          <div>
            <p className="mb-3 text-[12px] font-bold uppercase tracking-wider text-zinc-400">Klantenservice</p>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href="tel:0850606126" className="flex items-center gap-1.5 text-[12px] text-zinc-400 hover:text-white">
                  <PhoneIcon /> 085 06 06 126
                </a>
              </li>
              <li>
                <a href="mailto:info@busjedirect.nl" className="flex items-center gap-1.5 text-[12px] text-zinc-400 hover:text-white">
                  <MailIcon /> info@busjedirect.nl
                </a>
              </li>
              <li>
                <span className="flex items-center gap-1.5 text-[12px] text-zinc-400">
                  <ClockIcon /> Ma - Za 08:00 - 22:00
                </span>
              </li>
            </ul>
          </div>

          {/* Werkgebied + Google rating */}
          <div>
            <p className="mb-3 text-[12px] font-bold uppercase tracking-wider text-zinc-400">Werkgebied</p>
            <ul className="mb-5 flex flex-col gap-2">
              {["Door heel Nederland", "Alle steden en regio's"].map((s) => (
                <li key={s}>
                  <span className="text-[12px] text-zinc-400">{s}</span>
                </li>
              ))}
            </ul>

            {/* Google rating block */}
            <div className="rounded-xl border border-zinc-700 bg-zinc-800 p-3">
              <div className="mb-1 flex items-center gap-1.5">
                <span className="text-[11px] font-bold text-white">G</span>
                <span className="text-[13px] font-extrabold text-white">4.8 / 5</span>
              </div>
              <div className="mb-1 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
              </div>
              <p className="text-[11px] text-zinc-400">Gebaseerd op 250+ reviews</p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-zinc-800 pt-6 sm:flex-row sm:items-center">
          <p className="text-[11px] text-zinc-500">© 2024 BusjeDirect.nl</p>
          <div className="flex gap-4">
            {["Algemene voorwaarden", "Privacyverklaring", "Cookieverklaring"].map((l) => (
              <Link key={l} href="/contact" className="text-[11px] text-zinc-500 hover:text-zinc-300">{l}</Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}

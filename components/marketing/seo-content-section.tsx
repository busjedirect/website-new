import Link from "next/link";

// ---------------------------------------------------------------------------
// Icons
// ---------------------------------------------------------------------------

function TruckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1" y="7" width="15" height="11" rx="1.5" />
      <path d="M16 10h4l3 4v4h-7V10z" />
      <circle cx="5.5" cy="18.5" r="1.5" />
      <circle cx="18.5" cy="18.5" r="1.5" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const USPS = [
  {
    icon: <ShieldIcon />,
    title: "Veilig transport",
    description: "Jouw spullen zijn in goede handen.",
  },
  {
    icon: <ClockIcon />,
    title: "Snel geregeld",
    description: "Vandaag aangevraagd, snel onderweg.",
  },
  {
    icon: <TagIcon />,
    title: "Transparante prijs",
    description: "Geen verborgen kosten, je weet waar je aan toe bent.",
  },
  {
    icon: <UserIcon />,
    title: "Ervaren chauffeur",
    description: "Professioneel, vriendelijk en zorgvuldig.",
  },
];

const POPULAR_SERVICES = [
  { label: "Bank vervoeren",            href: "/diensten/bank-vervoeren",            icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10h18M3 14h18M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"/></svg>
  )},
  { label: "Wasmachine vervoeren",      href: "/diensten/wasmachine-vervoeren",      icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2"/><circle cx="12" cy="13" r="4"/><line x1="6" y1="6" x2="6.01" y2="6"/></svg>
  )},
  { label: "Marktplaats ophaalservice", href: "/diensten/marktplaats-ophaalservice", icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
  )},
  { label: "Kleine verhuizing",         href: "/diensten/kleine-verhuizing",         icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
  )},
  { label: "Meubeltransport",           href: "/diensten/meubeltransport",           icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="7" width="15" height="11" rx="1.5"/><path d="M16 10h4l3 4v4h-7V10z"/><circle cx="5.5" cy="18.5" r="1.5"/><circle cx="18.5" cy="18.5" r="1.5"/></svg>
  )},
  { label: "IKEA ophaalservice",        href: "/diensten/ikea-ophaalservice",        icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>
  )},
];

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

export function SeoContentSection() {
  return (
    <section className="bg-[#F5F6F7] py-14 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">

          {/* ── Left: SEO content ── */}
          <div className="flex-1">

            {/* Label */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#FFF3E8] px-3 py-1.5">
              <TruckIcon />
              <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#FF7A00]">
                Snel, veilig &amp; betrouwbaar
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-[26px] font-extrabold leading-[1.2] tracking-tight text-[#111111] sm:text-[32px]">
              Groot vervoer snel en<br className="hidden sm:block" /> betrouwbaar geregeld
            </h2>

            {/* Description — SEO keywords behouden */}
            <p className="mt-4 text-[14px] leading-[1.75] text-zinc-500">
              BusjeDirect is dé transportservice voor het vervoeren van grote en onhandige spullen. Of het nu gaat om een bank, wasmachine, kast, matras, dozen of een Marktplaats aankoop: wij brengen het snel en veilig van A naar B. Met onze bus met chauffeur ben je verzekerd van een zorgeloze ervaring, zonder gedoe en tegen een transparante prijs.
            </p>

            {/* USPs */}
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
              {USPS.map((usp) => (
                <div key={usp.title} className="flex flex-col gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF3E8]">
                    {usp.icon}
                  </div>
                  <p className="text-[13px] font-bold text-[#111111]">{usp.title}</p>
                  <p className="text-[12px] leading-[1.5] text-zinc-400">{usp.description}</p>
                </div>
              ))}
            </div>

          </div>

          {/* ── Right: Populaire diensten card ── */}
          <div className="w-full lg:w-[340px] lg:shrink-0">
            <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm">
              <h3 className="mb-1 text-[16px] font-bold text-[#111111]">Populaire diensten</h3>
              <ul className="mt-4 flex flex-col">
                {POPULAR_SERVICES.map((service, i) => (
                  <li key={service.label}>
                    <Link
                      href={service.href}
                      className="group flex items-center gap-3 py-3 transition-colors hover:bg-[#FFF9F5] -mx-6 px-6"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFF3E8]">
                        {service.icon}
                      </div>
                      <span className="flex-1 text-[13.5px] font-medium text-[#111111]">
                        {service.label}
                      </span>
                      <span className="text-[#FF7A00] transition-transform group-hover:translate-x-0.5">
                        <ArrowRight />
                      </span>
                    </Link>
                    {i < POPULAR_SERVICES.length - 1 && (
                      <div className="mx-0 h-px bg-zinc-100" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

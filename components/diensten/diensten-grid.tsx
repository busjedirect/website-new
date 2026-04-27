import Link from "next/link";

// ---------------------------------------------------------------------------
// Icons
// ---------------------------------------------------------------------------

function SofaIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 10.5A2.5 2.5 0 015.5 8h13A2.5 2.5 0 0121 10.5V14H3v-3.5z" />
      <path d="M3 14v2a1 1 0 001 1h16a1 1 0 001-1v-2" />
      <path d="M5 8V6a1 1 0 011-1h12a1 1 0 011 1v2" />
      <path d="M5 17v1M19 17v1" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function ShoppingBagIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
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

const SERVICES = [
  {
    icon: <SofaIcon />,
    title: "Meubeltransport",
    description: "Van banken en kasten tot witgoed. Wij vervoeren jouw spullen veilig en zonder beschadigingen.",
    bullets: ["Banken & fauteuils", "Kasten & tafels", "Witgoed & matrassen"],
    href: "/diensten/meubeltransport",
    cta: "Meer over meubeltransport",
  },
  {
    icon: <HomeIcon />,
    title: "Kleine verhuizing",
    description: "Een paar spullen of een complete studio. Wij regelen jouw verhuizing snel en efficiënt.",
    bullets: ["Studioflat verhuizing", "1–2 kamer verhuizing", "Kleine inboedels"],
    href: "/diensten/kleine-verhuizing",
    cta: "Meer over kleine verhuizing",
  },
  {
    icon: <ShoppingBagIcon />,
    title: "Ophaalservice",
    description: "Iets gekocht via Marktplaats of IKEA? Wij halen het op en bezorgen het veilig bij jou thuis.",
    bullets: ["Marktplaats ophalen", "Winkel ophaalservice", "IKEA & aankopen"],
    href: "/diensten/ophaalservice",
    cta: "Meer over ophaalservice",
  },
  {
    icon: <BriefcaseIcon />,
    title: "Zakelijk transport",
    description: "Voor bedrijven en ondernemers. Betrouwbaar, discreet en op maat.",
    bullets: ["Kantoorinrichting", "Showroom plaatsingen", "Spoedbezorging"],
    href: "/diensten/zakelijk-transport",
    cta: "Meer over zakelijk transport",
  },
  {
    icon: <GlobeIcon />,
    title: "Internationaal transport",
    description: "Transport naar en vanuit heel Europa. Efficiënt, verzekerd en met vaste prijzen.",
    bullets: ["Europees transport", "Meubels op maat", "Snel tot-deur service"],
    href: "/diensten/internationaal-transport",
    cta: "Meer over internationaal transport",
  },
];

// ---------------------------------------------------------------------------
// Card
// ---------------------------------------------------------------------------

function ServiceCard({ icon, title, description, bullets, href, cta }: (typeof SERVICES)[0]) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-[0_1px_4px_rgba(0,0,0,0.05)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.09)]">

      {/* Image placeholder with icon overlay */}
      <div className="relative h-36 w-full bg-zinc-100" aria-hidden="true">
        <div className="absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-zinc-100">
            {icon}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-5 pb-6 pt-8">
        <h3 className="text-[16px] font-bold text-[#111111]">{title}</h3>
        <p className="mt-2 text-[13px] leading-[1.65] text-zinc-400">{description}</p>

        {/* Bullets */}
        <ul className="mt-4 flex flex-col gap-1.5">
          {bullets.map((b) => (
            <li key={b} className="flex items-center gap-2">
              <CheckIcon />
              <span className="text-[12.5px] text-zinc-500">{b}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href={href}
          className="mt-auto pt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#FF7A00] transition-all group-hover:gap-2.5"
        >
          {cta} <ArrowRight />
        </Link>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

export function DienstenGrid() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">

        <div className="mb-10 text-center">
          <h2 className="text-[26px] font-extrabold tracking-tight text-[#111111] sm:text-[32px]">
            Onze transportdiensten
          </h2>
          <p className="mt-3 text-[14px] text-zinc-500">
            Kies de service die bij jouw situatie past.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>

      </div>
    </section>
  );
}

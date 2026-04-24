import Link from "next/link";

// ---------------------------------------------------------------------------
// Icons
// ---------------------------------------------------------------------------

function SofaIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 10.5A2.5 2.5 0 015.5 8h13A2.5 2.5 0 0121 10.5V14H3v-3.5z" />
      <path d="M3 14v2a1 1 0 001 1h16a1 1 0 001-1v-2" />
      <path d="M5 8V6a1 1 0 011-1h12a1 1 0 011 1v2" />
      <path d="M5 17v1M19 17v1" />
    </svg>
  );
}

function BoxIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

function TrolleyIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
    title: "Meubeltransport\n(incl. witgoed)",
    description: "Van banken en kasten tot witgoed. Wij vervoeren jouw spullen met zorg.",
    href: "/diensten",
  },
  {
    icon: <BoxIcon />,
    title: "Kleine verhuizingen",
    description: "Een paar items of een complete inboedel. Wij helpen je snel en efficiënt.",
    href: "/diensten",
  },
  {
    icon: <TrolleyIcon />,
    title: "Ophaalservice",
    description: "Iets gekocht of op te halen? Wij halen het op en brengen het waar jij wilt.",
    href: "/diensten",
  },
  {
    icon: <BriefcaseIcon />,
    title: "Zakelijk transport",
    description: "Betrouwbaar transport voor bedrijven. Snel, discreet en professioneel.",
    href: "/diensten",
  },
  {
    icon: <GlobeIcon />,
    title: "Internationale\ntransporten",
    description: "Wij verzorgen transporten naar en vanuit heel Europa. Efficiënt en betrouwbaar.",
    href: "/diensten",
  },
];

// ---------------------------------------------------------------------------
// Card
// ---------------------------------------------------------------------------

function ServiceCard({ icon, title, description, href }: (typeof SERVICES)[0]) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border border-zinc-100 bg-white p-6 shadow-[0_1px_4px_rgba(0,0,0,0.05)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)]"
    >
      {/* Icon circle */}
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF3E8]">
        {icon}
      </div>

      {/* Title */}
      <h3 className="mt-5 text-[15px] font-bold leading-snug text-[#111111] whitespace-pre-line">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 flex-1 text-[13px] leading-[1.65] text-zinc-400">
        {description}
      </p>

      {/* Meer info link */}
      <span className="mt-4 inline-flex items-center gap-1 text-[12.5px] font-semibold text-[#FF7A00] transition-all group-hover:gap-2">
        Meer info <ArrowRight />
      </span>
    </Link>
  );
}

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

export function ServicesSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-8">

        {/* Header — centered */}
        <div className="mb-12 text-center">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-widest text-[#FF7A00]">
            Onze diensten
          </p>
          <h2 className="text-[36px] font-extrabold leading-[1.1] tracking-tight text-[#111111] sm:text-[42px]">
            Transport geregeld.<br />
            Snel, veilig en betrouwbaar.
          </h2>
          <p className="mx-auto mt-4 max-w-[480px] text-[15px] leading-[1.7] text-zinc-400">
            Van meubels tot internationale zendingen.<br className="hidden sm:block" />
            Wij leveren maatwerk voor elke transportbehoefte.
          </p>
        </div>

        {/* Cards — 5 col desktop, 2 col tablet, 1 col mobile */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>

        {/* CTA — centered below cards */}
        <div className="mt-10 text-center">
          <Link
            href="/diensten"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#FF7A00] transition hover:text-[#E86E00]"
          >
            Meer over onze diensten
            <ArrowRight />
          </Link>
        </div>

      </div>
    </section>
  );
}

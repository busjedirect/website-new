import Link from "next/link";
import Image from "next/image";

// ---------------------------------------------------------------------------
// Icons
// ---------------------------------------------------------------------------

function PickupIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function MoveIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      <line x1="12" y1="12" x2="12" y2="16" />
      <line x1="10" y1="14" x2="14" y2="14" />
    </svg>
  );
}

function HammerIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 5l4 4-9.5 9.5-4-4L15 5z" />
      <path d="M3 21l4.5-4.5" strokeWidth="2" />
    </svg>
  );
}

function VanIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1" y="7" width="15" height="11" rx="1.5" />
      <path d="M16 10h4l3 4v4h-7V10z" />
      <circle cx="5.5" cy="18.5" r="1.5" />
      <circle cx="18.5" cy="18.5" r="1.5" />
    </svg>
  );
}

function VanIconOrange() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1" y="7" width="15" height="11" rx="1.5" />
      <path d="M16 10h4l3 4v4h-7V10z" />
      <circle cx="5.5" cy="18.5" r="1.5" />
      <circle cx="18.5" cy="18.5" r="1.5" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Service list items
// ---------------------------------------------------------------------------

const SERVICES = [
  {
    icon: <PickupIcon />,
    title: "Ophaalservice",
    description: "Wij halen het voor je op.",
    href: "/diensten",
  },
  {
    icon: <MoveIcon />,
    title: "Kleine verhuizing",
    description: "Wij helpen je verder.",
    href: "/diensten",
  },
  {
    icon: <HammerIcon />,
    title: "Veilingtransport",
    description: "Veilig en zorgvuldig transport.",
    href: "/diensten",
  },
  {
    icon: <VanIcon />,
    title: "Busje met chauffeur",
    description: "Inclusief chauffeur die helpt.",
    href: "/diensten",
  },
];

function ServiceRow({ icon, title, description, href }: typeof SERVICES[0]) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-4 rounded-xl px-4 py-3.5 transition hover:bg-zinc-50"
    >
      {/* Icon circle */}
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF3E8]">
        {icon}
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="text-[14px] font-bold text-[#111111]">{title}</p>
        <p className="text-[12.5px] text-zinc-400">{description}</p>
      </div>

      {/* Arrow */}
      <span className="shrink-0 text-zinc-300 transition group-hover:text-zinc-500">
        <ArrowRight />
      </span>
    </Link>
  );
}

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

export function ServicesSection() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-8">

        {/* ── Desktop: two columns ── */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-8">

          {/* LEFT — title + service list */}
          <div className="flex flex-col lg:w-[340px] lg:shrink-0">
            <h2 className="text-[32px] font-extrabold tracking-tight text-[#111111]">
              Onze diensten
            </h2>
            <p className="mt-3 text-[15px] leading-[1.65] text-zinc-500">
              Van meubels verhuizen tot veilig transport.
              Wij regelen het voor je.
            </p>

            {/* Service rows */}
            <div className="mt-6 flex flex-col divide-y divide-zinc-100">
              {SERVICES.map((s) => (
                <ServiceRow key={s.title} {...s} />
              ))}
            </div>

            <Link
              href="/diensten"
              className="mt-6 inline-flex items-center gap-1.5 px-4 text-[13.5px] font-semibold text-[#FF7A00] transition hover:text-[#E86E00]"
            >
              Meer over onze diensten
              <ArrowRight />
            </Link>
          </div>

          {/* RIGHT — feature card */}
          <div className="flex-1">
            <div
              className="relative flex h-full min-h-[360px] flex-col justify-center overflow-hidden rounded-3xl p-6 sm:min-h-[460px] sm:p-8 lg:pl-16"
              style={{ backgroundColor: "#FDF0E4" }}
            >
              {/* Icon circle */}
              <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm">
                <VanIconOrange />
              </div>

              {/* Image — anchored bottom-right, full height, clipped */}
              <Image
                src="/Onze_diensten.png"
                alt="Meubeltransport"
                width={800}
                height={640}
                className="absolute bottom-0 right-0 z-0 h-[85%] w-auto lg:right-[-5%] lg:h-[115%]"
              />

              {/* Text — left side, responsive max-width */}
              <div className="relative z-10 mt-5 max-w-[55%] sm:max-w-[52%]">
                <h3 className="text-[22px] font-extrabold tracking-tight text-[#111111] sm:text-[26px]">
                  Meubeltransport
                </h3>
                <p className="mt-2 text-[13.5px] leading-[1.65] text-zinc-500">
                  Banken, kasten, tafels en meer.
                  Wij vervoeren het zorgvuldig.
                </p>
                <Link
                  href="/diensten"
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#FF7A00] px-5 py-2.5 text-[13.5px] font-bold text-white transition hover:bg-[#E86E00] active:scale-[0.98]"
                >
                  Meer info
                  <ArrowRight />
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

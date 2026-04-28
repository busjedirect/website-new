import Link from "next/link";
import Image from "next/image";

// ---------------------------------------------------------------------------
// Icons
// ---------------------------------------------------------------------------

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
    image: "/Diensten/Meubeltransport.png",
    title: "Meubeltransport",
    description: "Van banken en kasten tot witgoed. Wij vervoeren jouw spullen veilig en zonder beschadigingen.",
    bullets: ["Banken & fauteuils", "Kasten & tafels", "Witgoed & matrassen"],
    href: "/diensten/meubeltransport",
    cta: "Meer over meubeltransport",
  },
  {
    image: "/Diensten/Kleine Verhuizing.png",
    title: "Kleine verhuizing",
    description: "Een paar spullen of een complete studio. Wij regelen jouw verhuizing snel en efficiënt.",
    bullets: ["Studioflat verhuizing", "1–2 kamer verhuizing", "Kleine inboedels"],
    href: "/diensten/kleine-verhuizing",
    cta: "Meer over kleine verhuizing",
  },
  {
    image: "/Diensten/Ophaalservice.png",
    title: "Ophaalservice",
    description: "Iets gekocht via Marktplaats of IKEA? Wij halen het op en bezorgen het veilig bij jou thuis.",
    bullets: ["Marktplaats ophalen", "Winkel ophaalservice", "IKEA & aankopen"],
    href: "/diensten/ophaalservice",
    cta: "Meer over ophaalservice",
  },
  {
    image: "/Diensten/Zakelijk Transport.png",
    title: "Zakelijk transport",
    description: "Voor bedrijven en ondernemers. Betrouwbaar, discreet en op maat.",
    bullets: ["Kantoorinrichting", "Showroom plaatsingen", "Spoedbezorging"],
    href: "/diensten/zakelijk-transport",
    cta: "Meer over zakelijk transport",
  },
  {
    image: "/Diensten/Internationaal Transport.png",
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

function ServiceCard({ image, title, description, bullets, href, cta }: (typeof SERVICES)[0]) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-[0_1px_4px_rgba(0,0,0,0.05)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.09)]">

      {/* Image */}
      <div className="relative h-36 w-full overflow-hidden bg-zinc-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-5 pb-6 pt-5">
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

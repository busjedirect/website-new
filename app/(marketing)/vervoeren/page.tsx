import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SiteFooter } from "@/components/layout/site-footer";

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Wat vervoeren wij? Meubels, witgoed en inboedels | BusjeDirect",
  description:
    "Bekijk wat BusjeDirect voor je kan vervoeren. Van banken, kasten en bedden tot witgoed, apparatuur en complete inboedels. Vraag direct transport aan.",
  alternates: {
    canonical: "/vervoeren",
  },
};

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

interface VervoerItem {
  label: string;
  href: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
}

interface PopulaireItem extends VervoerItem {
  image: string;
}

const ALL_ITEMS: VervoerItem[] = [
  {
    label: "Bank vervoeren",
    href: "/vervoeren/bank-vervoeren",
    description: "Hoekbank, 2-zits of 3-zits. Wij tillen en vervoeren jouw bank veilig.",
    image: "/Vervoeren/Banken.png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 10.5A2.5 2.5 0 015.5 8h13A2.5 2.5 0 0121 10.5V14H3v-3.5z" />
        <path d="M3 14v2a1 1 0 001 1h16a1 1 0 001-1v-2" />
        <path d="M5 8V6a1 1 0 011-1h12a1 1 0 011 1v2" />
        <path d="M5 17v1M19 17v1" />
      </svg>
    ),
  },
  {
    label: "Kast vervoeren",
    href: "/vervoeren/kast-vervoeren",
    description: "Garderobekasten, IKEA-kasten en grote kasten. Professioneel vervoerd.",
    image: "/Vervoeren/Kasten.png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="2" />
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="7" y1="12" x2="7" y2="12.01" />
        <line x1="17" y1="12" x2="17" y2="12.01" />
      </svg>
    ),
  },
  {
    label: "Wasmachine vervoeren",
    href: "/vervoeren/wasmachine-vervoeren",
    description: "Wasmachine of droger verplaatsen? Wij regelen het veilig en snel.",
    image: "/Vervoeren/Wasmachine.png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="2" />
        <circle cx="12" cy="13" r="4" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="9" y1="6" x2="9.01" y2="6" />
      </svg>
    ),
  },
  {
    label: "Bed vervoeren",
    href: "/vervoeren/bed-vervoeren",
    description: "Eenpersoons, tweepersoons of boxspring. Wij vervoeren elk bed.",
    image: "/Vervoeren/Bed.png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 9V4a1 1 0 011-1h18a1 1 0 011 1v5" />
        <path d="M2 20v-5a2 2 0 012-2h16a2 2 0 012 2v5" />
        <line x1="2" y1="15" x2="22" y2="15" />
      </svg>
    ),
  },
  {
    label: "Tafel vervoeren",
    href: "/vervoeren/tafel-vervoeren",
    description: "Eettafel, bureau of salontafel. Wij vervoeren tafels van elk formaat.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="3" y1="8" x2="21" y2="8" />
        <line x1="8" y1="8" x2="8" y2="20" />
        <line x1="16" y1="8" x2="16" y2="20" />
        <line x1="3" y1="8" x2="3" y2="8.01" />
        <line x1="21" y1="8" x2="21" y2="8.01" />
      </svg>
    ),
  },
  {
    label: "Koelkast vervoeren",
    href: "/vervoeren/koelkast-vervoeren",
    description: "Koelkast of vriezer vervoeren? Wij doen het rechtop en veilig.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <line x1="4" y1="10" x2="20" y2="10" />
        <line x1="9" y1="6" x2="9" y2="6.01" />
        <line x1="9" y1="15" x2="9" y2="18" />
      </svg>
    ),
  },
  {
    label: "Matras vervoeren",
    href: "/vervoeren/matras-vervoeren",
    description: "Matras of topper vervoeren zonder gedoe. Wij regelen het.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="10" rx="2" />
        <line x1="6" y1="11" x2="6" y2="13" />
        <line x1="10" y1="11" x2="10" y2="13" />
        <line x1="14" y1="11" x2="14" y2="13" />
        <line x1="18" y1="11" x2="18" y2="13" />
      </svg>
    ),
  },
  {
    label: "Dressoir vervoeren",
    href: "/vervoeren/dressoir-vervoeren",
    description: "Zwaar dressoir verplaatsen? Wij tillen en vervoeren het zonder beschadigingen.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="7" y1="9" x2="7" y2="9.01" />
        <line x1="17" y1="9" x2="17" y2="9.01" />
        <line x1="7" y1="15" x2="7" y2="15.01" />
        <line x1="17" y1="15" x2="17" y2="15.01" />
      </svg>
    ),
  },
  {
    label: "Kantoormeubels vervoeren",
    href: "/vervoeren/kantoormeubels-vervoeren",
    description: "Bureaus, vergadertafels en kasten. Wij vervoeren jouw kantoorinventaris.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
  {
    label: "Apparatuur vervoeren",
    href: "/vervoeren/apparatuur-vervoeren",
    description: "Fitnessapparatuur, machines en professionele apparaten. Veilig vervoerd.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    label: "Inboedel vervoeren",
    href: "/vervoeren/inboedel-vervoeren",
    description: "Complete inboedel verplaatsen? Wij regelen het transport van A tot Z.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    label: "Witgoed vervoeren",
    href: "/vervoeren/witgoed-vervoeren",
    description: "Wasmachine, droger, koelkast of vaatwasser. Wij vervoeren al je witgoed.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="2" />
        <circle cx="12" cy="13" r="5" />
        <line x1="7" y1="6" x2="7" y2="6.01" />
        <line x1="10" y1="6" x2="10" y2="6.01" />
      </svg>
    ),
  },
];

// Popular items — first 4, cast to PopulaireItem since they all have image
const POPULAR_ITEMS = ALL_ITEMS.slice(0, 4) as PopulaireItem[];

const RELATED_SERVICES = [
  { label: "Meubeltransport", href: "/diensten/meubeltransport", description: "Professioneel transport van meubels van elk formaat." },
  { label: "Kleine verhuizing", href: "/diensten/kleine-verhuizing", description: "Studio of appartement verhuizen? Wij regelen het snel." },
  { label: "Ophaalservice", href: "/diensten/ophaalservice", description: "Marktplaats aankoop of IKEA bestelling ophalen." },
  { label: "Zakelijk transport", href: "/diensten/zakelijk-transport", description: "Betrouwbaar transport voor bedrijven en ondernemers." },
];

const FAQS = [
  {
    question: "Welke spullen kunnen jullie vervoeren?",
    answer:
      "Wij vervoeren alle grote en zware items: meubels zoals banken, kasten, bedden, tafels en dressoiren, witgoed zoals wasmachines, drogers en koelkasten, matrassen, kantoormeubels, apparatuur en complete inboedels. Kortom: alles wat niet in een gewone auto past.",
  },
  {
    question: "Kunnen jullie ook zware spullen vervoeren?",
    answer:
      "Ja, wij vervoeren ook zware items. Wij werken drempel tot drempel: ophalen en afleveren bij de buitendeur op de begane grond. Wij lopen geen trappen en komen niet binnenshuis.",
  },
  {
    question: "Helpen jullie met tillen?",
    answer:
      "Wij werken drempel tot drempel: ophalen en afleveren bij de buitendeur op de begane grond. Wij lopen geen trappen en komen niet binnenshuis. Zorg dat de spullen klaarstaan bij de buitendeur op de begane grond.",
  },
  {
    question: "Wat kost het vervoeren van grote spullen?",
    answer:
      "De prijs is gebaseerd op de totale rijafstand: van ons depot naar het ophaaladres, naar het afleveradres en terug. Starttarief is €65 excl. btw. Bereken je prijs eenvoudig via onze website.",
  },
  {
    question: "Kan ik ook een Marktplaats aankoop laten ophalen?",
    answer:
      "Absoluut. Dat is precies waarvoor veel klanten ons inschakelen. Vul het adres van de verkoper in als ophaaladres en jouw adres als bestemming. Wij regelen de rest.",
  },
  {
    question: "Hoe snel kunnen jullie mijn spullen vervoeren?",
    answer:
      "In de meeste gevallen kunnen wij binnen 24–48 uur transport regelen. Vul je aanvraag in en we plannen snel een datum en tijdvak in dat jou uitkomt.",
  },
];

// ---------------------------------------------------------------------------
// Icons (shared)
// ---------------------------------------------------------------------------

function ArrowRightIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function CheckIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Section 1: Hero
// ---------------------------------------------------------------------------

function VervoerHero() {
  return (
    <section className="bg-[#F5F6F7] py-14 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">

          {/* Left: text */}
          <div className="flex-1">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#FF7A00]">
              Wat we vervoeren
            </p>
            <h1 className="text-[32px] font-extrabold leading-[1.1] tracking-tight text-[#111111] sm:text-[44px]">
              Van meubels en witgoed tot complete inboedels
            </h1>
            <p className="mt-5 text-[15px] leading-[1.75] text-zinc-500">
              Wij vervoeren dagelijks meubels, witgoed en andere grote spullen voor particulieren, bedrijven en kleine verhuizingen. Van banken en kasten tot wasmachines, bedden en complete inboedels.
            </p>

            {/* USP pills */}
            <div className="mt-7 flex flex-wrap gap-3">
              {[
                { label: "Veilig transport", icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                )},
                { label: "Snel geregeld", icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                )},
                { label: "Transparante prijs", icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
                    <line x1="7" y1="7" x2="7.01" y2="7" />
                  </svg>
                )},
              ].map((usp) => (
                <div key={usp.label} className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                  {usp.icon}
                  <span className="text-[13px] font-medium text-[#111111]">{usp.label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="/"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF7A00] px-7 py-3.5 text-[14px] font-bold text-white transition hover:bg-[#E86E00] active:scale-[0.98] sm:w-auto"
              >
                Transport aanvragen <ArrowRightIcon />
              </Link>
            </div>
          </div>

          {/* Right: hero image */}
          <div className="w-full lg:w-[480px] lg:shrink-0">
            <div className="w-full overflow-hidden rounded-2xl bg-zinc-200" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/Vervoeren/Alles.png"
                alt="BusjeDirect — meubels en witgoed vervoeren"
                width={960}
                height={720}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Section 2: Populaire items (top 4 with image placeholder)
// ---------------------------------------------------------------------------

function PopulaireItems() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="mb-10">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#FF7A00]">
            Meest gevraagd
          </p>
          <h2 className="text-[24px] font-extrabold tracking-tight text-[#111111] sm:text-[30px]">
            Populaire items
          </h2>
          <p className="mt-2 text-[14px] text-zinc-500">
            Dit zijn de items die wij het vaakst vervoeren.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {POPULAR_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-[0_1px_4px_rgba(0,0,0,0.05)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(0,0,0,0.09)]"
            >
              {/* Image */}
              <div className="relative h-[160px] w-full overflow-hidden bg-zinc-100">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm">
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-[15px] font-bold text-[#111111]">{item.label}</h3>
                <p className="mt-1.5 flex-1 text-[13px] leading-[1.6] text-zinc-400">
                  {item.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#FF7A00] transition-all group-hover:gap-2.5">
                  Meer info <ArrowRightIcon size={13} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Section 3: Alle items grid
// ---------------------------------------------------------------------------

function AlleItems() {
  return (
    <section id="alle-items" className="bg-[#F5F6F7] py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="mb-10">
          <h2 className="text-[24px] font-extrabold tracking-tight text-[#111111] sm:text-[30px]">
            Alles wat wij vervoeren
          </h2>
          <p className="mt-2 text-[14px] text-zinc-500">
            Kies het item dat je wilt laten vervoeren en vraag direct een prijs aan.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ALL_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group flex items-center gap-4 rounded-xl border border-zinc-100 bg-white px-5 py-4 shadow-sm transition hover:border-[#FF7A00]/30 hover:shadow-md"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF3E8]">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[14px] font-semibold text-[#111111] group-hover:text-[#FF7A00]">
                  {item.label}
                </p>
                <p className="mt-0.5 truncate text-[12.5px] text-zinc-400">
                  {item.description}
                </p>
              </div>
              <span className="shrink-0 text-zinc-300 transition group-hover:text-[#FF7A00]">
                <ArrowRightIcon size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Section 4: Waarom BusjeDirect
// ---------------------------------------------------------------------------

function WaaromBusjeDirect() {
  const usps = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      ),
      title: "Veilig transport",
      desc: "Jouw spullen zijn altijd verzekerd en in goede handen.",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: "Snel geregeld",
      desc: "Vandaag aangevraagd, vaak al binnen 24–48 uur onderweg.",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
          <line x1="7" y1="7" x2="7.01" y2="7" />
        </svg>
      ),
      title: "Transparante prijs",
      desc: "Geen verborgen kosten. Vaste prijs op basis van afstand.",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
      title: "Ervaren chauffeur",
      desc: "Professioneel, vriendelijk en zorgvuldig met jouw spullen.",
    },
  ];

  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <h2 className="mb-8 text-center text-[24px] font-extrabold tracking-tight text-[#111111] sm:text-[30px]">
          Waarom BusjeDirect?
        </h2>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {usps.map((usp) => (
            <div
              key={usp.title}
              className="flex flex-col items-center rounded-2xl border border-zinc-100 bg-[#F5F6F7] p-6 text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF3E8]">
                {usp.icon}
              </div>
              <p className="mt-3 text-[14px] font-bold text-[#111111]">{usp.title}</p>
              <p className="mt-1 text-[12.5px] leading-[1.6] text-zinc-500">{usp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Section 5: Hoe het werkt
// ---------------------------------------------------------------------------

function HoeHetWerkt() {
  const steps = [
    { n: "1", title: "Kies wat je wilt vervoeren", desc: "Selecteer het item of de items die je wilt laten vervoeren." },
    { n: "2", title: "Vul je aanvraag in", desc: "Geef je ophaal- en afleveradres op via onze eenvoudige tool." },
    { n: "3", title: "Ontvang een prijs", desc: "Je ontvangt direct een transparante prijs op maat. Geen verrassingen." },
    { n: "4", title: "Wij halen op en bezorgen", desc: "Op het afgesproken moment halen wij op en bezorgen veilig op de bestemming." },
  ];

  return (
    <section className="bg-[#F5F6F7] py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <h2 className="mb-8 text-center text-[24px] font-extrabold tracking-tight text-[#111111] sm:text-[30px]">
          Hoe het werkt
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.n} className="relative flex flex-col items-center text-center">
              {i < steps.length - 1 && (
                <div className="absolute -right-3 top-5 hidden lg:block" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFD4A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              )}
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF3E8] ring-4 ring-white">
                <span className="text-[17px] font-extrabold text-[#FF7A00]">{step.n}</span>
              </div>
              <p className="mt-3 text-[14px] font-bold text-[#111111]">{step.title}</p>
              <p className="mt-1 text-[12.5px] leading-[1.6] text-zinc-500">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-[#FF7A00] px-7 py-3.5 text-[14px] font-bold text-white transition hover:bg-[#E86E00] active:scale-[0.98]"
          >
            Direct aanvragen <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Section 6: SEO content blok
// ---------------------------------------------------------------------------

function SeoContent() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">

          {/* Text */}
          <div className="flex-1">
            <h2 className="text-[24px] font-extrabold tracking-tight text-[#111111] sm:text-[28px]">
              Grote spullen laten vervoeren zonder gedoe
            </h2>
            <div className="mt-5 space-y-4">
              <p className="text-[14px] leading-[1.8] text-zinc-600">
                Grote meubels vervoeren is een klus die je niet zomaar even doet. Een bank past niet in een gewone auto, een wasmachine is te zwaar om alleen te tillen en een complete inboedel verplaatsen vraagt om planning en de juiste middelen. BusjeDirect neemt dit werk van je over. Wij vervoeren dagelijks meubels, witgoed en andere grote spullen voor particulieren en bedrijven door heel Nederland.
              </p>
              <p className="text-[14px] leading-[1.8] text-zinc-600">
                Of je nu een tweedehands bank hebt gekocht via Marktplaats, een nieuwe koelkast wilt laten bezorgen of je complete inboedel wilt verplaatsen bij een verhuizing. Wij regelen het transport professioneel. Wij werken drempel tot drempel: ophalen en afleveren bij de buitendeur op de begane grond. Geen trappen, niet binnenshuis.
              </p>
              <p className="text-[14px] leading-[1.8] text-zinc-600">
                Witgoed vervoeren vraagt om extra zorgvuldigheid: koelkasten moeten rechtop, wasmachines hebben transportbouten nodig en drogers zijn gevoelig voor stoten. Wij kennen de regels en zorgen dat jouw apparaten veilig aankomen. Hetzelfde geldt voor kantoormeubels, fitnessapparatuur en andere grote items. Wij behandelen alles met de zorg die het verdient.
              </p>
            </div>
          </div>

          {/* Prijs card */}
          <div className="w-full rounded-2xl border border-zinc-100 bg-[#F5F6F7] p-8 lg:w-[340px] lg:shrink-0">
            <p className="text-[12px] font-bold uppercase tracking-widest text-[#FF7A00]">
              Prijs berekenen
            </p>
            <p className="mt-2 text-[26px] font-extrabold text-[#111111]">Vanaf €65,–</p>
            <p className="mt-1 text-[13px] text-zinc-500">excl. btw · op basis van afstand</p>
            <ul className="mt-5 flex flex-col gap-2.5">
              {[
                "Prijs op basis van afstand",
                "Drempel tot drempel service",
                "Geen verborgen kosten",
                "Inclusief tilhulp",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <CheckIcon />
                  <span className="text-[13px] text-zinc-600">{f}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF7A00] py-3.5 text-[14px] font-bold text-white transition hover:bg-[#E86E00]"
            >
              Bereken je prijs <ArrowRightIcon />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Section 7: Gerelateerde diensten
// ---------------------------------------------------------------------------

function GerelateerdeServices() {
  return (
    <section className="bg-[#F5F6F7] py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <h2 className="mb-2 text-[24px] font-extrabold tracking-tight text-[#111111] sm:text-[28px]">
          Gerelateerde diensten
        </h2>
        <p className="mb-8 text-[14px] text-zinc-500">
          Meer nodig dan alleen item-transport? Bekijk onze diensten.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {RELATED_SERVICES.map((service) => (
            <Link
              key={service.label}
              href={service.href}
              className="group flex flex-col rounded-xl border border-zinc-100 bg-white p-5 shadow-sm transition hover:border-[#FF7A00]/30 hover:shadow-md"
            >
              <p className="text-[14px] font-semibold text-[#111111] group-hover:text-[#FF7A00]">
                {service.label}
              </p>
              <p className="mt-1.5 flex-1 text-[12.5px] leading-[1.6] text-zinc-400">
                {service.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-[12.5px] font-semibold text-[#FF7A00] transition-all group-hover:gap-2">
                Meer info <ArrowRightIcon size={12} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Section 8: FAQ
// ---------------------------------------------------------------------------

import { FaqSection as SharedFaqSection } from "@/components/ui/faq-section";

function FaqSection() {
  return <SharedFaqSection faqs={FAQS} bg="white" />;
}

// ---------------------------------------------------------------------------
// Section 9: Bottom CTA
// ---------------------------------------------------------------------------

function BottomCta() {
  return (
    <section className="bg-[#F5F6F7] py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="flex flex-col gap-8 rounded-2xl bg-white p-8 shadow-sm sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-[22px] font-extrabold text-[#111111] sm:text-[26px]">
              Weet je al wat je wilt vervoeren?
            </h2>
            <p className="mt-1 text-[14px] text-zinc-500">
              Vraag direct vrijblijvend transport aan en ontvang snel een prijs op maat.
            </p>
            <ul className="mt-5 flex flex-col gap-2.5">
              {["Binnen 1 minuut geregeld", "Vrijblijvend en gratis", "Snel een prijs op maat"].map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <CheckIcon />
                  <span className="text-[13.5px] text-zinc-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="shrink-0">
            <Link
              href="/"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF7A00] px-8 py-4 text-[15px] font-bold text-white transition hover:bg-[#E86E00] active:scale-[0.98] sm:w-auto"
            >
              Transport aanvragen <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function VervoerOverzichtPage() {
  return (
    <>
      <main>
        <VervoerHero />
        <PopulaireItems />
        <AlleItems />
        <WaaromBusjeDirect />
        <HoeHetWerkt />
        <SeoContent />
        <GerelateerdeServices />
        <FaqSection />
        <BottomCta />
      </main>
      <SiteFooter />
    </>
  );
}

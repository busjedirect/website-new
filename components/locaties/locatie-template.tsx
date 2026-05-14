import Link from "next/link";
import Image from "next/image";
import { SiteFooter } from "@/components/layout/site-footer";
import { FaqSection } from "@/components/ui/faq-section";
import type { Locatie } from "@/lib/locaties";

// ---------------------------------------------------------------------------
// Icons
// ---------------------------------------------------------------------------

function ArrowRightIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function CheckIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#E31B1B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function MapPinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#E31B1B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2C8.69 2 6 4.69 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.31-2.69-6-6-6z" />
      <circle cx="12" cy="8" r="2" />
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

const VERVOER_ITEMS = [
  { label: "Bank vervoeren", href: "/vervoeren/bank-vervoeren", stadSlug: "bank-vervoeren" },
  { label: "Kast vervoeren", href: "/vervoeren/kast-vervoeren", stadSlug: "kast-vervoeren" },
  { label: "Wasmachine vervoeren", href: "/vervoeren/wasmachine-vervoeren", stadSlug: "wasmachine-vervoeren" },
  { label: "Bed vervoeren", href: "/vervoeren/bed-vervoeren", stadSlug: "bed-vervoeren" },
  { label: "Tafel vervoeren", href: "/vervoeren/tafel-vervoeren", stadSlug: null },
  { label: "Koelkast vervoeren", href: "/vervoeren/koelkast-vervoeren", stadSlug: "koelkast-vervoeren" },
  { label: "Matras vervoeren", href: "/vervoeren/matras-vervoeren", stadSlug: null },
  { label: "Dressoir vervoeren", href: "/vervoeren/dressoir-vervoeren", stadSlug: null },
  { label: "Witgoed vervoeren", href: "/vervoeren/witgoed-vervoeren", stadSlug: null },
  { label: "Inboedel vervoeren", href: "/vervoeren/inboedel-vervoeren", stadSlug: null },
  { label: "Kantoormeubels vervoeren", href: "/vervoeren/kantoormeubels-vervoeren", stadSlug: null },
  { label: "Apparatuur vervoeren", href: "/vervoeren/apparatuur-vervoeren", stadSlug: null },
];

// ---------------------------------------------------------------------------
// Section: Hero
// ---------------------------------------------------------------------------

function LocatieHero({ locatie }: { locatie: Locatie }) {
  return (
    <section className="bg-[#F5F6F7] py-14 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1">
            <div className="mb-3 flex items-center gap-2">
              <MapPinIcon size={14} />
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#E31B1B]">
                {locatie.regio}
              </p>
            </div>
            <h1 className="text-[32px] font-extrabold leading-[1.1] tracking-tight text-[#111111] sm:text-[44px]">
              Transport in {locatie.name}
            </h1>
            <p className="mt-5 text-[15px] leading-[1.75] text-zinc-500">
              BusjeDirect verzorgt transport in {locatie.name} en omgeving. Van meubels en witgoed tot complete inboedels. Wij halen op en bezorgen snel, veilig en tegen een transparante prijs.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {[
                { label: "Veilig transport" },
                { label: "Snel geregeld" },
                { label: "Transparante prijs" },
              ].map((usp) => (
                <div key={usp.label} className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                  <CheckIcon size={13} />
                  <span className="text-[13px] font-medium text-[#111111]">{usp.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#E31B1B] px-7 py-3.5 text-[14px] font-bold text-white transition hover:bg-[#C91818] active:scale-[0.98] sm:w-auto"
              >
                Transport aanvragen <ArrowRightIcon />
              </Link>
            </div>
          </div>

          {/* Right: hero image */}
          <div className="w-full lg:w-[480px] lg:shrink-0">
            <div className="w-full overflow-hidden rounded-2xl bg-zinc-200" style={{ aspectRatio: "4/3" }}>
              <Image
                src={`/Locaties/${locatie.name}.png`}
                alt={`Transport in ${locatie.name}`}
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
// Section: SEO intro
// ---------------------------------------------------------------------------

function LocatieIntro({ locatie }: { locatie: Locatie }) {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="mx-auto max-w-[760px]">
          <p className="text-[15px] leading-[1.8] text-zinc-600">
            {locatie.introParagraph}
          </p>
          <p className="mt-4 text-[15px] leading-[1.8] text-zinc-600">
            Ons depot staat in Diemen, waardoor we {locatie.name} snel kunnen bereiken. Je betaalt een eerlijke prijs op basis van de werkelijke rijafstand. Geen vaste tarieven of verborgen kosten. Via onze website vraag je eenvoudig een prijs aan en plannen we snel een datum in.
          </p>
          <p className="mt-4 text-[15px] leading-[1.8] text-zinc-600">
            Of je nu iets hebt gekocht via Marktplaats, een nieuwe woning inricht of een grote aankoop wilt laten bezorgen in {locatie.name}. BusjeDirect staat voor je klaar. Snel, veilig en zonder gedoe.
          </p>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Section: Diensten in deze stad
// ---------------------------------------------------------------------------

function LocatieDiensten({ locatie }: { locatie: Locatie }) {
  return (
    <section className="bg-[#F5F6F7] py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <h2 className="mb-2 text-[24px] font-extrabold tracking-tight text-[#111111] sm:text-[28px]">
          Onze diensten in {locatie.name}
        </h2>
        <p className="mb-8 text-[14px] text-zinc-500">
          Kies de service die bij jouw situatie past.
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {DIENSTEN.map((dienst) => (
            <Link
              key={dienst.label}
              href={dienst.href}
              className="group flex items-center justify-between rounded-xl border border-zinc-100 bg-white px-5 py-4 shadow-sm transition hover:border-[#E31B1B]/30 hover:shadow-md"
            >
              <span className="text-[14px] font-semibold text-[#111111] group-hover:text-[#E31B1B]">
                {dienst.label}
              </span>
              <ArrowRightIcon />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Section: Wat vervoeren wij
// ---------------------------------------------------------------------------

function LocatieVervoerItems({ locatie }: { locatie: Locatie }) {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <h2 className="mb-2 text-[24px] font-extrabold tracking-tight text-[#111111] sm:text-[28px]">
          Wat vervoeren wij in {locatie.name}?
        </h2>
        <p className="mb-8 text-[14px] text-zinc-500">
          Van losse meubels tot complete inboedels. Bekijk alles wat wij voor je kunnen vervoeren.
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {VERVOER_ITEMS.map((item) => {
            const href = item.stadSlug ? `/${locatie.slug}/${item.stadSlug}` : item.href;
            return (
              <Link
                key={item.label}
                href={href}
                className="group flex items-center gap-3 rounded-xl border border-zinc-100 bg-[#F5F6F7] px-4 py-3.5 transition hover:border-[#E31B1B]/30 hover:bg-white hover:shadow-sm"
              >
                <span className="flex-1 text-[13px] font-medium text-[#111111] group-hover:text-[#E31B1B]">
                  {item.label}
                </span>
                <ArrowRightIcon size={12} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Section: Waarom BusjeDirect
// ---------------------------------------------------------------------------

function LocatieWaarom({ locatie }: { locatie: Locatie }) {
  const usps = [
    { title: "Depot in Diemen", desc: `Snel bij jou in ${locatie.name}. Korte rijtijd, eerlijke prijs.` },
    { title: "Veilig transport", desc: "Jouw spullen zijn altijd verzekerd en in goede handen." },
    { title: "Transparante prijs", desc: "Prijs op basis van afstand. Geen verborgen kosten." },
    { title: "Snel geregeld", desc: "Vandaag aangevraagd, vaak al binnen 24–48 uur onderweg." },
  ];

  return (
    <section className="bg-[#F5F6F7] py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <h2 className="mb-8 text-center text-[24px] font-extrabold tracking-tight text-[#111111] sm:text-[28px]">
          Waarom BusjeDirect in {locatie.name}?
        </h2>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {usps.map((usp) => (
            <div key={usp.title} className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF0F0]">
                <CheckIcon size={16} />
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
// Section: Prijs
// ---------------------------------------------------------------------------

function LocatiePrijs({ locatie }: { locatie: Locatie }) {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
          <div className="flex-1">
            <h2 className="text-[24px] font-extrabold tracking-tight text-[#111111] sm:text-[28px]">
              Wat kost transport in {locatie.name}?
            </h2>
            <div className="mt-4 space-y-3">
              <p className="text-[14px] leading-[1.75] text-zinc-500">
                De prijs voor transport in {locatie.name} is gebaseerd op de totale rijafstand: van ons depot in Diemen naar het ophaaladres, naar het afleveradres en terug. Hoe dichter bij Diemen, hoe voordeliger de rit.
              </p>
              <p className="text-[14px] leading-[1.75] text-zinc-500">
                Naast de afstand speelt het aantal items een rol. Via onze online prijsberekening zie je direct wat jouw transport kost. Geen verborgen kosten, geen toeslagen achteraf.
              </p>
            </div>
          </div>
          <div className="w-full rounded-2xl border border-zinc-100 bg-[#F5F6F7] p-8 lg:w-[340px] lg:shrink-0">
            <p className="text-[12px] font-bold uppercase tracking-widest text-[#E31B1B]">Prijs berekenen</p>
            <p className="mt-2 text-[26px] font-extrabold text-[#111111]">Vanaf €65,–</p>
            <p className="mt-1 text-[13px] text-zinc-500">excl. btw · op basis van afstand</p>
            <ul className="mt-5 flex flex-col gap-2.5">
              {["Prijs op basis van afstand", "Drempel tot drempel service", "Geen verborgen kosten"].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <CheckIcon />
                  <span className="text-[13px] text-zinc-600">{f}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#E31B1B] py-3.5 text-[14px] font-bold text-white transition hover:bg-[#C91818]"
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
// Section: Andere locaties
// ---------------------------------------------------------------------------

import { LOCATIES } from "@/lib/locaties";

function AndereLocaties({ locatie }: { locatie: Locatie }) {
  const others = LOCATIES.filter((l) => l.slug !== locatie.slug);
  return (
    <section className="bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <p className="mb-4 text-[13px] font-semibold uppercase tracking-widest text-zinc-400">
          Ook actief in
        </p>
        <div className="flex flex-wrap gap-2">
          {others.map((l) => (
            <Link
              key={l.slug}
              href={`/locaties/${l.slug}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-4 py-2 text-[13px] font-medium text-zinc-600 transition hover:border-[#E31B1B]/40 hover:text-[#E31B1B]"
            >
              {l.name} <ArrowRightIcon size={11} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------

function LocatieFaq({ locatie }: { locatie: Locatie }) {
  const faqs = [
    {
      question: `Rijden jullie ook in ${locatie.name}?`,
      answer: `Ja, BusjeDirect is actief in ${locatie.name} en de directe omgeving. Ons depot staat in Diemen, waardoor we ${locatie.name} snel kunnen bereiken.`,
    },
    {
      question: `Wat kost transport in ${locatie.name}?`,
      answer: `De prijs start vanaf €65 excl. btw en wordt berekend op basis van de afstand tussen het ophaal- en afleveradres én de geselecteerde items. Bereken je prijs via onze website.`,
    },
    {
      question: "Hoe snel kunnen jullie transport regelen?",
      answer: "In de meeste gevallen kunnen wij binnen 24–48 uur transport regelen. Is er beschikbaarheid? Dan kunnen wij vaak ook dezelfde dag nog rijden. Vul je aanvraag in en we nemen snel contact met je op om een datum en tijdvak af te spreken. Bij last-minute aanvragen kan een toeslag van toepassing zijn.",
    },
    {
      question: "Welke spullen kunnen jullie vervoeren?",
      answer: "Wij vervoeren meubels, witgoed, matrassen, kantoormeubels, apparatuur en complete inboedels. Alles wat niet in een gewone auto past.",
    },
    {
      question: "Helpen jullie ook met tillen?",
      answer: "Wij werken drempel tot drempel: ophalen en afleveren bij de buitendeur op de begane grond. Wij lopen geen trappen en komen niet binnenshuis. Zorg dat de spullen klaarstaan bij de buitendeur op de begane grond.",
    },
    {
      question: "Kunnen jullie ook een Marktplaats aankoop ophalen?",
      answer: `Absoluut. Vul het adres van de verkoper in als ophaaladres en jouw adres in ${locatie.name} als bestemming. Wij regelen de rest.`,
    },
  ];

  return <FaqSection faqs={faqs} bg="white" />;
}

// ---------------------------------------------------------------------------
// Bottom CTA
// ---------------------------------------------------------------------------

function LocatieBottomCta({ locatie }: { locatie: Locatie }) {
  return (
    <section className="bg-[#F5F6F7] py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="flex flex-col gap-8 rounded-2xl bg-white p-8 shadow-sm sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-[22px] font-extrabold text-[#111111] sm:text-[26px]">
              Transport regelen in {locatie.name}?
            </h2>
            <p className="mt-1 text-[14px] text-zinc-500">
              Vrijblijvend en gratis. Binnen 1 minuut geregeld.
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
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#E31B1B] px-8 py-4 text-[15px] font-bold text-white transition hover:bg-[#C91818] active:scale-[0.98] sm:w-auto"
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
// Main template export
// ---------------------------------------------------------------------------

export function LocatieTemplate({ locatie }: { locatie: Locatie }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BusjeDirect",
    "url": "https://www.busjedirect.nl",
    "telephone": "+31631356682",
    "areaServed": {
      "@type": "City",
      "name": locatie.name,
      "addressCountry": "NL",
    },
    "serviceType": "Meubeltransport en verhuisservice",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main>
        <LocatieHero locatie={locatie} />
        <LocatieIntro locatie={locatie} />
        <LocatieDiensten locatie={locatie} />
        <LocatieVervoerItems locatie={locatie} />
        <LocatieWaarom locatie={locatie} />
        <LocatiePrijs locatie={locatie} />
        <LocatieFaq locatie={locatie} />
        <AndereLocaties locatie={locatie} />
        <LocatieBottomCta locatie={locatie} />
      </main>
      <SiteFooter />
    </>
  );
}

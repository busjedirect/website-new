import Link from "next/link";
import Image from "next/image";
import { SiteFooter } from "@/components/layout/site-footer";
import { STAD_ITEM_MAP } from "@/lib/stad-items";

// ---------------------------------------------------------------------------
// Icons (inline SVG, stroke="#E31B1B", strokeWidth="1.75")
// ---------------------------------------------------------------------------

function ShieldCheckIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#E31B1B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function ClockIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#E31B1B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function TagIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#E31B1B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  );
}

function UserIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#E31B1B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
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

function CheckIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#E31B1B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowRightIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface VervoerFaq {
  question: string;
  answer: string;
}

export interface VervoerAnderItem {
  label: string;
  href: string;
}

export interface VervoerGerelateerd {
  label: string;
  href: string;
}

export interface VervoerPageData {
  /** SEO */
  metaTitle: string;
  metaDescription: string;
  /** Hero */
  slug: string;
  item: string;
  label: string;
  h1: string;
  heroSubtext: string;
  /** Hero image (from /public) */
  heroImage: string;
  /** Intro */
  introParagraphs: string[];
  /** Wanneer heb je dit nodig */
  wanneerItems: { title: string; description: string }[];
  /** Prijs */
  prijsUitleg: string[];
  /** FAQ */
  faqs: VervoerFaq[];
  /** Andere vervoeren items (NOT self) */
  anderItems: VervoerAnderItem[];
  /** Gerelateerde diensten */
  gerelateerdeItems: VervoerGerelateerd[];
}

// ---------------------------------------------------------------------------
// Section: Hero
// ---------------------------------------------------------------------------

function VervoerHero({ data }: { data: VervoerPageData }) {
  return (
    <section className="bg-[#F5F6F7] py-14 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#E31B1B]">
              {data.label}
            </p>
            <h1 className="text-[32px] font-extrabold leading-[1.1] tracking-tight text-[#111111] sm:text-[42px]">
              {data.h1}
            </h1>
            <p className="mt-5 text-[15px] leading-[1.75] text-zinc-500">
              {data.heroSubtext}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {[
                { icon: <ShieldCheckIcon size={15} />, label: "Veilig transport" },
                { icon: <ClockIcon size={15} />, label: "Snel geregeld" },
                { icon: <TagIcon size={15} />, label: "Transparante prijs" },
              ].map((usp) => (
                <div
                  key={usp.label}
                  className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm"
                >
                  {usp.icon}
                  <span className="text-[13px] font-medium text-[#111111]">{usp.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl bg-[#E31B1B] px-7 py-3.5 text-[14px] font-bold text-white transition hover:bg-[#C91818] active:scale-[0.98]"
              >
                Transport aanvragen <ArrowRightIcon />
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-[480px] lg:shrink-0">
            <div className="w-full overflow-hidden rounded-2xl bg-zinc-200" style={{ aspectRatio: "4/3" }}>
              <Image
                src={data.heroImage}
                alt={`${data.label} door BusjeDirect`}
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
// Section: SEO Intro
// ---------------------------------------------------------------------------

function VervoerIntro({ data }: { data: VervoerPageData }) {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="mx-auto max-w-[760px]">
          {data.introParagraphs.map((p, i) => (
            <p
              key={i}
              className={`text-[15px] leading-[1.8] text-zinc-600${i > 0 ? " mt-4" : ""}`}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Section: Wanneer heb je dit nodig
// ---------------------------------------------------------------------------

function VervoerWanneer({ data }: { data: VervoerPageData }) {
  return (
    <section className="bg-[#F5F6F7] py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <h2 className="mb-8 text-[24px] font-extrabold tracking-tight text-[#111111] sm:text-[28px]">
          Wanneer heb je {data.item.toLowerCase()} vervoer nodig?
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.wanneerItems.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3 rounded-xl border border-zinc-100 bg-white p-5 shadow-sm"
            >
              <span className="mt-0.5 shrink-0">
                <CheckIcon size={16} />
              </span>
              <div>
                <p className="text-[14px] font-semibold text-[#111111]">{item.title}</p>
                <p className="mt-1 text-[13px] leading-[1.6] text-zinc-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Section: Hoe wij [item] vervoeren (4 steps)
// ---------------------------------------------------------------------------

function VervoerHoeHetWerkt({ data }: { data: VervoerPageData }) {
  const item = data.item.toLowerCase();
  const steps = [
    { n: "1", title: "Aanvraag", desc: `Vul eenvoudig de ophaal- en afleverlocatie in en selecteer je items via onze website.` },
    { n: "2", title: "Prijs berekenen", desc: "Je ziet direct een duidelijke prijs op basis van afstand en items. Geen verrassingen achteraf." },
    { n: "3", title: "Ophalen", desc: `We halen je ${item} op het afgesproken moment op. In veel gevallen kunnen we dit al binnen 24–48 uur regelen, soms zelfs dezelfde dag.` },
    { n: "4", title: "Bezorging", desc: `We leveren je ${item} netjes af bij de buitendeur op de begane grond. Betaling vindt plaats bij aflevering.` },
  ];
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <h2 className="mb-8 text-center text-[24px] font-extrabold tracking-tight text-[#111111] sm:text-[28px]">
          Hoe wij {data.item.toLowerCase()} vervoeren
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.n} className="relative flex flex-col items-center text-center">
              {i < steps.length - 1 && (
                <div className="absolute -right-3 top-5 hidden lg:block" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFBABA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              )}
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF0F0] ring-4 ring-white">
                <span className="text-[17px] font-extrabold text-[#E31B1B]">{step.n}</span>
              </div>
              <p className="mt-3 text-[14px] font-bold text-[#111111]">{step.title}</p>
              <p className="mt-1 text-[12.5px] leading-[1.6] text-zinc-500">{step.desc}</p>
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

function VervoerPrijs({ data }: { data: VervoerPageData }) {
  return (
    <section className="bg-[#F5F6F7] py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
          <div className="flex-1">
            <h2 className="text-[24px] font-extrabold tracking-tight text-[#111111] sm:text-[28px]">
              Wat kost {data.item.toLowerCase()} vervoeren?
            </h2>
            <div className="mt-4 space-y-3">
              {data.prijsUitleg.map((p, i) => (
                <p key={i} className="text-[14px] leading-[1.75] text-zinc-500">
                  {p}
                </p>
              ))}
            </div>
          </div>
          <div className="w-full rounded-2xl border border-zinc-100 bg-white p-8 shadow-sm lg:w-[360px] lg:shrink-0">
            <p className="text-[13px] font-semibold uppercase tracking-widest text-[#E31B1B]">
              Prijs berekenen
            </p>
            <p className="mt-2 text-[22px] font-extrabold text-[#111111]">Vanaf €65,–</p>
            <p className="mt-1 text-[13px] text-zinc-500">excl. btw · op basis van afstand</p>
            <ul className="mt-5 flex flex-col gap-2">
              {[
                "Prijs op basis van afstand",
                "Drempel tot drempel service",
                "Geen verborgen kosten",
              ].map((f) => (
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
// Section: Gerelateerde diensten
// ---------------------------------------------------------------------------

function VervoerGerelateerde({ items }: { items: VervoerGerelateerd[] }) {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <h2 className="mb-6 text-[24px] font-extrabold tracking-tight text-[#111111] sm:text-[28px]">
          Gerelateerde diensten
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group flex items-center justify-between rounded-xl border border-zinc-100 bg-[#F5F6F7] px-5 py-4 transition hover:border-[#E31B1B]/30 hover:bg-white hover:shadow-sm"
            >
              <span className="text-[13.5px] font-medium text-[#111111] group-hover:text-[#E31B1B]">
                {item.label}
              </span>
              <ArrowRightIcon size={13} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Section: Andere items grid
// ---------------------------------------------------------------------------

function VervoerAndereItems({ items }: { items: VervoerAnderItem[] }) {
  return (
    <section className="bg-[#F5F6F7] py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <h2 className="mb-2 text-[24px] font-extrabold tracking-tight text-[#111111] sm:text-[28px]">
          Meer items vervoeren
        </h2>
        <p className="mb-8 text-[14px] text-zinc-500">
          Bekijk alle items die wij voor je kunnen vervoeren.
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group flex items-center gap-3 rounded-xl border border-zinc-100 bg-white px-4 py-3.5 transition hover:border-[#E31B1B]/30 hover:shadow-sm"
            >
              <span className="flex-1 text-[13px] font-medium text-[#111111] group-hover:text-[#E31B1B]">
                {item.label}
              </span>
              <ArrowRightIcon size={12} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Section: Locaties
// ---------------------------------------------------------------------------

function VervoerLocaties({ data }: { data: VervoerPageData }) {
  // Top 5 steden — linken naar /[stad]/[item] als die pagina bestaat
  const locaties = [
    { city: "Amsterdam", slug: "amsterdam" },
    { city: "Haarlem", slug: "haarlem" },
    { city: "Almere", slug: "almere" },
    { city: "Utrecht", slug: "utrecht" },
    { city: "Amstelveen", slug: "amstelveen" },
  ];

  // Controleer of er een stad+item pagina bestaat voor dit item
  const hasStadItemPage = Boolean(STAD_ITEM_MAP[data.slug]);
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <h2 className="mb-2 text-[24px] font-extrabold tracking-tight text-[#111111] sm:text-[28px]">
          {data.label} in jouw regio
        </h2>
        <p className="mb-8 text-[14px] text-zinc-500">Wij zijn actief door heel Nederland.</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          {locaties.map((loc) => {
            const href = hasStadItemPage
              ? `/${loc.slug}/${data.slug}`
              : `/locaties/${loc.slug}`;
            return (
              <Link
                key={loc.city}
                href={href}
                className="group flex items-center justify-between rounded-xl border border-zinc-100 bg-[#F5F6F7] px-5 py-4 transition hover:border-[#E31B1B]/30 hover:bg-white hover:shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <MapPinIcon size={16} />
                  <span className="text-[13.5px] font-medium text-[#111111]">{loc.city}</span>
                </div>
                <ArrowRightIcon size={13} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Section: FAQ
// ---------------------------------------------------------------------------

import { FaqSection as SharedFaqSection } from "@/components/ui/faq-section";

function VervoerFaqSection({ faqs }: { faqs: VervoerFaq[] }) {
  return <SharedFaqSection faqs={faqs} />;
}

// ---------------------------------------------------------------------------
// Section: Bottom CTA
// ---------------------------------------------------------------------------

function VervoerBottomCta({ data }: { data: VervoerPageData }) {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="flex flex-col gap-8 rounded-2xl bg-[#F5F6F7] p-8 shadow-sm sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-[22px] font-extrabold text-[#111111] sm:text-[26px]">
              Direct {data.item.toLowerCase()} vervoer regelen?
            </h2>
            <p className="mt-1 text-[14px] text-zinc-500">
              Vrijblijvend en gratis. Binnen 1 minuut geregeld.
            </p>
            <ul className="mt-5 flex flex-col gap-2.5">
              {[
                "Binnen 1 minuut geregeld",
                "Vrijblijvend en gratis",
                "Snel een prijs op maat",
              ].map((item) => (
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
              className="inline-flex items-center gap-2 rounded-xl bg-[#E31B1B] px-8 py-4 text-[15px] font-bold text-white transition hover:bg-[#C91818] active:scale-[0.98]"
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

export function VervoerPageTemplate({ data }: { data: VervoerPageData }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.label,
    "description": data.heroSubtext,
    "provider": {
      "@type": "LocalBusiness",
      "name": "BusjeDirect",
      "url": "https://www.busjedirect.nl",
      "telephone": "+31631356682",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Diemen",
        "addressCountry": "NL",
      },
    },
    "areaServed": {
      "@type": "Country",
      "name": "Netherlands",
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "EUR",
      "price": "65",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "65",
        "priceCurrency": "EUR",
        "description": "Vanaf €65 excl. btw",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main>
        <VervoerHero data={data} />
        <VervoerIntro data={data} />
        <VervoerWanneer data={data} />
        <VervoerHoeHetWerkt data={data} />
        <VervoerPrijs data={data} />
        <VervoerGerelateerde items={data.gerelateerdeItems} />
        <VervoerAndereItems items={data.anderItems} />
        <VervoerLocaties data={data} />
        <VervoerFaqSection faqs={data.faqs} />
        <VervoerBottomCta data={data} />
      </main>
      <SiteFooter />
    </>
  );
}

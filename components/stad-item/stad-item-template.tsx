import Link from "next/link";
import Image from "next/image";
import { SiteFooter } from "@/components/layout/site-footer";
import { FaqSection } from "@/components/ui/faq-section";
import type { Locatie } from "@/lib/locaties";
import type { StadItem } from "@/lib/stad-items";
import { STAD_ITEMS, getItemIntroParagraph, getItemFaqs, getItemDrempelParagraph, getStadPrijsTekst } from "@/lib/stad-items";
import { LOCATIES } from "@/lib/locaties";

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

function MapPinIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#E31B1B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2C8.69 2 6 4.69 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.31-2.69-6-6-6z" />
      <circle cx="12" cy="8" r="2" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

function Hero({ locatie, stadItem }: { locatie: Locatie; stadItem: StadItem }) {
  return (
    <section className="bg-[#F5F6F7] py-14 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1">
            <div className="mb-3 flex items-center gap-2">
              <MapPinIcon />
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#E31B1B]">
                {locatie.name}
              </p>
            </div>
            <h1 className="text-[32px] font-extrabold leading-[1.1] tracking-tight text-[#111111] sm:text-[44px]">
              {stadItem.label} in {locatie.name}
            </h1>
            <p className="mt-5 text-[15px] leading-[1.75] text-zinc-500">
              Op zoek naar {stadItem.item} vervoer in {locatie.name}? BusjeDirect haalt op en bezorgt snel, veilig en tegen een vaste prijs. Drempel-tot-drempeltransport door heel {locatie.name}.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {["Veilig transport", "Snel geregeld", "Transparante prijs"].map((usp) => (
                <div key={usp} className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                  <CheckIcon size={13} />
                  <span className="text-[13px] font-medium text-[#111111]">{usp}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#E31B1B] px-7 py-3.5 text-[14px] font-bold text-white transition hover:bg-[#C91818] active:scale-[0.98] sm:w-auto"
              >
                Transport aanvragen <ArrowRightIcon />
              </Link>
              <Link
                href={stadItem.vervoerHref}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-200 px-7 py-3.5 text-[14px] font-semibold text-[#111111] transition hover:bg-zinc-50 sm:w-auto"
              >
                Meer over {stadItem.label.toLowerCase()}
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-[480px] lg:shrink-0">
            <div className="w-full overflow-hidden rounded-2xl bg-zinc-200" style={{ aspectRatio: "4/3" }}>
              <Image
                src={stadItem.heroImage}
                alt={`${stadItem.label} in ${locatie.name} door BusjeDirect`}
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
// SEO Intro
// ---------------------------------------------------------------------------

function Intro({ locatie, stadItem }: { locatie: Locatie; stadItem: StadItem }) {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="mx-auto max-w-[760px]">
          <p className="text-[15px] leading-[1.8] text-zinc-600">
            {getItemIntroParagraph(stadItem.slug, locatie.name)}
          </p>
          <p className="mt-4 text-[15px] leading-[1.8] text-zinc-600">
            {locatie.introParagraph}
          </p>
          <p className="mt-4 text-[15px] leading-[1.8] text-zinc-600">
            {getItemDrempelParagraph(stadItem.slug)}
          </p>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Hoe het werkt
// ---------------------------------------------------------------------------

function HoeHetWerkt({ locatie, stadItem }: { locatie: Locatie; stadItem: StadItem }) {
  const steps = [
    { n: "1", title: "Aanvraag", desc: "Vul de ophaal- en afleverlocatie in en selecteer je items via onze website." },
    { n: "2", title: "Prijs berekenen", desc: "Je ziet direct een vaste prijs op basis van afstand en items. Geen verrassingen." },
    { n: "3", title: "Ophalen", desc: `We halen je ${stadItem.item} op in ${locatie.name} op het afgesproken moment. Vaak al binnen 24–48 uur.` },
    { n: "4", title: "Bezorging", desc: `We leveren je ${stadItem.item} af bij de buitendeur op de begane grond. Betaling bij aflevering.` },
  ];

  return (
    <section className="bg-[#F5F6F7] py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <h2 className="mb-8 text-center text-[24px] font-extrabold tracking-tight text-[#111111] sm:text-[28px]">
          Hoe werkt {stadItem.label.toLowerCase()} in {locatie.name}?
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.n} className="relative flex flex-col items-center text-center">
              {i < steps.length - 1 && (
                <div className="absolute -right-3 top-5 hidden lg:block" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFBABA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
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
// Prijs
// ---------------------------------------------------------------------------

function Prijs({ locatie, stadItem }: { locatie: Locatie; stadItem: StadItem }) {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
          <div className="flex-1">
            <h2 className="text-[24px] font-extrabold tracking-tight text-[#111111] sm:text-[28px]">
              Wat kost {stadItem.label.toLowerCase()} in {locatie.name}?
            </h2>
            <div className="mt-4 space-y-3">
              <p className="text-[14px] leading-[1.75] text-zinc-500">
                {getStadPrijsTekst(locatie.name, stadItem.label)}
              </p>
              <p className="text-[14px] leading-[1.75] text-zinc-500">
                Via onze website zie je direct wat jouw transport kost. Geen verborgen kosten, geen toeslagen achteraf.
              </p>
            </div>
          </div>
          <div className="w-full rounded-2xl border border-zinc-100 bg-[#F5F6F7] p-8 lg:w-[340px] lg:shrink-0">
            <p className="text-[12px] font-bold uppercase tracking-widest text-[#E31B1B]">Prijs berekenen</p>
            <p className="mt-2 text-[26px] font-extrabold text-[#111111]">Vanaf €65,–</p>
            <p className="mt-1 text-[13px] text-zinc-500">excl. btw · op basis van afstand</p>
            <ul className="mt-5 flex flex-col gap-2.5">
              {["Prijs op basis van afstand", "Drempel-tot-drempeltransport", "Geen verborgen kosten"].map((f) => (
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
// Andere steden voor dit item
// ---------------------------------------------------------------------------

function AndereSteden({ locatie, stadItem }: { locatie: Locatie; stadItem: StadItem }) {
  const others = LOCATIES.filter((l) => l.slug !== locatie.slug).slice(0, 8);
  return (
    <section className="bg-[#F5F6F7] py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <h2 className="mb-2 text-[24px] font-extrabold tracking-tight text-[#111111] sm:text-[28px]">
          Wij vervoeren ook {stadItem.itemMeervoud} in:
        </h2>
        <p className="mb-6 text-[14px] text-zinc-500">Wij zijn actief door heel Nederland.</p>
        <div className="flex flex-wrap gap-2">
          {others.map((l) => (
            <Link
              key={l.slug}
              href={`/${l.slug}/${stadItem.slug}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-4 py-2 text-[13px] font-medium text-zinc-600 transition hover:border-[#E31B1B]/40 hover:text-[#E31B1B]"
            >
              {stadItem.label} in {l.name} <ArrowRightIcon size={11} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Andere items in deze stad
// ---------------------------------------------------------------------------

function AndereItems({ locatie, stadItem }: { locatie: Locatie; stadItem: StadItem }) {
  const others = STAD_ITEMS.filter((i) => i.slug !== stadItem.slug);
  return (
    <section className="bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <p className="mb-4 text-[13px] font-semibold uppercase tracking-widest text-zinc-400">
          Meer vervoeren in {locatie.name}
        </p>
        <div className="flex flex-wrap gap-2">
          {others.map((i) => (
            <Link
              key={i.slug}
              href={`/${locatie.slug}/${i.slug}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-4 py-2 text-[13px] font-medium text-zinc-600 transition hover:border-[#E31B1B]/40 hover:text-[#E31B1B]"
            >
              {i.label} <ArrowRightIcon size={11} />
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

function StadItemFaq({ locatie, stadItem }: { locatie: Locatie; stadItem: StadItem }) {
  const faqs = getItemFaqs(stadItem.slug, locatie.name);
  return <FaqSection faqs={faqs} bg="white" />;
}

// ---------------------------------------------------------------------------
// Bottom CTA
// ---------------------------------------------------------------------------

function BottomCta({ locatie, stadItem }: { locatie: Locatie; stadItem: StadItem }) {
  return (
    <section className="bg-[#F5F6F7] py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="flex flex-col gap-8 rounded-2xl bg-white p-8 shadow-sm sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-[22px] font-extrabold text-[#111111] sm:text-[26px]">
              {stadItem.label} in {locatie.name} regelen?
            </h2>
            <p className="mt-1 text-[14px] text-zinc-500">
              Vrijblijvend en gratis. Binnen 1 minuut geregeld.
            </p>
            <ul className="mt-5 flex flex-col gap-2.5">
              {["Binnen 1 minuut geregeld", "Vaste prijs vooraf", "Snel een datum inplannen"].map((item) => (
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
// Main export
// ---------------------------------------------------------------------------

export function StadItemTemplate({ locatie, stadItem }: { locatie: Locatie; stadItem: StadItem }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${stadItem.label} in ${locatie.name}`,
    "description": `${stadItem.label} in ${locatie.name} door BusjeDirect. Drempel-tot-drempeltransport vanaf €65 excl. btw.`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "BusjeDirect",
      "url": "https://www.busjedirect.nl",
      "telephone": "+31631356682",
    },
    "areaServed": {
      "@type": "City",
      "name": locatie.name,
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "EUR",
      "price": "65",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main>
        <Hero locatie={locatie} stadItem={stadItem} />
        <Intro locatie={locatie} stadItem={stadItem} />
        <HoeHetWerkt locatie={locatie} stadItem={stadItem} />
        <Prijs locatie={locatie} stadItem={stadItem} />
        <StadItemFaq locatie={locatie} stadItem={stadItem} />
        <AndereSteden locatie={locatie} stadItem={stadItem} />
        <AndereItems locatie={locatie} stadItem={stadItem} />
        <BottomCta locatie={locatie} stadItem={stadItem} />
      </main>
      <SiteFooter />
    </>
  );
}

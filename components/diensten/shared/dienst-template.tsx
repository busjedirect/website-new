import Link from "next/link";
import Image from "next/image";
import { SiteFooter } from "@/components/layout/site-footer";
import {
  ShieldCheckIcon,
  ClockIcon,
  TagIcon,
  UserIcon,
  MapPinIcon,
  CheckIcon,
  ArrowRightIcon,
  TruckIcon,
} from "./dienst-icons";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface DienstFaq {
  question: string;
  answer: string;
}

export interface DienstVervoerItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

export interface DienstLocatie {
  city: string;
  href: string;
}

export interface DienstPageData {
  /** SEO */
  metaTitle: string;
  metaDescription: string;
  /** Hero */
  label: string;
  h1: string;
  heroSubtext: string;
  /** Hero image (from /public) */
  heroImage: string;
  /** Intro */
  introParagraphs: string[];
  /** Wat houdt het in */
  watHoudtIn: { title: string; bullets: string[] }[];
  /** Wanneer kiezen */
  wanneerKiezen: { situation: string; description: string }[];
  /** Wat vervoeren wij */
  vervoerItems: DienstVervoerItem[];
  /** Prijs */
  prijsTitel: string;
  prijsUitleg: string[];
  /** FAQ */
  faqs: DienstFaq[];
  /** CTA */
  ctaTitel: string;
  /** Andere diensten (interne links) */
  andereDiensten: { label: string; href: string }[];
}

// ---------------------------------------------------------------------------
// Shared sub-components
// ---------------------------------------------------------------------------

// Hero
function DienstHero({ data }: { data: DienstPageData }) {
  return (
    <section className="bg-[#F5F6F7] py-14 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#FF7A00]">
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
                <div key={usp.label} className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                  {usp.icon}
                  <span className="text-[13px] font-medium text-[#111111]">{usp.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl bg-[#FF7A00] px-7 py-3.5 text-[14px] font-bold text-white transition hover:bg-[#E86E00] active:scale-[0.98]"
              >
                Transport aanvragen <ArrowRightIcon />
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-[480px] lg:shrink-0">
            <div className="w-full overflow-hidden rounded-2xl bg-zinc-200" style={{ aspectRatio: "4/3" }}>
              <Image
                src={data.heroImage}
                alt={data.label}
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

// Intro (SEO tekst)
function DienstIntro({ data }: { data: DienstPageData }) {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="mx-auto max-w-[760px]">
          {data.introParagraphs.map((p, i) => (
            <p key={i} className={`text-[15px] leading-[1.8] text-zinc-600 ${i > 0 ? "mt-4" : ""}`}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

// Wat houdt het in
function DienstWatHoudtIn({ data }: { data: DienstPageData }) {
  return (
    <section className="bg-[#F5F6F7] py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <h2 className="mb-8 text-[24px] font-extrabold tracking-tight text-[#111111] sm:text-[28px]">
          Wat houdt de dienst in?
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {data.watHoudtIn.map((block) => (
            <div key={block.title} className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-[15px] font-bold text-[#111111]">{block.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {block.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <span className="mt-0.5 shrink-0"><CheckIcon /></span>
                    <span className="text-[13px] leading-[1.6] text-zinc-500">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Wanneer kiezen
function DienstWanneer({ data }: { data: DienstPageData }) {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <h2 className="mb-8 text-[24px] font-extrabold tracking-tight text-[#111111] sm:text-[28px]">
          Wanneer kies je voor deze dienst?
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.wanneerKiezen.map((item) => (
            <div key={item.situation} className="flex items-start gap-3 rounded-xl border border-zinc-100 p-5">
              <span className="mt-0.5 shrink-0"><CheckIcon size={16} /></span>
              <div>
                <p className="text-[14px] font-semibold text-[#111111]">{item.situation}</p>
                <p className="mt-1 text-[13px] leading-[1.6] text-zinc-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Wat vervoeren wij (interne links)
function DienstVervoeren({ data }: { data: DienstPageData }) {
  if (!data.vervoerItems.length) return null;
  return (
    <section className="bg-[#F5F6F7] py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <h2 className="mb-2 text-[24px] font-extrabold tracking-tight text-[#111111] sm:text-[28px]">
          Wat vervoeren wij?
        </h2>
        <p className="mb-8 text-[14px] text-zinc-500">Bekijk alles wat wij voor je kunnen vervoeren.</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {data.vervoerItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group flex items-center gap-3 rounded-xl border border-zinc-100 bg-white px-4 py-3.5 transition hover:border-[#FF7A00]/30 hover:shadow-sm"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFF3E8]">
                {item.icon}
              </div>
              <span className="text-[13px] font-medium text-[#111111] group-hover:text-[#FF7A00]">{item.label}</span>
              <ArrowRightIcon size={12} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Prijs sectie
function DienstPrijs({ data }: { data: DienstPageData }) {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
          <div className="flex-1">
            <h2 className="text-[24px] font-extrabold tracking-tight text-[#111111] sm:text-[28px]">
              {data.prijsTitel}
            </h2>
            <div className="mt-4 space-y-3">
              {data.prijsUitleg.map((p, i) => (
                <p key={i} className="text-[14px] leading-[1.75] text-zinc-500">{p}</p>
              ))}
            </div>
          </div>
          <div className="w-full rounded-2xl border border-zinc-100 bg-[#F5F6F7] p-8 lg:w-[360px] lg:shrink-0">
            <p className="text-[13px] font-semibold uppercase tracking-widest text-[#FF7A00]">Prijs berekenen</p>
            <p className="mt-2 text-[22px] font-extrabold text-[#111111]">Vanaf €65,–</p>
            <p className="mt-1 text-[13px] text-zinc-500">excl. btw · op basis van afstand</p>
            <ul className="mt-5 flex flex-col gap-2">
              {["Prijs op basis van afstand", "Drempel tot drempel service", "Geen verborgen kosten"].map((f) => (
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

// Waarom BusjeDirect
function DienstWaarom() {
  const items = [
    { icon: <ClockIcon />, title: "Snel geregeld", desc: "Vandaag aangevraagd, snel onderweg." },
    { icon: <ShieldCheckIcon />, title: "Veilig transport", desc: "Jouw spullen zijn altijd verzekerd." },
    { icon: <TagIcon />, title: "Transparante prijs", desc: "Geen verborgen kosten, vaste prijs vooraf." },
    { icon: <UserIcon />, title: "Ervaren chauffeurs", desc: "Professioneel, vriendelijk en zorgvuldig." },
  ];
  return (
    <section className="bg-[#F5F6F7] py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <h2 className="mb-8 text-center text-[24px] font-extrabold tracking-tight text-[#111111] sm:text-[28px]">
          Waarom BusjeDirect?
        </h2>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF3E8]">
                {item.icon}
              </div>
              <p className="mt-3 text-[14px] font-bold text-[#111111]">{item.title}</p>
              <p className="mt-1 text-[12.5px] leading-[1.6] text-zinc-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Locaties
function DienstLocaties({ data, dienstLabel }: { data: DienstPageData; dienstLabel: string }) {
  const locaties: DienstLocatie[] = [
    { city: "Amsterdam", href: `/locaties/amsterdam` },
    { city: "Haarlem", href: `/locaties/haarlem` },
    { city: "Almere", href: `/locaties/almere` },
    { city: "Utrecht", href: `/locaties/utrecht` },
  ];
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <h2 className="mb-2 text-[24px] font-extrabold tracking-tight text-[#111111] sm:text-[28px]">
          {dienstLabel} in jouw regio
        </h2>
        <p className="mb-8 text-[14px] text-zinc-500">Wij zijn actief door heel Nederland.</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {locaties.map((loc) => (
            <Link
              key={loc.city}
              href={loc.href}
              className="group flex items-center justify-between rounded-xl border border-zinc-100 bg-[#F5F6F7] px-5 py-4 transition hover:border-[#FF7A00]/30 hover:bg-white hover:shadow-sm"
            >
              <div className="flex items-center gap-2.5">
                <MapPinIcon size={16} />
                <span className="text-[13.5px] font-medium text-[#111111]">{loc.city}</span>
              </div>
              <ArrowRightIcon size={13} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Hoe het werkt
function DienstHoeHetWerkt() {
  const steps = [
    { n: "1", title: "Aanvraag", desc: "Vul je gegevens in via onze website." },
    { n: "2", title: "Offerte", desc: "Ontvang direct een prijs op maat." },
    { n: "3", title: "Ophalen", desc: "We halen je spullen op op het afgesproken moment." },
    { n: "4", title: "Bezorging", desc: "We leveren alles veilig af op de gewenste locatie." },
  ];
  return (
    <section className="bg-[#F5F6F7] py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <h2 className="mb-8 text-center text-[24px] font-extrabold tracking-tight text-[#111111] sm:text-[28px]">
          Zo werkt het
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.n} className="relative flex flex-col items-center text-center">
              {i < steps.length - 1 && (
                <div className="absolute -right-3 top-5 hidden lg:block" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFD4A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
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
      </div>
    </section>
  );
}

// FAQ
import { FaqSection as SharedFaqSection } from "@/components/ui/faq-section";

function DienstFaqSection({ faqs }: { faqs: DienstFaq[] }) {
  return <SharedFaqSection faqs={faqs} bg="white" />;
}

// FAQ item — client component inline
import { DienstFaqItem as FaqItem } from "./dienst-faq-item";

// CTA blok
function DienstCtaBlok({ data }: { data: DienstPageData }) {
  return (
    <section className="bg-[#F5F6F7] py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="flex flex-col gap-8 rounded-2xl bg-white p-8 shadow-sm sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-[22px] font-extrabold text-[#111111] sm:text-[26px]">{data.ctaTitel}</h2>
            <p className="mt-1 text-[14px] text-zinc-500">Vrijblijvend en gratis. Binnen 1 minuut geregeld.</p>
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
              className="inline-flex items-center gap-2 rounded-xl bg-[#FF7A00] px-8 py-4 text-[15px] font-bold text-white transition hover:bg-[#E86E00] active:scale-[0.98]"
            >
              Transport aanvragen <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Andere diensten
function AndereDiensten({ diensten }: { diensten: { label: string; href: string }[] }) {
  return (
    <section className="bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <p className="mb-4 text-[13px] font-semibold uppercase tracking-widest text-zinc-400">Bekijk ook</p>
        <div className="flex flex-wrap gap-3">
          {diensten.map((d) => (
            <Link
              key={d.label}
              href={d.href}
              className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-4 py-2 text-[13px] font-medium text-zinc-700 transition hover:border-[#FF7A00]/40 hover:text-[#FF7A00]"
            >
              {d.label} <ArrowRightIcon size={12} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Main template
// ---------------------------------------------------------------------------

export function DienstPageTemplate({ data }: { data: DienstPageData }) {
  return (
    <>
      <main>
        <DienstHero data={data} />
        <DienstIntro data={data} />
        <DienstWatHoudtIn data={data} />
        <DienstWanneer data={data} />
        <DienstVervoeren data={data} />
        <DienstPrijs data={data} />
        <DienstWaarom />
        <DienstLocaties data={data} dienstLabel={data.label} />
        <DienstHoeHetWerkt />
        <DienstFaqSection faqs={data.faqs} />
        <DienstCtaBlok data={data} />
        <AndereDiensten diensten={data.andereDiensten} />
      </main>
      <SiteFooter />
    </>
  );
}

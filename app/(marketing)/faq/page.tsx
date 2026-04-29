import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { FaqItem } from "@/components/ui/faq-item";

export const metadata: Metadata = {
  title: "Veelgestelde vragen",
  description:
    "Antwoorden op vragen over prijs, werkwijze, betaling en werkgebied. Staat jouw vraag er niet bij? Bel of mail ons direct.",
};

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const FAQ_CATEGORIES = [
  {
    id: "service",
    title: "Service & werkwijze",
    faqs: [
      {
        question: "Hoe werkt BusjeDirect?",
        answer:
          "Vul op onze website je ophaal- en afleveradres in en geef aan wat je wilt laten vervoeren. Je ziet direct de prijs. Na bevestiging plannen we een datum en tijdvak in en zorgen we voor het transport.",
      },
      {
        question: "Komen jullie ook binnenshuis of lopen jullie trappen?",
        answer:
          "Wij werken drempel tot drempel: ophalen en afleveren bij de buitendeur op de begane grond. Wij lopen geen trappen en komen niet binnenshuis. Zorg dat de spullen klaarstaan bij de buitendeur op de begane grond.",
      },
      {
        question: "Rijden jullie ook in het weekend?",
        answer:
          "Ja, wij zijn ook in het weekend beschikbaar. Bij het plannen van je aanvraag kun je zelf een datum en tijdvak kiezen dat jou uitkomt, inclusief zaterdag en zondag.",
      },
      {
        question: "Hoe snel kunnen jullie transport regelen?",
        answer:
          "In de meeste gevallen kunnen wij binnen 24–48 uur transport regelen. Is er beschikbaarheid? Dan kunnen wij vaak ook dezelfde dag nog rijden. Vul je aanvraag in en we nemen snel contact met je op om een datum en tijdvak af te spreken. Bij last-minute aanvragen kan een toeslag van toepassing zijn.",
      },
      {
        question: "Hoe word ik bevestigd na mijn aanvraag?",
        answer:
          "Na je aanvraag ontvang je een bevestigingsmail. Wij nemen daarna contact met je op via WhatsApp of sms om de aanvraag definitief te bevestigen.",
      },
      {
        question: "Is mijn transport verzekerd?",
        answer:
          "Wij gaan zorgvuldig om met uw goederen. Tijdens transport geldt een beperkte aansprakelijkheid conform onze algemene voorwaarden. Wij adviseren om waardevolle goederen vooraf te melden en indien nodig aanvullend te verzekeren. Eventuele schade dient direct bij levering gemeld te worden.",
      },
    ],
  },
  {
    id: "prijs",
    title: "Prijs & betaling",
    faqs: [
      {
        question: "Wat kost transport?",
        answer:
          "De prijs start vanaf €65 excl. btw en wordt berekend op basis van de afstand tussen het ophaal- en afleveradres én de geselecteerde items. Via onze website zie je direct wat jouw transport kost.",
      },
      {
        question: "Zijn er extra kosten?",
        answer:
          "De prijs is inclusief 15 minuten laadtijd en 15 minuten lostijd. Duurt het laden of lossen langer? Dan rekenen wij €25 per 20 minuten extra wachttijd. Voor adressen in drukke delen van Amsterdam (grachten, smalle straten of moeilijk bereikbare plekken) geldt een toeslag van €15 per adres i.v.m. extra tijd en bereikbaarheid.",
      },
      {
        question: "Zijn de prijzen inclusief of exclusief btw?",
        answer:
          "Alle prijzen op onze website zijn exclusief btw. Het btw-bedrag wordt apart vermeld bij de prijsopgave.",
      },
      {
        question: "Welke betaalmethoden accepteren jullie?",
        answer:
          "Betaling vindt plaats bij aflevering. Je kunt betalen via pin, contant of betaalverzoek. Bij transporten over langere afstanden kunnen wij een aanbetaling vragen. Dit wordt altijd vooraf duidelijk gecommuniceerd.",
      },
    ],
  },
  {
    id: "wat-vervoeren",
    title: "Wat vervoeren wij",
    faqs: [
      {
        question: "Welke spullen kunnen jullie vervoeren?",
        answer:
          "Wij vervoeren meubels, witgoed, matrassen, kantoormeubels, apparatuur en complete inboedels. Kortom: alles wat niet in een gewone auto past. Bekijk ons volledige overzicht op de pagina Wat we vervoeren.",
      },
      {
        question: "Kunnen jullie ook een bank, kast of wasmachine vervoeren?",
        answer:
          "Ja, wij vervoeren dagelijks grote en zware items zoals banken, kasten, wasmachines en koelkasten. Onze chauffeurs zorgen voor veilig laden, transport en lossen.",
      },
      {
        question: "Halen jullie spullen op van Marktplaats of IKEA?",
        answer:
          "Ja, wij bieden een ophaalservice voor aankopen via Marktplaats, IKEA of andere winkels. Vul het adres van de verkoper of winkel in als ophaaladres en jouw adres als bestemming.",
      },
      {
        question: "Doen jullie ook kleine verhuizingen?",
        answer:
          "Wij zijn gespecialiseerd in kleine verhuizingen. Of het nu gaat om een paar meubels of een complete studio, wij regelen het snel en efficiënt. Kleine verhuizingen kun je eenvoudig via onze website boeken. Gaat het om een grotere verhuizing of veel spullen? Stuur ons dan een e-mail met de verhuisinformatie, dan maken wij een prijs op maat.",
      },
      {
        question: "Kunnen jullie ook internationaal vervoeren?",
        answer:
          "Ja, wij verzorgen ook transporten naar en vanuit heel Europa. Neem contact op voor een offerte op maat voor jouw internationale rit.",
      },
    ],
  },
  {
    id: "werkgebied",
    title: "Werkgebied",
    faqs: [
      {
        question: "In welke regio's rijden jullie?",
        answer:
          "Wij rijden vanuit ons depot in Diemen en zijn actief in heel Nederland. Regelmatig verzorgen wij transporten in onder andere Amsterdam, Amstelveen, Haarlem, Zaandam, Purmerend, Almere, Hoofddorp, Badhoevedorp, Weesp, Bussum en Utrecht. Daarnaast rijden wij ook internationaal binnen Europa.",
      },
      {
        question: "Rijden jullie ook buiten de Randstad?",
        answer:
          "Wij zijn voornamelijk actief in de regio Amsterdam en omgeving, maar rijden door heel Nederland. Ook buiten de Randstad kun je eenvoudig via onze website direct de prijs voor jouw transport berekenen.",
      },
      {
        question: "Geldt er een toeslag voor Amsterdam?",
        answer:
          "Voor adressen in drukke delen van Amsterdam (zoals grachten, smalle straten of plekken waar moeilijk gestopt kan worden) rekenen wij €15 extra per adres i.v.m. extra tijd en bereikbaarheid. Als beide adressen in zo'n gebied liggen, is dat €30 in totaal.",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Arrow icon
// ---------------------------------------------------------------------------

function ArrowRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function FaqPage() {
  return (
    <>
      <main>

        {/* Hero */}
        <section className="bg-[#F5F6F7] py-14 sm:py-20">
          <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#E31B1B]">
              Veelgestelde vragen
            </p>
            <h1 className="text-[32px] font-extrabold leading-[1.1] tracking-tight text-[#111111] sm:text-[44px]">
              Hoe kunnen we je helpen?
            </h1>
            <p className="mt-5 max-w-[560px] text-[15px] leading-[1.75] text-zinc-500">
              Hier vind je antwoorden op de meest gestelde vragen. Staat jouw vraag er niet bij? Bel of mail ons gerust.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="tel:0631356682"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-[13px] font-medium text-[#111111] shadow-sm transition hover:border-zinc-300"
              >
                06 31 35 66 82
              </a>
              <a
                href="mailto:info@busjedirect.nl"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-[13px] font-medium text-[#111111] shadow-sm transition hover:border-zinc-300"
              >
                info@busjedirect.nl
              </a>
            </div>
          </div>
        </section>

        {/* FAQ per categorie */}
        <section className="bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
            <div className="flex flex-col gap-12">
              {FAQ_CATEGORIES.map((cat) => (
                <div key={cat.id}>
                  <h2 className="mb-6 text-[20px] font-extrabold tracking-tight text-[#111111] sm:text-[22px]">
                    {cat.title}
                  </h2>
                  <div className="divide-y divide-zinc-100 rounded-2xl bg-[#F5F6F7] px-6 shadow-sm">
                    {cat.faqs.map((faq) => (
                      <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#F5F6F7] py-14 sm:py-16">
          <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
            <div className="flex flex-col gap-6 rounded-2xl bg-white p-8 shadow-sm sm:p-10 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-[22px] font-extrabold text-[#111111] sm:text-[24px]">
                  Staat jouw vraag er niet bij?
                </h2>
                <p className="mt-1 text-[14px] text-zinc-500">
                  Neem contact op. We helpen je graag verder.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#E31B1B] px-7 py-3.5 text-[14px] font-bold text-white transition hover:bg-[#C91818] sm:w-auto"
                >
                  Transport aanvragen <ArrowRightIcon />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-200 px-7 py-3.5 text-[14px] font-semibold text-[#111111] transition hover:bg-zinc-50 sm:w-auto"
                >
                  Contact opnemen
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}

import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Algemene voorwaarden",
  description: "Lees de algemene voorwaarden van BusjeDirect voor transportdiensten.",
};

const ARTICLES = [
  {
    title: "Artikel 1 – Definities",
    items: [
      "BusjeDirect: de onderneming die transportdiensten aanbiedt.",
      "Klant: iedere natuurlijke of rechtspersoon die gebruikmaakt van de diensten van BusjeDirect.",
      "Overeenkomst: de afspraak tussen BusjeDirect en de klant met betrekking tot transport.",
    ],
  },
  {
    title: "Artikel 2 – Toepasselijkheid",
    items: [
      "Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes en overeenkomsten van BusjeDirect.",
      "Afwijkingen van deze voorwaarden zijn alleen geldig indien schriftelijk overeengekomen.",
    ],
  },
  {
    title: "Artikel 3 – Totstandkoming van de overeenkomst",
    items: [
      "Een overeenkomst komt tot stand na bevestiging van de aanvraag door BusjeDirect.",
      "De klant is verantwoordelijk voor het correct en volledig aanleveren van alle benodigde informatie.",
    ],
  },
  {
    title: "Artikel 4 – Prijzen en offertes",
    items: [
      "Alle prijzen worden berekend op basis van afstand en de door de klant opgegeven items.",
      "De prijs zoals weergegeven via de website is leidend, mits de verstrekte informatie correct is.",
      "Indien de werkelijke situatie afwijkt van de opgegeven gegevens, behoudt BusjeDirect zich het recht voor om de prijs aan te passen.",
    ],
  },
  {
    title: "Artikel 5 – Betaling",
    items: [
      "Betaling vindt plaats bij aflevering en kan worden voldaan via pin, contant of betaalverzoek.",
      "Voor transporten over langere afstanden kan een aanbetaling worden gevraagd.",
      "Zakelijke klanten kunnen, indien overeengekomen, op factuur betalen.",
    ],
  },
  {
    title: "Artikel 6 – Uitvoering van de dienst",
    items: [
      "BusjeDirect voert transporten uit op basis van de door de klant verstrekte informatie.",
      "De klant dient zorg te dragen voor een correcte voorbereiding van het transport, waaronder bereikbaarheid van de locaties.",
    ],
  },
  {
    title: "Artikel 7 – Laden en lossen",
    items: [
      "Tenzij anders overeengekomen, vindt levering plaats tot aan de voordeur op de begane grond.",
      "Transport via trappen, verdiepingen of liften is niet inbegrepen.",
      "Demontage en montage van meubels zijn niet inbegrepen.",
    ],
  },
  {
    title: "Artikel 8 – Extra kosten",
    items: [
      "Indien sprake is van afwijkingen ten opzichte van de aanvraag, kunnen extra kosten in rekening worden gebracht.",
      "Hieronder vallen onder andere: onjuist opgegeven items, extra wachttijd, slechte bereikbaarheid en extra tilwerk of hulp.",
    ],
  },
  {
    title: "Artikel 9 – Annulering",
    items: [
      "Annulering is kosteloos tot 24 uur voor de geplande afspraak.",
      "Bij annulering binnen 24 uur kan BusjeDirect kosten in rekening brengen.",
    ],
  },
  {
    title: "Artikel 10 – Aansprakelijkheid",
    items: [
      "BusjeDirect gaat zorgvuldig om met de goederen van de klant.",
      "Tijdens transport geldt een beperkte aansprakelijkheid.",
      "Schade dient direct bij levering gemeld te worden.",
      "Indien schade niet direct wordt gemeld, vervalt het recht op aanspraak.",
    ],
  },
  {
    title: "Artikel 11 – Uitsluitingen aansprakelijkheid",
    items: [
      "BusjeDirect is niet aansprakelijk voor: reeds bestaande schade aan goederen, schade door ondeugdelijke verpakking, breekbare goederen indien niet vooraf gemeld, en indirecte schade of gevolgschade.",
    ],
  },
  {
    title: "Artikel 12 – Overmacht",
    items: [
      "In geval van overmacht, zoals verkeersomstandigheden, weersinvloeden of technische storingen, behoudt BusjeDirect zich het recht voor om de uitvoering van de overeenkomst te wijzigen of uit te stellen.",
    ],
  },
  {
    title: "Artikel 13 – Toepasselijk recht",
    items: [
      "Op alle overeenkomsten is Nederlands recht van toepassing.",
      "Geschillen worden voorgelegd aan de bevoegde rechter in Nederland.",
    ],
  },
];

export default function AlgemeneVoorwaardenPage() {
  return (
    <>
      <main>
        {/* Hero */}
        <section className="bg-[#F5F6F7] py-14 sm:py-20">
          <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#FF7A00]">
              Juridisch
            </p>
            <h1 className="text-[32px] font-extrabold leading-[1.1] tracking-tight text-[#111111] sm:text-[44px]">
              Algemene voorwaarden
            </h1>
            <p className="mt-4 text-[14px] text-zinc-500">
              BusjeDirect, gevestigd in Diemen. Versie 2025.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-[800px] px-6 sm:px-8">
            <div className="flex flex-col gap-10">
              {ARTICLES.map((article) => (
                <div key={article.title}>
                  <h2 className="mb-4 text-[17px] font-bold text-[#111111]">
                    {article.title}
                  </h2>
                  <ul className="flex flex-col gap-3">
                    {article.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF7A00]" />
                        <span className="text-[14px] leading-[1.75] text-zinc-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

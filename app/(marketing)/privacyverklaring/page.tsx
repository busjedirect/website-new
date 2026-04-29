import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description: "Lees hoe BusjeDirect omgaat met jouw persoonsgegevens.",
};

const SECTIONS = [
  {
    title: "1. Wie zijn wij",
    content:
      "BusjeDirect is verantwoordelijk voor de verwerking van persoonsgegevens zoals weergegeven in deze privacyverklaring.",
    items: [],
  },
  {
    title: "2. Persoonsgegevens die wij verwerken",
    content:
      "BusjeDirect verwerkt jouw persoonsgegevens doordat je gebruik maakt van onze diensten en/of deze zelf aan ons verstrekt. Wij verwerken onder andere:",
    items: [
      "Voor- en achternaam",
      "Telefoonnummer",
      "E-mailadres",
      "Adresgegevens (ophaal- en afleveradres)",
      "Gegevens over jouw aanvraag (items, bijzonderheden)",
      "Betaalgegevens",
    ],
  },
  {
    title: "3. Met welk doel verwerken wij gegevens",
    content: "BusjeDirect verwerkt jouw persoonsgegevens voor de volgende doeleinden:",
    items: [
      "Het uitvoeren van transportdiensten",
      "Het opstellen van offertes en prijsberekeningen",
      "Contact opnemen over jouw aanvraag",
      "Het afhandelen van betalingen",
      "Het verbeteren van onze dienstverlening",
    ],
  },
  {
    title: "4. Grondslag voor verwerking",
    content: "Wij verwerken persoonsgegevens op basis van:",
    items: [
      "Uitvoering van een overeenkomst",
      "Wettelijke verplichtingen",
      "Gerechtvaardigd belang (zoals communicatie en serviceverbetering)",
    ],
  },
  {
    title: "5. Hoe lang we gegevens bewaren",
    content:
      "Wij bewaren persoonsgegevens niet langer dan noodzakelijk is voor het doel waarvoor ze zijn verzameld, tenzij wij wettelijk verplicht zijn gegevens langer te bewaren.",
    items: [],
  },
  {
    title: "6. Delen van persoonsgegevens met derden",
    content:
      "BusjeDirect deelt jouw gegevens alleen met derden indien dit nodig is voor de uitvoering van de overeenkomst of om te voldoen aan een wettelijke verplichting. Denk hierbij aan:",
    items: [
      "Betaaldiensten",
      "Boekhoudsoftware",
    ],
    footer: "Wij verkopen jouw gegevens nooit aan derden.",
  },
  {
    title: "7. Cookies en websitegebruik",
    content:
      "BusjeDirect gebruikt alleen functionele en analytische cookies die geen inbreuk maken op jouw privacy. Deze cookies zorgen ervoor dat de website goed werkt en helpen ons de website te verbeteren.",
    items: [],
  },
  {
    title: "8. Jouw rechten",
    content: "Je hebt het recht om:",
    items: [
      "Je persoonsgegevens in te zien",
      "Je gegevens te laten corrigeren of verwijderen",
      "Je toestemming in te trekken",
      "Bezwaar te maken tegen verwerking",
    ],
    footer: "Je kunt hiervoor contact met ons opnemen via de contactgegevens op onze website.",
  },
  {
    title: "9. Beveiliging van persoonsgegevens",
    content:
      "BusjeDirect neemt passende maatregelen om misbruik, verlies en onbevoegde toegang tot persoonsgegevens te voorkomen.",
    items: [],
  },
  {
    title: "10. Contact",
    content:
      "Voor vragen over deze privacyverklaring kun je contact opnemen via de contactgegevens op onze website.",
    items: [],
  },
];

export default function PrivacyverklaringPage() {
  return (
    <>
      <main>
        {/* Hero */}
        <section className="bg-[#F5F6F7] py-14 sm:py-20">
          <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#E31B1B]">
              Juridisch
            </p>
            <h1 className="text-[32px] font-extrabold leading-[1.1] tracking-tight text-[#111111] sm:text-[44px]">
              Privacyverklaring
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
              {SECTIONS.map((section) => (
                <div key={section.title}>
                  <h2 className="mb-4 text-[17px] font-bold text-[#111111]">
                    {section.title}
                  </h2>
                  {section.content && (
                    <p className="text-[14px] leading-[1.75] text-zinc-600 mb-3">
                      {section.content}
                    </p>
                  )}
                  {section.items.length > 0 && (
                    <ul className="flex flex-col gap-2.5 mb-3">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E31B1B]" />
                          <span className="text-[14px] leading-[1.75] text-zinc-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {"footer" in section && section.footer && (
                    <p className="text-[14px] leading-[1.75] text-zinc-600">
                      {section.footer}
                    </p>
                  )}
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

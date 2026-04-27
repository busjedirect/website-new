import type { Metadata } from "next";
import { DienstPageTemplate } from "@/components/diensten/shared/dienst-template";
import type { DienstPageData } from "@/components/diensten/shared/dienst-template";

export const metadata: Metadata = {
  title: "Internationaal transport — Europa | BusjeDirect",
  description:
    "Internationaal transport naar België, Duitsland en andere Europese landen. BusjeDirect verzorgt grensoverschrijdend transport snel, veilig en tegen een vaste prijs.",
};

const data: DienstPageData = {
  metaTitle: "Internationaal transport — Europa | BusjeDirect",
  metaDescription: "Internationaal transport naar België, Duitsland en andere Europese landen. BusjeDirect verzorgt grensoverschrijdend transport snel en veilig.",
  label: "Internationaal transport",
  h1: "Internationaal transport snel en betrouwbaar geregeld",
  heroSubtext:
    "Transport naar en vanuit heel Europa. BusjeDirect verzorgt grensoverschrijdend transport voor particulieren en bedrijven naar België, Duitsland, Frankrijk en verder. Snel, verzekerd en met een vaste prijs.",
  introParagraphs: [
    "Internationaal transport hoeft niet ingewikkeld te zijn. BusjeDirect verzorgt grensoverschrijdend transport voor particulieren en bedrijven naar en vanuit heel Europa. Of je nu meubels naar België wilt laten vervoeren of spullen uit Duitsland wilt ophalen. Wij regelen het.",
    "Onze chauffeurs zijn ervaren in internationaal transport en kennen de regels en routes door Europa. Jouw spullen worden veilig en verzekerd vervoerd, met een transparante prijs vooraf.",
    "Neem contact op voor een offerte op maat voor jouw internationale transport. Wij denken graag met je mee over de beste oplossing.",
  ],
  watHoudtIn: [
    {
      title: "Waarheen rijden we?",
      bullets: [
        "België en Luxemburg",
        "Duitsland en Oostenrijk",
        "Frankrijk en Zwitserland",
        "Overige EU-landen",
        "Op aanvraag verder",
      ],
    },
    {
      title: "Voor wie is het?",
      bullets: [
        "Particulieren die emigreren",
        "Expats die terugkeren",
        "Bedrijven met EU-leveringen",
        "Kopers van buitenlandse meubels",
        "Iedereen met grensoverschrijdend transport",
      ],
    },
    {
      title: "Wanneer gebruik je het?",
      bullets: [
        "Bij emigratie of immigratie",
        "Bij aankoop in het buitenland",
        "Bij zakelijke leveringen in Europa",
        "Bij tijdelijk verblijf in het buitenland",
        "Bij terugkeer naar Nederland",
      ],
    },
  ],
  wanneerKiezen: [
    { situation: "Emigreren naar België", description: "Verhuist naar België? Wij vervoeren jouw inboedel veilig over de grens." },
    { situation: "Meubels uit Duitsland", description: "Mooie meubels gevonden in Duitsland? Wij halen ze op en bezorgen ze in Nederland." },
    { situation: "Zakelijke levering in Europa", description: "Goederen of meubels leveren aan een klant in Europa? Wij regelen het transport." },
    { situation: "Expat terugkeer", description: "Terugkeer naar Nederland na verblijf in het buitenland? Wij halen jouw spullen op." },
    { situation: "Aankoop in het buitenland", description: "Iets gekocht in het buitenland dat niet past in een gewone auto? Wij rijden erheen." },
    { situation: "Tijdelijk verblijf", description: "Spullen meenemen voor een tijdelijk verblijf in het buitenland? Wij regelen het heen en terug." },
  ],
  vervoerItems: [
    { label: "Bank vervoeren", href: "/vervoeren/bank-vervoeren", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10.5A2.5 2.5 0 015.5 8h13A2.5 2.5 0 0121 10.5V14H3v-3.5z"/><path d="M3 14v2a1 1 0 001 1h16a1 1 0 001-1v-2"/></svg> },
    { label: "Kast vervoeren", href: "/vervoeren/kast-vervoeren", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2"/><line x1="12" y1="2" x2="12" y2="22"/></svg> },
    { label: "Meubeltransport", href: "/diensten/meubeltransport", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="7" width="15" height="11" rx="1.5"/><path d="M16 10h4l3 4v4h-7V10z"/></svg> },
    { label: "Inboedel vervoeren", href: "/vervoeren/inboedel-vervoeren", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg> },
  ],
  prijsTitel: "Wat kost internationaal transport?",
  prijsUitleg: [
    "De prijs is gebaseerd op de rijafstand tussen het ophaaladres en het afleveradres. Hoe verder de rit, hoe hoger de prijs.",
    "Wij hanteren een starttarief van €65 excl. btw. Wij werken drempel tot drempel: ophalen en afleveren bij de buitendeur op de begane grond. Voor internationaal transport geldt een prijs op aanvraag, omdat de afstand sterk kan verschillen per bestemming.",
    "Neem contact op via onze website voor een vrijblijvende prijsopgave. Geen verrassingen achteraf.",
  ],
  faqs: [
    { question: "Naar welke landen rijden jullie?", answer: "Wij rijden door heel Europa. Populaire bestemmingen zijn België, Duitsland, Frankrijk en Luxemburg. Neem contact op voor andere bestemmingen." },
    { question: "Wat kost internationaal transport?", answer: "De prijs is gebaseerd op de afstand en het aantal items. Neem contact op voor een offerte op maat voor jouw internationale rit." },
    { question: "Is mijn transport verzekerd in het buitenland?", answer: "Ja, al onze transporten zijn verzekerd, ook internationaal. Jouw spullen zijn in goede handen." },
    { question: "Hoe lang duurt een internationale rit?", answer: "Dat hangt af van de bestemming. Een rit naar België duurt een dag, verder weg kan langer duren. Wij bespreken dit bij de offerte." },
    { question: "Kunnen jullie ook vanuit het buitenland ophalen?", answer: "Ja, wij halen ook op in het buitenland en bezorgen in Nederland. Geef het buitenlandse adres op als ophaaladres." },
    { question: "Zijn er extra kosten voor internationaal transport?", answer: "Nee, wij hanteren transparante prijzen zonder verborgen kosten. De prijs wordt vooraf vastgesteld en gecommuniceerd." },
  ],
  ctaTitel: "Direct internationaal transport regelen?",
  andereDiensten: [
    { label: "Meubeltransport", href: "/diensten/meubeltransport" },
    { label: "Kleine verhuizing", href: "/diensten/kleine-verhuizing" },
    { label: "Ophaalservice", href: "/diensten/ophaalservice" },
    { label: "Zakelijk transport", href: "/diensten/zakelijk-transport" },
  ],
};

export default function InternationaalTransportPage() {
  return <DienstPageTemplate data={data} />;
}

import type { Metadata } from "next";
import { DienstPageTemplate } from "@/components/diensten/shared/dienst-template";
import type { DienstPageData } from "@/components/diensten/shared/dienst-template";

export const metadata: Metadata = {
  title: "Kleine verhuizing regelen",
  description:
    "Studio, appartement of een paar meubels verhuizen? BusjeDirect regelt het snel. Grotere verhuizing? Mail ons voor een prijs op maat.",
};

const data: DienstPageData = {
  metaTitle: "Kleine verhuizing regelen | BusjeDirect",
  metaDescription: "Studio, appartement of een paar meubels verhuizen? BusjeDirect regelt het snel. Grotere verhuizing? Mail ons voor een prijs op maat.",
  label: "Kleine verhuizing",
  h1: "Kleine verhuizing snel en betaalbaar geregeld",
  heroImage: "/Diensten/Kleine Verhuizing.png",
  heroSubtext:
    "Professionele kleine verhuizing voor particulieren. Of je nu een studio, appartement of een paar kamers verhuist. Wij regelen het snel, veilig en zonder gedoe.",
  introParagraphs: [
    "Een kleine verhuizing lijkt eenvoudig, maar vraagt toch om de juiste aanpak. Grote meubels door smalle gangen, dozen sjouwen en alles op tijd op de nieuwe plek krijgen. Dat is werk voor professionals. BusjeDirect specialiseert zich in kleine verhuizingen voor particulieren door heel Nederland.",
    "Of je nu van een studentenkamer naar een appartement verhuist, of van een appartement naar een nieuwe woning. Wij regelen het transport van jouw inboedel snel en efficiënt. Geen grote verhuiswagen nodig, geen dure verhuisbedrijven.",
    "Via onze online aanvraag zie je direct wat jouw kleine verhuizing kost. Transparant, eerlijk en zonder verrassingen achteraf.",
  ],
  watHoudtIn: [
    {
      title: "Wat verhuizen we?",
      bullets: [
        "Volledige studio of 1-kamer appartement",
        "Losse meubels en dozen",
        "Witgoed en elektronica",
        "Kleine inboedels",
        "Spullen van opslag naar woning",
      ],
    },
    {
      title: "Voor wie is het?",
      bullets: [
        "Studenten die verhuizen",
        "Starters op de woningmarkt",
        "Mensen die kleiner gaan wonen",
        "Expats en tijdelijke bewoners",
        "Iedereen met een kleine inboedel",
      ],
    },
    {
      title: "Wanneer gebruik je het?",
      bullets: [
        "Bij verhuizing naar nieuwe woning",
        "Bij tijdelijke opslag van spullen",
        "Bij het leegmaken van een woning",
        "Bij een tussenstop verhuizing",
        "Bij spoedverhuizing",
      ],
    },
  ],
  wanneerKiezen: [
    { situation: "Studentenkamer verhuizen", description: "Van je studentenkamer naar je eerste appartement. Wij regelen het transport." },
    { situation: "Studio verhuizing", description: "Kleine inboedel, groot gemak. Wij verhuizen jouw studio snel en efficiënt." },
    { situation: "1–2 kamer appartement", description: "Niet te groot, niet te klein. Precies de juiste service voor jouw verhuizing." },
    { situation: "Spullen uit opslag halen", description: "Spullen staan in een opslagunit? Wij halen ze op en bezorgen ze op jouw nieuwe adres." },
    { situation: "Spoedverhuizing", description: "Moet het snel? Wij proberen binnen 24 uur te regelen wat jij nodig hebt." },
    { situation: "Gedeeltelijke verhuizing", description: "Niet alles tegelijk, maar wel de grote stukken. Wij nemen ze mee." },
  ],
  vervoerItems: [
    { label: "Bank vervoeren", href: "/vervoeren/bank-vervoeren", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E31B1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10.5A2.5 2.5 0 015.5 8h13A2.5 2.5 0 0121 10.5V14H3v-3.5z"/><path d="M3 14v2a1 1 0 001 1h16a1 1 0 001-1v-2"/></svg> },
    { label: "Kast vervoeren", href: "/vervoeren/kast-vervoeren", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E31B1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2"/><line x1="12" y1="2" x2="12" y2="22"/></svg> },
    { label: "Bed vervoeren", href: "/vervoeren/bed-vervoeren", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E31B1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9V4a1 1 0 011-1h18a1 1 0 011 1v5"/><path d="M2 20v-5a2 2 0 012-2h16a2 2 0 012 2v5"/><line x1="2" y1="15" x2="22" y2="15"/></svg> },
    { label: "Wasmachine vervoeren", href: "/vervoeren/wasmachine-vervoeren", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E31B1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2"/><circle cx="12" cy="13" r="4"/></svg> },
    { label: "Matras vervoeren", href: "/vervoeren/matras-vervoeren", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E31B1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="10" rx="2"/></svg> },
    { label: "Inboedel vervoeren", href: "/vervoeren/inboedel-vervoeren", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E31B1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
  ],
  prijsTitel: "Wat kost een kleine verhuizing?",
  prijsUitleg: [
    "De prijs is gebaseerd op de rijafstand tussen het ophaaladres en het afleveradres. Hoe verder de rit, hoe hoger de prijs.",
    "Wij hanteren een starttarief van €65 excl. btw. Wij werken drempel tot drempel: ophalen en afleveren bij de buitendeur op de begane grond. Wij lopen geen trappen en komen niet binnenshuis.",
    "Via onze website zie je direct wat jouw transport kost. Geen verrassingen achteraf.",
  ],
  faqs: [
    { question: "Wat kost een kleine verhuizing?", answer: "De prijs start vanaf €65 excl. btw en hangt af van de afstand tussen het ophaaladres en het afleveradres. Bereken je prijs via onze website." },
    { question: "Hoe snel kunnen jullie de verhuizing regelen?", answer: "In de meeste gevallen kunnen wij binnen 24–48 uur transport regelen. Is er beschikbaarheid? Dan kunnen wij vaak ook dezelfde dag nog rijden. Vul je aanvraag in en we nemen snel contact met je op om een datum en tijdvak af te spreken. Bij last-minute aanvragen kan een toeslag van toepassing zijn." },
    { question: "Helpen jullie met inpakken?", answer: "Wij zijn een transportbedrijf, geen verhuisbedrijf. Wij werken drempel tot drempel: ophalen en afleveren bij de buitendeur op de begane grond. Wij lopen geen trappen en komen niet binnenshuis." },
    { question: "Is mijn inboedel verzekerd tijdens de verhuizing?", answer: "Wij gaan zorgvuldig om met uw goederen. Tijdens transport geldt een beperkte aansprakelijkheid conform onze algemene voorwaarden. Wij adviseren om waardevolle goederen vooraf te melden en indien nodig aanvullend te verzekeren. Eventuele schade dient direct bij levering gemeld te worden." },
    { question: "Kunnen jullie ook naar een verdieping?", answer: "Wij werken drempel tot drempel: ophalen en afleveren bij de buitendeur op de begane grond. Wij lopen geen trappen en komen niet binnenshuis." },
    { question: "Rijden jullie ook in het weekend?", answer: "Ja, ook in het weekend beschikbaar. Kies zelf een datum en tijdvak." },
  ],
  ctaTitel: "Direct je kleine verhuizing regelen?",
  andereDiensten: [
    { label: "Meubeltransport", href: "/diensten/meubeltransport" },
    { label: "Ophaalservice", href: "/diensten/ophaalservice" },
    { label: "Zakelijk transport", href: "/diensten/zakelijk-transport" },
    { label: "Internationaal transport", href: "/diensten/internationaal-transport" },
  ],
};

export default function KleineVerhuizingPage() {
  return <DienstPageTemplate data={data} />;
}

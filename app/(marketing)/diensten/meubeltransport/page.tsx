import type { Metadata } from "next";
import { DienstPageTemplate } from "@/components/diensten/shared/dienst-template";
import type { DienstPageData } from "@/components/diensten/shared/dienst-template";

export const metadata: Metadata = {
  title: "Meubeltransport",
  description:
    "Bank, kast, tafel of witgoed laten vervoeren? Wij halen op aan de buitendeur en bezorgen op de begane grond. Prijs berekenen via onze website.",
};

const data: DienstPageData = {
  metaTitle: "Meubeltransport | BusjeDirect",
  metaDescription: "Bank, kast, tafel of witgoed laten vervoeren? Wij halen op aan de buitendeur en bezorgen op de begane grond. Prijs berekenen via onze website.",
  label: "Meubeltransport",
  h1: "Meubeltransport snel en betrouwbaar geregeld",
  heroImage: "/Diensten/Meubeltransport.png",
  heroSubtext:
    "Professioneel meubeltransport voor particulieren en bedrijven. Van banken en kasten tot witgoed en matrassen. Wij vervoeren jouw meubels veilig en zonder beschadigingen, door heel Nederland.",
  introParagraphs: [
    "Meubeltransport is meer dan alleen een bank van A naar B rijden. Het vraagt om de juiste aanpak, het juiste materiaal en ervaren mensen die weten hoe ze grote en zware meubels veilig verplaatsen. BusjeDirect biedt professioneel meubeltransport voor particulieren en bedrijven in heel Nederland.",
    "Of je nu een bank, kast, eettafel, matras of witgoed wilt laten vervoeren. Wij zorgen voor een zorgeloze ervaring. Onze chauffeurs gaan zorgvuldig om met jouw spullen en zorgen dat alles veilig aankomt op de bestemming.",
    "Met BusjeDirect regel je jouw meubeltransport eenvoudig online. Vul je adressen in, geef aan welke meubels je wilt laten vervoeren en ontvang direct een transparante prijs. Geen verrassingen achteraf.",
  ],
  watHoudtIn: [
    {
      title: "Wat vervoer je?",
      bullets: [
        "Banken, hoekbanken en fauteuils",
        "Kasten, garderobekasten en dressoirs",
        "Eettafels, bureaus en salontafels",
        "Matrassen en boxsprings",
        "Witgoed (wasmachines, koelkasten)",
      ],
    },
    {
      title: "Voor wie is het?",
      bullets: [
        "Particulieren die verhuizen",
        "Kopers van tweedehands meubels",
        "Bedrijven die kantoor inrichten",
        "Winkels met leveringen op maat",
        "Iedereen met grote spullen",
      ],
    },
    {
      title: "Wanneer gebruik je het?",
      bullets: [
        "Bij aankoop van nieuwe meubels",
        "Bij verkoop via Marktplaats",
        "Bij een (gedeeltelijke) verhuizing",
        "Bij kantoorinrichting of -verhuizing",
        "Bij opslag of tijdelijk transport",
      ],
    },
  ],
  wanneerKiezen: [
    { situation: "Nieuwe bank gekocht", description: "Wij halen je bank op bij de winkel of verkoper en bezorgen hem thuis." },
    { situation: "Kast van Marktplaats", description: "Ophalen bij de verkoper en veilig bezorgen op jouw adres." },
    { situation: "Witgoed vervangen", description: "Oude wasmachine weg, nieuwe erin. Wij regelen het transport." },
    { situation: "Kantoor inrichten", description: "Bureaus, kasten en stoelen op de juiste plek in jouw kantoor." },
    { situation: "Gedeeltelijke verhuizing", description: "Niet alles verhuizen, maar wel een paar grote meubels meenemen." },
    { situation: "Matras bezorgen", description: "Matrassen en boxsprings zijn groot en onhandig. Wij werken drempel tot drempel: ophalen en afleveren bij de buitendeur op de begane grond." },
  ],
  vervoerItems: [
    { label: "Bank vervoeren", href: "/vervoeren/bank-vervoeren", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E31B1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10.5A2.5 2.5 0 015.5 8h13A2.5 2.5 0 0121 10.5V14H3v-3.5z"/><path d="M3 14v2a1 1 0 001 1h16a1 1 0 001-1v-2"/></svg> },
    { label: "Kast vervoeren", href: "/vervoeren/kast-vervoeren", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E31B1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2"/><line x1="12" y1="2" x2="12" y2="22"/></svg> },
    { label: "Wasmachine vervoeren", href: "/vervoeren/wasmachine-vervoeren", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E31B1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2"/><circle cx="12" cy="13" r="4"/></svg> },
    { label: "Bed vervoeren", href: "/vervoeren/bed-vervoeren", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E31B1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9V4a1 1 0 011-1h18a1 1 0 011 1v5"/><path d="M2 20v-5a2 2 0 012-2h16a2 2 0 012 2v5"/><line x1="2" y1="15" x2="22" y2="15"/></svg> },
    { label: "Tafel vervoeren", href: "/vervoeren/tafel-vervoeren", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E31B1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="8" x2="21" y2="8"/><line x1="8" y1="8" x2="8" y2="20"/><line x1="16" y1="8" x2="16" y2="20"/></svg> },
    { label: "Koelkast vervoeren", href: "/vervoeren/koelkast-vervoeren", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E31B1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="4" y1="10" x2="20" y2="10"/></svg> },
    { label: "Matras vervoeren", href: "/vervoeren/matras-vervoeren", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E31B1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="10" rx="2"/></svg> },
    { label: "Dressoir vervoeren", href: "/vervoeren/dressoir-vervoeren", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E31B1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><line x1="2" y1="12" x2="22" y2="12"/></svg> },
    { label: "Kantoormeubels vervoeren", href: "/vervoeren/kantoormeubels-vervoeren", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E31B1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg> },
    { label: "Apparatuur vervoeren", href: "/vervoeren/apparatuur-vervoeren", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E31B1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg> },
    { label: "Inboedel vervoeren", href: "/vervoeren/inboedel-vervoeren", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E31B1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
    { label: "Witgoed vervoeren", href: "/vervoeren/witgoed-vervoeren", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E31B1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="4" y1="10" x2="20" y2="10"/></svg> },
  ],
  prijsTitel: "Wat kost meubeltransport?",
  prijsUitleg: [
    "De prijs is gebaseerd op de rijafstand tussen het ophaaladres en het afleveradres. Hoe verder de rit, hoe hoger de prijs.",
    "Wij hanteren een starttarief van €65 excl. btw. Wij werken drempel tot drempel: ophalen en afleveren bij de buitendeur op de begane grond. Wij lopen geen trappen en komen niet binnenshuis.",
    "Via onze website zie je direct wat jouw transport kost. Geen verrassingen achteraf.",
  ],
  faqs: [
    { question: "Wat kost meubeltransport?", answer: "De prijs start vanaf €65 excl. btw en hangt af van de afstand tussen het ophaaladres en het afleveradres. Bereken je prijs via onze website." },
    { question: "Hoe snel kunnen jullie leveren?", answer: "In de meeste gevallen kunnen wij binnen 24–48 uur transport regelen. Is er beschikbaarheid? Dan kunnen wij vaak ook dezelfde dag nog rijden. Vul je aanvraag in en we nemen snel contact met je op om een datum en tijdvak af te spreken. Bij last-minute aanvragen kan een toeslag van toepassing zijn." },
    { question: "Helpen jullie met tillen?", answer: "Wij werken drempel tot drempel: ophalen en afleveren bij de buitendeur op de begane grond. Wij lopen geen trappen en komen niet binnenshuis." },
    { question: "Is mijn meubeltransport verzekerd?", answer: "Wij gaan zorgvuldig om met uw goederen. Tijdens transport geldt een beperkte aansprakelijkheid conform onze algemene voorwaarden. Wij adviseren om waardevolle goederen vooraf te melden en indien nodig aanvullend te verzekeren. Eventuele schade dient direct bij levering gemeld te worden." },
    { question: "Kunnen jullie ook witgoed vervoeren?", answer: "Ja, wij vervoeren wasmachines, drogers, koelkasten en andere witgoedapparaten. Geef dit aan bij je aanvraag." },
    { question: "Rijden jullie ook in het weekend?", answer: "Ja, wij zijn ook in het weekend beschikbaar. Kies zelf een datum en tijdvak dat jou uitkomt." },
  ],
  ctaTitel: "Direct meubeltransport regelen?",
  andereDiensten: [
    { label: "Kleine verhuizing", href: "/diensten/kleine-verhuizing" },
    { label: "Ophaalservice", href: "/diensten/ophaalservice" },
    { label: "Zakelijk transport", href: "/diensten/zakelijk-transport" },
    { label: "Internationaal transport", href: "/diensten/internationaal-transport" },
  ],
};

export default function MeubeltransportPage() {
  return <DienstPageTemplate data={data} />;
}

import type { Metadata } from "next";
import { DienstPageTemplate } from "@/components/diensten/shared/dienst-template";
import type { DienstPageData } from "@/components/diensten/shared/dienst-template";

export const metadata: Metadata = {
  title: "Ophaalservice Marktplaats & IKEA",
  description:
    "Iets gekocht via Marktplaats of IKEA maar geen vervoer? Wij halen het op en bezorgen het bij jou thuis. Actief in Amsterdam en omgeving.",
};

const data: DienstPageData = {
  metaTitle: "Ophaalservice Marktplaats & IKEA | BusjeDirect",
  metaDescription: "Iets gekocht via Marktplaats of IKEA maar geen vervoer? Wij halen het op en bezorgen het bij jou thuis. Actief in Amsterdam en omgeving.",
  label: "Ophaalservice",
  h1: "Ophaalservice snel en betrouwbaar geregeld",
  heroImage: "/Diensten/Ophaalservice.png",
  heroSubtext:
    "Iets gekocht via Marktplaats, IKEA of een andere winkel? BusjeDirect haalt jouw aankopen op en bezorgt ze veilig bij jou thuis. Snel, betrouwbaar en tegen een transparante prijs.",
  introParagraphs: [
    "Een mooie bank op Marktplaats gevonden, maar geen auto of aanhanger? Of een grote IKEA-bestelling die je niet zelf kunt ophalen? BusjeDirect biedt een professionele ophaalservice voor particulieren en bedrijven door heel Nederland.",
    "Wij halen jouw aankopen op bij de verkoper, winkel of opslaglocatie en bezorgen ze veilig op jouw adres. Geen gedoe met het huren van een busje, geen vrienden lastigvallen. Gewoon regelen via onze website.",
    "De ophaalservice van BusjeDirect is ideaal voor grote en onhandige items die niet in een gewone auto passen. Van banken en kasten tot wasmachines en fietsen. Wij halen het op.",
  ],
  watHoudtIn: [
    {
      title: "Wat halen we op?",
      bullets: [
        "Marktplaats aankopen",
        "IKEA en woonwinkel aankopen",
        "Tweedehands meubels",
        "Witgoed en elektronica",
        "Grote en zware items",
      ],
    },
    {
      title: "Voor wie is het?",
      bullets: [
        "Kopers zonder eigen vervoer",
        "Mensen die groot inkopen",
        "Bedrijven met leveringen",
        "Iedereen met een grote aankoop",
        "Expats en nieuwe bewoners",
      ],
    },
    {
      title: "Wanneer gebruik je het?",
      bullets: [
        "Bij aankoop via Marktplaats",
        "Bij grote IKEA-bestellingen",
        "Bij ophalen bij particulieren",
        "Bij winkelaankopen zonder bezorging",
        "Bij ophalen uit opslag",
      ],
    },
  ],
  wanneerKiezen: [
    { situation: "Marktplaats aankoop", description: "Vul het adres van de verkoper in als ophaaladres en jouw adres als bestemming." },
    { situation: "IKEA ophalen", description: "Grote IKEA-bestelling? Wij halen het op bij de winkel en bezorgen het thuis." },
    { situation: "Tweedehands meubel", description: "Mooie kast of bank gevonden? Wij halen hem op en zetten hem bij jou neer." },
    { situation: "Winkel zonder bezorging", description: "Winkel levert niet? Wij regelen het transport van winkel naar jouw deur." },
    { situation: "Ophalen bij particulier", description: "Aankoop bij een particulier die ver weg woont? Geen probleem, wij rijden erheen." },
    { situation: "Spullen uit opslag", description: "Spullen staan in een opslagunit? Wij halen ze op en brengen ze naar jouw adres." },
  ],
  vervoerItems: [
    { label: "Bank vervoeren", href: "/vervoeren/bank-vervoeren", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E31B1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10.5A2.5 2.5 0 015.5 8h13A2.5 2.5 0 0121 10.5V14H3v-3.5z"/><path d="M3 14v2a1 1 0 001 1h16a1 1 0 001-1v-2"/></svg> },
    { label: "Wasmachine vervoeren", href: "/vervoeren/wasmachine-vervoeren", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E31B1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2"/><circle cx="12" cy="13" r="4"/></svg> },
    { label: "Kast vervoeren", href: "/vervoeren/kast-vervoeren", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E31B1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2"/><line x1="12" y1="2" x2="12" y2="22"/></svg> },
    { label: "Koelkast vervoeren", href: "/vervoeren/koelkast-vervoeren", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E31B1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="4" y1="10" x2="20" y2="10"/></svg> },
    { label: "Witgoed vervoeren", href: "/vervoeren/witgoed-vervoeren", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E31B1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2"/><circle cx="12" cy="13" r="4"/><line x1="6" y1="6" x2="6.01" y2="6"/></svg> },
    { label: "Inboedel vervoeren", href: "/vervoeren/inboedel-vervoeren", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E31B1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
  ],
  prijsTitel: "Wat kost de ophaalservice?",
  prijsUitleg: [
    "De prijs is gebaseerd op de rijafstand tussen het ophaaladres en het afleveradres. Hoe verder de rit, hoe hoger de prijs.",
    "Wij hanteren een starttarief van €65 excl. btw. Wij werken drempel tot drempel: ophalen en afleveren bij de buitendeur op de begane grond. Wij lopen geen trappen en komen niet binnenshuis.",
    "Via onze website zie je direct wat jouw transport kost. Geen verrassingen achteraf.",
  ],
  faqs: [
    { question: "Wat kost de ophaalservice?", answer: "De prijs start vanaf €65 excl. btw en hangt af van de afstand tussen het ophaaladres en het afleveradres. Bereken je prijs via onze website." },
    { question: "Hoe snel kunnen jullie ophalen?", answer: "In de meeste gevallen kunnen wij binnen 24–48 uur transport regelen. Is er beschikbaarheid? Dan kunnen wij vaak ook dezelfde dag nog rijden. Vul je aanvraag in en we nemen snel contact met je op om een datum en tijdvak af te spreken. Bij last-minute aanvragen kan een toeslag van toepassing zijn." },
    { question: "Kunnen jullie ook bij IKEA ophalen?", answer: "Ja, wij halen regelmatig bestellingen op bij IKEA en andere grote woonwinkels. Geef het adres van de winkel op als ophaaladres." },
    { question: "Is mijn aankoop verzekerd tijdens transport?", answer: "Wij gaan zorgvuldig om met uw goederen. Tijdens transport geldt een beperkte aansprakelijkheid conform onze algemene voorwaarden. Wij adviseren om waardevolle goederen vooraf te melden en indien nodig aanvullend te verzekeren. Eventuele schade dient direct bij levering gemeld te worden." },
    { question: "Helpen jullie met tillen?", answer: "Wij werken drempel tot drempel: ophalen en afleveren bij de buitendeur op de begane grond. Wij lopen geen trappen en komen niet binnenshuis." },
    { question: "Rijden jullie ook in het weekend?", answer: "Ja, ook in het weekend beschikbaar. Kies zelf een datum en tijdvak." },
  ],
  ctaTitel: "Direct ophaalservice regelen?",
  andereDiensten: [
    { label: "Meubeltransport", href: "/diensten/meubeltransport" },
    { label: "Kleine verhuizing", href: "/diensten/kleine-verhuizing" },
    { label: "Zakelijk transport", href: "/diensten/zakelijk-transport" },
    { label: "Internationaal transport", href: "/diensten/internationaal-transport" },
  ],
};

export default function OphaalservicePage() {
  return <DienstPageTemplate data={data} />;
}

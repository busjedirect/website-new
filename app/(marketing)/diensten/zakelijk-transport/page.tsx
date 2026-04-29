import type { Metadata } from "next";
import { DienstPageTemplate } from "@/components/diensten/shared/dienst-template";
import type { DienstPageData } from "@/components/diensten/shared/dienst-template";

export const metadata: Metadata = {
  title: "Zakelijk transport",
  description:
    "Kantoorinrichting, showroom levering of spoedtransport voor bedrijven. BusjeDirect rijdt door heel Nederland. Prijs op basis van afstand.",
};

const data: DienstPageData = {
  metaTitle: "Zakelijk transport | BusjeDirect",
  metaDescription: "Kantoorinrichting, showroom levering of spoedtransport voor bedrijven. BusjeDirect rijdt door heel Nederland. Prijs op basis van afstand.",
  label: "Zakelijk transport",
  h1: "Zakelijk transport snel en professioneel geregeld",
  heroImage: "/Diensten/Zakelijk Transport.png",
  heroSubtext:
    "Betrouwbaar zakelijk transport voor bedrijven en ondernemers. Van kantoorinrichting en showroom leveringen tot spoedtransport. Wij regelen het discreet, snel en professioneel.",
  introParagraphs: [
    "Zakelijk transport vraagt om betrouwbaarheid, stiptheid en professionaliteit. BusjeDirect biedt transportoplossingen voor bedrijven van elke omvang, van kleine ondernemers tot grotere organisaties, die regelmatig transport nodig hebben.",
    "Of het nu gaat om het inrichten van een nieuw kantoor, het leveren van showroommeubels of het spoedtransport van apparatuur. Wij zorgen dat alles op tijd en in goede staat aankomt. Onze chauffeurs zijn professioneel, discreet en gewend aan zakelijke omgevingen.",
    "Met BusjeDirect regel je zakelijk transport eenvoudig online. Transparante prijzen, geen verrassingen en altijd een bevestiging van de afspraak.",
  ],
  watHoudtIn: [
    {
      title: "Wat vervoeren we?",
      bullets: [
        "Kantoormeubels en -inrichting",
        "Showroom- en winkelmeubels",
        "Apparatuur en machines",
        "Goederen en pakketten",
        "Tijdelijke opslag en transport",
      ],
    },
    {
      title: "Voor wie is het?",
      bullets: [
        "MKB-bedrijven en ondernemers",
        "Kantoren en organisaties",
        "Winkels en showrooms",
        "Evenementenbureaus",
        "Logistieke dienstverleners",
      ],
    },
    {
      title: "Wanneer gebruik je het?",
      bullets: [
        "Bij kantoorverhuizing of -inrichting",
        "Bij showroom leveringen",
        "Bij spoedtransport van goederen",
        "Bij tijdelijke opslag",
        "Bij regelmatig terugkerend transport",
      ],
    },
  ],
  wanneerKiezen: [
    { situation: "Kantoor inrichten", description: "Nieuw kantoor? Wij leveren en plaatsen bureaus, kasten en stoelen op de juiste plek." },
    { situation: "Showroom levering", description: "Meubels of producten naar een showroom. Wij zorgen voor een nette en tijdige levering." },
    { situation: "Spoedtransport", description: "Iets moet vandaag nog weg of aankomen? Wij proberen spoedtransport zo snel mogelijk te regelen." },
    { situation: "Kantoorverhuizing", description: "Verhuist jouw bedrijf? Wij regelen het transport van jouw kantoorinventaris." },
    { situation: "Apparatuur vervoeren", description: "Zware of gevoelige apparatuur vervoeren? Wij gaan er zorgvuldig mee om." },
    { situation: "Terugkerend transport", description: "Regelmatig transport nodig? Neem contact op voor een maatwerkoplossing." },
  ],
  vervoerItems: [
    { label: "Kantoormeubels", href: "/vervoeren/kantoormeubels-vervoeren", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E31B1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg> },
    { label: "Apparatuur vervoeren", href: "/vervoeren/apparatuur-vervoeren", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E31B1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg> },
    { label: "Kast vervoeren", href: "/vervoeren/kast-vervoeren", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E31B1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2"/><line x1="12" y1="2" x2="12" y2="22"/></svg> },
    { label: "Tafel vervoeren", href: "/vervoeren/tafel-vervoeren", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E31B1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="8" x2="21" y2="8"/><line x1="8" y1="8" x2="8" y2="20"/><line x1="16" y1="8" x2="16" y2="20"/></svg> },
  ],
  prijsTitel: "Wat kost zakelijk transport?",
  prijsUitleg: [
    "De prijs is gebaseerd op de rijafstand tussen het ophaaladres en het afleveradres. Hoe verder de rit, hoe hoger de prijs.",
    "Wij hanteren een starttarief van €65 excl. btw. Wij werken drempel tot drempel: ophalen en afleveren bij de buitendeur op de begane grond. Wij lopen geen trappen en komen niet binnenshuis.",
    "Via onze website zie je direct wat jouw transport kost. Geen verrassingen achteraf.",
  ],
  faqs: [
    { question: "Wat kost zakelijk transport?", answer: "De prijs start vanaf €65 excl. btw en hangt af van de afstand. Voor maatwerk of vaste contracten neem je contact met ons op." },
    { question: "Kunnen jullie ook spoedtransport regelen?", answer: "Ja, in veel gevallen kunnen wij spoedtransport binnen 24 uur regelen. Neem direct contact op voor de mogelijkheden." },
    { question: "Rijden jullie ook buiten kantooruren?", answer: "Ja, wij zijn ook in het weekend en buiten reguliere kantooruren beschikbaar. Kies zelf een datum en tijdvak." },
    { question: "Is zakelijk transport verzekerd?", answer: "Wij gaan zorgvuldig om met uw goederen. Tijdens transport geldt een beperkte aansprakelijkheid conform onze algemene voorwaarden. Wij adviseren om waardevolle goederen vooraf te melden en indien nodig aanvullend te verzekeren. Eventuele schade dient direct bij levering gemeld te worden." },
    { question: "Kunnen jullie ook internationaal rijden?", answer: "Ja, wij verzorgen ook internationaal transport binnen Europa. Bekijk onze internationale transportpagina voor meer informatie." },
    { question: "Kunnen jullie een vaste transportpartner worden?", answer: "Ja, voor bedrijven die regelmatig transport nodig hebben bieden wij maatwerkoplossingen. Neem contact op voor een gesprek." },
  ],
  ctaTitel: "Direct zakelijk transport regelen?",
  andereDiensten: [
    { label: "Meubeltransport", href: "/diensten/meubeltransport" },
    { label: "Kleine verhuizing", href: "/diensten/kleine-verhuizing" },
    { label: "Ophaalservice", href: "/diensten/ophaalservice" },
    { label: "Internationaal transport", href: "/diensten/internationaal-transport" },
  ],
};

export default function ZakelijkTransportPage() {
  return <DienstPageTemplate data={data} />;
}

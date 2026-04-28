import type { Metadata } from "next";
import { VervoerPageTemplate } from "@/components/vervoeren/shared/vervoer-template";
import type { VervoerPageData } from "@/components/vervoeren/shared/vervoer-template";

export const metadata: Metadata = {
  title: "Kantoormeubels vervoeren",
  description:
    "Bureaus, vergadertafels of kasten laten vervoeren? BusjeDirect regelt kantoormeubels transport voor bedrijven door heel Nederland.",
};

const data: VervoerPageData = {
  metaTitle: "Kantoormeubels vervoeren | BusjeDirect",
  metaDescription:
    "Bureaus, vergadertafels of kasten laten vervoeren? BusjeDirect regelt kantoormeubels transport voor bedrijven door heel Nederland.",
  slug: "kantoormeubels-vervoeren",
  item: "Kantoormeubels",
  label: "Kantoormeubels vervoeren",
  h1: "Kantoormeubels vervoeren snel en veilig geregeld",
  heroSubtext:
    "Kantoormeubels vervoeren vraagt om planning en de juiste aanpak. BusjeDirect regelt het transport van bureaus, vergadertafels, kasten en stoelen. Snel, veilig en zonder bedrijfsonderbreking. Door heel Nederland.",
  heroImage: "/Vervoeren/KantoorMeubels.png",
  introParagraphs: [
    "Kantoormeubels vervoeren is een vak apart. Bureaus, vergadertafels, archiefkasten en ergonomische stoelen zijn groot, zwaar en moeten zorgvuldig worden behandeld. BusjeDirect heeft de ervaring en het materiaal om jouw kantoorinventaris veilig te transporteren.",
    "Of je nu een nieuw kantoor inricht, van locatie verhuist of tweedehands kantoormeubels hebt aangeschaft. Wij regelen het kantoormeubels transport professioneel. Onze chauffeurs weten hoe ze kantoorinventaris veilig inladen, vervoeren en afleveren zonder beschadigingen.",
    "Kantoormeubels vervoeren via BusjeDirect is eenvoudig: vul je adressen in, geef aan welke meubels je wilt laten vervoeren en ontvang direct een transparante prijs. Geen verborgen kosten, geen gedoe.",
  ],
  wanneerItems: [
    {
      title: "Kantoor verhuizen",
      description:
        "Je bedrijf verhuist naar een nieuw pand. Wij vervoeren alle kantoormeubels veilig en efficiënt naar de nieuwe locatie.",
    },
    {
      title: "Nieuw kantoor inrichten",
      description:
        "Je hebt nieuwe kantoormeubels besteld maar de leverancier bezorgt niet. Wij halen ze op en plaatsen ze op de gewenste locatie.",
    },
    {
      title: "Tweedehands kantoormeubels ophalen",
      description:
        "Je hebt tweedehands bureaus of kasten gevonden maar geen vervoer. Wij halen ze op bij de verkoper en bezorgen ze bij jou.",
    },
    {
      title: "Kantoor reorganiseren",
      description:
        "Je wilt de kantoorinrichting aanpassen of meubels verplaatsen naar een andere locatie.",
    },
  ],
  prijsUitleg: [
    "De prijs voor kantoormeubels vervoeren is gebaseerd op de rijafstand tussen het ophaaladres en het afleveradres. Hoe verder de rit, hoe hoger de prijs. Simpel en eerlijk.",
    "Wij hanteren een starttarief van €65 excl. btw. Wij werken drempel tot drempel: ophalen en afleveren bij de buitendeur op de begane grond. Wij lopen geen trappen en komen niet binnenshuis.",
    "Via onze website zie je direct wat jouw transport kost. Geen verrassingen achteraf.",
  ],
  faqs: [
    {
      question: "Wat kost kantoormeubels vervoeren?",
      answer:
        "De prijs start vanaf €65 excl. btw. De exacte prijs hangt af van de afstand tussen het ophaaladres en het afleveradres. Bereken je prijs via onze website.",
    },
    {
      question: "Kunnen jullie ook grote vergadertafels vervoeren?",
      answer:
        "Ja, wij vervoeren ook grote vergadertafels en conferentiemeubilair. Geef bij je aanvraag de afmetingen op zodat we de juiste capaciteit kunnen inplannen.",
    },
    {
      question: "Moeten kantoormeubels gedemonteerd worden?",
      answer:
        "Grote meubels die niet in één stuk passen, moeten gedemonteerd zijn voor transport. Wij vervoeren de onderdelen veilig en je monteert ze zelf op de nieuwe locatie.",
    },
    {
      question: "Kunnen jullie ook buiten kantooruren rijden?",
      answer:
        "Ja, wij zijn flexibel in planning. Neem contact op als je transport buiten reguliere kantooruren nodig hebt, dan kijken we naar de mogelijkheden.",
    },
    {
      question: "Is mijn kantoorinventaris verzekerd tijdens transport?",
      answer:
        "Wij gaan zorgvuldig om met uw goederen. Tijdens transport geldt een beperkte aansprakelijkheid conform onze algemene voorwaarden. Wij adviseren om waardevolle goederen vooraf te melden en indien nodig aanvullend te verzekeren. Eventuele schade dient direct bij levering gemeld te worden.",
    },
    {
      question: "Kunnen jullie ook meerdere locaties bedienen?",
      answer:
        "Ja, bij grotere kantoorverhuizingen met meerdere adressen maken we een passende planning. Neem contact op voor een offerte op maat.",
    },
  ],
  anderItems: [
    { label: "Bank vervoeren", href: "/vervoeren/bank-vervoeren" },
    { label: "Kast vervoeren", href: "/vervoeren/kast-vervoeren" },
    { label: "Wasmachine vervoeren", href: "/vervoeren/wasmachine-vervoeren" },
    { label: "Bed vervoeren", href: "/vervoeren/bed-vervoeren" },
    { label: "Tafel vervoeren", href: "/vervoeren/tafel-vervoeren" },
    { label: "Koelkast vervoeren", href: "/vervoeren/koelkast-vervoeren" },
    { label: "Matras vervoeren", href: "/vervoeren/matras-vervoeren" },
    { label: "Dressoir vervoeren", href: "/vervoeren/dressoir-vervoeren" },
    { label: "Apparatuur vervoeren", href: "/vervoeren/apparatuur-vervoeren" },
    { label: "Inboedel vervoeren", href: "/vervoeren/inboedel-vervoeren" },
    { label: "Witgoed vervoeren", href: "/vervoeren/witgoed-vervoeren" },
  ],
  gerelateerdeItems: [
    { label: "Zakelijk transport", href: "/diensten/zakelijk-transport" },
    { label: "Meubeltransport", href: "/diensten/meubeltransport" },
    { label: "Kleine verhuizing", href: "/diensten/kleine-verhuizing" },
    { label: "Ophaalservice", href: "/diensten/ophaalservice" },
  ],
};

export default function KantoormeubelsVervoeren() {
  return <VervoerPageTemplate data={data} />;
}

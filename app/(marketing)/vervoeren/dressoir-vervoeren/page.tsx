import type { Metadata } from "next";
import { VervoerPageTemplate } from "@/components/vervoeren/shared/vervoer-template";
import type { VervoerPageData } from "@/components/vervoeren/shared/vervoer-template";

export const metadata: Metadata = {
  title: "Dressoir vervoeren — Snel & veilig | BusjeDirect",
  description:
    "Dressoir vervoeren in Nederland? BusjeDirect vervoert dressoiren van alle formaten snel en veilig. Van Marktplaats of winkel naar jouw woning.",
};

const data: VervoerPageData = {
  metaTitle: "Dressoir vervoeren — Snel & veilig | BusjeDirect",
  metaDescription:
    "Dressoir vervoeren in Nederland? BusjeDirect vervoert dressoiren van alle formaten snel en veilig. Van Marktplaats of winkel naar jouw woning.",
  slug: "dressoir-vervoeren",
  item: "Dressoir",
  label: "Dressoir vervoeren",
  h1: "Dressoir vervoeren snel en zonder beschadigingen",
  heroSubtext:
    "Een dressoir vervoeren is zwaar werk. BusjeDirect regelt het transport van jouw dressoir veilig en professioneel. Wij tillen en vervoeren door heel Nederland.",
  heroImage: "/Vervoeren/Dressoir.png",
  introParagraphs: [
    "Een dressoir vervoeren vraagt om de juiste aanpak. Dressoiren zijn zwaar, breed en gevoelig voor beschadigingen als ze niet goed worden vervoerd. BusjeDirect neemt dit werk van je over en vervoert jouw dressoir veilig van A naar B.",
    "Of je nu een tweedehands dressoir hebt gekocht via Marktplaats, een nieuw dressoir wilt laten bezorgen, of je dressoir wilt meenemen bij een verhuizing. Wij regelen het transport. Onze chauffeurs gaan zorgvuldig om met jouw meubels.",
    "Dressoir vervoeren via BusjeDirect is eenvoudig: vul je adressen in, geef aan wat je wilt laten vervoeren en ontvang direct een transparante prijs. Geen verborgen kosten, geen gedoe.",
  ],
  wanneerItems: [
    {
      title: "Dressoir van Marktplaats",
      description:
        "Je hebt een mooi tweedehands dressoir gevonden op Marktplaats maar geen auto of aanhanger. Wij halen het op bij de verkoper en bezorgen het bij jou thuis.",
    },
    {
      title: "Dressoir meenemen bij verhuizing",
      description:
        "Je verhuist en wilt je dressoir meenemen naar het nieuwe adres. Wij vervoeren het veilig als onderdeel van jouw verhuistransport.",
    },
    {
      title: "Nieuw dressoir bezorgen",
      description:
        "Je hebt een nieuw dressoir gekocht maar de winkel bezorgt niet. Wij halen het op en bezorgen het bij jou thuis.",
    },
    {
      title: "Tweedehands dressoir kopen of verkopen",
      description:
        "Je koopt of verkoopt een dressoir via een platform. Wij regelen het transport tussen koper en verkoper.",
    },
  ],
  prijsUitleg: [
    "De prijs voor dressoir vervoeren is gebaseerd op de rijafstand tussen het ophaaladres en het afleveradres. Hoe verder de rit, hoe hoger de prijs. Simpel en eerlijk.",
    "Wij hanteren een starttarief van €65 excl. btw. Wij werken drempel tot drempel: ophalen en afleveren bij de buitendeur op de begane grond. Wij lopen geen trappen en komen niet binnenshuis.",
    "Via onze website zie je direct wat jouw transport kost. Geen verrassingen achteraf.",
  ],
  faqs: [
    {
      question: "Wat kost dressoir vervoeren?",
      answer:
        "De prijs voor dressoir vervoeren start vanaf €65 excl. btw. De exacte prijs hangt af van de afstand tussen ophaal- en afleveradres. Bereken je prijs via onze website.",
    },
    {
      question: "Kunnen jullie ook een zwaar dressoir vervoeren?",
      answer:
        "Ja, wij vervoeren ook zware dressoiren. Wij werken drempel tot drempel: ophalen en afleveren bij de buitendeur op de begane grond. Wij lopen geen trappen en komen niet binnenshuis.",
    },
    {
      question: "Moet een dressoir gedemonteerd worden voor transport?",
      answer:
        "In de meeste gevallen hoeft een dressoir niet gedemonteerd te worden. Zorg wel dat losse onderdelen zoals lades en deurtjes zijn verwijderd of vastgezet voor transport.",
    },
    {
      question: "Wat als mijn dressoir beschadigd raakt?",
      answer:
        "Al onze transporten zijn verzekerd. Wij gaan altijd zorgvuldig om met jouw meubels. Mocht er iets misgaan, dan lossen we dit samen op.",
    },
    {
      question: "Hoe snel kunnen jullie een dressoir vervoeren?",
      answer:
        "In de meeste gevallen kunnen wij binnen 24–48 uur transport regelen. Vul je aanvraag in en we plannen snel een datum en tijdvak in.",
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
    { label: "Kantoormeubels vervoeren", href: "/vervoeren/kantoormeubels-vervoeren" },
    { label: "Apparatuur vervoeren", href: "/vervoeren/apparatuur-vervoeren" },
    { label: "Inboedel vervoeren", href: "/vervoeren/inboedel-vervoeren" },
    { label: "Witgoed vervoeren", href: "/vervoeren/witgoed-vervoeren" },
  ],
  gerelateerdeItems: [
    { label: "Meubeltransport", href: "/diensten/meubeltransport" },
    { label: "Ophaalservice", href: "/diensten/ophaalservice" },
    { label: "Kleine verhuizing", href: "/diensten/kleine-verhuizing" },
    { label: "Zakelijk transport", href: "/diensten/zakelijk-transport" },
  ],
};

export default function DressoirVervoeren() {
  return <VervoerPageTemplate data={data} />;
}

import type { Metadata } from "next";
import { VervoerPageTemplate } from "@/components/vervoeren/shared/vervoer-template";
import type { VervoerPageData } from "@/components/vervoeren/shared/vervoer-template";

export const metadata: Metadata = {
  title: "Matras vervoeren — Snel & veilig | BusjeDirect",
  description:
    "Matras vervoeren in Nederland? BusjeDirect vervoert matrassen van alle formaten snel en veilig. Nieuw matras bezorgen of oud matras ophalen. Wij regelen het.",
};

const data: VervoerPageData = {
  metaTitle: "Matras vervoeren — Snel & veilig | BusjeDirect",
  metaDescription:
    "Matras vervoeren in Nederland? BusjeDirect vervoert matrassen van alle formaten snel en veilig. Nieuw matras bezorgen of oud matras ophalen. Wij regelen het.",
  slug: "matras-vervoeren",
  item: "Matras",
  label: "Matras vervoeren",
  h1: "Matras vervoeren snel en veilig geregeld",
  heroSubtext:
    "Een matras vervoeren is onhandig en vraagt om de juiste aanpak. BusjeDirect regelt het transport van jouw matras, van eenpersoons tot kingsize, veilig en professioneel door heel Nederland.",
  heroImage: "/Vervoeren/Matrassen.png",
  introParagraphs: [
    "Een matras vervoeren is lastiger dan het lijkt. Matrassen zijn groot, zwaar en moeilijk te hanteren zonder de juiste hulp. Ze passen zelden in een gewone auto en kunnen beschadigen als ze niet goed worden vervoerd. BusjeDirect neemt dit werk van je over.",
    "Of je nu een nieuw matras wilt laten bezorgen, een oud matras wilt laten ophalen, of je matras wilt meenemen bij een verhuizing. Wij regelen het transport. Onze chauffeurs weten hoe ze matrassen veilig inladen en vervoeren zonder beschadigingen.",
    "Matras vervoeren via BusjeDirect is eenvoudig: vul je adressen in, geef het formaat op en ontvang direct een transparante prijs. Snel geregeld, zonder gedoe.",
  ],
  wanneerItems: [
    {
      title: "Nieuw matras bezorgen",
      description:
        "Je hebt een nieuw matras gekocht maar de winkel bezorgt niet. Wij halen het op en bezorgen het bij jou thuis.",
    },
    {
      title: "Oud matras laten ophalen",
      description:
        "Je wilt je oude matras kwijt. Wij halen het op en brengen het naar het gewenste adres of inleverpunt.",
    },
    {
      title: "Matras meenemen bij verhuizing",
      description:
        "Je verhuist en wilt je matras meenemen. Wij vervoeren het veilig naar het nieuwe adres.",
    },
    {
      title: "Boxspring en matras samen vervoeren",
      description:
        "Je wilt zowel een boxspring als een matras laten vervoeren. Wij regelen het transport van beide items in één rit.",
    },
  ],
  prijsUitleg: [
    "De prijs voor matras vervoeren is gebaseerd op de rijafstand tussen het ophaaladres en het afleveradres. Hoe verder de rit, hoe hoger de prijs. Simpel en eerlijk.",
    "Wij hanteren een starttarief van €65 excl. btw. Wij werken drempel tot drempel: ophalen en afleveren bij de buitendeur op de begane grond. Wij lopen geen trappen en komen niet binnenshuis.",
    "Via onze website zie je direct wat jouw transport kost. Geen verrassingen achteraf.",
  ],
  faqs: [
    {
      question: "Wat kost matras vervoeren?",
      answer:
        "De prijs voor matras vervoeren start vanaf €65 excl. btw. De exacte prijs hangt af van de afstand tussen ophaal- en afleveradres. Bereken je prijs via onze website.",
    },
    {
      question: "Welke formaten matrassen kunnen jullie vervoeren?",
      answer:
        "Wij vervoeren matrassen van alle gangbare formaten: 80x200, 90x200, 140x200, 160x200 en 180x200 cm. Geef het formaat op bij je aanvraag.",
    },
    {
      question: "Hoe beschermen jullie het matras tijdens transport?",
      answer:
        "Wij vervoeren matrassen zorgvuldig en beschermd. Zorg dat het matras in een hoes of verpakking zit voor transport. Heb je geen hoes? Laat het ons weten, dan kijken we naar een oplossing.",
    },
    {
      question: "Kunnen jullie ook mijn oude matras meenemen?",
      answer:
        "Ja, wij kunnen je oude matras ophalen als extra item. Geef dit aan bij je aanvraag, dan nemen we dit mee in de prijsberekening.",
    },
    {
      question: "Hoe snel kunnen jullie een matras vervoeren?",
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
    { label: "Dressoir vervoeren", href: "/vervoeren/dressoir-vervoeren" },
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

export default function MatrasVervoeren() {
  return <VervoerPageTemplate data={data} />;
}

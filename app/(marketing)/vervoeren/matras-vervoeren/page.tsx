import type { Metadata } from "next";
import { VervoerPageTemplate } from "@/components/vervoeren/shared/vervoer-template";
import type { VervoerPageData } from "@/components/vervoeren/shared/vervoer-template";

export const metadata: Metadata = {
  title: "Matras vervoeren",
  description:
    "Matras laten vervoeren? BusjeDirect vervoert matrassen van alle formaten door heel Nederland. Ophalen en bezorgen aan de buitendeur.",
};

const data: VervoerPageData = {
  metaTitle: "Matras vervoeren | BusjeDirect",
  metaDescription:
    "Matras laten vervoeren? BusjeDirect vervoert matrassen van alle formaten door heel Nederland. Ophalen en bezorgen aan de buitendeur.",
  slug: "matras-vervoeren",
  item: "Matras",
  label: "Matras vervoeren",
  h1: "Matras vervoeren snel en veilig geregeld",
  heroSubtext:
    "Een matras vervoeren is onhandig en vraagt om de juiste aanpak. BusjeDirect regelt het transport van jouw matras, van eenpersoons tot kingsize, veilig en professioneel door heel Nederland.",
  heroImage: "/Vervoeren/Matrassen.png",
  introParagraphs: [
    "Een matras vervoeren is lastiger dan het lijkt. Matrassen zijn groot, zwaar en moeilijk te hanteren zonder de juiste hulp. Ze passen zelden in een gewone auto en kunnen beschadigen als ze niet goed worden vervoerd. BusjeDirect neemt dit werk van je over.",
    "Of je nu een nieuw matras wilt laten bezorgen of je matras wilt meenemen bij een verhuizing. Wij regelen het transport. Onze chauffeurs weten hoe ze matrassen veilig inladen en vervoeren zonder beschadigingen.",
    "Matras vervoeren via BusjeDirect is eenvoudig: vul je adressen in, geef het formaat op en ontvang direct een transparante prijs. Snel geregeld, zonder gedoe.",
  ],
  wanneerItems: [
    {
      title: "Nieuw matras bezorgen",
      description:
        "Je hebt een nieuw matras gekocht maar de winkel bezorgt niet. Wij halen het op en bezorgen het bij jou thuis.",
    },
    {
      title: "Tweedehands matras ophalen",
      description:
        "Je hebt een tweedehands matras gevonden maar geen vervoer. Wij halen het op bij de verkoper en bezorgen het bij jou.",
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
        "Nee, wij vervoeren geen oude matrassen ter afvoer. De klant dient zelf zorg te dragen voor het afvoeren van oude matrassen. Wij vervoeren uitsluitend van A naar B.",
    },
    {
      question: "Hoe snel kunnen jullie een matras vervoeren?",
      answer:
        "In de meeste gevallen kunnen wij binnen 24–48 uur transport regelen. Is er beschikbaarheid? Dan kunnen wij vaak ook dezelfde dag nog rijden. Vul je aanvraag in en we nemen snel contact met je op om een datum en tijdvak af te spreken. Bij last-minute aanvragen kan een toeslag van toepassing zijn.",
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

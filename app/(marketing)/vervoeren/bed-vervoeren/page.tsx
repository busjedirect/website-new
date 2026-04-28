import type { Metadata } from "next";
import { VervoerPageTemplate } from "@/components/vervoeren/shared/vervoer-template";
import type { VervoerPageData } from "@/components/vervoeren/shared/vervoer-template";

export const metadata: Metadata = {
  title: "Bed vervoeren",
  description:
    "Eenpersoonsbed, tweepersoonsbed of boxspring laten vervoeren? BusjeDirect regelt het snel. Ophalen en bezorgen door heel Nederland.",
};

const data: VervoerPageData = {
  metaTitle: "Bed vervoeren | BusjeDirect",
  metaDescription:
    "Eenpersoonsbed, tweepersoonsbed of boxspring laten vervoeren? BusjeDirect regelt het snel. Ophalen en bezorgen door heel Nederland.",
  slug: "bed-vervoeren",
  item: "Bed",
  label: "Bed vervoeren",
  h1: "Bed vervoeren snel en professioneel geregeld",
  heroSubtext:
    "Een bed vervoeren is meer werk dan het lijkt. BusjeDirect regelt het transport van jouw bed, van eenpersoons tot boxspring, veilig en zonder gedoe. Wij halen op en bezorgen door heel Nederland.",
  heroImage: "/Vervoeren/Bed.png",
  introParagraphs: [
    "Een bed vervoeren vraagt om de juiste aanpak. Bedden zijn groot, onhandig en moeilijk te verplaatsen zonder de juiste hulp. BusjeDirect neemt dit werk van je over en vervoert jouw bed veilig van het ophaaladres naar de bestemming.",
    "Of je nu een nieuw bed hebt gekocht, een tweedehands boxspring hebt gevonden via Marktplaats, of je bed wilt meenemen bij een verhuizing. Wij regelen het transport. Onze chauffeurs weten hoe ze bedden en matrassen veilig inladen en vervoeren.",
    "Bed vervoeren via BusjeDirect is eenvoudig: vul je adressen in, geef aan wat je wilt laten vervoeren en ontvang direct een transparante prijs. Snel geregeld, zonder verrassingen.",
  ],
  wanneerItems: [
    {
      title: "Nieuw bed gekocht",
      description:
        "Je hebt een nieuw bed gekocht maar de winkel bezorgt niet of vraagt hoge bezorgkosten. Wij halen het op en bezorgen het bij jou thuis.",
    },
    {
      title: "Bed meenemen bij verhuizing",
      description:
        "Je verhuist en wilt je bed meenemen naar het nieuwe adres. Wij vervoeren het veilig als onderdeel van jouw verhuistransport.",
    },
    {
      title: "Boxspring ophalen via Marktplaats",
      description:
        "Je hebt een tweedehands boxspring gevonden maar geen vervoer. Wij halen hem op bij de verkoper en bezorgen hem bij jou.",
    },
    {
      title: "Tweedehands bed kopen of verkopen",
      description:
        "Je koopt of verkoopt een bed via Marktplaats of een andere platform. Wij regelen het transport tussen koper en verkoper.",
    },
  ],
  prijsUitleg: [
    "De prijs voor bed vervoeren is gebaseerd op de rijafstand tussen het ophaaladres en het afleveradres. Hoe verder de rit, hoe hoger de prijs. Simpel en eerlijk.",
    "Wij hanteren een starttarief van €65 excl. btw. Wij werken drempel tot drempel: ophalen en afleveren bij de buitendeur op de begane grond. Wij lopen geen trappen en komen niet binnenshuis.",
    "Via onze website zie je direct wat jouw transport kost. Geen verrassingen achteraf.",
  ],
  faqs: [
    {
      question: "Wat kost bed vervoeren?",
      answer:
        "De prijs voor bed vervoeren start vanaf €65 excl. btw. De exacte prijs hangt af van de afstand tussen ophaal- en afleveradres. Bereken je prijs via onze website.",
    },
    {
      question: "Moeten bedden gedemonteerd worden voor transport?",
      answer:
        "Grote bedden en boxsprings moeten in de meeste gevallen gedemonteerd zijn voor transport. Zorg dat het bed uit elkaar is gehaald voordat wij komen ophalen.",
    },
    {
      question: "Kunnen jullie ook een boxspring vervoeren?",
      answer:
        "Ja, wij vervoeren ook boxsprings. Geef bij je aanvraag aan dat het om een boxspring gaat, zodat we rekening kunnen houden met de afmetingen en het gewicht.",
    },
    {
      question: "Kunnen jullie ook het matras meenemen?",
      answer:
        "Ja, het matras kan als extra item worden meegenomen. Geef dit aan bij je aanvraag, dan nemen we dit mee in de prijsberekening.",
    },
    {
      question: "Kunnen jullie ook in het weekend een bed vervoeren?",
      answer:
        "Ja, wij zijn ook in het weekend beschikbaar. Kies bij je aanvraag een datum en tijdvak dat jou het beste uitkomt, inclusief zaterdag en zondag.",
    },
  ],
  anderItems: [
    { label: "Bank vervoeren", href: "/vervoeren/bank-vervoeren" },
    { label: "Kast vervoeren", href: "/vervoeren/kast-vervoeren" },
    { label: "Wasmachine vervoeren", href: "/vervoeren/wasmachine-vervoeren" },
    { label: "Tafel vervoeren", href: "/vervoeren/tafel-vervoeren" },
    { label: "Koelkast vervoeren", href: "/vervoeren/koelkast-vervoeren" },
    { label: "Matras vervoeren", href: "/vervoeren/matras-vervoeren" },
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

export default function BedVervoeren() {
  return <VervoerPageTemplate data={data} />;
}

import type { Metadata } from "next";
import { VervoerPageTemplate } from "@/components/vervoeren/shared/vervoer-template";
import type { VervoerPageData } from "@/components/vervoeren/shared/vervoer-template";

export const metadata: Metadata = {
  title: "Kast vervoeren — Snel & veilig | BusjeDirect",
  description:
    "Kast vervoeren in Nederland? BusjeDirect vervoert garderobekasten, IKEA-kasten en grote kasten snel en veilig. Inclusief demonteren op aanvraag.",
};

const data: VervoerPageData = {
  metaTitle: "Kast vervoeren — Snel & veilig | BusjeDirect",
  metaDescription:
    "Kast vervoeren in Nederland? BusjeDirect vervoert garderobekasten, IKEA-kasten en grote kasten snel en veilig. Inclusief demonteren op aanvraag.",
  slug: "kast-vervoeren",
  item: "Kast",
  label: "Kast vervoeren",
  h1: "Kast vervoeren snel en zonder gedoe",
  heroSubtext:
    "Een grote kast vervoeren doe je niet zomaar even. BusjeDirect regelt het transport van jouw kast, van garderobekast tot IKEA-kast, veilig en professioneel. Wij tillen, laden in en bezorgen op het gewenste adres.",
  heroImage: "/Vervoeren/Kasten.png",
  introParagraphs: [
    "Een kast vervoeren is zwaarder dan het lijkt. Grote garderobekasten, hoge boekenkast of een brede IKEA PAX: ze zijn onhandig om te verplaatsen en passen zelden in een gewone auto. BusjeDirect neemt dit werk van je over en vervoert jouw kast veilig van A naar B.",
    "Of je nu een tweedehands kast hebt gekocht via Marktplaats, een nieuwe kast wilt laten ophalen bij IKEA, of je kast wilt meenemen bij een verhuizing. Wij regelen het transport. Onze chauffeurs gaan zorgvuldig om met jouw meubels en zorgen dat alles onbeschadigd aankomt.",
    "Kast vervoeren via BusjeDirect is eenvoudig en transparant. Vul je adressen in, geef de afmetingen op en ontvang direct een eerlijke prijs. Geen verrassingen achteraf.",
  ],
  wanneerItems: [
    {
      title: "Grote garderobekast verplaatsen",
      description:
        "Je wilt een grote garderobekast verplaatsen naar een ander adres. Wij regelen het transport veilig en efficiënt.",
    },
    {
      title: "IKEA-kast ophalen",
      description:
        "Je hebt een IKEA-kast gekocht maar geen vervoer. Wij halen de kast op bij IKEA of de verkoper en bezorgen hem bij jou thuis.",
    },
    {
      title: "Kast meenemen bij verhuizing",
      description:
        "Je verhuist en wilt je kast meenemen. Wij vervoeren hem veilig als onderdeel van jouw verhuistransport.",
    },
    {
      title: "Tweedehands kast van Marktplaats",
      description:
        "Je hebt een mooie tweedehands kast gevonden maar geen auto. Wij halen hem op bij de verkoper en brengen hem naar jouw woning.",
    },
  ],
  prijsUitleg: [
    "De prijs voor kast vervoeren is gebaseerd op de rijafstand tussen het ophaaladres en het afleveradres. Hoe verder de rit, hoe hoger de prijs. Simpel en eerlijk.",
    "Wij hanteren een starttarief van €65 excl. btw. Wij werken drempel tot drempel: ophalen en afleveren bij de buitendeur op de begane grond. Wij lopen geen trappen en komen niet binnenshuis.",
    "Via onze website zie je direct wat jouw transport kost. Geen verrassingen achteraf.",
  ],
  faqs: [
    {
      question: "Wat kost kast vervoeren?",
      answer:
        "De prijs voor kast vervoeren start vanaf €65 excl. btw. De exacte prijs hangt af van de afstand tussen ophaal- en afleveradres. Bereken je prijs via onze website.",
    },
    {
      question: "Moeten kasten gedemonteerd worden voor transport?",
      answer:
        "Grote kasten die niet in één stuk vervoerd kunnen worden, moeten gedemonteerd zijn voor transport. Wij vervoeren de onderdelen veilig en je monteert de kast zelf op de nieuwe locatie.",
    },
    {
      question: "Kunnen jullie ook heel grote kasten vervoeren?",
      answer:
        "Ja, wij vervoeren ook grote garderobekasten en inbouwkasten. Geef bij je aanvraag de afmetingen op zodat we kunnen inschatten of de kast in één stuk vervoerd kan worden.",
    },
    {
      question: "Wat als mijn kast beschadigd raakt?",
      answer:
        "Al onze transporten zijn verzekerd. Wij gaan altijd zorgvuldig om met jouw meubels. Mocht er iets misgaan, dan lossen we dit samen op.",
    },
    {
      question: "Hoe snel kunnen jullie een kast vervoeren?",
      answer:
        "In de meeste gevallen kunnen wij binnen 24–48 uur transport regelen. Vul je aanvraag in en we plannen snel een datum en tijdvak in.",
    },
  ],
  anderItems: [
    { label: "Bank vervoeren", href: "/vervoeren/bank-vervoeren" },
    { label: "Wasmachine vervoeren", href: "/vervoeren/wasmachine-vervoeren" },
    { label: "Bed vervoeren", href: "/vervoeren/bed-vervoeren" },
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

export default function KastVervoeren() {
  return <VervoerPageTemplate data={data} />;
}

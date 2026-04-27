import type { Metadata } from "next";
import { VervoerPageTemplate } from "@/components/vervoeren/shared/vervoer-template";
import type { VervoerPageData } from "@/components/vervoeren/shared/vervoer-template";

export const metadata: Metadata = {
  title: "Tafel vervoeren — Snel & veilig | BusjeDirect",
  description:
    "Tafel vervoeren in Nederland? BusjeDirect vervoert eettafels, bureaus en salontafels snel en veilig. Van Marktplaats of winkel naar jouw woning.",
};

const data: VervoerPageData = {
  metaTitle: "Tafel vervoeren — Snel & veilig | BusjeDirect",
  metaDescription:
    "Tafel vervoeren in Nederland? BusjeDirect vervoert eettafels, bureaus en salontafels snel en veilig. Van Marktplaats of winkel naar jouw woning.",
  slug: "tafel-vervoeren",
  item: "Tafel",
  label: "Tafel vervoeren",
  h1: "Tafel vervoeren snel en veilig geregeld",
  heroSubtext:
    "Een grote eettafel of bureau vervoeren doe je niet zomaar even. BusjeDirect regelt het transport van jouw tafel snel, veilig en zonder gedoe.",
  heroImage: "/Vervoeren/Tafel.png",
  introParagraphs: [
    "Een tafel vervoeren lijkt eenvoudig, maar grote eettafels, massief houten tafels of lange bureaus zijn onhandig en zwaar. Ze passen zelden in een gewone auto en vragen om de juiste aanpak. BusjeDirect neemt dit werk van je over.",
    "Of je nu een eettafel hebt gekocht via Marktplaats, een nieuwe tafel wilt laten ophalen bij de winkel, of je tafel wilt meenemen bij een verhuizing. Wij regelen het transport professioneel. Onze chauffeurs gaan zorgvuldig om met jouw meubels.",
    "Tafel vervoeren via BusjeDirect is eenvoudig: vul je adressen in, geef aan wat je wilt laten vervoeren en ontvang direct een transparante prijs. Geen verborgen kosten, geen gedoe.",
  ],
  wanneerItems: [
    {
      title: "Eettafel van Marktplaats",
      description:
        "Je hebt een mooie eettafel gevonden op Marktplaats maar geen auto of aanhanger. Wij halen hem op bij de verkoper en bezorgen hem bij jou thuis.",
    },
    {
      title: "Nieuwe tafel ophalen bij winkel",
      description:
        "De winkel bezorgt niet of vraagt hoge bezorgkosten. Wij halen jouw nieuwe tafel op bij de winkel en brengen hem naar jouw woning.",
    },
    {
      title: "Tafel meenemen bij verhuizing",
      description:
        "Je verhuist en wilt je tafel meenemen naar het nieuwe adres. Wij vervoeren hem veilig als onderdeel van jouw verhuistransport.",
    },
    {
      title: "Bureau of werktafel verplaatsen",
      description:
        "Je wilt een groot bureau of werktafel verplaatsen naar een ander adres of kantoor. Wij regelen het transport snel en efficiënt.",
    },
  ],
  prijsUitleg: [
    "De prijs voor tafel vervoeren is gebaseerd op de rijafstand tussen het ophaaladres en het afleveradres. Hoe verder de rit, hoe hoger de prijs. Simpel en eerlijk.",
    "Wij hanteren een starttarief van €65 excl. btw. Wij werken drempel tot drempel: ophalen en afleveren bij de buitendeur op de begane grond. Wij lopen geen trappen en komen niet binnenshuis.",
    "Via onze website zie je direct wat jouw transport kost. Geen verrassingen achteraf.",
  ],
  faqs: [
    {
      question: "Wat kost tafel vervoeren?",
      answer:
        "De prijs voor tafel vervoeren start vanaf €65 excl. btw. De exacte prijs hangt af van de afstand tussen ophaal- en afleveradres. Bereken je prijs via onze website.",
    },
    {
      question: "Kunnen jullie ook grote eettafels vervoeren?",
      answer:
        "Ja, wij vervoeren ook grote eettafels. Geef bij je aanvraag de afmetingen op zodat we kunnen inschatten of de tafel in één stuk vervoerd kan worden of gedemonteerd moet worden.",
    },
    {
      question: "Moeten tafels gedemonteerd worden voor transport?",
      answer:
        "Grote tafels met afneembare poten kunnen beter gedemonteerd worden voor transport. Dit voorkomt beschadigingen en maakt het inladen eenvoudiger. Zorg dat de tafel klaar staat voor transport.",
    },
    {
      question: "Wat als mijn tafel beschadigd raakt?",
      answer:
        "Al onze transporten zijn verzekerd. Wij gaan altijd zorgvuldig om met jouw meubels. Mocht er iets misgaan, dan lossen we dit samen op.",
    },
    {
      question: "Hoe snel kunnen jullie een tafel vervoeren?",
      answer:
        "In de meeste gevallen kunnen wij binnen 24–48 uur transport regelen. Vul je aanvraag in en we plannen snel een datum en tijdvak in.",
    },
  ],
  anderItems: [
    { label: "Bank vervoeren", href: "/vervoeren/bank-vervoeren" },
    { label: "Kast vervoeren", href: "/vervoeren/kast-vervoeren" },
    { label: "Wasmachine vervoeren", href: "/vervoeren/wasmachine-vervoeren" },
    { label: "Bed vervoeren", href: "/vervoeren/bed-vervoeren" },
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

export default function TafelVervoeren() {
  return <VervoerPageTemplate data={data} />;
}

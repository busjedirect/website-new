import type { Metadata } from "next";
import { VervoerPageTemplate } from "@/components/vervoeren/shared/vervoer-template";
import type { VervoerPageData } from "@/components/vervoeren/shared/vervoer-template";

export const metadata: Metadata = {
  title: "Koelkast vervoeren — Snel & veilig | BusjeDirect",
  description:
    "Koelkast vervoeren in Nederland? BusjeDirect vervoert koelkasten en vriezers veilig en rechtop. Nieuwe koelkast bezorgen of oude ophalen. Wij regelen het.",
};

const data: VervoerPageData = {
  metaTitle: "Koelkast vervoeren — Snel & veilig | BusjeDirect",
  metaDescription:
    "Koelkast vervoeren in Nederland? BusjeDirect vervoert koelkasten en vriezers veilig en rechtop. Nieuwe koelkast bezorgen of oude ophalen. Wij regelen het.",
  slug: "koelkast-vervoeren",
  item: "Koelkast",
  label: "Koelkast vervoeren",
  h1: "Koelkast vervoeren veilig en rechtop",
  heroSubtext:
    "Een koelkast vervoeren vraagt om de juiste aanpak. BusjeDirect vervoert jouw koelkast veilig en rechtop, nieuw of tweedehands, door heel Nederland. Wij halen op en bezorgen professioneel.",
  heroImage: "/Vervoeren/Koelkast.png",
  introParagraphs: [
    "Een koelkast vervoeren is niet zomaar een klusje. Koelkasten zijn zwaar, onhandig en moeten bij voorkeur rechtop worden vervoerd om schade aan het koelsysteem te voorkomen. BusjeDirect heeft de ervaring en het materiaal om jouw koelkast veilig te transporteren.",
    "Of je nu een nieuwe koelkast wilt laten bezorgen, een tweedehands koelkast hebt gekocht via Marktplaats, of je koelkast wilt meenemen bij een verhuizing. Wij regelen het transport. Onze chauffeurs weten hoe ze witgoed veilig inladen en vervoeren.",
    "Koelkast vervoeren via BusjeDirect is eenvoudig: vul je adressen in, geef aan wat je wilt laten vervoeren en ontvang direct een transparante prijs. Geen verrassingen achteraf.",
  ],
  wanneerItems: [
    {
      title: "Nieuwe koelkast bezorgen",
      description:
        "Je hebt een nieuwe koelkast gekocht maar de winkel bezorgt niet. Wij halen hem op en bezorgen hem bij jou thuis.",
    },
    {
      title: "Oude koelkast laten ophalen",
      description:
        "Je wilt je oude koelkast kwijt. Wij halen hem op en brengen hem naar het gewenste adres of inleverpunt.",
    },
    {
      title: "Koelkast meenemen bij verhuizing",
      description:
        "Je verhuist en wilt je koelkast meenemen. Wij vervoeren hem veilig naar het nieuwe adres.",
    },
    {
      title: "Tweedehands koelkast van Marktplaats",
      description:
        "Je hebt een tweedehands koelkast gevonden maar geen vervoer. Wij halen hem op bij de verkoper en bezorgen hem bij jou.",
    },
  ],
  prijsUitleg: [
    "De prijs voor koelkast vervoeren is gebaseerd op de rijafstand tussen het ophaaladres en het afleveradres. Hoe verder de rit, hoe hoger de prijs. Simpel en eerlijk.",
    "Wij hanteren een starttarief van €65 excl. btw. Wij werken drempel tot drempel: ophalen en afleveren bij de buitendeur op de begane grond. Wij lopen geen trappen en komen niet binnenshuis. Wij vervoeren koelkasten altijd rechtop om het koelsysteem te beschermen.",
    "Via onze website zie je direct wat jouw transport kost. Geen verrassingen achteraf.",
  ],
  faqs: [
    {
      question: "Wat kost koelkast vervoeren?",
      answer:
        "De prijs voor koelkast vervoeren start vanaf €65 excl. btw. De exacte prijs hangt af van de afstand tussen ophaal- en afleveradres. Bereken je prijs via onze website.",
    },
    {
      question: "Moet een koelkast rechtop worden vervoerd?",
      answer:
        "Bij voorkeur wel. Wij vervoeren koelkasten altijd rechtop om schade aan het koelsysteem te voorkomen. In sommige gevallen kan een koelkast kort op zijn zij worden gelegd, maar dan moet hij na aankomst minimaal 2–4 uur rechtop staan voordat hij wordt aangezet.",
    },
    {
      question: "Hoe lang moet ik wachten na transport voordat ik de koelkast aanzet?",
      answer:
        "Als de koelkast rechtop is vervoerd, kun je hem direct aanzetten. Is hij tijdelijk op zijn zij gelegd? Wacht dan minimaal 2–4 uur zodat het koelmiddel zich kan herstellen.",
    },
    {
      question: "Kunnen jullie ook mijn oude koelkast meenemen?",
      answer:
        "Ja, wij kunnen je oude koelkast ophalen als extra item. Geef dit aan bij je aanvraag, dan nemen we dit mee in de prijsberekening.",
    },
    {
      question: "Hoe snel kunnen jullie een koelkast vervoeren?",
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

export default function KoelkastVervoeren() {
  return <VervoerPageTemplate data={data} />;
}

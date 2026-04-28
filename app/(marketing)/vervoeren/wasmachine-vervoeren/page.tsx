import type { Metadata } from "next";
import { VervoerPageTemplate } from "@/components/vervoeren/shared/vervoer-template";
import type { VervoerPageData } from "@/components/vervoeren/shared/vervoer-template";

export const metadata: Metadata = {
  title: "Wasmachine vervoeren",
  description:
    "Wasmachine of droger laten vervoeren? BusjeDirect haalt op en bezorgt veilig. Nieuw of tweedehands, door heel Nederland.",
};

const data: VervoerPageData = {
  metaTitle: "Wasmachine vervoeren | BusjeDirect",
  metaDescription:
    "Wasmachine of droger laten vervoeren? BusjeDirect haalt op en bezorgt veilig. Nieuw of tweedehands, door heel Nederland.",
  slug: "wasmachine-vervoeren",
  item: "Wasmachine",
  label: "Wasmachine vervoeren",
  h1: "Wasmachine vervoeren snel en veilig",
  heroSubtext:
    "Een wasmachine vervoeren vraagt om de juiste aanpak. BusjeDirect regelt het transport van jouw wasmachine, nieuw of tweedehands, veilig en professioneel. Wij halen op en bezorgen door heel Nederland.",
  heroImage: "/Vervoeren/Wasmachine.png",
  introParagraphs: [
    "Een wasmachine vervoeren is geen eenvoudige klus. Het apparaat is zwaar, onhandig en gevoelig voor beschadigingen als het niet goed wordt vervoerd. BusjeDirect heeft de ervaring en het materiaal om jouw wasmachine veilig te transporteren.",
    "Of je nu een nieuwe wasmachine wilt laten bezorgen of een tweedehands wasmachine hebt gekocht via Marktplaats. Wij regelen het transport. Onze chauffeurs weten hoe ze witgoed veilig inladen en vervoeren.",
    "Wasmachine vervoeren via BusjeDirect is eenvoudig: vul je adressen in, geef aan wat je wilt laten vervoeren en ontvang direct een transparante prijs. Snel geregeld, zonder gedoe.",
  ],
  wanneerItems: [
    {
      title: "Nieuwe wasmachine bezorgen",
      description:
        "Je hebt een nieuwe wasmachine gekocht maar de winkel bezorgt niet. Wij halen hem op en bezorgen hem bij jou thuis.",
    },
    {
      title: "Tweedehands wasmachine ophalen",
      description:
        "Je hebt een tweedehands wasmachine gekocht maar geen vervoer. Wij halen hem op bij de verkoper en bezorgen hem bij jou.",
    },
    {
      title: "Wasmachine meenemen bij verhuizing",
      description:
        "Je verhuist en wilt je wasmachine meenemen. Wij vervoeren hem veilig naar het nieuwe adres.",
    },
    {
      title: "Tweedehands wasmachine van Marktplaats",
      description:
        "Je hebt een tweedehands wasmachine gevonden maar geen vervoer. Wij halen hem op bij de verkoper en bezorgen hem bij jou.",
    },
  ],
  prijsUitleg: [
    "De prijs voor wasmachine vervoeren is gebaseerd op de rijafstand tussen het ophaaladres en het afleveradres. Hoe verder de rit, hoe hoger de prijs. Simpel en eerlijk.",
    "Wij hanteren een starttarief van €65 excl. btw. Wij werken drempel tot drempel: ophalen en afleveren bij de buitendeur op de begane grond. Wij lopen geen trappen en komen niet binnenshuis.",
    "Zorg dat de transportbouten in de wasmachine zitten voor vertrek. Via onze website zie je direct wat jouw transport kost. Geen verrassingen achteraf.",
  ],
  faqs: [
    {
      question: "Wat kost wasmachine vervoeren?",
      answer:
        "De prijs voor wasmachine vervoeren start vanaf €65 excl. btw. De exacte prijs hangt af van de afstand tussen ophaal- en afleveradres. Bereken je prijs via onze website.",
    },
    {
      question: "Sluiten jullie de wasmachine ook aan?",
      answer:
        "Nee, wij verzorgen alleen het transport van de wasmachine. Het aansluiten van de wasmachine valt buiten onze dienstverlening. Hiervoor kun je een installateur inschakelen.",
    },
    {
      question: "Moeten de transportbeugels in de wasmachine zitten?",
      answer:
        "Ja, voor veilig transport is het belangrijk dat de transportbeugels in de wasmachine zijn geplaatst. Dit voorkomt beschadigingen aan de trommel tijdens het vervoer. Heb je de beugels niet meer? Vraag dit na bij de fabrikant.",
    },
    {
      question: "Kunnen jullie ook mijn oude wasmachine meenemen?",
      answer:
        "Nee, wij vervoeren geen oude apparaten ter afvoer. De klant dient zelf zorg te dragen voor het afvoeren van oude wasmachines. Wij vervoeren uitsluitend van A naar B.",
    },
    {
      question: "Hoe snel kunnen jullie een wasmachine vervoeren?",
      answer:
        "In de meeste gevallen kunnen wij binnen 24–48 uur transport regelen. Is er beschikbaarheid? Dan kunnen wij vaak ook dezelfde dag nog rijden. Vul je aanvraag in en we nemen snel contact met je op om een datum en tijdvak af te spreken. Bij last-minute aanvragen kan een toeslag van toepassing zijn.",
    },
  ],
  anderItems: [
    { label: "Bank vervoeren", href: "/vervoeren/bank-vervoeren" },
    { label: "Kast vervoeren", href: "/vervoeren/kast-vervoeren" },
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

export default function WasmachineVervoeren() {
  return <VervoerPageTemplate data={data} />;
}

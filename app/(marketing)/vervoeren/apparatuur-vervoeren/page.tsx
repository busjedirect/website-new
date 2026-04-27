import type { Metadata } from "next";
import { VervoerPageTemplate } from "@/components/vervoeren/shared/vervoer-template";
import type { VervoerPageData } from "@/components/vervoeren/shared/vervoer-template";

export const metadata: Metadata = {
  title: "Apparatuur vervoeren? Snel en veilig transport | BusjeDirect",
  description:
    "Laat je apparatuur veilig en snel vervoeren door BusjeDirect. Transparante prijs en snelle service. Vraag direct vrijblijvend aan.",
};

const data: VervoerPageData = {
  metaTitle: "Apparatuur vervoeren? Snel en veilig transport | BusjeDirect",
  metaDescription:
    "Laat je apparatuur veilig en snel vervoeren door BusjeDirect. Transparante prijs en snelle service. Vraag direct vrijblijvend aan.",
  slug: "apparatuur-vervoeren",
  item: "Apparatuur",
  label: "Apparatuur vervoeren",
  h1: "Apparatuur vervoeren veilig en professioneel geregeld",
  heroSubtext:
    "Apparatuur vervoeren vraagt om zorgvuldigheid en de juiste aanpak. BusjeDirect regelt het transport van grote en zware apparaten, van fitnessapparatuur tot professionele machines, veilig en zonder beschadigingen.",
  heroImage: "/Vervoeren/Apparatuur.png",
  introParagraphs: [
    "Apparatuur vervoeren is niet iets wat je zomaar even doet. Grote apparaten zijn zwaar, gevoelig en vereisen de juiste behandeling tijdens transport. BusjeDirect heeft de ervaring en het materiaal om jouw apparatuur veilig van A naar B te brengen.",
    "Of het nu gaat om fitnessapparatuur, professionele keukenapparatuur, medische apparaten of industriële machines. Wij regelen het transport zorgvuldig. Onze chauffeurs weten hoe ze grote en zware apparaten veilig inladen en vervoeren zonder beschadigingen.",
    "Apparatuur vervoeren via BusjeDirect is eenvoudig: vul je adressen in, geef aan wat je wilt laten vervoeren en ontvang direct een transparante prijs. Geen verborgen kosten, geen gedoe.",
  ],
  wanneerItems: [
    {
      title: "Fitnessapparatuur verplaatsen",
      description:
        "Je hebt een loopband, hometrainer of andere fitnessapparatuur die verplaatst moet worden. Wij regelen het transport veilig en efficiënt.",
    },
    {
      title: "Professionele apparatuur verhuizen",
      description:
        "Je bedrijf verhuist en je wilt professionele apparatuur meenemen naar de nieuwe locatie. Wij zorgen voor veilig transport.",
    },
    {
      title: "Tweedehands apparatuur ophalen",
      description:
        "Je hebt tweedehands apparatuur gekocht maar geen vervoer. Wij halen het op bij de verkoper en bezorgen het bij jou.",
    },
    {
      title: "Apparatuur naar reparateur",
      description:
        "Je apparatuur moet naar een reparateur of servicepunt. Wij regelen het transport heen en terug.",
    },
  ],
  prijsUitleg: [
    "De prijs voor apparatuur vervoeren is gebaseerd op de rijafstand tussen het ophaaladres en het afleveradres. Hoe verder de rit, hoe hoger de prijs. Simpel en eerlijk.",
    "Wij hanteren een starttarief van €65 excl. btw. Wij werken drempel tot drempel: ophalen en afleveren bij de buitendeur op de begane grond. Wij lopen geen trappen en komen niet binnenshuis.",
    "Via onze website zie je direct wat jouw transport kost. Geen verrassingen achteraf.",
  ],
  faqs: [
    {
      question: "Wat kost apparatuur vervoeren?",
      answer:
        "De prijs start vanaf €65 excl. btw. De exacte prijs hangt af van de afstand tussen het ophaaladres en het afleveradres. Bereken je prijs via onze website.",
    },
    {
      question: "Kunnen jullie ook zware industriële machines vervoeren?",
      answer:
        "Wij vervoeren apparatuur tot een bepaald gewicht en formaat. Neem contact op voor een offerte op maat als het gaat om zeer zware of grote industriële machines.",
    },
    {
      question: "Hoe beschermen jullie gevoelige apparatuur tijdens transport?",
      answer:
        "Wij gebruiken deken en beschermmateriaal om apparatuur te beschermen tijdens transport. Zorg dat de apparatuur goed verpakt is voor extra bescherming.",
    },
    {
      question: "Kunnen jullie ook fitnessapparatuur vervoeren?",
      answer:
        "Ja, wij vervoeren loopbanden, hometrainers, roeimachines en andere fitnessapparatuur. Geef bij je aanvraag de afmetingen en het gewicht op.",
    },
    {
      question: "Is mijn apparatuur verzekerd tijdens transport?",
      answer:
        "Ja, al onze transporten zijn verzekerd. Jouw apparatuur is in goede handen tijdens het hele traject.",
    },
    {
      question: "Kunnen jullie ook in het weekend apparatuur vervoeren?",
      answer:
        "Ja, wij zijn ook in het weekend beschikbaar. Kies bij je aanvraag een datum en tijdvak dat jou het beste uitkomt.",
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
    { label: "Kantoormeubels vervoeren", href: "/vervoeren/kantoormeubels-vervoeren" },
    { label: "Inboedel vervoeren", href: "/vervoeren/inboedel-vervoeren" },
    { label: "Witgoed vervoeren", href: "/vervoeren/witgoed-vervoeren" },
  ],
  gerelateerdeItems: [
    { label: "Zakelijk transport", href: "/diensten/zakelijk-transport" },
    { label: "Meubeltransport", href: "/diensten/meubeltransport" },
    { label: "Ophaalservice", href: "/diensten/ophaalservice" },
    { label: "Kleine verhuizing", href: "/diensten/kleine-verhuizing" },
  ],
};

export default function ApparatuurVervoeren() {
  return <VervoerPageTemplate data={data} />;
}

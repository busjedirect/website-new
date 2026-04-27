import type { Metadata } from "next";
import { VervoerPageTemplate } from "@/components/vervoeren/shared/vervoer-template";
import type { VervoerPageData } from "@/components/vervoeren/shared/vervoer-template";

export const metadata: Metadata = {
  title: "Witgoed vervoeren? Snel en veilig transport | BusjeDirect",
  description:
    "Laat je witgoed veilig en snel vervoeren door BusjeDirect. Transparante prijs en snelle service. Vraag direct vrijblijvend aan.",
};

const data: VervoerPageData = {
  metaTitle: "Witgoed vervoeren? Snel en veilig transport | BusjeDirect",
  metaDescription:
    "Laat je witgoed veilig en snel vervoeren door BusjeDirect. Transparante prijs en snelle service. Vraag direct vrijblijvend aan.",
  slug: "witgoed-vervoeren",
  item: "Witgoed",
  label: "Witgoed vervoeren",
  h1: "Witgoed vervoeren veilig en vakkundig geregeld",
  heroSubtext:
    "Witgoed vervoeren vraagt om de juiste aanpak. BusjeDirect vervoert wasmachines, drogers, koelkasten, vaatwassers en andere witgoedapparaten veilig en zorgvuldig door heel Nederland.",
  heroImage: "/Vervoeren/Witgoed.png",
  introParagraphs: [
    "Witgoed vervoeren is een klus die je niet zomaar even doet. Wasmachines, drogers, koelkasten en vaatwassers zijn zwaar, onhandig en gevoelig voor beschadigingen. BusjeDirect heeft de ervaring en het materiaal om jouw witgoed veilig te transporteren.",
    "Of je nu een nieuwe wasmachine wilt laten bezorgen, een tweedehands koelkast hebt gekocht via Marktplaats, of je witgoed wilt meenemen bij een verhuizing. Wij regelen het witgoed transport professioneel. Onze chauffeurs weten hoe ze witgoed veilig inladen, vervoeren en afleveren.",
    "Witgoed vervoeren via BusjeDirect is eenvoudig: vul je adressen in, geef aan welk witgoed je wilt laten vervoeren en ontvang direct een transparante prijs. Geen verborgen kosten, geen gedoe.",
  ],
  wanneerItems: [
    {
      title: "Nieuwe wasmachine bezorgen",
      description:
        "Je hebt een nieuwe wasmachine gekocht maar de winkel bezorgt niet of vraagt hoge bezorgkosten. Wij halen hem op en bezorgen hem bij jou thuis.",
    },
    {
      title: "Tweedehands witgoed ophalen",
      description:
        "Je hebt tweedehands witgoed gevonden via Marktplaats maar geen vervoer. Wij halen het op bij de verkoper en bezorgen het bij jou.",
    },
    {
      title: "Witgoed meenemen bij verhuizing",
      description:
        "Je verhuist en wilt je wasmachine, droger of koelkast meenemen. Wij vervoeren het veilig naar het nieuwe adres.",
    },
    {
      title: "Oud witgoed laten ophalen",
      description:
        "Je wilt je oude wasmachine of koelkast kwijt. Wij halen het op en brengen het naar het gewenste adres of inleverpunt.",
    },
  ],
  prijsUitleg: [
    "De prijs voor witgoed vervoeren is gebaseerd op de rijafstand tussen het ophaaladres en het afleveradres. Hoe verder de rit, hoe hoger de prijs. Simpel en eerlijk.",
    "Wij hanteren een starttarief van €65 excl. btw. Wij werken drempel tot drempel: ophalen en afleveren bij de buitendeur op de begane grond. Wij lopen geen trappen en komen niet binnenshuis.",
    "Via onze website zie je direct wat jouw transport kost. Geen verrassingen achteraf.",
  ],
  faqs: [
    {
      question: "Wat kost witgoed vervoeren?",
      answer:
        "De prijs voor witgoed vervoeren start vanaf €65 excl. btw. De exacte prijs hangt af van de afstand tussen ophaal- en afleveradres. Bereken je prijs via onze website.",
    },
    {
      question: "Moet een wasmachine rechtop worden vervoerd?",
      answer:
        "Ja, wasmachines worden bij voorkeur rechtop vervoerd. Wij zorgen dat de trommel geborgd is voor transport. Zorg dat de transportbouten zijn geplaatst als je een nieuwe wasmachine vervoert.",
    },
    {
      question: "Kunnen jullie ook een droger vervoeren?",
      answer:
        "Ja, wij vervoeren alle soorten witgoed, inclusief drogers, vaatwassers en vriezers. Geef bij je aanvraag aan welk witgoed je wilt laten vervoeren.",
    },
    {
      question: "Kunnen jullie ook mijn oude witgoed meenemen?",
      answer:
        "Ja, wij kunnen je oude witgoed ophalen als extra item. Geef dit aan bij je aanvraag, dan nemen we dit mee in de prijsberekening.",
    },
    {
      question: "Hoe lang moet ik wachten na transport voordat ik de koelkast aanzet?",
      answer:
        "Als de koelkast rechtop is vervoerd, kun je hem direct aanzetten. Is hij tijdelijk op zijn zij gelegd? Wacht dan minimaal 2–4 uur zodat het koelmiddel zich kan herstellen.",
    },
    {
      question: "Is mijn witgoed verzekerd tijdens transport?",
      answer:
        "Ja, al onze transporten zijn verzekerd. Jouw witgoed is in goede handen tijdens het hele traject.",
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
    { label: "Apparatuur vervoeren", href: "/vervoeren/apparatuur-vervoeren" },
    { label: "Inboedel vervoeren", href: "/vervoeren/inboedel-vervoeren" },
  ],
  gerelateerdeItems: [
    { label: "Meubeltransport", href: "/diensten/meubeltransport" },
    { label: "Ophaalservice", href: "/diensten/ophaalservice" },
    { label: "Kleine verhuizing", href: "/diensten/kleine-verhuizing" },
    { label: "Zakelijk transport", href: "/diensten/zakelijk-transport" },
  ],
};

export default function WitgoedVervoeren() {
  return <VervoerPageTemplate data={data} />;
}

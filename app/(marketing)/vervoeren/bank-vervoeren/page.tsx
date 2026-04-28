import type { Metadata } from "next";
import { VervoerPageTemplate } from "@/components/vervoeren/shared/vervoer-template";
import type { VervoerPageData } from "@/components/vervoeren/shared/vervoer-template";

export const metadata: Metadata = {
  title: "Bank vervoeren",
  description:
    "Hoekbank, 2-zits of 3-zits bank laten vervoeren? BusjeDirect haalt op en bezorgt door heel Nederland. Prijs direct berekenen.",
};

const data: VervoerPageData = {
  metaTitle: "Bank vervoeren | BusjeDirect",
  metaDescription:
    "Hoekbank, 2-zits of 3-zits bank laten vervoeren? BusjeDirect haalt op en bezorgt door heel Nederland. Prijs direct berekenen.",
  slug: "bank-vervoeren",
  item: "Bank",
  label: "Bank vervoeren",
  h1: "Bank vervoeren snel en veilig geregeld",
  heroSubtext:
    "Een bank vervoeren is zwaar en onhandig werk. BusjeDirect regelt het transport van jouw bank, snel, veilig en zonder gedoe. Hoekbanken, 2-zits, 3-zits: wij tillen het voor je.",
  heroImage: "/Vervoeren/Banken.png",
  introParagraphs: [
    "Een bank vervoeren klinkt eenvoudig, maar in de praktijk is het een flinke klus. Zeker als het gaat om een grote hoekbank of een zware leren bank. BusjeDirect neemt dit werk van je over. Wij halen jouw bank op en bezorgen hem veilig op het gewenste adres, door heel Nederland.",
    "Of je nu een bank hebt gekocht via Marktplaats, een nieuwe bank wilt laten bezorgen vanuit de winkel, of je bank wilt meenemen bij een verhuizing. Wij regelen het transport professioneel. Onze chauffeurs weten hoe ze grote meubels veilig inladen en uitladen zonder beschadigingen.",
    "Bank vervoeren via BusjeDirect is eenvoudig: vul je adressen in, geef aan wat je wilt laten vervoeren en ontvang direct een transparante prijs. Geen verborgen kosten, geen gedoe.",
  ],
  wanneerItems: [
    {
      title: "Marktplaats bank gekocht",
      description:
        "Je hebt een tweedehands bank gevonden op Marktplaats maar geen auto of aanhanger. Wij halen hem op bij de verkoper en bezorgen hem bij jou thuis.",
    },
    {
      title: "Nieuwe bank van de winkel",
      description:
        "De winkel bezorgt niet of vraagt hoge bezorgkosten. Wij halen jouw nieuwe bank op bij de winkel en brengen hem naar jouw woning.",
    },
    {
      title: "Bank meenemen bij verhuizing",
      description:
        "Je verhuist en wilt je bank meenemen naar het nieuwe adres. Wij vervoeren hem veilig als onderdeel van jouw verhuistransport.",
    },
    {
      title: "Bank doneren of weggeven",
      description:
        "Je wilt je oude bank doneren aan een goed doel of weggeven via Marktplaats. Wij regelen het transport naar de nieuwe eigenaar of het ophaalpunt.",
    },
  ],
  prijsUitleg: [
    "De prijs voor bank vervoeren is gebaseerd op de rijafstand tussen het ophaaladres en het afleveradres. Hoe verder de rit, hoe hoger de prijs. Simpel en eerlijk.",
    "Wij hanteren een starttarief van €65 excl. btw. Wij werken drempel tot drempel: ophalen en afleveren bij de buitendeur op de begane grond. Wij lopen geen trappen en komen niet binnenshuis.",
    "Via onze website zie je direct wat jouw transport kost. Geen verrassingen achteraf.",
  ],
  faqs: [
    {
      question: "Wat kost bank vervoeren?",
      answer:
        "De prijs voor bank vervoeren start vanaf €65 excl. btw. De exacte prijs hangt af van de afstand tussen ophaal- en afleveradres. Bereken je prijs via onze website.",
    },
    {
      question: "Helpen jullie met tillen van de bank?",
      answer:
        "Wij werken drempel tot drempel: ophalen en afleveren bij de buitendeur op de begane grond. Wij lopen geen trappen en komen niet binnenshuis. Zorg dat de bank klaarstaat bij de buitendeur op de begane grond.",
    },
    {
      question: "Kunnen jullie ook een hoekbank vervoeren?",
      answer:
        "Ja, wij vervoeren ook hoekbanken. Geef bij je aanvraag aan dat het om een hoekbank gaat, zodat we rekening kunnen houden met de afmetingen en het gewicht.",
    },
    {
      question: "Wat als mijn bank beschadigd raakt tijdens transport?",
      answer:
        "Wij gaan zorgvuldig om met uw goederen. Tijdens transport geldt een beperkte aansprakelijkheid conform onze algemene voorwaarden. Eventuele schade dient direct bij levering gemeld te worden.",
    },
    {
      question: "Kunnen jullie ook in het weekend een bank vervoeren?",
      answer:
        "Ja, wij zijn ook in het weekend beschikbaar. Kies bij je aanvraag een datum en tijdvak dat jou het beste uitkomt, inclusief zaterdag en zondag.",
    },
  ],
  anderItems: [
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
    { label: "Witgoed vervoeren", href: "/vervoeren/witgoed-vervoeren" },
  ],
  gerelateerdeItems: [
    { label: "Meubeltransport", href: "/diensten/meubeltransport" },
    { label: "Ophaalservice", href: "/diensten/ophaalservice" },
    { label: "Kleine verhuizing", href: "/diensten/kleine-verhuizing" },
    { label: "Zakelijk transport", href: "/diensten/zakelijk-transport" },
  ],
};

export default function BankVervoeren() {
  return <VervoerPageTemplate data={data} />;
}

import type { Metadata } from "next";
import { VervoerPageTemplate } from "@/components/vervoeren/shared/vervoer-template";
import type { VervoerPageData } from "@/components/vervoeren/shared/vervoer-template";

export const metadata: Metadata = {
  title: "Inboedel vervoeren? Snel en veilig transport | BusjeDirect",
  description:
    "Laat je inboedel veilig en snel vervoeren door BusjeDirect. Transparante prijs en snelle service. Vraag direct vrijblijvend aan.",
};

const data: VervoerPageData = {
  metaTitle: "Inboedel vervoeren? Snel en veilig transport | BusjeDirect",
  metaDescription:
    "Laat je inboedel veilig en snel vervoeren door BusjeDirect. Transparante prijs en snelle service. Vraag direct vrijblijvend aan.",
  slug: "inboedel-vervoeren",
  item: "Inboedel",
  label: "Inboedel vervoeren",
  h1: "Inboedel vervoeren snel en zonder zorgen geregeld",
  heroSubtext:
    "Een complete inboedel vervoeren is een grote klus. BusjeDirect regelt het transport van jouw volledige inboedel, van meubels en witgoed tot dozen en persoonlijke spullen, veilig en efficiënt door heel Nederland.",
  heroImage: "/Vervoeren/Inboedel.png",
  introParagraphs: [
    "Een inboedel vervoeren is meer dan een paar dozen sjouwen. Het gaat om al jouw bezittingen: meubels, witgoed, persoonlijke spullen en alles daartussenin. BusjeDirect neemt dit werk van je over en vervoert jouw inboedel veilig van het ene adres naar het andere.",
    "Of je nu een kleine inboedel hebt of een volledig gemeubileerde woning wilt verplaatsen. Wij regelen het transport professioneel. Onze chauffeurs weten hoe ze een inboedel efficiënt inladen en veilig vervoeren zonder beschadigingen.",
    "Inboedel vervoeren via BusjeDirect is eenvoudig: vul je adressen in, geef aan hoeveel items je wilt laten vervoeren en ontvang direct een transparante prijs. Geen verborgen kosten, geen gedoe.",
  ],
  wanneerItems: [
    {
      title: "Verhuizen naar nieuwe woning",
      description:
        "Je verhuist naar een nieuwe woning en wilt je complete inboedel meenemen. Wij regelen het transport van al jouw spullen.",
    },
    {
      title: "Tijdelijk opslaan",
      description:
        "Je wilt je inboedel tijdelijk opslaan, bijvoorbeeld tijdens een verbouwing. Wij vervoeren je spullen naar de opslaglocatie.",
    },
    {
      title: "Inboedel van overledene verplaatsen",
      description:
        "Je moet de inboedel van een overledene verplaatsen of laten ophalen. Wij regelen dit discreet en zorgvuldig.",
    },
    {
      title: "Inboedel verkopen of doneren",
      description:
        "Je wilt je inboedel verkopen of doneren aan een goed doel. Wij regelen het transport naar de nieuwe eigenaar of het ophaalpunt.",
    },
  ],
  prijsUitleg: [
    "De prijs voor inboedel vervoeren is gebaseerd op de rijafstand tussen het ophaaladres en het afleveradres. Hoe verder de rit, hoe hoger de prijs. Simpel en eerlijk.",
    "Wij hanteren een starttarief van €65 excl. btw. Wij werken drempel tot drempel: ophalen en afleveren bij de buitendeur op de begane grond. Wij lopen geen trappen en komen niet binnenshuis. Bij grotere inboedels kan het zijn dat er meerdere ritten nodig zijn.",
    "Via onze website zie je direct wat jouw transport kost. Geen verrassingen achteraf.",
  ],
  faqs: [
    {
      question: "Wat kost inboedel vervoeren?",
      answer:
        "De prijs start vanaf €65 excl. btw en hangt af van de afstand tussen het ophaaladres en het afleveradres. Bereken je prijs via onze website.",
    },
    {
      question: "Hoe groot mag de inboedel zijn?",
      answer:
        "Wij vervoeren inboedels van elke omvang, van een kleine studio tot een volledig gemeubileerde woning. Bij grote inboedels plannen we meerdere ritten of een grotere bus in.",
    },
    {
      question: "Helpen jullie ook met inpakken?",
      answer:
        "Wij vervoeren de inboedel, maar het inpakken doe je zelf. Zorg dat dozen goed gesloten en gelabeld zijn voor een efficiënt transport.",
    },
    {
      question: "Kunnen jullie ook naar het buitenland vervoeren?",
      answer:
        "Ja, wij verzorgen ook internationale transporten. Bekijk onze dienst internationaal transport voor meer informatie.",
    },
    {
      question: "Hoe ver van tevoren moet ik boeken?",
      answer:
        "In de meeste gevallen kunnen wij binnen 24–48 uur transport regelen. Voor grote inboedels raden we aan om minimaal een week van tevoren te boeken.",
    },
    {
      question: "Is mijn inboedel verzekerd tijdens transport?",
      answer:
        "Ja, al onze transporten zijn verzekerd. Jouw inboedel is in goede handen tijdens het hele traject.",
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
    { label: "Witgoed vervoeren", href: "/vervoeren/witgoed-vervoeren" },
  ],
  gerelateerdeItems: [
    { label: "Kleine verhuizing", href: "/diensten/kleine-verhuizing" },
    { label: "Meubeltransport", href: "/diensten/meubeltransport" },
    { label: "Ophaalservice", href: "/diensten/ophaalservice" },
    { label: "Internationaal transport", href: "/diensten/internationaal-transport" },
  ],
};

export default function InboedelVervoeren() {
  return <VervoerPageTemplate data={data} />;
}

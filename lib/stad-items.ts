/**
 * De 5 items waarvoor we stad+item SEO-pagina's hebben.
 * Route: /[stad]/[item-slug]
 */

export interface StadItem {
  /** URL slug — gebruikt in /[stad]/[slug] */
  slug: string;
  /** Enkelvoud voor in teksten, bijv. "bank" */
  item: string;
  /** Meervoud voor in teksten, bijv. "banken" */
  itemMeervoud: string;
  /** Label voor links, bijv. "Bank vervoeren" */
  label: string;
  /** Afbeelding uit /public/Vervoeren/ */
  heroImage: string;
  /** Link naar de algemene vervoeren-pagina */
  vervoerHref: string;
}

export const STAD_ITEMS: StadItem[] = [
  {
    slug: "bank-vervoeren",
    item: "bank",
    itemMeervoud: "banken",
    label: "Bank vervoeren",
    heroImage: "/Vervoeren/Banken.png",
    vervoerHref: "/vervoeren/bank-vervoeren",
  },
  {
    slug: "wasmachine-vervoeren",
    item: "wasmachine",
    itemMeervoud: "wasmachines",
    label: "Wasmachine vervoeren",
    heroImage: "/Vervoeren/Wasmachine.png",
    vervoerHref: "/vervoeren/wasmachine-vervoeren",
  },
  {
    slug: "kast-vervoeren",
    item: "kast",
    itemMeervoud: "kasten",
    label: "Kast vervoeren",
    heroImage: "/Vervoeren/Kasten.png",
    vervoerHref: "/vervoeren/kast-vervoeren",
  },
  {
    slug: "koelkast-vervoeren",
    item: "koelkast",
    itemMeervoud: "koelkasten",
    label: "Koelkast vervoeren",
    heroImage: "/Vervoeren/Koelkast.png",
    vervoerHref: "/vervoeren/koelkast-vervoeren",
  },
  {
    slug: "bed-vervoeren",
    item: "bed",
    itemMeervoud: "bedden",
    label: "Bed vervoeren",
    heroImage: "/Vervoeren/Bed.png",
    vervoerHref: "/vervoeren/bed-vervoeren",
  },
];

export const STAD_ITEM_MAP = Object.fromEntries(
  STAD_ITEMS.map((i) => [i.slug, i])
) as Record<string, StadItem>;

import { LOCATIES } from "./locaties";

/** Geeft alle 60 combinaties terug voor generateStaticParams */
export function getAllStadItemCombinations() {
  return LOCATIES.flatMap((locatie) =>
    STAD_ITEMS.map((item) => ({
      locatie: locatie.slug,
      vervoer: item.slug,
    }))
  );
}

// ---------------------------------------------------------------------------
// Unieke FAQ's per item (stad wordt dynamisch ingevuld)
// ---------------------------------------------------------------------------

export function getItemFaqs(itemSlug: string, stadNaam: string) {
  const faqsPerItem: Record<string, Array<{ question: string; answer: string }>> = {
    "bank-vervoeren": [
      {
        question: `Kunnen jullie ook een hoekbank vervoeren in ${stadNaam}?`,
        answer: `Ja, wij vervoeren ook hoekbanken in ${stadNaam}. Geef bij je aanvraag aan dat het om een hoekbank gaat zodat we rekening kunnen houden met de afmetingen. Zorg dat de bank gedemonteerd klaarstaat bij de buitendeur op de begane grond.`,
      },
      {
        question: `Wat kost een bank vervoeren in ${stadNaam}?`,
        answer: `De prijs start vanaf €65 excl. btw en hangt af van de afstand tussen het ophaaladres en het afleveradres in ${stadNaam}. Bereken je prijs direct via onze website.`,
      },
      {
        question: `Hoe snel kunnen jullie een bank ophalen in ${stadNaam}?`,
        answer: `In de meeste gevallen binnen 24–48 uur. Is er beschikbaarheid? Dan kunnen wij vaak ook dezelfde dag nog rijden in ${stadNaam}. Bij last-minute aanvragen kan een toeslag van toepassing zijn.`,
      },
      {
        question: `Kunnen jullie een bank ophalen via Marktplaats in ${stadNaam}?`,
        answer: `Ja, dat doen wij dagelijks. Vul het adres van de verkoper in ${stadNaam} in als ophaaladres en jouw adres als bestemming. Wij regelen de rest.`,
      },
      {
        question: `Komen jullie ook binnenshuis om de bank op te halen?`,
        answer: `Nee, wij werken drempel-tot-drempel. Wij halen op bij de buitendeur op de begane grond en leveren af bij de buitendeur op de begane grond. Zorg dat de bank klaarstaat.`,
      },
    ],
    "wasmachine-vervoeren": [
      {
        question: `Moeten de transportbouten in de wasmachine zitten bij transport in ${stadNaam}?`,
        answer: `Ja, zorg dat de transportbouten zijn geplaatst voordat wij de wasmachine ophalen in ${stadNaam}. Dit voorkomt schade aan de trommel tijdens transport.`,
      },
      {
        question: `Wat kost een wasmachine vervoeren in ${stadNaam}?`,
        answer: `De prijs start vanaf €65 excl. btw en hangt af van de afstand in ${stadNaam}. Bereken je prijs direct via onze website.`,
      },
      {
        question: `Hoe snel kunnen jullie een wasmachine ophalen in ${stadNaam}?`,
        answer: `In de meeste gevallen binnen 24–48 uur. Soms dezelfde dag als er beschikbaarheid is in ${stadNaam}. Bij last-minute aanvragen kan een toeslag van toepassing zijn.`,
      },
      {
        question: `Vervoeren jullie ook drogers en was-droogcombinaties in ${stadNaam}?`,
        answer: `Ja, wij vervoeren alle soorten witgoed in ${stadNaam}: wasmachines, drogers en was-droogcombinaties. Geef bij je aanvraag aan wat je wilt laten vervoeren.`,
      },
      {
        question: `Hoe lang moet ik wachten voordat ik de wasmachine aanzet na transport?`,
        answer: `Als de wasmachine rechtop is vervoerd kun je hem direct aanzetten. Wij vervoeren wasmachines altijd rechtop. Zorg wel dat de transportbouten zijn verwijderd voor gebruik.`,
      },
    ],
    "kast-vervoeren": [
      {
        question: `Moet een kast gedemonteerd zijn voor transport in ${stadNaam}?`,
        answer: `Grote kasten die niet in één stuk passen moeten gedemonteerd zijn. Wij vervoeren de onderdelen veilig en je monteert de kast zelf op de nieuwe locatie. Kleine kasten kunnen vaak in één stuk.`,
      },
      {
        question: `Wat kost een kast vervoeren in ${stadNaam}?`,
        answer: `De prijs start vanaf €65 excl. btw en hangt af van de afstand in ${stadNaam}. Bereken je prijs direct via onze website.`,
      },
      {
        question: `Kunnen jullie ook een IKEA-kast ophalen in ${stadNaam}?`,
        answer: `Ja, wij halen regelmatig IKEA-kasten op in ${stadNaam} en omgeving. Geef het adres van IKEA of de verkoper op als ophaaladres.`,
      },
      {
        question: `Hoe snel kunnen jullie een kast ophalen in ${stadNaam}?`,
        answer: `In de meeste gevallen binnen 24–48 uur. Soms dezelfde dag als er beschikbaarheid is in ${stadNaam}.`,
      },
      {
        question: `Vervoeren jullie ook glazen vitrinekasten in ${stadNaam}?`,
        answer: `Ja, maar geef bij je aanvraag aan dat er glas aanwezig is zodat we extra voorzichtig kunnen zijn. Verwijder losse glazen onderdelen voor transport.`,
      },
    ],
    "koelkast-vervoeren": [
      {
        question: `Moet een koelkast rechtop worden vervoerd in ${stadNaam}?`,
        answer: `Ja, wij vervoeren koelkasten altijd rechtop om het koelsysteem te beschermen. Na aankomst adviseren wij de koelkast minimaal 2 uur te laten staan voordat je hem aanzet.`,
      },
      {
        question: `Wat kost een koelkast vervoeren in ${stadNaam}?`,
        answer: `De prijs start vanaf €65 excl. btw en hangt af van de afstand in ${stadNaam}. Bereken je prijs direct via onze website.`,
      },
      {
        question: `Hoe snel kunnen jullie een koelkast ophalen in ${stadNaam}?`,
        answer: `In de meeste gevallen binnen 24–48 uur. Soms dezelfde dag als er beschikbaarheid is in ${stadNaam}.`,
      },
      {
        question: `Vervoeren jullie ook Amerikaanse koelkasten in ${stadNaam}?`,
        answer: `Ja, wij vervoeren ook grote Amerikaanse koelkasten in ${stadNaam}. Geef bij je aanvraag de afmetingen op zodat we de juiste capaciteit kunnen inplannen.`,
      },
      {
        question: `Hoe lang moet ik wachten voordat ik de koelkast aanzet na transport in ${stadNaam}?`,
        answer: `Wacht minimaal 2 uur nadat de koelkast op zijn plek staat voordat je hem aanzet. Dit geeft het koelmiddel de tijd om zich te herstellen.`,
      },
    ],
    "bed-vervoeren": [
      {
        question: `Moet een bed gedemonteerd zijn voor transport in ${stadNaam}?`,
        answer: `Grote bedden en boxsprings moeten in de meeste gevallen gedemonteerd zijn. Zorg dat het bed uit elkaar is gehaald en klaarstaat bij de buitendeur op de begane grond.`,
      },
      {
        question: `Wat kost een bed vervoeren in ${stadNaam}?`,
        answer: `De prijs start vanaf €65 excl. btw en hangt af van de afstand in ${stadNaam}. Bereken je prijs direct via onze website.`,
      },
      {
        question: `Kunnen jullie ook een boxspring vervoeren in ${stadNaam}?`,
        answer: `Ja, wij vervoeren ook boxsprings in ${stadNaam}. Geef bij je aanvraag aan dat het om een boxspring gaat zodat we rekening kunnen houden met de afmetingen.`,
      },
      {
        question: `Hoe snel kunnen jullie een bed ophalen in ${stadNaam}?`,
        answer: `In de meeste gevallen binnen 24–48 uur. Soms dezelfde dag als er beschikbaarheid is in ${stadNaam}.`,
      },
      {
        question: `Kunnen jullie ook het matras meenemen bij bed vervoeren in ${stadNaam}?`,
        answer: `Ja, het matras kan als extra item worden meegenomen. Geef dit aan bij je aanvraag, dan nemen we dit mee in de prijsberekening.`,
      },
    ],
  };

  return faqsPerItem[itemSlug] ?? [
    {
      question: `Kunnen jullie een ${itemSlug.replace("-vervoeren", "")} vervoeren in ${stadNaam}?`,
      answer: `Ja, BusjeDirect verzorgt transport in ${stadNaam} en omgeving. Wij rijden vanuit ons depot in Diemen en zijn snel bij je.`,
    },
    {
      question: `Wat kost transport in ${stadNaam}?`,
      answer: `De prijs start vanaf €65 excl. btw. Bereken je prijs direct via onze website.`,
    },
    {
      question: `Hoe snel kunnen jullie komen in ${stadNaam}?`,
      answer: `In de meeste gevallen binnen 24–48 uur. Soms dezelfde dag als er beschikbaarheid is.`,
    },
    {
      question: `Komen jullie ook binnenshuis?`,
      answer: `Nee, wij werken drempel-tot-drempel. Ophalen en afleveren bij de buitendeur op de begane grond.`,
    },
    {
      question: `Kunnen jullie ook ophalen via Marktplaats in ${stadNaam}?`,
      answer: `Ja, vul het adres van de verkoper in als ophaaladres en jouw adres als bestemming.`,
    },
  ];
}

export function getItemIntroParagraph(itemSlug: string, stadNaam: string): string {
  const intros: Record<string, string> = {
    "bank-vervoeren": `Een bank vervoeren in ${stadNaam} is lastiger dan het lijkt. Zeker een hoekbank of zware leren bank past niet in een gewone auto en vraagt om de juiste aanpak. BusjeDirect rijdt dagelijks in ${stadNaam} en weet hoe je een bank veilig inlaadt, vervoert en aflevert zonder beschadigingen. Of je nu een tweedehands bank hebt gevonden via Marktplaats in ${stadNaam} of een nieuwe bank wilt laten bezorgen vanuit de winkel.`,

    "wasmachine-vervoeren": `Een wasmachine vervoeren in ${stadNaam} vraagt om zorgvuldigheid. Wasmachines zijn zwaar, gevoelig voor stoten en moeten bij voorkeur rechtop worden vervoerd. BusjeDirect heeft de ervaring en het juiste materiaal om jouw wasmachine veilig te transporteren in ${stadNaam}. Zorg dat de transportbouten zijn geplaatst voor vertrek. Wij regelen de rest.`,

    "kast-vervoeren": `Kasten vervoeren in ${stadNaam} is een klus apart. Grote garderobekasten, IKEA PAX-kasten of zware boekenkasten passen zelden in een gewone auto en zijn onhandig om te verplaatsen. BusjeDirect rijdt regelmatig in ${stadNaam} voor kasttransport. Of je nu een kast hebt gekocht via Marktplaats of een nieuwe kast wilt laten ophalen bij IKEA in de buurt van ${stadNaam}.`,

    "koelkast-vervoeren": `Een koelkast vervoeren in ${stadNaam} doe je niet zomaar even. Koelkasten zijn zwaar, onhandig en moeten rechtop worden vervoerd om het koelsysteem te beschermen. BusjeDirect vervoert koelkasten en vriezers dagelijks in ${stadNaam} en omgeving. Na aankomst adviseren wij de koelkast minimaal 2 uur te laten staan voordat je hem aanzet.`,

    "bed-vervoeren": `Een bed vervoeren in ${stadNaam} is meer werk dan het lijkt. Bedden zijn groot, onhandig en moeten in de meeste gevallen gedemonteerd worden voor transport. BusjeDirect regelt bedtransport in ${stadNaam} snel en professioneel. Van eenpersoonsbed tot boxspring. Zorg dat het bed gedemonteerd klaarstaat bij de buitendeur op de begane grond.`,
  };

  return intros[itemSlug] ?? `Een ${itemSlug.replace("-vervoeren", "")} vervoeren in ${stadNaam}? BusjeDirect regelt het snel en veilig. Wij rijden dagelijks in ${stadNaam} en omgeving voor particulieren en bedrijven.`;
}

// ---------------------------------------------------------------------------
// Unieke derde intro-alinea per item
// ---------------------------------------------------------------------------

export function getItemDrempelParagraph(itemSlug: string): string {
  const paragraphs: Record<string, string> = {
    "bank-vervoeren": "Een bank staat vaak diep in de woonkamer. Zorg dat hij klaarstaat bij de buitendeur op de begane grond. Wij tillen hem in de bus en bezorgen hem op het nieuwe adres. Betaling vindt plaats bij aflevering.",
    "wasmachine-vervoeren": "Zorg dat de transportbouten zijn geplaatst en de wasmachine klaarstaat bij de buitendeur. Wij vervoeren hem rechtop en bezorgen hem op het nieuwe adres. Betaling vindt plaats bij aflevering.",
    "kast-vervoeren": "Zorg dat de kast gedemonteerd klaarstaat bij de buitendeur. Losse onderdelen graag bij elkaar. Wij laden in en bezorgen op het nieuwe adres. Betaling vindt plaats bij aflevering.",
    "koelkast-vervoeren": "Zorg dat de koelkast leeg en ontdooid is voor transport. Wij vervoeren hem rechtop en adviseren na aankomst 2 uur te wachten voor gebruik. Betaling vindt plaats bij aflevering.",
    "bed-vervoeren": "Zorg dat het bed gedemonteerd klaarstaat bij de buitendeur. Wij laden de onderdelen in en bezorgen ze op het nieuwe adres. Betaling vindt plaats bij aflevering.",
  };
  return paragraphs[itemSlug] ?? "Wij werken drempel-tot-drempel: ophalen en afleveren bij de buitendeur op de begane grond. Geen trappen, niet binnenshuis. Betaling vindt plaats bij aflevering.";
}

// ---------------------------------------------------------------------------
// Unieke prijs tekst per stad
// ---------------------------------------------------------------------------

export function getStadPrijsTekst(stadNaam: string, itemLabel: string): string {
  const varianten = [
    `De prijs voor ${itemLabel.toLowerCase()} in ${stadNaam} start vanaf €65 excl. btw. De exacte prijs hangt af van de ophaal- en afleverlocatie. Bereken je prijs direct via onze website.`,
    `De prijs voor ${itemLabel.toLowerCase()} in ${stadNaam} start vanaf €65 excl. btw. Via onze website zie je direct wat jouw transport kost, zonder verborgen kosten.`,
    `De prijs voor ${itemLabel.toLowerCase()} in ${stadNaam} start vanaf €65 excl. btw. Vul je adressen in en zie direct de prijs. Geen verrassingen achteraf.`,
    `De prijs voor ${itemLabel.toLowerCase()} in ${stadNaam} start vanaf €65 excl. btw. Bereken je prijs online en plan direct een datum in.`,
  ];
  const index = stadNaam.length % varianten.length;
  return varianten[index];
}

export interface Locatie {
  /** URL slug — used in /locaties/[slug] */
  slug: string;
  /** Display name */
  name: string;
  /** Short description for cards and meta */
  description: string;
  /** Province / region label */
  regio: string;
}

export const LOCATIES: Locatie[] = [
  {
    slug: "amsterdam",
    name: "Amsterdam",
    description: "Transport en verhuisservice in Amsterdam en omgeving. Snel opgehaald en bezorgd.",
    regio: "Noord-Holland",
  },
  {
    slug: "amstelveen",
    name: "Amstelveen",
    description: "Meubels, witgoed en inboedels vervoeren in Amstelveen. Vlak bij ons depot in Diemen.",
    regio: "Noord-Holland",
  },
  {
    slug: "diemen",
    name: "Diemen",
    description: "Ons depot staat in Diemen — transport vanuit Diemen is altijd snel en voordelig.",
    regio: "Noord-Holland",
  },
  {
    slug: "badhoevedorp",
    name: "Badhoevedorp",
    description: "Transport in Badhoevedorp en de Haarlemmermeer. Snel geregeld vanuit Diemen.",
    regio: "Noord-Holland",
  },
  {
    slug: "hoofddorp",
    name: "Hoofddorp",
    description: "Meubeltransport en ophaalservice in Hoofddorp. Ideaal voor expats rond Schiphol.",
    regio: "Noord-Holland",
  },
  {
    slug: "haarlem",
    name: "Haarlem",
    description: "Bank, kast of witgoed vervoeren in Haarlem? Wij regelen het snel en veilig.",
    regio: "Noord-Holland",
  },
  {
    slug: "zaandam",
    name: "Zaandam",
    description: "Transport in Zaandam en de Zaanstreek. Grote spullen veilig van A naar B.",
    regio: "Noord-Holland",
  },
  {
    slug: "purmerend",
    name: "Purmerend",
    description: "Meubels en witgoed vervoeren in Purmerend. Snel geregeld, transparante prijs.",
    regio: "Noord-Holland",
  },
  {
    slug: "weesp",
    name: "Weesp",
    description: "Transport in Weesp en omgeving. Vlak bij Diemen, altijd een snelle service.",
    regio: "Noord-Holland",
  },
  {
    slug: "almere",
    name: "Almere",
    description: "Groot transport in Almere. Van Marktplaats aankopen tot complete inboedels.",
    regio: "Flevoland",
  },
  {
    slug: "bussum",
    name: "Bussum",
    description: "Meubeltransport en ophaalservice in Bussum en het Gooi.",
    regio: "Noord-Holland",
  },
  {
    slug: "utrecht",
    name: "Utrecht",
    description: "Transport in Utrecht en omgeving. Banken, kasten, witgoed en inboedels.",
    regio: "Utrecht",
  },
];

/** Helper to get a locatie by slug */
export function getLocatie(slug: string): Locatie | undefined {
  return LOCATIES.find((l) => l.slug === slug);
}

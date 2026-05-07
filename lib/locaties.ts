export interface Locatie {
  /** URL slug — used in /locaties/[slug] */
  slug: string;
  /** Display name */
  name: string;
  /** Short description for cards and meta */
  description: string;
  /** Province / region label */
  regio: string;
  /** Unique SEO intro paragraph for this city */
  introParagraph: string;
}

export const LOCATIES: Locatie[] = [
  {
    slug: "amsterdam",
    name: "Amsterdam",
    description: "Transport en verhuisservice in Amsterdam en omgeving. Snel opgehaald en bezorgd.",
    regio: "Noord-Holland",
    introParagraph: "Amsterdam is onze thuismarkt. Van de Jordaan tot IJburg en van Noord tot de Pijp. Wij kennen de stad en rijden er dagelijks. Of je nu een bank hebt gekocht via Marktplaats in Oost of witgoed wilt laten bezorgen in Zuid, BusjeDirect regelt het snel en zonder gedoe.",
  },
  {
    slug: "amstelveen",
    name: "Amstelveen",
    description: "Meubels, witgoed en inboedels vervoeren in Amstelveen. Vlak bij ons depot in Diemen.",
    regio: "Noord-Holland",
    introParagraph: "Amstelveen ligt op een steenworp afstand van ons depot in Diemen. Dat betekent korte rijtijden en een scherpe prijs voor transport in Amstelveen. Populair bij expats en gezinnen die meubels willen laten bezorgen of ophalen.",
  },
  {
    slug: "diemen",
    name: "Diemen",
    description: "Ons depot staat in Diemen. Transport vanuit Diemen is altijd snel en voordelig.",
    regio: "Noord-Holland",
    introParagraph: "Diemen is onze thuisbasis. Ons depot staat hier, wat betekent dat transport in Diemen altijd snel en voordelig is. Geen lange aanrijtijden, geen hoge kosten. Direct ophalen en bezorgen in jouw buurt.",
  },
  {
    slug: "badhoevedorp",
    name: "Badhoevedorp",
    description: "Transport in Badhoevedorp en de Haarlemmermeer. Snel geregeld vanuit Diemen.",
    regio: "Noord-Holland",
    introParagraph: "Badhoevedorp en de Haarlemmermeer zijn goed bereikbaar vanuit ons depot in Diemen. Ideaal voor bewoners die meubels willen laten vervoeren of een Marktplaats aankoop willen ophalen in de regio rond Schiphol.",
  },
  {
    slug: "hoofddorp",
    name: "Hoofddorp",
    description: "Meubeltransport en ophaalservice in Hoofddorp. Ideaal voor expats rond Schiphol.",
    regio: "Noord-Holland",
    introParagraph: "Hoofddorp is een groeiende stad met veel expats en nieuwbouwwijken. BusjeDirect verzorgt regelmatig transport in Hoofddorp: van nieuwe meubels bezorgen tot complete inboedels verplaatsen bij een verhuizing.",
  },
  {
    slug: "haarlem",
    name: "Haarlem",
    description: "Bank, kast of witgoed vervoeren in Haarlem? Wij regelen het snel en veilig.",
    regio: "Noord-Holland",
    introParagraph: "Haarlem heeft veel karakteristieke woningen met smalle trappen en grachten. Gelukkig werken wij drempel-tot-drempel. Wij bezorgen tot aan de buitendeur op de begane grond. Zo hoef jij je geen zorgen te maken over de logistiek.",
  },
  {
    slug: "zaandam",
    name: "Zaandam",
    description: "Transport in Zaandam en de Zaanstreek. Grote spullen veilig van A naar B.",
    regio: "Noord-Holland",
    introParagraph: "Zaandam en de Zaanstreek zijn goed bereikbaar vanuit Diemen via de A10 en A8. Wij rijden regelmatig in de regio voor meubeltransport, witgoed en Marktplaats ophaalservice. Snel geregeld, eerlijke prijs.",
  },
  {
    slug: "purmerend",
    name: "Purmerend",
    description: "Meubels en witgoed vervoeren in Purmerend. Snel geregeld, transparante prijs.",
    regio: "Noord-Holland",
    introParagraph: "Purmerend groeit snel en er wordt veel verhuisd. BusjeDirect helpt bewoners in Purmerend met het vervoeren van meubels, witgoed en andere grote spullen. Vanuit Diemen zijn we er snel bij.",
  },
  {
    slug: "weesp",
    name: "Weesp",
    description: "Transport in Weesp en omgeving. Vlak bij Diemen, altijd een snelle service.",
    regio: "Noord-Holland",
    introParagraph: "Weesp ligt direct naast Diemen, waardoor transport hier bijzonder snel en voordelig is. Of je nu een bank wilt laten ophalen of een complete inboedel wilt verplaatsen, wij zijn er snel.",
  },
  {
    slug: "almere",
    name: "Almere",
    description: "Groot transport in Almere. Van Marktplaats aankopen tot complete inboedels.",
    regio: "Flevoland",
    introParagraph: "Almere is een van de grootste steden van Nederland en er wordt veel gekocht en verhuisd. BusjeDirect rijdt dagelijks naar Almere voor meubeltransport, witgoed en ophaalservice. Via de A6 zijn we er snel.",
  },
  {
    slug: "bussum",
    name: "Bussum",
    description: "Meubeltransport en ophaalservice in Bussum en het Gooi.",
    regio: "Noord-Holland",
    introParagraph: "Bussum en het Gooi staan bekend om mooie woningen en veel tweedehands meubels via Marktplaats. BusjeDirect haalt op en bezorgt in Bussum en omgeving. Vanuit Diemen zijn we er via de A1 snel.",
  },
  {
    slug: "utrecht",
    name: "Utrecht",
    description: "Transport in Utrecht en omgeving. Banken, kasten, witgoed en inboedels.",
    regio: "Utrecht",
    introParagraph: "Utrecht is een van de drukste steden van Nederland met veel studenten, starters en gezinnen die verhuizen. BusjeDirect rijdt regelmatig naar Utrecht voor meubeltransport en ophaalservice. Via de A2 zijn we er in circa 30 minuten.",
  },
];

/** Helper to get a locatie by slug */
export function getLocatie(slug: string): Locatie | undefined {
  return LOCATIES.find((l) => l.slug === slug);
}

// ---------------------------------------------------------------------------
// Prijsconfiguratie BusjeDirect
//
// Pas hier de tarieven en standplaats aan — nergens anders.
// Alle bedragen zijn incl. btw, intern opgeslagen in centen.
// ---------------------------------------------------------------------------

/** Standplaats van het bedrijf — startpunt en eindpunt van elke operationele route */
export const DEPOT_COORDINATES = {
  latitude: 52.333905,
  longitude: 4.977463,
} as const;

/** Starttarief incl. btw in centen (€65,00) */
export const START_FEE_CENTS = 6500;

/** Prijs per kilometer incl. btw in centen (€0,85/km) */
export const PRICE_PER_KM_CENTS = 85;

/** Minimumprijs incl. btw in centen (€75,00) */
export const MINIMUM_PRICE_CENTS = 7500;

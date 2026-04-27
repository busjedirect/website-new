// ---------------------------------------------------------------------------
// Prijsconfiguratie BusjeDirect
//
// Pas hier de tarieven en standplaats aan — nergens anders.
// Alle bedragen zijn excl. btw, intern opgeslagen in centen.
// ---------------------------------------------------------------------------

/** Standplaats van het bedrijf — startpunt en eindpunt van elke operationele route */
export const DEPOT_COORDINATES = {
  latitude: 52.333905,
  longitude: 4.977463,
} as const;

/** Starttarief excl. btw in centen (€55,00) */
export const START_FEE_CENTS = 5500;

/** Prijs per kilometer excl. btw in centen (€0,75/km) */
export const PRICE_PER_KM_CENTS = 75;

/** Minimumprijs excl. btw in centen (€65,00) */
export const MINIMUM_PRICE_CENTS = 6500;

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

// ---------------------------------------------------------------------------
// Vloeroppervlakte-toeslag
// ---------------------------------------------------------------------------

/**
 * Bruikbare laadvloer van de bakwagen in m².
 * In de praktijk niet tot het dak gestapeld — vloeroppervlakte is de
 * beperkende factor.
 */
export const VAN_FLOOR_AREA_M2 = 8;

/**
 * Toeslag voor een volledig bezette laadvloer, excl. btw in centen (€50,00).
 * Prijs per m² = FULL_LOAD_FEE_CENTS / VAN_FLOOR_AREA_M2 = €6,25/m²
 */
export const FULL_LOAD_FEE_CENTS = 5000;

/** Prijs per m² vloeroppervlakte excl. btw in centen */
export const PRICE_PER_FLOOR_M2_CENTS = Math.round(
  FULL_LOAD_FEE_CENTS / VAN_FLOOR_AREA_M2
);

/**
 * Fallback vloeroppervlakte voor custom items zonder afmetingen (m²).
 * Representeert een "gemiddeld meubel".
 */
export const FALLBACK_FLOOR_AREA_M2 = 0.5;

// ---------------------------------------------------------------------------
// Tijdtoeslagen
// ---------------------------------------------------------------------------

/** Inbegrepen laadtijd in minuten */
export const INCLUDED_LOAD_MINUTES = 20;

/** Inbegrepen lostijd in minuten */
export const INCLUDED_UNLOAD_MINUTES = 20;

/** Toeslag per kwartier extra tijd, excl. btw in centen (€25,00) */
export const EXTRA_TIME_PER_QUARTER_CENTS = 2500;

// ---------------------------------------------------------------------------
// Ring Amsterdam toeslag
// ---------------------------------------------------------------------------

/** Toeslag per adres binnen de Ring Amsterdam, excl. btw in centen (€15,00) */
export const RING_AMSTERDAM_FEE_CENTS = 1500;

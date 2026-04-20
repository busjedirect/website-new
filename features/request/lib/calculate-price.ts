import {
  START_FEE_CENTS,
  PRICE_PER_KM_CENTS,
  MINIMUM_PRICE_CENTS,
} from "../constants/pricing";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface CalculatePriceInput {
  /** Totale operationele afstand in meters (depot→pickup→dropoff→depot) */
  totalOperationalMeters: number;
}

export interface CalculatePriceResult {
  /** Totaalprijs incl. btw in centen */
  totalCents: number;
  /** Of de minimumprijs van toepassing was */
  minimumApplied: boolean;
}

// ---------------------------------------------------------------------------
// Berekening
// ---------------------------------------------------------------------------

/**
 * Berekent de totaalprijs incl. btw op basis van de operationele afstand.
 *
 * Formule:
 *   prijs = starttarief + (totale operationele km × kilometerprijs)
 *   minimumprijs altijd van toepassing
 *
 * Alle tarieven zijn incl. btw — geen btw-splitsing in de UI.
 */
export function calculatePrice(
  input: CalculatePriceInput
): CalculatePriceResult {
  const totalKm = input.totalOperationalMeters / 1000;
  const distanceCostCents = Math.round(totalKm * PRICE_PER_KM_CENTS);
  const rawTotalCents = START_FEE_CENTS + distanceCostCents;

  const minimumApplied = rawTotalCents < MINIMUM_PRICE_CENTS;
  const totalCents = minimumApplied ? MINIMUM_PRICE_CENTS : rawTotalCents;

  return { totalCents, minimumApplied };
}

// ---------------------------------------------------------------------------
// Weergavehelper
// ---------------------------------------------------------------------------

/** Formatteert centen naar een leesbare euro-string (afgerond op hele euro's) */
export function formatPriceCents(cents: number): string {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(cents / 100);
}

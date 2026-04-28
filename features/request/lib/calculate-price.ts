import {
  START_FEE_CENTS,
  PRICE_PER_KM_CENTS,
  MINIMUM_PRICE_CENTS,
  PRICE_PER_FLOOR_M2_CENTS,
  FALLBACK_FLOOR_AREA_M2,
} from "../constants/pricing";
import { ITEM_CATEGORY_MAP } from "../constants/item-options";
import type { RequestItem } from "../types/item.types";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface CalculatePriceInput {
  /** Totale operationele afstand in meters (depot→pickup→dropoff→depot) */
  totalOperationalMeters: number;
  /** Geselecteerde items — voor vloeroppervlakte-toeslag */
  items?: RequestItem[];
}

export interface CalculatePriceResult {
  /** Totaalprijs excl. btw in centen */
  totalCents: number;
  /** Afstandskosten excl. btw in centen */
  distanceCents: number;
  /** Vloeroppervlakte-toeslag excl. btw in centen */
  floorAreaCents: number;
  /** Totale vloeroppervlakte van alle items in m² */
  totalFloorAreaM2: number;
  /** Of de minimumprijs van toepassing was */
  minimumApplied: boolean;
  /** Of één of meer items een geschatte oppervlakte hebben (geen maten opgegeven) */
  hasEstimatedItems: boolean;
}

// ---------------------------------------------------------------------------
// Hulpfunctie: vloeroppervlakte per item
// ---------------------------------------------------------------------------

/**
 * Berekent de vloeroppervlakte van één RequestItem in m².
 *
 * Volgorde:
 * 1. Bekende categorie/subtype → gebruik floorAreaM2 uit item-options
 * 2. Custom item met afmetingen → L × B in m²
 * 3. Custom item zonder afmetingen → FALLBACK_FLOOR_AREA_M2
 *
 * Geeft ook terug of het een schatting is.
 */
export function getItemFloorArea(item: RequestItem): {
  floorAreaM2: number;
  isEstimate: boolean;
} {
  // Aangepaste maten hebben altijd prioriteit — ook voor bekende subtypes
  if (
    item.dimensions?.lengthCm !== undefined &&
    item.dimensions?.widthCm !== undefined
  ) {
    const floorAreaM2 =
      (item.dimensions.lengthCm / 100) * (item.dimensions.widthCm / 100);
    return { floorAreaM2, isEstimate: false };
  }

  // Bekende categorie/subtype → gebruik vaste floorAreaM2
  const category = ITEM_CATEGORY_MAP[item.category];
  if (category) {
    const subtype = category.subtypes.find((s) => s.id === item.subtype);
    if (subtype) {
      return { floorAreaM2: subtype.floorAreaM2, isEstimate: false };
    }
  }

  // Fallback voor custom items zonder maten
  return { floorAreaM2: FALLBACK_FLOOR_AREA_M2, isEstimate: true };
}

// ---------------------------------------------------------------------------
// Hoofdberekening
// ---------------------------------------------------------------------------

/**
 * Berekent de totaalprijs excl. btw.
 *
 * Formule:
 *   prijs = starttarief
 *         + (km × kilometerprijs)
 *         + (totale vloeroppervlakte m² × prijs per m²)
 *
 *   minimumprijs altijd van toepassing
 */
export function calculatePrice(
  input: CalculatePriceInput
): CalculatePriceResult {
  const totalKm = input.totalOperationalMeters / 1000;
  const distanceCents = Math.round(totalKm * PRICE_PER_KM_CENTS);

  // Vloeroppervlakte-toeslag
  let totalFloorAreaM2 = 0;
  let hasEstimatedItems = false;

  for (const item of input.items ?? []) {
    const { floorAreaM2, isEstimate } = getItemFloorArea(item);
    totalFloorAreaM2 += floorAreaM2 * item.aantal;
    if (isEstimate) hasEstimatedItems = true;
  }

  const floorAreaCents = Math.round(totalFloorAreaM2 * PRICE_PER_FLOOR_M2_CENTS);
  const rawTotalCents = START_FEE_CENTS + distanceCents + floorAreaCents;

  const minimumApplied = rawTotalCents < MINIMUM_PRICE_CENTS;
  const totalCents = minimumApplied ? MINIMUM_PRICE_CENTS : rawTotalCents;

  return {
    totalCents,
    distanceCents,
    floorAreaCents,
    totalFloorAreaM2,
    minimumApplied,
    hasEstimatedItems,
  };
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

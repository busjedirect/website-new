import type { RequestState } from "./request-store";
import { formatPrice } from "@/lib/utils/format";

// ---------------------------------------------------------------------------
// Aanwezigheidscontroles
// ---------------------------------------------------------------------------

export const hasAddresses = (s: RequestState): boolean =>
  s.fromAddress !== null && s.toAddress !== null;

export const hasItems = (s: RequestState): boolean =>
  s.items.length > 0;

export const hasSchedule = (s: RequestState): boolean =>
  s.selectedDate !== null && s.selectedTimeSlot !== null;

export const hasCustomerDetails = (s: RequestState): boolean =>
  s.firstName.trim() !== "" &&
  s.lastName.trim() !== "" &&
  s.phone.trim() !== "" &&
  s.email.trim() !== "";

// ---------------------------------------------------------------------------
// Navigatierechten per stap
// ---------------------------------------------------------------------------

/** Stap 0 → 1: adressen ingevuld */
export const canProceedToItems = (s: RequestState): boolean =>
  hasAddresses(s);

/** Stap 1 → 2: adressen én minimaal één item */
export const canProceedToSchedule = (s: RequestState): boolean =>
  hasAddresses(s) && hasItems(s);

/** Stap 2 → 3: vorige stappen én datum/tijdslot gekozen */
export const canProceedToCustomerDetails = (s: RequestState): boolean =>
  canProceedToSchedule(s) && hasSchedule(s);

/** Stap 3 → 4: alles ingevuld én akkoord gegeven */
export const canProceedToConfirmation = (s: RequestState): boolean =>
  canProceedToCustomerDetails(s) &&
  hasCustomerDetails(s) &&
  s.agreedToTerms;

/**
 * Alle kerngegevens aanwezig voor een geldige submit.
 * Gebruik dit als pre-submit check in de bevestigingsstap.
 */
export const isRequestComplete = (s: RequestState): boolean =>
  hasAddresses(s) &&
  hasItems(s) &&
  hasSchedule(s) &&
  hasCustomerDetails(s);

// ---------------------------------------------------------------------------
// Afgeleide weergavewaarden
// ---------------------------------------------------------------------------

/** Totaal aantal items (som van aantallen, niet unieke regels) */
export const formattedItemCount = (s: RequestState): string => {
  const total = s.items.reduce((sum, item) => sum + item.aantal, 0);
  if (total === 0) return "—";
  return total === 1 ? "1 item" : `${total} items`;
};

/** Huidige prijs in centen, of null als nog niet berekend */
export const currentPriceCents = (s: RequestState): number | null =>
  s.priceCents;

/** Geformatteerde prijs incl. btw, of null als nog niet berekend */
export const formattedPrice = (s: RequestState): string | null =>
  s.priceCents !== null ? formatPrice(s.priceCents) : null;

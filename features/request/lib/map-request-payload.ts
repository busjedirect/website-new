import type { RequestState } from "../store/request-store";
import type { CreateRequestPayload } from "../types/request.types";

/**
 * Mapt de store-state naar een API-payload.
 * Gooit een fout als verplichte velden ontbreken.
 */
export function mapRequestPayload(state: RequestState): CreateRequestPayload {
  const {
    fromAddress,
    toAddress,
    totalOperationalMeters,
    priceCents,
    items,
    selectedDate,
    selectedTimeSlot,
    firstName,
    lastName,
    phone,
    email,
    note,
    agreedToTerms,
    agreedToExtraTime,
  } = state;

  if (!fromAddress) throw new Error("Ophaaladres ontbreekt.");
  if (!toAddress) throw new Error("Afleveradres ontbreekt.");
  if (!items.length) throw new Error("Voeg minimaal één item toe.");
  if (!selectedDate) throw new Error("Datum ontbreekt.");
  if (!selectedTimeSlot) throw new Error("Tijdvak ontbreekt.");
  if (!firstName.trim() || !lastName.trim()) throw new Error("Naam ontbreekt.");
  if (!phone.trim()) throw new Error("Telefoonnummer ontbreekt.");
  if (!email.trim()) throw new Error("E-mailadres ontbreekt.");
  if (!agreedToTerms) throw new Error("Akkoord met voorwaarden ontbreekt.");

  return {
    fromAddress,
    toAddress,
    distanceMeters: totalOperationalMeters ?? 0,
    priceCents: priceCents ?? 0,
    items,
    selectedDate,
    selectedTimeSlot,
    firstName,
    lastName,
    phone,
    email,
    note: note.trim() || undefined,
    agreedToTerms: true,
    agreedToExtraTime,
  };
}

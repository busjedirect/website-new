import type { CreateRequestPayload } from "@/features/request/types/request.types";
import { TIME_SLOT_MAP } from "@/features/request/constants/time-slots";

/**
 * Mapt een CreateRequestPayload naar Airtable veldnamen en -types.
 *
 * Kolomschema (Table 1):
 *   Referentie    | singleLineText  ← referentienummer, apart veld
 *   Voornaam      | singleLineText
 *   Achternaam    | singleLineText
 *   Telefoon      | singleLineText
 *   Email         | email
 *   Ophaaladres   | multilineText
 *   Afleveradres  | multilineText
 *   Items         | multilineText
 *   Datum         | date          → YYYY-MM-DD
 *   Tijdvak       | singleLineText
 *   Prijs         | currency      → getal in euro's
 *   Opmerking     | multilineText ← alleen klantnotitie, geen referentie
 *   Status        | singleSelect  → "Nieuw"
 */
export function mapPayloadToAirtableFields(
  payload: CreateRequestPayload,
  referenceNumber: string
): Record<string, unknown> {
  const timeSlot = TIME_SLOT_MAP[payload.selectedTimeSlot];

  const itemsSummary = payload.items
    .map((item) => `${item.aantal}× ${item.label}`)
    .join("\n");

  // Telefoon: singleLineText — stuur als string
  const phoneString = payload.phone.trim();

  // Prijs: currency-veld verwacht een getal (euro's, niet centen)
  const priceEuros = payload.priceCents / 100;

  // Tijdvak: singleSelect — stuur alleen het label (bijv. "Ochtend")
  const tijdvakLabel = timeSlot ? timeSlot.label : payload.selectedTimeSlot;

  return {
    Referentie: referenceNumber,
    Voornaam: payload.firstName,
    Achternaam: payload.lastName,
    ...(phoneString ? { Telefoon: phoneString } : {}),
    Email: payload.email,
    Ophaaladres: payload.fromAddress.fullAddress,
    Afleveradres: payload.toAddress.fullAddress,
    Items: itemsSummary,
    Datum: payload.selectedDate,
    Tijdvak: tijdvakLabel,
    Prijs: priceEuros,
    Opmerking: payload.note ?? "",
    Status: "Nieuw",
  };
}

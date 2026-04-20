import type { Address } from "./address.types";
import type { RequestItem } from "./item.types";
import type { TimeSlotKey } from "./schedule.types";

// RequestState en RequestStateUpdate worden gedefinieerd en geëxporteerd
// vanuit de store. Re-exporteer hier voor gebruik buiten de store context.
export type { RequestState, RequestStateUpdate } from "../store/request-store";

/** Payload die naar de API wordt gestuurd */
export interface CreateRequestPayload {
  fromAddress: Address;
  toAddress: Address;
  distanceMeters: number;
  priceCents: number;
  items: RequestItem[];
  selectedDate: string;
  selectedTimeSlot: TimeSlotKey;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  note?: string;
  agreedToTerms: true;
  agreedToExtraTime: boolean;
}

/** Response van de API na succesvolle aanvraag */
export interface CreateRequestResponse {
  referenceNumber: string;
  createdAt: string;
}

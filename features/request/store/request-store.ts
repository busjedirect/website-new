import { create } from "zustand";
import type { Address } from "../types/address.types";
import type { RequestItem, RequestItemInput } from "../types/item.types";
import type { TimeSlotKey } from "../types/schedule.types";
import type { CreateRequestResponse } from "../types/request.types";
import type { RouteSegments } from "../lib/calculate-distance";
import { calculatePrice } from "../lib/calculate-price";

// ---------------------------------------------------------------------------
// State
// ---------------------------------------------------------------------------

export interface RequestState {
  fromAddress: Address | null;
  toAddress: Address | null;
  /** Totale operationele afstand in meters (depot→pickup→dropoff→depot) */
  totalOperationalMeters: number | null;
  /** Afzonderlijke routesegmenten — intern, nooit tonen aan klant */
  routeSegments: RouteSegments | null;
  priceCents: number | null;
  /** Of één of meer items een geschatte oppervlakte hebben */
  hasEstimatedItems: boolean;
  items: RequestItem[];
  selectedDate: string | null;
  selectedTimeSlot: TimeSlotKey | null;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  note: string;
  agreedToTerms: boolean;
  agreedToExtraTime: boolean;
  /** Bewaard na succesvolle submit — beschikbaar op de succespagina na store-reset */
  submittedReceipt: (CreateRequestResponse & {
    fromAddress: Address;
    toAddress: Address;
    priceCents: number | null;
    firstName: string;
    items: RequestItem[];
    selectedDate: string | null;
    selectedTimeSlot: TimeSlotKey | null;
  }) | null;
}

// ---------------------------------------------------------------------------
// Actions
// ---------------------------------------------------------------------------

interface RequestActions {
  setAddresses: (fromAddress: Address, toAddress: Address) => void;
  setRouteAndPrice: (
    totalOperationalMeters: number,
    priceCents: number,
    routeSegments: RouteSegments
  ) => void;
  addItem: (item: RequestItemInput) => void;
  updateItem: (itemId: string, updates: Partial<RequestItemInput>) => void;
  removeItem: (itemId: string) => void;
  setSchedule: (selectedDate: string, selectedTimeSlot: TimeSlotKey) => void;
  setCustomerDetails: (
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    note: string
  ) => void;
  setAgreements: (agreedToTerms: boolean, agreedToExtraTime: boolean) => void;
  setSubmittedReceipt: (receipt: RequestState["submittedReceipt"]) => void;
  resetRequest: () => void;
}

// ---------------------------------------------------------------------------
// Initial state
// ---------------------------------------------------------------------------

const initialState: RequestState = {
  fromAddress: null,
  toAddress: null,
  totalOperationalMeters: null,
  routeSegments: null,
  priceCents: null,
  hasEstimatedItems: false,
  items: [],
  selectedDate: null,
  selectedTimeSlot: null,
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  note: "",
  agreedToTerms: false,
  agreedToExtraTime: false,
  submittedReceipt: null,
};

// ---------------------------------------------------------------------------
// Store
// ---------------------------------------------------------------------------

/** Partiële update voor een of meerdere velden tegelijk */
export type RequestStateUpdate = Partial<RequestState>;

export const useRequestStore = create<RequestState & RequestActions>((set) => ({
  ...initialState,

  setAddresses: (fromAddress, toAddress) =>
    set({ fromAddress, toAddress }),

  setRouteAndPrice: (totalOperationalMeters, priceCents, routeSegments) =>
    set((state) => {
      const result = calculatePrice({ totalOperationalMeters, items: state.items });
      return {
        totalOperationalMeters,
        routeSegments,
        priceCents: result.totalCents,
        hasEstimatedItems: result.hasEstimatedItems,
      };
    }),

  addItem: (item) =>
    set((state) => {
      const items = [...state.items, { ...item, id: crypto.randomUUID() }];
      const meters = state.totalOperationalMeters;
      if (meters === null) return { items };
      const result = calculatePrice({ totalOperationalMeters: meters, items });
      return { items, priceCents: result.totalCents, hasEstimatedItems: result.hasEstimatedItems };
    }),

  updateItem: (itemId, updates) =>
    set((state) => {
      const items = state.items.map((item) =>
        item.id === itemId ? { ...item, ...updates } : item
      );
      const meters = state.totalOperationalMeters;
      if (meters === null) return { items };
      const result = calculatePrice({ totalOperationalMeters: meters, items });
      return { items, priceCents: result.totalCents, hasEstimatedItems: result.hasEstimatedItems };
    }),

  removeItem: (itemId) =>
    set((state) => {
      const items = state.items.filter((item) => item.id !== itemId);
      const meters = state.totalOperationalMeters;
      if (meters === null) return { items };
      const result = calculatePrice({ totalOperationalMeters: meters, items });
      return { items, priceCents: result.totalCents, hasEstimatedItems: result.hasEstimatedItems };
    }),

  setSchedule: (selectedDate, selectedTimeSlot) =>
    set({ selectedDate, selectedTimeSlot }),

  setCustomerDetails: (firstName, lastName, phone, email, note) =>
    set({ firstName, lastName, phone, email, note }),

  setAgreements: (agreedToTerms, agreedToExtraTime) =>
    set({ agreedToTerms, agreedToExtraTime }),

  setSubmittedReceipt: (receipt) =>
    set({ submittedReceipt: receipt }),

  resetRequest: () => set({ ...initialState, submittedReceipt: useRequestStore.getState().submittedReceipt }),
}));

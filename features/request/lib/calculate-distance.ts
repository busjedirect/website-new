import type { Address } from "../types/address.types";
import { mapboxClient } from "@/lib/mapbox/mapbox-client";
import { DEPOT_COORDINATES } from "../constants/pricing";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface RouteSegments {
  /** Depot → ophaaladres */
  depotToPickupMeters: number;
  /** Ophaaladres → afleveradres */
  pickupToDropoffMeters: number;
  /** Afleveradres → depot */
  dropoffToDepotMeters: number;
  /** Totale operationele afstand (som van alle segmenten) */
  totalOperationalMeters: number;
}

export interface CalculateOperationalDistanceInput {
  fromAddress: Address;
  toAddress: Address;
}

export interface CalculateOperationalDistanceResult {
  segments: RouteSegments;
  /** Totale operationele afstand — gebruik dit voor prijsberekening */
  totalOperationalMeters: number;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

type Coords = { longitude: number; latitude: number };

async function getSegmentMeters(from: Coords, to: Coords): Promise<number> {
  const result = await mapboxClient.directions(from, to);
  if (!result) {
    throw new Error(
      "Geen route gevonden voor een van de routesegmenten. Controleer de adressen en probeer opnieuw."
    );
  }
  return result.distanceMeters;
}

// ---------------------------------------------------------------------------
// Implementatie
// ---------------------------------------------------------------------------

/**
 * Berekent de volledige operationele route voor een BusjeDirect-rit:
 *   depot → ophaaladres → afleveradres → depot
 *
 * De totale operationele afstand bepaalt de prijs — niet alleen A→B.
 * De klant ziet alleen de totaalprijs, niet de routebreakdown.
 */
export async function calculateOperationalDistance(
  input: CalculateOperationalDistanceInput
): Promise<CalculateOperationalDistanceResult> {
  const { fromAddress, toAddress } = input;

  const depot: Coords = {
    longitude: DEPOT_COORDINATES.longitude,
    latitude: DEPOT_COORDINATES.latitude,
  };
  const pickup: Coords = {
    longitude: fromAddress.longitude,
    latitude: fromAddress.latitude,
  };
  const dropoff: Coords = {
    longitude: toAddress.longitude,
    latitude: toAddress.latitude,
  };

  // Drie segmenten parallel ophalen voor snelheid
  const [depotToPickupMeters, pickupToDropoffMeters, dropoffToDepotMeters] =
    await Promise.all([
      getSegmentMeters(depot, pickup),
      getSegmentMeters(pickup, dropoff),
      getSegmentMeters(dropoff, depot),
    ]);

  const totalOperationalMeters =
    depotToPickupMeters + pickupToDropoffMeters + dropoffToDepotMeters;

  return {
    segments: {
      depotToPickupMeters,
      pickupToDropoffMeters,
      dropoffToDepotMeters,
      totalOperationalMeters,
    },
    totalOperationalMeters,
  };
}

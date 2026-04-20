import type { AddressSuggestion } from "@/features/request/types/address.types";

const MAPBOX_BASE_URL = "https://api.mapbox.com";
const IS_DEV = process.env.NODE_ENV === "development";

// ---------------------------------------------------------------------------
// Foutcategorieën — geëxporteerd zodat de UI ze kan tonen
// ---------------------------------------------------------------------------

export type MapboxErrorCategory =
  | "missing-token"
  | "unauthorized"
  | "forbidden"
  | "invalid-request"
  | "not-found"
  | "rate-limited"
  | "network-error"
  | "unknown";

export class MapboxError extends Error {
  constructor(
    public readonly category: MapboxErrorCategory,
    public readonly httpStatus: number | null,
    message: string
  ) {
    super(message);
    this.name = "MapboxError";
  }
}

// ---------------------------------------------------------------------------
// Interne Mapbox response types
// ---------------------------------------------------------------------------

interface MapboxContext {
  id: string;
  text: string;
}

interface MapboxFeature {
  id: string;
  place_name: string;
  text: string;
  geometry: { coordinates: [number, number] };
  context?: MapboxContext[];
}

interface MapboxGeocodeResponse {
  features: MapboxFeature[];
  message?: string;
}

interface MapboxRoute {
  distance: number;
  duration: number;
}

interface MapboxDirectionsResponse {
  routes: MapboxRoute[];
  code: string;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function extractContext(
  contexts: MapboxContext[] | undefined,
  prefix: string
): string | undefined {
  return contexts?.find((c) => c.id.startsWith(prefix))?.text;
}

function featureToSuggestion(feature: MapboxFeature): AddressSuggestion {
  const [longitude, latitude] = feature.geometry.coordinates;
  return {
    mapboxId: feature.id,
    fullAddress: feature.place_name,
    placeName: feature.text,
    latitude,
    longitude,
    postcode: extractContext(feature.context, "postcode"),
    city: extractContext(feature.context, "place"),
  };
}

function makeGeocodeError(
  status: number,
  apiMessage?: string
): MapboxError {
  const devSuffix = apiMessage ? ` (${apiMessage})` : "";

  switch (status) {
    case 401:
      return new MapboxError(
        "unauthorized",
        status,
        IS_DEV
          ? `[dev] 401 Unauthorized — token ongeldig of verlopen. Controleer NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN in .env.local en herstart de dev-server.`
          : "Adres zoeken tijdelijk niet beschikbaar."
      );
    case 403:
      return new MapboxError(
        "forbidden",
        status,
        IS_DEV
          ? `[dev] 403 Forbidden — token heeft niet de juiste scopes voor Geocoding.${devSuffix}`
          : "Adres zoeken tijdelijk niet beschikbaar."
      );
    case 404:
      return new MapboxError(
        "not-found",
        status,
        IS_DEV
          ? `[dev] 404 Not Found — endpoint niet gevonden. Controleer de API URL.${devSuffix}`
          : "Adres zoeken tijdelijk niet beschikbaar."
      );
    case 422:
      return new MapboxError(
        "invalid-request",
        status,
        IS_DEV
          ? `[dev] 422 Unprocessable — ongeldige query.${devSuffix}`
          : "Ongeldige zoekopdracht."
      );
    case 429:
      return new MapboxError(
        "rate-limited",
        status,
        "Te veel zoekopdrachten. Wacht even en probeer opnieuw."
      );
    default:
      return new MapboxError(
        "unknown",
        status,
        IS_DEV
          ? `[dev] HTTP ${status} — onverwachte fout.${devSuffix}`
          : "Adres zoeken mislukt. Probeer opnieuw."
      );
  }
}

// ---------------------------------------------------------------------------
// Publieke client
// ---------------------------------------------------------------------------

export const mapboxClient = {
  async geocode(query: string): Promise<AddressSuggestion[]> {
    // Literal lookup — Next.js inlinet dit correct in de browser-bundle
    const token = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

    if (!token) {
      throw new MapboxError(
        "missing-token",
        null,
        IS_DEV
          ? "[dev] NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ontbreekt in .env.local. Voeg het toe en herstart de dev-server."
          : "Adres zoeken tijdelijk niet beschikbaar."
      );
    }

    const url = new URL(
      `${MAPBOX_BASE_URL}/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json`
    );
    url.searchParams.set("access_token", token);
    url.searchParams.set("language", "nl");
    url.searchParams.set("country", "NL");
    url.searchParams.set("types", "address,place");
    url.searchParams.set("limit", "5");

    if (IS_DEV) {
      // Token afkappen — nooit volledig tonen in logs
      const maskedToken = `${token.slice(0, 8)}…${token.slice(-4)}`;
      console.debug(
        `[Mapbox] geocode("${query}") — token: ${maskedToken} — aanwezig: ja`
      );
    }

    let response: Response;
    try {
      response = await fetch(url.toString());
    } catch (networkErr) {
      const msg =
        networkErr instanceof Error ? networkErr.message : "onbekend";
      if (IS_DEV) console.error(`[Mapbox] Netwerk fout: ${msg}`);
      throw new MapboxError(
        "network-error",
        null,
        IS_DEV
          ? `[dev] Netwerk fout: ${msg}`
          : "Geen verbinding. Controleer je internet en probeer opnieuw."
      );
    }

    if (IS_DEV) {
      console.debug(`[Mapbox] Response: HTTP ${response.status}`);
    }

    if (!response.ok) {
      let apiMessage: string | undefined;
      try {
        const errBody: MapboxGeocodeResponse = await response.json();
        apiMessage = errBody.message;
      } catch { /* body niet parseerbaar */ }

      if (IS_DEV) {
        console.error(
          `[Mapbox] Fout HTTP ${response.status}:`,
          apiMessage ?? "(geen body)"
        );
      }
      throw makeGeocodeError(response.status, apiMessage);
    }

    const data: MapboxGeocodeResponse = await response.json();

    if (IS_DEV) {
      console.debug(
        `[Mapbox] OK — ${data.features.length} resultaten voor "${query}"`
      );
    }

    return data.features.map(featureToSuggestion);
  },

  async directions(
    from: { longitude: number; latitude: number },
    to: { longitude: number; latitude: number }
  ): Promise<{ distanceMeters: number; durationSeconds: number } | null> {
    const token = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
    if (!token) {
      throw new Error("NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ontbreekt.");
    }

    const coords = `${from.longitude},${from.latitude};${to.longitude},${to.latitude}`;
    const url = new URL(
      `${MAPBOX_BASE_URL}/directions/v5/mapbox/driving/${coords}`
    );
    url.searchParams.set("access_token", token);
    url.searchParams.set("overview", "false");
    url.searchParams.set("steps", "false");

    let response: Response;
    try {
      response = await fetch(url.toString());
    } catch {
      throw new Error(
        "Geen verbinding. Controleer je internet en probeer opnieuw."
      );
    }

    if (!response.ok) {
      throw new Error(`Mapbox directions mislukt: ${response.status}`);
    }

    const data: MapboxDirectionsResponse = await response.json();
    if (data.code !== "Ok" || data.routes.length === 0) return null;

    return {
      distanceMeters: Math.round(data.routes[0].distance),
      durationSeconds: Math.round(data.routes[0].duration),
    };
  },
};

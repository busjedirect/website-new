export interface Address {
  fullAddress: string;
  placeName: string;
  latitude: number;
  longitude: number;
  postcode?: string;
  city?: string;
  /** Mapbox feature ID, handig voor deduplicatie en caching */
  mapboxId?: string;
}

export interface AddressSuggestion {
  mapboxId: string;
  fullAddress: string;
  placeName: string;
  postcode?: string;
  city?: string;
  latitude: number;
  longitude: number;
}

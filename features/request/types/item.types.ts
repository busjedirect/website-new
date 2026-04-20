// ---------------------------------------------------------------------------
// Item types — gestructureerd per categorie
// ---------------------------------------------------------------------------

export type ItemCategory =
  | "bank"
  | "kast"
  | "bed"
  | "eettafel"
  | "stoelen"
  | "koelkast"
  | "wasmachine"
  | "dozen";

export interface ItemDimensions {
  lengthCm?: number;
  widthCm?: number;
  heightCm?: number;
  depthCm?: number;
}

// ---------------------------------------------------------------------------
// Categorie-specifieke eigenschappen
// ---------------------------------------------------------------------------

export interface BankProperties {
  materiaal?: "stof" | "leer" | "kunstleer";
  modulair?: boolean;
  zwaar?: boolean;
}

export interface KastProperties {
  materiaal?: "spaanplaat" | "massief hout" | "metaal";
  glasAanwezig?: boolean;
  demontageNodig?: boolean;
  zwaar?: boolean;
}

export interface BedProperties {
  gedemonteerd?: boolean;
  matrasInbegrepen?: boolean;
  materiaalFrame?: "hout" | "metaal";
}

export interface EettafelProperties {
  materiaalBlad?: "hout" | "glas" | "steen";
  demontabel?: boolean;
  grootFormaat?: boolean;
}

export interface StoelenProperties {
  materiaal?: "hout" | "kunststof" | "metaal";
  kwetsbaar?: boolean;
  stapelbaar?: boolean;
}

export interface KoelkastProperties {
  grootZwaar?: boolean;
  kwetsbaar?: boolean;
}

export interface WasmachineProperties {
  zwaar: true; // altijd zwaar
  extraBescherming?: boolean;
}

export interface DozenProperties {
  inhoud?: "breekbaar" | "normaal";
  gewicht?: "licht" | "normaal" | "zwaar";
}

export type ItemProperties =
  | BankProperties
  | KastProperties
  | BedProperties
  | EettafelProperties
  | StoelenProperties
  | KoelkastProperties
  | WasmachineProperties
  | DozenProperties
  | Record<string, unknown>;

// ---------------------------------------------------------------------------
// RequestItem — wat in de store wordt opgeslagen
// ---------------------------------------------------------------------------

export interface RequestItem {
  id: string;
  category: ItemCategory;
  subtype: string;
  label: string; // leesbare naam: "3-zits bank"
  aantal: number;
  properties: ItemProperties;
  dimensions?: ItemDimensions;
  opmerking?: string;
}

// ---------------------------------------------------------------------------
// Input type voor addItem action
// ---------------------------------------------------------------------------

export interface RequestItemInput {
  category: ItemCategory;
  subtype: string;
  label: string;
  aantal: number;
  properties: ItemProperties;
  dimensions?: ItemDimensions;
  opmerking?: string;
}

// ---------------------------------------------------------------------------
// Legacy — behouden voor backwards compatibility met bestaande store actions
// ---------------------------------------------------------------------------

/** @deprecated Gebruik RequestItemInput */
export type CustomItemInput = RequestItemInput;

/** @deprecated Gebruik RequestItem.label */
export type ItemVariant = string;

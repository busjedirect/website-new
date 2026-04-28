import type { ItemCategory, ItemProperties, ItemDimensions } from "../types/item.types";

// ---------------------------------------------------------------------------
// Subtype definitie
// ---------------------------------------------------------------------------

export interface ItemSubtype {
  id: string;
  label: string;
  /** Slimme defaults voor properties */
  defaults?: Partial<ItemProperties>;
  /** Realistische standaard afmetingen (L × B × H in cm) */
  defaultDimensions?: ItemDimensions;
  /**
   * Vloeroppervlakte in m² die dit item inneemt op de laadvloer.
   * Gebruikt voor de vloeroppervlakte-toeslag in de prijsberekening.
   */
  floorAreaM2: number;
}

// ---------------------------------------------------------------------------
// Veld-definitie voor conditionele configuratie
// ---------------------------------------------------------------------------

export type FieldType = "select" | "boolean" | "number";

export interface FieldOption {
  value: string;
  label: string;
}

export interface ConfigField {
  key: string;
  label: string;
  type: FieldType;
  options?: FieldOption[]; // voor select
  defaultValue?: unknown;
  /** Toon dit veld alleen als de subtype-id in deze lijst staat */
  onlyFor?: string[];
  /** Verberg dit veld als de subtype-id in deze lijst staat */
  hideFor?: string[];
}

// ---------------------------------------------------------------------------
// Categorie definitie
// ---------------------------------------------------------------------------

export interface ItemCategory_ {
  id: ItemCategory;
  label: string;
  iconSlug: string;
  subtypes: ItemSubtype[];
  fields: ConfigField[];
}

// ---------------------------------------------------------------------------
// Categorieën
// ---------------------------------------------------------------------------

export const ITEM_CATEGORIES: ItemCategory_[] = [
  {
    id: "bank",
    label: "Bank",
    iconSlug: "bank",
    subtypes: [
      { id: "fauteuil",  label: "Fauteuil",        floorAreaM2: 0.77, defaultDimensions: { lengthCm: 90,  widthCm: 85,  heightCm: 90  } },
      { id: "2-zits",   label: "2-zits bank",      floorAreaM2: 1.62, defaultDimensions: { lengthCm: 180, widthCm: 90,  heightCm: 85  } },
      { id: "3-zits",   label: "3-zits bank",      floorAreaM2: 1.98, defaults: { zwaar: true },                                          defaultDimensions: { lengthCm: 220, widthCm: 90,  heightCm: 85  } },
      { id: "hoekbank", label: "Hoekbank",          floorAreaM2: 3.90, defaults: { zwaar: true, modulair: true },                          defaultDimensions: { lengthCm: 260, widthCm: 200, heightCm: 85  } },
      { id: "slaapbank", label: "Slaapbank",        floorAreaM2: 1.80, defaults: { zwaar: true },                                          defaultDimensions: { lengthCm: 200, widthCm: 90,  heightCm: 85  } },
      { id: "loveseat", label: "Loveseat",          floorAreaM2: 1.19, defaultDimensions: { lengthCm: 140, widthCm: 85,  heightCm: 85  } },
      { id: "modulair", label: "Modulaire bank",    floorAreaM2: 2.28, defaults: { modulair: true },                                       defaultDimensions: { lengthCm: 240, widthCm: 95,  heightCm: 85  } },
    ],
    fields: [
      {
        key: "materiaal",
        label: "Materiaal",
        type: "select",
        options: [
          { value: "stof", label: "Stof" },
          { value: "leer", label: "Leer" },
          { value: "kunstleer", label: "Kunstleer" },
        ],
      },
      {
        key: "modulair",
        label: "Modulaire delen",
        type: "boolean",
        defaultValue: false,
        hideFor: ["fauteuil", "loveseat"],
      },
      {
        key: "zwaar",
        label: "Zwaar item (>50 kg)",
        type: "boolean",
        defaultValue: false,
      },
    ],
  },

  {
    id: "kast",
    label: "Kast",
    iconSlug: "kast",
    subtypes: [
      { id: "kledingkast",    label: "Kledingkast",     floorAreaM2: 0.90, defaults: { zwaar: true },          defaultDimensions: { lengthCm: 150, widthCm: 60,  heightCm: 200 } },
      { id: "schuifdeurkast", label: "Schuifdeurkast",  floorAreaM2: 1.20, defaults: { zwaar: true },          defaultDimensions: { lengthCm: 200, widthCm: 60,  heightCm: 220 } },
      { id: "ladekast",       label: "Ladekast",         floorAreaM2: 0.40,                                     defaultDimensions: { lengthCm: 80,  widthCm: 50,  heightCm: 100 } },
      { id: "boekenkast",     label: "Boekenkast",       floorAreaM2: 0.24,                                     defaultDimensions: { lengthCm: 80,  widthCm: 30,  heightCm: 200 } },
      { id: "vitrinekast",    label: "Vitrinekast",      floorAreaM2: 0.40, defaults: { glasAanwezig: true },   defaultDimensions: { lengthCm: 100, widthCm: 40,  heightCm: 190 } },
      { id: "dressoir",       label: "Dressoir",         floorAreaM2: 0.72,                                     defaultDimensions: { lengthCm: 160, widthCm: 45,  heightCm: 85  } },
      { id: "tv-meubel",      label: "Tv-meubel",        floorAreaM2: 0.60,                                     defaultDimensions: { lengthCm: 150, widthCm: 40,  heightCm: 50  } },
      { id: "nachtkastje",    label: "Nachtkastje",      floorAreaM2: 0.20,                                     defaultDimensions: { lengthCm: 50,  widthCm: 40,  heightCm: 55  } },
    ],
    fields: [
      {
        key: "materiaal",
        label: "Materiaal",
        type: "select",
        options: [
          { value: "spaanplaat", label: "Spaanplaat / MDF" },
          { value: "massief hout", label: "Massief hout" },
          { value: "metaal", label: "Metaal" },
        ],
      },
      {
        key: "glasAanwezig",
        label: "Glas aanwezig",
        type: "boolean",
        defaultValue: false,
      },
      {
        key: "demontageNodig",
        label: "Demontage nodig",
        type: "boolean",
        defaultValue: false,
        hideFor: ["nachtkastje", "tv-meubel", "ladekast"],
      },
      {
        key: "zwaar",
        label: "Zwaar item (>50 kg)",
        type: "boolean",
        defaultValue: false,
        hideFor: ["nachtkastje", "tv-meubel"],
      },
    ],
  },

  {
    id: "bed",
    label: "Bed",
    iconSlug: "bed",
    subtypes: [
      { id: "eenpersoonsbed",  label: "Eenpersoonsbed",  floorAreaM2: 1.80,                                    defaultDimensions: { lengthCm: 200, widthCm: 90,  heightCm: 50  } },
      { id: "tweepersoonsbed", label: "Tweepersoonsbed", floorAreaM2: 3.20, defaults: { zwaar: true },         defaultDimensions: { lengthCm: 200, widthCm: 160, heightCm: 50  } },
      { id: "boxspring",       label: "Boxspring",        floorAreaM2: 3.36, defaults: { zwaar: true },         defaultDimensions: { lengthCm: 210, widthCm: 160, heightCm: 120 } },
      { id: "bedframe",        label: "Bedframe",         floorAreaM2: 3.36,                                    defaultDimensions: { lengthCm: 210, widthCm: 160, heightCm: 40  } },
      { id: "kinderbed",       label: "Kinderbed",        floorAreaM2: 1.28,                                    defaultDimensions: { lengthCm: 160, widthCm: 80,  heightCm: 70  } },
      { id: "hoogslaper",      label: "Hoogslaper",       floorAreaM2: 1.80,                                    defaultDimensions: { lengthCm: 200, widthCm: 90,  heightCm: 160 } },
      { id: "matras",          label: "Matras",           floorAreaM2: 3.20,                                    defaultDimensions: { lengthCm: 200, widthCm: 160, heightCm: 25  } },
      { id: "hoofdbord",       label: "Hoofdbord",        floorAreaM2: 0.16,                                    defaultDimensions: { lengthCm: 160, widthCm: 10,  heightCm: 120 } },
    ],
    fields: [
      {
        key: "gedemonteerd",
        label: "Gedemonteerd aangeboden",
        type: "boolean",
        defaultValue: false,
        hideFor: ["matras", "hoofdbord"],
      },
      {
        key: "matrasInbegrepen",
        label: "Matras inbegrepen",
        type: "boolean",
        defaultValue: false,
        hideFor: ["matras", "hoofdbord"],
      },
      {
        key: "materiaalFrame",
        label: "Materiaal frame",
        type: "select",
        options: [
          { value: "hout", label: "Hout" },
          { value: "metaal", label: "Metaal" },
        ],
        hideFor: ["matras", "hoofdbord"],
      },
    ],
  },

  {
    id: "eettafel",
    label: "Eettafel",
    iconSlug: "eettafel",
    subtypes: [
      { id: "kleine-tafel",  label: "Kleine tafel",    floorAreaM2: 0.70,                                                               defaultDimensions: { lengthCm: 100, widthCm: 70,  heightCm: 75 } },
      { id: "4-persoons",    label: "4-persoons tafel", floorAreaM2: 1.12,                                                               defaultDimensions: { lengthCm: 140, widthCm: 80,  heightCm: 75 } },
      { id: "6-persoons",    label: "6-persoons tafel", floorAreaM2: 1.62, defaults: { grootFormaat: true },                             defaultDimensions: { lengthCm: 180, widthCm: 90,  heightCm: 75 } },
      { id: "8-persoons",    label: "8-persoons tafel", floorAreaM2: 2.20, defaults: { grootFormaat: true, zwaar: true },                defaultDimensions: { lengthCm: 220, widthCm: 100, heightCm: 75 } },
      { id: "ronde-tafel",   label: "Ronde tafel",      floorAreaM2: 1.13,                                                               defaultDimensions: { lengthCm: 120, widthCm: 120, heightCm: 75 } },
      { id: "uitschuifbaar", label: "Uitschuifbare tafel", floorAreaM2: 1.44,                                                            defaultDimensions: { lengthCm: 160, widthCm: 90,  heightCm: 75 } },
      { id: "bureau",        label: "Bureau",           floorAreaM2: 0.98,                                                               defaultDimensions: { lengthCm: 140, widthCm: 70,  heightCm: 75 } },
      { id: "salontafel",    label: "Salontafel",       floorAreaM2: 0.72,                                                               defaultDimensions: { lengthCm: 120, widthCm: 60,  heightCm: 45 } },
      { id: "bijzettafel",   label: "Bijzettafel",      floorAreaM2: 0.25,                                                               defaultDimensions: { lengthCm: 50,  widthCm: 50,  heightCm: 55 } },
    ],
    fields: [
      {
        key: "materiaalBlad",
        label: "Materiaal blad",
        type: "select",
        options: [
          { value: "hout", label: "Hout" },
          { value: "glas", label: "Glas" },
          { value: "steen", label: "Steen / marmer" },
        ],
      },
      {
        key: "demontabel",
        label: "Demontabel",
        type: "boolean",
        defaultValue: false,
        hideFor: ["salontafel", "bijzettafel"],
      },
      {
        key: "grootFormaat",
        label: "Groot formaat (>180 cm)",
        type: "boolean",
        defaultValue: false,
        hideFor: ["salontafel", "bijzettafel", "kleine-tafel"],
      },
    ],
  },

  {
    id: "stoelen",
    label: "Stoelen",
    iconSlug: "stoelen",
    subtypes: [
      { id: "eetkamerstoel", label: "Eetkamerstoel", floorAreaM2: 0.23,                                   defaultDimensions: { lengthCm: 45, widthCm: 50, heightCm: 90  } },
      { id: "bureaustoel",   label: "Bureaustoel",   floorAreaM2: 0.42,                                   defaultDimensions: { lengthCm: 65, widthCm: 65, heightCm: 110 } },
      { id: "fauteuil",      label: "Fauteuil",      floorAreaM2: 0.68,                                   defaultDimensions: { lengthCm: 85, widthCm: 80, heightCm: 90  } },
      { id: "barkruk",       label: "Barkruk",       floorAreaM2: 0.16,                                   defaultDimensions: { lengthCm: 40, widthCm: 40, heightCm: 75  } },
      { id: "klapstoel",     label: "Klapstoel",     floorAreaM2: 0.10, defaults: { stapelbaar: true },   defaultDimensions: { lengthCm: 45, widthCm: 50, heightCm: 85  } },
      { id: "kinderstoel",   label: "Kinderstoel",   floorAreaM2: 0.30,                                   defaultDimensions: { lengthCm: 55, widthCm: 55, heightCm: 100 } },
    ],
    fields: [
      {
        key: "materiaal",
        label: "Materiaal",
        type: "select",
        options: [
          { value: "hout", label: "Hout" },
          { value: "kunststof", label: "Kunststof" },
          { value: "metaal", label: "Metaal" },
        ],
      },
      {
        key: "kwetsbaar",
        label: "Kwetsbaar",
        type: "boolean",
        defaultValue: false,
      },
      {
        key: "stapelbaar",
        label: "Stapelbaar",
        type: "boolean",
        defaultValue: false,
        hideFor: ["fauteuil", "bureaustoel"],
      },
    ],
  },

  {
    id: "koelkast",
    label: "Koelkast",
    iconSlug: "koelkast",
    subtypes: [
      { id: "tafelmodel", label: "Tafelmodel koelkast",   floorAreaM2: 0.25,                                    defaultDimensions: { lengthCm: 50,  widthCm: 50,  heightCm: 85  } },
      { id: "1-deurs",    label: "1-deurs koelkast",      floorAreaM2: 0.39,                                    defaultDimensions: { lengthCm: 60,  widthCm: 65,  heightCm: 180 } },
      { id: "koel-vries", label: "Koel-vriescombinatie",  floorAreaM2: 0.39, defaults: { grootZwaar: true },    defaultDimensions: { lengthCm: 60,  widthCm: 65,  heightCm: 185 } },
      { id: "amerikaans", label: "Amerikaanse koelkast",  floorAreaM2: 0.63, defaults: { grootZwaar: true },    defaultDimensions: { lengthCm: 90,  widthCm: 70,  heightCm: 180 } },
      { id: "inbouw",     label: "Inbouw koelkast",       floorAreaM2: 0.31,                                    defaultDimensions: { lengthCm: 56,  widthCm: 55,  heightCm: 178 } },
      { id: "wijn",       label: "Wijnkoelkast",          floorAreaM2: 0.19,                                    defaultDimensions: { lengthCm: 40,  widthCm: 48,  heightCm: 85  } },
    ],
    fields: [
      {
        key: "grootZwaar",
        label: "Groot / zwaar (>60 kg)",
        type: "boolean",
        defaultValue: false,
        hideFor: ["tafelmodel", "wijn"],
      },
      {
        key: "kwetsbaar",
        label: "Kwetsbaar / extra zorg",
        type: "boolean",
        defaultValue: false,
      },
    ],
  },

  {
    id: "wasmachine",
    label: "Wasmachine",
    iconSlug: "wasmachine",
    subtypes: [
      { id: "wasmachine", label: "Wasmachine",          floorAreaM2: 0.36, defaults: { zwaar: true }, defaultDimensions: { lengthCm: 60, widthCm: 60, heightCm: 85  } },
      { id: "droger",     label: "Droger",              floorAreaM2: 0.36, defaults: { zwaar: true }, defaultDimensions: { lengthCm: 60, widthCm: 60, heightCm: 85  } },
      { id: "was-droog",  label: "Was-droogcombinatie", floorAreaM2: 0.36, defaults: { zwaar: true }, defaultDimensions: { lengthCm: 60, widthCm: 60, heightCm: 85  } },
      { id: "mini",       label: "Mini wasmachine",     floorAreaM2: 0.25,                            defaultDimensions: { lengthCm: 50, widthCm: 50, heightCm: 70  } },
    ],
    fields: [
      {
        key: "extraBescherming",
        label: "Extra bescherming nodig",
        type: "boolean",
        defaultValue: false,
      },
    ],
  },

  {
    id: "dozen",
    label: "Dozen",
    iconSlug: "dozen",
    subtypes: [
      { id: "klein",        label: "Verhuisdoos klein",  floorAreaM2: 0.12, defaultDimensions: { lengthCm: 40, widthCm: 30, heightCm: 30 } },
      { id: "medium",       label: "Verhuisdoos medium", floorAreaM2: 0.20, defaultDimensions: { lengthCm: 50, widthCm: 40, heightCm: 40 } },
      { id: "groot",        label: "Verhuisdoos groot",  floorAreaM2: 0.30, defaultDimensions: { lengthCm: 60, widthCm: 50, heightCm: 50 } },
      { id: "archief",      label: "Archiefdoos",        floorAreaM2: 0.11, defaultDimensions: { lengthCm: 40, widthCm: 27, heightCm: 27 } },
      { id: "plastic-box",  label: "Plastic box",        floorAreaM2: 0.24, defaultDimensions: { lengthCm: 60, widthCm: 40, heightCm: 35 } },
      { id: "kleding",      label: "Kledingdoos",        floorAreaM2: 0.25, defaultDimensions: { lengthCm: 50, widthCm: 50, heightCm: 70 } },
    ],
    fields: [
      {
        key: "inhoud",
        label: "Inhoud",
        type: "select",
        options: [
          { value: "normaal", label: "Normaal" },
          { value: "breekbaar", label: "Breekbaar" },
        ],
        defaultValue: "normaal",
      },
      {
        key: "gewicht",
        label: "Gewicht per doos",
        type: "select",
        options: [
          { value: "licht", label: "Licht (<10 kg)" },
          { value: "normaal", label: "Normaal (10–20 kg)" },
          { value: "zwaar", label: "Zwaar (>20 kg)" },
        ],
        defaultValue: "normaal",
      },
    ],
  },
];

export const ITEM_CATEGORY_MAP = Object.fromEntries(
  ITEM_CATEGORIES.map((c) => [c.id, c])
) as Record<ItemCategory, ItemCategory_>;

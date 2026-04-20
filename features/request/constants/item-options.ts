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
      { id: "fauteuil",  label: "Fauteuil",        defaultDimensions: { lengthCm: 90,  widthCm: 85,  heightCm: 90  } },
      { id: "2-zits",   label: "2-zits bank",      defaultDimensions: { lengthCm: 180, widthCm: 90,  heightCm: 85  } },
      { id: "3-zits",   label: "3-zits bank",      defaults: { zwaar: true },                                          defaultDimensions: { lengthCm: 220, widthCm: 90,  heightCm: 85  } },
      { id: "hoekbank", label: "Hoekbank",          defaults: { zwaar: true, modulair: true },                          defaultDimensions: { lengthCm: 260, widthCm: 200, heightCm: 85  } },
      { id: "slaapbank", label: "Slaapbank",        defaults: { zwaar: true },                                          defaultDimensions: { lengthCm: 200, widthCm: 90,  heightCm: 85  } },
      { id: "loveseat", label: "Loveseat",          defaultDimensions: { lengthCm: 140, widthCm: 85,  heightCm: 85  } },
      { id: "modulair", label: "Modulaire bank",    defaults: { modulair: true },                                       defaultDimensions: { lengthCm: 240, widthCm: 95,  heightCm: 85  } },
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
      { id: "kledingkast",    label: "Kledingkast",     defaults: { zwaar: true },          defaultDimensions: { lengthCm: 150, widthCm: 60,  heightCm: 200 } },
      { id: "schuifdeurkast", label: "Schuifdeurkast",  defaults: { zwaar: true },          defaultDimensions: { lengthCm: 200, widthCm: 60,  heightCm: 220 } },
      { id: "ladekast",       label: "Ladekast",                                            defaultDimensions: { lengthCm: 80,  widthCm: 50,  heightCm: 100 } },
      { id: "boekenkast",     label: "Boekenkast",                                          defaultDimensions: { lengthCm: 80,  widthCm: 30,  heightCm: 200 } },
      { id: "vitrinekast",    label: "Vitrinekast",     defaults: { glasAanwezig: true },   defaultDimensions: { lengthCm: 100, widthCm: 40,  heightCm: 190 } },
      { id: "dressoir",       label: "Dressoir",                                            defaultDimensions: { lengthCm: 160, widthCm: 45,  heightCm: 85  } },
      { id: "tv-meubel",      label: "Tv-meubel",                                           defaultDimensions: { lengthCm: 150, widthCm: 40,  heightCm: 50  } },
      { id: "nachtkastje",    label: "Nachtkastje",                                         defaultDimensions: { lengthCm: 50,  widthCm: 40,  heightCm: 55  } },
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
      { id: "eenpersoonsbed",  label: "Eenpersoonsbed",                                   defaultDimensions: { lengthCm: 200, widthCm: 90,  heightCm: 50  } },
      { id: "tweepersoonsbed", label: "Tweepersoonsbed", defaults: { zwaar: true },       defaultDimensions: { lengthCm: 200, widthCm: 160, heightCm: 50  } },
      { id: "boxspring",       label: "Boxspring",        defaults: { zwaar: true },       defaultDimensions: { lengthCm: 210, widthCm: 160, heightCm: 120 } },
      { id: "bedframe",        label: "Bedframe",                                          defaultDimensions: { lengthCm: 210, widthCm: 160, heightCm: 40  } },
      { id: "kinderbed",       label: "Kinderbed",                                         defaultDimensions: { lengthCm: 160, widthCm: 80,  heightCm: 70  } },
      { id: "hoogslaper",      label: "Hoogslaper",                                        defaultDimensions: { lengthCm: 200, widthCm: 90,  heightCm: 160 } },
      { id: "matras",          label: "Matras",                                            defaultDimensions: { lengthCm: 200, widthCm: 160, heightCm: 25  } },
      { id: "hoofdbord",       label: "Hoofdbord",                                         defaultDimensions: { lengthCm: 160, widthCm: 10,  heightCm: 120 } },
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
      { id: "kleine-tafel",  label: "Kleine tafel",                                                              defaultDimensions: { lengthCm: 100, widthCm: 70,  heightCm: 75 } },
      { id: "4-persoons",    label: "4-persoons tafel",                                                          defaultDimensions: { lengthCm: 140, widthCm: 80,  heightCm: 75 } },
      { id: "6-persoons",    label: "6-persoons tafel",   defaults: { grootFormaat: true },                      defaultDimensions: { lengthCm: 180, widthCm: 90,  heightCm: 75 } },
      { id: "8-persoons",    label: "8-persoons tafel",   defaults: { grootFormaat: true, zwaar: true },         defaultDimensions: { lengthCm: 220, widthCm: 100, heightCm: 75 } },
      { id: "ronde-tafel",   label: "Ronde tafel",                                                               defaultDimensions: { lengthCm: 120, widthCm: 120, heightCm: 75 } },
      { id: "uitschuifbaar", label: "Uitschuifbare tafel",                                                       defaultDimensions: { lengthCm: 160, widthCm: 90,  heightCm: 75 } },
      { id: "bureau",        label: "Bureau",                                                                     defaultDimensions: { lengthCm: 140, widthCm: 70,  heightCm: 75 } },
      { id: "salontafel",    label: "Salontafel",                                                                 defaultDimensions: { lengthCm: 120, widthCm: 60,  heightCm: 45 } },
      { id: "bijzettafel",   label: "Bijzettafel",                                                                defaultDimensions: { lengthCm: 50,  widthCm: 50,  heightCm: 55 } },
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
      { id: "eetkamerstoel", label: "Eetkamerstoel",                                  defaultDimensions: { lengthCm: 45, widthCm: 50, heightCm: 90  } },
      { id: "bureaustoel",   label: "Bureaustoel",                                    defaultDimensions: { lengthCm: 65, widthCm: 65, heightCm: 110 } },
      { id: "fauteuil",      label: "Fauteuil",                                       defaultDimensions: { lengthCm: 85, widthCm: 80, heightCm: 90  } },
      { id: "barkruk",       label: "Barkruk",                                        defaultDimensions: { lengthCm: 40, widthCm: 40, heightCm: 75  } },
      { id: "klapstoel",     label: "Klapstoel",     defaults: { stapelbaar: true },  defaultDimensions: { lengthCm: 45, widthCm: 50, heightCm: 85  } },
      { id: "kinderstoel",   label: "Kinderstoel",                                    defaultDimensions: { lengthCm: 55, widthCm: 55, heightCm: 100 } },
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
      { id: "tafelmodel", label: "Tafelmodel koelkast",                                    defaultDimensions: { lengthCm: 50,  widthCm: 50,  heightCm: 85  } },
      { id: "1-deurs",    label: "1-deurs koelkast",                                       defaultDimensions: { lengthCm: 60,  widthCm: 65,  heightCm: 180 } },
      { id: "koel-vries", label: "Koel-vriescombinatie", defaults: { grootZwaar: true },   defaultDimensions: { lengthCm: 60,  widthCm: 65,  heightCm: 185 } },
      { id: "amerikaans", label: "Amerikaanse koelkast",  defaults: { grootZwaar: true },   defaultDimensions: { lengthCm: 90,  widthCm: 70,  heightCm: 180 } },
      { id: "inbouw",     label: "Inbouw koelkast",                                        defaultDimensions: { lengthCm: 56,  widthCm: 55,  heightCm: 178 } },
      { id: "wijn",       label: "Wijnkoelkast",                                           defaultDimensions: { lengthCm: 40,  widthCm: 48,  heightCm: 85  } },
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
      { id: "wasmachine", label: "Wasmachine",            defaults: { zwaar: true }, defaultDimensions: { lengthCm: 60, widthCm: 60, heightCm: 85  } },
      { id: "droger",     label: "Droger",                defaults: { zwaar: true }, defaultDimensions: { lengthCm: 60, widthCm: 60, heightCm: 85  } },
      { id: "was-droog",  label: "Was-droogcombinatie",   defaults: { zwaar: true }, defaultDimensions: { lengthCm: 60, widthCm: 60, heightCm: 85  } },
      { id: "mini",       label: "Mini wasmachine",                                  defaultDimensions: { lengthCm: 50, widthCm: 50, heightCm: 70  } },
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
      { id: "klein",        label: "Verhuisdoos klein",  defaultDimensions: { lengthCm: 40, widthCm: 30, heightCm: 30 } },
      { id: "medium",       label: "Verhuisdoos medium", defaultDimensions: { lengthCm: 50, widthCm: 40, heightCm: 40 } },
      { id: "groot",        label: "Verhuisdoos groot",  defaultDimensions: { lengthCm: 60, widthCm: 50, heightCm: 50 } },
      { id: "archief",      label: "Archiefdoos",        defaultDimensions: { lengthCm: 40, widthCm: 27, heightCm: 27 } },
      { id: "plastic-box",  label: "Plastic box",        defaultDimensions: { lengthCm: 60, widthCm: 40, heightCm: 35 } },
      { id: "kleding",      label: "Kledingdoos",        defaultDimensions: { lengthCm: 50, widthCm: 50, heightCm: 70 } },
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

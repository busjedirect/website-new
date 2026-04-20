// ---------------------------------------------------------------------------
// Environment variabelen
//
// NEXT_PUBLIC_* variabelen worden door Next.js bij build-time inlined als
// letterlijke strings in de browser-bundle. Dit werkt ALLEEN als de key
// een letterlijke string is in de broncode:
//
//   ✓ process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN  (literal — werkt in browser)
//   ✗ process.env[key]                             (dynamisch — werkt NIET in browser)
//
// Server-only variabelen (zonder NEXT_PUBLIC_) zijn alleen beschikbaar
// server-side en mogen via dynamische lookup gelezen worden.
// ---------------------------------------------------------------------------

function requireServerEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(
      `Ontbrekende server environment variabele: "${key}". Voeg het toe aan .env.local.`
    );
  }
  return value;
}

function optionalEnv(key: string): string | undefined {
  return process.env[key];
}

// ---------------------------------------------------------------------------
// Publieke variabelen — literal lookups zodat Next.js ze kan inlinen
// ---------------------------------------------------------------------------

export const env = {
  mapbox: {
    get accessToken(): string {
      const value = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
      if (!value) {
        throw new Error(
          "NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ontbreekt. Voeg het toe aan .env.local en herstart de dev-server."
        );
      }
      return value;
    },
  },
} as const;

// ---------------------------------------------------------------------------
// Server-only variabelen — alleen gebruiken in Route Handlers en Server Components
// ---------------------------------------------------------------------------

export const serverEnv = {
  mapbox: {
    secretToken: optionalEnv("MAPBOX_SECRET_TOKEN"),
  },

  airtable: {
    get pat(): string {
      return requireServerEnv("AIRTABLE_PAT");
    },
    get baseId(): string {
      return requireServerEnv("AIRTABLE_BASE_ID");
    },
    get tableName(): string {
      return requireServerEnv("AIRTABLE_TABLE_NAME");
    },
  },

  resend: {
    get apiKey(): string {
      return requireServerEnv("RESEND_API_KEY");
    },
    get fromEmail(): string {
      return requireServerEnv("RESEND_FROM_EMAIL");
    },
    get notificationEmail(): string {
      return requireServerEnv("REQUEST_NOTIFICATION_EMAIL");
    },
  },
} as const;

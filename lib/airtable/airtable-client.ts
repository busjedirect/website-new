import { serverEnv } from "../env/env";

const AIRTABLE_BASE_URL = "https://api.airtable.com/v0";
const IS_DEV = process.env.NODE_ENV === "development";

// Een geldig Airtable PAT heeft de vorm: pat<14 chars>.<64+ chars>
// Minimale lengte is ~80 tekens.
const AIRTABLE_PAT_MIN_LENGTH = 60;

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface AirtableRecord {
  id: string;
  createdTime: string;
  fields: Record<string, unknown>;
}

interface AirtableCreateResponse {
  id: string;
  createdTime: string;
  fields: Record<string, unknown>;
}

interface AirtableErrorResponse {
  error: {
    type: string;
    message: string;
  };
}

// ---------------------------------------------------------------------------
// Token diagnostics — nooit de volledige waarde loggen
// ---------------------------------------------------------------------------

function logTokenDiagnostics(pat: string, baseId: string, tableName: string) {
  if (!IS_DEV) return;
  const hasDot = pat.includes(".");
  console.debug("[Airtable] Token diagnostics:");
  console.debug(`  PAT aanwezig:        ${pat.length > 0 ? "ja" : "nee"}`);
  console.debug(`  PAT begint met pat:  ${pat.startsWith("pat") ? "ja" : "nee"}`);
  console.debug(`  PAT lengte > 20:     ${pat.length > 20 ? "ja" : "nee"}`);
  console.debug(`  PAT lengte > 60:     ${pat.length > 60 ? "ja" : "nee"} ← moet ja zijn`);
  console.debug(`  PAT bevat punt (.):  ${hasDot ? "ja" : "nee"} ← moet ja zijn`);
  console.debug(`  PAT lengte:          ${pat.length} tekens`);
  console.debug(`  PAT prefix:          ${pat.slice(0, 7)}…`);
  console.debug(`  Base ID:             ${baseId}`);
  console.debug(`  Table name:          ${tableName}`);
}

// ---------------------------------------------------------------------------
// Client
// ---------------------------------------------------------------------------

export async function createAirtableRecord(
  fields: Record<string, unknown>
): Promise<AirtableRecord> {
  const { pat, baseId, tableName } = serverEnv.airtable;

  // Trim whitespace en newlines die soms in env vars sluipen
  const cleanPat = pat.trim();
  const cleanBaseId = baseId.trim();
  const cleanTableName = tableName.trim();

  // Log diagnostics vóór validatie zodat je altijd de token-status ziet
  logTokenDiagnostics(cleanPat, cleanBaseId, cleanTableName);

  // Valideer PAT-formaat — een afgekapte token geeft altijd 401
  if (!cleanPat.startsWith("pat")) {
    throw new Error(
      `AIRTABLE_PAT heeft een ongeldig formaat — moet beginnen met "pat". ` +
      `Huidige prefix: "${cleanPat.slice(0, 6)}". Kopieer de volledige token uit airtable.com/create/tokens.`
    );
  }

  if (cleanPat.length < AIRTABLE_PAT_MIN_LENGTH) {
    throw new Error(
      `AIRTABLE_PAT is te kort (${cleanPat.length} tekens, minimum ${AIRTABLE_PAT_MIN_LENGTH}). ` +
      `De token is waarschijnlijk afgekapt bij het plakken in .env.local. ` +
      `Een geldig PAT heeft de vorm: pat<14 chars>.<64+ chars>.`
    );
  }

  if (!cleanPat.includes(".")) {
    throw new Error(
      `AIRTABLE_PAT mist een punt (.) — token lijkt afgekapt. ` +
      `Formaat: pat<14 chars>.<64+ chars>. Kopieer de volledige token opnieuw.`
    );
  }

  // Valideer base ID
  if (cleanBaseId.includes("/")) {
    throw new Error(
      `AIRTABLE_BASE_ID bevat een slash — gebruik alleen het "app..." gedeelte. ` +
      `Begint met: ${cleanBaseId.slice(0, 20)}`
    );
  }

  if (!cleanBaseId.startsWith("app")) {
    throw new Error(
      `AIRTABLE_BASE_ID ziet er ongeldig uit — moet beginnen met "app". ` +
      `Begint nu met: "${cleanBaseId.slice(0, 6)}"`
    );
  }

  const url = `${AIRTABLE_BASE_URL}/${cleanBaseId}/${encodeURIComponent(cleanTableName)}`;

  if (IS_DEV) {
    console.debug(`[Airtable] POST ${url}`);
    console.debug(`[Airtable] Velden: ${Object.keys(fields).join(", ")}`);
  }

  let response: Response;
  try {
    response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${cleanPat}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fields }),
    });
  } catch (networkErr) {
    const msg = networkErr instanceof Error ? networkErr.message : "onbekend";
    throw new Error(`Airtable netwerk fout: ${msg}`);
  }

  if (IS_DEV) {
    console.debug(`[Airtable] Response: HTTP ${response.status}`);
  }

  if (!response.ok) {
    let errorDetail = `HTTP ${response.status}`;
    try {
      const errBody: AirtableErrorResponse = await response.json();
      errorDetail = `${errBody.error.type}: ${errBody.error.message}`;
    } catch { /* body niet parseerbaar */ }

    switch (response.status) {
      case 401:
        throw new Error(
          `Airtable 401 AUTHENTICATION_REQUIRED.\n` +
          `PAT lengte: ${cleanPat.length} tekens — ${cleanPat.length < AIRTABLE_PAT_MIN_LENGTH ? "TE KORT, waarschijnlijk afgekapt" : "lengte ok"}.\n` +
          `Checklist:\n` +
          `  1. Kopieer de volledige PAT opnieuw uit airtable.com/create/tokens\n` +
          `  2. Plak op één regel in .env.local — geen regelafbreking\n` +
          `  3. Geen aanhalingstekens om de waarde\n` +
          `  4. Herstart de dev-server na aanpassen\n` +
          `  5. Controleer of de PAT toegang heeft tot base "${cleanBaseId}"\n` +
          `API detail: ${errorDetail}`
        );
      case 403:
        throw new Error(
          `Airtable 403: PAT heeft geen schrijfrechten op base "${cleanBaseId}".\n` +
          `Voeg de base toe aan de PAT-toegangslijst en geef scope data.records:write.\n` +
          `API detail: ${errorDetail}`
        );
      case 404:
        throw new Error(
          `Airtable 404: Base of tabel niet gevonden.\n` +
          `  Base ID: "${cleanBaseId}"\n` +
          `  Tabel: "${cleanTableName}"\n` +
          `API detail: ${errorDetail}`
        );
      case 422:
        throw new Error(
          `Airtable 422: Ongeldige veldnamen of waarden.\n` +
          `Controleer of alle kolomnamen exact overeenkomen met Airtable.\n` +
          `API detail: ${errorDetail}`
        );
      default:
        throw new Error(`Airtable fout: ${errorDetail}`);
    }
  }

  const data: AirtableCreateResponse = await response.json();

  if (IS_DEV) {
    console.debug(`[Airtable] Record aangemaakt: ${data.id}`);
  }

  return data;
}

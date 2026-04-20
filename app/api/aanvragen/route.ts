import type {
  CreateRequestPayload,
  CreateRequestResponse,
} from "@/features/request/types/request.types";
import { createAirtableRecord } from "@/lib/airtable/airtable-client";
import { mapPayloadToAirtableFields } from "@/lib/airtable/airtable-mapper";
import { sendCustomerEmail } from "@/lib/email/send-customer-email";
import { sendInternalEmail } from "@/lib/email/send-internal-email";

const IS_DEV = process.env.NODE_ENV === "development";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ValidationError {
  field: string;
  message: string;
}

interface ApiErrorResponse {
  error: string;
  details?: ValidationError[];
}

// ---------------------------------------------------------------------------
// Validatie
// ---------------------------------------------------------------------------

function validatePayload(body: unknown): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!body || typeof body !== "object") {
    return [{ field: "body", message: "Request body ontbreekt of is geen object." }];
  }

  const b = body as Record<string, unknown>;

  if (!b.fromAddress || typeof b.fromAddress !== "object") {
    errors.push({ field: "fromAddress", message: "Ophaaladres is verplicht." });
  }
  if (!b.toAddress || typeof b.toAddress !== "object") {
    errors.push({ field: "toAddress", message: "Afleveradres is verplicht." });
  }
  if (!Array.isArray(b.items) || b.items.length === 0) {
    errors.push({ field: "items", message: "Minimaal één item is verplicht." });
  }
  if (!b.selectedDate || typeof b.selectedDate !== "string") {
    errors.push({ field: "selectedDate", message: "Datum is verplicht." });
  }
  if (!b.selectedTimeSlot || typeof b.selectedTimeSlot !== "string") {
    errors.push({ field: "selectedTimeSlot", message: "Tijdvak is verplicht." });
  }
  if (!b.firstName || typeof b.firstName !== "string" || !b.firstName.trim()) {
    errors.push({ field: "firstName", message: "Voornaam is verplicht." });
  }
  if (!b.lastName || typeof b.lastName !== "string" || !b.lastName.trim()) {
    errors.push({ field: "lastName", message: "Achternaam is verplicht." });
  }
  if (!b.phone || typeof b.phone !== "string" || !b.phone.trim()) {
    errors.push({ field: "phone", message: "Telefoonnummer is verplicht." });
  }
  if (!b.email || typeof b.email !== "string" || !b.email.includes("@")) {
    errors.push({ field: "email", message: "Geldig e-mailadres is verplicht." });
  }
  if (b.agreedToTerms !== true) {
    errors.push({ field: "agreedToTerms", message: "Akkoord met voorwaarden is verplicht." });
  }

  return errors;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function generateReferenceNumber(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `BD-${timestamp}-${random}`;
}

function json<T>(data: T, status = 200): Response {
  return Response.json(data, {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function errorResponse(
  message: string,
  status: number,
  details?: ValidationError[]
): Response {
  const body: ApiErrorResponse = {
    error: message,
    ...(details ? { details } : {}),
  };
  return json(body, status);
}

// ---------------------------------------------------------------------------
// POST /api/aanvragen
// ---------------------------------------------------------------------------

export async function POST(request: Request): Promise<Response> {
  // Content-Type check
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return errorResponse("Content-Type moet application/json zijn.", 415);
  }

  // Body parsen
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return errorResponse("Ongeldige JSON in request body.", 400);
  }

  // Valideren
  const errors = validatePayload(body);
  if (errors.length > 0) {
    return errorResponse("Validatie mislukt.", 422, errors);
  }

  const payload = body as CreateRequestPayload;
  const referenceNumber = generateReferenceNumber();
  const createdAt = new Date().toISOString();

  // 1. Airtable — kritiek: fout = request faalt met duidelijke melding
  try {
    const airtableFields = mapPayloadToAirtableFields(payload, referenceNumber);
    await createAirtableRecord(airtableFields);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Onbekende Airtable fout";
    console.error(`[Airtable] Opslaan mislukt voor ${referenceNumber}:`, message);
    return errorResponse(
      IS_DEV
        ? `Aanvraag opslaan mislukt: ${message}`
        : "Aanvraag kon niet worden opgeslagen. Probeer het opnieuw.",
      500
    );
  }

  // 2. E-mails — niet-kritiek: fout wordt gelogd, request slaagt alsnog
  const emailResults = await Promise.allSettled([
    sendCustomerEmail(payload, referenceNumber),
    sendInternalEmail(payload, referenceNumber),
  ]);

  emailResults.forEach((result, index) => {
    if (result.status === "rejected") {
      const label = index === 0 ? "klantmail" : "interne mail";
      const reason = result.reason instanceof Error
        ? result.reason.message
        : String(result.reason);
      console.error(`[Email] ${label} mislukt voor ${referenceNumber}: ${reason}`);
    }
  });

  const response: CreateRequestResponse = { referenceNumber, createdAt };
  return json(response, 201);
}

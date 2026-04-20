import type { CreateRequestPayload, CreateRequestResponse } from "../types/request.types";

const TIMEOUT_MS = 15_000;

/**
 * Verstuurt de aanvraag naar de API.
 * - Timeout na 15 seconden
 * - Gooit een fout bij netwerk-, timeout- of serverfouten
 * - Parseert foutdetails uit de API-response waar beschikbaar
 */
export async function submitRequest(
  payload: CreateRequestPayload
): Promise<CreateRequestResponse> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

  let response: Response;

  try {
    response = await fetch("/api/aanvragen", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
  } catch (err) {
    if (err instanceof DOMException && err.name === "AbortError") {
      throw new Error(
        "Het versturen duurde te lang. Controleer je verbinding en probeer opnieuw."
      );
    }
    throw new Error(
      "Geen verbinding met de server. Controleer je internet en probeer opnieuw."
    );
  } finally {
    clearTimeout(timeoutId);
  }

  if (!response.ok) {
    let message = `Er is iets misgegaan (${response.status}). Probeer het opnieuw.`;
    try {
      const data = await response.json();
      if (typeof data?.error === "string") message = data.error;
    } catch {
      // laat de standaard foutmelding staan
    }
    throw new Error(message);
  }

  return response.json() as Promise<CreateRequestResponse>;
}

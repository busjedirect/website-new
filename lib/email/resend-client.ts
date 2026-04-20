import { serverEnv } from "../env/env";

const RESEND_API_URL = "https://api.resend.com/emails";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
}

interface ResendSuccessResponse {
  id: string;
}

interface ResendErrorResponse {
  name: string;
  message: string;
  statusCode: number;
}

// ---------------------------------------------------------------------------
// Client
// ---------------------------------------------------------------------------

/**
 * Verstuurt een e-mail via de Resend API.
 * Gooit een fout als de API-aanroep mislukt.
 */
export async function sendEmail(options: SendEmailOptions): Promise<string> {
  const { apiKey, fromEmail } = serverEnv.resend;

  const response = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: options.to,
      subject: options.subject,
      html: options.html,
    }),
  });

  if (!response.ok) {
    let errorMessage = `HTTP ${response.status}`;
    try {
      const errBody: ResendErrorResponse = await response.json();
      errorMessage = `${errBody.name}: ${errBody.message}`;
    } catch {
      // body niet parseerbaar
    }
    throw new Error(`Resend fout: ${errorMessage}`);
  }

  const data: ResendSuccessResponse = await response.json();
  return data.id;
}

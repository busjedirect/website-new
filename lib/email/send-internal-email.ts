import { sendEmail } from "./resend-client";
import { serverEnv } from "../env/env";
import type { CreateRequestPayload } from "@/features/request/types/request.types";
import { formatPrice, formatDate } from "@/lib/utils/format";
import { TIME_SLOT_MAP } from "@/features/request/constants/time-slots";

function buildInternalHtml(
  payload: CreateRequestPayload,
  referenceNumber: string
): string {
  const timeSlot = TIME_SLOT_MAP[payload.selectedTimeSlot];
  const tijdvak = timeSlot
    ? `${timeSlot.label} (${timeSlot.timeRange})`
    : payload.selectedTimeSlot;

  const itemsHtml = payload.items
    .map(
      (item) =>
        `<tr>
          <td style="padding:6px 0;border-bottom:1px solid #f0f0f0;font-size:14px">${item.label}</td>
          <td style="padding:6px 0;border-bottom:1px solid #f0f0f0;font-size:14px;text-align:right">${item.aantal}×${item.opmerking ? ` · ${item.opmerking}` : ""}</td>
        </tr>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="nl">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f9f9f9;font-family:system-ui,sans-serif;color:#111">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9f9f9;padding:32px 16px">
    <tr><td align="center">
      <table width="100%" style="max-width:560px;background:#fff;border-radius:12px;border:1px solid #e5e5e5">

        <!-- Header -->
        <tr><td style="background:#111;padding:20px 32px">
          <p style="margin:0;color:#fff;font-size:16px;font-weight:600">🚐 Nieuwe aanvraag — BusjeDirect</p>
        </td></tr>

        <tr><td style="padding:32px">

          <!-- Referentie + tijdstip -->
          <p style="margin:0 0 4px;font-size:13px;color:#888">Referentienummer</p>
          <p style="margin:0 0 24px;font-size:16px;font-weight:700;font-family:monospace">${referenceNumber}</p>

          <!-- Klantgegevens -->
          <p style="margin:0 0 8px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;color:#888">Klantgegevens</p>
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px">
            <tr>
              <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;font-size:13px;color:#888;width:40%">Naam</td>
              <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;font-size:14px;font-weight:500;text-align:right">${payload.firstName} ${payload.lastName}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;font-size:13px;color:#888">Telefoon</td>
              <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;font-size:14px;text-align:right">
                <a href="tel:${payload.phone}" style="color:#111">${payload.phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;font-size:13px;color:#888">E-mail</td>
              <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;font-size:14px;text-align:right">
                <a href="mailto:${payload.email}" style="color:#111">${payload.email}</a>
              </td>
            </tr>
          </table>

          <!-- Adressen -->
          <p style="margin:0 0 8px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;color:#888">Route</p>
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px">
            <tr>
              <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;font-size:13px;color:#888;width:40%">Ophaaladres</td>
              <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;font-size:14px;font-weight:500;text-align:right">${payload.fromAddress.fullAddress}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;font-size:13px;color:#888">Afleveradres</td>
              <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;font-size:14px;font-weight:500;text-align:right">${payload.toAddress.fullAddress}</td>
            </tr>
          </table>

          <!-- Items -->
          <p style="margin:0 0 8px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;color:#888">Items</p>
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px">
            ${itemsHtml}
          </table>

          <!-- Planning -->
          <p style="margin:0 0 8px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;color:#888">Planning</p>
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px">
            <tr>
              <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;font-size:13px;color:#888;width:40%">Datum</td>
              <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;font-size:14px;font-weight:500;text-align:right">${formatDate(payload.selectedDate)}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;font-size:13px;color:#888">Tijdvak</td>
              <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;font-size:14px;font-weight:500;text-align:right">${tijdvak}</td>
            </tr>
          </table>

          <!-- Prijs -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;border-top:2px solid #111;padding-top:12px">
            <tr>
              <td style="padding:10px 0;font-size:14px;font-weight:600">Totaalprijs</td>
              <td style="padding:10px 0;font-size:20px;font-weight:700;text-align:right">${formatPrice(payload.priceCents)}</td>
            </tr>
          </table>

          ${payload.note ? `
          <!-- Opmerking -->
          <div style="background:#fffbeb;border:1px solid #fde68a;border-radius:8px;padding:12px 16px;margin-bottom:24px">
            <p style="margin:0 0 4px;font-size:12px;font-weight:600;color:#92400e">Opmerking klant</p>
            <p style="margin:0;font-size:14px;color:#111">${payload.note}</p>
          </div>` : ""}

          <!-- Extra tijd akkoord -->
          <p style="margin:0;font-size:13px;color:#888">
            Extra tijd akkoord: <strong style="color:#111">${payload.agreedToExtraTime ? "Ja" : "Nee"}</strong>
          </p>

        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

/**
 * Stuurt een notificatiemail naar het interne e-mailadres.
 * Gooit een fout als de e-mail niet verstuurd kan worden.
 */
export async function sendInternalEmail(
  payload: CreateRequestPayload,
  referenceNumber: string
): Promise<void> {
  const { notificationEmail } = serverEnv.resend;

  await sendEmail({
    to: notificationEmail,
    subject: `Nieuwe aanvraag ${referenceNumber} — ${payload.firstName} ${payload.lastName}`,
    html: buildInternalHtml(payload, referenceNumber),
  });
}

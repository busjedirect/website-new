import { sendEmail } from "./resend-client";
import type { CreateRequestPayload } from "@/features/request/types/request.types";
import { formatPrice, formatDate } from "@/lib/utils/format";
import { TIME_SLOT_MAP } from "@/features/request/constants/time-slots";

function buildCustomerHtml(
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
          <td style="padding:6px 0;border-bottom:1px solid #f0f0f0">${item.label}</td>
          <td style="padding:6px 0;border-bottom:1px solid #f0f0f0;text-align:right">${item.aantal}×</td>
        </tr>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="nl">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f9f9f9;font-family:system-ui,sans-serif;color:#111">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9f9f9;padding:32px 16px">
    <tr><td align="center">
      <table width="100%" style="max-width:560px;background:#fff;border-radius:12px;border:1px solid #e5e5e5;overflow:hidden">

        <!-- Header -->
        <tr><td style="background:#111;padding:24px 32px">
          <p style="margin:0;color:#fff;font-size:18px;font-weight:600">BusjeDirect</p>
        </td></tr>

        <!-- Body -->
        <tr><td style="padding:32px">
          <h1 style="margin:0 0 8px;font-size:22px;font-weight:700">Je aanvraag is ontvangen!</h1>
          <p style="margin:0 0 24px;color:#555;font-size:15px">
            Bedankt, ${payload.firstName}. We nemen zo snel mogelijk contact met je op om de aanvraag te bevestigen.
          </p>

          <!-- Referentie -->
          <p style="margin:0 0 24px;font-size:13px;color:#888">
            Referentienummer: <strong style="color:#111;font-family:monospace">${referenceNumber}</strong>
          </p>

          <!-- Adressen -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:13px;color:#888;width:40%">Ophaaladres</td>
              <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;font-weight:500;text-align:right">${payload.fromAddress.fullAddress}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:13px;color:#888">Afleveradres</td>
              <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;font-weight:500;text-align:right">${payload.toAddress.fullAddress}</td>
            </tr>
          </table>

          <!-- Items -->
          <p style="margin:0 0 8px;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;color:#888">Items</p>
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;font-size:14px">
            ${itemsHtml}
          </table>

          <!-- Datum & tijd -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:13px;color:#888;width:40%">Datum</td>
              <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;font-weight:500;text-align:right">${formatDate(payload.selectedDate)}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:13px;color:#888">Tijdvak</td>
              <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;font-weight:500;text-align:right">${tijdvak}</td>
            </tr>
          </table>

          <!-- Prijs -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px">
            <tr>
              <td style="padding:12px 0;font-size:14px;font-weight:600">Totaalprijs</td>
              <td style="padding:12px 0;font-size:18px;font-weight:700;text-align:right">${formatPrice(payload.priceCents)}</td>
            </tr>
            <tr>
              <td colspan="2" style="font-size:11px;color:#aaa">incl. btw</td>
            </tr>
          </table>

          <!-- Tijdinformatie -->
          <div style="background:#f9f9f9;border-radius:8px;padding:16px;margin-bottom:24px;font-size:13px;color:#555">
            <p style="margin:0 0 6px;font-weight:600;color:#111">Tijdinformatie</p>
            <p style="margin:0">Inclusief 15 min laden en 15 min lossen. Extra tijd wordt gefactureerd à €25 per 15 minuten.</p>
          </div>

          <p style="margin:0;font-size:13px;color:#888">
            Vragen? Bel ons op <a href="tel:+31201234567" style="color:#111">+31 20 123 45 67</a>
          </p>
        </td></tr>

        <!-- Footer -->
        <tr><td style="padding:16px 32px;border-top:1px solid #f0f0f0;font-size:12px;color:#aaa">
          BusjeDirect · Bereikbaar op werkdagen van 08:00 tot 20:00
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

/**
 * Stuurt een bevestigingsmail naar de klant.
 * Gooit een fout als de e-mail niet verstuurd kan worden.
 */
export async function sendCustomerEmail(
  payload: CreateRequestPayload,
  referenceNumber: string
): Promise<void> {
  await sendEmail({
    to: payload.email,
    subject: `Je aanvraag is ontvangen — ${referenceNumber}`,
    html: buildCustomerHtml(payload, referenceNumber),
  });
}

import { sendEmail } from "./resend-client";
import type { CreateRequestPayload } from "@/features/request/types/request.types";
import { formatPrice, formatDate } from "@/lib/utils/format";
import { TIME_SLOT_MAP } from "@/features/request/constants/time-slots";

// ---------------------------------------------------------------------------
// Gedeelde logo HTML — werkt in alle e-mailclients
// ---------------------------------------------------------------------------

const LOGO_HTML = `
  <span style="font-size:20px;font-weight:800;letter-spacing:-0.5px;color:#fff">
    Busje<span style="color:#E31B1B">Direct</span>
  </span>
`;

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
          <td style="padding:6px 0;border-bottom:1px solid #f0f0f0;font-size:14px">${item.label}</td>
          <td style="padding:6px 0;border-bottom:1px solid #f0f0f0;font-size:14px;text-align:right;color:#555">${item.aantal}×</td>
        </tr>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="nl">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f5f5f4;font-family:system-ui,-apple-system,sans-serif;color:#111">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f4;padding:32px 16px">
    <tr><td align="center">
      <table width="100%" style="max-width:560px;background:#fff;border-radius:12px;border:1px solid #e5e5e5;overflow:hidden">

        <!-- Header -->
        <tr><td style="background:#111111;padding:20px 32px">
          ${LOGO_HTML}
        </td></tr>

        <!-- Body -->
        <tr><td style="padding:32px">

          <h1 style="margin:0 0 8px;font-size:22px;font-weight:700;color:#111">Je aanvraag is ontvangen!</h1>
          <p style="margin:0 0 24px;color:#555;font-size:15px;line-height:1.6">
            Bedankt, ${payload.firstName}. We nemen zo snel mogelijk contact met je op om de aanvraag te bevestigen.
          </p>

          <!-- Referentie -->
          <div style="background:#f5f5f4;border-radius:8px;padding:12px 16px;margin-bottom:24px">
            <p style="margin:0;font-size:12px;color:#888;text-transform:uppercase;letter-spacing:.05em;font-weight:600">Referentienummer</p>
            <p style="margin:4px 0 0;font-size:16px;font-weight:700;font-family:monospace;color:#111">${referenceNumber}</p>
          </div>

          <!-- Adressen -->
          <p style="margin:0 0 8px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;color:#888">Route</p>
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:13px;color:#888;width:40%">Ophaaladres</td>
              <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;font-weight:500;text-align:right">${payload.fromAddress.fullAddress}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;font-size:13px;color:#888">Afleveradres</td>
              <td style="padding:10px 0;font-size:14px;font-weight:500;text-align:right">${payload.toAddress.fullAddress}</td>
            </tr>
          </table>

          <!-- Items -->
          <p style="margin:0 0 8px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;color:#888">Items</p>
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;font-size:14px">
            ${itemsHtml}
          </table>

          <!-- Datum & tijd -->
          <p style="margin:0 0 8px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;color:#888">Planning</p>
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:13px;color:#888;width:40%">Datum</td>
              <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;font-weight:500;text-align:right">${formatDate(payload.selectedDate)}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;font-size:13px;color:#888">Tijdvak</td>
              <td style="padding:10px 0;font-size:14px;font-weight:500;text-align:right">${tijdvak}</td>
            </tr>
          </table>

          <!-- Prijs -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;border-top:2px solid #111">
            <tr>
              <td style="padding:12px 0 4px;font-size:14px;font-weight:600">Totaalprijs</td>
              <td style="padding:12px 0 4px;font-size:20px;font-weight:700;text-align:right">${formatPrice(payload.priceCents)}</td>
            </tr>
            <tr>
              <td colspan="2" style="font-size:12px;color:#aaa;padding-bottom:12px">excl. btw</td>
            </tr>
          </table>

          <!-- Tijdinformatie -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px">
            <tr>
              <td style="padding:0 0 12px">
                <div style="background:#f0fdf4;border-radius:8px;padding:12px 16px;margin-bottom:8px">
                  <p style="margin:0 0 6px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;color:#166534">Inbegrepen in de prijs</p>
                  <p style="margin:0 0 4px;font-size:13px;color:#15803d">&#10003;&nbsp; 15 minuten laadtijd</p>
                  <p style="margin:0;font-size:13px;color:#15803d">&#10003;&nbsp; 15 minuten lostijd</p>
                </div>
                <div style="background:#fffbeb;border:1px solid #fde68a;border-radius:8px;padding:12px 16px">
                  <p style="margin:0 0 6px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;color:#92400e">Mogelijke extra kosten</p>
                  <p style="margin:0 0 4px;font-size:13px;color:#78350f">+ &nbsp;<strong>&#8364;25 per kwartier</strong> als het inladen of uitladen langer duurt dan 15 minuten</p>
                  <p style="margin:0;font-size:13px;color:#78350f">+ &nbsp;<strong>&#8364;15 per adres</strong> binnen de Ring Amsterdam</p>
                </div>
              </td>
            </tr>
          </table>

          <p style="margin:0;font-size:13px;color:#888;line-height:1.6">
            Vragen? Bel ons op <a href="tel:0631356682" style="color:#111;font-weight:600">06 31 35 66 82</a>
            of mail naar <a href="mailto:info@busjedirect.nl" style="color:#111">info@busjedirect.nl</a>
          </p>

        </td></tr>

        <!-- Footer -->
        <tr><td style="padding:16px 32px;border-top:1px solid #f0f0f0;font-size:12px;color:#aaa">
          BusjeDirect &middot; Gevestigd in Diemen &middot; Bereikbaar ma&ndash;zo 09:00&ndash;22:00
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function sendCustomerEmail(
  payload: CreateRequestPayload,
  referenceNumber: string
): Promise<void> {
  await sendEmail({
    to: payload.email,
    subject: `Aanvraag ontvangen — ${referenceNumber}`,
    html: buildCustomerHtml(payload, referenceNumber),
  });
}

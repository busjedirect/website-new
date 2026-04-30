import { sendEmail } from "./resend-client";
import { serverEnv } from "../env/env";
import type { CreateRequestPayload } from "@/features/request/types/request.types";
import { formatPrice, formatDate } from "@/lib/utils/format";
import { TIME_SLOT_MAP } from "@/features/request/constants/time-slots";

const LOGO_HTML = `
  <span style="font-size:20px;font-weight:800;letter-spacing:-0.5px;color:#E31B1B">
    BusjeDirect
  </span>
`;

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
          <td style="padding:6px 0;border-bottom:1px solid #f0f0f0;font-size:14px;text-align:right;color:#555">${item.aantal}×${item.opmerking ? ` &middot; ${item.opmerking}` : ""}</td>
        </tr>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="nl">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f5f5f4;font-family:system-ui,-apple-system,sans-serif;color:#111">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f4;padding:32px 16px">
    <tr><td align="center">
      <table width="100%" style="max-width:560px;background:#fff;border-radius:12px;border:1px solid #e5e5e5;overflow:hidden">

        <!-- Header -->
        <tr><td style="background:#111111;padding:20px 32px">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td>${LOGO_HTML}</td>
              <td style="text-align:right">
                <span style="background:#E31B1B;color:#fff;font-size:11px;font-weight:700;padding:4px 10px;border-radius:20px;text-transform:uppercase;letter-spacing:.05em">Nieuwe aanvraag</span>
              </td>
            </tr>
          </table>
        </td></tr>

        <tr><td style="padding:32px">

          <!-- Referentie -->
          <div style="background:#f5f5f4;border-radius:8px;padding:12px 16px;margin-bottom:24px">
            <p style="margin:0;font-size:12px;color:#888;text-transform:uppercase;letter-spacing:.05em;font-weight:600">Referentienummer</p>
            <p style="margin:4px 0 0;font-size:18px;font-weight:700;font-family:monospace;color:#111">${referenceNumber}</p>
          </div>

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
                <a href="tel:${payload.phone}" style="color:#111;font-weight:500">${payload.phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 0;font-size:13px;color:#888">E-mail</td>
              <td style="padding:8px 0;font-size:14px;text-align:right">
                <a href="mailto:${payload.email}" style="color:#111;font-weight:500">${payload.email}</a>
              </td>
            </tr>
          </table>

          <!-- Route -->
          <p style="margin:0 0 8px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;color:#888">Route</p>
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px">
            <tr>
              <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;font-size:13px;color:#888;width:40%">Ophaaladres</td>
              <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;font-size:14px;font-weight:500;text-align:right">${payload.fromAddress.fullAddress}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;font-size:13px;color:#888">Afleveradres</td>
              <td style="padding:8px 0;font-size:14px;font-weight:500;text-align:right">${payload.toAddress.fullAddress}</td>
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
              <td style="padding:8px 0;font-size:13px;color:#888">Tijdvak</td>
              <td style="padding:8px 0;font-size:14px;font-weight:500;text-align:right">${tijdvak}</td>
            </tr>
          </table>

          <!-- Prijs -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;border-top:2px solid #111">
            <tr>
              <td style="padding:12px 0 4px;font-size:13px;color:#888">Subtotaal excl. btw</td>
              <td style="padding:12px 0 4px;font-size:14px;font-weight:500;text-align:right">${formatPrice(payload.priceCents)}</td>
            </tr>
            <tr>
              <td style="padding:4px 0;font-size:13px;color:#888">BTW (21%)</td>
              <td style="padding:4px 0;font-size:14px;font-weight:500;text-align:right">${formatPrice(Math.round(payload.priceCents * 0.21))}</td>
            </tr>
            <tr style="border-top:1px solid #e5e5e5">
              <td style="padding:10px 0 4px;font-size:14px;font-weight:700">Totaal incl. btw</td>
              <td style="padding:10px 0 4px;font-size:20px;font-weight:700;text-align:right">${formatPrice(Math.round(payload.priceCents * 1.21))}</td>
            </tr>
          </table>

          <!-- Tijdinformatie -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px">
            <tr>
              <td>
                <div style="background:#f0fdf4;border-radius:8px;padding:12px 16px;margin-bottom:8px">
                  <p style="margin:0 0 6px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;color:#166534">Inbegrepen</p>
                  <p style="margin:0 0 4px;font-size:13px;color:#15803d">&#10003;&nbsp; 15 minuten laadtijd</p>
                  <p style="margin:0;font-size:13px;color:#15803d">&#10003;&nbsp; 15 minuten lostijd</p>
                </div>
                <div style="background:#fffbeb;border:1px solid #fde68a;border-radius:8px;padding:12px 16px">
                  <p style="margin:0 0 6px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;color:#92400e">Mogelijke extra kosten</p>
                  <p style="margin:0 0 4px;font-size:13px;color:#78350f">+ &nbsp;<strong>&#8364;25 per 20 minuten</strong> extra wachttijd als het laden of lossen langer duurt dan 15 minuten</p>
                  <p style="margin:0;font-size:13px;color:#78350f">+ &nbsp;<strong>&#8364;15 per adres</strong> in drukke delen van Amsterdam (grachten, smalle straten of moeilijk bereikbare plekken)</p>
                </div>
              </td>
            </tr>
          </table>

          ${payload.note ? `
          <!-- Opmerking klant -->
          <div style="background:#fffbeb;border:1px solid #fde68a;border-radius:8px;padding:12px 16px;margin-bottom:24px">
            <p style="margin:0 0 4px;font-size:12px;font-weight:600;color:#92400e;text-transform:uppercase;letter-spacing:.05em">Opmerking klant</p>
            <p style="margin:0;font-size:14px;color:#111">${payload.note}</p>
          </div>` : ""}

          <!-- Akkoord -->
          <p style="margin:0;font-size:13px;color:#888">
            Akkoord algemene voorwaarden: <strong style="color:#111">Ja</strong>
          </p>

        </td></tr>

        <!-- Footer -->
        <tr><td style="padding:16px 32px;border-top:1px solid #f0f0f0;font-size:12px;color:#aaa">
          BusjeDirect &middot; Gevestigd in Diemen
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

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

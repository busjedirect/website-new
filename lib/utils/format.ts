/**
 * Centrale presentatie-helpers.
 * Gebruik deze functies overal waar bedragen of datums worden getoond.
 */

/** Formatteert centen naar een leesbare euro-string met 2 decimalen */
export function formatPrice(cents: number): string {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(cents / 100);
}

/**
 * Formatteert een ISO 8601 datumstring naar een leesbare Nederlandse datum.
 * Gebruikt lokale datum-parsing om UTC-verschuiving te vermijden.
 */
export function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat("nl-NL", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(year, month - 1, day));
}

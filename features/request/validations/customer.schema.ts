// ---------------------------------------------------------------------------
// Validatieregels voor klantgegevens
// Puur functioneel — geen externe library, makkelijk uitbreidbaar.
// ---------------------------------------------------------------------------

export interface CustomerFieldErrors {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
}

// ---------------------------------------------------------------------------
// Veld-validators
// ---------------------------------------------------------------------------

export function validateFirstName(value: string): string | undefined {
  if (!value.trim()) return "Voornaam is verplicht.";
  if (value.trim().length < 2) return "Voornaam moet minimaal 2 tekens bevatten.";
}

export function validateLastName(value: string): string | undefined {
  if (!value.trim()) return "Achternaam is verplicht.";
  if (value.trim().length < 2) return "Achternaam moet minimaal 2 tekens bevatten.";
}

/**
 * Accepteert Nederlandse en internationale formaten:
 * +31612345678 · 0612345678 · 06 12345678 · +31 6 12345678
 */
export function validatePhone(value: string): string | undefined {
  if (!value.trim()) return "Telefoonnummer is verplicht.";
  const digits = value.replace(/[\s\-().]/g, "");
  const valid = /^(\+?[0-9]{7,15})$/.test(digits);
  if (!valid) return "Vul een geldig telefoonnummer in.";
}

export function validateEmail(value: string): string | undefined {
  if (!value.trim()) return "E-mailadres is verplicht.";
  // RFC-5322 vereenvoudigd: lokaal@domein.tld
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
  if (!valid) return "Vul een geldig e-mailadres in.";
}

// ---------------------------------------------------------------------------
// Formulier-validator — geeft alle fouten tegelijk terug
// ---------------------------------------------------------------------------

export function validateCustomerForm(fields: {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}): CustomerFieldErrors {
  return {
    firstName: validateFirstName(fields.firstName),
    lastName: validateLastName(fields.lastName),
    phone: validatePhone(fields.phone),
    email: validateEmail(fields.email),
  };
}

export function hasCustomerFormErrors(errors: CustomerFieldErrors): boolean {
  return Object.values(errors).some(Boolean);
}

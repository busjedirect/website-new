"use client";

import { PhoneInputField } from "./phone-input-field";
import { EmailInputField } from "./email-input-field";
import {
  validateCustomerForm,
} from "../../validations/customer.schema";

// ---------------------------------------------------------------------------
// Shared input style
// ---------------------------------------------------------------------------

const inputClass = (hasError: boolean) =>
  [
    "w-full rounded-lg border px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400",
    "outline-none transition focus:ring-2 focus:ring-zinc-900/8",
    hasError
      ? "border-red-400 focus:border-red-500"
      : "border-zinc-200 bg-white focus:border-zinc-900",
  ].join(" ");

// ---------------------------------------------------------------------------
// TextField sub-component
// ---------------------------------------------------------------------------

interface TextFieldProps {
  id: string;
  label: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  onBlur: () => void;
  error?: string;
  placeholder?: string;
  autoComplete?: string;
}

function TextField({ id, label, required, value, onChange, onBlur, error, placeholder, autoComplete }: TextFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-medium uppercase tracking-wide text-zinc-400">
        {label}
        {required && <span className="ml-1 text-zinc-300">*</span>}
      </label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={inputClass(!!error)}
      />
      {error && (
        <p id={`${id}-error`} className="text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Props — accepts lifted form state from CustomerPageView
// ---------------------------------------------------------------------------

interface FormState {
  firstName: string; setFirstName: (v: string) => void;
  lastName: string; setLastName: (v: string) => void;
  phone: string; setPhone: (v: string) => void;
  email: string; setEmail: (v: string) => void;
  note: string; setNote: (v: string) => void;
  touched: Record<"firstName" | "lastName" | "phone" | "email", boolean>;
  touch: (field: "firstName" | "lastName" | "phone" | "email") => void;
  errors: ReturnType<typeof validateCustomerForm>;
  handleSubmit: (e?: React.FormEvent) => void;
}

interface CustomerDetailsFormProps {
  formId?: string;
  formState: FormState;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function CustomerDetailsForm({
  formId = "customer-form",
  formState,
}: CustomerDetailsFormProps) {
  const {
    firstName, setFirstName,
    lastName, setLastName,
    phone, setPhone,
    email, setEmail,
    note, setNote,
    touched, touch,
    errors,
    handleSubmit,
  } = formState;

  return (
    <form id={formId} onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <TextField
          id="voornaam" label="Voornaam" required
          value={firstName} onChange={setFirstName} onBlur={() => touch("firstName")}
          error={touched.firstName ? errors.firstName : undefined}
          placeholder="Jan" autoComplete="given-name"
        />
        <TextField
          id="achternaam" label="Achternaam" required
          value={lastName} onChange={setLastName} onBlur={() => touch("lastName")}
          error={touched.lastName ? errors.lastName : undefined}
          placeholder="de Vries" autoComplete="family-name"
        />
      </div>

      <PhoneInputField
        value={phone}
        onChange={setPhone}
        onBlur={() => touch("phone")}
        showError={touched.phone}
      />

      <EmailInputField
        value={email}
        onChange={setEmail}
        onBlur={() => touch("email")}
        showError={touched.email}
      />

      <div className="flex flex-col gap-1.5">
        <label htmlFor="opmerking" className="text-xs font-medium uppercase tracking-wide text-zinc-400">
          Opmerking
        </label>
        <textarea
          id="opmerking"
          rows={3}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Bijv. toegangscode gebouw, specifieke wensen…"
          className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/8"
        />
      </div>

      <p className="text-xs text-zinc-400">* Verplicht veld</p>
    </form>
  );
}

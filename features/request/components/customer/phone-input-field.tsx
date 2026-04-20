"use client";

import { validatePhone } from "../../validations/customer.schema";

const inputClass = (hasError: boolean) =>
  [
    "w-full rounded-lg border px-4 py-3 text-sm text-gray-900 placeholder-gray-400",
    "outline-none transition focus:ring-2 focus:ring-gray-900/10",
    hasError
      ? "border-red-400 focus:border-red-500"
      : "border-gray-300 bg-white focus:border-gray-900",
  ].join(" ");

interface PhoneInputFieldProps {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  showError: boolean;
}

export function PhoneInputField({
  id = "telefoon",
  value,
  onChange,
  onBlur,
  showError,
}: PhoneInputFieldProps) {
  const error = showError ? validatePhone(value) : undefined;

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        Telefoonnummer <span className="text-gray-400">*</span>
      </label>
      <input
        id={id}
        type="tel"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder="+31 6 12345678"
        autoComplete="tel"
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={inputClass(!!error)}
      />
      {error && (
        <p id={`${id}-error`} className="text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

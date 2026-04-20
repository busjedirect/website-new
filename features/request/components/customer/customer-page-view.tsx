"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CustomerDetailsForm } from "./customer-details-form";
import { RequestSummary } from "@/components/summary/request-summary";
import { MobileBottomBar } from "@/components/summary/mobile-bottom-bar";
import { useRequestStore as useStore } from "../../store/request-store";
import {
  validateCustomerForm,
  hasCustomerFormErrors,
} from "../../validations/customer.schema";

// ---------------------------------------------------------------------------
// Shared form state — lifted up so both desktop CTA and mobile CTA
// can trigger the exact same validated submit logic
// ---------------------------------------------------------------------------

interface UseCustomerFormReturn {
  firstName: string; setFirstName: (v: string) => void;
  lastName: string; setLastName: (v: string) => void;
  phone: string; setPhone: (v: string) => void;
  email: string; setEmail: (v: string) => void;
  note: string; setNote: (v: string) => void;
  touched: Record<"firstName" | "lastName" | "phone" | "email", boolean>;
  touch: (field: "firstName" | "lastName" | "phone" | "email") => void;
  errors: ReturnType<typeof validateCustomerForm>;
  isValid: boolean;
  handleSubmit: (e?: React.FormEvent) => void;
}

function useCustomerForm(): UseCustomerFormReturn {
  const router = useRouter();
  const setCustomerDetails = useStore((s) => s.setCustomerDetails);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");

  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    phone: false,
    email: false,
  });

  function touch(field: keyof typeof touched) {
    setTouched((prev) => ({ ...prev, [field]: true }));
  }

  const errors = validateCustomerForm({ firstName, lastName, phone, email });
  const isValid = !hasCustomerFormErrors(errors);

  function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    // Mark all fields as touched so errors become visible
    setTouched({ firstName: true, lastName: true, phone: true, email: true });
    if (!isValid) return;
    setCustomerDetails(firstName, lastName, phone, email, note);
    router.push("/aanvraag/bevestigen");
  }

  return {
    firstName, setFirstName,
    lastName, setLastName,
    phone, setPhone,
    email, setEmail,
    note, setNote,
    touched, touch,
    errors, isValid,
    handleSubmit,
  };
}

// ---------------------------------------------------------------------------
// Mobile bottom bar
// ---------------------------------------------------------------------------

interface MobileBottomBarProps {
  onSubmit: () => void;
}

function CustomerMobileBar({ onSubmit }: MobileBottomBarProps) {
  const cta = (
    <button
      type="button"
      onClick={onSubmit}
      className="rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-700 active:scale-[0.98]"
    >
      Ga verder
    </button>
  );
  return <MobileBottomBar cta={cta} />;
}

// ---------------------------------------------------------------------------
// Page view
// ---------------------------------------------------------------------------

export function CustomerPageView() {
  const form = useCustomerForm();

  return (
    <div className="pb-20 lg:pb-0">
      {/* Desktop */}
      <div className="hidden lg:flex lg:gap-6 lg:items-start">
        <div className="flex-1 rounded-xl border border-zinc-200 bg-white p-6">
          <CustomerDetailsForm
            formId="customer-form"
            formState={form}
          />
        </div>
        <div className="w-72 shrink-0 lg:sticky lg:top-6">
          <RequestSummary
            title="Jouw aanvraag"
            cta={
              <button
                type="submit"
                form="customer-form"
                className="w-full rounded-lg bg-zinc-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700 active:scale-[0.98]"
              >
                Ga verder
              </button>
            }
          />
        </div>
      </div>

      {/* Mobiel */}
      <div className="flex flex-col gap-4 lg:hidden">
        <div className="rounded-xl border border-zinc-200 bg-white p-5">
          <CustomerDetailsForm
            formId="customer-form"
            formState={form}
          />
        </div>
      </div>

      {/* Mobile sticky bar — uses direct handler, not form attribute */}
      <CustomerMobileBar onSubmit={form.handleSubmit} />
    </div>
  );
}

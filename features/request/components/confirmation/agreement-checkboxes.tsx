"use client";

interface CheckboxRowProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  children: React.ReactNode;
}

function CheckboxRow({ id, checked, onChange, children }: CheckboxRowProps) {
  return (
    <label
      htmlFor={id}
      className={[
        "flex cursor-pointer items-start gap-4 rounded-lg border p-4 transition-all duration-150",
        checked
          ? "border-zinc-900 bg-zinc-50"
          : "border-zinc-200 bg-white hover:border-zinc-400",
      ].join(" ")}
    >
      {/* Custom checkbox */}
      <div className="relative mt-0.5 shrink-0">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only"
        />
        <div
          className={[
            "flex h-4 w-4 items-center justify-center rounded border transition-all",
            checked ? "border-zinc-900 bg-zinc-900" : "border-zinc-300 bg-white",
          ].join(" ")}
        >
          {checked && (
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
      </div>
      <span className="text-sm leading-relaxed text-zinc-700">{children}</span>
    </label>
  );
}

interface AgreementCheckboxesProps {
  agreedToTerms: boolean;
  agreedToExtraTime: boolean;
  onTermsChange: (v: boolean) => void;
  onExtraTimeChange: (v: boolean) => void;
}

export function AgreementCheckboxes({
  agreedToTerms,
  agreedToExtraTime,
  onTermsChange,
  onExtraTimeChange,
}: AgreementCheckboxesProps) {
  return (
    <div className="flex flex-col gap-3">
      <CheckboxRow id="terms" checked={agreedToTerms} onChange={onTermsChange}>
        Ik ga akkoord met de{" "}
        <span className="font-medium text-zinc-900 underline underline-offset-2">
          algemene voorwaarden
        </span>{" "}
        van BusjeDirect.
      </CheckboxRow>

      <CheckboxRow id="extra-time" checked={agreedToExtraTime} onChange={onExtraTimeChange}>
        Ik begrijp dat extra tijd{" "}
        <span className="font-medium text-zinc-900">(€25 per 15 minuten)</span>{" "}
        in rekening kan worden gebracht als de rit langer duurt dan gepland.
      </CheckboxRow>
    </div>
  );
}

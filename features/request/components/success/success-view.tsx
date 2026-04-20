"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useRequestStore } from "../../store/request-store";
import { SuccessMessage } from "./success-message";
import { RequestReceipt } from "./request-receipt";
import { NextStepsCard } from "./next-steps-card";

export function SuccessView() {
  const router = useRouter();
  const receipt = useRequestStore((s) => s.submittedReceipt);

  useEffect(() => {
    if (!receipt) router.replace("/");
  }, [receipt, router]);

  if (!receipt) return null;

  return (
    <div className="flex flex-col gap-6">
      <SuccessMessage
        firstName={receipt.firstName}
        referenceNumber={receipt.referenceNumber}
      />

      <RequestReceipt
        fromAddress={receipt.fromAddress}
        toAddress={receipt.toAddress}
        items={receipt.items}
        selectedDate={receipt.selectedDate}
        selectedTimeSlot={receipt.selectedTimeSlot}
        priceCents={receipt.priceCents}
      />

      <NextStepsCard />

      <div className="rounded-xl border border-zinc-200 bg-white p-5 text-center">
        <p className="text-sm font-medium text-zinc-700">Spoed? Bel ons direct.</p>
        <a
          href="tel:+31201234567"
          className="mt-1.5 inline-block text-lg font-bold text-zinc-900 hover:text-zinc-600"
        >
          +31 20 123 45 67
        </a>
        <p className="mt-1 text-xs text-zinc-400">Werkdagen 08:00 – 20:00</p>
      </div>

      <div className="text-center">
        <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-700">
          Terug naar de homepage
        </Link>
      </div>
    </div>
  );
}

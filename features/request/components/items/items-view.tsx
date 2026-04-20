"use client";

import { ItemSelector } from "./item-selector";
import { RequestSummary } from "@/components/summary/request-summary";
import { SummaryCTA } from "@/components/summary/summary-cta";
import { MobileBottomBar } from "@/components/summary/mobile-bottom-bar";
import { useRequestStore } from "../../store/request-store";
import { hasItems } from "../../store/request-selectors";
import Link from "next/link";

export function ItemsView() {
  const canProceed = useRequestStore(hasItems);

  const cta = (
    <Link
      href="/aanvraag/datum-tijd"
      aria-disabled={!canProceed}
      tabIndex={canProceed ? undefined : -1}
      className={[
        "rounded-lg px-5 py-2.5 text-sm font-semibold transition",
        canProceed
          ? "bg-zinc-900 text-white hover:bg-zinc-700 active:scale-[0.98]"
          : "pointer-events-none bg-zinc-100 text-zinc-400",
      ].join(" ")}
    >
      Ga verder
    </Link>
  );

  return (
    <div className="min-h-screen bg-[#f5f5f4] pb-20 lg:pb-0">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">

        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400">
            Stap 1 van 4
          </p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            Wat wil je laten vervoeren?
          </h1>
          <p className="mt-2 text-sm text-zinc-500">
            Selecteer items en vul de details in.
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden lg:flex lg:gap-6 lg:items-start">
          <div className="flex-1">
            <ItemSelector />
          </div>
          <div className="w-72 shrink-0 lg:sticky lg:top-6">
            <RequestSummary
              title="Jouw aanvraag"
              cta={
                <SummaryCTA
                  href="/aanvraag/datum-tijd"
                  label="Ga verder"
                  disabled={!canProceed}
                  hint={!canProceed ? "Voeg minimaal één item toe." : undefined}
                />
              }
            />
          </div>
        </div>

        {/* Mobiel */}
        <div className="flex flex-col gap-4 lg:hidden">
          <ItemSelector />
        </div>

      </div>

      <MobileBottomBar cta={cta} />
    </div>
  );
}

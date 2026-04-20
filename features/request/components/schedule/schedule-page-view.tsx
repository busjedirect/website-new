"use client";

import { ScheduleSelector } from "./schedule-selector";
import { RequestSummary } from "@/components/summary/request-summary";
import { SummaryCTA } from "@/components/summary/summary-cta";
import { MobileBottomBar } from "@/components/summary/mobile-bottom-bar";
import { useRequestStore } from "../../store/request-store";
import { hasSchedule } from "../../store/request-selectors";
import Link from "next/link";

export function SchedulePageView() {
  const canProceed = useRequestStore(hasSchedule);

  const cta = (
    <Link
      href="/aanvraag/gegevens"
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
    <div className="pb-20 lg:pb-0">
      {/* Desktop */}
      <div className="hidden lg:flex lg:gap-6 lg:items-start">
        <div className="flex-1">
          <ScheduleSelector />
        </div>
        <div className="w-72 shrink-0 lg:sticky lg:top-6">
          <RequestSummary
            title="Jouw aanvraag"
            cta={
              <SummaryCTA
                href="/aanvraag/gegevens"
                label="Ga verder"
                disabled={!canProceed}
                hint={!canProceed ? "Kies een datum en tijdvak." : undefined}
              />
            }
          />
        </div>
      </div>

      {/* Mobiel */}
      <div className="flex flex-col gap-4 lg:hidden">
        <ScheduleSelector />
      </div>

      <MobileBottomBar cta={cta} />
    </div>
  );
}

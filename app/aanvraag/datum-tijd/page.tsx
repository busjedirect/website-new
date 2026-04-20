import { ScheduleSelector } from "@/features/request/components/schedule/schedule-selector";
import { RequestSummary } from "@/components/summary/request-summary";
import { SchedulePageView } from "@/features/request/components/schedule/schedule-page-view";

export default function DatumTijdPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f4]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400">
            Stap 2 van 4
          </p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            Wanneer wil je laten vervoeren?
          </h1>
          <p className="mt-2 text-sm text-zinc-500">
            Kies een datum en tijdvak waarop we kunnen ophalen.
          </p>
        </div>
        <SchedulePageView />
      </div>
    </div>
  );
}

import { CustomerPageView } from "@/features/request/components/customer/customer-page-view";

export default function GegevensPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f4]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400">
            Stap 3 van 4
          </p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            Jouw gegevens
          </h1>
          <p className="mt-2 text-sm text-zinc-500">
            Vul je contactgegevens in zodat we de aanvraag kunnen bevestigen.
          </p>
        </div>
        <CustomerPageView />
      </div>
    </div>
  );
}

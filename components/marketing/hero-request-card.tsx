import { AddressHeroForm } from "@/features/request/components/address/address-hero-form";

export function HeroRequestCard() {
  return (
    <section className="w-full max-w-xl">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
        Transport nodig?{" "}
        <span className="whitespace-nowrap">Snel geregeld vanaf €75.</span>
      </h1>
      <p className="mt-3 text-base leading-relaxed text-zinc-500">
        Drempel tot drempel transport voor particulieren en bedrijven.
        Van pakketten en meubels tot verhuizingen — snel geregeld.
      </p>
      <div className="mt-8 rounded-xl border border-zinc-200 bg-white p-6">
        <AddressHeroForm />
      </div>
    </section>
  );
}

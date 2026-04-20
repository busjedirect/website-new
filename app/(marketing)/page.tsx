import { HeroRequestCard } from "@/components/marketing/hero-request-card";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <section className="flex min-h-screen flex-col items-center justify-center bg-[#f5f5f4] px-4 py-20 sm:py-28">
        <HeroRequestCard />
      </section>
    </main>
  );
}

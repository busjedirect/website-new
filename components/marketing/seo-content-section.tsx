import Link from "next/link";

const POPULAR_SERVICES = [
  "Bank vervoeren",
  "Wasmachine vervoeren",
  "Marktplaats ophaalservice",
  "Kleine verhuizing",
  "Meubeltransport",
  "IKEA ophaalservice",
];

export function SeoContentSection() {
  return (
    <section className="bg-[#F5F6F7] py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">

          {/* Left — SEO text */}
          <div className="flex-1">
            <h2 className="mb-4 text-[20px] font-extrabold text-[#111111] sm:text-[22px]">
              Groot vervoer snel en betrouwbaar geregeld
            </h2>
            <p className="text-[13px] leading-relaxed text-zinc-600">
              BusjeDirect is de transportservice voor het vervoeren van grote en onhandige spullen. Of het nu gaat om een bank, wasmachine, kast, matras, dozen of een Marktplaats aankoop: wij brengen het snel en veilig van A naar B. Met onze bus met chauffeur ben je verzekerd van een zorgeloze ervaring, zonder gedoe en tegen een transparante prijs.
            </p>
          </div>

          {/* Right — popular services */}
          <div className="lg:w-64 lg:shrink-0">
            <h3 className="mb-4 text-[15px] font-bold text-[#111111]">Populaire diensten</h3>
            <ul className="flex flex-col gap-2.5">
              {POPULAR_SERVICES.map((service) => (
                <li key={service} className="flex items-center gap-2">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#FF7A00]" aria-hidden="true" />
                  <Link href="/diensten" className="text-[13px] text-zinc-700 hover:text-[#FF7A00] hover:underline">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

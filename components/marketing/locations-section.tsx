const CITIES = [
  "Amsterdam", "Utrecht", "Rotterdam", "Den Haag",
  "Eindhoven", "Haarlem", "Leiden", "Almere",
  "Breda", "Nijmegen", "Groningen", "Tilburg",
];

export function LocationsSection() {
  return (
    <section className="bg-[#F8F8F7] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-20">

          {/* Left */}
          <div className="lg:max-w-sm lg:shrink-0">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-400">
              Werkgebied
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
              Actief in heel Nederland.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              Van grote steden tot kleinere gemeenten. We rijden door het hele land.
            </p>
          </div>

          {/* Cities */}
          <div className="flex flex-wrap gap-2">
            {CITIES.map((city) => (
              <span
                key={city}
                className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700"
              >
                {city}
              </span>
            ))}
            <span className="rounded-lg border border-dashed border-zinc-300 px-4 py-2 text-sm text-zinc-400">
              En meer
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}

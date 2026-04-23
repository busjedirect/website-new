const USPS = [
  {
    title: "Snel geregeld",
    description: "Aanvraag in 2 minuten. Bevestiging dezelfde dag.",
  },
  {
    title: "Transparante prijs",
    description: "Je ziet de prijs vooraf. Geen verrassingen achteraf.",
  },
  {
    title: "Geen gedoe",
    description: "Geen bellen, geen onduidelijkheid. Alles online geregeld.",
  },
  {
    title: "Flexibel ingepland",
    description: "Kies zelf de datum en het tijdvak dat jou uitkomt.",
  },
];

export function UspSection() {
  return (
    <section className="bg-[#0F0F10] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 max-w-xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-600">
            Waarom BusjeDirect
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Transport zonder gedoe.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {USPS.map((usp) => (
            <div key={usp.title} className="flex flex-col gap-4">
              <div className="h-0.5 w-8 rounded-full bg-orange-500" aria-hidden="true" />
              <h3 className="text-lg font-bold text-white">{usp.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{usp.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

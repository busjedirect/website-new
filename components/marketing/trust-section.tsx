const REVIEWS = [
  {
    name: "Martijn V.",
    location: "Amsterdam",
    text: "Bank van Marktplaats opgehaald en dezelfde dag geleverd. Makkelijker kan niet.",
  },
  {
    name: "Sarah K.",
    location: "Utrecht",
    text: "Verhuizing soepel verlopen. Prijs was precies wat vooraf werd aangegeven.",
  },
  {
    name: "Thomas B.",
    location: "Rotterdam",
    text: "Snel gereageerd, netjes gewerkt. Zou het iedereen aanraden.",
  },
];

// Five-star SVG icon
function StarIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-orange-500"
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export function TrustSection() {
  return (
    <section className="bg-[#F8F8F7] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Klanten over ons
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
            Al door honderden klanten gebruikt.
          </h2>
        </div>

        {/* Reviews */}
        <div className="grid gap-5 sm:grid-cols-3">
          {REVIEWS.map((review) => (
            <div
              key={review.name}
              className="flex flex-col gap-5 rounded-2xl border border-zinc-200 bg-white p-7"
            >
              {/* Stars */}
              <div className="flex gap-0.5" aria-label="5 sterren">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              <p className="flex-1 text-sm leading-relaxed text-zinc-600">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="border-t border-zinc-100 pt-4">
                <p className="text-sm font-semibold text-zinc-900">{review.name}</p>
                <p className="text-xs text-zinc-400">{review.location}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

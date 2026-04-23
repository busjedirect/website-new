import Link from "next/link";

export function FinalCtaSection() {
  return (
    <section className="bg-orange-500 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">

          {/* Text */}
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Klaar om je transport te regelen?
            </h2>
            <p className="mt-3 text-base text-orange-100">
              Aanvraag in 2 minuten. Geen account nodig.
            </p>
          </div>

          {/* CTA */}
          <div className="w-full shrink-0 lg:w-auto">
            <Link
              href="/aanvraag/items"
              className="flex w-full items-center justify-center rounded-xl bg-white px-10 py-4 text-base font-semibold text-orange-600 transition hover:bg-orange-50 active:scale-[0.98] lg:w-auto"
            >
              Start aanvraag
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

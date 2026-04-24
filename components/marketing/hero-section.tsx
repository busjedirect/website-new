import Image from "next/image";
import { AddressHeroForm } from "@/features/request/components/address/address-hero-form";

const TRUST_ITEMS = [
  {
    label: "Snel geregeld",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    label: "Transparante prijs",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
  {
    label: "Geen borg",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: "Door heel Nederland",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
  {
    label: "Veilig vervoer",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
];

function ClockIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section aria-label="Hero" className="bg-[#f5f3f1]">

      {/* ================================================================
          DESKTOP (lg+)
      ================================================================ */}
      <div className="hidden lg:block">

        {/* Hero canvas — flex column, distributes space evenly */}
        <div
          className="relative flex w-full flex-col overflow-hidden"
          style={{ height: "calc(100vh - 4rem)" }}
        >

          {/* ── Visual layers (orange circle + bus PNG) sit behind content ── */}



          {/* Bus PNG — right side, bottom aligned with form card bottom.
              py-16 on the content group means form card bottom is ~64px
              from the canvas bottom, so we match that here. */}
          <Image
            src="/Hero_afbeelding5.png"
            alt="BusjeDirect transport — bestelbus met meubels"
            width={1536}
            height={1024}
            priority
            className="absolute z-[2]"
            style={{
              width: "44%",
              height: "auto",
              right: "12%",
              bottom: "330px",
            }}
          />

          {/* ── Content: headline + form as one grouped block, centred ── */}
          <div className="relative z-[3] flex flex-1 flex-col items-start justify-center mx-auto w-full max-w-[1200px] px-8 py-16">

            {/* Headline + subtext */}
            <div className="max-w-[420px]">
              <h1 className="text-[52px] font-extrabold leading-[1.04] tracking-tight text-[#111111]">
                Groot transport,
                <br />
                <span className="text-[#FF7A00]">zonder gedoe.</span>
              </h1>
              <p className="mt-5 text-[17px] leading-[1.65] text-zinc-600">
                Van banken en kasten tot witgoed en dozen: wij regelen jouw transport snel, veilig en zonder gedoe, door heel Nederland.
              </p>
            </div>

            {/* Form card — directly below headline, part of the same group */}
            <div className="mt-8 w-full z-[4]">
              <div className="rounded-[20px] bg-white px-8 py-7 shadow-[0_8px_48px_rgba(0,0,0,0.13)]">

                <div className="mb-5 flex items-center gap-1.5 text-[13.5px] font-semibold text-[#FF7A00]">
                  <ClockIcon />
                  Binnen 1 minuut een prijsindicatie
                </div>

                <AddressHeroForm />

                <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-zinc-100 pt-5">
                  {TRUST_ITEMS.map((item) => (
                    <span
                      key={item.label}
                      className="flex items-center gap-2 text-[13px] font-medium text-zinc-500"
                    >
                      <span className="text-zinc-400">{item.icon}</span>
                      {item.label}
                    </span>
                  ))}
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>

      {/* ================================================================
          MOBILE (< lg)
          Order: headline → subtext → image → form card → trust items
      ================================================================ */}
      <div className="lg:hidden bg-white">

        {/* Headline + subtext */}
        <div className="px-5 pt-7 pb-4">
          <h1 className="text-[36px] font-extrabold leading-[1.05] tracking-tight text-[#111111]">
            Groot transport,
            <br />
            <span className="text-[#FF7A00]">zonder gedoe.</span>
          </h1>
          <p className="mt-3 text-[15px] leading-[1.65] text-zinc-500">
            Van banken en kasten tot witgoed en dozen: wij regelen jouw transport snel, veilig en zonder gedoe, door heel Nederland.
          </p>
        </div>

        {/* Image — transparent PNG, flows naturally, no background box */}
        <div className="w-full px-4">
          <Image
            src="/Hero_afbeelding5.png"
            alt="BusjeDirect transport — bestelbus met meubels"
            width={1536}
            height={1024}
            priority
            className="w-full h-auto"
          />
        </div>

        {/* Form card */}
        <div className="px-4 pt-5 pb-2 -mt-16 relative z-10">
          <div className="rounded-[20px] bg-white px-5 py-6 shadow-[0_4px_28px_rgba(0,0,0,0.10)] border border-zinc-100">

            {/* "Binnen 1 minuut" label */}
            <div className="mb-4 flex items-center gap-1.5 text-[13px] font-semibold text-[#FF7A00]">
              <ClockIcon />
              Binnen 1 minuut een prijsindicatie
            </div>

            {/* Form */}
            <AddressHeroForm />

          </div>
        </div>

        {/* Trust items — vertical list */}
        <div className="px-5 pt-5 pb-8">
          <div className="flex flex-col gap-4">
            {TRUST_ITEMS.map((item) => (
              <span
                key={item.label}
                className="flex items-center gap-3 text-[14px] font-medium text-zinc-600"
              >
                <span className="text-zinc-400">{item.icon}</span>
                {item.label}
              </span>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}

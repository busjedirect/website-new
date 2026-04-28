import Image from "next/image";

// ---------------------------------------------------------------------------
// Icons
// ---------------------------------------------------------------------------

function ShieldIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  );
}

const USPS = [
  { icon: <ShieldIcon />, label: "Veilig transport" },
  { icon: <ClockIcon />,  label: "Snel geregeld" },
  { icon: <TagIcon />,    label: "Transparante prijs" },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function DienstenHero() {
  return (
    <section className="bg-[#F5F6F7] py-14 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">

          {/* Left: text */}
          <div className="flex-1">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#FF7A00]">
              Al onze diensten
            </p>
            <h1 className="text-[32px] font-extrabold leading-[1.1] tracking-tight text-[#111111] sm:text-[42px]">
              Al onze transportdiensten.{" "}
              <span className="text-[#FF7A00]">Snel, veilig en betrouwbaar.</span>
            </h1>
            <p className="mt-5 text-[15px] leading-[1.75] text-zinc-500">
              Van meubels tot machines en van kleine verhuizingen tot internationale zendingen. Wij regelen het transport voor particulieren en bedrijven, altijd tegen een transparante prijs.
            </p>

            {/* USPs */}
            <div className="mt-7 flex flex-wrap gap-4">
              {USPS.map((usp) => (
                <div key={usp.label} className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                  {usp.icon}
                  <span className="text-[13px] font-medium text-[#111111]">{usp.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: hero image */}
          <div className="w-full lg:w-[480px] lg:shrink-0">
            <div className="w-full overflow-hidden rounded-2xl bg-zinc-200" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/Diensten/Hero Diensten.png"
                alt="BusjeDirect transportdiensten"
                width={960}
                height={720}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

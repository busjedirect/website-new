// ---------------------------------------------------------------------------
// Icons
// ---------------------------------------------------------------------------

function MapPinIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2C8.69 2 6 4.69 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.31-2.69-6-6-6z" />
      <circle cx="12" cy="8" r="2" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1" y="7" width="15" height="11" rx="1.5" />
      <path d="M16 10h4l3 4v4h-7V10z" />
      <circle cx="5.5" cy="18.5" r="1.5" />
      <circle cx="18.5" cy="18.5" r="1.5" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const REASONS = [
  {
    icon: <MapPinIcon />,
    title: "Door heel Nederland",
    description: "Wij rijden vanuit Diemen door heel Nederland en zijn altijd dichtbij voor jouw transport.",
  },
  {
    icon: <UsersIcon />,
    title: "Ervaren professionals",
    description: "Onze chauffeurs zijn getraind en gaan zorgvuldig om met jouw spullen.",
  },
  {
    icon: <TruckIcon />,
    title: "Moderne busjes",
    description: "Onze vloot bestaat uit goed uitgeruste en schone voertuigen, geschikt voor elk transport.",
  },
  {
    icon: <ShieldIcon />,
    title: "Goed verzekerd",
    description: "Jouw spullen zijn altijd verzekerd tijdens het transport. Geen zorgen, geen gedoe.",
  },
];

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

export function DienstenWaarom() {
  return (
    <section className="bg-[#F5F6F7] py-14 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">

        <div className="mb-10 text-center">
          <h2 className="text-[26px] font-extrabold tracking-tight text-[#111111] sm:text-[32px]">
            Waarom kiezen voor BusjeDirect?
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {REASONS.map((r) => (
            <div key={r.title} className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF3E8]">
                {r.icon}
              </div>
              <h3 className="mt-4 text-[14px] font-bold text-[#111111]">{r.title}</h3>
              <p className="mt-1.5 text-[13px] leading-[1.6] text-zinc-500">{r.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

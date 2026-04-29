import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Contact",
  description: "Neem contact op met BusjeDirect. Bel, mail of stuur een WhatsApp bericht. Wij zijn bereikbaar van maandag tot zondag van 09:00 tot 22:00.",
};

function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E31B1B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E31B1B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E31B1B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E31B1B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E31B1B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2C8.69 2 6 4.69 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.31-2.69-6-6-6z" />
      <circle cx="12" cy="8" r="2" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

const CONTACT_ITEMS = [
  {
    icon: <PhoneIcon />,
    label: "Bellen",
    value: "06 31 35 66 82",
    href: "tel:0631356682",
    sub: "Wij nemen direct op",
  },
  {
    icon: <WhatsAppIcon />,
    label: "WhatsApp",
    value: "06 31 35 66 82",
    href: "https://wa.me/31631356682",
    sub: "Stuur een bericht",
  },
  {
    icon: <MailIcon />,
    label: "E-mail",
    value: "info@busjedirect.nl",
    href: "mailto:info@busjedirect.nl",
    sub: "Wij reageren snel",
  },
  {
    icon: <ClockIcon />,
    label: "Bereikbaar",
    value: "Ma – Zo 09:00 – 22:00",
    href: null,
    sub: "Inclusief weekenden",
  },
  {
    icon: <MapPinIcon />,
    label: "Gevestigd",
    value: "Diemen, Noord-Holland",
    href: null,
    sub: "KVK: 42018328",
  },
];

export default function ContactPage() {
  return (
    <>
      <main>
        {/* Hero */}
        <section className="bg-[#F5F6F7] py-14 sm:py-20">
          <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#E31B1B]">
              Contact
            </p>
            <h1 className="text-[32px] font-extrabold leading-[1.1] tracking-tight text-[#111111] sm:text-[44px]">
              Neem contact op
            </h1>
            <p className="mt-5 max-w-[520px] text-[15px] leading-[1.75] text-zinc-500">
              Heb je een vraag of wil je direct een transport regelen? Bel, mail of stuur een WhatsApp. Wij zijn zeven dagen per week bereikbaar.
            </p>
          </div>
        </section>

        {/* Contact cards */}
        <section className="bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {CONTACT_ITEMS.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-start gap-4 rounded-2xl border border-zinc-100 bg-[#F5F6F7] p-6 transition hover:border-[#E31B1B]/30 hover:bg-white hover:shadow-md"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFF0F0]">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[12px] font-semibold uppercase tracking-wide text-zinc-400">{item.label}</p>
                        <p className="mt-1 text-[15px] font-bold text-[#111111] group-hover:text-[#E31B1B]">{item.value}</p>
                        <p className="mt-0.5 text-[12.5px] text-zinc-400">{item.sub}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 rounded-2xl border border-zinc-100 bg-[#F5F6F7] p-6">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFF0F0]">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[12px] font-semibold uppercase tracking-wide text-zinc-400">{item.label}</p>
                        <p className="mt-1 text-[15px] font-bold text-[#111111]">{item.value}</p>
                        <p className="mt-0.5 text-[12.5px] text-zinc-400">{item.sub}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#F5F6F7] py-14 sm:py-16">
          <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
            <div className="flex flex-col gap-6 rounded-2xl bg-white p-8 shadow-sm sm:p-10 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-[22px] font-extrabold text-[#111111] sm:text-[24px]">
                  Direct een transport aanvragen?
                </h2>
                <p className="mt-1 text-[14px] text-zinc-500">
                  Vul je adressen in en zie direct de prijs. Binnen 1 minuut geregeld.
                </p>
              </div>
              <Link
                href="/"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#E31B1B] px-7 py-3.5 text-[14px] font-bold text-white transition hover:bg-[#C91818] sm:w-auto"
              >
                Transport aanvragen <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

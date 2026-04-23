"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/diensten",    label: "Diensten" },
  { href: "/diensten",    label: "Veel vervoerd" },
  { href: "/#hoe-het-werkt", label: "Hoe het werkt" },
  { href: "/contact",     label: "Over ons" },
  { href: "/faq",         label: "FAQ" },
];

// Phone icon
function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

// Hamburger icon
function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="3" y1="6"  x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

// Close icon
function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6"  y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_1px_0_0_#E5E7EB]">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-8">

        {/* ---- Logo ---- */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/busjedirectBD.svg"
            alt="BusjeDirect"
            width={32}
            height={24}
            priority
          />
          <span className="text-[18px] font-extrabold tracking-tight text-[#111111]">
            BusjeDirect
          </span>
        </Link>

        {/* ---- Desktop nav ---- */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Hoofdnavigatie">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[13.5px] font-medium text-zinc-600 transition hover:text-zinc-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ---- Desktop right: phone + CTA ---- */}
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:0850606126"
            className="flex items-center gap-2 text-[13.5px] font-semibold text-zinc-800 transition hover:text-zinc-600"
          >
            <PhoneIcon />
            085 06 06 126
          </a>
          <Link
            href="/aanvraag/items"
            className="rounded-lg bg-[#FF7A00] px-5 py-2.5 text-[13.5px] font-bold text-white transition hover:bg-[#E86E00] active:scale-[0.98]"
          >
            Bereken prijs
          </Link>
        </div>

        {/* ---- Mobile right: phone icon + hamburger ---- */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="tel:0850606126"
            aria-label="Bel ons"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700"
          >
            <PhoneIcon />
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Menu sluiten" : "Menu openen"}
            aria-expanded={mobileOpen}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

      </div>

      {/* ---- Mobile menu ---- */}
      {mobileOpen && (
        <div className="border-t border-zinc-100 bg-white px-4 pb-5 pt-3 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobiele navigatie">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 hover:text-zinc-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/aanvraag/items"
            onClick={() => setMobileOpen(false)}
            className="mt-4 flex w-full items-center justify-center rounded-xl bg-[#FF7A00] py-3 text-sm font-bold text-white transition hover:bg-[#E86E00]"
          >
            Bereken prijs
          </Link>
        </div>
      )}
    </header>
  );
}

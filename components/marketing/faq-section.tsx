"use client";

import { useState } from "react";
import Link from "next/link";

const FAQS = [
  { question: "Wat kost een busje met chauffeur?",           answer: "De prijs is afhankelijk van de afstand. We rekenen een starttarief van €65 plus €0,85 per kilometer. De minimumprijs is €75. Je ziet de exacte prijs direct nadat je je adressen hebt ingevuld." },
  { question: "Kunnen jullie een bank vervoeren?",           answer: "Ja. We vervoeren banken, hoekbanken, slaapbanken en fauteuils. Geef bij je aanvraag aan wat voor bank het is, dan houden we daar rekening mee." },
  { question: "Helpen jullie ook met tillen?",               answer: "Ja. Onze chauffeurs helpen bij het in- en uitladen. Bij zware of grote items zoals kasten of witgoed is het handig als er iemand aanwezig is om te assisteren." },
  { question: "Halen jullie spullen op van Marktplaats?",    answer: "Ja. We halen regelmatig Marktplaats-aankopen op. Vul het ophaaladres van de verkoper in als vertrekpunt en je eigen adres als bestemming." },
  { question: "Rijden jullie ook in het weekend?",           answer: "Ja, we zijn ook in het weekend beschikbaar. Bij het plannen van je aanvraag kun je zelf een datum en tijdvak kiezen dat jou uitkomt." },
  { question: "Vervoeren jullie ook dozen of witgoed?",      answer: "Ja. We vervoeren wasmachines, drogers, koelkasten en verhuisdozen. Geef bij je aanvraag aan om welke items het gaat." },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-zinc-100">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-4 text-left"
      >
        <span className="text-[14px] font-medium text-[#111111]">{question}</span>
        <span className="flex h-6 w-6 shrink-0 items-center justify-center text-zinc-400" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <line x1="7" y1="1" x2="7" y2="13" className={open ? "hidden" : ""} />
            <line x1="1" y1="7" x2="13" y2="7" />
          </svg>
        </span>
      </button>
      {open && <p className="pb-4 text-[13px] leading-relaxed text-zinc-500">{answer}</p>}
    </div>
  );
}

function HeadsetIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18v-6a9 9 0 0118 0v6" />
      <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function HelpBlock() {
  return (
    <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-6">
      <div className="mb-3 flex items-center gap-3">
        <HeadsetIcon />
        <div>
          <p className="text-[15px] font-bold text-[#111111]">Hulp nodig?</p>
          <p className="text-[13px] text-zinc-500">We denken graag met je mee. Neem contact met ons op.</p>
        </div>
      </div>
      <a href="tel:0850606126" className="mb-4 flex items-center gap-2 text-[14px] font-semibold text-[#111111]">
        <PhoneIcon />
        085 06 06 126
      </a>
      <Link
        href="/contact"
        className="flex w-full items-center justify-center rounded-xl bg-[#FF7A00] py-3 text-[14px] font-bold text-white transition hover:bg-[#E86E00]"
      >
        Contact opnemen
      </Link>
    </div>
  );
}

export function FaqSection() {
  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <h2 className="mb-8 text-[22px] font-extrabold text-[#111111] sm:text-[26px]">
          Veelgestelde vragen
        </h2>

        {/* Desktop: 2-col FAQ + help block right */}
        <div className="hidden gap-8 lg:flex lg:items-start">
          {/* Left: 2-column FAQ grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-x-10">
              <div>
                {FAQS.slice(0, 3).map((faq) => (
                  <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
                ))}
              </div>
              <div>
                {FAQS.slice(3).map((faq) => (
                  <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          </div>
          {/* Right: help block */}
          <div className="w-72 shrink-0">
            <HelpBlock />
          </div>
        </div>

        {/* Mobile: single column FAQ then help block */}
        <div className="flex flex-col gap-6 lg:hidden">
          <div>
            {FAQS.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          <HelpBlock />
        </div>

      </div>
    </section>
  );
}

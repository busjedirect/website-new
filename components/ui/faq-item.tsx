"use client";

import { useState } from "react";

export function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-zinc-100 last:border-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-4 text-left"
      >
        <span className="text-[14px] font-medium text-[#111111]">{question}</span>
        <span
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 transition-colors group-hover:bg-[#FFF3E8]"
          aria-hidden="true"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          >
            <line x1="7" y1="1" x2="7" y2="13" className={open ? "hidden" : ""} />
            <line x1="1" y1="7" x2="13" y2="7" />
          </svg>
        </span>
      </button>
      {open && (
        <p className="pb-4 text-[13px] leading-[1.7] text-zinc-500">{answer}</p>
      )}
    </div>
  );
}

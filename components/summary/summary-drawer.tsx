"use client";

import { useEffect } from "react";
import { RequestSummary } from "./request-summary";

interface SummaryDrawerProps {
  open: boolean;
  onClose: () => void;
  title?: string;
}

export function SummaryDrawer({ open, onClose, title }: SummaryDrawerProps) {
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <>
      <div aria-hidden="true" onClick={onClose} className="fixed inset-0 z-40 bg-black/30 lg:hidden" />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Aanvraag overzicht"
        className="fixed bottom-0 left-0 right-0 z-50 max-h-[80dvh] overflow-y-auto rounded-t-xl bg-white p-5 pb-8 lg:hidden"
      >
        <div className="mx-auto mb-5 h-1 w-8 rounded-full bg-zinc-200" />
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-semibold text-zinc-900">{title ?? "Jouw aanvraag"}</p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Sluiten"
            className="text-xs text-zinc-400 hover:text-zinc-700"
          >
            Sluiten
          </button>
        </div>
        <RequestSummary title="" />
      </div>
    </>
  );
}

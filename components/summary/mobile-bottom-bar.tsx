"use client";

import { useState } from "react";
import { useRequestStore } from "@/features/request/store/request-store";
import { formattedPrice } from "@/features/request/store/request-selectors";
import { SummaryDrawer } from "./summary-drawer";

// ---------------------------------------------------------------------------
// Chevron icon — signals the left section is tappable
// ---------------------------------------------------------------------------

function ChevronUp() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Overview trigger — left side of the bar
// ---------------------------------------------------------------------------

interface OverviewTriggerProps {
  onOpen: () => void;
  price: string | null;
}

function OverviewTrigger({ onOpen, price }: OverviewTriggerProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label="Bekijk je aanvraag overzicht"
      className="flex flex-1 items-center gap-2 active:opacity-70 transition-opacity"
    >
      <div className="flex flex-col items-start">
        <span className="flex items-center gap-1 text-xs font-medium text-zinc-500">
          Bekijk overzicht
          <ChevronUp />
        </span>
        {price ? (
          <span className="text-base font-bold text-zinc-900">
            {price}{" "}
            <span className="text-xs font-normal text-zinc-400">incl. btw</span>
          </span>
        ) : (
          <span className="text-sm text-zinc-400">Jouw aanvraag</span>
        )}
      </div>
    </button>
  );
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface MobileBottomBarProps {
  /** Primary CTA button — rendered on the right */
  cta: React.ReactNode;
  /** Title shown in the summary drawer */
  drawerTitle?: string;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function MobileBottomBar({
  cta,
  drawerTitle = "Jouw aanvraag",
}: MobileBottomBarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const price = useRequestStore(formattedPrice);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-zinc-200 bg-white px-4 py-3 lg:hidden">
        <div className="flex items-center gap-3">
          <OverviewTrigger onOpen={() => setDrawerOpen(true)} price={price} />
          {cta}
        </div>
      </div>

      <SummaryDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        title={drawerTitle}
      />
    </>
  );
}

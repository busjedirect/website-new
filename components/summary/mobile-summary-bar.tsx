"use client";

import { useRequestStore } from "@/features/request/store/request-store";
import { formattedPrice } from "@/features/request/store/request-selectors";

interface MobileSummaryBarProps {
  onOpen: () => void;
  ctaLabel?: string;
  ctaHref?: string;
  ctaDisabled?: boolean;
  onCtaClick?: () => void;
}

export function MobileSummaryBar({
  onOpen,
  ctaLabel,
  ctaHref,
  ctaDisabled,
  onCtaClick,
}: MobileSummaryBarProps) {
  const price = useRequestStore(formattedPrice);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-zinc-200 bg-white px-4 py-3 lg:hidden">
      <div className="flex items-center gap-3">
        {/* Prijs + overzicht trigger */}
        <button
          type="button"
          onClick={onOpen}
          className="flex flex-1 flex-col items-start"
        >
          {price ? (
            <>
              <span className="text-xs text-zinc-400">Totaalprijs</span>
              <span className="text-base font-bold text-zinc-900">{price}</span>
            </>
          ) : (
            <span className="text-sm text-zinc-400">Bekijk overzicht</span>
          )}
        </button>

        {/* CTA */}
        {ctaLabel && (
          ctaHref ? (
            <a
              href={ctaDisabled ? undefined : ctaHref}
              aria-disabled={ctaDisabled}
              className={[
                "rounded-lg px-5 py-2.5 text-sm font-semibold transition",
                ctaDisabled
                  ? "pointer-events-none bg-zinc-200 text-zinc-400"
                  : "bg-zinc-900 text-white hover:bg-zinc-700",
              ].join(" ")}
            >
              {ctaLabel}
            </a>
          ) : (
            <button
              type="button"
              disabled={ctaDisabled}
              onClick={onCtaClick}
              className="rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {ctaLabel}
            </button>
          )
        )}
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useRequestStore } from "../../store/request-store";
import { hasItems } from "../../store/request-selectors";

export function ItemsNextButton() {
  const canProceed = useRequestStore(hasItems);

  return (
    <div className="flex flex-col gap-2">
      <Link
        href="/aanvraag/datum-tijd"
        aria-disabled={!canProceed}
        tabIndex={canProceed ? undefined : -1}
        className={[
          "w-full rounded-lg px-6 py-3.5 text-center text-sm font-semibold transition",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900",
          canProceed
            ? "bg-zinc-900 text-white hover:bg-zinc-700"
            : "pointer-events-none bg-zinc-100 text-zinc-400",
        ].join(" ")}
      >
        Ga verder
      </Link>
      {!canProceed && (
        <p className="text-center text-xs text-zinc-400">
          Voeg minimaal één item toe om verder te gaan.
        </p>
      )}
    </div>
  );
}

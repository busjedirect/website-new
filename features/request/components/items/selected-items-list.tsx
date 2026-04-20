"use client";

import { useRequestStore } from "../../store/request-store";

export function SelectedItemsList() {
  const items = useRequestStore((s) => s.items);
  const removeItem = useRequestStore((s) => s.removeItem);

  if (items.length === 0) return null;

  return (
    <div className="rounded-xl border border-zinc-200 bg-white">
      <div className="border-b border-zinc-100 px-4 py-3">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400">
          Toegevoegd ({items.length})
        </p>
      </div>
      <ul className="divide-y divide-zinc-100">
        {items.map((item) => (
          <li key={item.id} className="flex items-center justify-between gap-3 px-4 py-3">
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-zinc-900">
                {item.label}
              </p>
              <p className="text-xs text-zinc-400">
                {item.aantal}×
                {item.opmerking ? ` · ${item.opmerking}` : ""}
              </p>
            </div>
            <button
              type="button"
              onClick={() => removeItem(item.id)}
              aria-label={`${item.label} verwijderen`}
              className="shrink-0 rounded-md p-1.5 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-700"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6l-1 14H6L5 6" />
                <path d="M10 11v6M14 11v6" />
                <path d="M9 6V4h6v2" />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

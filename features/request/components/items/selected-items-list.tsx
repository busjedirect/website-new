"use client";

import { useRequestStore } from "../../store/request-store";
import type { RequestItem } from "../../types/item.types";

interface SelectedItemsListProps {
  onEdit: (item: RequestItem) => void;
}

export function SelectedItemsList({ onEdit }: SelectedItemsListProps) {
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
                {item.dimensions?.lengthCm
                  ? ` · ${item.dimensions.lengthCm}×${item.dimensions.widthCm} cm`
                  : ""}
                {item.opmerking ? ` · ${item.opmerking}` : ""}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-1">
              {/* Bewerk */}
              <button
                type="button"
                onClick={() => onEdit(item)}
                aria-label={`${item.label} bewerken`}
                className="rounded-md p-1.5 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-700"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
              </button>
              {/* Verwijder */}
              <button
                type="button"
                onClick={() => removeItem(item.id)}
                aria-label={`${item.label} verwijderen`}
                className="rounded-md p-1.5 text-zinc-400 transition hover:bg-zinc-100 hover:text-red-500"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6l-1 14H6L5 6" />
                  <path d="M10 11v6M14 11v6" />
                  <path d="M9 6V4h6v2" />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

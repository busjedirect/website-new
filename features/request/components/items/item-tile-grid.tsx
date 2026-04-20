"use client";

import type { ItemCategory_ } from "../../constants/item-options";
import { ItemTile } from "./item-tile";

interface ItemTileGridProps {
  items: ItemCategory_[];
  onSelect: (item: { id: string; label: string; iconSlug: string }) => void;
  activeItemId?: string | null;
  emptyQuery?: string;
  /** Called when the user clicks "+ Voeg '…' toe als item" */
  onAddCustom?: (name: string) => void;
}

export function ItemTileGrid({
  items,
  onSelect,
  activeItemId,
  emptyQuery,
  onAddCustom,
}: ItemTileGridProps) {
  if (items.length === 0 && emptyQuery) {
    return (
      <div className="flex flex-col items-center gap-3 py-6 text-center">
        <p className="text-sm text-zinc-400">
          Geen resultaten voor &ldquo;{emptyQuery}&rdquo;
        </p>
        {onAddCustom && (
          <button
            type="button"
            onClick={() => onAddCustom(emptyQuery)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-dashed border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-600 transition hover:border-zinc-400 hover:bg-zinc-50 hover:text-zinc-900"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Voeg &ldquo;{emptyQuery}&rdquo; toe als item
          </button>
        )}
      </div>
    );
  }

  return (
    <div role="list" className="grid grid-cols-3 gap-2 sm:grid-cols-4">
      {items.map((item) => (
        <div key={item.id} role="listitem">
          <ItemTile
            item={item}
            onSelect={onSelect}
            active={activeItemId === item.id}
          />
        </div>
      ))}
    </div>
  );
}

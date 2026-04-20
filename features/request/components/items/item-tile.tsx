"use client";

import type { ItemCategory_ } from "../../constants/item-options";
import { ITEM_ICON_MAP, CustomIcon } from "./item-icons";

interface ItemTileProps {
  item: ItemCategory_;
  onSelect: (item: ItemCategory_) => void;
  active?: boolean;
}

export function ItemTile({ item, onSelect, active = false }: ItemTileProps) {
  const Icon = ITEM_ICON_MAP[item.iconSlug] ?? CustomIcon;

  return (
    <button
      type="button"
      onClick={() => onSelect(item)}
      aria-pressed={active}
      className={[
        "group flex w-full flex-col items-center gap-2 rounded-lg border px-2 py-4 text-center",
        "transition-all duration-150",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900",
        active
          ? "border-zinc-900 bg-zinc-900 shadow-sm"
          : "border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm",
      ].join(" ")}
    >
      <Icon
        className={[
          "transition-colors duration-150",
          active ? "text-white" : "text-zinc-400 group-hover:text-zinc-600",
        ].join(" ")}
      />
      <span
        className={[
          "text-xs font-medium leading-tight",
          active ? "text-white" : "text-zinc-700",
        ].join(" ")}
      >
        {item.label}
      </span>
    </button>
  );
}

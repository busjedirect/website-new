"use client";

interface ItemSearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function ItemSearchBar({
  value,
  onChange,
  placeholder = "Zoek een item…",
}: ItemSearchBarProps) {
  return (
    <div className="relative">
      {/* Search icon */}
      <svg
        aria-hidden="true"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
      >
        <circle cx="11" cy="11" r="7" />
        <line x1="16.5" y1="16.5" x2="22" y2="22" />
      </svg>

      {/*
        Use type="text" (not "search") to prevent browsers from rendering
        their own native clear button, which would duplicate our custom one.
      */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Zoek een item"
        className="w-full rounded-lg border border-zinc-200 bg-zinc-50 py-2.5 pl-9 pr-9 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition focus:border-zinc-400 focus:bg-white focus:ring-2 focus:ring-zinc-900/8"
      />

      {/* Custom clear button — only shown when there is input */}
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Wissen"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
}

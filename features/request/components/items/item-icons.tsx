// Flat line icons voor item tiles — consistent stroke width 1.5
// Vervang later door een icon library als de set groeit

interface IconProps {
  className?: string;
}

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function BankIcon({ className }: IconProps) {
  return (
    <svg {...iconProps} className={className} stroke="currentColor">
      <path d="M3 10h18M3 10V20h18V10M3 10l9-7 9 7" />
      <rect x="7" y="14" width="4" height="6" />
      <rect x="13" y="14" width="4" height="6" />
    </svg>
  );
}

export function KastIcon({ className }: IconProps) {
  return (
    <svg {...iconProps} className={className} stroke="currentColor">
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <line x1="12" y1="3" x2="12" y2="21" />
      <circle cx="9" cy="12" r="1" fill="currentColor" />
      <circle cx="15" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

export function BedIcon({ className }: IconProps) {
  return (
    <svg {...iconProps} className={className} stroke="currentColor">
      <path d="M3 7v10M21 7v10M3 12h18M3 17h18" />
      <rect x="3" y="7" width="18" height="5" rx="1" />
      <circle cx="7" cy="9.5" r="1.5" />
    </svg>
  );
}

export function EettafelIcon({ className }: IconProps) {
  return (
    <svg {...iconProps} className={className} stroke="currentColor">
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="6" y1="10" x2="6" y2="20" />
      <line x1="18" y1="10" x2="18" y2="20" />
      <line x1="9" y1="4" x2="9" y2="10" />
      <line x1="15" y1="4" x2="15" y2="10" />
    </svg>
  );
}

export function StoelenIcon({ className }: IconProps) {
  return (
    <svg {...iconProps} className={className} stroke="currentColor">
      <path d="M6 20v-6M18 20v-6M4 14h16M6 14V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6" />
    </svg>
  );
}

export function KoelkastIcon({ className }: IconProps) {
  return (
    <svg {...iconProps} className={className} stroke="currentColor">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="5" y1="10" x2="19" y2="10" />
      <line x1="10" y1="6" x2="10" y2="8" />
      <line x1="10" y1="14" x2="10" y2="18" />
    </svg>
  );
}

export function WasmachineIcon({ className }: IconProps) {
  return (
    <svg {...iconProps} className={className} stroke="currentColor">
      <rect x="3" y="2" width="18" height="20" rx="2" />
      <circle cx="12" cy="13" r="4" />
      <circle cx="12" cy="13" r="2" />
      <line x1="7" y1="6" x2="7" y2="6" strokeWidth="2" strokeLinecap="round" />
      <line x1="10" y1="6" x2="14" y2="6" />
    </svg>
  );
}

export function DozenIcon({ className }: IconProps) {
  return (
    <svg {...iconProps} className={className} stroke="currentColor">
      <path d="M21 8l-9-5-9 5v8l9 5 9-5V8z" />
      <path d="M3 8l9 5 9-5" />
      <line x1="12" y1="13" x2="12" y2="21" />
      <path d="M7.5 5.5L16.5 10.5" />
    </svg>
  );
}

export function CustomIcon({ className }: IconProps) {
  return (
    <svg {...iconProps} className={className} stroke="currentColor">
      <circle cx="12" cy="12" r="9" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );
}

export const ITEM_ICON_MAP: Record<string, React.ComponentType<IconProps>> = {
  bank: BankIcon,
  kast: KastIcon,
  bed: BedIcon,
  eettafel: EettafelIcon,
  stoelen: StoelenIcon,
  koelkast: KoelkastIcon,
  wasmachine: WasmachineIcon,
  dozen: DozenIcon,
};

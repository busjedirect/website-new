"use client";

import type { ItemDimensions } from "../../types/item.types";

const inputClass =
  "w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10";

interface DimensionsFieldsProps {
  value: Partial<ItemDimensions>;
  onChange: (value: Partial<ItemDimensions>) => void;
}

const FIELDS = [
  { key: "lengthCm" as const, label: "Lengte", id: "dim-lengte" },
  { key: "widthCm" as const, label: "Breedte", id: "dim-breedte" },
  { key: "heightCm" as const, label: "Hoogte", id: "dim-hoogte" },
];

export function DimensionsFields({ value, onChange }: DimensionsFieldsProps) {
  function handleChange(key: keyof ItemDimensions, raw: string) {
    const parsed = parseFloat(raw);
    onChange({ ...value, [key]: isNaN(parsed) ? undefined : parsed });
  }

  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="text-sm font-medium text-gray-700">
        Afmetingen{" "}
        <span className="font-normal text-gray-400">(optioneel, in cm)</span>
      </legend>
      <div className="grid grid-cols-3 gap-2">
        {FIELDS.map(({ key, label, id }) => (
          <div key={key} className="flex flex-col gap-1">
            <label htmlFor={id} className="text-xs text-gray-500">
              {label}
            </label>
            <input
              id={id}
              type="number"
              min={1}
              placeholder="cm"
              defaultValue={value[key] ?? ""}
              onChange={(e) => handleChange(key, e.target.value)}
              className={inputClass}
            />
          </div>
        ))}
      </div>
    </fieldset>
  );
}

interface SummaryRowProps {
  label: string;
  value: string;
}

export function SummaryRow({ label, value }: SummaryRowProps) {
  return (
    <div className="flex items-start justify-between gap-4 py-2.5">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="text-right text-sm font-medium text-gray-900">
        {value}
      </span>
    </div>
  );
}

interface EditableSummaryBlockProps {
  rows: SummaryRowProps[];
}

export function EditableSummaryBlock({ rows }: EditableSummaryBlockProps) {
  return (
    <div className="divide-y divide-gray-100">
      {rows.map((row) => (
        <SummaryRow key={row.label} label={row.label} value={row.value} />
      ))}
    </div>
  );
}

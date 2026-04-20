import Link from "next/link";

interface ConfirmationSectionProps {
  title: string;
  editHref?: string;
  editLabel?: string;
  children: React.ReactNode;
}

export function ConfirmationSection({
  title,
  editHref,
  editLabel = "Wijzigen",
  children,
}: ConfirmationSectionProps) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400">
          {title}
        </h2>
        {editHref && (
          <Link
            href={editHref}
            className="text-xs font-medium text-zinc-500 underline underline-offset-2 hover:text-zinc-900"
          >
            {editLabel}
          </Link>
        )}
      </div>
      {children}
    </div>
  );
}

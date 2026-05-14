import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCATIES, getLocatie } from "@/lib/locaties";
import { LocatieTemplate } from "@/components/locaties/locatie-template";

// ---------------------------------------------------------------------------
// Static params — pre-render all 12 location pages
// ---------------------------------------------------------------------------

export async function generateStaticParams() {
  return LOCATIES.map((l) => ({ slug: l.slug }));
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params;
  const locatie = getLocatie(slug);
  if (!locatie) return {};

  return {
    title: `Transport in ${locatie.name}`,
    description: `Meubels, witgoed en inboedels vervoeren in ${locatie.name}? BusjeDirect regelt het snel en veilig. Prijs direct berekenen via onze website.`,
    alternates: {
      canonical: `/locaties/${locatie.slug}`,
    },
  };
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function LocatiePage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  const locatie = getLocatie(slug);

  if (!locatie) notFound();

  return <LocatieTemplate locatie={locatie} />;
}

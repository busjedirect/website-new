import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCATIES, getLocatie } from "@/lib/locaties";
import { STAD_ITEMS, STAD_ITEM_MAP } from "@/lib/stad-items";
import { StadItemTemplate } from "@/components/stad-item/stad-item-template";

// ---------------------------------------------------------------------------
// Static params — pre-render alle 60 combinaties (12 steden × 5 items)
// ---------------------------------------------------------------------------

export async function generateStaticParams() {
  return LOCATIES.flatMap((locatie) =>
    STAD_ITEMS.map((item) => ({
      locatie: locatie.slug,
      vervoer: item.slug,
    }))
  );
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export async function generateMetadata(
  props: { params: Promise<{ locatie: string; vervoer: string }> }
): Promise<Metadata> {
  const { locatie: locatieSlug, vervoer: vervoerSlug } = await props.params;
  const locatie = getLocatie(locatieSlug);
  const stadItem = STAD_ITEM_MAP[vervoerSlug];

  if (!locatie || !stadItem) return {};

  return {
    title: `${stadItem.label} in ${locatie.name}`,
    description: `${stadItem.label} in ${locatie.name}? BusjeDirect haalt op en bezorgt snel en veilig. Drempel-tot-drempeltransport vanaf €65 excl. btw. Prijs direct berekenen.`,
    alternates: {
      canonical: `/${locatieSlug}/${vervoerSlug}`,
    },
  };
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function StadItemPage(
  props: { params: Promise<{ locatie: string; vervoer: string }> }
) {
  const { locatie: locatieSlug, vervoer: vervoerSlug } = await props.params;
  const locatie = getLocatie(locatieSlug);
  const stadItem = STAD_ITEM_MAP[vervoerSlug];

  if (!locatie || !stadItem) notFound();

  return <StadItemTemplate locatie={locatie} stadItem={stadItem} />;
}

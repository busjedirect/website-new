import type { Metadata } from "next";
import { ItemsView } from "@/features/request/components/items/items-view";

export const metadata: Metadata = {
  title: "Wat wil je laten vervoeren",
  robots: { index: false },
};

export default function ItemsPage() {
  return <ItemsView />;
}

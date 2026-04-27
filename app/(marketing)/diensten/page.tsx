import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { DienstenHero } from "@/components/diensten/diensten-hero";
import { DienstenGrid } from "@/components/diensten/diensten-grid";
import { DienstenWaarom } from "@/components/diensten/diensten-waarom";
import { DienstenHoeHetWerkt } from "@/components/diensten/diensten-hoe-het-werkt";
import { DienstenCtaBlok } from "@/components/diensten/diensten-cta-blok";
import { DienstenFaq } from "@/components/diensten/diensten-faq";
import { DienstenBottomCta } from "@/components/diensten/diensten-bottom-cta";

export const metadata: Metadata = {
  title: "Transportdiensten — BusjeDirect",
  description:
    "Bekijk al onze transportdiensten: meubeltransport, kleine verhuizing, ophaalservice, zakelijk transport en internationaal transport. Snel, veilig en transparant geprijsd.",
};

export default function DienstenPage() {
  return (
    <>
      <main>
        <DienstenHero />
        <DienstenGrid />
        <DienstenWaarom />
        <DienstenHoeHetWerkt />
        <DienstenCtaBlok />
        <DienstenFaq />
        <DienstenBottomCta />
      </main>
      <SiteFooter />
    </>
  );
}

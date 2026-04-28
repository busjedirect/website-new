import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { HeroSection } from "@/components/marketing/hero-section";
import { ServicesSection } from "@/components/marketing/services-section";
import { HowItWorksSection } from "@/components/marketing/how-it-works-section";
import { WhatWeTransportSection } from "@/components/marketing/what-we-transport-section";
import { FaqSection } from "@/components/marketing/faq-section";
import { SeoContentSection } from "@/components/marketing/seo-content-section";

export const metadata: Metadata = {
  title: "Meubels & witgoed vervoeren",
  description:
    "Bank, kast, wasmachine of complete inboedel laten vervoeren? BusjeDirect haalt op en bezorgt door heel Nederland. Prijs direct online berekenen.",
};

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <WhatWeTransportSection />
        <FaqSection />
        <SeoContentSection />
      </main>
      <SiteFooter />
    </>
  );
}

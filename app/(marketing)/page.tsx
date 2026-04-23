import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { HeroSection } from "@/components/marketing/hero-section";
import { ServicesSection } from "@/components/marketing/services-section";
import { HowItWorksSection } from "@/components/marketing/how-it-works-section";
import { WhatWeTransportSection } from "@/components/marketing/what-we-transport-section";
import { FaqSection } from "@/components/marketing/faq-section";
import { SeoContentSection } from "@/components/marketing/seo-content-section";

export const metadata: Metadata = {
  title: "BusjeDirect — Groot vervoer, zonder gedoe",
  description:
    "Regel snel transport voor banken, kasten, witgoed en meer. Vul je adressen in en zie direct de prijs. Door heel Nederland, binnen 2 minuten geregeld.",
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

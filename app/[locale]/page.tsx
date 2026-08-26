import { isLocale, type Locale } from "@/lib/i18n";
import { getContent } from "@/lib/site-data-i18n";

import { SuperHeroSlider } from "@/components/home/super-hero-slider";
import { AboutPhilosophyTabs } from "@/components/home/about-philosophy-tabs";
import { SuperServiceShowcase } from "@/components/home/super-service-showcase";
import { ComparisonTable } from "@/components/ui/comparison-table";
import { PartnerEquipmentBand } from "@/components/home/partner-equipment-band";
import { GlobalWorkCulture } from "@/components/home/global-work-culture";
import { FaqAccordion } from "@/components/home/faq-accordion";
import { FloatingContactVertical } from "@/components/ui/floating-contact-vertical";
import { CtaContactBand } from "@/components/home/cta-contact-band";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "ja";

  return (
    <main className="site-shell overflow-hidden">
      {/* 1. Desktop Right Vertical Floating Tab & Mobile Bottom Sticky Dock */}
      <FloatingContactVertical locale={locale} />

      {/* 2. Signature Super Clean Multi-Slide Hero Slider with Bottom Nav */}
      <SuperHeroSlider locale={locale} />

      {/* 3. About Us & Philosophy / Profile Tabs */}
      <AboutPhilosophyTabs locale={locale} />

      {/* 4. Core Services (Bed making, Building maintenance, Smart DX, Global Staffing) */}
      <SuperServiceShowcase locale={locale} />

      {/* 5. Quality & Trust Comparison Table (NKTN vs Standard Cleaners) */}
      <ComparisonTable locale={locale} />

      {/* 6. Professional Equipment & Chemicals Standards */}
      <PartnerEquipmentBand locale={locale} />

      {/* 7. Multinational Workforce, Training & Career Opportunities */}
      <GlobalWorkCulture locale={locale} />

      {/* 8. Japanese Corporate FAQ Accordion */}
      <FaqAccordion locale={locale} />

      {/* 9. Final High-Converting Contact & Estimate Band */}
      <CtaContactBand locale={locale} variant="dark" />
    </main>
  );
}

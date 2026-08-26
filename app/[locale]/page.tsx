import { isLocale, type Locale } from "@/lib/i18n";

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
    <main id="home-page-main" className="home-page-main site-shell">
      {/* 1. Desktop Right Vertical Floating Tab & Mobile Bottom Sticky Dock */}
      <FloatingContactVertical locale={locale} />

      {/* 2. Signature Super Clean Multi-Slide Hero Slider with Bottom Nav */}
      <SuperHeroSlider locale={locale} />

      {/* 3. About Us & Philosophy / Profile Tabs */}
      <div id="section-wrapper-about" className="section-wrapper-about reveal-on-scroll">
        <AboutPhilosophyTabs locale={locale} />
      </div>

      {/* 4. Core Services (Bed making, Building maintenance, Smart DX, Global Staffing) */}
      <div id="section-wrapper-services" className="section-wrapper-services reveal-on-scroll">
        <SuperServiceShowcase locale={locale} />
      </div>

      {/* 5. Quality & Trust Comparison Table (NKTN vs Standard Cleaners) */}
      <div id="section-wrapper-comparison" className="section-wrapper-comparison reveal-on-scroll">
        <ComparisonTable locale={locale} />
      </div>

      {/* 6. Professional Equipment & Chemicals Standards */}
      <div id="section-wrapper-equipment" className="section-wrapper-equipment reveal-on-scroll">
        <PartnerEquipmentBand locale={locale} />
      </div>

      {/* 7. Multinational Workforce, Training & Career Opportunities */}
      <div id="section-wrapper-workforce" className="section-wrapper-workforce reveal-on-scroll">
        <GlobalWorkCulture locale={locale} />
      </div>

      {/* 8. Japanese Corporate FAQ Accordion */}
      <div id="section-wrapper-faq" className="section-wrapper-faq reveal-on-scroll">
        <FaqAccordion locale={locale} />
      </div>

      {/* 9. Final High-Converting Contact & Estimate Band */}
      <div id="section-wrapper-cta" className="section-wrapper-cta reveal-on-scroll">
        <CtaContactBand locale={locale} variant="dark" />
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Analytics } from "@/components/analytics";
import { AnalyticsEvents } from "@/components/analytics-events";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyLineButton } from "@/components/sticky-line-button";
import { ScrollAnimationInitializer } from "@/components/ui/scroll-animation-init";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { companyBase, getContent } from "@/lib/site-data-i18n";
import { absoluteUrl, localeHomeMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  return localeHomeMetadata(locale);
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = getContent(locale);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: companyBase.name,
    alternateName: companyBase.brand,
    url: absoluteUrl(`/${locale}`),
    logo: absoluteUrl("/logo.png"),
    email: companyBase.email,
    telephone: companyBase.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyBase.location,
      addressCountry: "JP",
    },
    description: content.meta.description,
    areaServed: "Japan",
    sameAs: [companyBase.lineUrl],
  };

  return (
    <div lang={locale} className={`locale-${locale}`}>
      <Analytics />
      <AnalyticsEvents />
      <ScrollAnimationInitializer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <SiteHeader locale={locale as Locale} />
      {children}
      <SiteFooter locale={locale as Locale} />
      <StickyLineButton locale={locale as Locale} />
    </div>
  );
}

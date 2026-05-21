import type { Metadata } from "next";

import { defaultLocale, locales, type Locale } from "@/lib/i18n";
import { companyBase, getContent } from "@/lib/site-data-i18n";

const fallbackSiteUrl = "https://clean.bawui.com";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl).replace(/\/$/, "");

const languageMap: Record<Locale, string> = {
  ja: "ja-JP",
  en: "en",
  zh: "zh-CN",
  ne: "ne-NP",
  fil: "fil-PH",
  id: "id-ID",
  vi: "vi-VN",
};

export const staticPaths = ["", "/services", "/strengths", "/dx", "/blog", "/company", "/contact", "/faq", "/privacy", "/osaka-hotel-cleaning", "/minpaku-cleaning-osaka", "/airbnb-cleaning-osaka", "/cleaning-dx-line-chatbot"] as const;

export function localizedPath(locale: Locale, path = "") {
  return `/${locale}${path === "/" ? "" : path}`;
}

export function absoluteUrl(path = "") {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageAlternates(locale: Locale, path = ""): Metadata["alternates"] {
  const languages = Object.fromEntries(locales.map((item) => [languageMap[item], localizedPath(item, path)]));

  return {
    canonical: localizedPath(locale, path),
    languages: {
      ...languages,
      "x-default": localizedPath(defaultLocale, path),
    },
  };
}

export function pageMetadata(locale: Locale, path: string, title: string, description: string): Metadata {
  const url = localizedPath(locale, path);

  return {
    title,
    description,
    alternates: pageAlternates(locale, path),
    openGraph: {
      title,
      description,
      url,
      siteName: `${companyBase.name} / ${companyBase.brand}`,
      locale: languageMap[locale],
      type: "website",
      images: [{ url: "/logo.png", width: 512, height: 512, alt: `${companyBase.name} ${companyBase.brand}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/logo.png"],
    },
  };
}

export function localeHomeMetadata(locale: Locale): Metadata {
  const content = getContent(locale);
  return pageMetadata(locale, "", content.meta.title, content.meta.description);
}

export function breadcrumbJsonLd(locale: Locale, items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(localizedPath(locale, item.path)),
    })),
  };
}

export function serviceJsonLd(locale: Locale) {
  const content = getContent(locale);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${companyBase.brand} Cleaning DX`,
    serviceType: "Hotel and vacation rental cleaning, field management, photo reporting, LINE chatbot automation",
    provider: {
      "@type": "LocalBusiness",
      name: companyBase.name,
      alternateName: companyBase.brand,
      url: absoluteUrl(localizedPath(locale)),
      telephone: companyBase.phone,
      email: companyBase.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: companyBase.location,
        addressCountry: "JP",
      },
    },
    areaServed: {
      "@type": "Country",
      name: "Japan",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Hotels, vacation rental operators, Airbnb hosts, accommodation managers",
    },
    description: content.servicesPage.lead,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cleaning and field management services",
      itemListElement: content.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.lead,
        },
      })),
    },
  };
}

export function faqJsonLd(locale: Locale) {
  const content = getContent(locale);

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqItems.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

export function articleJsonLd(locale: Locale, slug: string) {
  const content = getContent(locale);
  const post = content.blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: absoluteUrl(post.image),
    datePublished: post.date.replaceAll(".", "-"),
    dateModified: post.date.replaceAll(".", "-"),
    author: {
      "@type": "Organization",
      name: companyBase.name,
      url: absoluteUrl(localizedPath(locale)),
    },
    publisher: {
      "@type": "Organization",
      name: companyBase.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/logo.png"),
      },
    },
    mainEntityOfPage: absoluteUrl(localizedPath(locale, `/blog/${post.slug}`)),
  };
}

export function jsonLd(data: object) {
  return { __html: JSON.stringify(data) };
}

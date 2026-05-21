export const locales = ["ja", "en", "zh", "ne", "fil", "id", "vi"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ja";

export const localeLabels: Record<Locale, string> = {
  ja: "日本語",
  en: "English",
  zh: "中文",
  ne: "नेपाली",
  fil: "Filipino",
  id: "Indonesia",
  vi: "Tiếng Việt",
};

export const localeNames: Record<Locale, string> = {
  ja: "日本語",
  en: "English",
  zh: "简体中文",
  ne: "नेपाली",
  fil: "Filipino",
  id: "Bahasa Indonesia",
  vi: "Tiếng Việt",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function withLocale(locale: Locale, href: string) {
  if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return href;
  }

  if (href === "/") {
    return `/${locale}`;
  }

  return `/${locale}${href}`;
}

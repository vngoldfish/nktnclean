"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe2, Menu, X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { localeLabels, localeNames, locales, type Locale, withLocale } from "@/lib/i18n";
import { companyBase, getContent } from "@/lib/site-data-i18n";

const localeFlags: Record<Locale, string> = {
  ja: "🇯🇵",
  en: "🇺🇸",
  zh: "🇨🇳",
  ne: "🇳🇵",
  fil: "🇵🇭",
  id: "🇮🇩",
  vi: "🇻🇳",
};

export function SiteHeader({ locale }: { locale: Locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const pathname = usePathname();
  const content = getContent(locale);
  const pathWithoutLocale = pathname.replace(new RegExp(`^/(${locales.join("|")})(?=/|$)`), "") || "/";
  const getLocaleHref = (item: Locale) => pathWithoutLocale === "/" ? `/${item}` : `/${item}${pathWithoutLocale}`;
  const saveLocale = (item: Locale) => {
    window.localStorage.setItem("preferredLocale", item);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href={withLocale(locale, "/")} onClick={() => setIsOpen(false)} className="flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nktn-blue focus-visible:ring-offset-2">
          <span className="grid size-11 place-items-center overflow-hidden rounded-full bg-white shadow-soft ring-1 ring-nktn-ink/10">
            <Image src="/logo.png" alt="株式会社NKTN / Bawui Cleaning" width={44} height={44} className="size-11 object-cover" priority />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-black tracking-[0.16em] text-nktn-ink">株式会社NKTN</span>
            <span className="block text-xs font-semibold text-nktn-ink/55">Bawui Cleaning</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Global navigation">
          {content.nav.map(([label, href]) => (
            <Link key={href} href={withLocale(locale, href)} className="rounded-full px-4 py-2 text-sm font-bold text-nktn-ink/68 transition hover:bg-white hover:text-nktn-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nktn-blue">
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="relative">
            <button
              type="button"
              className="grid size-10 place-items-center rounded-full bg-white text-nktn-ink ring-1 ring-slate-200 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nktn-blue"
              aria-label={content.common.language}
              aria-expanded={isLanguageOpen}
              onClick={() => setIsLanguageOpen((current) => !current)}
            >
              <span className="relative grid size-6 place-items-center">
                <Globe2 className="size-5" />
                <span className="absolute -right-2 -top-2 text-base leading-none">{localeFlags[locale]}</span>
              </span>
            </button>
            {isLanguageOpen && (
              <div className="absolute right-0 top-12 grid w-48 gap-1 rounded-3xl bg-white p-2 shadow-soft ring-1 ring-slate-200">
                {locales.map((item) => (
                  <Link
                    key={item}
                    href={getLocaleHref(item)}
                    aria-label={localeLabels[item]}
                    title={localeLabels[item]}
                    onClick={() => {
                      saveLocale(item);
                      setIsLanguageOpen(false);
                    }}
                    className={`flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-black transition ${item === locale ? "bg-nktn-blue text-white" : "text-nktn-ink/72 hover:bg-slate-50 hover:text-nktn-ink"}`}
                  >
                    <span className="text-2xl leading-none">{localeFlags[item]}</span>
                    <span>{localeNames[item]}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Badge variant="blue" className="hidden sm:inline-flex">{content.company.coverage} / Osaka</Badge>
          <Button className="hidden sm:inline-flex" asChild>
            <Link href={companyBase.lineUrl} data-analytics="line_header_click">{content.common.lineConsult}</Link>
          </Button>
          <Button
            variant="secondary"
            size="sm"
            className="lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <nav id="mobile-navigation" className="mx-5 mb-4 rounded-3xl bg-white/95 p-3 shadow-soft ring-1 ring-slate-200 backdrop-blur-xl sm:mx-8 lg:hidden" aria-label="Mobile navigation">
          <div className="grid gap-2">
            {content.nav.map(([label, href]) => (
              <Link key={href} href={withLocale(locale, href)} onClick={() => setIsOpen(false)} className="rounded-2xl px-4 py-3 text-sm font-black text-nktn-ink transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nktn-blue">
                {label}
              </Link>
            ))}
          </div>
          <div className="mt-3 rounded-2xl bg-slate-50 p-2">
            <p className="px-2 pb-2 text-xs font-black uppercase tracking-[0.18em] text-nktn-ink/45">{content.common.language}</p>
            <div className="grid grid-cols-2 gap-2">
              {locales.map((item) => <Link key={item} href={getLocaleHref(item)} onClick={() => { saveLocale(item); setIsOpen(false); }} className={`rounded-xl px-3 py-2 text-xs font-black ${item === locale ? "bg-nktn-blue text-white" : "bg-white text-nktn-ink/70"}`}>{localeLabels[item]}</Link>)}
            </div>
          </div>
          <Button className="mt-3 w-full" asChild>
            <Link href={companyBase.lineUrl} onClick={() => setIsOpen(false)}>{content.common.lineConsult}</Link>
          </Button>
        </nav>
      )}
    </header>
  );
}

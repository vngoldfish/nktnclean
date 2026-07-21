"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe2, Menu, Phone, X, MessageCircle, FileText } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { localeFlags, localeLabels, localeNames, locales, type Locale, withLocale } from "@/lib/i18n";
import { companyBase, getContent } from "@/lib/site-data-i18n";

export function SiteHeader({ locale }: { locale: Locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const pathname = usePathname();
  const content = getContent(locale);

  const languageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (isLanguageOpen && languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLanguageOpen]);

  const pathWithoutLocale = pathname.replace(new RegExp(`^/(${locales.join("|")})(?=/|$)`), "") || "/";
  const getLocaleHref = (item: Locale) => pathWithoutLocale === "/" ? `/${item}` : `/${item}${pathWithoutLocale}`;
  const saveLocale = (item: Locale) => {
    window.localStorage.setItem("preferredLocale", item);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathWithoutLocale === "/";
    return pathWithoutLocale.startsWith(href);
  };

  return (
    <div className="sticky top-0 z-50 shadow-sm">
      {/* Top info bar */}
      <div className="bg-gradient-to-r from-sky-950 via-sky-900 to-sky-950 text-white text-xs sm:text-sm border-b border-white/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2.5 sm:px-8">
          <div className="flex items-center gap-3 sm:gap-5">
            <span className="hidden sm:inline text-white/70">{content.topBar.commitment}</span>
            <span className="text-amber-400 font-bold">{content.topBar.hours}</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href={`tel:${companyBase.phone}`} className="flex items-center gap-2 text-base sm:text-lg font-black text-amber-400 hover:text-amber-300 transition">
              <Phone className="size-4 sm:size-4.5" />
              {companyBase.phone}
            </Link>
            <Link href={companyBase.lineUrl} className="hidden sm:inline-flex items-center gap-1 rounded-full bg-[#06C755] px-3.5 py-1 text-xs font-bold text-white hover:bg-[#05b04c] transition" data-analytics="line_topbar_click">
              {content.topBar.lineEstimate}
            </Link>
          </div>
        </div>
      </div>
      {/* Main header */}
      <header className="border-b-2 border-sky-800 bg-white/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link href={withLocale(locale, "/")} onClick={() => setIsOpen(false)} className="flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-800 focus-visible:ring-offset-2">
            <span className="grid size-11 place-items-center overflow-hidden rounded-full bg-white shadow-soft ring-2 ring-sky-800/10">
              <Image src="/logo.png" alt="株式会社NKTN / Bawui Cleaning" width={44} height={44} className="size-11 object-cover" priority />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-black tracking-[0.16em] text-sky-950">株式会社NKTN</span>
              <span className="block text-xs font-extrabold text-amber-600">Bawui Cleaning</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Global navigation">
            {content.nav.map(([label, href]) => {
              const active = isActive(href);
              return (
                <Link
                  key={href}
                  href={withLocale(locale, href)}
                  className={`rounded-full px-4 py-2 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-800 ${
                    active
                      ? "bg-sky-50 text-sky-900 shadow-sm ring-1 ring-sky-100/80"
                      : "text-nktn-ink/68 hover:bg-slate-50 hover:text-nktn-ink"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <div className="relative" ref={languageRef}>
              <button
                type="button"
                className="grid size-10 place-items-center rounded-full bg-white text-nktn-ink ring-1 ring-slate-200 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-800"
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
                      className={`flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-black transition ${item === locale ? "bg-sky-800 text-white" : "text-nktn-ink/72 hover:bg-slate-50 hover:text-nktn-ink"}`}
                    >
                      <span className="text-2xl leading-none">{localeFlags[item]}</span>
                      <span>{localeNames[item]}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Premium CTA Buttons Group */}
            <Link
              href={companyBase.lineUrl}
              className="hidden sm:inline-flex items-center gap-1 rounded-full bg-[#06C755] px-4 py-2 text-xs font-black text-white hover:bg-[#05b04c] shadow-sm transition"
              data-analytics="line_header_click"
            >
              <MessageCircle className="size-3.5" />
              {content.common.lineConsult}
            </Link>
            <Link
              href={withLocale(locale, "/contact")}
              className="hidden sm:inline-flex items-center gap-1 rounded-full bg-amber-500 px-4 py-2 text-xs font-black text-white hover:bg-amber-600 shadow-sm transition"
            >
              <FileText className="size-3.5" />
              {content.common.contact}
            </Link>

            <button
              type="button"
              className="lg:hidden grid size-10 place-items-center rounded-full bg-slate-100 text-nktn-ink hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-800"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsOpen((current) => !current)}
            >
              {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <nav id="mobile-navigation" className="mx-5 mb-4 rounded-3xl bg-white/95 p-3 shadow-soft ring-1 ring-slate-200 backdrop-blur-xl sm:mx-8 lg:hidden" aria-label="Mobile navigation">
            <div className="grid gap-2">
              {content.nav.map(([label, href]) => {
                const active = isActive(href);
                return (
                  <Link
                    key={href}
                    href={withLocale(locale, href)}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-2xl px-4 py-3 text-sm font-black transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-800 ${
                      active ? "bg-sky-50 text-sky-900" : "text-nktn-ink hover:bg-slate-50"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
            <div className="mt-3 rounded-2xl bg-slate-50 p-2">
              <p className="px-2 pb-2 text-xs font-black uppercase tracking-[0.18em] text-nktn-ink/45">{content.common.language}</p>
              <div className="grid grid-cols-2 gap-2">
                {locales.map((item) => (
                  <Link
                    key={item}
                    href={getLocaleHref(item)}
                    onClick={() => {
                      saveLocale(item);
                      setIsOpen(false);
                    }}
                    className={`rounded-xl px-3 py-2 text-xs font-black ${item === locale ? "bg-sky-800 text-white" : "bg-white text-nktn-ink/70"}`}
                  >
                    {localeLabels[item]}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <Link
                href={companyBase.lineUrl}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-1 rounded-full bg-[#06C755] py-3 text-xs font-black text-white hover:bg-[#05b04c]"
              >
                <MessageCircle className="size-3.5" />
                {content.common.lineConsult}
              </Link>
              <Link
                href={withLocale(locale, "/contact")}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-1 rounded-full bg-amber-500 py-3 text-xs font-black text-white hover:bg-amber-600"
              >
                <FileText className="size-3.5" />
                {content.common.contact}
              </Link>
            </div>
          </nav>
        )}
      </header>
    </div>
  );
}

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
    <div id="site-header-wrapper" className="sticky top-0 z-50 transition-all duration-300">
      {/* 1. Top High-Trust Bar */}
      <div id="top-info-bar" className="bg-[#071224] text-slate-300 text-xs border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2 sm:px-8">
          <div className="flex items-center gap-3 sm:gap-6">
            <span className="hidden sm:inline-flex items-center gap-2 text-slate-300 font-medium">
              <span className="size-1.5 rounded-full bg-[#19BAD7] animate-pulse" />
              {content.topBar.commitment}
            </span>
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-bold bg-amber-400/10 px-2 py-0.5 rounded text-[11px]">
              {content.topBar.hours}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href={`tel:${companyBase.phone}`}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-bold text-amber-400 hover:text-amber-300 transition"
              aria-label={locale === "ja" ? `電話相談: ${companyBase.phone}` : `Call: ${companyBase.phone}`}
            >
              <Phone className="size-3.5 text-amber-400" />
              <span>{companyBase.phone}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Header */}
      <header id="main-header" className="bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.06)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
          
          {/* Brand Logo */}
          <Link
            id="header-brand-logo"
            href={withLocale(locale, "/")}
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00729F]"
          >
            <span className="grid size-11 place-items-center overflow-hidden rounded-full bg-white shadow-xs ring-1 ring-slate-200/80 shrink-0">
              <Image
                src="/logo.png"
                alt="株式会社NKTN / Bawui Cleaning"
                width={44}
                height={44}
                className="size-11 object-cover"
                priority
              />
            </span>
            <div className="leading-tight">
              <span className="block text-sm font-black tracking-[0.14em] text-slate-900 font-serif-jp">
                株式会社NKTN
              </span>
              <span className="block text-[11px] font-extrabold text-amber-600 tracking-wider">
                Bawui Cleaning
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav id="header-desktop-nav" className="hidden lg:flex items-center gap-1" aria-label="Global navigation">
            {content.nav.map(([label, href]) => {
              const active = isActive(href);
              return (
                <Link
                  key={href}
                  href={withLocale(locale, href)}
                  className={`rounded-full px-3.5 py-1.5 text-[13px] font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00729F] ${
                    active
                      ? "bg-[#00729F]/10 text-[#00729F] font-black"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Action Group: Language Selector + Primary Contact Button */}
          <div id="header-action-group" className="flex items-center gap-2.5">
            
            {/* Language Selector Dropdown */}
            <div className="relative" ref={languageRef}>
              <button
                type="button"
                id="header-language-btn"
                className="flex items-center gap-1.5 h-9 px-3 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00729F] transition"
                aria-label={content.common.language}
                aria-expanded={isLanguageOpen}
                onClick={() => setIsLanguageOpen((current) => !current)}
              >
                <Globe2 className="size-4 text-slate-500" />
                <span className="text-sm leading-none">{localeFlags[locale]}</span>
                <span className="hidden sm:inline text-[11px] font-bold text-slate-600 uppercase">{locale}</span>
              </button>

              {isLanguageOpen && (
                <div className="absolute right-0 top-11 grid w-44 gap-1 rounded-2xl bg-white p-2 shadow-xl ring-1 ring-slate-200 z-50 animate-scale-in">
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
                      className={`flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-bold transition ${
                        item === locale
                          ? "bg-[#00729F] text-white font-black"
                          : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <span className="text-lg leading-none">{localeFlags[item]}</span>
                      <span>{localeNames[item]}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Primary Corporate Contact Button */}
            <Link
              id="header-contact-btn"
              href={withLocale(locale, "/contact")}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#00466D] to-[#00729F] hover:from-[#003859] hover:to-[#005f85] px-5 py-2 text-xs font-black text-white shadow-xs hover:shadow-md transition-all duration-300"
            >
              <FileText className="size-3.5" />
              <span>{content.common.contact}</span>
            </Link>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              type="button"
              id="header-mobile-toggle"
              className="lg:hidden grid size-9 place-items-center rounded-full bg-slate-100 text-slate-800 hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00729F] transition"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsOpen((current) => !current)}
            >
              {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <nav
            id="mobile-navigation"
            className="mx-4 mb-4 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-slate-200 lg:hidden animate-fade-in-up"
            aria-label="Mobile navigation"
          >
            <div className="grid gap-1">
              {content.nav.map(([label, href]) => {
                const active = isActive(href);
                return (
                  <Link
                    key={href}
                    href={withLocale(locale, href)}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-xl px-4 py-2.5 text-xs font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00729F] ${
                      active ? "bg-[#00729F]/10 text-[#00729F] font-black" : "text-slate-800 hover:bg-slate-50"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>

            <div className="mt-3 rounded-xl bg-slate-50 p-2.5 border border-slate-100">
              <p className="px-2 pb-1.5 text-[10px] font-black uppercase tracking-wider text-slate-400">
                {content.common.language}
              </p>
              <div className="grid grid-cols-2 gap-1.5">
                {locales.map((item) => (
                  <Link
                    key={item}
                    href={getLocaleHref(item)}
                    onClick={() => {
                      saveLocale(item);
                      setIsOpen(false);
                    }}
                    className={`rounded-lg px-2.5 py-1.5 text-[11px] font-bold text-center transition ${
                      item === locale ? "bg-[#00729F] text-white" : "bg-white text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {localeLabels[item]}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-3">
              <Link
                href={withLocale(locale, "/contact")}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#00466D] to-[#00729F] py-3 text-xs font-black text-white shadow-xs"
              >
                <FileText className="size-3.5" />
                <span>{content.common.contact}</span>
              </Link>
            </div>
          </nav>
        )}
      </header>
    </div>
  );
}

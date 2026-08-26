import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { type Locale, withLocale } from "@/lib/i18n";
import { getContent } from "@/lib/site-data-i18n";

interface PageHeroHeaderProps {
  locale: Locale;
  enTitle: string;
  jpTitle: string;
  lead: string;
  currentPathName: string;
  bgImage?: string;
}

export function PageHeroHeader({
  locale,
  enTitle,
  jpTitle,
  lead,
  currentPathName,
  bgImage,
}: PageHeroHeaderProps) {
  const content = getContent(locale);

  return (
    <section
      id="page-hero-header"
      className="page-hero-header relative overflow-hidden text-white py-16 sm:py-20 lg:py-24 border-b border-white/10 min-h-[280px] sm:min-h-[320px] flex items-end"
    >
      {/* Background Image or Gradient */}
      {bgImage ? (
        <div id="page-hero-bg-wrapper" className="page-hero-bg-wrapper absolute inset-0">
          <Image
            src={bgImage}
            alt={jpTitle}
            fill
            className="page-hero-bg-image object-cover hero-ken-burns"
            priority
            sizes="100vw"
          />
          <div className="page-hero-overlay absolute inset-0 bg-gradient-to-r from-[#071224]/95 via-[#00466D]/80 to-[#071224]/70" />
        </div>
      ) : (
        <div className="page-hero-gradient absolute inset-0 bg-gradient-to-r from-[#071224] via-[#00466D] to-[#071224]" />
      )}
      <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />
      
      <div id="page-hero-container" className="page-hero-container relative mx-auto max-w-6xl px-5 sm:px-8 w-full">
        {/* Breadcrumbs */}
        <nav id="page-breadcrumbs" aria-label="Breadcrumb" className="page-breadcrumbs mb-6 flex items-center gap-2 text-xs font-bold text-slate-300 animate-fade-in">
          <Link href={withLocale(locale, "/")} className="breadcrumb-home hover:text-white transition">
            {content.nav[0][0] || "Home"}
          </Link>
          <ChevronRight className="breadcrumb-separator size-3.5 text-[#19BAD7]" />
          <span className="breadcrumb-current text-[#19BAD7]">{currentPathName}</span>
        </nav>

        {/* Eyebrow */}
        <div className="page-hero-eyebrow flex items-center gap-3 mb-4 animate-fade-in-up">
          <span className="eyebrow-line h-px w-8 bg-[#19BAD7]" />
          <span className="eyebrow-text text-xs font-black tracking-[0.25em] text-[#19BAD7] uppercase">
            {enTitle}
          </span>
        </div>

        {/* Title in Mincho Serif */}
        <h1 className="page-hero-title font-serif-jp text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight drop-shadow-md animate-fade-in-up stagger-2">
          {jpTitle}
        </h1>

        {/* Lead */}
        <p className="page-hero-lead mt-5 max-w-3xl text-sm sm:text-base leading-relaxed text-slate-200 font-medium animate-fade-in-up stagger-3">
          {lead}
        </p>
      </div>
    </section>
  );
}

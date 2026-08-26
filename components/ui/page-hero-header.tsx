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
    <section className="relative overflow-hidden text-white py-16 sm:py-20 lg:py-24 border-b border-white/10 min-h-[280px] sm:min-h-[320px] flex items-end">
      {/* Background Image or Gradient */}
      {bgImage ? (
        <>
          <Image
            src={bgImage}
            alt={jpTitle}
            fill
            className="object-cover hero-ken-burns"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071224]/95 via-[#00466D]/80 to-[#071224]/70" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-r from-[#071224] via-[#00466D] to-[#071224]" />
      )}
      <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />
      
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 w-full">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-bold text-slate-300 animate-fade-in">
          <Link href={withLocale(locale, "/")} className="hover:text-white transition">
            {content.nav[0][0] || "Home"}
          </Link>
          <ChevronRight className="size-3.5 text-[#19BAD7]" />
          <span className="text-[#19BAD7]">{currentPathName}</span>
        </nav>

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4 animate-fade-in-up">
          <span className="h-px w-8 bg-[#19BAD7]" />
          <span className="text-xs font-black tracking-[0.25em] text-[#19BAD7] uppercase">
            {enTitle}
          </span>
        </div>

        {/* Title in Mincho Serif */}
        <h1 className="font-serif-jp text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight drop-shadow-md animate-fade-in-up stagger-2">
          {jpTitle}
        </h1>

        {/* Lead */}
        <p className="mt-5 max-w-3xl text-sm sm:text-base leading-relaxed text-slate-200 font-medium animate-fade-in-up stagger-3">
          {lead}
        </p>
      </div>
    </section>
  );
}

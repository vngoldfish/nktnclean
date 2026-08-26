import React from "react";
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
}

export function PageHeroHeader({
  locale,
  enTitle,
  jpTitle,
  lead,
  currentPathName,
}: PageHeroHeaderProps) {
  const content = getContent(locale);

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#071224] via-[#00466D] to-[#071224] text-white py-16 sm:py-20 lg:py-24 border-b border-white/10">
      <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />
      
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-bold text-slate-300">
          <Link href={withLocale(locale, "/")} className="hover:text-white transition">
            {content.nav[0][0] || "Home"}
          </Link>
          <ChevronRight className="size-3.5 text-[#19BAD7]" />
          <span className="text-[#19BAD7]">{currentPathName}</span>
        </nav>

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-[#19BAD7]" />
          <span className="text-xs font-black tracking-[0.25em] text-[#19BAD7] uppercase">
            {enTitle}
          </span>
        </div>

        {/* Title in Mincho Serif */}
        <h1 className="font-serif-jp text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
          {jpTitle}
        </h1>

        {/* Lead */}
        <p className="mt-5 max-w-3xl text-sm sm:text-base leading-relaxed text-slate-200 font-medium">
          {lead}
        </p>
      </div>
    </section>
  );
}

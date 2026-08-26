"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { type Locale, withLocale } from "@/lib/i18n";
import { getContent } from "@/lib/site-data-i18n";

interface FaqAccordionProps {
  locale: Locale;
}

export function FaqAccordion({ locale }: FaqAccordionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const content = getContent(locale);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 px-5 sm:px-8 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="font-serif-jp text-xs font-black tracking-[0.25em] text-[#00729F] uppercase mb-2">
            FAQ
          </p>
          <h2 className="font-serif-jp text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            {locale === "ja" ? "よくあるご質問" : locale === "vi" ? "Câu Hỏi Thường Gặp" : "Frequently Asked Questions"}
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-12 bg-[#00729F]" />
        </div>

        {/* Japanese Corporate Accordion List */}
        <div className="divide-y divide-slate-200/80 border-y border-slate-200/80">
          {content.faqItems.slice(0, 5).map(([question, answer], idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="transition-colors">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-3 sm:px-4 flex items-center justify-between text-left gap-4 hover:bg-slate-50 transition"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <span className="grid size-8 shrink-0 place-items-center rounded-md bg-[#00729F] text-white font-black text-xs font-serif-jp">
                      Q
                    </span>
                    <span className="font-serif-jp text-sm sm:text-base font-black text-slate-900 leading-snug">
                      {question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`size-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#00729F]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-6 pt-2 pl-14 sm:pl-16 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/50">
                    <div className="flex items-start gap-3">
                      <span className="font-serif-jp font-black text-amber-600 text-sm shrink-0">A.</span>
                      <p>{answer}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* View all FAQ button */}
        <div className="mt-10 text-center">
          <Link
            href={withLocale(locale, "/faq")}
            className="inline-flex items-center gap-2 rounded-lg bg-slate-100 hover:bg-slate-200 px-6 py-3 text-xs sm:text-sm font-bold text-slate-700 transition"
          >
            <span>{content.common.allFaq}</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

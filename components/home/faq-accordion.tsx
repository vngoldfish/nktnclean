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
    <section
      id="faq-home-section"
      className="section-faq-home min-h-[85vh] lg:min-h-screen py-20 sm:py-24 lg:py-32 px-5 sm:px-8 bg-white border-b border-slate-200/80 scroll-mt-16 sm:scroll-mt-20 flex flex-col justify-center"
    >
      <div className="faq-container mx-auto max-w-4xl w-full">
        
        {/* Section Header */}
        <div id="faq-header" className="faq-header text-center max-w-3xl mx-auto mb-14">
          <p className="faq-eyebrow font-serif-jp text-xs font-black tracking-[0.25em] text-[#00729F] uppercase mb-2">
            FAQ
          </p>
          <h2 className="faq-title font-serif-jp text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            {locale === "ja" ? "よくあるご質問" : locale === "vi" ? "Câu Hỏi Thường Gặp" : "Frequently Asked Questions"}
          </h2>
          <div className="faq-divider mx-auto mt-3 h-0.5 w-12 bg-[#00729F]" />
        </div>

        {/* Japanese Corporate Accordion List */}
        <div id="faq-accordion-list" className="faq-accordion-list divide-y divide-slate-200/80 border-y border-slate-200/80">
          {content.faqItems.slice(0, 5).map(([question, answer], idx) => {
            const isOpen = openIdx === idx;
            const panelId = `home-faq-panel-${idx}`;
            return (
              <div key={question} id={`faq-item-${idx + 1}`} className="faq-item transition-colors">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="faq-toggle-btn w-full py-5 px-3 sm:px-4 flex items-center justify-between text-left gap-4 hover:bg-slate-50 transition"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <div className="faq-question-wrap flex items-center gap-3.5 sm:gap-4">
                    <span className="faq-q-badge grid size-8 shrink-0 place-items-center rounded-md bg-[#00729F] text-white font-black text-xs font-serif-jp">
                      Q
                    </span>
                    <span className="faq-question-text font-serif-jp text-sm sm:text-base font-black text-slate-900 leading-snug">
                      {question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`faq-chevron size-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#00729F]" : ""
                    }`}
                  />
                </button>

                <div
                  id={panelId}
                  role="region"
                  className="faq-answer-panel grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="faq-answer-inner overflow-hidden">
                    <div className="px-4 pb-6 pt-2 pl-14 sm:pl-16 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/50">
                      <div className="flex items-start gap-3 animate-fade-in">
                        <span className="faq-a-badge font-serif-jp font-black text-amber-600 text-sm shrink-0">A.</span>
                        <p className="faq-answer-text">{answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View all FAQ button */}
        <div id="faq-bottom-cta" className="faq-bottom-cta mt-10 text-center">
          <Link
            href={withLocale(locale, "/faq")}
            className="faq-btn-all inline-flex items-center gap-2 rounded-lg bg-slate-100 hover:bg-slate-200 px-6 py-3 text-xs sm:text-sm font-bold text-slate-700 transition"
          >
            <span>{locale === "ja" ? "よくある質問一覧を見る" : locale === "vi" ? "Xem tất cả câu hỏi" : "View All FAQs"}</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

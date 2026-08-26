"use client";

import { useState, useId } from "react";
import { ChevronDown } from "lucide-react";

function FaqAccordionItem({ question, answer, defaultOpen, index }: { question: string; answer: string; defaultOpen?: boolean; index?: number }) {
  const [isOpen, setIsOpen] = useState(defaultOpen || false);
  const panelId = useId();

  return (
    <div id={`faq-accordion-card-${(index ?? 0) + 1}`} className="faq-accordion-card bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all duration-200 hover:shadow-sm">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="faq-question-btn flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-slate-50 transition-colors duration-200"
      >
        <div className="faq-question-content flex items-center gap-3.5 sm:gap-4">
          <span className="faq-q-badge grid size-8 shrink-0 place-items-center rounded-lg bg-[#00729F] text-white font-serif-jp font-black text-xs">
            Q
          </span>
          <span className="faq-question-text font-serif-jp text-base sm:text-lg font-black text-slate-900 leading-snug">
            {question}
          </span>
        </div>
        <ChevronDown
          className={`faq-chevron size-5 shrink-0 text-slate-400 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-[#00729F]" : ""
          }`}
        />
      </button>

      {/* Smooth expand/collapse with grid rows trick */}
      <div
        id={panelId}
        role="region"
        className="faq-answer-collapse grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="faq-answer-inner overflow-hidden">
          <div className="faq-answer-box px-5 sm:px-6 pb-6 pt-2 pl-14 sm:pl-16 bg-slate-50/50 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <div className="faq-answer-row flex items-start gap-2.5 animate-fade-in">
              <span className="faq-a-badge font-serif-jp font-black text-amber-600 text-sm shrink-0">A.</span>
              <p className="faq-answer-text whitespace-pre-line">{answer}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FaqClient({ items }: { items: string[][] }) {
  return (
    <div id="faq-client-list" className="faq-client-list space-y-3.5">
      {items.map(([question, answer], idx) => (
        <FaqAccordionItem key={question} question={question} answer={answer} defaultOpen={idx === 0} index={idx} />
      ))}
    </div>
  );
}

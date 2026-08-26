"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

function FaqAccordionItem({ question, answer, defaultOpen }: { question: string; answer: string; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen || false);

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all duration-200">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-slate-50 transition"
      >
        <div className="flex items-center gap-3.5 sm:gap-4">
          <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-[#00729F] text-white font-serif-jp font-black text-xs">
            Q
          </span>
          <h2 className="font-serif-jp text-base sm:text-lg font-black text-slate-900 leading-snug">
            {question}
          </h2>
        </div>
        <ChevronDown
          className={`size-5 shrink-0 text-slate-400 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-[#00729F]" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="px-5 sm:px-6 pb-6 pt-2 pl-14 sm:pl-16 bg-slate-50/50 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <div className="flex items-start gap-2.5">
            <span className="font-serif-jp font-black text-amber-600 text-sm shrink-0">A.</span>
            <p className="whitespace-pre-line">{answer}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function FaqClient({ items }: { items: string[][] }) {
  return (
    <div className="space-y-3.5">
      {items.map(([question, answer], idx) => (
        <FaqAccordionItem key={question} question={question} answer={answer} defaultOpen={idx === 0} />
      ))}
    </div>
  );
}

"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

import { Card } from "@/components/ui/card";

function FaqAccordionItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="overflow-hidden p-0">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center gap-4 p-6 text-left lg:p-8"
      >
        <HelpCircle className="mt-0.5 size-6 shrink-0 text-nktn-blue" />
        <h2 className="flex-1 text-xl font-black tracking-[-0.03em]">{question}</h2>
        <ChevronDown
          className={`size-5 shrink-0 text-nktn-ink/40 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 pl-16 leading-8 text-nktn-ink/66 lg:px-8 lg:pb-8 lg:pl-[4.5rem]">
            {answer}
          </p>
        </div>
      </div>
    </Card>
  );
}

export default function FaqClient({ items }: { items: string[][] }) {
  return (
    <div className="grid gap-4">
      {items.map(([question, answer]) => (
        <FaqAccordionItem key={question} question={question} answer={answer} />
      ))}
    </div>
  );
}

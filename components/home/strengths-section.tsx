"use client";

import { motion } from "framer-motion";
import { type LucideIcon, Network, TimerReset, ShieldCheck, Trophy } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { type Locale } from "@/lib/i18n";
import { getContent } from "@/lib/site-data-i18n";

const strengthIcons: LucideIcon[] = [Network, TimerReset, ShieldCheck, Trophy];

interface StrengthsSectionProps {
  locale: Locale;
}

export function StrengthsSection({ locale }: StrengthsSectionProps) {
  const content = getContent(locale);

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div className="text-center mb-14">
        <Badge variant="orange" className="mb-6">Why NKTN</Badge>
        <h2 className="whitespace-normal sm:whitespace-pre-line text-balance text-3xl font-black tracking-[-0.04em] text-nktn-ink sm:text-5xl lg:text-6xl">
          {content.home.strengthsTitle}
        </h2>
      </div>
      <div className="space-y-0">
        {content.strengths.map((strength, index) => {
          const Icon = strengthIcons[index] || ShieldCheck;
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={strength.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-14 border-b border-slate-200 last:border-b-0 ${isEven ? '' : 'lg:flex-row-reverse'}`}
            >
              {/* Number + Icon side */}
              <div className="flex flex-col items-center lg:items-start shrink-0">
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-sky-800/20 text-8xl sm:text-9xl font-black leading-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="grid size-16 place-items-center rounded-2xl bg-sky-50 ring-1 ring-sky-100">
                  <Icon className="size-8 text-nktn-blue" />
                </div>
              </div>
              {/* Content side */}
              <div className={`text-center lg:text-left flex-1`}>
                <p className="text-amber-600 text-sm font-black tracking-widest mb-2">
                  {locale === 'ja' ? `${content.common.reason || "理由"}${index + 1}` : `${content.common.reason || "Reason"} ${index + 1}`}
                </p>
                <h3 className="text-2xl sm:text-3xl font-black tracking-[-0.03em] text-nktn-ink mb-4">
                  {strength.title}
                </h3>
                <p className="text-base leading-8 text-nktn-ink/64 max-w-2xl">
                  {strength.body}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

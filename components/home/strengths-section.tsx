import React from "react";
import { Network, TimerReset, ShieldCheck, Trophy, Sparkles, CheckCircle2 } from "lucide-react";
import { type Locale } from "@/lib/i18n";
import { getContent } from "@/lib/site-data-i18n";

interface StrengthsSectionProps {
  locale: Locale;
}

export function StrengthsSection({ locale }: StrengthsSectionProps) {
  const content = getContent(locale);

  const cardDetails = [
    {
      icon: Network,
      badge: locale === "ja" ? "組織力・ネットワーク" : "Strong Operational Network",
      gradient: "from-sky-500/10 via-sky-50/50 to-transparent",
      accentColor: "text-sky-800 bg-sky-50 border-sky-200/80",
    },
    {
      icon: TimerReset,
      badge: locale === "ja" ? "圧倒的スピード・24H受付" : "Rapid Same-Day Turnover",
      gradient: "from-emerald-500/10 via-emerald-50/50 to-transparent",
      accentColor: "text-emerald-800 bg-emerald-50 border-emerald-200/80",
    },
    {
      icon: ShieldCheck,
      badge: locale === "ja" ? "ホテル水準の二重点検" : "Hotel Grade Dual Inspection",
      gradient: "from-amber-500/10 via-amber-50/50 to-transparent",
      accentColor: "text-amber-800 bg-amber-50 border-amber-200/80",
    },
    {
      icon: Trophy,
      badge: locale === "ja" ? "豊富な実績・長期パートナー" : "Proven Track Record",
      gradient: "from-indigo-500/10 via-indigo-50/50 to-transparent",
      accentColor: "text-indigo-800 bg-indigo-50 border-indigo-200/80",
    },
  ];

  return (
    <section className="relative py-20 px-5 sm:px-8 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 border border-sky-200/80 px-4 py-1.5 text-xs font-black tracking-widest text-sky-800 uppercase mb-4">
            <Sparkles className="size-3.5 text-sky-600" />
            WHY NKTN
          </span>
          <h2 className="whitespace-normal sm:whitespace-pre-line text-balance text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            {content.home.strengthsTitle}
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            {locale === "ja"
              ? "関西エリアの民泊・ホテルオーナー様に選ばれ続ける4つの強み。"
              : locale === "vi"
              ? "4 thế mạnh vượt trội giúp NKTN trở thành đối tác tin cậy hàng đầu của các chủ cơ sở lưu trú."
              : "4 core competitive advantages that make NKTN the preferred cleaning partner across Kansai."}
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {content.strengths.map((strength, index) => {
            const detail = cardDetails[index] || cardDetails[0];
            const Icon = detail.icon;
            
            // Layout asymmetry: card 0 and 3 take 7 columns, card 1 and 2 take 5 columns
            const colSpan = index === 0 || index === 3 ? "md:col-span-7" : "md:col-span-5";

            return (
              <div
                key={strength.title}
                className={`${colSpan} group relative rounded-3xl border border-slate-200/80 bg-white p-7 sm:p-9 shadow-elevated transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden flex flex-col justify-between`}
              >
                {/* Background ambient gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${detail.gradient} opacity-60 pointer-events-none transition-opacity duration-300 group-hover:opacity-100`}
                />

                {/* Top Number & Tag Row */}
                <div className="relative z-10 flex items-center justify-between mb-6">
                  <span className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1 text-xs font-black ${detail.accentColor}`}>
                    <CheckCircle2 className="size-3.5" />
                    {detail.badge}
                  </span>
                  <span className="text-4xl sm:text-5xl font-black text-slate-200/80 tracking-tighter group-hover:text-sky-800/20 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-4 inline-flex p-3.5 rounded-2xl bg-white shadow-soft border border-slate-100 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="size-6 text-sky-800" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug mb-3">
                    {strength.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {strength.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

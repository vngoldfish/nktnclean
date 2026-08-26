import React from "react";
import { ShieldCheck, Clock3, Star, Globe2 } from "lucide-react";
import { type Locale } from "@/lib/i18n";

interface TrustBadgesBarProps {
  locale: Locale;
}

export function TrustBadgesBar({ locale }: TrustBadgesBarProps) {
  const items = [
    {
      icon: Clock3,
      title: locale === "ja" ? "最短即日駆けつけ" : locale === "vi" ? "Có mặt trong ngày" : "Same-Day Dispatch",
      subtitle: locale === "ja" ? "24時間LINE受付" : locale === "vi" ? "Tiếp nhận 24/7" : "24/7 LINE Intake",
      color: "bg-sky-50 text-sky-700 border-sky-200/80",
    },
    {
      icon: ShieldCheck,
      title: locale === "ja" ? "最高1億円 損害保険" : locale === "vi" ? "Bảo hiểm bồi thường 100%" : "Full Liability Insured",
      subtitle: locale === "ja" ? "安心の補償体制完備" : locale === "vi" ? "Bảo vệ tài sản tối đa" : "100% Risk Protected",
      color: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
    },
    {
      icon: Star,
      title: locale === "ja" ? "満足度 98.2%" : locale === "vi" ? "Độ hài lòng 98.2%" : "98.2% Satisfaction",
      subtitle: locale === "ja" ? "リピート率 95.8%" : locale === "vi" ? "Tỷ lệ tái ký 95.8%" : "95.8% Partner Retention",
      color: "bg-amber-50 text-amber-700 border-amber-200/80",
    },
    {
      icon: Globe2,
      title: locale === "ja" ? "多言語対応（4カ国語）" : locale === "vi" ? "Hỗ trợ 4 ngôn ngữ" : "Multilingual Support",
      subtitle: locale === "ja" ? "日・英・越・中" : locale === "vi" ? "Nhật, Anh, Việt, Trung" : "JP / EN / VI / ZH",
      color: "bg-indigo-50 text-indigo-700 border-indigo-200/80",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-5 sm:px-8 -mt-6 sm:-mt-8 relative z-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 rounded-3xl bg-white/95 backdrop-blur-xl p-4 sm:p-5 border border-slate-200/90 shadow-elevated">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-3 p-2.5 sm:p-3 rounded-2xl hover:bg-slate-50/80 transition-colors"
            >
              <span className={`grid size-10 sm:size-11 shrink-0 place-items-center rounded-xl border ${item.color} shadow-xs`}>
                <Icon className="size-5" />
              </span>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm font-black text-slate-900 truncate leading-tight">
                  {item.title}
                </p>
                <p className="text-[11px] font-bold text-slate-500 truncate mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

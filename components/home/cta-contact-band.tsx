import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, FileText, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

import { type Locale, withLocale } from "@/lib/i18n";
import { companyBase, getContent } from "@/lib/site-data-i18n";

interface CtaContactBandProps {
  locale: Locale;
  variant?: "dark" | "line-accent" | "light-clean";
}

export function CtaContactBand({ locale, variant = "dark" }: CtaContactBandProps) {
  const content = getContent(locale);

  if (variant === "line-accent") {
    return (
      <section className="relative overflow-hidden py-14 px-5 sm:px-8 bg-gradient-to-r from-[#034426] via-[#057A44] to-[#046137] text-white border-y border-emerald-700/50 shadow-inner">
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-black text-white backdrop-blur-md">
              <Sparkles className="size-3 text-amber-300" />
              {locale === "ja" ? "簡単30秒・LINE写真見積もり" : "Quick 30s LINE Quote"}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              {locale === "ja" ? "間取りや部屋の写真を送るだけですぐに見積もり" : "Send room photos on LINE for instant pricing"}
            </h3>
            <p className="text-emerald-100 text-xs sm:text-sm">
              {locale === "ja" ? "24時間受付中・最短15分で返信いたします" : "24/7 Intake • Fast response within 15 mins"}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <Link
              href={companyBase.lineUrl}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-black text-[#046137] shadow-elevated hover:bg-emerald-50 hover:scale-105 transition-all"
              data-analytics="line_band_accent_click"
            >
              <MessageCircle className="size-5 text-[#06C755]" />
              {content.common.lineConsultLong}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "light-clean") {
    return (
      <section className="py-16 px-5 sm:px-8 bg-gradient-to-b from-white to-slate-50 border-y border-slate-200/80">
        <div className="mx-auto max-w-4xl text-center rounded-3xl bg-white p-8 sm:p-12 border border-slate-200/90 shadow-elevated">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 border border-sky-200/80 px-4 py-1 text-xs font-black text-sky-800 uppercase mb-4">
            <ShieldCheck className="size-3.5 text-sky-600" />
            {content.home.ctaBandLead}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-6">
            {content.home.ctaBandTitle}
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              href={companyBase.lineUrl}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-[#06C755] px-8 py-4 text-base font-black text-white shadow-glow-green hover:bg-[#05b04c] transition"
              data-analytics="line_cta_light_click"
            >
              <MessageCircle className="size-5" />
              {content.common.lineConsultLong}
            </Link>
            <Link
              href={`tel:${companyBase.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-8 py-4 text-base font-black text-white shadow-soft hover:bg-slate-800 transition"
              data-analytics="phone_cta_light_click"
            >
              <Phone className="size-5 text-amber-400" />
              {companyBase.phone}
            </Link>
          </div>
        </div>
      </section>
    );
  }

  // Default: Dark Premium
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 px-5 sm:px-8 border-t border-slate-800">
      {/* Background Photo with Overlay */}
      <Image
        src="/works/photo-staff.jpg"
        alt="NKTN Cleaning Team"
        fill
        className="object-cover opacity-20"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/80 to-slate-950/90" />
      {/* Glow highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-sky-500/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="text-sky-300 text-xs sm:text-sm font-black tracking-widest uppercase mb-3">
          {content.home.ctaBandLead}
        </p>
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-8">
          {content.home.ctaBandTitle}
        </h2>

        {/* Giant phone number card */}
        <Link
          href={`tel:${companyBase.phone}`}
          className="inline-flex items-center gap-3.5 mb-6 group rounded-2xl bg-white/5 border border-white/10 px-6 py-3.5 hover:bg-white/10 transition-all"
          data-analytics="phone_cta_click"
        >
          <span className="grid size-12 sm:size-14 place-items-center rounded-full bg-amber-400 text-slate-950 shadow-md group-hover:scale-105 transition">
            <Phone className="size-6 sm:size-7" />
          </span>
          <div className="text-left">
            <span className="block text-slate-400 text-[11px] font-bold">
              {content.topBar.hours}
            </span>
            <span className="block text-white text-2xl sm:text-4xl font-black tracking-wider">
              {companyBase.phone}
            </span>
          </div>
        </Link>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mt-4">
          <Link
            href={companyBase.lineUrl}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-[#06C755] px-8 py-4 text-base font-black text-white shadow-glow-green hover:bg-[#05b04c] hover:scale-[1.02] transition-all"
            data-analytics="line_cta_click"
          >
            <MessageCircle className="size-5" />
            {content.common.lineConsultLong}
          </Link>
          <Link
            href={withLocale(locale, "/contact")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 border border-white/20 px-8 py-4 text-base font-bold text-white shadow-soft hover:bg-white/20 transition-all"
          >
            <FileText className="size-5" />
            {content.common.contact}
          </Link>
        </div>
      </div>
    </section>
  );
}

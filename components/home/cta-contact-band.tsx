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

  // Default: Dark Premium (Clean 3-Channel Grid)
  return (
    <section
      id="cta-contact-band-section"
      className="section-cta-contact-band relative overflow-hidden bg-slate-950 min-h-[75vh] lg:min-h-[85vh] py-20 sm:py-24 lg:py-32 px-5 sm:px-8 border-t border-slate-800 scroll-mt-16 sm:scroll-mt-20 flex flex-col justify-center"
    >
      {/* Background Photo with Overlay */}
      <Image
        src="/works/photo-staff.jpg"
        alt="NKTN Cleaning Team"
        fill
        className="cta-bg-photo object-cover opacity-15"
        sizes="100vw"
      />
      <div className="cta-overlay-dark absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/95" />
      {/* Glow highlight */}
      <div className="cta-glow-effect absolute top-0 left-1/2 -translate-x-1/2 w-96 h-28 bg-sky-500/10 blur-3xl pointer-events-none" />

      <div id="cta-content-container" className="cta-content-container relative mx-auto max-w-5xl text-center">
        <p className="cta-eyebrow-lead text-[#19BAD7] text-xs font-black tracking-[0.25em] uppercase mb-2">
          {content.home.ctaBandLead}
        </p>
        <h2 className="cta-heading font-serif-jp text-white text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-10">
          {content.home.ctaBandTitle}
        </h2>

        {/* 3 Balanced Contact Cards Grid */}
        <div id="cta-action-grid" className="cta-action-grid grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          
          {/* Channel 1: Phone */}
          <Link
            id="cta-card-phone"
            href={`tel:${companyBase.phone}`}
            className="cta-card rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between group"
            data-analytics="phone_cta_click"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="grid size-9 place-items-center rounded-xl bg-amber-400 text-slate-950 shadow-xs">
                  <Phone className="size-4.5" />
                </span>
                <span className="text-[11px] font-bold text-slate-400">{content.topBar.hours}</span>
              </div>
              <p className="text-xs font-bold text-slate-300 mb-1">
                {locale === "ja" ? "お電話でのご相談" : locale === "vi" ? "Tư vấn qua điện thoại" : "Phone Call"}
              </p>
              <p className="font-serif-jp text-xl sm:text-2xl font-black text-white tracking-wide">
                {companyBase.phone}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-amber-400 group-hover:translate-x-0.5 transition-transform">
              <span>{locale === "ja" ? "電話をかける" : locale === "vi" ? "Gọi ngay" : "Call Now"}</span>
              <ArrowRight className="size-3.5" />
            </div>
          </Link>

          {/* Channel 2: LINE (Recommended) */}
          <Link
            id="cta-card-line"
            href={companyBase.lineUrl}
            className="cta-card rounded-2xl bg-gradient-to-b from-[#06C755]/20 to-[#06C755]/10 border border-[#06C755]/40 p-5 hover:border-[#06C755] hover:from-[#06C755]/30 transition-all flex flex-col justify-between group relative overflow-hidden"
            data-analytics="line_cta_click"
          >
            <span className="absolute top-2.5 right-3 rounded-md bg-[#06C755] px-2 py-0.5 text-[10px] font-black text-white uppercase shadow-xs">
              {locale === "ja" ? "推奨・最速" : locale === "vi" ? "Khuyên dùng" : "Fastest"}
            </span>
            <div>
              <div className="flex items-center mb-3">
                <span className="grid size-9 place-items-center rounded-xl bg-[#06C755] text-white shadow-xs">
                  <MessageCircle className="size-4.5" />
                </span>
              </div>
              <p className="text-xs font-bold text-emerald-200 mb-1">
                {locale === "ja" ? "LINE公式アカウント" : "Official LINE Account"}
              </p>
              <p className="font-serif-jp text-base sm:text-lg font-black text-white leading-snug">
                {content.common.lineConsultLong}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-emerald-500/20 flex items-center justify-between text-xs font-bold text-[#06C755] group-hover:translate-x-0.5 transition-transform">
              <span>{locale === "ja" ? "LINEで相談・見積もり" : locale === "vi" ? "Nhắn tin LINE" : "Chat on LINE"}</span>
              <ArrowRight className="size-3.5" />
            </div>
          </Link>

          {/* Channel 3: Contact Form */}
          <Link
            id="cta-card-contact"
            href={withLocale(locale, "/contact")}
            className="cta-card rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 hover:border-[#19BAD7]/40 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="grid size-9 place-items-center rounded-xl bg-[#00729F] text-white shadow-xs">
                  <FileText className="size-4.5" />
                </span>
                <span className="text-[11px] font-bold text-slate-400">24/7 Intake</span>
              </div>
              <p className="text-xs font-bold text-slate-300 mb-1">
                {locale === "ja" ? "Webフォーム問い合わせ" : locale === "vi" ? "Biểu mẫu trực tuyến" : "Web Inquiry Form"}
              </p>
              <p className="font-serif-jp text-base sm:text-lg font-black text-white leading-snug">
                {content.common.contact}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#19BAD7] group-hover:translate-x-0.5 transition-transform">
              <span>{locale === "ja" ? "フォームを開く" : locale === "vi" ? "Gửi yêu cầu" : "Open Form"}</span>
              <ArrowRight className="size-3.5" />
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}

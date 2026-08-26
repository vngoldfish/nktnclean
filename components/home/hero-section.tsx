import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, MessageCircle, Star, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";

import { type Locale, withLocale } from "@/lib/i18n";
import { companyBase, getContent } from "@/lib/site-data-i18n";

const sharedImages = {
  room: "/works/photo-room.jpg",
  staff: "/works/photo-staff.jpg",
};

interface HeroSectionProps {
  locale: Locale;
}

export function HeroSection({ locale }: HeroSectionProps) {
  const content = getContent(locale);

  return (
    <section className="relative overflow-hidden mesh-gradient-hero border-b border-slate-200/70 pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Japanese Craft Trust Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full bg-white/90 border border-sky-200/80 px-4 py-1.5 shadow-xs backdrop-blur-md">
              <span className="flex size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-black tracking-wide text-sky-900">
                {content.home.badge}
              </span>
              <span className="hidden sm:inline text-[11px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">
                {locale === "ja" ? "即日相談可" : locale === "vi" ? "Tiếp nhận trong ngày" : "Fast Dispatch"}
              </span>
            </div>

            {/* Headline */}
            <h1 className="whitespace-normal sm:whitespace-pre-line text-balance text-4xl font-black leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {content.home.title}
            </h1>

            {/* Lead text */}
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {content.home.lead}
            </p>

            {/* Value bullets */}
            <div className="mt-6 flex flex-wrap gap-y-2 gap-x-4 text-xs sm:text-sm font-bold text-slate-700">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-emerald-600" />
                {locale === "ja" ? "全室写真付きLINE報告" : locale === "vi" ? "Báo cáo ảnh chụp qua LINE" : "Photo Reports via LINE"}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-emerald-600" />
                {locale === "ja" ? "損害保険最高1億円完備" : locale === "vi" ? "Bảo hiểm trách nhiệm 100%" : "Fully Insured"}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-emerald-600" />
                {locale === "ja" ? "専属スタッフ・インボイス対応" : locale === "vi" ? "Nhân viên chuyên nghiệp & Hóa đơn" : "In-house Certified Team"}
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link
                href={companyBase.lineUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#06C755] px-8 py-4 text-base font-black text-white shadow-glow-green hover:bg-[#05b04c] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                data-analytics="hero_line_click"
              >
                <MessageCircle className="size-5" />
                {content.common.lineConsultLong}
                <ArrowRight className="size-4 opacity-80" />
              </Link>
              <Link
                href={withLocale(locale, "/services")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-white border border-slate-300/80 px-7 py-4 text-base font-bold text-slate-800 shadow-soft hover:bg-slate-50 hover:border-slate-400 active:scale-[0.98] transition-all duration-200"
              >
                {content.common.viewServices}
              </Link>
            </div>

            {/* Quick Contact & Hours Bar */}
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6 border-t border-slate-200/80 pt-6 w-full text-slate-700">
              <a
                href={`tel:${companyBase.phone}`}
                className="flex items-center gap-2.5 hover:text-sky-800 transition group"
                data-analytics="hero_phone_click"
              >
                <span className="grid size-9 place-items-center rounded-full bg-sky-100/80 text-sky-800 group-hover:bg-sky-800 group-hover:text-white transition">
                  <Phone className="size-4" />
                </span>
                <div>
                  <span className="text-xs font-bold text-slate-400 block leading-none">
                    {locale === "ja" ? "お電話でのご相談・お見積もり" : "Direct Phone Consultation"}
                  </span>
                  <span className="text-base font-black text-slate-900 tracking-wide">
                    {companyBase.phone}
                  </span>
                </div>
              </a>

              <div className="hidden sm:block h-8 w-px bg-slate-200" />

              <div className="text-xs text-slate-500">
                <span className="font-bold text-slate-700 block">
                  {content.topBar.hours}
                </span>
                <span>{locale === "ja" ? "大阪市内・近郊最短即日対応" : "Osaka & Kansai Fast Coverage"}</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Composition with Floating Proof Cards */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/* Decorative Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-sky-400/20 to-emerald-400/20 rounded-3xl blur-2xl opacity-50 -z-10" />

            <div className="grid grid-cols-2 gap-4 lg:h-[460px]">
              {/* Photo 1 */}
              <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-white/80 h-64 sm:h-80 lg:h-[88%]">
                <Image
                  src={sharedImages.room}
                  alt="Hotel Room Cleaning Quality"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 50vw, 320px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-[10px] font-bold text-sky-300">BAWUI STANDARD</p>
                  <p className="text-xs font-black">客室・水回り徹底美装</p>
                </div>
              </div>

              {/* Photo 2 */}
              <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-white/80 h-64 sm:h-80 lg:h-[88%] mt-8 lg:mt-12">
                <Image
                  src={sharedImages.staff}
                  alt="Professional Cleaning Staff"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 50vw, 320px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-[10px] font-bold text-emerald-300">PROFESSIONAL TEAM</p>
                  <p className="text-xs font-black">研修済み専属スタッフ</p>
                </div>
              </div>
            </div>

            {/* Floating Live Satisfaction Card */}
            <div className="absolute -bottom-6 left-2 sm:-left-6 rounded-2xl bg-white/95 backdrop-blur-xl p-3.5 sm:p-4 border border-slate-200/90 shadow-elevated z-10 flex items-center gap-3">
              <div className="grid size-11 place-items-center rounded-xl bg-amber-50 text-amber-600 ring-1 ring-amber-200/80">
                <Star className="size-6 fill-amber-400 text-amber-400" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-base font-black text-slate-900">4.98</span>
                  <div className="flex text-amber-400 text-xs">★★★★★</div>
                </div>
                <p className="text-[11px] font-bold text-slate-500">
                  {locale === "ja" ? "顧客満足度 98.2% (関西120+施設)" : "4.98/5.0 Partner Satisfaction"}
                </p>
              </div>
            </div>

            {/* Floating Top Badge */}
            <div className="absolute -top-4 right-2 sm:-right-4 rounded-xl bg-slate-900 text-white px-3.5 py-2 shadow-elevated flex items-center gap-2 text-xs font-black z-10">
              <ShieldCheck className="size-4 text-emerald-400" />
              <span>{locale === "ja" ? "損害保険 100% 完備" : "Fully Insured Guarantee"}</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

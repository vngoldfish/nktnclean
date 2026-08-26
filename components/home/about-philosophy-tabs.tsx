"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { type Locale, withLocale } from "@/lib/i18n";
import { companyBase, getContent } from "@/lib/site-data-i18n";

interface AboutPhilosophyTabsProps {
  locale: Locale;
}

export function AboutPhilosophyTabs({ locale }: AboutPhilosophyTabsProps) {
  const [activeTab, setActiveTab] = useState<"philosophy" | "profile">("philosophy");
  const content = getContent(locale);

  const collageImages = [
    { src: "/works/photo-room.jpg", alt: "Premium Room Cleaning" },
    { src: "/works/photo-staff.jpg", alt: "Professional Staff" },
    { src: "/works/photo-bathroom.jpg", alt: "Bathroom Deep Clean" },
    { src: "/works/company-office.jpg", alt: "NKTN Office" },
  ];

  return (
    <section
      id="about-philosophy-section"
      className="section-about-philosophy py-20 px-5 sm:px-8 bg-[#F6F6F6] border-b border-slate-200/80"
    >
      <div className="about-container mx-auto max-w-6xl">
        
        {/* 1. Header with Mincho Serif */}
        <div id="about-header" className="about-header text-center max-w-3xl mx-auto mb-14">
          <p className="about-eyebrow font-serif-jp text-xs font-black tracking-[0.25em] text-[#00729F] uppercase mb-2">
            ABOUT US
          </p>
          <h2 className="about-title font-serif-jp text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            {locale === "ja" ? "私たちについて" : locale === "vi" ? "Về Chúng Tôi" : "About NKTN"}
          </h2>
          <div className="about-divider mx-auto mt-3 h-0.5 w-12 bg-[#00729F]" />
          <p className="about-lead mt-6 text-slate-600 text-sm sm:text-base leading-relaxed">
            {locale === "ja" ? (
              <>
                私たちは大阪・関西エリアを中心に、ホテル客室清掃・民泊清掃・ビルメンテナンスを展開しています。<br className="hidden sm:inline" />
                「掃く・拭く・磨く」のおもてなし精神と、多国籍グローバル人材の確かな育成力で、<br className="hidden sm:inline" />
                お客様の大切な施設の価値を守り、活力ある社会活動に貢献します。
              </>
            ) : locale === "vi" ? (
              <>
                NKTN chuyên sâu trong lĩnh vực vệ sinh buồng phòng khách sạn, nhà nghỉ Minpaku và bảo trì tòa nhà tại Osaka.<br className="hidden sm:inline" />
                Với tinh thần &ldquo;Quét - Lau - Đánh bóng&rdquo; chuẩn Nhật và đội ngũ nhân sự đa quốc gia tận tâm, chúng tôi cam kết bảo vệ giá trị cơ sở lưu trú của bạn.
              </>
            ) : (
              <>
                Specialized hotel turnover, vacation rental cleaning, and building maintenance across Osaka and Kansai.<br className="hidden sm:inline" />
                Driven by hospitality craftsmanship and an empowered multinational team.
              </>
            )}
          </p>
        </div>

        {/* 2. Photo Collage Grid (2x2) */}
        <div id="about-photo-collage" className="about-photo-collage grid grid-cols-2 gap-3 sm:gap-4 mb-12 max-w-4xl mx-auto">
          {collageImages.map((img, i) => (
            <div
              key={img.src}
              className={`collage-item relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm group animate-fade-in-up stagger-${i + 1}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="collage-image object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 400px"
              />
              <div className="collage-overlay absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent group-hover:from-slate-900/50 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* 3. SuperHotelClean Style Tab Selector (PHILOSOPHY / PROFILE) */}
        <div id="about-tab-nav" className="about-tab-nav flex justify-center mb-8">
          <div role="tablist" aria-label="About NKTN" className="tab-switcher-pill inline-flex rounded-lg bg-slate-200/80 p-1">
            <button
              id="tab-philosophy"
              role="tab"
              type="button"
              aria-selected={activeTab === "philosophy"}
              aria-controls="panel-philosophy"
              onClick={() => setActiveTab("philosophy")}
              className={`tab-btn tab-btn-philosophy px-8 py-3 rounded-md font-serif-jp text-xs sm:text-sm font-black transition-all duration-200 ${
                activeTab === "philosophy"
                  ? "is-active bg-[#00729F] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              PHILOSOPHY（企業理念）
            </button>
            <button
              id="tab-profile"
              role="tab"
              type="button"
              aria-selected={activeTab === "profile"}
              aria-controls="panel-profile"
              onClick={() => setActiveTab("profile")}
              className={`tab-btn tab-btn-profile px-8 py-3 rounded-md font-serif-jp text-xs sm:text-sm font-black transition-all duration-200 ${
                activeTab === "profile"
                  ? "is-active bg-[#00729F] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              PROFILE（会社情報）
            </button>
          </div>
        </div>

        {/* 4. Clean Split Tab Body (Exact Super Hotel Clean visual style) */}
        <div id="about-tab-body" className="about-tab-body bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-10 lg:p-12 shadow-sm">
          {activeTab === "philosophy" ? (
            <div
              id="panel-philosophy"
              role="tabpanel"
              aria-labelledby="tab-philosophy"
              key="philosophy"
              className="grid gap-10 lg:grid-cols-12 lg:items-center tab-content-enter"
            >
              <div className="lg:col-span-6 relative aspect-[16/10] rounded-xl overflow-hidden shadow-sm">
                <Image
                  src="/works/photo-staff.jpg"
                  alt="NKTN Philosophy"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </div>

              <div className="lg:col-span-6 space-y-4">
                <p className="font-serif-jp text-xs font-black tracking-[0.2em] text-[#00729F] uppercase">
                  PHILOSOPHY
                </p>
                <h3 className="font-serif-jp text-2xl sm:text-3xl font-black text-[#00466D] leading-snug">
                  {locale === "ja" 
                    ? "誰もが満足するハイクオリティな\nサービスで社会活動に貢献" 
                    : locale === "vi" 
                    ? "Dịch vụ chất lượng cao,\nkiến tạo giá trị vững bền" 
                    : "High-Quality Hospitality\nEmpowering Accommodation"}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {locale === "ja"
                    ? "私たちは「掃く・拭く・磨く」の精神を基本とし、お客様にハイクオリティな清掃とおもてなしによって、活力ある観光・宿泊産業に貢献するマルチナショナル企業を目指します。"
                    : locale === "vi"
                    ? "Lấy tinh thần 'Quét - Lau - Đánh bóng' làm nền tảng, chúng tôi mang đến dịch vụ vệ sinh buồng phòng tiêu chuẩn cao nhất, giúp cơ sở luôn sạch đẹp hoàn hảo đón khách."
                    : "Grounded in hospitality ethics and standardized room care, we elevate property quality and guest satisfaction."}
                </p>

                <div className="pt-2 space-y-2">
                  {[
                    locale === "ja" ? "インスペクターによる客室二重チェック体制" : "Dual supervisor inspection protocols",
                    locale === "ja" ? "専任トレーナーによるホテル基準の社内研修" : "Certified in-house hotel standard training",
                    locale === "ja" ? "最高1億円の損害賠償保険完備で安心" : "Comprehensive liability insurance protection",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800">
                      <CheckCircle2 className="size-4 text-[#19BAD7] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    href={withLocale(locale, "/company")}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#00729F] hover:bg-[#00466D] px-6 py-3 text-xs sm:text-sm font-black text-white transition"
                  >
                    <span>{locale === "ja" ? "企業理念の詳細" : "Read Philosophy"}</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div
              id="panel-profile"
              role="tabpanel"
              aria-labelledby="tab-profile"
              key="profile"
              className="grid gap-10 lg:grid-cols-12 lg:items-center tab-content-enter"
            >
              <div className="lg:col-span-6 relative aspect-[16/10] rounded-xl overflow-hidden shadow-sm">
                <Image
                  src="/works/photo-room.jpg"
                  alt="NKTN Profile"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </div>

              <div className="lg:col-span-6 space-y-4">
                <p className="font-serif-jp text-xs font-black tracking-[0.2em] text-[#00729F] uppercase">
                  PROFILE
                </p>
                <h3 className="font-serif-jp text-2xl sm:text-3xl font-black text-[#00466D] leading-snug">
                  {companyBase.name}
                </h3>

                <div className="divide-y divide-slate-100 text-xs sm:text-sm">
                  <div className="py-2.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-2">
                    <span className="font-bold text-slate-400 sm:text-slate-500">{content.company.profileRows.location}</span>
                    <span className="sm:col-span-2 font-bold text-slate-800 break-words">{companyBase.location}</span>
                  </div>
                  <div className="py-2.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-2">
                    <span className="font-bold text-slate-400 sm:text-slate-500">{content.company.profileRows.representative}</span>
                    <span className="sm:col-span-2 font-bold text-slate-800 break-words">{companyBase.representative}（{companyBase.representativeKana}）</span>
                  </div>
                  <div className="py-2.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-2">
                    <span className="font-bold text-slate-400 sm:text-slate-500">{content.company.profileRows.capital}</span>
                    <span className="sm:col-span-2 font-bold text-slate-800 break-words">{companyBase.capital}</span>
                  </div>
                  <div className="py-2.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-2">
                    <span className="font-bold text-slate-400 sm:text-slate-500">{content.company.profileRows.invoiceNumber}</span>
                    <span className="sm:col-span-2 font-bold text-slate-800 break-all">{companyBase.invoiceNumber}</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href={withLocale(locale, "/company")}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#00729F] hover:bg-[#00466D] px-6 py-3 text-xs sm:text-sm font-black text-white transition"
                  >
                    <span>{locale === "ja" ? "会社概要の詳細" : "View Company Details"}</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

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

  return (
    <section className="py-20 px-5 sm:px-8 bg-[#F6F6F6] border-b border-slate-200/80">
      <div className="mx-auto max-w-6xl">
        
        {/* 1. Header with Mincho Serif */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="font-serif-jp text-xs font-black tracking-[0.25em] text-[#00729F] uppercase mb-2">
            ABOUT US
          </p>
          <h2 className="font-serif-jp text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            {locale === "ja" ? "私たちについて" : locale === "vi" ? "Về Chúng Tôi" : "About NKTN"}
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-12 bg-[#00729F]" />
          <p className="mt-6 text-slate-600 text-sm sm:text-base leading-relaxed">
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

        {/* 2. SuperHotelClean Style Tab Selector (PHILOSOPHY / PROFILE) */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg bg-slate-200/80 p-1">
            <button
              onClick={() => setActiveTab("philosophy")}
              className={`px-8 py-3 rounded-md font-serif-jp text-xs sm:text-sm font-black transition-all duration-200 ${
                activeTab === "philosophy"
                  ? "bg-[#00729F] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              PHILOSOPHY（企業理念）
            </button>
            <button
              onClick={() => setActiveTab("profile")}
              className={`px-8 py-3 rounded-md font-serif-jp text-xs sm:text-sm font-black transition-all duration-200 ${
                activeTab === "profile"
                  ? "bg-[#00729F] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              PROFILE（会社情報）
            </button>
          </div>
        </div>

        {/* 3. Clean Split Tab Body (Exact Super Hotel Clean visual style) */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-10 lg:p-12 shadow-sm">
          {activeTab === "philosophy" ? (
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
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
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
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
                  <div className="py-2 grid grid-cols-3 gap-2">
                    <span className="font-bold text-slate-400">所在地</span>
                    <span className="col-span-2 font-bold text-slate-800">{companyBase.location}</span>
                  </div>
                  <div className="py-2 grid grid-cols-3 gap-2">
                    <span className="font-bold text-slate-400">代表者</span>
                    <span className="col-span-2 font-bold text-slate-800">{companyBase.representative}（{companyBase.representativeKana}）</span>
                  </div>
                  <div className="py-2 grid grid-cols-3 gap-2">
                    <span className="font-bold text-slate-400">資本金</span>
                    <span className="col-span-2 font-bold text-slate-800">{companyBase.capital}</span>
                  </div>
                  <div className="py-2 grid grid-cols-3 gap-2">
                    <span className="font-bold text-slate-400">適格事業者</span>
                    <span className="col-span-2 font-bold text-slate-800">{companyBase.invoiceNumber}（インボイス対応）</span>
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

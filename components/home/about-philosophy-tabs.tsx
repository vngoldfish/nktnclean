"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Building2, HeartHandshake, CheckCircle2 } from "lucide-react";
import { type Locale, withLocale } from "@/lib/i18n";
import { companyBase, getContent } from "@/lib/site-data-i18n";

interface AboutPhilosophyTabsProps {
  locale: Locale;
}

export function AboutPhilosophyTabs({ locale }: AboutPhilosophyTabsProps) {
  const [activeTab, setActiveTab] = useState<"philosophy" | "profile">("philosophy");
  const content = getContent(locale);

  return (
    <section className="relative py-20 px-5 sm:px-8 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl">
        
        {/* 1. About Intro Header (like superhotelclean #cb_content_1) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#00729F]/10 border border-[#00729F]/20 px-4 py-1.5 text-xs font-black tracking-widest text-[#00729F] uppercase mb-4">
            <Sparkles className="size-3.5 text-[#00729F]" />
            ABOUT NKTN
          </span>
          <h2 className="font-serif-jp text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {locale === "ja" ? "私たちについて" : locale === "vi" ? "Về Chúng Tôi" : "About Our Company"}
          </h2>
          <p className="mt-6 text-slate-600 text-sm sm:text-base leading-relaxed">
            {locale === "ja" ? (
              <>
                私たちは大阪・関西エリアにおいて、民泊・ホテル客室清掃およびビルメンテナンスに特化したクリーンサービス企業です。<br className="hidden sm:inline" />
                多国籍グローバル人材の確かな育成と「掃く・拭く・磨く」のおもてなし精神を軸に、施設オーナー様の安定稼働と資産価値向上に貢献します。
              </>
            ) : locale === "vi" ? (
              <>
                Công ty NKTN chuyên cung cấp giải pháp vệ sinh buồng phòng khách sạn, nhà nghỉ Minpaku và bảo trì tòa nhà tại Osaka & Kansai.<br className="hidden sm:inline" />
                Với tinh thần &ldquo;Quét - Lau - Đánh bóng&rdquo; chuẩn Nhật và đội ngũ nhân sự đa quốc gia được đào tạo bài bản, chúng tôi mang đến sự an tâm tuyệt đối cho các chủ cơ sở.
              </>
            ) : (
              <>
                NKTN is an Osaka-based specialized hospitality cleaning and facility maintenance corporation.<br className="hidden sm:inline" />
                Through standardized hotel-grade protocols and an empowered multinational workforce, we safeguard your property value and 5-star guest satisfaction.
              </>
            )}
          </p>
        </div>

        {/* 2. Interactive PHILOSOPHY / PROFILE Tab Box (like superhotelclean #cb_content_2) */}
        <div className="rounded-3xl border border-slate-200/90 bg-slate-50/70 overflow-hidden shadow-elevated">
          {/* Top Banner with Dark Corporate Blue */}
          <div className="relative bg-[#00466D] text-white p-8 sm:p-12 overflow-hidden">
            <div className="absolute inset-0 opacity-10 dot-pattern pointer-events-none" />
            <div className="relative z-10 max-w-3xl">
              <span className="text-[11px] font-black tracking-[0.25em] text-[#19BAD7] uppercase block mb-2">
                CORPORATE MISSION
              </span>
              <h3 className="font-serif-jp text-2xl sm:text-4xl font-black leading-snug">
                {locale === "ja" 
                  ? "誰もが満足するハイクオリティな清掃で、\n活力ある宿泊・観光産業に貢献" 
                  : locale === "vi" 
                  ? "Kiến tạo dịch vụ vệ sinh chất lượng cao,\nđồng hành cùng sự phát triển của ngành lưu trú" 
                  : "Delivering exceptional hospitality cleanliness\nempowering the accommodation industry"}
              </h3>
              <p className="mt-4 text-xs sm:text-sm text-slate-200 leading-relaxed max-w-2xl">
                {locale === "ja"
                  ? "社会的倫理観と良識を持ち、ホテル水準の現場力・マネジメント力・多様性を活かして、お客様の信頼に応え続けます。"
                  : "Upholding hospitality ethics and standardized room management to earn lifelong client trust."}
              </p>
            </div>

            {/* Tab Buttons Pill embedded inside banner */}
            <div className="mt-8 flex gap-2">
              <button
                onClick={() => setActiveTab("philosophy")}
                className={`px-6 py-3 rounded-xl font-black text-xs sm:text-sm transition-all duration-200 ${
                  activeTab === "philosophy"
                    ? "bg-white text-[#00466D] shadow-md scale-105"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                PHILOSOPHY（企業理念）
              </button>
              <button
                onClick={() => setActiveTab("profile")}
                className={`px-6 py-3 rounded-xl font-black text-xs sm:text-sm transition-all duration-200 ${
                  activeTab === "profile"
                    ? "bg-white text-[#00466D] shadow-md scale-105"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                PROFILE（会社情報）
              </button>
            </div>
          </div>

          {/* Bottom Tab Content Panels */}
          <div className="p-6 sm:p-10 lg:p-12 bg-white">
            {activeTab === "philosophy" ? (
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft border border-slate-100">
                  <Image
                    src="/works/photo-staff.jpg"
                    alt="NKTN Philosophy"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 550px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-bold text-[#19BAD7]">BAWUI SPIRIT</p>
                    <p className="font-serif-jp text-sm sm:text-base font-black">掃く・拭く・磨くのプロ意識</p>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-black tracking-widest text-[#00729F] uppercase">
                    <HeartHandshake className="size-4" />
                    PHILOSOPHY
                  </span>
                  <h4 className="font-serif-jp text-2xl sm:text-3xl font-black text-slate-900 leading-snug">
                    {locale === "ja" 
                      ? "「掃く・拭く・磨く」を基本とし、\nおもてなしの心で価値を創出" 
                      : locale === "vi" 
                      ? "Lấy sự tận tâm làm kim chỉ nam,\nkiến tạo giá trị từ từng chi tiết nhỏ nhất" 
                      : "Craftsmanship & Hospitality\nCreating Lasting Value"}
                  </h4>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {locale === "ja"
                      ? "清掃は単なる作業ではなく、次のゲストを迎える大切な第一歩です。見えない場所まで手を抜かず、シーツの張りから水回りの水滴一つまで徹底的に美しく仕上げます。"
                      : locale === "vi"
                      ? "Vệ sinh không chỉ là công việc thường nhật mà là bước đệm quan trọng đón tiếp khách hàng. Chúng tôi chăm chút từ độ phẳng của ga trải giường đến từng giọt nước trên vòi rửa."
                      : "Cleaning is not just a routine task; it is the foundation of guest hospitality. We pay attention to every unseen corner, from crisp linen lines to spotless water fixtures."}
                  </p>

                  <div className="space-y-2 pt-2">
                    {[
                      locale === "ja" ? "徹底した客室点検とリアルタイム写真報告" : "Rigorous room inspections & real-time photo reports",
                      locale === "ja" ? "専属トレーナーによる社内基準クリア制度" : "In-house training certified by hospitality supervisors",
                      locale === "ja" ? "損害賠償保険完備で万が一のトラブルも安心" : "Full liability coverage protecting owner assets",
                    ].map((point) => (
                      <div key={point} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-800">
                        <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link
                      href={withLocale(locale, "/company")}
                      className="inline-flex items-center gap-2 rounded-xl bg-[#00729F] px-6 py-3.5 text-xs sm:text-sm font-black text-white hover:bg-[#00466D] transition"
                    >
                      {locale === "ja" ? "企業理念・会社概要を見る" : "Learn More About Us"}
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft border border-slate-100">
                  <Image
                    src="/works/photo-room.jpg"
                    alt="NKTN Profile"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 550px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-bold text-[#19BAD7]">COMPANY PROFILE</p>
                    <p className="font-serif-jp text-sm sm:text-base font-black">大阪本社・正規法人事業者</p>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-black tracking-widest text-[#00729F] uppercase">
                    <Building2 className="size-4" />
                    PROFILE
                  </span>
                  <h4 className="font-serif-jp text-2xl sm:text-3xl font-black text-slate-900 leading-snug">
                    {companyBase.name}（{companyBase.brand}）
                  </h4>

                  <div className="divide-y divide-slate-200/80 text-xs sm:text-sm">
                    <div className="py-2.5 grid grid-cols-3 gap-2">
                      <span className="font-bold text-slate-500">所在地</span>
                      <span className="col-span-2 font-bold text-slate-900">{companyBase.location}</span>
                    </div>
                    <div className="py-2.5 grid grid-cols-3 gap-2">
                      <span className="font-bold text-slate-500">代表者</span>
                      <span className="col-span-2 font-bold text-slate-900">{companyBase.representative}（{companyBase.representativeKana}）</span>
                    </div>
                    <div className="py-2.5 grid grid-cols-3 gap-2">
                      <span className="font-bold text-slate-500">資本金</span>
                      <span className="col-span-2 font-bold text-slate-900">{companyBase.capital}</span>
                    </div>
                    <div className="py-2.5 grid grid-cols-3 gap-2">
                      <span className="font-bold text-slate-500">法人番号</span>
                      <span className="col-span-2 font-bold text-slate-900">{companyBase.corporateNumber}</span>
                    </div>
                    <div className="py-2.5 grid grid-cols-3 gap-2">
                      <span className="font-bold text-slate-500">インボイス登録</span>
                      <span className="col-span-2 font-bold text-slate-900">{companyBase.invoiceNumber} (適格請求書発行事業者)</span>
                    </div>
                  </div>

                  <div className="pt-3">
                    <Link
                      href={withLocale(locale, "/company")}
                      className="inline-flex items-center gap-2 rounded-xl bg-[#00729F] px-6 py-3.5 text-xs sm:text-sm font-black text-white hover:bg-[#00466D] transition"
                    >
                      {locale === "ja" ? "会社情報詳細を見る" : "View Full Profile"}
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Phone, ArrowRight, Sparkles, ChevronRight, ShieldCheck, Star } from "lucide-react";
import { type Locale, withLocale } from "@/lib/i18n";
import { companyBase, getContent } from "@/lib/site-data-i18n";

interface SuperHeroSliderProps {
  locale: Locale;
}

export function SuperHeroSlider({ locale }: SuperHeroSliderProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const content = getContent(locale);

  const slides = [
    {
      id: 0,
      badge: locale === "ja" ? "HOTEL & MINPAKU CLEANING" : "HOSPITALITY TURNOVER",
      title: locale === "ja" 
        ? "ホテル・民泊客室清掃\nベッドメイキングの品質管理" 
        : locale === "vi" 
        ? "Vệ sinh Buồng phòng Khách sạn\n& Nhà nghỉ Minpaku Chuẩn Nhật" 
        : "Hotel & Vacation Rental Turnover\nStandardized Quality Control",
      desc: locale === "ja"
        ? "ゲストの満足度と高評価レビューを守る「掃く・拭く・磨く」のおもてなし精神。全室写真報告とインスペクター二重検品で安定した高品質をお届けします。"
        : locale === "vi"
        ? "Tinh thần hiếu khách Omoiyari 'Quét - Lau - Đánh bóng' bảo vệ đánh giá 5 sao. Báo cáo hình ảnh mọi ngóc ngách và quy trình kiểm định 2 lớp."
        : "Hospitality craftsmanship protecting 5-star guest reviews. Full-room photo inspection and dual supervisor audits across Osaka & Kansai.",
      image: "/works/photo-room.jpg",
      navCatch: locale === "ja" ? "ベッドメイキング\nホテル・民泊客室清掃" : "Bed Making & Hotel Turnover",
      actionText: locale === "ja" ? "ホテル・民泊清掃のご相談" : "Hospitality Inquiries",
      actionHref: "/services",
    },
    {
      id: 1,
      badge: locale === "ja" ? "BUILDING MAINTENANCE & DEEP CLEAN" : "RESTORATION & MAINTENANCE",
      title: locale === "ja"
        ? "ビルメンテナンス・退去清掃\nエアコン分解高圧洗浄"
        : locale === "vi"
        ? "Bảo trì Tòa nhà & Hoàn trả\nXịt rửa Điều hòa Áp lực cao"
        : "Building Maintenance &\nMove-Out Deep Restoration",
      desc: locale === "ja"
        ? "定期清掃・床ワックス塗布・換気扇油汚れ分解・エアコン内部高圧洗浄まで。施設の資産価値と衛生環境を長期的に維持します。"
        : locale === "vi"
        ? "Tổng vệ sinh định kỳ, đánh bóng phủ sáp sàn, tẩy dầu mỡ bếp và xịt rửa điều hòa. Duy trì giá trị bất động sản dài lâu."
        : "Periodic maintenance, floor waxing, grease extraction, and HVAC pressure washing preserving property value.",
      image: "/works/photo-staff.jpg",
      navCatch: locale === "ja" ? "ビルメンテナンス\n原状回復・定期美装" : "Building Maintenance",
      actionText: locale === "ja" ? "原状回復・定期清掃を見る" : "View Restoration Services",
      actionHref: "/services",
    },
    {
      id: 2,
      badge: locale === "ja" ? "GLOBAL HOSPITALITY WORKFORCE" : "MULTINATIONAL DIVERSITY",
      title: locale === "ja"
        ? "多国籍グローバル人材の現場力\nホテル水準の厳しい社内研修"
        : locale === "vi"
        ? "Đội ngũ Nhân lực Toàn cầu\nĐào tạo Khắt khe Chuẩn Khách sạn"
        : "Global Multinational Workforce\nRigorously Trained In-House Team",
      desc: locale === "ja"
        ? "多様性を尊重し、ホテル清掃基準を徹底教育された専属スタッフが活躍。多言語コミュニケーションと確かな技術で現場の安心を支えます。"
        : locale === "vi"
        ? "Đội ngũ nhân sự chuyên trách, giao tiếp đa ngôn ngữ (Nhật, Anh, Việt, Trung), được đào tạo bài bản quy trình vệ sinh tiêu chuẩn."
        : "Certified multilingual operations team upholding strict hotel standards with fluent Japanese, English, and Vietnamese coordination.",
      image: "/works/photo-room.jpg",
      navCatch: locale === "ja" ? "グローバル人材\n専任スタッフと社内研修" : "Multinational Workforce",
      actionText: locale === "ja" ? "企業体制・研修制度を見る" : "About Our Team",
      actionHref: "/company",
    },
  ];

  // Auto slide rotation every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const current = slides[activeSlide];

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white min-h-[580px] lg:min-h-[660px] flex flex-col justify-between">
      {/* Background Images with smooth fade transition */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            activeSlide === idx ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
          style={{ transitionProperty: "opacity, transform", transitionDuration: "1200ms" }}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={idx === 0}
            sizes="100vw"
          />
          {/* Authentic SuperHotelClean deep blue overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-900/50" />
          <div className="absolute inset-0 bg-[#00466D]/30 mix-blend-multiply" />
        </div>
      ))}

      {/* Main Content Area */}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-16 pb-12 lg:pt-24 lg:pb-16 z-10 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow badge with clean line */}
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-[#19BAD7]" />
            <span className="text-xs font-black tracking-[0.25em] text-[#19BAD7] uppercase">
              {current.badge}
            </span>
          </div>

          {/* Large Mincho Serif Catchphrase (SuperHotelClean signature style) */}
          <h1 className="font-serif-jp text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.2] tracking-normal text-white drop-shadow-md whitespace-pre-line">
            {current.title}
          </h1>

          {/* Descriptive text */}
          <p className="mt-6 text-sm sm:text-base lg:text-lg leading-relaxed text-slate-200/90 font-medium max-w-2xl">
            {current.desc}
          </p>

          {/* CTA Button Group */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <Link
              href={companyBase.lineUrl}
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#06C755] px-7 py-4 text-sm sm:text-base font-black text-white shadow-glow-green hover:bg-[#05b04c] transition duration-200"
              data-analytics="hero_slider_line"
            >
              <MessageCircle className="size-5" />
              {content.common.lineConsultLong}
              <ArrowRight className="size-4" />
            </Link>

            <Link
              href={withLocale(locale, current.actionHref)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/15 border border-white/30 backdrop-blur-md px-7 py-4 text-sm sm:text-base font-bold text-white hover:bg-white/25 transition duration-200"
            >
              <span>{current.actionText}</span>
              <ChevronRight className="size-4 text-[#19BAD7]" />
            </Link>
          </div>

          {/* Trust points underneath */}
          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-bold text-slate-300/80">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-[#19BAD7]" />
              {locale === "ja" ? "損害賠償保険完備" : "Fully Insured"}
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="size-4 text-amber-400 fill-amber-400" />
              {locale === "ja" ? "顧客満足度 98.2%" : "98.2% Satisfaction"}
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="size-4 text-[#19BAD7]" />
              {locale === "ja" ? "最短即日駆けつけ対応" : "Same-Day Rush Dispatch"}
            </span>
          </div>
        </div>
      </div>

      {/* SuperHotelClean Slider Navigation Tabs Bar (header_slider_nav) */}
      <div className="relative z-20 bg-slate-950/80 backdrop-blur-md border-t border-white/10 w-full">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            {slides.map((slide, idx) => {
              const isActive = activeSlide === idx;
              return (
                <button
                  key={slide.id}
                  onClick={() => setActiveSlide(idx)}
                  className={`py-4 px-3 sm:px-6 text-left transition-all duration-300 relative group ${
                    isActive ? "bg-white/10" : "hover:bg-white/5 opacity-70 hover:opacity-100"
                  }`}
                >
                  {/* Active indicator line on top */}
                  {isActive && (
                    <div className="absolute top-0 inset-x-0 h-1 bg-[#19BAD7] shadow-[0_0_10px_#19BAD7]" />
                  )}
                  <span className="text-[10px] sm:text-xs font-black tracking-widest text-[#19BAD7] block uppercase">
                    SLIDE 0{idx + 1}
                  </span>
                  <p className="font-serif-jp text-xs sm:text-sm font-bold text-white whitespace-pre-line line-clamp-2 mt-0.5 leading-snug">
                    {slide.navCatch}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

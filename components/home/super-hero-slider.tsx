"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowRight, Sparkles, ChevronRight, ShieldCheck, Star } from "lucide-react";
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
      image: "/works/photo-bed-making.jpg",
      navCatch: locale === "ja" ? "ベッドメイキング\nホテル・民泊客室清掃" : "Bed Making & Hotel Turnover",
      actionText: locale === "ja" ? "ホテル・民泊清掃のご相談" : "Hospitality Inquiries",
      actionHref: "/services",
    },
    {
      id: 1,
      badge: locale === "ja" ? "SMART TURNOVER & PHOTO AUDIT" : "LINE REAL-TIME REPORT",
      title: locale === "ja"
        ? "LINE写真報告と二重検品体制\n即日対応・遠隔管理も安心"
        : locale === "vi"
        ? "Báo Cáo Ảnh 100% Qua LINE\nKiểm Định 2 Lớp & Vận Hành Từ Xa"
        : "Real-Time LINE Photo Reports\n& Dual Inspection Quality Control",
      desc: locale === "ja"
        ? "全室清掃完了後に高画質写真と備品残量をLINEで即時送信。インスペクター（検査員）による二重チェックで清掃ミスゼロを徹底します。"
        : locale === "vi"
        ? "Gửi ảnh nghiệm thu sắc nét và kiểm kê đồ dùng qua LINE ngay khi hoàn tất. Đội kiểm định 2 lớp đảm bảo không bao giờ sót lỗi."
        : "High-resolution photos and inventory reports sent to LINE instantly upon completion. Dual supervisor inspections guarantee zero errors.",
      image: "/works/photo-inspector-audit.jpg",
      navCatch: locale === "ja" ? "LINE写真報告\n二重検品・遠隔管理" : "LINE Photo Reports & Audit",
      actionText: locale === "ja" ? "DX報告・管理の流れを見る" : locale === "vi" ? "Xem quy trình báo cáo DX" : "View DX Operations",
      actionHref: "/dx",
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
      image: "/works/photo-training-session.jpg",
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
    <section
      id="hero-slider-section"
      className="hero-slider-section relative overflow-hidden bg-slate-950 text-white min-h-[540px] sm:min-h-[600px] lg:min-h-[calc(100vh-5.5rem)] flex flex-col justify-between"
    >
      {/* 1. Background Images with smooth fade + Ken Burns transition */}
      <div id="hero-slider-bg-wrapper" className="hero-slider-bg-wrapper absolute inset-0">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            id={`hero-slide-bg-${idx}`}
            className={`hero-slide-bg absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
              activeSlide === idx ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title.replace(/\n/g, " ")}
              fill
              className={`hero-slide-image object-cover transition-transform duration-[8000ms] ease-out ${
                activeSlide === idx ? "scale-110" : "scale-100"
              }`}
              priority={idx === 0}
              sizes="100vw"
            />
            {/* Authentic SuperHotelClean deep blue overlay */}
            <div className="hero-overlay-dark absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-900/50" />
            <div className="hero-overlay-blue absolute inset-0 bg-[#00466D]/30 mix-blend-multiply" />
          </div>
        ))}
      </div>

      {/* 2. Main Content Area (Vertically Centered) */}
      <div id="hero-main-content-container" className="hero-main-content-container relative mx-auto max-w-7xl px-5 sm:px-8 my-auto py-8 sm:py-12 lg:py-16 z-10 w-full">
        <div key={activeSlide} id={`hero-slide-content-${activeSlide}`} className="hero-slide-content max-w-3xl">
          {/* Eyebrow badge with clean line */}
          <div className="hero-eyebrow-badge flex items-center gap-3 mb-4 sm:mb-6 animate-fade-in-up">
            <span className="h-px w-8 bg-[#19BAD7]" />
            <span className="text-xs font-black tracking-[0.25em] text-[#19BAD7] uppercase">
              {current.badge}
            </span>
          </div>

          {/* Large Mincho Serif Catchphrase (SuperHotelClean signature style) */}
          <h1 className="hero-catchphrase font-serif-jp text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.2] tracking-normal text-white drop-shadow-md whitespace-pre-line animate-fade-in-up stagger-2">
            {current.title}
          </h1>

          {/* Descriptive text */}
          <p className="hero-description mt-4 sm:mt-6 text-xs sm:text-base lg:text-lg leading-relaxed text-slate-200/90 font-medium max-w-2xl animate-fade-in-up stagger-3">
            {current.desc}
          </p>

          {/* CTA Button Group */}
          <div id="hero-cta-group" className="hero-cta-group mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              href={companyBase.lineUrl}
              className="hero-btn-line inline-flex items-center justify-center gap-2 rounded-xl bg-[#06C755] px-6 py-3.5 sm:px-7 sm:py-4 text-xs sm:text-sm font-black text-white shadow-glow-green hover:bg-[#05b04c] transition duration-200"
              data-analytics="hero_slider_line"
            >
              <MessageCircle className="size-4 sm:size-5" />
              {content.common.lineConsultLong}
              <ArrowRight className="size-4" />
            </Link>

            <Link
              href={withLocale(locale, current.actionHref)}
              className="hero-btn-secondary inline-flex items-center justify-center gap-2 rounded-xl bg-white/15 border border-white/30 backdrop-blur-md px-6 py-3.5 sm:px-7 sm:py-4 text-xs sm:text-sm font-bold text-white hover:bg-white/25 transition duration-200"
            >
              <span>{current.actionText}</span>
              <ChevronRight className="size-4 text-[#19BAD7]" />
            </Link>
          </div>

          {/* Trust points underneath */}
          <div id="hero-trust-badges" className="hero-trust-badges mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4 text-[11px] sm:text-xs font-bold text-slate-300/80">
            <span className="trust-badge-item flex items-center gap-1.5">
              <ShieldCheck className="size-3.5 sm:size-4 text-[#19BAD7]" />
              {locale === "ja" ? "損害賠償保険完備" : "Fully Insured"}
            </span>
            <span className="trust-badge-item flex items-center gap-1.5">
              <Star className="size-3.5 sm:size-4 text-amber-400 fill-amber-400" />
              {locale === "ja" ? "顧客満足度 98.2%" : "98.2% Satisfaction"}
            </span>
            <span className="trust-badge-item flex items-center gap-1.5">
              <Sparkles className="size-3.5 sm:size-4 text-[#19BAD7]" />
              {locale === "ja" ? "最短即日駆けつけ対応" : "Same-Day Rush Dispatch"}
            </span>
          </div>
        </div>
      </div>

      {/* 3. SuperHotelClean Slider Navigation Tabs Bar (header_slider_nav) */}
      <div id="header-slider-nav" className="header-slider-nav relative z-20 bg-slate-950/80 backdrop-blur-md border-t border-white/10 w-full">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div role="tablist" aria-label="Hero slider navigation" className="slider-nav-tabs grid grid-cols-3 divide-x divide-white/10">
            {slides.map((slide, idx) => {
              const isActive = activeSlide === idx;
              return (
                <button
                  key={slide.id}
                  id={`hero-tab-btn-${idx}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Slide ${idx + 1}: ${slide.badge}`}
                  onClick={() => setActiveSlide(idx)}
                  className={`slider-tab-item py-3 sm:py-4 px-2 sm:px-6 text-left transition-all duration-300 relative group ${
                    isActive ? "is-active bg-white/10" : "hover:bg-white/5 opacity-70 hover:opacity-100"
                  }`}
                >
                  {/* Active indicator line on top */}
                  {isActive && (
                    <div className="slider-active-indicator absolute top-0 inset-x-0 h-1 bg-[#19BAD7] shadow-[0_0_10px_#19BAD7]" />
                  )}
                  <span className="slider-tab-eyebrow text-[9px] sm:text-xs font-black tracking-widest text-[#19BAD7] block uppercase">
                    SLIDE 0{idx + 1}
                  </span>
                  <p className="slider-tab-label font-serif-jp text-[11px] sm:text-sm font-bold text-white whitespace-pre-line line-clamp-2 mt-0.5 leading-snug">
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

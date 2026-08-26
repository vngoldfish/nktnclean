"use client";

import React from "react";
import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { type Locale, withLocale } from "@/lib/i18n";
import { companyBase } from "@/lib/site-data-i18n";

interface FloatingContactVerticalProps {
  locale: Locale;
}

export function FloatingContactVertical({ locale }: FloatingContactVerticalProps) {
  return (
    <>
      {/* 1. Desktop Right Vertical Floating Tab (Exact SuperHotelClean style) */}
      <div id="floating-contact-vertical" className="floating-contact-vertical fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-1">
        {/* LINE Contact Button */}
        <Link
          id="floating-btn-line"
          href={companyBase.lineUrl}
          className="floating-btn-line flex items-center gap-2 bg-[#06C755] text-white py-4 px-3 rounded-l-xl shadow-elevated hover:bg-[#05b04c] hover:pr-4 transition-all duration-200"
          data-analytics="vertical_line_click"
          title="LINEでお問い合わせ・お見積もり"
          aria-label={locale === "ja" ? "LINEでお問い合わせ・お見積もり" : "Contact via LINE"}
        >
          <MessageCircle className="size-5 shrink-0" />
          <span className="text-xs font-black vertical-label tracking-widest">
            {locale === "ja" ? "LINE相談" : "LINE"}
          </span>
        </Link>

        {/* Web Inquiry Button */}
        <Link
          id="floating-btn-contact"
          href={withLocale(locale, "/contact")}
          className="floating-btn-contact flex items-center gap-2 bg-[#00729F] text-white py-5 px-3 rounded-l-xl shadow-elevated hover:bg-[#00466D] hover:pr-4 transition-all duration-200"
          data-analytics="vertical_contact_click"
          title="お問い合わせ・ご依頼"
          aria-label={locale === "ja" ? "お問い合わせ・ご依頼" : "Contact Form"}
        >
          <Mail className="size-5 shrink-0" />
          <span className="text-xs font-black vertical-label tracking-widest">
            {locale === "ja" ? "お問い合わせ" : "CONTACT"}
          </span>
        </Link>
      </div>

      {/* 2. Mobile Bottom Sticky Conversion Bar (Compact & Sleek) */}
      <div id="mobile-sticky-dock" className="mobile-sticky-dock fixed inset-x-0 bottom-0 z-50 flex md:hidden px-3 py-2 gap-2 bg-slate-950/90 backdrop-blur-md border-t border-white/10 shadow-lg">
        <Link
          id="dock-btn-phone"
          href={`tel:${companyBase.phone}`}
          data-analytics="phone_sticky_click"
          className="dock-btn-phone flex-1 flex items-center justify-center gap-1.5 rounded-lg bg-white/10 py-2.5 text-xs font-bold text-white hover:bg-white/15 active:scale-95 transition"
        >
          <Phone className="size-3.5 text-amber-400" />
          <span>{locale === "ja" ? "電話相談" : locale === "vi" ? "Gọi điện" : "Call Us"}</span>
        </Link>

        <Link
          id="dock-btn-line"
          href={companyBase.lineUrl}
          data-analytics="line_sticky_click"
          className="dock-btn-line flex-1 flex items-center justify-center gap-1.5 rounded-lg bg-[#06C755] py-2.5 text-xs font-bold text-white shadow-xs active:scale-95 transition"
        >
          <MessageCircle className="size-3.5" />
          <span>{locale === "ja" ? "LINE見積もり" : locale === "vi" ? "LINE báo giá" : "LINE Quote"}</span>
        </Link>
      </div>
    </>
  );
}

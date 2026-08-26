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
      {/* 1. Desktop Right Vertical Floating Tab (SuperHotelClean Aesthetic) */}
      <aside
        id="floating-contact-vertical"
        aria-label="Quick contact links"
        className="floating-contact-vertical fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-1.5 drop-shadow-xl"
      >
        {/* LINE Contact Button */}
        <Link
          id="floating-btn-line"
          href={companyBase.lineUrl}
          className="floating-btn-line group flex items-center gap-2 bg-[#06C755] text-white py-4 px-3 rounded-l-2xl shadow-lg hover:bg-[#05b04c] hover:pr-4.5 transition-all duration-300 border-y border-l border-white/20"
          data-analytics="vertical_line_click"
          title="LINEでお問い合わせ・お見積もり"
          aria-label={locale === "ja" ? "LINEでお問い合わせ・お見積もり" : "Contact via LINE"}
        >
          <MessageCircle className="size-5 shrink-0 group-hover:scale-110 transition-transform" />
          <span className="text-[11px] font-black vertical-label tracking-widest">
            {locale === "ja" ? "LINE相談" : "LINE"}
          </span>
        </Link>

        {/* Web Inquiry Button */}
        <Link
          id="floating-btn-contact"
          href={withLocale(locale, "/contact")}
          className="floating-btn-contact group flex items-center gap-2 bg-[#00729F] text-white py-5 px-3 rounded-l-2xl shadow-lg hover:bg-[#00466D] hover:pr-4.5 transition-all duration-300 border-y border-l border-white/20"
          data-analytics="vertical_contact_click"
          title="お問い合わせ・ご依頼"
          aria-label={locale === "ja" ? "お問い合わせ・ご依頼" : "Contact Form"}
        >
          <Mail className="size-5 shrink-0 group-hover:scale-110 transition-transform" />
          <span className="text-[11px] font-black vertical-label tracking-widest">
            {locale === "ja" ? "お問い合わせ" : "CONTACT"}
          </span>
        </Link>
      </aside>

      {/* 2. Mobile Floating Capsule Dock (Ultra Modern & Lightweight) */}
      <aside
        id="mobile-sticky-dock"
        aria-label="Mobile quick actions"
        className="mobile-sticky-dock fixed bottom-3 inset-x-3 z-50 flex md:hidden p-1.5 gap-2 rounded-2xl bg-[#071224]/90 backdrop-blur-xl border border-white/15 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.45)]"
      >
        <Link
          id="dock-btn-phone"
          href={`tel:${companyBase.phone}`}
          data-analytics="phone_sticky_click"
          className="dock-btn-phone flex-1 flex items-center justify-center gap-2 rounded-xl bg-white/10 py-2.5 text-xs font-bold text-white hover:bg-white/15 active:scale-95 transition shadow-xs"
        >
          <Phone className="size-3.5 text-amber-400" />
          <span>{locale === "ja" ? "電話相談" : locale === "vi" ? "Gọi điện" : "Call Us"}</span>
        </Link>

        <Link
          id="dock-btn-line"
          href={companyBase.lineUrl}
          data-analytics="line_sticky_click"
          className="dock-btn-line flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#06C755] py-2.5 text-xs font-black text-white active:scale-95 transition shadow-xs"
        >
          <MessageCircle className="size-3.5" />
          <span>{locale === "ja" ? "LINE見積もり" : locale === "vi" ? "Báo giá LINE" : "LINE Quote"}</span>
        </Link>
      </aside>
    </>
  );
}

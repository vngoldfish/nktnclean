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
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-1">
        {/* LINE Contact Button */}
        <Link
          href={companyBase.lineUrl}
          className="flex items-center gap-2 bg-[#06C755] text-white py-4 px-3 rounded-l-xl shadow-elevated hover:bg-[#05b04c] hover:pr-4 transition-all duration-200"
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
          href={withLocale(locale, "/contact")}
          className="flex items-center gap-2 bg-[#00729F] text-white py-5 px-3 rounded-l-xl shadow-elevated hover:bg-[#00466D] hover:pr-4 transition-all duration-200"
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

      {/* 2. Mobile Bottom Sticky Conversion Bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 flex md:hidden p-2.5 gap-2 bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-elevated">
        <Link
          href={`tel:${companyBase.phone}`}
          data-analytics="phone_sticky_click"
          className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-slate-900 py-3 text-xs font-bold text-white shadow-soft active:scale-95 transition"
        >
          <Phone className="size-4 text-amber-400" />
          <span>{locale === "ja" ? "電話相談" : "Call Us"}</span>
        </Link>

        <Link
          href={companyBase.lineUrl}
          data-analytics="line_sticky_click"
          className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#06C755] py-3 text-xs font-bold text-white shadow-soft active:scale-95 transition"
        >
          <MessageCircle className="size-4" />
          <span>{locale === "ja" ? "LINE見積もり" : "LINE Quote"}</span>
        </Link>
      </div>
    </>
  );
}

import Link from "next/link";
import { Phone, MessageCircle, FileText } from "lucide-react";

import { type Locale, withLocale } from "@/lib/i18n";
import { companyBase, getContent } from "@/lib/site-data-i18n";

export function CtaContactBand({ locale }: { locale: Locale }) {
  const content = getContent(locale);

  return (
    <section className="bg-[#0F172A] py-12 px-5 sm:px-8 border-t border-slate-800">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sky-300 text-sm font-bold tracking-widest mb-3">
          {content.home.ctaBandLead}
        </p>
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-8">
          {content.home.ctaBandTitle}
        </h2>

        {/* Giant phone number */}
        <Link
          href={`tel:${companyBase.phone}`}
          className="inline-flex items-center gap-3 mb-6 group"
          data-analytics="phone_cta_click"
        >
          <span className="grid size-14 sm:size-16 place-items-center rounded-full bg-amber-500 text-white shadow-lg group-hover:bg-amber-400 transition">
            <Phone className="size-7 sm:size-8" />
          </span>
          <div className="text-left">
            <span className="block text-white/70 text-xs font-bold">
              {content.topBar.hours}
            </span>
            <span className="block text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wider">
              {companyBase.phone}
            </span>
          </div>
        </Link>

        {/* Two action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
          <Link
            href={withLocale(locale, "/contact")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-bold text-sky-900 shadow-soft hover:bg-slate-100 transition"
          >
            <FileText className="size-5" />
            {content.common.contact}
          </Link>
          <Link
            href={companyBase.lineUrl}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-[#06C755] px-8 py-4 text-base font-bold text-white shadow-soft hover:bg-[#05b04c] transition"
            data-analytics="line_cta_click"
          >
            <MessageCircle className="size-5" />
            {content.common.lineConsultLong}
          </Link>
        </div>
      </div>
    </section>
  );
}

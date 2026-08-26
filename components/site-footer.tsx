import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone, ChevronRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type Locale, withLocale } from "@/lib/i18n";
import { companyBase, getContent } from "@/lib/site-data-i18n";

export function SiteFooter({ locale }: { locale: Locale }) {
  const content = getContent(locale);

  const footerBanners = [
    {
      title: "Home",
      sub: locale === "ja" ? "トップページ" : "Home",
      href: "/",
      image: "/works/photo-room.jpg",
    },
    {
      title: "Company",
      sub: locale === "ja" ? "会社概要・企業理念" : "Company",
      href: "/company",
      image: "/works/photo-staff.jpg",
    },
    {
      title: "Service",
      sub: locale === "ja" ? "事業内容・清掃品目" : "Services",
      href: "/services",
      image: "/works/photo-room.jpg",
    },
    {
      title: "Contact",
      sub: locale === "ja" ? "お問い合わせ・お見積もり" : "Contact",
      href: "/contact",
      image: "/works/photo-staff.jpg",
    },
  ];

  return (
    <footer className="border-t border-slate-200 bg-[#071224] text-white">
      
      {/* 1. SuperHotelClean Style 4 Visual Image Banners (#footer_banner) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 border-b border-white/10">
        {footerBanners.map((banner, idx) => (
          <Link
            key={idx}
            href={withLocale(locale, banner.href)}
            className="group relative h-40 sm:h-48 overflow-hidden flex items-end p-6 border-r border-b lg:border-b-0 border-white/10"
          >
            <Image
              src={banner.image}
              alt={banner.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-slate-900/30 group-hover:from-[#00466D]/90 transition-colors duration-300" />
            
            <div className="relative z-10 w-full flex items-center justify-between">
              <div>
                <span className="font-serif-jp text-lg sm:text-2xl font-black text-white block group-hover:text-[#19BAD7] transition-colors">
                  {banner.title}
                </span>
                <span className="text-xs text-slate-300/80 font-bold block mt-0.5">
                  {banner.sub}
                </span>
              </div>
              <ChevronRight className="size-5 text-white/50 group-hover:text-[#19BAD7] group-hover:translate-x-1 transition-all" />
            </div>
          </Link>
        ))}
      </div>

      {/* 2. Main Footer Body */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-12 place-items-center overflow-hidden rounded-full bg-white shadow-soft ring-1 ring-white/20">
                <Image src="/logo.png" alt="株式会社NKTN / Bawui Cleaning" width={48} height={48} className="size-12 object-cover" />
              </span>
              <div>
                <p className="font-serif-jp font-black tracking-[0.16em] text-lg">{companyBase.name}</p>
                <p className="text-xs text-[#19BAD7] font-bold">{companyBase.brand}</p>
              </div>
            </div>
            <p className="mt-6 max-w-sm leading-relaxed text-slate-300 text-xs sm:text-sm">{content.company.footerLead}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {content.languages.map((language) => (
                <span key={language} className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-slate-200 ring-1 ring-white/15">
                  {language}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-black tracking-[0.2em] text-[#19BAD7] uppercase">NAVIGATION</p>
            <ul className="mt-5 space-y-3">
              {content.nav.map(([label, href]) => (
                <li key={href}>
                  <Link href={withLocale(locale, href)} className="text-sm font-bold text-slate-300 transition hover:text-white flex items-center gap-1.5">
                    <span className="text-[#19BAD7] text-xs">›</span>
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={withLocale(locale, "/faq")} className="text-sm font-bold text-slate-300 transition hover:text-white flex items-center gap-1.5">
                  <span className="text-[#19BAD7] text-xs">›</span>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href={withLocale(locale, "/privacy")} className="text-sm font-bold text-slate-300 transition hover:text-white flex items-center gap-1.5">
                  <span className="text-[#19BAD7] text-xs">›</span>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-black tracking-[0.2em] text-[#19BAD7] uppercase">SERVICES</p>
            <ul className="mt-5 space-y-3">
              {content.services.map((service) => (
                <li key={service.title} className="text-sm font-bold text-slate-300 flex items-center gap-1.5">
                  <span className="text-[#19BAD7] text-xs">›</span>
                  {service.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
            <div className="flex gap-3 text-slate-300 text-xs sm:text-sm">
              <MapPin className="mt-1 size-5 shrink-0 text-[#19BAD7]" />
              <p className="leading-relaxed">
                {content.company.profileRows.location}：{companyBase.location}<br />
                {content.company.profileRows.representative}：{companyBase.representative}（{companyBase.representativeKana}）<br />
                {content.company.profileRows.established}：{companyBase.established}<br />
                {content.company.profileRows.capital}：{companyBase.capital}
              </p>
            </div>
            <div className="mt-5 space-y-3 text-xs sm:text-sm font-bold text-slate-300">
              <Link href={companyBase.lineUrl} data-analytics="line_footer_click" className="flex items-center gap-3 transition hover:text-white">
                <MessageCircle className="size-4 text-[#06C755]" /> LINE {companyBase.lineId}
              </Link>
              <Link href={`mailto:${companyBase.email}`} data-analytics="email_footer_click" className="flex items-center gap-3 transition hover:text-white">
                <Mail className="size-4 text-[#19BAD7]" /> {companyBase.email}
              </Link>
              <Link href={`tel:${companyBase.phone}`} data-analytics="phone_footer_click" className="flex items-center gap-3 transition hover:text-white">
                <Phone className="size-4 text-amber-400" /> {companyBase.phone}
              </Link>
            </div>
            <Button className="mt-6 w-full bg-[#00729F] hover:bg-[#00466D] text-white font-black" asChild>
              <Link href={withLocale(locale, "/contact")}>
                {content.common.contact} <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Service Areas & Facility Types */}
        <div className="mt-10 grid gap-6 rounded-2xl bg-white/5 p-6 ring-1 ring-white/8 sm:grid-cols-2">
          <div>
            <p className="text-xs font-black tracking-[0.18em] text-[#19BAD7] mb-2 uppercase">対応エリア / SERVICE AREA</p>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
              大阪市（西成区・浪速区・中央区・北区・天王寺区 他）・堺市・豊中市・関西エリア全域・全国パートナー対応
            </p>
          </div>
          <div>
            <p className="text-xs font-black tracking-[0.18em] text-[#19BAD7] mb-2 uppercase">対応施設 / FACILITIES</p>
            <div className="flex flex-wrap gap-1.5">
              {content.facilityTypes.map((type) => (
                <span key={type} className="inline-flex rounded-lg bg-white/8 px-2.5 py-1 text-xs font-bold text-slate-300 ring-1 ring-white/10">
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} 株式会社NKTN / Bawui Cleaning. All rights reserved.</p>
          <p className="text-[11px] text-slate-500">Super Clean Hospitality Standards</p>
        </div>
      </div>
    </footer>
  );
}

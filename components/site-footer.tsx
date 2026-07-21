import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type Locale, withLocale } from "@/lib/i18n";
import { companyBase, getContent } from "@/lib/site-data-i18n";

export function SiteFooter({ locale }: { locale: Locale }) {
  const content = getContent(locale);

  return (
    <footer className="border-t border-slate-200 bg-sky-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-12 place-items-center overflow-hidden rounded-full bg-white shadow-soft ring-1 ring-white/20">
                <Image src="/logo.png" alt="株式会社NKTN / Bawui Cleaning" width={48} height={48} className="size-12 object-cover" />
              </span>
              <div>
                <p className="font-black tracking-[0.16em]">{companyBase.name}</p>
                <p className="text-sm text-white/55">{companyBase.brand}</p>
              </div>
            </div>
            <p className="mt-6 max-w-sm leading-8 text-white/66">{content.company.footerLead}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {content.languages.map((language) => <Badge key={language} variant="orange" className="bg-white/10 text-white ring-white/15">{language}</Badge>)}
            </div>
          </div>

          <div>
            <p className="text-sm font-black tracking-[0.18em] text-white/45">MENU</p>
            <ul className="mt-5 space-y-3">
              {content.nav.map(([label, href]) => (
                <li key={href}>
                  <Link href={withLocale(locale, href)} className="text-sm font-bold text-white/70 transition hover:text-white">{label}</Link>
                </li>
              ))}
              <li><Link href={withLocale(locale, "/faq")} className="text-sm font-bold text-white/70 transition hover:text-white">FAQ</Link></li>
              <li><Link href={withLocale(locale, "/privacy")} className="text-sm font-bold text-white/70 transition hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-black tracking-[0.18em] text-white/45">SERVICE</p>
            <ul className="mt-5 space-y-3">
              {content.services.map((service) => (
                <li key={service.title} className="text-sm font-bold text-white/70">{service.title}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-white/6 p-6 ring-1 ring-white/10">
            <div className="flex gap-3 text-white/72">
              <MapPin className="mt-1 size-5 shrink-0 text-sky-300" />
              <p className="leading-7">{content.company.profileRows.location}：{companyBase.location}<br />{content.company.profileRows.representative}：{companyBase.representative}<br />（{companyBase.representativeKana}）<br />{content.company.profileRows.established}：{companyBase.established}<br />{content.company.profileRows.capital}：{companyBase.capital}</p>
            </div>
            <div className="mt-5 space-y-3 text-sm font-bold text-white/72">
              <Link href={companyBase.lineUrl} data-analytics="line_footer_click" className="flex items-center gap-3 transition hover:text-white"><MessageCircle className="size-4 text-nktn-green" /> LINE {companyBase.lineId}</Link>
              <Link href={`mailto:${companyBase.email}`} data-analytics="email_footer_click" className="flex items-center gap-3 transition hover:text-white"><Mail className="size-4 text-sky-300" /> {companyBase.email}</Link>
              <Link href={`tel:${companyBase.phone}`} data-analytics="phone_footer_click" className="flex items-center gap-3 transition hover:text-white"><Phone className="size-4 text-nktn-blue" /> {companyBase.phone}</Link>
            </div>
            <Button className="mt-6 w-full bg-nktn-green hover:bg-[#438b62]" asChild>
              <Link href={withLocale(locale, "/contact")}>{content.common.contact} <ArrowRight className="size-4" /></Link>
            </Button>
          </div>
        </div>

        {/* Service Areas & Facility Types */}
        <div className="mt-10 grid gap-6 rounded-2xl bg-white/5 p-6 ring-1 ring-white/8 sm:grid-cols-2">
          <div>
            <p className="text-xs font-black tracking-[0.18em] text-white/45 mb-3">対応エリア / SERVICE AREA</p>
            <p className="text-sm leading-7 text-white/60">大阪市（西成区・浪速区・中央区・北区 他）・堺市・豊中市・関西エリア全域・全国パートナー対応</p>
          </div>
          <div>
            <p className="text-xs font-black tracking-[0.18em] text-white/45 mb-3">対応施設 / FACILITIES</p>
            <div className="flex flex-wrap gap-2">
              {content.facilityTypes.map((type) => (
                <span key={type} className="inline-flex rounded-full bg-white/8 px-3 py-1 text-xs font-bold text-white/65 ring-1 ring-white/10">{type}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/45">
          <p>© {new Date().getFullYear()} 株式会社NKTN / Bawui Cleaning. All rights reserved.</p>

        </div>
      </div>
    </footer>
  );
}

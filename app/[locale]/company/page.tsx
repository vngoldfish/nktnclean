import Image from "next/image";
import { 
  Building2,
  FileText,
  Calendar,
  Coins,
  MapPin,
  User,
  Briefcase,
  CheckCircle2,
  ShieldCheck
} from "lucide-react";
import { type Locale } from "@/lib/i18n";
import { companyBase, getContent } from "@/lib/site-data-i18n";
import { pageMetadata } from "@/lib/seo";
import { PageHeroHeader } from "@/components/ui/page-hero-header";
import { FloatingContactVertical } from "@/components/ui/floating-contact-vertical";
import { CtaContactBand } from "@/components/home/cta-contact-band";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = getContent(locale);
  return pageMetadata(locale, "/company", content.companyPage.title, content.companyPage.lead);
}

export default async function CompanyPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = getContent(locale);
  
  const rows = [
    { icon: Building2, label: content.company.profileRows.name, value: `${companyBase.name}（${companyBase.brand}）` },
    { icon: FileText, label: content.company.profileRows.corporateNumber, value: companyBase.corporateNumber, link: `https://info.gbiz.go.jp/hojin/ichiran?hojinBango=${companyBase.corporateNumber}` },
    { icon: FileText, label: content.company.profileRows.invoiceNumber, value: companyBase.invoiceNumber, link: `https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=${companyBase.corporateNumber}` },
    { icon: Calendar, label: content.company.profileRows.established, value: companyBase.established },
    { icon: Coins, label: content.company.profileRows.capital, value: companyBase.capital },
    { icon: MapPin, label: content.company.profileRows.location, value: companyBase.location },
    { icon: User, label: content.company.profileRows.representative, value: `${companyBase.representative}（${companyBase.representativeKana}）` },
    { icon: Briefcase, label: content.company.profileRows.business, value: content.company.business },
  ];

  return (
    <main className="site-shell">
      {/* Desktop Vertical Tab + Mobile Sticky Dock */}
      <FloatingContactVertical locale={locale} />

      {/* Corporate Page Hero Header */}
      <PageHeroHeader
        locale={locale}
        enTitle="COMPANY"
        jpTitle={content.companyPage.title}
        lead={content.companyPage.lead}
        currentPathName={content.companyPage.badge}
        bgImage="/works/company-office.jpg"
      />

      {/* Main Content */}
      <section className="py-20 px-5 sm:px-8 bg-[#F6F6F6] border-b border-slate-200/80">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-12 items-start">
          
          {/* Profile Card (Left 7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-white p-6 sm:p-10 border border-slate-200/80 shadow-sm">
            <p className="font-serif-jp text-xs font-black tracking-[0.2em] text-[#00729F] uppercase mb-1">
              PROFILE
            </p>
            <h2 className="font-serif-jp text-2xl sm:text-3xl font-black text-slate-900 mb-6">
              {locale === "ja" ? "会社概要" : locale === "vi" ? "Thông Tin Công Ty" : "Company Profile"}
            </h2>

            <div className="divide-y divide-slate-100 text-xs sm:text-sm">
              {rows.map(({ icon: Icon, label, value, link }) => (
                <div key={label} className="grid py-4 sm:grid-cols-[10rem_1fr] items-start gap-2">
                  <div className="flex items-center gap-2 text-slate-500 font-bold">
                    <Icon className="size-4 text-[#00729F] shrink-0" />
                    <span>{label}</span>
                  </div>
                  <div>
                    {link ? (
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[#00729F] hover:underline inline-flex flex-wrap items-center gap-1.5"
                      >
                        <span>{value}</span>
                        <span className="text-[10px] bg-sky-50 border border-sky-200 rounded px-1.5 py-0.5 text-sky-800 shrink-0">
                          {locale === "ja" ? "公的データベース照会" : "Verify Registry"}
                        </span>
                      </a>
                    ) : (
                      <span className="font-bold text-slate-800">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Story & Philosophy (Right 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-white p-6 sm:p-8 border border-slate-200/80 shadow-sm">
              <p className="font-serif-jp text-xs font-black tracking-[0.2em] text-[#00729F] uppercase mb-1">
                OUR STORY & MISSION
              </p>
              <h3 className="font-serif-jp text-xl sm:text-2xl font-black text-slate-900 mb-4">
                {content.companyPage.storyTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                {content.companyPage.storyLead}
              </p>

              <div className="space-y-3">
                {content.trustPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-2.5 rounded-xl bg-[#F6F6F6] p-3 text-xs sm:text-sm font-bold text-slate-800"
                  >
                    <CheckCircle2 className="size-4 text-[#19BAD7] shrink-0 mt-0.5" />
                    <span className="leading-snug">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Insurance & Quality Seal Box */}
            <div className="rounded-2xl bg-gradient-to-r from-[#00466D] to-[#00729F] p-6 text-white shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="size-6 text-[#19BAD7]" />
                <h4 className="font-serif-jp text-base font-black">
                  {locale === "ja" ? "最高1億円 損害賠償保険完備" : "Fully Insured Guarantee"}
                </h4>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                {locale === "ja"
                  ? "万が一の什器備品の破損やトラブル発生時にも迅速に対応できる安心の補償体制を整えています。"
                  : "Complete liability insurance safeguarding your properties and valuable assets."}
              </p>
            </div>
          </div>

          {/* Visual Gallery Strip */}
          <div className="lg:col-span-12 mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { src: "/works/photo-room.jpg", caption: locale === "ja" ? "客室清掃" : locale === "vi" ? "Vệ sinh buồng phòng" : "Room Cleaning" },
              { src: "/works/photo-bathroom.jpg", caption: locale === "ja" ? "水回り" : locale === "vi" ? "Khu vực vệ sinh" : "Water Area" },
              { src: "/works/photo-tools.jpg", caption: locale === "ja" ? "専用機材" : locale === "vi" ? "Thiết bị chuyên dụng" : "Pro Equipment" },
              { src: "/works/photo-staff.jpg", caption: locale === "ja" ? "研修風景" : locale === "vi" ? "Đào tạo nhân sự" : "Training" },
            ].map((item) => (
              <div key={item.src} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xs group">
                <Image src={item.src} alt={item.caption} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                <span className="absolute bottom-2.5 left-3 text-[11px] font-black text-white drop-shadow-md">{item.caption}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <CtaContactBand locale={locale} variant="dark" />
    </main>
  );
}

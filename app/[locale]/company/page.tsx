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
    <main id="company-page-main" className="company-page-main site-shell">
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
      <section id="company-profile-section" className="section-company-profile py-20 px-5 sm:px-8 bg-[#F6F6F6] border-b border-slate-200/80">
        <div className="company-container mx-auto max-w-6xl grid gap-10 lg:grid-cols-12 items-start">
          
          {/* Profile Card (Left 7 cols) */}
          <div id="company-profile-card" className="company-profile-card lg:col-span-7 rounded-2xl bg-white p-6 sm:p-10 border border-slate-200/80 shadow-sm">
            <p className="profile-eyebrow font-serif-jp text-xs font-black tracking-[0.2em] text-[#00729F] uppercase mb-1">
              PROFILE
            </p>
            <h2 className="profile-title font-serif-jp text-2xl sm:text-3xl font-black text-slate-900 mb-6">
              {locale === "ja" ? "会社概要" : locale === "vi" ? "Thông Tin Công Ty" : "Company Profile"}
            </h2>

            <div id="profile-table-body" className="profile-table-body divide-y divide-slate-100 text-xs sm:text-sm">
              {rows.map(({ icon: Icon, label, value, link }, idx) => (
                <div key={label} id={`profile-row-${idx + 1}`} className="profile-row grid py-3 sm:py-4 sm:grid-cols-[10rem_1fr] items-start gap-1.5 sm:gap-2">
                  <div className="profile-row-label flex items-center gap-2 text-slate-500 font-bold text-xs sm:text-sm">
                    <Icon className="size-4 text-[#00729F] shrink-0" />
                    <span>{label}</span>
                  </div>
                  <div className="profile-row-value break-words">
                    {link ? (
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[#00729F] hover:underline inline-flex flex-wrap items-center gap-1.5 break-all"
                      >
                        <span>{value}</span>
                        <span className="text-[10px] bg-sky-50 border border-sky-200 rounded px-1.5 py-0.5 text-sky-800 shrink-0">
                          {locale === "ja" ? "公的データベース照会" : "Verify Registry"}
                        </span>
                      </a>
                    ) : (
                      <span className="font-bold text-slate-800 break-words">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Story & Philosophy (Right 5 cols) */}
          <div id="company-story-column" className="company-story-column lg:col-span-5 space-y-6">
            <div id="company-story-card" className="company-story-card rounded-2xl bg-white p-6 sm:p-8 border border-slate-200/80 shadow-sm">
              <p className="story-eyebrow font-serif-jp text-xs font-black tracking-[0.2em] text-[#00729F] uppercase mb-1">
                OUR STORY & MISSION
              </p>
              <h3 className="story-title font-serif-jp text-xl sm:text-2xl font-black text-slate-900 mb-4">
                {content.companyPage.storyTitle}
              </h3>
              <p className="story-lead text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                {content.companyPage.storyLead}
              </p>

              <div id="company-trust-points" className="company-trust-points space-y-3">
                {content.trustPoints.map((point, idx) => (
                  <div
                    key={point}
                    id={`company-trust-${idx + 1}`}
                    className="trust-item flex items-start gap-2.5 rounded-xl bg-[#F6F6F6] p-3 text-xs sm:text-sm font-bold text-slate-800"
                  >
                    <CheckCircle2 className="size-4 text-[#19BAD7] shrink-0 mt-0.5" />
                    <span className="leading-snug">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Insurance & Quality Seal Box */}
            <div id="company-insurance-box" className="company-insurance-box rounded-2xl bg-gradient-to-r from-[#00466D] to-[#00729F] p-6 text-white shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="size-6 text-[#19BAD7]" />
                <h4 className="font-serif-jp text-base font-black">
                  {locale === "ja" ? "最高1億円 損害賠償保険完備" : locale === "vi" ? "Bảo hiểm trách nhiệm 100 triệu Yên" : "Fully Insured Guarantee"}
                </h4>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                {locale === "ja"
                  ? "万が一の什器備品の破損やトラブル発生時にも迅速に対応できる安心の補償体制を整えています。"
                  : locale === "vi"
                  ? "Hệ thống bồi thường chuyên nghiệp xử lý sự cố thiết bị nhanh chóng, bảo vệ toàn diện tài sản của chủ đầu tư."
                  : "Complete liability insurance safeguarding your properties and valuable assets."}
              </p>
            </div>
          </div>

          {/* Visual Gallery Strip */}
          <div id="company-gallery-strip" className="company-gallery-strip lg:col-span-12 mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { src: "/works/photo-room.jpg", caption: locale === "ja" ? "客室清掃" : locale === "vi" ? "Vệ sinh buồng phòng" : "Room Cleaning" },
              { src: "/works/photo-bathroom.jpg", caption: locale === "ja" ? "水回り" : locale === "vi" ? "Khu vực vệ sinh" : "Water Area" },
              { src: "/works/photo-tools.jpg", caption: locale === "ja" ? "専用機材" : locale === "vi" ? "Thiết bị chuyên dụng" : "Pro Equipment" },
              { src: "/works/photo-staff.jpg", caption: locale === "ja" ? "研修風景" : locale === "vi" ? "Đào tạo nhân sự" : "Training" },
            ].map((item, idx) => (
              <div key={item.src} id={`company-gallery-${idx + 1}`} className="gallery-photo-card relative aspect-[4/3] rounded-xl overflow-hidden shadow-xs group">
                <Image src={item.src} alt={item.caption} fill className="gallery-photo-image object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 25vw" />
                <div className="gallery-photo-overlay absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                <span className="gallery-photo-caption absolute bottom-2.5 left-3 text-[11px] font-black text-white drop-shadow-md">{item.caption}</span>
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

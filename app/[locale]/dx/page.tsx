import { MessageCircle, Clock3, Camera, BarChart3 } from "lucide-react";
import Link from "next/link";
import { type Locale } from "@/lib/i18n";
import { companyBase, getContent } from "@/lib/site-data-i18n";
import { pageMetadata } from "@/lib/seo";
import { PageHeroHeader } from "@/components/ui/page-hero-header";
import { FloatingContactVertical } from "@/components/ui/floating-contact-vertical";
import { CtaContactBand } from "@/components/home/cta-contact-band";

const icons = [MessageCircle, Clock3, Camera, BarChart3];

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = getContent(locale);
  return pageMetadata(locale, "/dx", content.dxPage.title, content.dxPage.lead);
}

export default async function DxPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = getContent(locale);

  return (
    <main id="dx-page-main" className="dx-page-main site-shell">
      {/* Desktop Vertical Tab + Mobile Sticky Dock */}
      <FloatingContactVertical locale={locale} />

      {/* Corporate Page Hero Header */}
      <PageHeroHeader
        locale={locale}
        enTitle="SMART DX & TECH"
        jpTitle={content.dxPage.title}
        lead={content.dxPage.lead}
        currentPathName={content.dxPage.badge}
        bgImage="/works/photo-report.jpg"
      />

      <section id="dx-features-section" className="section-dx-features py-20 px-5 sm:px-8 bg-[#F6F6F6] border-b border-slate-200/80">
        <div className="dx-container mx-auto max-w-6xl">
          
          <div id="dx-header" className="dx-header text-center max-w-3xl mx-auto mb-14">
            <p className="dx-eyebrow font-serif-jp text-xs font-black tracking-[0.25em] text-[#00729F] uppercase mb-2">
              DX INNOVATION
            </p>
            <h2 className="dx-title font-serif-jp text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              {locale === "ja" ? "テクノロジーで実現する確かな品質管理" : locale === "vi" ? "Đổi Mới Công Nghệ & Quản Lý Chất Lượng Thông Minh" : "Smart Operational Reliability"}
            </h2>
            <div className="dx-divider mx-auto mt-3 h-0.5 w-12 bg-[#00729F]" />
          </div>

          <div id="dx-cards-grid" className="dx-cards-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.dxItems.map(([title, body], index) => {
              const Icon = icons[index] || MessageCircle;
              return (
                <div
                  key={title}
                  id={`dx-card-${index + 1}`}
                  className="dx-feature-card rounded-2xl bg-white p-7 border border-slate-200/80 shadow-sm hover:border-[#00729F] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="dx-icon-wrap grid size-12 place-items-center rounded-xl bg-sky-50 text-[#00729F] mb-6">
                      <Icon className="size-6" />
                    </span>
                    <span className="dx-badge text-xs font-mono font-bold text-slate-400 block mb-1">
                      FEATURE 0{index + 1}
                    </span>
                    <h3 className="dx-card-title font-serif-jp text-lg font-black text-slate-900 leading-snug mb-3">
                      {title}
                    </h3>
                    <p className="dx-card-desc text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Smart Field Management Box */}
          <div id="dx-management-box" className="dx-management-box mt-12 rounded-3xl bg-[#071224] text-white p-8 sm:p-12 border border-white/10 shadow-elevated">
            <div className="max-w-3xl">
              <span className="text-xs font-black tracking-widest text-[#19BAD7] uppercase block mb-2">
                SMART FIELD MANAGEMENT
              </span>
              <h3 className="dx-mgmt-title font-serif-jp text-2xl sm:text-4xl font-black leading-snug mb-4">
                {content.dxPage.smartTitle}
              </h3>
              <p className="dx-mgmt-lead text-xs sm:text-sm text-slate-300 leading-relaxed">
                {content.dxPage.smartLead}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  id="dx-line-btn"
                  href={companyBase.lineUrl}
                  className="dx-line-btn inline-flex items-center gap-2 rounded-xl bg-[#06C755] hover:bg-[#05b04c] px-6 py-3.5 text-xs sm:text-sm font-black text-white transition shadow-sm"
                >
                  <MessageCircle className="size-4" />
                  <span>{content.common.lineConsultLong}</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <CtaContactBand locale={locale} variant="dark" />
    </main>
  );
}

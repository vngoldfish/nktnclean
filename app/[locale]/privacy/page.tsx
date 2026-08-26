import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

import { type Locale, withLocale } from "@/lib/i18n";
import { companyBase, getContent } from "@/lib/site-data-i18n";
import { pageMetadata } from "@/lib/seo";
import { PageHeroHeader } from "@/components/ui/page-hero-header";
import { FloatingContactVertical } from "@/components/ui/floating-contact-vertical";
import { CtaContactBand } from "@/components/home/cta-contact-band";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = getContent(locale);
  return pageMetadata(locale, "/privacy", content.privacyPage.title, content.privacyPage.lead);
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = getContent(locale);

  return (
    <main id="privacy-page-main" className="privacy-page-main site-shell">
      {/* Floating Vertical Contact Buttons */}
      <FloatingContactVertical locale={locale} />

      {/* Page Hero Header */}
      <PageHeroHeader
        locale={locale}
        enTitle="LEGAL & COMPLIANCE"
        jpTitle={content.privacyPage.title}
        lead={content.privacyPage.lead}
        currentPathName={content.privacyPage.badge}
        bgImage="/works/company-office.jpg"
      />

      {/* Privacy Content */}
      <section id="privacy-content-section" className="section-privacy-content py-20 px-5 sm:px-8 bg-[#F6F6F6] border-b border-slate-200/80">
        <div id="privacy-container" className="privacy-container mx-auto max-w-4xl rounded-2xl bg-white p-6 sm:p-12 border border-slate-200/80 shadow-sm space-y-10">
          {content.privacyPage.sections.map(([title, body], idx) => (
            <section key={title} id={`privacy-block-${idx + 1}`} className="privacy-block space-y-3">
              <h2 className="privacy-block-title font-serif-jp text-lg sm:text-xl font-black text-slate-900 leading-snug">
                {title}
              </h2>
              <p className="privacy-block-text text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                {body}
              </p>
            </section>
          ))}

          <div id="privacy-contact-window" className="privacy-contact-window pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold text-slate-400">
                {locale === "ja" ? "個人情報に関するお問い合わせ窓口" : "Privacy Inquiry Contact"}
              </p>
              <p className="text-sm font-bold text-slate-800 mt-1">
                {companyBase.name}（{companyBase.email}）
              </p>
            </div>
            <Link
              id="privacy-contact-btn"
              href={withLocale(locale, "/contact")}
              className="privacy-contact-btn inline-flex items-center gap-2 rounded-xl bg-[#00729F] hover:bg-[#00466D] px-6 py-3 text-xs sm:text-sm font-black text-white transition shadow-xs"
            >
              <Mail className="size-4" />
              <span>{content.common.contact}</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CtaContactBand locale={locale} variant="dark" />
    </main>
  );
}

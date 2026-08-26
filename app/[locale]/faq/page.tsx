import { type Locale } from "@/lib/i18n";
import { getContent } from "@/lib/site-data-i18n";
import { breadcrumbJsonLd, faqJsonLd, jsonLd, pageMetadata } from "@/lib/seo";
import { PageHeroHeader } from "@/components/ui/page-hero-header";
import { FloatingContactVertical } from "@/components/ui/floating-contact-vertical";
import { CtaContactBand } from "@/components/home/cta-contact-band";
import FaqClient from "./faq-client";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = getContent(locale);
  return pageMetadata(locale, "/faq", content.faqPage.title, content.faqPage.lead);
}

export default async function FaqPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = getContent(locale);
  const breadcrumb = breadcrumbJsonLd(locale, [{ name: content.nav[0][0], path: "" }, { name: content.faqPage.badge, path: "/faq" }]);

  return (
    <main className="site-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqJsonLd(locale))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumb)} />

      {/* Floating Vertical Contact Buttons */}
      <FloatingContactVertical locale={locale} />

      {/* Page Hero Header */}
      <PageHeroHeader
        locale={locale}
        enTitle="FREQUENTLY ASKED QUESTIONS"
        jpTitle={content.faqPage.title}
        lead={content.faqPage.lead}
        currentPathName={content.faqPage.badge}
        bgImage="/works/photo-room.jpg"
      />

      {/* Main FAQ Content */}
      <section className="py-20 px-5 sm:px-8 bg-[#F6F6F6] border-b border-slate-200/80">
        <div className="mx-auto max-w-4xl">
          <FaqClient items={content.faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <CtaContactBand locale={locale} variant="dark" />
    </main>
  );
}

import { type Locale } from "@/lib/i18n";
import { getContent } from "@/lib/site-data-i18n";
import { breadcrumbJsonLd, faqJsonLd, jsonLd, pageMetadata } from "@/lib/seo";
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
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <p className="text-sky-800 text-sm font-black tracking-widest mb-3">{content.faqPage.badge}</p>
        <h1 className="max-w-5xl text-balance text-4xl font-black leading-[1.08] tracking-[-0.04em] sm:text-6xl">{content.faqPage.title}</h1>
        <p className="mt-8 max-w-3xl text-base leading-8 text-nktn-ink/68">{content.faqPage.lead}</p>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-24 sm:px-8">
        <FaqClient items={content.faqItems} />
      </section>

      <CtaContactBand locale={locale} />
    </main>
  );
}

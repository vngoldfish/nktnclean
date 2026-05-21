import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { type Locale, withLocale } from "@/lib/i18n";
import { companyBase, getContent } from "@/lib/site-data-i18n";
import { breadcrumbJsonLd, faqJsonLd, jsonLd, pageMetadata } from "@/lib/seo";

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
        <Badge variant="blue" className="mb-6">{content.faqPage.badge}</Badge>
        <h1 className="max-w-5xl text-balance text-4xl font-black leading-[1.08] tracking-[-0.04em] sm:text-6xl">{content.faqPage.title}</h1>
        <p className="mt-8 max-w-3xl text-base leading-8 text-nktn-ink/68">{content.faqPage.lead}</p>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-24 sm:px-8">
        <div className="grid gap-4">
          {content.faqItems.map(([question, answer]) => (
            <Card key={question} className="p-6 lg:p-8">
              <div className="flex gap-4">
                <HelpCircle className="mt-1 size-6 shrink-0 text-nktn-blue" />
                <div>
                  <h2 className="text-xl font-black tracking-[-0.03em]">{question}</h2>
                  <p className="mt-4 leading-8 text-nktn-ink/66">{answer}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] bg-nktn-ink p-7 text-white shadow-soft lg:p-10">
          <p className="text-sm font-black tracking-[0.2em] text-nktn-orange">CONTACT</p>
          <h2 className="mt-5 text-3xl font-black tracking-[-0.04em]">{content.faqPage.contactTitle}</h2>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button className="bg-nktn-green hover:bg-[#438b62]" asChild><Link href={companyBase.lineUrl}>{content.common.lineConsultLong} <ArrowRight className="size-4" /></Link></Button>
            <Button variant="secondary" asChild><Link href={withLocale(locale, "/contact")}>{content.common.contact}</Link></Button>
          </div>
        </div>
      </section>
    </main>
  );
}

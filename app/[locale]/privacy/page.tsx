import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CtaContactBand } from "@/components/home/cta-contact-band";
import { type Locale, withLocale } from "@/lib/i18n";
import { companyBase, getContent } from "@/lib/site-data-i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = getContent(locale);
  return pageMetadata(locale, "/privacy", content.privacyPage.title, content.privacyPage.lead);
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = getContent(locale);

  return (
    <main className="site-shell">
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28 text-center sm:text-left">
        <p className="text-amber-600 text-sm font-black tracking-widest mb-3">{content.privacyPage.badge}</p>
        <h1 className="max-w-5xl text-balance text-4xl font-black leading-[1.08] tracking-[-0.04em] text-nktn-ink sm:text-6xl">{content.privacyPage.title}</h1>
        <p className="mt-8 max-w-3xl text-base leading-8 text-nktn-ink/68">{content.privacyPage.lead}</p>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-24 sm:px-8">
        <Card className="p-7 lg:p-10">
          <div className="space-y-10">
            {content.privacyPage.sections.map(([title, body]) => (
              <section key={title}>
                <h2 className="text-xl font-black tracking-[-0.03em] text-sky-950">{title}</h2>
                <p className="mt-4 leading-8 text-nktn-ink/66">{body}</p>
              </section>
            ))}
          </div>
          <div className="mt-10 border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-nktn-ink/45">{locale === "ja" ? "お問い合わせ窓口" : "Contact Inquiry"}</p>
              <p className="text-base font-black text-nktn-ink/80 mt-1">{companyBase.email}</p>
            </div>
            <Button asChild>
              <Link href={withLocale(locale, "/contact")}>
                {content.common.contact} <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </Card>
      </section>

      <CtaContactBand locale={locale} />
    </main>
  );
}


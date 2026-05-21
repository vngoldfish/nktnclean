import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Badge variant="dark" className="mb-6">{content.privacyPage.badge}</Badge>
        <h1 className="max-w-5xl text-balance text-4xl font-black leading-[1.08] tracking-[-0.04em] sm:text-6xl">{content.privacyPage.title}</h1>
        <p className="mt-8 max-w-3xl text-base leading-8 text-nktn-ink/68">{content.privacyPage.lead}</p>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-24 sm:px-8">
        <Card className="p-7 lg:p-10">
          <div className="space-y-10">
            {content.privacyPage.sections.map(([title, body]) => (
              <section key={title}>
                <h2 className="text-xl font-black tracking-[-0.03em]">{title}</h2>
                <p className="mt-4 leading-8 text-nktn-ink/66">{body}</p>
              </section>
            ))}
          </div>
          <Button className="mt-10" asChild><Link href={withLocale(locale, "/contact")}>{content.common.contact} <ArrowRight className="size-4" /></Link></Button>
          <p className="mt-6 text-sm font-bold text-nktn-ink/45">{companyBase.email}</p>
        </Card>
      </section>
    </main>
  );
}

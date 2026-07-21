import { Bot, Camera, Clock3, MessageSquareText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { type Locale } from "@/lib/i18n";
import { getContent } from "@/lib/site-data-i18n";
import { pageMetadata } from "@/lib/seo";
import { CtaContactBand } from '@/components/home/cta-contact-band';

const icons = [Bot, Clock3, Camera, MessageSquareText];

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = getContent(locale);
  return pageMetadata(locale, "/dx", content.dxPage.title, content.dxPage.lead);
}

export default async function DxPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = getContent(locale);

  return (
    <main className="site-shell">
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <p className="text-amber-600 text-sm font-black tracking-widest mb-3">{content.dxPage.badge}</p>
        <h1 className="max-w-5xl text-balance text-4xl font-black leading-[1.08] tracking-[-0.04em] sm:text-6xl">{content.dxPage.title}</h1>
        <p className="mt-8 max-w-3xl text-base leading-8 text-nktn-ink/68">{content.dxPage.lead}</p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="grid gap-5 lg:grid-cols-4">
          {content.dxItems.map(([title, body], index) => {
            const Icon = icons[index];
            return (
              <Card key={title} className="p-7">
                <Icon className="size-8 text-nktn-blue" />
                <h2 className="mt-12 text-xl font-black tracking-[-0.03em]">{title}</h2>
                <p className="mt-5 leading-8 text-nktn-ink/64">{body}</p>
              </Card>
            );
          })}
        </div>

        <div className="mt-12">
          <CtaContactBand locale={locale} />
        </div>

        <div className="mt-8 rounded-[2.5rem] bg-gradient-to-br from-sky-800 to-sky-900 p-8 text-white lg:p-12">
          <p className="text-amber-400 text-sm font-black tracking-widest mb-3">SMART FIELD MANAGEMENT</p>
          <h2 className="mt-6 max-w-4xl text-3xl font-black tracking-[-0.04em] sm:text-5xl">{content.dxPage.smartTitle}</h2>
          <p className="mt-6 max-w-2xl leading-8 text-white/68">{content.dxPage.smartLead}</p>
        </div>

        <div className="mt-16">
          <CtaContactBand locale={locale} />
        </div>
      </section>
    </main>
  );
}

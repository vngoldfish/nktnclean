import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Mail, MessageCircle, Network, Phone, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CtaContactBand } from "@/components/home/cta-contact-band";
import { type Locale, withLocale } from "@/lib/i18n";
import { companyBase, getContent } from "@/lib/site-data-i18n";
import { pageMetadata } from "@/lib/seo";

const icons = [Building2, Sparkles, Network];

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = getContent(locale);
  return pageMetadata(locale, "/contact", content.contactPage.title, content.contactPage.lead);
}

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = getContent(locale);

  return (
    <main className="site-shell">
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Badge variant="dark" className="mb-6">{content.contactPage.badge}</Badge>
        <h1 className="max-w-5xl text-balance text-4xl font-black leading-[1.08] tracking-[-0.04em] sm:text-6xl">{content.contactPage.title}</h1>
        <p className="mt-8 max-w-3xl text-base leading-8 text-nktn-ink/68">{content.contactPage.lead}</p>
        <div className="mt-10 flex flex-wrap gap-2">{content.languages.map((language) => <Badge key={language} variant={language === "日本語" ? "dark" : "blue"}>{language}</Badge>)}</div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="rounded-[2.5rem] bg-white p-6 border border-slate-100 shadow-soft sm:p-10 lg:p-14">
          <Button className="h-20 w-full bg-[#06C755] text-lg shadow-soft hover:bg-[#05b04c] rounded-2xl sm:h-28 sm:text-2xl" size="lg" asChild>
            <Link href={companyBase.lineUrl} aria-label="Contact NKTN on LINE"><MessageCircle className="size-8" /> {content.common.lineConsultLong}</Link>
          </Button>
          <div className="mt-5 grid gap-3 lg:grid-cols-3">
            <Link href={companyBase.lineUrl} className="flex items-center gap-4 rounded-2xl bg-[#06C755]/5 border border-[#06C755]/20 p-5 font-black text-nktn-ink transition hover:bg-[#06C755]/10">
              <MessageCircle className="size-6 text-[#06C755]" />
              <span><span className="block text-xs text-nktn-ink/50">LINE ID</span>{companyBase.lineId}</span>
            </Link>
            <Link href={`mailto:${companyBase.email}`} className="flex items-center gap-4 rounded-2xl bg-slate-50 border border-slate-100 p-5 font-black text-nktn-ink transition hover:bg-slate-100/50">
              <Mail className="size-6 text-sky-800" />
              <span><span className="block text-xs text-nktn-ink/50">{content.common.mail}</span>{companyBase.email}</span>
            </Link>
            <Link href={`tel:${companyBase.phone}`} className="flex items-center gap-4 rounded-2xl bg-white p-5 font-black text-nktn-ink border border-slate-100 shadow-soft transition hover:bg-slate-50">
              <Phone className="size-6 text-sky-800" />
              <span><span className="block text-xs text-nktn-ink/50">{content.common.phone}</span>{companyBase.phone}</span>
            </Link>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {content.contactPage.intents.map(([title, body], index) => {
              const Icon = icons[index] || Building2;
              return <Card key={title} className="p-6 border border-slate-100 hover:border-sky-100 transition duration-300 hover:shadow-soft hover:-translate-y-0.5"><Icon className="size-7 text-sky-800" /><h2 className="mt-10 text-xl font-black">{title}</h2><p className="mt-4 leading-7 text-nktn-ink/62">{body}</p></Card>;
            })}
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] bg-slate-50 border border-slate-100 p-6">
              <p className="font-black">{companyBase.name} / {companyBase.brand}</p>
              <p className="mt-3 leading-8 text-nktn-ink/66">{content.contactPage.companySummary}｜{content.company.profileRows.representative} {companyBase.representative}（{companyBase.representativeKana}）</p>
              <Button className="mt-6 rounded-xl" variant="secondary" asChild><Link href={withLocale(locale, "/services")}>{content.common.viewServices} <ArrowRight className="size-4" /></Link></Button>
            </div>
            <div className="hidden sm:block rounded-[2rem] bg-white p-6 border border-slate-100 shadow-soft hover:shadow-md transition duration-300 hover:border-sky-100">
              <p className="font-black">{content.contactPage.qrTitle}</p>
              <p className="mt-3 leading-8 text-nktn-ink/66">{content.contactPage.qrLead}</p>
              <Image src="/line-qr-sample.svg" alt="NKTN LINE QR" width={520} height={520} className="mt-5 w-full rounded-3xl bg-white border border-slate-100" />
              <Button className="mt-6 w-full rounded-xl" asChild><Link href={companyBase.lineUrl}>{content.common.lineConsult} <ArrowRight className="size-4" /></Link></Button>
            </div>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] bg-white p-6 border border-slate-100 shadow-soft hover:shadow-md transition duration-300 hover:border-sky-100">
              <p className="font-black">{content.contactPage.partnerTitle}</p>
              <p className="mt-3 leading-8 text-nktn-ink/66">{content.contactPage.partnerLead}</p>
              <Button className="mt-6 rounded-xl" asChild><Link href={companyBase.lineUrl}>{content.common.lineConsult} <ArrowRight className="size-4" /></Link></Button>
            </div>
            <div className="overflow-hidden rounded-[2rem] bg-white border border-slate-100 shadow-soft">
              <div className="p-6">
                <p className="font-black">{content.contactPage.mapTitle}</p>
                <p className="mt-3 leading-8 text-nktn-ink/66">{companyBase.location}</p>
              </div>
              <iframe title="NKTN Google Map" src="https://www.google.com/maps?q=大阪市西成区鶴見橋1丁目17-14-302&output=embed" className="h-80 w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>

      <CtaContactBand locale={locale} />
    </main>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { type Locale } from "@/lib/i18n";
import { companyBase, getContent } from "@/lib/site-data-i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = getContent(locale);
  return pageMetadata(locale, "/company", content.companyPage.title, content.companyPage.lead);
}

export default async function CompanyPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = getContent(locale);
  const rows = [[content.company.profileRows.name, `${companyBase.name}（${companyBase.brand}）`], [content.company.profileRows.corporateNumber, companyBase.corporateNumber], [content.company.profileRows.established, companyBase.established], [content.company.profileRows.capital, companyBase.capital], [content.company.profileRows.location, companyBase.location], [content.company.profileRows.representative, `${companyBase.representative}（${companyBase.representativeKana}）`], [content.company.profileRows.business, content.company.business]];
  return <main className="site-shell"><section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"><Badge variant="orange" className="mb-6">{content.companyPage.badge}</Badge><h1 className="max-w-5xl text-balance text-4xl font-black leading-[1.08] tracking-[-0.04em] sm:text-6xl">{content.companyPage.title}</h1><p className="mt-8 max-w-3xl text-base leading-8 text-nktn-ink/68">{content.companyPage.lead}</p></section><section className="mx-auto grid max-w-7xl gap-8 px-5 pb-24 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]"><Card className="p-8"><p className="text-sm font-black tracking-[0.2em] text-nktn-blue">PROFILE</p><div className="mt-8 divide-y divide-nktn-ink/10">{rows.map(([label, value]) => <div key={label} className="grid gap-2 py-5 sm:grid-cols-[10rem_1fr]"><p className="font-black text-nktn-ink/50">{label}</p><p className="font-bold leading-7">{value}</p></div>)}</div></Card><div className="rounded-[2.5rem] bg-white p-8 shadow-soft"><p className="text-sm font-black tracking-[0.2em] text-nktn-orange">STORY</p><h2 className="mt-6 text-3xl font-black tracking-[-0.04em]">{content.companyPage.storyTitle}</h2><p className="mt-6 leading-8 text-nktn-ink/66">{content.companyPage.storyLead}</p><div className="mt-8 space-y-3">{content.trustPoints.map((point) => <div key={point} className="rounded-2xl bg-nktn-cream px-5 py-4 font-bold leading-7 text-nktn-ink/72">{point}</div>)}</div><Button className="mt-8" asChild><Link href={companyBase.lineUrl}>{content.companyPage.cta} <ArrowRight className="size-4" /></Link></Button></div></section></main>;
}

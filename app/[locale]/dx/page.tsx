import Link from "next/link";
import { ArrowRight, Bot, Camera, Clock3, MessageSquareText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { type Locale } from "@/lib/i18n";
import { companyBase, getContent } from "@/lib/site-data-i18n";
import { pageMetadata } from "@/lib/seo";

const icons = [Bot, Clock3, Camera, MessageSquareText];

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = getContent(locale);
  return pageMetadata(locale, "/dx", content.dxPage.title, content.dxPage.lead);
}

export default async function DxPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = getContent(locale);
  return <main className="site-shell"><section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"><Badge variant="blue" className="mb-6">{content.dxPage.badge}</Badge><h1 className="max-w-5xl text-balance text-4xl font-black leading-[1.08] tracking-[-0.04em] sm:text-6xl">{content.dxPage.title}</h1><p className="mt-8 max-w-3xl text-base leading-8 text-nktn-ink/68">{content.dxPage.lead}</p></section><section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8"><div className="grid gap-5 lg:grid-cols-4">{content.dxItems.map(([title, body], index) => { const Icon = icons[index]; return <Card key={title} className="p-7"><Icon className="size-8 text-nktn-blue" /><h2 className="mt-12 text-xl font-black tracking-[-0.03em]">{title}</h2><p className="mt-5 leading-8 text-nktn-ink/64">{body}</p></Card>; })}</div><div className="mt-8 rounded-[2.5rem] bg-nktn-ink p-8 text-white lg:p-12"><p className="text-sm font-black tracking-[0.2em] text-nktn-orange">SMART FIELD MANAGEMENT</p><h2 className="mt-6 max-w-4xl text-3xl font-black tracking-[-0.04em] sm:text-5xl">{content.dxPage.smartTitle}</h2><p className="mt-6 max-w-2xl leading-8 text-white/68">{content.dxPage.smartLead}</p></div><Button className="mt-10" asChild><Link href={companyBase.lineUrl}>{content.dxPage.cta} <ArrowRight className="size-4" /></Link></Button></section></main>;
}

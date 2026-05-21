import Link from "next/link";
import { ArrowRight, Network, ShieldCheck, TimerReset, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { type Locale } from "@/lib/i18n";
import { companyBase, getContent } from "@/lib/site-data-i18n";
import { pageMetadata } from "@/lib/seo";

const icons = [Network, TimerReset, ShieldCheck, Trophy];

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = getContent(locale);
  return pageMetadata(locale, "/strengths", content.strengthsPage.title, content.strengthsPage.lead);
}

export default async function StrengthsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = getContent(locale);
  return <main className="site-shell"><section className="mx-5 my-10 rounded-[2.5rem] bg-nktn-ink px-5 py-20 text-white sm:mx-8 sm:px-8 lg:rounded-[4rem] lg:py-28"><div className="mx-auto max-w-7xl"><Badge variant="orange" className="mb-6 bg-nktn-orange text-nktn-ink ring-0">{content.strengthsPage.badge}</Badge><h1 className="max-w-6xl text-balance text-4xl font-black leading-[1.08] tracking-[-0.04em] sm:text-6xl">{content.strengthsPage.title}</h1><p className="mt-8 max-w-3xl text-base leading-8 text-white/72 sm:text-lg">{content.strengthsPage.lead}</p></div></section><section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8"><div className="grid gap-5 lg:grid-cols-4">{content.strengths.map((strength, index) => { const Icon = icons[index]; return <Card key={strength.title} className="p-7"><Icon className="size-8 text-nktn-orange" /><h2 className="mt-12 text-2xl font-black tracking-[-0.04em]">{strength.title}</h2><p className="mt-5 leading-8 text-nktn-ink/66">{strength.body}</p></Card>; })}</div><div className="mt-8 grid gap-5 lg:grid-cols-3">{[["100%", "Report / contact / completion management"], ["ON TIME", "Deadline-oriented cleaning design"], ["BIG OPS", "DX-powered field operation"]].map(([label, body]) => <div key={label} className="rounded-[2rem] bg-white p-7 shadow-soft"><p className="text-4xl font-black tracking-[-0.04em] text-nktn-blue">{label}</p><p className="mt-4 font-bold leading-7 text-nktn-ink/70">{body}</p></div>)}</div><Button className="mt-10" asChild><Link href={companyBase.lineUrl}>{content.strengthsPage.cta} <ArrowRight className="size-4" /></Link></Button></section></main>;
}

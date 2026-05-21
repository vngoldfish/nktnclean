import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { type Locale } from "@/lib/i18n";
import { companyBase, getContent } from "@/lib/site-data-i18n";
import { breadcrumbJsonLd, jsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = getContent(locale);
  return pageMetadata(locale, "/services", content.servicesPage.title, content.servicesPage.lead);
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = getContent(locale);
  const breadcrumb = breadcrumbJsonLd(locale, [{ name: content.nav[0][0], path: "" }, { name: content.servicesPage.badge, path: "/services" }]);
  return <main className="site-shell"><script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(serviceJsonLd(locale))} /><script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumb)} /><section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"><Badge variant="orange" className="mb-6">{content.servicesPage.badge}</Badge><h1 className="max-w-5xl text-balance text-4xl font-black leading-[1.08] tracking-[-0.04em] sm:text-6xl">{content.servicesPage.title}</h1><p className="mt-8 max-w-3xl text-base leading-8 text-nktn-ink/68">{content.servicesPage.lead}</p></section><section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8"><div className="grid gap-6">{content.services.map((service, index) => <Card key={service.title} className="grid gap-8 p-7 lg:grid-cols-[0.7fr_1.3fr] lg:p-10"><div><p className="text-sm font-black tracking-[0.2em] text-nktn-blue">0{index + 1}</p><h2 className="mt-8 text-3xl font-black tracking-[-0.04em]">{service.title}</h2><p className="mt-5 leading-8 text-nktn-ink/64">{service.lead}</p></div><div className="grid gap-3 sm:grid-cols-2">{service.points.map((point) => <div key={point} className="flex items-center gap-3 rounded-2xl bg-nktn-cream p-4 font-bold"><CheckCircle2 className="size-5 text-nktn-green" />{point}</div>)}</div></Card>)}</div><div className="mt-16 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]"><Card className="p-7 lg:p-10"><Badge variant="blue">対応施設</Badge><h2 className="mt-6 text-3xl font-black tracking-[-0.04em]">{content.servicesPage.facilityTitle}</h2><p className="mt-5 leading-8 text-nktn-ink/64">{content.servicesPage.facilityLead}</p></Card><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{content.facilityTypes.map((facility) => <div key={facility} className="flex items-center gap-3 rounded-2xl bg-white p-5 font-black shadow-soft"><CheckCircle2 className="size-5 text-nktn-green" />{facility}</div>)}</div></div><div className="mt-16 rounded-[2.5rem] bg-nktn-ink p-7 text-white shadow-soft lg:p-10"><Badge variant="orange" className="bg-nktn-orange text-nktn-ink ring-0">Quality Flow</Badge><h2 className="mt-6 max-w-4xl text-4xl font-black tracking-[-0.04em]">{content.servicesPage.qualityTitle}</h2><div className="mt-10 grid gap-4 lg:grid-cols-4">{content.qualityFlow.map(([number, title, body]) => <div key={number} className="rounded-[1.75rem] bg-white/9 p-5 ring-1 ring-white/12"><p className="text-sm font-black tracking-[0.2em] text-nktn-orange">{number}</p><h3 className="mt-8 text-2xl font-black">{title}</h3><p className="mt-4 text-sm leading-7 text-white/64">{body}</p></div>)}</div></div><Button className="mt-10" asChild><Link href={companyBase.lineUrl}>{content.servicesPage.cta} <ArrowRight className="size-4" /></Link></Button></section></main>;
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Bot, 
  CheckCircle2, 
  Clock3, 
  Sparkles, 
  Network, 
  TimerReset, 
  ShieldCheck, 
  Trophy,
  Hotel,
  ClipboardCheck,
  Smartphone,
  MessageSquare,
  Sliders,
  Play,
  TrendingUp
} from "lucide-react";

const serviceIcons = [Hotel, ClipboardCheck, Smartphone];
const strengthIcons = [Network, TimerReset, ShieldCheck, Trophy];
const processIcons = [MessageSquare, Sliders, Play, TrendingUp];


import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { isLocale, type Locale, withLocale } from "@/lib/i18n";
import { companyBase, getContent } from "@/lib/site-data-i18n";

const fadeUp = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } };

export default function Home() {
  const params = useParams<{ locale: string }>();
  const locale: Locale = isLocale(params.locale) ? params.locale : "ja";
  const content = getContent(locale);

  return (
    <main className="site-shell overflow-hidden">
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.65 }}>
          <Badge variant="orange" className="mb-7">{content.home.badge}</Badge>
          <h1 className="whitespace-pre-line text-balance text-4xl font-black leading-[1.08] tracking-[-0.04em] text-nktn-ink sm:text-6xl lg:text-7xl">{content.home.title}</h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-nktn-ink/68 sm:text-lg">{content.home.lead}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild><Link href={companyBase.lineUrl}>{content.common.lineConsultLong} <ArrowRight className="size-4" /></Link></Button>
            <Button size="lg" variant="secondary" asChild><Link href={withLocale(locale, "/strengths")}>{content.nav[2][0]}</Link></Button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
          <Card className="p-6">
            <p className="text-xs font-black tracking-[0.22em] text-nktn-ink/40">TODAY'S CONTROL</p>
            <h2 className="mt-3 text-xl font-black tracking-[-0.03em]">{content.home.control}</h2>
            <div className="mt-8 space-y-3">
              {["OUT", "Cleaning", "Photo", "Done"].map((item) => <div key={item} className="flex items-center justify-between rounded-2xl bg-slate-50 px-5 py-4"><span className="font-black">{item}</span><CheckCircle2 className="size-5 text-nktn-green" /></div>)}
            </div>
            <div className="mt-8 rounded-2xl bg-slate-900 p-6 text-white">
              <p className="text-sm text-white/60">{content.home.companyInfo}</p>
              <p className="mt-1 text-xl font-black tracking-[-0.03em]">{content.company.profileRows.established} {companyBase.established}</p>
              <p className="mt-2 text-sm text-white/70">{content.company.profileRows.capital} {companyBase.capital} / {content.company.profileRows.corporateNumber} {companyBase.corporateNumber}</p>
            </div>
          </Card>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <Badge className="mb-5">Services</Badge>
        <h2 className="max-w-4xl text-balance text-4xl font-black tracking-[-0.04em] sm:text-6xl">{content.home.servicesTitle}</h2>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {content.services.map((service, index) => {
            const Icon = serviceIcons[index] || Hotel;
            return (
              <Card key={service.title} className="p-7 transition duration-300 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-black tracking-[0.2em] text-nktn-blue">0{index + 1}</p>
                  <Icon className="size-7 text-nktn-blue" />
                </div>
                <CardTitle className="mt-10 text-3xl tracking-[-0.05em]">{service.title}</CardTitle>
                <p className="mt-5 leading-8 text-nktn-ink/64">{service.lead}</p>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"><div><Badge variant="blue" className="mb-5">Works</Badge><h2 className="max-w-4xl text-balance text-4xl font-black tracking-[-0.04em] sm:text-6xl">{content.home.worksTitle}</h2><p className="mt-6 max-w-3xl leading-8 text-nktn-ink/66">{content.home.worksLead}</p></div><Button variant="secondary" asChild><Link href={withLocale(locale, "/services")}>{content.common.viewServices} <ArrowRight className="size-4" /></Link></Button></div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {content.workCases.map((work) => <Card key={work.title} className="overflow-hidden p-0"><Image src={work.image} alt={work.title} width={900} height={620} className="h-56 w-full object-cover" /><div className="p-6"><div className="flex items-center justify-between gap-3"><p className="text-sm font-black tracking-[0.18em] text-nktn-blue">{work.area}</p><Badge variant="orange">{work.status}</Badge></div><h3 className="mt-5 text-xl font-black tracking-[-0.03em]">{work.title}</h3><div className="mt-5 flex flex-wrap gap-2">{work.tags.map((tag) => <Badge key={tag} variant="dark">{tag}</Badge>)}</div></div></Card>)}
        </div>
      </section>

      <section className="mx-5 rounded-3xl border border-slate-200 bg-white px-5 py-20 shadow-soft sm:mx-8 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <Badge variant="orange" className="mb-6">Why NKTN</Badge>
            <h2 className="whitespace-pre-line text-balance text-4xl font-black tracking-[-0.04em] text-nktn-ink sm:text-6xl">{content.home.strengthsTitle}</h2>
            <Button className="mt-8" asChild>
              <Link href={withLocale(locale, "/strengths")}>
                {content.nav[2][0]} <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {content.strengths.map((strength, index) => {
              const Icon = strengthIcons[index] || ShieldCheck;
              return (
                <div key={strength.title} className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200 transition duration-300 hover:shadow-soft">
                  <div className="flex items-center gap-3">
                    <Icon className="size-6 text-nktn-orange shrink-0" />
                    <p className="font-black text-nktn-ink">{strength.title}</p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-nktn-ink/64">{strength.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8"><div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"><div><Badge className="mb-5">Blog</Badge><h2 className="max-w-4xl text-balance text-4xl font-black tracking-[-0.04em] sm:text-6xl">{content.home.blogTitle}</h2><p className="mt-6 max-w-3xl leading-8 text-nktn-ink/66">{content.home.blogLead}</p></div><Button variant="secondary" asChild><Link href={withLocale(locale, "/blog")}>Blog <ArrowRight className="size-4" /></Link></Button></div></section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"><div><Badge variant="blue" className="mb-5">DX Solution</Badge><h2 className="text-balance text-4xl font-black tracking-[-0.04em] sm:text-6xl">{content.home.dxTitle}</h2><p className="mt-6 leading-8 text-nktn-ink/66">{content.home.dxLead}</p><Button className="mt-8" variant="secondary" asChild><Link href={withLocale(locale, "/dx")}>DX</Link></Button></div><div className="grid gap-4 sm:grid-cols-3">{[[Bot, "LINE"], [Clock3, "OUT"], [Sparkles, "Photo"]].map(([Icon, label]) => { const TypedIcon = Icon as typeof Bot; return <Card key={label as string} className="p-6"><TypedIcon className="size-7 text-nktn-blue" /><p className="mt-12 text-xl font-black">{label as string}</p></Card>; })}</div></section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8"><div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"><div><Badge variant="orange" className="mb-5">FAQ</Badge><h2 className="max-w-4xl text-balance text-4xl font-black tracking-[-0.04em] sm:text-6xl">{content.home.faqTitle}</h2></div><Button variant="secondary" asChild><Link href={withLocale(locale, "/faq")}>{content.common.allFaq} <ArrowRight className="size-4" /></Link></Button></div><div className="mt-10 grid gap-4 lg:grid-cols-3">{content.faqItems.slice(0, 3).map(([question, answer]) => <Card key={question} className="p-6"><h3 className="text-xl font-black tracking-[-0.03em]">{question}</h3><p className="mt-4 leading-7 text-nktn-ink/62">{answer}</p></Card>)}</div></section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <div className="grid gap-4 lg:grid-cols-4">
          {content.processSteps.map(([number, title, body], index) => {
            const Icon = processIcons[index] || Play;
            return (
              <Card key={number} className="p-6 transition duration-300 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-black tracking-[0.2em] text-nktn-blue">{number}</p>
                  <Icon className="size-6 text-nktn-blue/80" />
                </div>
                <h3 className="mt-10 text-xl font-black">{title}</h3>
                <p className="mt-4 leading-7 text-nktn-ink/62">{body}</p>
              </Card>
            );
          })}
        </div>
      </section>
    </main>
  );
}

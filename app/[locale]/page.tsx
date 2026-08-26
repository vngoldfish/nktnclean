import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Clock3,
  Sparkles,
  Hotel,
  ClipboardCheck,
  Smartphone,
  Phone,
  FileText,
  Camera,
  CheckCircle2,
  Star,
  MessageCircle,
  Search,
  Handshake,
  Settings2,
  ClipboardList,
  TrendingUp,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { isLocale, type Locale, withLocale } from "@/lib/i18n";
import { companyBase, getContent } from "@/lib/site-data-i18n";
import { HeroSection } from "@/components/home/hero-section";
import { StrengthsSection } from "@/components/home/strengths-section";
import { CtaContactBand } from "@/components/home/cta-contact-band";

const serviceIcons = [Hotel, ClipboardCheck, Smartphone];
const processIcons = [Phone, Search, Handshake, Settings2, ClipboardList, TrendingUp];

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "ja";
  const content = getContent(locale);

  return (
    <main className="site-shell overflow-hidden">
      {/* ========== Hero ========== */}
      <HeroSection locale={locale} />

      {/* ========== CTA Band 1 ========== */}
      <CtaContactBand locale={locale} />

      {/* ========== Services ========== */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="text-center mb-14">
          <p className="text-sky-800 text-sm font-black tracking-widest mb-3">SERVICES</p>
          <h2 className="max-w-4xl mx-auto text-balance text-3xl font-black tracking-[-0.04em] sm:text-5xl lg:text-6xl">{content.home.servicesTitle}</h2>
          <p className="mt-4 text-nktn-ink/50 text-sm">{content.home.freeEstimate}</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {content.services.map((service, index) => {
            const Icon = serviceIcons[index] || Hotel;
            return (
              <Card key={service.title} className="p-7 border border-slate-100 hover:border-sky-100 transition duration-300 hover:shadow-soft hover:-translate-y-0.5">
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-sky-50 ring-1 ring-sky-100">
                    <Icon className="size-6 text-nktn-blue" />
                  </span>
                  <p className="text-4xl font-black text-sky-800/15">0{index + 1}</p>
                </div>
                <CardTitle className="mt-8 text-2xl tracking-[-0.04em]">{service.title}</CardTitle>
                <p className="mt-4 leading-8 text-nktn-ink/60">{service.lead}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.points.map((point) => (
                    <Badge key={point} variant="dark">{point}</Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Button variant="secondary" size="lg" asChild>
            <Link href={withLocale(locale, "/services")}>{content.common.viewServices} <ArrowRight className="size-4" /></Link>
          </Button>
        </div>
      </section>

      {/* ========== Why Choose Us ========== */}
      <StrengthsSection locale={locale} />

      {/* ========== Process Steps ========== */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="text-center mb-14">
          <p className="text-sky-800 text-sm font-black tracking-widest mb-3">FLOW</p>
          <h2 className="text-balance text-3xl font-black tracking-[-0.04em] sm:text-5xl">
            {locale === "ja" ? "ご依頼の流れ" : locale === "en" ? "How It Works" : "Quy trình thực hiện"}
          </h2>
          <p className="mt-5 mx-auto max-w-2xl text-nktn-ink/55 leading-8">
            {locale === "ja"
              ? "単発の清掃ではなく、施設ごとに最適化した清掃体制u構築し、長期パートナーとして品質を守り続けます。"
              : locale === "en"
              ? "We don't just clean once — we build optimized cleaning systems for each facility and maintain quality as your long-term partner."
              : "Chúng tôi không chỉ dọn dẹp một lần — mà xây dựng hệ thống vệ sinh tối ưu cho từng cơ sở và duy trì chất lượng như đối tác lâu dài."}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {content.processSteps.map(([number, title, body], index) => {
            const Icon = processIcons[index] || Phone;
            return (
              <div key={title} className="flex gap-4 rounded-3xl bg-white p-6 shadow-sm border border-slate-100">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-sky-50 text-sky-800">
                  <Icon className="size-6" />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-sky-800/80">STEP 0{number}</span>
                  </div>
                  <h3 className="mt-1 text-lg font-black tracking-[-0.03em] text-nktn-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-nktn-ink/60">{body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>



      {/* ========== CTA Band 4 ========== */}
      <CtaContactBand locale={locale} />

      {/* ========== Works ========== */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="text-center mb-14">
          <p className="text-sky-800 text-sm font-black tracking-widest mb-3">WORKS</p>
          <h2 className="max-w-4xl mx-auto text-balance text-3xl font-black tracking-[-0.04em] sm:text-5xl">{content.home.worksTitle}</h2>
          <p className="mt-4 max-w-3xl mx-auto leading-8 text-nktn-ink/60">{content.home.worksLead}</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {content.workCases.map((work) => (
            <Card key={work.title} className="overflow-hidden p-0 border border-slate-100 hover:border-sky-100 transition duration-300 hover:shadow-soft hover:-translate-y-0.5">
              <Image src={work.image} alt={work.title} width={900} height={620} className="h-52 w-full object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-black tracking-[0.18em] text-nktn-blue">{work.area}</p>
                  <Badge variant="orange">{work.status}</Badge>
                </div>
                <h3 className="mt-4 text-xl font-black tracking-[-0.03em]">{work.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {work.tags.map((tag) => <Badge key={tag} variant="dark">{tag}</Badge>)}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ========== Customer Reviews — styled like machino お客様の声 ========== */}
      <section className="bg-slate-50/50 py-20 px-5 sm:px-8 border-y border-slate-100">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <p className="text-sky-800 text-sm font-black tracking-widest mb-3">{content.home.reviewsTitle}</p>
            <h2 className="text-balance text-3xl font-black tracking-[-0.04em] sm:text-5xl">{content.home.reviewsTitle}</h2>
            <p className="mt-4 max-w-2xl mx-auto leading-8 text-nktn-ink/60">{content.home.reviewsLead}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {content.reviews.map((review, index) => (
              <div key={index} className="rounded-3xl bg-white p-6 border border-slate-100 hover:border-sky-100 shadow-soft transition duration-300 hover:shadow-md">
                {/* Score */}
                <div className="text-center mb-4">
                  <p className="text-xs font-bold text-nktn-ink/40 mb-1">{locale === "ja" ? "満足度" : "Satisfaction"}</p>
                  <span className="text-4xl font-black text-sky-800">{review.score}</span>
                  <span className="text-sm text-nktn-ink/40 font-bold">{locale === "ja" ? "点" : "/100"}</span>
                </div>
                {/* Stars */}
                <div className="flex items-center justify-center gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`size-4 ${i < Math.round(review.score / 20) ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`} />
                  ))}
                </div>
                {/* Review text */}
                <p className="text-sm leading-7 text-nktn-ink/70 text-center">{review.text}</p>
                {/* Reviewer info */}
                <div className="mt-4 text-center text-xs text-nktn-ink/45 font-bold">
                  {review.age} {review.gender}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA Band 5 ========== */}
      <CtaContactBand locale={locale} />

      {/* ========== DX ========== */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="text-center mb-14">
          <p className="text-sky-800 text-sm font-black tracking-widest mb-3">DX SOLUTION</p>
          <h2 className="max-w-4xl mx-auto text-balance text-3xl font-black tracking-[-0.04em] sm:text-5xl">{content.home.dxTitle}</h2>
          <p className="mt-4 max-w-3xl mx-auto leading-8 text-nktn-ink/60">{content.home.dxLead}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[[MessageCircle, "LINE"], [Clock3, "OUT"], [Camera, "Photo"]].map(([Icon, label]) => {
            const TypedIcon = Icon as typeof MessageCircle;
            return (
              <Card key={label as string} className="p-6 text-center border border-slate-100 hover:border-sky-100 shadow-soft transition duration-300 hover:shadow-md hover:-translate-y-0.5">
                <div className="grid size-14 mx-auto place-items-center rounded-2xl bg-sky-50 ring-1 ring-sky-100">
                  <TypedIcon className="size-7 text-nktn-blue" />
                </div>
                <p className="mt-6 text-xl font-black">{label as string}</p>
              </Card>
            );
          })}
        </div>
        <div className="mt-8 text-center">
          <Button variant="secondary" size="lg" asChild>
            <Link href={withLocale(locale, "/dx")}>DX <ArrowRight className="size-4" /></Link>
          </Button>
        </div>
      </section>

      {/* ========== Blog ========== */}
      <section className="bg-slate-50 py-20 px-5 sm:px-8 border-y border-slate-100">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <p className="text-sky-800 text-sm font-black tracking-widest mb-3">BLOG</p>
            <h2 className="max-w-4xl mx-auto text-balance text-3xl font-black tracking-[-0.04em] sm:text-5xl">{content.home.blogTitle}</h2>
            <p className="mt-4 max-w-3xl mx-auto leading-8 text-nktn-ink/60">{content.home.blogLead}</p>
          </div>
          <div className="text-center">
            <Button variant="secondary" size="lg" asChild>
              <Link href={withLocale(locale, "/blog")}>Blog <ArrowRight className="size-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="text-center mb-14">
          <p className="text-sky-800 text-sm font-black tracking-widest mb-3">FAQ</p>
          <h2 className="max-w-4xl mx-auto text-balance text-3xl font-black tracking-[-0.04em] sm:text-5xl">{content.home.faqTitle}</h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {content.faqItems.slice(0, 3).map(([question, answer]) => (
            <Card key={question} className="p-6 border border-slate-100 hover:border-sky-100 shadow-soft transition duration-300 hover:shadow-md">
              <h3 className="text-lg font-black tracking-[-0.03em]">{question}</h3>
              <p className="mt-4 leading-7 text-nktn-ink/60">{answer}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button variant="secondary" size="lg" asChild>
            <Link href={withLocale(locale, "/faq")}>{content.common.allFaq} <ArrowRight className="size-4" /></Link>
          </Button>
        </div>
      </section>

      {/* ========== CTA Band 6 (Final) ========== */}
      <CtaContactBand locale={locale} />
    </main>
  );
}

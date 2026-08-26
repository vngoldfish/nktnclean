import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Hotel,
  ClipboardCheck,
  Smartphone,
  Phone,
  Camera,
  CheckCircle2,
  Star,
  MessageCircle,
  Search,
  Handshake,
  Settings2,
  ClipboardList,
  TrendingUp,
  Sparkles,
  Award,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { isLocale, type Locale, withLocale } from "@/lib/i18n";
import { companyBase, getContent } from "@/lib/site-data-i18n";

import { SuperHeroSlider } from "@/components/home/super-hero-slider";
import { AboutPhilosophyTabs } from "@/components/home/about-philosophy-tabs";
import { SuperServiceShowcase } from "@/components/home/super-service-showcase";
import { StrengthsSection } from "@/components/home/strengths-section";
import { ComparisonTable } from "@/components/ui/comparison-table";
import { GlobalWorkCulture } from "@/components/home/global-work-culture";
import { PartnerEquipmentBand } from "@/components/home/partner-equipment-band";
import { FloatingContactVertical } from "@/components/ui/floating-contact-vertical";
import { CtaContactBand } from "@/components/home/cta-contact-band";

const processIcons = [Phone, Search, Handshake, Settings2, ClipboardList, TrendingUp];

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "ja";
  const content = getContent(locale);

  return (
    <main className="site-shell overflow-hidden">
      {/* 1. Desktop Right Vertical Floating Button + Mobile Sticky Bar */}
      <FloatingContactVertical locale={locale} />

      {/* 2. Signature Super Clean Multi-slide Corporate Hero */}
      <SuperHeroSlider locale={locale} />

      {/* 3. About & Philosophy / Profile Tabs */}
      <AboutPhilosophyTabs locale={locale} />

      {/* 4. Interactive Service Showcase (Bed making / Building maintenance / DX) */}
      <SuperServiceShowcase locale={locale} />

      {/* 5. Direct Comparison Table (Quality & Trust vs Standard Cleaners) */}
      <ComparisonTable locale={locale} />

      {/* 6. Why Choose Us (Bento Grid Strengths) */}
      <StrengthsSection locale={locale} />

      {/* 7. Professional Equipment & Chemicals Standards */}
      <PartnerEquipmentBand locale={locale} />

      {/* 8. Multinational Workforce & Hospitality Culture */}
      <GlobalWorkCulture locale={locale} />

      {/* 9. LINE Quick Quote Accent Band */}
      <CtaContactBand locale={locale} variant="line-accent" />

      {/* 10. Process Flow Steps */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 bg-white">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 border border-sky-200/80 px-4 py-1.5 text-xs font-black tracking-widest text-[#00729F] uppercase mb-4">
            <Clock3 className="size-3.5 text-[#00729F]" />
            WORKFLOW
          </span>
          <h2 className="font-serif-jp text-balance text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            {locale === "ja" ? "ご依頼から清掃開始までの流れ" : locale === "en" ? "How It Works" : "Quy trình thực hiện"}
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
            {locale === "ja"
              ? "単発の清掃ではなく、施設ごとに最適化した清掃体制を構築し、長期パートナーとして品質を守り続けます。"
              : locale === "en"
              ? "We build optimized cleaning systems for each facility and maintain quality as your long-term partner."
              : "Chúng tôi xây dựng hệ thống vệ sinh tối ưu cho từng cơ sở và duy trì chất lượng như đối tác lâu dài."}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.processSteps.map(([number, title, body], index) => {
            const Icon = processIcons[index] || Phone;
            return (
              <div
                key={title}
                className="group relative rounded-3xl bg-slate-50/70 p-7 border border-slate-200/80 hover:bg-white hover:border-[#00729F]/40 hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="grid size-12 place-items-center rounded-2xl bg-white shadow-soft text-[#00729F] border border-slate-100 group-hover:scale-105 group-hover:bg-[#00729F] group-hover:text-white transition-all duration-300">
                      <Icon className="size-6" />
                    </span>
                    <span className="text-xs font-black text-[#00729F] bg-sky-100/80 px-3 py-1 rounded-full">
                      STEP 0{number}
                    </span>
                  </div>
                  <h3 className="font-serif-jp text-lg font-black tracking-tight text-slate-900 mb-2">{title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 11. Customer Reviews */}
      <section className="bg-slate-50/60 py-20 px-5 sm:px-8 border-y border-slate-200/80">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-200/80 px-4 py-1.5 text-xs font-black tracking-widest text-amber-800 uppercase mb-4">
              <Star className="size-3.5 text-amber-500 fill-amber-500" />
              VOICE & REPUTATION
            </span>
            <h2 className="font-serif-jp text-balance text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
              {content.home.reviewsTitle}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto leading-relaxed text-slate-600 text-sm sm:text-base">
              {content.home.reviewsLead}
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {content.reviews.map((review, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white p-6 sm:p-7 border border-slate-200/80 hover:border-amber-200/90 shadow-soft transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Score & Stars */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                    <div>
                      <p className="text-[11px] font-bold text-slate-400">
                        {locale === "ja" ? "評価スコア" : "Rating"}
                      </p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-black text-sky-950">{review.score}</span>
                        <span className="text-xs text-slate-400 font-bold">/100</span>
                      </div>
                    </div>
                    <div className="flex text-amber-400 text-xs gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`size-3.5 ${
                            i < Math.round(review.score / 20)
                              ? "text-amber-400 fill-amber-400"
                              : "text-slate-200"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  {/* Review text */}
                  <p className="text-sm leading-relaxed text-slate-700">{review.text}</p>
                </div>
                {/* Reviewer info */}
                <div className="mt-6 pt-3 border-t border-slate-100 text-xs text-slate-500 font-bold flex items-center justify-between">
                  <span>{review.age}</span>
                  <span className="text-slate-400">{review.gender}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FAQ Section */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 border border-sky-200/80 px-4 py-1.5 text-xs font-black tracking-widest text-[#00729F] uppercase mb-4">
            FAQ
          </span>
          <h2 className="font-serif-jp max-w-4xl mx-auto text-balance text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">
            {content.home.faqTitle}
          </h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {content.faqItems.slice(0, 3).map(([question, answer]) => (
            <Card
              key={question}
              className="p-6 sm:p-7 border border-slate-200/80 bg-white shadow-soft hover:border-[#00729F]/40 transition duration-300 hover:shadow-md rounded-3xl"
            >
              <h3 className="font-serif-jp text-base font-black tracking-tight text-slate-900 leading-snug">{question}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{answer}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button variant="secondary" size="lg" className="rounded-2xl font-black" asChild>
            <Link href={withLocale(locale, "/faq")}>
              {content.common.allFaq} <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* 13. Final CTA Band */}
      <CtaContactBand locale={locale} variant="dark" />
    </main>
  );
}

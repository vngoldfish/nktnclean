"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileCheck, Camera, CalendarDays, Phone, MessageCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { type Locale } from "@/lib/i18n";
import { companyBase, getContent } from "@/lib/site-data-i18n";

const fadeUp = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } };

const trustBadgeIcons = [FileCheck, Camera, CalendarDays];

interface HeroSectionProps {
  locale: Locale;
}

export function HeroSection({ locale }: HeroSectionProps) {
  const content = getContent(locale);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-amber-50/40">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px'}} />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        {/* Top badge line */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.5 }} className="text-center mb-6">
          <Badge variant="blue" className="text-sm px-5 py-2">{content.home.badge}</Badge>
        </motion.div>

        {/* Main title — BIG and centered */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="text-center">
          <h1 className="whitespace-pre-line text-balance text-5xl font-black leading-[1.08] tracking-[-0.04em] text-nktn-ink sm:text-7xl lg:text-8xl">
            {content.home.title}
          </h1>
          <p className="mt-6 mx-auto max-w-3xl text-base leading-8 text-nktn-ink/60 sm:text-lg">
            {content.home.lead}
          </p>
        </motion.div>

        {/* Trust Badges — Large, prominent, centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          {content.home.trustBadges.map((badge: string, index: number) => {
            const Icon = trustBadgeIcons[index] || FileCheck;
            return (
              <div
                key={badge}
                className="flex flex-col items-center gap-2 rounded-2xl bg-white px-6 py-5 shadow-lg ring-1 ring-slate-200/60"
              >
                <span className="grid size-12 place-items-center rounded-full bg-amber-100">
                  <Icon className="size-6 text-amber-600" />
                </span>
                <span className="text-sm font-black text-nktn-ink tracking-wide">{badge}</span>
              </div>
            );
          })}
        </motion.div>

        {/* Giant CTA — Phone + LINE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          {/* Phone number — Large like machino */}
          <Link
            href={`tel:${companyBase.phone}`}
            className="group inline-flex items-center gap-3"
          >
            <span className="grid size-12 sm:size-14 place-items-center rounded-full bg-amber-500 text-white shadow-md group-hover:bg-amber-400 transition">
              <Phone className="size-6 sm:size-7" />
            </span>
            <div>
              <span className="block text-xs font-bold text-nktn-ink/50">{content.topBar.hours}</span>
              <span className="block text-2xl sm:text-3xl font-black text-nktn-ink tracking-wider">{companyBase.phone}</span>
            </div>
          </Link>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link
              href={companyBase.lineUrl}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#06C755] px-8 py-4 text-base font-black text-white shadow-lg hover:bg-[#05b04c] transition"
            >
              <MessageCircle className="size-5" />
              {content.common.lineConsultLong}
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href={`tel:${companyBase.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-800 px-8 py-4 text-base font-black text-white shadow-lg hover:bg-sky-700 transition"
            >
              <Phone className="size-5" />
              {content.home.freeEstimate}
            </Link>
          </div>
        </motion.div>

        {/* Operations card — below */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-14 mx-auto max-w-2xl"
        >
          <Card className="p-6 bg-white/80 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs font-black tracking-[0.22em] text-nktn-ink/40">TODAY&apos;S CONTROL</p>
                <h2 className="mt-1 text-lg font-black tracking-[-0.03em]">{content.home.control}</h2>
              </div>
              <div className="text-right">
                <p className="text-xs text-nktn-ink/40">{content.home.companyInfo}</p>
                <p className="text-sm font-bold">{content.company.profileRows.established} {companyBase.established}</p>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {["OUT", "Cleaning", "Photo", "Done"].map((item) => (
                <div key={item} className="flex flex-col items-center gap-1.5 rounded-xl bg-slate-50 px-3 py-3">
                  <CheckCircle2 className="size-5 text-nktn-green" />
                  <span className="text-xs font-bold text-nktn-ink/70">{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

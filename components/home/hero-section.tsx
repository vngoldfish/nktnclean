"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { type Locale, withLocale } from "@/lib/i18n";
import { companyBase, getContent } from "@/lib/site-data-i18n";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

const sharedImages = {
  room: "/works/photo-room.jpg",
  staff: "/works/photo-staff.jpg",
};

interface HeroSectionProps {
  locale: Locale;
}

export function HeroSection({ locale }: HeroSectionProps) {
  const content = getContent(locale);

  return (
    <section className="relative overflow-hidden bg-slate-50/30 border-b border-slate-100">
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <Badge variant="blue" className="text-xs px-4 py-1.5 font-bold tracking-wide">
                {content.home.badge}
              </Badge>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="whitespace-normal sm:whitespace-pre-line text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl"
            >
              {content.home.title}
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
            >
              {content.home.lead}
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
            >
              <Link
                href={companyBase.lineUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-[#06C755] px-8 py-4 text-base font-bold text-white shadow-soft hover:bg-[#05b04c] transition duration-200"
              >
                <MessageCircle className="size-5" />
                {content.common.lineConsultLong}
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href={withLocale(locale, "/services")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-white border border-slate-200 px-8 py-4 text-base font-bold text-slate-800 shadow-soft hover:bg-slate-50 transition duration-200"
              >
                {content.common.viewServices}
              </Link>
            </motion.div>

            {/* Quick Contact Info */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex items-center gap-3 border-t border-slate-100 pt-6 w-full"
            >
              <a href={`tel:${companyBase.phone}`} className="flex items-center gap-2 text-slate-700 hover:text-sky-800 transition">
                <Phone className="size-5 text-sky-800" />
                <span className="text-sm font-bold">{companyBase.phone}</span>
                <span className="text-xs text-slate-400">({content.topBar.hours})</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column - Staggered Photos */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4 lg:h-[480px]"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-soft border border-slate-100 h-64 sm:h-80 lg:h-[90%]">
                <Image
                  src={sharedImages.room}
                  alt="Hotel Room Cleaning"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 1024px) 50vw, 300px"
                  priority
                />
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-soft border border-slate-100 h-64 sm:h-80 lg:h-[90%] mt-8 lg:mt-12">
                <Image
                  src={sharedImages.staff}
                  alt="Apartment Room Cleaning"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 1024px) 50vw, 300px"
                  priority
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

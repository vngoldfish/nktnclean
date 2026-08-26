import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle2, 
  Hotel, 
  ClipboardCheck, 
  Smartphone,
  Home,
  Building2,
  Building,
  Layers,
  Key,
  FileCheck,
  Brush,
  Camera,
  MessageCircle
} from "lucide-react";

import { type Locale } from "@/lib/i18n";
import { companyBase, getContent } from "@/lib/site-data-i18n";
import { breadcrumbJsonLd, jsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";
import { PageHeroHeader } from "@/components/ui/page-hero-header";
import { ComparisonTable } from "@/components/ui/comparison-table";
import { FloatingContactVertical } from "@/components/ui/floating-contact-vertical";
import { CtaContactBand } from "@/components/home/cta-contact-band";

const serviceIcons = [Hotel, ClipboardCheck, Smartphone];
const facilityIcons = [Hotel, Home, Building2, Building, Layers, Key];
const qualityIcons = [FileCheck, Brush, Camera, CheckCircle2];

const serviceImages = [
  "/works/photo-room.jpg",
  "/works/photo-staff.jpg",
  "/works/photo-room.jpg",
];

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = getContent(locale);
  return pageMetadata(locale, "/services", content.servicesPage.title, content.servicesPage.lead);
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = getContent(locale);
  const breadcrumb = breadcrumbJsonLd(locale, [
    { name: content.nav[0][0], path: "" },
    { name: content.servicesPage.badge, path: "/services" }
  ]);

  return (
    <main className="site-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(serviceJsonLd(locale))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumb)} />
      
      {/* Floating Vertical Contact Buttons */}
      <FloatingContactVertical locale={locale} />

      {/* Corporate Page Hero Header */}
      <PageHeroHeader
        locale={locale}
        enTitle="SERVICE & SOLUTIONS"
        jpTitle={content.servicesPage.title}
        lead={content.servicesPage.lead}
        currentPathName={content.servicesPage.badge}
        bgImage="/works/photo-room.jpg"
      />

      {/* Core Services Section */}
      <section className="py-20 px-5 sm:px-8 bg-[#F6F6F6] border-b border-slate-200/80">
        <div className="mx-auto max-w-6xl space-y-12">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="font-serif-jp text-xs font-black tracking-[0.25em] text-[#00729F] uppercase mb-2">
              SERVICE LINEUP
            </p>
            <h2 className="font-serif-jp text-3xl sm:text-4xl font-black text-slate-900">
              {locale === "ja" ? "主要サービス品目" : locale === "vi" ? "Danh Mục Dịch Vụ Chính" : "Our Core Services"}
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-12 bg-[#00729F]" />
          </div>

          {content.services.map((service, index) => {
            const Icon = serviceIcons[index] || Hotel;
            const imageSrc = serviceImages[index] || "/works/photo-room.jpg";
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.title}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-10 shadow-sm overflow-hidden"
              >
                <div className={`grid gap-8 lg:grid-cols-12 lg:items-center ${isEven ? "" : "lg:grid-flow-dense"}`}>
                  
                  {/* Left or Right Image */}
                  <div className={`lg:col-span-5 relative aspect-[4/3] rounded-xl overflow-hidden shadow-xs ${isEven ? "" : "lg:col-start-8"}`}>
                    <Image
                      src={imageSrc}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 450px"
                    />
                    <span className="absolute top-3 left-3 rounded-md bg-[#00729F] px-3 py-1 text-xs font-black text-white font-mono shadow-xs">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className={`lg:col-span-7 space-y-4 ${isEven ? "" : "lg:col-start-1"}`}>
                    <div className="flex items-center gap-2 text-[#00729F]">
                      <Icon className="size-5" />
                      <span className="font-serif-jp text-xs font-black tracking-widest uppercase">
                        SERVICE 0{index + 1}
                      </span>
                    </div>

                    <h3 className="font-serif-jp text-2xl sm:text-3xl font-black text-slate-900 leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {service.lead}
                    </p>

                    <div className="grid gap-2.5 sm:grid-cols-2 pt-2">
                      {service.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-center gap-2.5 rounded-lg bg-[#F6F6F6] p-3 text-xs sm:text-sm font-bold text-slate-800"
                        >
                          <CheckCircle2 className="size-4 text-[#19BAD7] shrink-0" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex gap-3">
                      <Link
                        href={companyBase.lineUrl}
                        className="inline-flex items-center gap-2 rounded-lg bg-[#06C755] hover:bg-[#05b04c] px-5 py-3 text-xs sm:text-sm font-black text-white transition shadow-xs"
                      >
                        <MessageCircle className="size-4" />
                        <span>{locale === "ja" ? "LINEで相談・見積もり" : "Inquire via LINE"}</span>
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Facilities Supported */}
      <section className="py-20 px-5 sm:px-8 bg-white border-b border-slate-200/80">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="font-serif-jp text-xs font-black tracking-[0.25em] text-[#00729F] uppercase mb-2">
              FACILITIES
            </p>
            <h2 className="font-serif-jp text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              {content.servicesPage.facilityTitle}
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-12 bg-[#00729F]" />
            <p className="mt-4 text-slate-600 text-sm sm:text-base">
              {content.servicesPage.facilityLead}
            </p>
          </div>

          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {content.facilityTypes.map((facility, index) => {
              const FacilityIcon = facilityIcons[index] || Hotel;
              return (
                <div
                  key={facility}
                  className="flex flex-col items-center justify-center text-center p-5 rounded-2xl bg-[#F6F6F6] border border-slate-200/80 hover:bg-white hover:border-[#00729F] transition-all duration-200"
                >
                  <span className="grid size-12 place-items-center rounded-xl bg-white text-[#00729F] shadow-xs mb-3">
                    <FacilityIcon className="size-6" />
                  </span>
                  <span className="text-xs sm:text-sm font-black text-slate-900">{facility}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Work Showcase Photo Strip */}
      <section className="py-0 bg-[#F6F6F6]">
        <div className="grid grid-cols-2 sm:grid-cols-4">
          {[
            { src: "/works/photo-room.jpg", label: locale === "ja" ? "客室清掃" : "Room Clean" },
            { src: "/works/photo-bathroom.jpg", label: locale === "ja" ? "水回り清掃" : "Bathroom" },
            { src: "/works/photo-tools.jpg", label: locale === "ja" ? "専用機材" : "Pro Tools" },
            { src: "/works/photo-report.jpg", label: locale === "ja" ? "品質報告" : "QC Report" },
          ].map((item) => (
            <div key={item.src} className="relative aspect-[4/3] overflow-hidden group">
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071224]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-xs font-black text-white tracking-wide drop-shadow-md">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quality Flow Section */}
      <section className="py-20 px-5 sm:px-8 bg-[#071224] text-white border-b border-white/10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="font-serif-jp text-xs font-black tracking-[0.25em] text-[#19BAD7] uppercase mb-2">
              QUALITY FLOW
            </p>
            <h2 className="font-serif-jp text-3xl sm:text-4xl font-black leading-tight">
              {content.servicesPage.qualityTitle}
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-12 bg-[#19BAD7]" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.qualityFlow.map(([number, title, body], index) => {
              const QualityIcon = qualityIcons[index] || CheckCircle2;
              return (
                <div
                  key={number}
                  className="rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col justify-between hover:bg-white/10 transition duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-black tracking-[0.2em] text-[#19BAD7]">{number}</span>
                      <QualityIcon className="size-5 text-[#19BAD7]" />
                    </div>
                    <h3 className="font-serif-jp text-lg font-black mb-3">{title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <ComparisonTable locale={locale} />

      {/* Final CTA */}
      <CtaContactBand locale={locale} variant="dark" />
    </main>
  );
}

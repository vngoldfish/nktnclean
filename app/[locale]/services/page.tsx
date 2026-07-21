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
  Camera
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { type Locale } from "@/lib/i18n";
import { getContent } from "@/lib/site-data-i18n";
import { breadcrumbJsonLd, jsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";
import { CtaContactBand } from '@/components/home/cta-contact-band';

const serviceIcons = [Hotel, ClipboardCheck, Smartphone];
const facilityIcons = [Hotel, Home, Building2, Building, Layers, Key];
const qualityIcons = [FileCheck, Brush, Camera, CheckCircle2];

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
      
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <p className="text-amber-600 text-sm font-black tracking-widest mb-3">{content.servicesPage.badge}</p>
        <h1 className="max-w-5xl text-balance text-4xl font-black leading-[1.08] tracking-[-0.04em] sm:text-6xl">
          {content.servicesPage.title}
        </h1>
        <p className="mt-8 max-w-3xl text-base leading-8 text-nktn-ink/68">
          {content.servicesPage.lead}
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        {/* Services List */}
        <div className="grid gap-6">
          {content.services.map((service, index) => {
            const Icon = serviceIcons[index] || Hotel;
            return (
              <Card key={service.title} className="grid gap-8 p-7 lg:grid-cols-[0.7fr_1.3fr] lg:p-10 transition duration-300 hover:shadow-lg">
                <div>
                  <div className="flex items-center gap-3">
                    <p className="text-sm font-black tracking-[0.2em] text-sky-800">0{index + 1}</p>
                    <Icon className="size-5 text-sky-800" />
                  </div>
                  <h2 className="mt-6 text-3xl font-black tracking-[-0.04em]">{service.title}</h2>
                  <p className="mt-5 leading-8 text-nktn-ink/64">{service.lead}</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {service.points.map((point) => (
                    <div key={point} className="flex items-center gap-3 rounded-2xl bg-nktn-cream p-4 font-bold">
                      <CheckCircle2 className="size-5 text-sky-800 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Facility Types */}
        <div className="mt-16 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Card className="p-7 lg:p-10">
            <Badge variant="blue">対応施設</Badge>
            <h2 className="mt-6 text-3xl font-black tracking-[-0.04em]">{content.servicesPage.facilityTitle}</h2>
            <p className="mt-5 leading-8 text-nktn-ink/64">{content.servicesPage.facilityLead}</p>
          </Card>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {content.facilityTypes.map((facility, index) => {
              const FacilityIcon = facilityIcons[index] || Hotel;
              return (
                <div key={facility} className="flex items-center gap-3 rounded-2xl bg-white p-5 font-black shadow-soft ring-1 ring-slate-100 transition duration-300 hover:shadow-md">
                  <FacilityIcon className="size-5 text-sky-800 shrink-0" />
                  <span>{facility}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16">
          <CtaContactBand locale={locale} />
        </div>

        {/* Quality Flow */}
        <div className="mt-16 rounded-[2.5rem] bg-gradient-to-b from-sky-900 via-sky-800 to-sky-900 p-7 text-white shadow-soft lg:p-10">
          <p className="text-amber-400 text-sm font-black tracking-widest mb-3">QUALITY FLOW</p>
          <h2 className="mt-6 max-w-4xl text-4xl font-black tracking-[-0.04em]">{content.servicesPage.qualityTitle}</h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {content.qualityFlow.map(([number, title, body], index) => {
              const QualityIcon = qualityIcons[index] || CheckCircle2;
              return (
                <div key={number} className="rounded-[1.75rem] bg-white/9 p-5 ring-1 ring-white/12 transition duration-300 hover:bg-white/15">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-black tracking-[0.2em] text-amber-400">{number}</p>
                    <QualityIcon className="size-5 text-amber-400" />
                  </div>
                  <h3 className="mt-8 text-2xl font-black">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/64">{body}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16">
          <CtaContactBand locale={locale} />
        </div>
      </section>
    </main>
  );
}

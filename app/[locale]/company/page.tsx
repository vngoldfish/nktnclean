import { 
  Building2,
  FileText,
  Calendar,
  Coins,
  MapPin,
  User,
  Briefcase
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { type Locale } from "@/lib/i18n";
import { companyBase, getContent } from "@/lib/site-data-i18n";
import { pageMetadata } from "@/lib/seo";
import { CtaContactBand } from '@/components/home/cta-contact-band';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = getContent(locale);
  return pageMetadata(locale, "/company", content.companyPage.title, content.companyPage.lead);
}

export default async function CompanyPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = getContent(locale);
  
  const rows = [
    { icon: Building2, label: content.company.profileRows.name, value: `${companyBase.name}（${companyBase.brand}）` },
    { icon: FileText, label: content.company.profileRows.corporateNumber, value: companyBase.corporateNumber },
    { icon: FileText, label: content.company.profileRows.invoiceNumber, value: companyBase.invoiceNumber },
    { icon: Calendar, label: content.company.profileRows.established, value: companyBase.established },
    { icon: Coins, label: content.company.profileRows.capital, value: companyBase.capital },
    { icon: MapPin, label: content.company.profileRows.location, value: companyBase.location },
    { icon: User, label: content.company.profileRows.representative, value: `${companyBase.representative}（${companyBase.representativeKana}）` },
    { icon: Briefcase, label: content.company.profileRows.business, value: content.company.business },
  ];

  return (
    <main className="site-shell">
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <p className="text-amber-600 text-sm font-black tracking-widest mb-3">{content.companyPage.badge}</p>
        <h1 className="max-w-5xl text-balance text-4xl font-black leading-[1.08] tracking-[-0.04em] sm:text-6xl">
          {content.companyPage.title}
        </h1>
        <p className="mt-8 max-w-3xl text-base leading-8 text-nktn-ink/68">
          {content.companyPage.lead}
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-24 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Profile Card */}
        <Card className="p-8 transition duration-300 hover:shadow-lg">
          <p className="text-sm font-black tracking-[0.2em] text-amber-600">PROFILE</p>
          <div className="mt-8 divide-y divide-nktn-ink/10">
            {rows.map(({ icon: Icon, label, value }) => (
              <div key={label} className="grid gap-2 py-5 sm:grid-cols-[12rem_1fr] items-start">
                <div className="flex items-center gap-2">
                  <Icon className="size-4 text-nktn-blue/70 shrink-0" />
                  <p className="font-black text-nktn-ink/60 text-sm">{label}</p>
                </div>
                <p className="font-bold leading-7 text-nktn-ink text-sm sm:text-base">{value}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Story Card */}
        <div className="rounded-[2.5rem] bg-white p-8 shadow-soft transition duration-300 hover:shadow-lg ring-1 ring-slate-100">
          <p className="text-sm font-black tracking-[0.2em] text-amber-600">STORY</p>
          <h2 className="mt-6 text-3xl font-black tracking-[-0.04em]">{content.companyPage.storyTitle}</h2>
          <p className="mt-6 leading-8 text-nktn-ink/66">{content.companyPage.storyLead}</p>
          
          <div className="mt-8 space-y-3">
            {content.trustPoints.map((point) => (
              <div key={point} className="flex items-start gap-3 rounded-2xl bg-nktn-cream px-5 py-4 font-bold leading-7 text-nktn-ink/72 transition hover:bg-nktn-cream/80">
                <Badge variant="blue" className="mt-0.5 shrink-0 px-2 py-0">✓</Badge>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <CtaContactBand locale={locale} />
      </section>
    </main>
  );
}

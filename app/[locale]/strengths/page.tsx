import { Network, ShieldCheck, TimerReset, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { type Locale } from "@/lib/i18n";
import { getContent } from "@/lib/site-data-i18n";
import { pageMetadata } from "@/lib/seo";
import { CtaContactBand } from '@/components/home/cta-contact-band';

const icons = [Network, TimerReset, ShieldCheck, Trophy];

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = getContent(locale);
  return pageMetadata(locale, "/strengths", content.strengthsPage.title, content.strengthsPage.lead);
}

export default async function StrengthsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = getContent(locale);

  return (
    <main className="site-shell">
      <section className="mx-5 my-10 rounded-[2.5rem] bg-gradient-to-br from-sky-800 to-sky-900 px-5 py-20 text-white sm:mx-8 sm:px-8 lg:rounded-[4rem] lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-amber-400 text-sm font-black tracking-widest mb-3">{content.strengthsPage.badge}</p>
          <h1 className="max-w-6xl text-balance text-4xl font-black leading-[1.08] tracking-[-0.04em] sm:text-6xl">{content.strengthsPage.title}</h1>
          <p className="mt-8 max-w-3xl text-base leading-8 text-white/72 sm:text-lg">{content.strengthsPage.lead}</p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 mt-10">
        <CtaContactBand locale={locale} />
      </div>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="grid gap-5 lg:grid-cols-4">
          {content.strengths.map((strength, index) => {
            const Icon = icons[index];
            return (
              <Card key={strength.title} className="p-7">
                <Icon className="size-8 text-amber-500" />
                <h2 className="mt-12 text-2xl font-black tracking-[-0.04em]">{strength.title}</h2>
                <p className="mt-5 leading-8 text-nktn-ink/66">{strength.body}</p>
              </Card>
            );
          })}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {(locale === "ja"
            ? [["100%", "報告・連絡・完了管理"], ["ON TIME", "納期逆算の清掃設計"], ["BIG OPS", "DX駆動の現場運営"]]
            : locale === "vi"
            ? [["100%", "Báo cáo / liên lạc / hoàn thành"], ["ON TIME", "Thiết kế dọn dẹp theo thời hạn"], ["BIG OPS", "Vận hành hiện trường bằng DX"]]
            : locale === "zh"
            ? [["100%", "报告 / 联络 / 完成管理"], ["ON TIME", "倒推时间的清洁设计"], ["BIG OPS", "DX驱动的现场运营"]]
            : locale === "id"
            ? [["100%", "Laporan / kontak / penyelesaian"], ["ON TIME", "Desain pembersihan berorientasi tenggat waktu"], ["BIG OPS", "Operasi lapangan bertenaga DX"]]
            : [["100%", "Report / contact / completion management"], ["ON TIME", "Deadline-oriented cleaning design"], ["BIG OPS", "DX-powered field operation"]]
          ).map(([label, body]) => (
            <div key={label} className="rounded-[2rem] bg-white p-7 shadow-soft">
              <p className="text-4xl font-black tracking-[-0.04em] text-sky-800">{label}</p>
              <p className="mt-4 font-bold leading-7 text-nktn-ink/70">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <CtaContactBand locale={locale} />
        </div>
      </section>
    </main>
  );
}

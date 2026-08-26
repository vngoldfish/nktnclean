import Image from "next/image";
import { Network, ShieldCheck, TimerReset, Trophy, Award, CheckCircle2 } from "lucide-react";
import { type Locale } from "@/lib/i18n";
import { getContent } from "@/lib/site-data-i18n";
import { pageMetadata } from "@/lib/seo";
import { PageHeroHeader } from "@/components/ui/page-hero-header";
import { ComparisonTable } from "@/components/ui/comparison-table";
import { FloatingContactVertical } from "@/components/ui/floating-contact-vertical";
import { CtaContactBand } from "@/components/home/cta-contact-band";

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
      {/* Floating Vertical Contact Buttons */}
      <FloatingContactVertical locale={locale} />

      {/* Page Hero Header */}
      <PageHeroHeader
        locale={locale}
        enTitle="WHY CHOOSE US"
        jpTitle={content.strengthsPage.title}
        lead={content.strengthsPage.lead}
        currentPathName={content.strengthsPage.badge}
        bgImage="/works/photo-bathroom.jpg"
      />

      {/* 4 Core Strengths */}
      <section className="py-20 px-5 sm:px-8 bg-[#F6F6F6] border-b border-slate-200/80">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="font-serif-jp text-xs font-black tracking-[0.25em] text-[#00729F] uppercase mb-2">
              CORE ADVANTAGES
            </p>
            <h2 className="font-serif-jp text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              {locale === "ja" ? "NKTNが選ばれる4つの理由" : "4 Pillars of Excellence"}
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-12 bg-[#00729F]" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.strengths.map((strength, index) => {
              const Icon = icons[index] || ShieldCheck;
              return (
                <div
                  key={strength.title}
                  className="rounded-2xl bg-white p-7 border border-slate-200/80 shadow-sm hover:border-[#00729F] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="grid size-12 place-items-center rounded-xl bg-sky-50 text-[#00729F] mb-6">
                      <Icon className="size-6" />
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400 block mb-1">
                      REASON 0{index + 1}
                    </span>
                    <h3 className="font-serif-jp text-lg font-black text-slate-900 leading-snug mb-3">
                      {strength.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {strength.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 3 Operational Metric Stats */}
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {(locale === "ja"
              ? [["100%", "報告・連絡・完了管理", "LINEで全室写真付き即時レポート"], ["ON TIME", "納期逆算の清掃設計", "チェックイン前の確実な仕上げ"], ["BIG OPS", "DX駆動の現場運営", "多国籍専属チームによる安定稼働"]]
              : locale === "vi"
              ? [["100%", "Báo cáo & Hoàn thành", "Gửi ảnh nghiệm thu tức thì qua LINE"], ["ON TIME", "Đúng giờ tuyệt đối", "Hoàn tất trước giờ check-in"], ["BIG OPS", "Vận hành DX", "Đội ngũ chuyên nghiệp đảm bảo công suất"]]
              : [["100%", "Complete Reporting", "Instant photo proof via LINE"], ["ON TIME", "Strict Scheduling", "Flawless turnaround before check-in"], ["BIG OPS", "DX-Driven Operations", "Multinational in-house staff coverage"]]
            ).map(([stat, label, desc]) => (
              <div key={stat} className="rounded-2xl bg-white p-7 border border-slate-200/80 shadow-sm text-center">
                <p className="font-serif-jp text-3xl sm:text-4xl font-black text-[#00729F]">{stat}</p>
                <h4 className="font-serif-jp text-base font-black text-slate-900 mt-2">{label}</h4>
                <p className="text-xs text-slate-500 mt-1">{desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Visual Showcase Strip */}
      <section className="py-0 bg-white">
        <div className="grid grid-cols-2 sm:grid-cols-4">
          {[
            { src: "/works/photo-room.jpg", label: locale === "ja" ? "仕上がり客室" : "Finished Room" },
            { src: "/works/photo-staff.jpg", label: locale === "ja" ? "研修風景" : "Staff Training" },
            { src: "/works/photo-tools.jpg", label: locale === "ja" ? "専用機材" : "Pro Equipment" },
            { src: "/works/photo-bathroom.jpg", label: locale === "ja" ? "輝く水回り" : "Sparkling Bathroom" },
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

      {/* Comparison Table */}
      <ComparisonTable locale={locale} />

      {/* Final CTA */}
      <CtaContactBand locale={locale} variant="dark" />
    </main>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { isLocale, locales, type Locale, withLocale } from "@/lib/i18n";
import { companyBase, getContent } from "@/lib/site-data-i18n";
import { breadcrumbJsonLd, jsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

const landingPages = {
  "osaka-hotel-cleaning": {
    title: "大阪のホテル客室清掃を、写真報告とDXで安定運用。",
    description: "大阪・関西エリアのホテル客室清掃、ベッドメイク、水回り清掃、備品確認、写真報告をNKTN / Bawui Cleaningがサポートします。",
    badge: "Osaka Hotel Cleaning",
    keyword: "ホテル清掃 大阪",
    points: ["ホテル客室清掃とベッドメイク", "清掃後の写真報告", "チェックアウト後の進捗共有", "大阪・関西から全国ネットワーク対応"],
  },
  "minpaku-cleaning-osaka": {
    title: "大阪の民泊清掃・退室後清掃を、LINE報告で見える化。",
    description: "大阪の民泊、Airbnb、短期滞在施設向けに、退室後清掃、備品確認、写真報告、LINEでの完了共有を提供します。",
    badge: "Minpaku Cleaning Osaka",
    keyword: "民泊清掃 大阪",
    points: ["民泊・Airbnbの退室後清掃", "水回り・床・備品のチェック", "写真で清掃後の状態を共有", "継続清掃・スポット清掃に対応"],
  },
  "airbnb-cleaning-osaka": {
    title: "大阪のAirbnb清掃を、次のゲストに間に合う品質で。",
    description: "Airbnb運営者向けに、大阪でのチェックアウト後清掃、写真報告、備品確認、清掃進捗管理をサポートします。",
    badge: "Airbnb Cleaning Osaka",
    keyword: "Airbnb 清掃 大阪",
    points: ["チェックアウト後のスピード清掃", "ゲストレビューを意識した水回り確認", "LINEで完了・写真を共有", "繁忙期の清掃体制づくり"],
  },
  "cleaning-dx-line-chatbot": {
    title: "LINEチャットボットで清掃報告・写真・翻訳・リマインドを自動化。",
    description: "Cleaning DXで客室別LINE報告、P/OUT写真送信、AI翻訳、自動リマインド、日次・月次のミス集計まで一体化します。",
    badge: "Cleaning DX LINE Chatbot",
    keyword: "LINE 清掃 管理 / Cleaning DX",
    points: ["客室別LINE報告", "P/OUT写真の送信と管理", "AIが必要な文だけを翻訳", "未報告・写真不足・遅れを自動リマインド", "日次・月次のミス傾向を自動集計"],
  },
} as const;

type LandingSlug = keyof typeof landingPages;

export function generateStaticParams() {
  return locales.flatMap((locale) => Object.keys(landingPages).map((landing) => ({ locale, landing })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; landing: string }> }) {
  const { locale, landing } = await params;

  if (!isLocale(locale) || !(landing in landingPages)) {
    return {};
  }

  const page = landingPages[landing as LandingSlug];
  return pageMetadata(locale, `/${landing}`, page.title, page.description);
}

export default async function LandingPage({ params }: { params: Promise<{ locale: string; landing: string }> }) {
  const { locale, landing } = await params;

  if (!isLocale(locale) || !(landing in landingPages)) {
    notFound();
  }

  const currentLocale = locale as Locale;
  const page = landingPages[landing as LandingSlug];
  const content = getContent(currentLocale);
  const breadcrumb = breadcrumbJsonLd(currentLocale, [{ name: content.nav[0][0], path: "" }, { name: page.badge, path: `/${landing}` }]);

  return (
    <main className="site-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(serviceJsonLd(currentLocale))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumb)} />
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Badge variant="orange" className="mb-6">{page.badge}</Badge>
        <p className="mb-5 text-sm font-black tracking-[0.2em] text-nktn-blue">{page.keyword}</p>
        <h1 className="max-w-5xl text-balance text-4xl font-black leading-[1.08] tracking-[-0.04em] sm:text-6xl">{page.title}</h1>
        <p className="mt-8 max-w-3xl text-base leading-8 text-nktn-ink/68">{page.description}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild><Link href={companyBase.lineUrl} data-analytics="line_landing_click"><MessageCircle className="size-4" />{content.common.lineConsultLong}</Link></Button>
          <Button variant="secondary" asChild><Link href={withLocale(currentLocale, "/services")}>{content.common.viewServices}<ArrowRight className="size-4" /></Link></Button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          {page.points.map((point) => (
            <Card key={point} className="flex gap-4 p-6">
              <CheckCircle2 className="mt-1 size-6 shrink-0 text-nktn-green" />
              <p className="font-bold leading-7 text-nktn-ink/72">{point}</p>
            </Card>
          ))}
        </div>
        <div className="mt-10 rounded-[2.5rem] bg-nktn-ink p-7 text-white shadow-soft lg:p-10">
          <p className="text-sm font-black tracking-[0.2em] text-nktn-orange">NKTN / Bawui Cleaning</p>
          <h2 className="mt-5 text-3xl font-black tracking-[-0.04em]">清掃品質とLINE報告をまとめて相談できます。</h2>
          <p className="mt-5 max-w-3xl leading-8 text-white/70">部屋数、エリア、チェックアウト時間、現在の報告方法を共有いただければ、現場に合わせた清掃体制とCleaning DXの導線をご提案します。</p>
          <Button className="mt-8 bg-nktn-green hover:bg-[#438b62]" asChild><Link href={companyBase.lineUrl} data-analytics="line_landing_bottom_click">{content.common.lineConsultLong}<ArrowRight className="size-4" /></Link></Button>
        </div>
      </section>
    </main>
  );
}

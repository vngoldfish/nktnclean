import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CtaContactBand } from "@/components/home/cta-contact-band";
import { isLocale, locales, type Locale, withLocale } from "@/lib/i18n";
import { companyBase, getContent } from "@/lib/site-data-i18n";
import { breadcrumbJsonLd, jsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

const landingPagesContent = {
  ja: {
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
  },
  en: {
    "osaka-hotel-cleaning": {
      title: "Stable Osaka Hotel Room Cleaning with Photo Reports and DX.",
      description: "NKTN / Bawui Cleaning supports hotel room cleaning, bed making, water area cleaning, amenity checks, and photo reports in Osaka and the Kansai area.",
      badge: "Osaka Hotel Cleaning",
      keyword: "Hotel Cleaning Osaka",
      points: ["Hotel room cleaning & bed making", "Post-cleaning photo reports", "Post-checkout progress sharing", "Osaka/Kansai to national network support"],
    },
    "minpaku-cleaning-osaka": {
      title: "Visualize Osaka Vacation Rental & Post-Checkout Cleaning via LINE.",
      description: "For vacation rentals, Airbnb, and short-term stay facilities in Osaka, we provide post-checkout cleaning, amenity check, photo report, and completion sharing on LINE.",
      badge: "Vacation Rental Cleaning Osaka",
      keyword: "Vacation Rental Cleaning Osaka",
      points: ["Vacation rental & Airbnb checkout cleaning", "Water area, floor & amenity checks", "Share post-cleaning state with photos", "Support for continuous & spot cleaning"],
    },
    "airbnb-cleaning-osaka": {
      title: "Osaka Airbnb Cleaning with Quality that Meets Next Guest's Expectations.",
      description: "For Airbnb hosts, we support post-checkout cleaning, photo reports, amenity checks, and progress management in Osaka.",
      badge: "Airbnb Cleaning Osaka",
      keyword: "Airbnb Cleaning Osaka",
      points: ["Speedy cleaning after guest checkouts", "Water area checks focusing on guest reviews", "Share completion and photos on LINE", "Cleaning system setup for busy seasons"],
    },
    "cleaning-dx-line-chatbot": {
      title: "Automate Cleaning Reports, Photos, Translation & Reminders on LINE Chatbot.",
      description: "With Cleaning DX, integrate room-by-room LINE reporting, check-out photo transfers, AI translation, auto-reminders, and daily/monthly error calculations.",
      badge: "Cleaning DX LINE Chatbot",
      keyword: "LINE Cleaning Management / Cleaning DX",
      points: ["Room-by-room LINE reporting", "P/OUT photo transmission & management", "AI translation of necessary text only", "Auto-reminders for missing reports/photos/delays", "Auto-summaries of daily & monthly errors"],
    },
  },
  vi: {
    "osaka-hotel-cleaning": {
      title: "Vận hành ổn định vệ sinh phòng khách sạn tại Osaka với báo cáo ảnh và DX.",
      description: "NKTN / Bawui Cleaning hỗ trợ dọn phòng khách sạn, trải giường, dọn dẹp khu vực nước, kiểm tra vật dụng và báo cáo ảnh tại Osaka và khu vực Kansai.",
      badge: "Osaka Hotel Cleaning",
      keyword: "Dọn dẹp khách sạn Osaka",
      points: ["Dọn phòng khách sạn & trải giường", "Báo cáo hình ảnh sau khi dọn dẹp", "Chia sẻ tiến độ sau checkout", "Hỗ trợ từ Osaka/Kansai đến mạng lưới toàn quốc"],
    },
    "minpaku-cleaning-osaka": {
      title: "Minh bạch hóa dọn dẹp minpaku và sau checkout tại Osaka qua báo cáo LINE.",
      description: "Dành cho minpaku, Airbnb và cơ sở lưu trú ngắn hạn tại Osaka, chúng tôi cung cấp dịch vụ dọn dẹp sau checkout, kiểm tra vật dụng, báo cáo ảnh và chia sẻ hoàn thành qua LINE.",
      badge: "Vệ sinh Minpaku Osaka",
      keyword: "Dọn dẹp minpaku Osaka",
      points: ["Dọn dẹp sau checkout minpaku & Airbnb", "Kiểm tra khu vực nước, sàn & vật dụng", "Chia sẻ tình trạng sau dọn qua hình ảnh", "Hỗ trợ dọn dẹp định kỳ & theo yêu cầu"],
    },
    "airbnb-cleaning-osaka": {
      title: "Dọn dẹp Airbnb tại Osaka với chất lượng kịp giờ đón khách tiếp theo.",
      description: "Dành cho chủ vận hành Airbnb, chúng tôi hỗ trợ dọn dẹp sau checkout, báo cáo ảnh, kiểm tra vật dụng và quản lý tiến độ tại Osaka.",
      badge: "Vệ sinh Airbnb Osaka",
      keyword: "Vệ sinh Airbnb Osaka",
      points: ["Dọn dẹp nhanh chóng sau checkout của khách", "Kiểm tra khu vực nước tập trung vào review của khách", "Chia sẻ hoàn thành và hình ảnh qua LINE", "Xây dựng hệ thống dọn dẹp cho mùa cao điểm"],
    },
    "cleaning-dx-line-chatbot": {
      title: "Tự động hóa báo cáo vệ sinh, ảnh, dịch thuật & nhắc nhở bằng LINE Chatbot.",
      description: "Với giải pháp Cleaning DX, tích hợp báo cáo LINE theo phòng, gửi ảnh checkout, dịch thuật AI, tự động nhắc nhở và thống kê lỗi hàng ngày/hàng tháng.",
      badge: "Cleaning DX LINE Chatbot",
      keyword: "Quản lý vệ sinh qua LINE / Cleaning DX",
      points: ["Báo cáo LINE theo từng phòng", "Gửi và quản lý ảnh check-out (P/OUT)", "AI tự động dịch chỉ những tin nhắn cần thiết", "Tự động nhắc nhở khi thiếu báo cáo, thiếu ảnh hoặc trễ giờ", "Tự động thống kê xu hướng lỗi theo ngày & theo tháng"],
    },
  },
  zh: {
    "osaka-hotel-cleaning": {
      title: "通过照片报告和DX，稳定运营大阪酒店客房清洁。",
      description: "NKTN / Bawui Cleaning 提供大阪及关西地区的酒店客房清洁、铺床、水洗、备品确认和照片报告服务。",
      badge: "Osaka Hotel Cleaning",
      keyword: "酒店清洁 大阪",
      points: ["酒店客房清洁与铺床", "清洁后照片报告", "退房后进度共享", "大阪/关西至日本全国网络对应"],
    },
    "minpaku-cleaning-osaka": {
      title: "通过LINE报告，让大阪民宿及退房清洁可视化。",
      description: "为大阪的民宿、Airbnb和短期住宿设施提供退房后清洁、备品确认、照片报告以及通过LINE共享完成状态的服务。",
      badge: "Vacation Rental Cleaning Osaka",
      keyword: "民宿清洁 大阪",
      points: ["民宿・Airbnb退房后清洁", "水洗、地面及备品检查", "通过照片共享清洁后状态", "支持定期清洁与单次清洁"],
    },
    "airbnb-cleaning-osaka": {
      title: "大阪Airbnb清洁，以赶上下一位客人的品质交付。",
      description: "针对Airbnb运营者，提供大阪境内的退房后清洁、照片报告、备品确认和清洁进度管理支持。",
      badge: "Airbnb Cleaning Osaka",
      keyword: "Airbnb清洁 大阪",
      points: ["退房后的快速清洁", "注重顾客评价的水洗确认", "通过LINE共享完成与照片", "旺季清洁体制建设"],
    },
    "cleaning-dx-line-chatbot": {
      title: "通过LINE聊天机器人，自动完成清洁报告、照片、翻译和提醒。",
      description: "通过Cleaning DX，将分房LINE报告、P/OUT照片发送、AI翻译、自动提醒以及每日/每月错误统计融为一体。",
      badge: "Cleaning DX LINE Chatbot",
      keyword: "LINE清洁管理 / Cleaning DX",
      points: ["按房间进行LINE报告", "P/OUT照片发送与管理", "AI仅翻译必要的文本内容", "未报告・照片不足・延迟自动提醒", "日次・月次错误倾向自动统计"],
    },
  },
  id: {
    "osaka-hotel-cleaning": {
      title: "Operasi Stabil Pembersihan Kamar Hotel Osaka dengan Laporan Foto dan DX.",
      description: "NKTN / Bawui Cleaning mendukung pembersihan kamar hotel, penataan tempat tidur, pembersihan area air, pemeriksaan fasilitas, dan laporan foto di Osaka dan area Kansai.",
      badge: "Osaka Hotel Cleaning",
      keyword: "Pembersihan Hotel Osaka",
      points: ["Pembersihan kamar hotel & penataan tempat tidur", "Laporan foto setelah pembersihan", "Pembagian kemajuan setelah check-out", "Dukungan jaringan dari Osaka/Kansai hingga seluruh Jepang"],
    },
    "minpaku-cleaning-osaka": {
      title: "Visualisasikan Pembersihan Akomodasi Liburan & Check-out Osaka melalui LINE.",
      description: "Untuk akomodasi liburan, Airbnb, dan fasilitas masa inap jangka pendek di Osaka, kami menyediakan pembersihan setelah check-out, pemeriksaan fasilitas, laporan foto, dan pembagian penyelesaian di LINE.",
      badge: "Pembersihan Akomodasi Liburan Osaka",
      keyword: "Pembersihan Akomodasi Liburan Osaka",
      points: ["Pembersihan check-out akomodasi liburan & Airbnb", "Pemeriksaan area air, lantai & fasilitas", "Bagikan kondisi setelah dibersihkan dengan foto", "Dukungan untuk pembersihan berkelanjutan & satu kali"],
    },
    "airbnb-cleaning-osaka": {
      title: "Pembersihan Airbnb Osaka dengan Kualitas yang Memenuhi Harapan Tamu Berikutnya.",
      description: "Untuk operator Airbnb di Osaka, kami mendukung pembersihan setelah check-out, laporan foto, pemeriksaan fasilitas, dan manajemen kemajuan.",
      badge: "Pembersihan Airbnb Osaka",
      keyword: "Pembersihan Airbnb Osaka",
      points: ["Pembersihan cepat setelah check-out tamu", "Pemeriksaan area air dengan fokus pada ulasan tamu", "Bagikan penyelesaian dan foto di LINE", "Pengaturan sistem pembersihan untuk musim sibuk"],
    },
    "cleaning-dx-line-chatbot": {
      title: "Otomatiskan Laporan Pembersihan, Foto, Terjemahan & Pengingat di LINE Chatbot.",
      description: "Dengan Cleaning DX, integrasikan pelaporan LINE per kamar, pengiriman foto P/OUT, terjemahan AI, pengingat otomatis, dan rekap kesalahan harian/bulanan.",
      badge: "Cleaning DX LINE Chatbot",
      keyword: "Manajemen Pembersihan LINE / Cleaning DX",
      points: ["Pelaporan LINE per kamar", "Pengiriman & pengelolaan foto P/OUT", "Terjemahan AI hanya untuk teks yang diperlukan", "Pengingat otomatis untuk laporan/foto yang kurang atau keterlambatan", "Rekap otomatis tren kesalahan harian & bulanan"],
    },
  },
} as const;

type LandingSlug = keyof (typeof landingPagesContent)["ja"];

const bottomCardContent = {
  ja: {
    subtitle: "NKTN / Bawui Cleaning",
    title: "清掃品質とLINE報告をまとめて相談できます。",
    desc: "部屋数、エリア、チェックアウト時間、現在の報告方法を共有いただければ、現場に合わせた清掃体制とCleaning DXの導線をご提案します。",
  },
  en: {
    subtitle: "NKTN / Bawui Cleaning",
    title: "Discuss cleaning quality and LINE reporting together.",
    desc: "Share your room count, area, checkout times, and current reporting methods, and we will propose a cleaning system and Cleaning DX flow tailored to your site.",
  },
  vi: {
    subtitle: "NKTN / Bawui Cleaning",
    title: "Tư vấn trọn gói chất lượng vệ sinh và báo cáo qua LINE.",
    desc: "Hãy chia sẻ số lượng phòng, khu vực, thời gian checkout và phương thức báo cáo hiện tại của bạn, chúng tôi sẽ đề xuất quy trình vệ sinh và luồng Cleaning DX phù hợp nhất với hiện trường.",
  },
  zh: {
    subtitle: "NKTN / Bawui Cleaning",
    title: "清洁质量与LINE报告一站式咨询。",
    desc: "只要共享房间数、地区、退房时间及现有报告方式，我们就会为您提供适合现场的清洁体制及Cleaning DX流程。",
  },
  id: {
    subtitle: "NKTN / Bawui Cleaning",
    title: "Diskusikan kualitas pembersihan dan pelaporan LINE bersama.",
    desc: "Bagikan jumlah kamar Anda, area, waktu check-out, dan metode pelaporan saat ini, dan kami akan mengusulkan sistem pembersihan dan aliran Cleaning DX yang disesuaikan dengan situs Anda.",
  },
} as const;

function getLandingPage(locale: Locale, landing: LandingSlug) {
  const translations = landingPagesContent[locale as keyof typeof landingPagesContent] || landingPagesContent.en;
  return translations[landing] || landingPagesContent.en[landing];
}

function getBottomCardContent(locale: Locale) {
  return bottomCardContent[locale as keyof typeof bottomCardContent] || bottomCardContent.en;
}

export function generateStaticParams() {
  return locales.flatMap((locale) => Object.keys(landingPagesContent.ja).map((landing) => ({ locale, landing })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; landing: string }> }) {
  const { locale, landing } = await params;

  if (!isLocale(locale) || !(landing in landingPagesContent.ja)) {
    return {};
  }

  const page = getLandingPage(locale as Locale, landing as LandingSlug);
  return pageMetadata(locale as Locale, `/${landing}`, page.title, page.description);
}

export default async function LandingPage({ params }: { params: Promise<{ locale: string; landing: string }> }) {
  const { locale, landing } = await params;

  if (!isLocale(locale) || !(landing in landingPagesContent.ja)) {
    notFound();
  }

  const currentLocale = locale as Locale;
  const page = getLandingPage(currentLocale, landing as LandingSlug);
  const content = getContent(currentLocale);
  const bottomCard = getBottomCardContent(currentLocale);
  const breadcrumb = breadcrumbJsonLd(currentLocale, [{ name: content.nav[0][0], path: "" }, { name: page.badge, path: `/${landing}` }]);

  return (
    <main className="site-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(serviceJsonLd(currentLocale))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumb)} />
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Badge variant="orange" className="mb-6">{page.badge}</Badge>
        <p className="mb-5 text-sm font-black tracking-[0.2em] text-sky-800">{page.keyword}</p>
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
              <CheckCircle2 className="mt-1 size-6 shrink-0 text-sky-800" />
              <p className="font-bold leading-7 text-nktn-ink/72">{point}</p>
            </Card>
          ))}
        </div>
        <div className="mt-10 rounded-[2.5rem] bg-gradient-to-br from-sky-800 to-sky-900 p-7 text-white shadow-soft lg:p-10">
          <p className="text-sm font-black tracking-[0.2em] text-amber-400">{bottomCard.subtitle}</p>
          <h2 className="mt-5 text-3xl font-black tracking-[-0.04em]">{bottomCard.title}</h2>
          <p className="mt-5 max-w-3xl leading-8 text-white/70">{bottomCard.desc}</p>
          <Button className="mt-8 bg-[#06C755] hover:bg-[#05b04c] text-white" asChild><Link href={companyBase.lineUrl} data-analytics="line_landing_bottom_click">{content.common.lineConsultLong}<ArrowRight className="size-4" /></Link></Button>
        </div>
      </section>

      <CtaContactBand locale={currentLocale} />
    </main>
  );
}

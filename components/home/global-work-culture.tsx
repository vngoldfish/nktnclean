import React from "react";
import Link from "next/link";
import { Globe2, Award, UserCheck, GraduationCap, CheckCircle2, ArrowRight } from "lucide-react";
import { type Locale, withLocale } from "@/lib/i18n";
import { companyBase } from "@/lib/site-data-i18n";

interface GlobalWorkCultureProps {
  locale: Locale;
}

export function GlobalWorkCulture({ locale }: GlobalWorkCultureProps) {
  const points = [
    {
      icon: Globe2,
      title: locale === "ja" ? "国籍問わず活躍できる組織風土" : locale === "vi" ? "Môi trường Đa quốc gia Bình đẳng" : "Multinational Diversity",
      desc: locale === "ja" ? "日本・ベトナムなど多国籍スタッフが在籍し、多様性と個性を尊重する企業文化を大切にしています。" : "Empowering diverse talents from Japan, Vietnam, and global backgrounds.",
    },
    {
      icon: GraduationCap,
      title: locale === "ja" ? "徹底したホテル水準の社内研修" : locale === "vi" ? "Đào tạo Tiêu chuẩn Khách sạn Khắt khe" : "Hotel-Grade In-House Training",
      desc: locale === "ja" ? "ベッドメイキング・水回り除菌・マナーを専任トレーナーが直接指導し、高い品質を担保。" : "Standardized room protocols and guest etiquette certified by senior supervisors.",
    },
    {
      icon: Award,
      title: locale === "ja" ? "現場スタッフから管理職への登用" : locale === "vi" ? "Lộ trình Thăng tiến Rõ ràng" : "Career Path to Management",
      desc: locale === "ja" ? "清掃員からエリアマネージャー・点検責任者（インスペクター）へのキャリアアップ実績多数。" : "Clear advancement from room attendants to area managers and quality inspectors.",
    },
    {
      icon: UserCheck,
      title: locale === "ja" ? "多言語コミュニケーション体制" : locale === "vi" ? "Hỗ trợ 4 Ngôn ngữ Trơn tru" : "4-Language Operational Fluency",
      desc: locale === "ja" ? "日本語・英語・ベトナム語・中国語でオーナー様とも現場スタッフとも円滑に意思疎通。" : "Seamless communication with global property owners in Japanese, English, Vietnamese & Chinese.",
    },
  ];

  return (
    <section className="py-20 px-5 sm:px-8 bg-slate-50/60 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 px-4 py-1.5 text-xs font-black tracking-widest text-emerald-800 uppercase mb-4">
            <Award className="size-3.5 text-emerald-600" />
            WORKFORCE & HOSPITALITY
          </span>
          <h2 className="font-serif-jp text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {locale === "ja" ? "国籍問わず活躍できる現場力と組織体制" : locale === "vi" ? "Đội Ngũ Nhân Lực Toàn Cầu & Chuẩn Mực Vận Hành" : "Multinational Workforce & Operating Excellence"}
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            {locale === "ja"
              ? "他社が模倣できない体系的な人材育成と現場マネジメント力で、安定した清掃品質をお約束します。"
              : "Systematic talent development and rigorous on-site management guaranteeing consistent 5-star cleanliness."}
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-white p-7 border border-slate-200/80 shadow-soft hover:shadow-elevated hover:border-[#00729F]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="grid size-12 place-items-center rounded-2xl bg-[#00729F]/10 text-[#00729F] mb-6">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="font-serif-jp text-lg font-black text-slate-900 mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Japanese Partner Box */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-[#00466D] via-[#00729F] to-[#00466D] p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-elevated">
          <div className="text-center md:text-left">
            <span className="text-xs font-black tracking-widest text-[#19BAD7] uppercase block mb-1">
              PARTNER & RECRUIT
            </span>
            <h3 className="font-serif-jp text-xl sm:text-2xl font-black">
              {locale === "ja" ? "清掃パートナー・協力会社様 & 採用応募を随時受付中" : "Partner Inquiries & Career Applications"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 mt-2">
              {locale === "ja" 
                ? "大阪・関西エリアで共に高品質な宿泊施設運営を支える仲間を募集しております。" 
                : "Join our expanding hospitality operations network across Osaka and the Kansai region."}
            </p>
          </div>

          <div className="flex gap-3 shrink-0">
            <Link
              href={withLocale(locale, "/contact")}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs sm:text-sm font-black text-[#00466D] hover:bg-slate-100 transition shadow-md"
            >
              <span>{locale === "ja" ? "お問い合わせ・ご応募" : "Contact Us"}</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

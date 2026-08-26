"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, BedDouble, Building, Smartphone, Users } from "lucide-react";
import { type Locale, withLocale } from "@/lib/i18n";
import { companyBase } from "@/lib/site-data-i18n";

interface SuperServiceShowcaseProps {
  locale: Locale;
}

export function SuperServiceShowcase({ locale }: SuperServiceShowcaseProps) {
  const [hoveredIdx, setHoveredIdx] = useState(0);

  const services = [
    {
      id: "bed-making",
      enTitle: "Bed making",
      jpTitle: locale === "ja" ? "ベッドメイキング・日常清掃" : locale === "vi" ? "Bọc nệm Ga gối & Vệ sinh Hàng ngày" : "Bed Making & Daily Turnover",
      desc: locale === "ja" 
        ? "おもてなしの心をモットーに、民泊・ホテルのルームクリーンサービスをご提供。シワのないシーツ張りからアメニティ補充まで徹底管理します。" 
        : locale === "vi" 
        ? "Lấy sự chu đáo làm kim chỉ nam, cung cấp dịch vụ dọn phòng khách sạn và Airbnb. Từ bọc nệm phẳng phiu đến kiểm kê đồ dùng." 
        : "Hotel-grade room turnovers from crisp bed making to amenity restocking, safeguarding 5-star reviews.",
      image: "/works/photo-room.jpg",
      icon: BedDouble,
    },
    {
      id: "building-maintenance",
      enTitle: "Building maintenance",
      jpTitle: locale === "ja" ? "原状回復・定期美装・退去清掃" : locale === "vi" ? "Hoàn trả Hiện trạng & Bảo trì Định kỳ" : "Restoration & Periodic Cleaning",
      desc: locale === "ja"
        ? "エアコン内部高圧洗浄、換気扇油汚れ分解、床ワックスがけなど。建物の美観と安全な衛生環境を長期的に維持します。"
        : locale === "vi"
        ? "Xịt rửa điều hòa áp lực cao, tẩy dầu mỡ máy hút mùi, đánh bóng sàn gỗ. Giữ gìn giá trị tài sản dài lâu."
        : "Deep restorative turnover including HVAC pressure cleaning, kitchen grease extraction, and floor waxing.",
      image: "/works/photo-staff.jpg",
      icon: Building,
    },
    {
      id: "dx-operations",
      enTitle: "Smart DX Operations",
      jpTitle: locale === "ja" ? "LINEリアルタイム写真報告・管理" : locale === "vi" ? "Báo cáo Ảnh chụp Tức thì qua LINE" : "Real-Time Photo DX Tracking",
      desc: locale === "ja"
        ? "清掃完了後すぐにLINEで全箇所写真と消耗品残量を送信。遠隔地のオーナー様でも現地の状況を即座に確認できます。"
        : locale === "vi"
        ? "Gửi báo cáo ảnh chụp chi tiết từng ngóc ngách và lượng đồ tiêu hao qua LINE ngay khi hoàn tất."
        : "Automated instant photo delivery and amenity inventory alerts via LINE for seamless remote property oversight.",
      image: "/works/photo-room.jpg",
      icon: Smartphone,
    },
    {
      id: "global-staffing",
      enTitle: "Global Hospitality Team",
      jpTitle: locale === "ja" ? "多言語対応・専属スタッフ体制" : locale === "vi" ? "Đội ngũ Chuyên nghiệp Đa ngôn ngữ" : "Multilingual Hospitality Team",
      desc: locale === "ja"
        ? "日本語・英語・ベトナム語・中国語での円滑な連携。ホテル水準の厳しい研修をクリアしたスタッフのみが現場を担当します。"
        : locale === "vi"
        ? "Phục vụ 4 thứ tiếng Nhật, Anh, Việt, Trung. Đội ngũ nhân viên chính thức được huấn luyện chuẩn mực."
        : "Fluent Japanese, English, Vietnamese, and Chinese coordination by certified in-house cleaning specialists.",
      image: "/works/photo-staff.jpg",
      icon: Users,
    },
  ];

  return (
    <section className="py-20 px-5 sm:px-8 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header (SuperHotelClean signature style) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#19BAD7]/20 border border-[#19BAD7]/30 px-4 py-1.5 text-xs font-black tracking-widest text-[#19BAD7] uppercase mb-4">
            <Sparkles className="size-3.5" />
            SERVICE
          </span>
          <h2 className="font-serif-jp text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            {locale === "ja" ? "事業内容" : locale === "vi" ? "Dịch Vụ Cung Cấp" : "Our Core Services"}
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            {locale === "ja"
              ? "ホテル・民泊のルームクリーンから、ビルメンテナンス、DX管理、専属スタッフ育成まで包括的にサポートいたします。"
              : "Comprehensive hospitality cleaning, periodic building maintenance, DX automation, and staff management."}
          </p>
        </div>

        {/* Interactive Split Service Grid */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          
          {/* Left Service Cards List */}
          <div className="lg:col-span-7 space-y-4">
            {services.map((item, idx) => {
              const isHovered = hoveredIdx === idx;
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isHovered
                      ? "bg-white/10 border-[#19BAD7] shadow-[0_0_20px_rgba(25,186,215,0.2)] translate-x-2"
                      : "bg-white/5 border-white/10 hover:bg-white/8"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`grid size-12 place-items-center rounded-xl shrink-0 transition-colors ${
                      isHovered ? "bg-[#19BAD7] text-slate-950 font-black" : "bg-white/10 text-slate-300"
                    }`}>
                      <Icon className="size-6" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-serif-jp text-xs font-black tracking-[0.2em] text-[#19BAD7] uppercase">
                          {item.enTitle}
                        </span>
                        <span className="text-xs font-mono text-slate-400">0{idx + 1}</span>
                      </div>
                      <h3 className="font-serif-jp text-lg sm:text-xl font-black text-white leading-snug">
                        {item.jpTitle}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-slate-300/85 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Synchronized Image Preview Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-elevated border border-white/20">
              <Image
                src={services[hoveredIdx].image}
                alt={services[hoveredIdx].jpTitle}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-black tracking-widest text-[#19BAD7] uppercase block mb-1">
                  {services[hoveredIdx].enTitle}
                </span>
                <h4 className="font-serif-jp text-xl font-black">
                  {services[hoveredIdx].jpTitle}
                </h4>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom View All Services Button */}
        <div className="mt-12 text-center">
          <Link
            href={withLocale(locale, "/services")}
            className="inline-flex items-center gap-2 rounded-xl bg-[#00729F] hover:bg-[#00466D] px-8 py-4 text-sm font-black text-white shadow-soft transition duration-200"
          >
            <span>{locale === "ja" ? "事業内容・サービス一覧を見る" : "View All Services"}</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

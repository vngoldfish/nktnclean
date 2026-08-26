import React from "react";
import Image from "next/image";
import { Wrench } from "lucide-react";
import { type Locale } from "@/lib/i18n";

interface PartnerEquipmentBandProps {
  locale: Locale;
}

export function PartnerEquipmentBand({ locale }: PartnerEquipmentBandProps) {
  const brands = [
    {
      name: "ケルヒャージャパン",
      role: locale === "ja" ? "高圧洗浄機・プロ用スチーム" : locale === "vi" ? "Máy xịt rửa áp lực cao & hơi nước" : "High-Pressure Steam & Washers",
    },
    {
      name: "シーバイエス株式会社",
      role: locale === "ja" ? "ホテル専用業務用洗剤・ワックス" : locale === "vi" ? "Hóa chất & sáp chuyên dụng khách sạn" : "Hotel Specialized Detergents & Wax",
    },
    {
      name: "株式会社テラモト",
      role: locale === "ja" ? "環境美化・清掃用品システム" : locale === "vi" ? "Hệ thống dụng cụ vệ sinh môi trường" : "Environmental Cleaning Systems",
    },
    {
      name: "株式会社リンレイ",
      role: locale === "ja" ? "フロアメンテナンス・保護剤" : locale === "vi" ? "Bảo trì & hóa chất phủ bóng sàn" : "Floor Care & Coating Chemicals",
    },
    {
      name: "蔵王産業株式会社",
      role: locale === "ja" ? "産業用バキューム・洗浄機器" : locale === "vi" ? "Máy hút bụi & máy giặt thảm công nghiệp" : "Industrial Vacuum & Carpet Cleaners",
    },
  ];

  const photoStrip = [
    {
      src: "/works/photo-tools.jpg",
      caption: locale === "ja" ? "プロ仕様の清掃機材" : locale === "vi" ? "Thiết bị vệ sinh chuyên nghiệp" : "Professional Equipment",
    },
    {
      src: "/works/photo-bathroom.jpg",
      caption: locale === "ja" ? "輝く仕上がり" : locale === "vi" ? "Kết quả sáng bóng" : "Sparkling Results",
    },
    {
      src: "/works/photo-room.jpg",
      caption: locale === "ja" ? "完成された客室" : locale === "vi" ? "Phòng hoàn thiện" : "Finished Room",
    },
  ];

  return (
    <section
      id="partner-equipment-section"
      className="section-partner-equipment py-14 px-5 sm:px-8 bg-white border-b border-slate-200/80"
    >
      <div className="equipment-container mx-auto max-w-7xl">

        {/* 1. Photo Strip */}
        <div id="equipment-photo-strip" className="equipment-photo-strip grid grid-cols-3 gap-2 sm:gap-4 mb-10">
          {photoStrip.map((photo, idx) => (
            <div
              key={photo.src}
              id={`equipment-photo-${idx + 1}`}
              className="equipment-photo-card relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm group"
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                className="equipment-photo-image object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 33vw, 350px"
              />
              <div className="equipment-photo-overlay absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/15 to-transparent" />
              <span className="equipment-photo-caption absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 text-[10px] sm:text-xs font-black text-white drop-shadow-sm line-clamp-1">
                {photo.caption}
              </span>
            </div>
          ))}
        </div>

        {/* 2. Brand Section Header */}
        <div id="equipment-brands-header" className="equipment-brands-header text-center max-w-2xl mx-auto mb-8">
          <span className="equipment-badge inline-flex items-center gap-1.5 rounded-full bg-slate-100 border border-slate-200 px-3.5 py-1 text-[11px] font-black tracking-widest text-slate-700 uppercase mb-2">
            <Wrench className="size-3 text-slate-500" />
            PROFESSIONAL EQUIPMENT &amp; CHEMICALS
          </span>
          <h3 className="equipment-title font-serif-jp text-xl sm:text-2xl font-black text-slate-900">
            {locale === "ja" ? "プロ仕様の専用機材・環境美化商品を使用" : locale === "vi" ? "Thiết Bị & Hóa Chất Chuyên Dụng Chuẩn Nhật" : "Professional-Grade Equipment & Sanitizers"}
          </h3>
          <p className="equipment-lead text-xs text-slate-500 mt-1">
            {locale === "ja" 
              ? "客室素材を傷めず、頑固な油汚れ・水垢・皮脂汚れを根こそぎ落とす高品質な業務用資材を採用しています。" 
              : locale === "vi"
              ? "Sử dụng hóa chất và máy móc chuyên dụng cao cấp từ các thương hiệu hàng đầu Nhật Bản, bảo vệ tối đa bề mặt nội thất."
              : "Utilizing top-tier industrial detergents and equipment to ensure damage-free deep sanitation."}
          </p>
        </div>

        {/* 3. Brand Badges Grid */}
        <div id="equipment-brands-grid" className="equipment-brands-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
          {brands.map((item, idx) => (
            <div
              key={item.name}
              id={`equipment-brand-${idx + 1}`}
              className="brand-card rounded-2xl bg-slate-50/80 p-3 sm:p-4 border border-slate-200/70 text-center hover:bg-white hover:border-[#00729F]/40 transition-all duration-200"
            >
              <p className="brand-name text-xs sm:text-sm font-black text-slate-800">{item.name}</p>
              <p className="brand-role text-[10px] text-slate-500 mt-0.5 leading-snug">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

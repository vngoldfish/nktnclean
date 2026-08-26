import React from "react";
import Image from "next/image";
import { Wrench, Sparkles, ShieldCheck } from "lucide-react";
import { type Locale } from "@/lib/i18n";

interface PartnerEquipmentBandProps {
  locale: Locale;
}

export function PartnerEquipmentBand({ locale }: PartnerEquipmentBandProps) {
  const brands = [
    { name: "ケルヒャージャパン", role: "高圧洗浄機・プロ用スチーム" },
    { name: "シーバイエス株式会社", role: "ホテル専用業務用洗剤・ワックス" },
    { name: "株式会社テラモト", role: "環境美化・清掃用品システム" },
    { name: "株式会社リンレイ", role: "フロアメンテナンス・保護剤" },
    { name: "蔵王産業株式会社", role: "産業用バキューム・洗浄機器" },
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
    <section className="py-14 px-5 sm:px-8 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl">

        {/* Photo Strip */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-10">
          {photoStrip.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm group"
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 33vw, 350px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
              <span className="absolute bottom-3 left-3 right-3 text-[11px] sm:text-xs font-black text-white drop-shadow-sm">
                {photo.caption}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 border border-slate-200 px-3.5 py-1 text-[11px] font-black tracking-widest text-slate-700 uppercase mb-2">
            <Wrench className="size-3 text-slate-500" />
            PROFESSIONAL EQUIPMENT &amp; CHEMICALS
          </span>
          <h3 className="font-serif-jp text-xl sm:text-2xl font-black text-slate-900">
            {locale === "ja" ? "プロ仕様の専用機材・環境美化商品を使用" : "Professional-Grade Equipment & Sanitizers"}
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            {locale === "ja" 
              ? "客室素材を傷めず、頑固な油汚れ・水垢・皮脂汚れを根こそぎ落とす高品質な業務用資材を採用しています。" 
              : "Utilizing top-tier industrial detergents and equipment to ensure damage-free deep sanitation."}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {brands.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl bg-slate-50/80 p-4 border border-slate-200/70 text-center hover:bg-white hover:border-[#00729F]/40 transition-all duration-200"
            >
              <p className="text-xs sm:text-sm font-black text-slate-800">{item.name}</p>
              <p className="text-[10px] text-slate-500 mt-0.5">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

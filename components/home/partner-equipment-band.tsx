import React from "react";
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

  return (
    <section className="py-14 px-5 sm:px-8 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 border border-slate-200 px-3.5 py-1 text-[11px] font-black tracking-widest text-slate-700 uppercase mb-2">
            <Wrench className="size-3 text-slate-500" />
            PROFESSIONAL EQUIPMENT & CHEMICALS
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

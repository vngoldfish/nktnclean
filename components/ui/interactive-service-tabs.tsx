"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Hotel, Home, Sparkles, CheckCircle2, ArrowRight, Clock3, ShieldAlert, FileSpreadsheet, MessageCircle } from "lucide-react";
import { type Locale, withLocale } from "@/lib/i18n";
import { companyBase } from "@/lib/site-data-i18n";

interface InteractiveServiceTabsProps {
  locale: Locale;
}

export function InteractiveServiceTabs({ locale }: InteractiveServiceTabsProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs = [
    {
      id: "minpaku",
      label: locale === "ja" ? "民泊・Airbnb清掃" : locale === "vi" ? "Vệ sinh Minpaku / Airbnb" : "Minpaku / Airbnb Cleaning",
      icon: Home,
      tag: locale === "ja" ? "人気No.1" : locale === "vi" ? "Phổ biến nhất" : "Most Popular",
      title: locale === "ja" ? "民泊・バケーションレンタル専門清掃" : locale === "vi" ? "Chuyên nghiệp cho Nhà nghỉ Minpaku & Airbnb" : "Vacation Rental & Minpaku Turnover",
      description: locale === "ja"
        ? "チェックアウトからチェックインまでの限られた時間で、ホテルのような清潔空間へ復元。ゲストの高評価レビューとスーパーホスト維持を徹底支援します。"
        : locale === "vi"
        ? "Phục hồi không gian sạch sẽ chuẩn khách sạn trong khoảng thời gian eo hẹp giữa giờ checkout và checkin. Giúp duy trì đánh giá 5 sao và danh hiệu Superhost."
        : "Complete turnover from checkout to check-in. Restores hotel-grade cleanliness within tight turnaround windows, safeguarding 5-star reviews and Superhost status.",
      image: "/works/photo-room.jpg",
      highlights: [
        locale === "ja" ? "リネン交換・ベッドメイキング・シワなし仕上げ" : locale === "vi" ? "Thay ga gối, bọc nệm chuẩn nếp không nhăn" : "Linen replacement & hotel-crisp bed making",
        locale === "ja" ? "水回り（風呂・トイレ・キッチン）の徹底除菌磨き上げ" : locale === "vi" ? "Khử trùng và đánh bóng nhà tắm, bồn cầu, bếp" : "Deep sanitization of bathrooms, toilets & kitchen",
        locale === "ja" ? "アメニティ・消耗品（シャンプー・トイレットペーパー等）の補充・残量確認" : locale === "vi" ? "Kiểm kê và châm đầy đồ dùng tiêu hao (dầu gội, giấy vệ sinh)" : "Restocking & replenishment of all guest amenities",
        locale === "ja" ? "ゴミ回収・分別・専用ゴミステーション出し" : locale === "vi" ? "Thu gom, phân loại và xử lý rác đúng quy định" : "Trash sorting, collection & disposal compliance",
        locale === "ja" ? "忘れ物・備品破損のリアルタイム写真付きLINE報告" : locale === "vi" ? "Báo cáo thất lạc & hư hại kèm ảnh chụp ngay qua LINE" : "Instant LINE photo alerts for lost items or damage",
      ],
      badgeText: locale === "ja" ? "最短即日対応・全室写真報告" : "Same-day rush / Full photo report",
    },
    {
      id: "hotel",
      label: locale === "ja" ? "ホテル客室清掃" : locale === "vi" ? "Vệ sinh Khách sạn & Căn hộ" : "Hotel & Aparthotel Cleaning",
      icon: Hotel,
      tag: locale === "ja" ? "法人・施設向け" : locale === "vi" ? "Dành cho Khách sạn" : "For Hospitality",
      title: locale === "ja" ? "ホテル・無人ホテル・レジデンス客室清掃" : locale === "vi" ? "Vệ sinh Buồng phòng Khách sạn & Tòa nhà Căn hộ" : "Hotel & Smart Aparthotel Operations",
      description: locale === "ja"
        ? "小規模ホテルから無人スマートホテル、サービスアパートメントまで。施設の運営体制やフロア構成に合わせた柔軟なシフトと統一された清掃マニュアルで安定稼働を実現します。"
        : locale === "vi"
        ? "Phục vụ khách sạn mini, khách sạn thông minh không người vận hành, và căn hộ dịch vụ. Xây dựng quy trình riêng theo từng tầng và cơ sở."
        : "Customized staffing and standardized operating procedures for boutique hotels, smart unstaffed hotels, and serviced residences.",
      image: "/works/photo-staff.jpg",
      highlights: [
        locale === "ja" ? "客室稼働数に応じた柔軟な人員シフト編成" : locale === "vi" ? "Điều phối nhân sự linh hoạt theo công suất phòng" : "Dynamic staffing scaled to daily occupancy rates",
        locale === "ja" ? "インスペクター（点検責任者）による二重チェック体制" : locale === "vi" ? "Quy trình kiểm tra chéo 2 lớp bởi quản lý buồng phòng" : "Dual-level inspection by certified room supervisors",
        locale === "ja" ? "共用部（エントランス・廊下・エレベーター）の定期巡回清掃" : locale === "vi" ? "Vệ sinh định kỳ khu vực công cộng (sảnh, hành lang, thang máy)" : "Routine maintenance for lobbies, hallways & elevators",
        locale === "ja" ? "長期パートナーシップ契約による安定コスト最適化" : locale === "vi" ? "Ký kết hợp đồng đối tác dài hạn với chi phí tối ưu" : "Long-term partnership with predictable cost structures",
      ],
      badgeText: locale === "ja" ? "インスペクター巡回・品質二重検査" : "Inspector audited / Dual quality check",
    },
    {
      id: "restoration",
      label: locale === "ja" ? "原状回復・退去清掃" : locale === "vi" ? "Vệ sinh Hoàn trả & Trả phòng" : "Move-Out & Restoration Cleaning",
      icon: Sparkles,
      tag: locale === "ja" ? "不動産・管理会社様" : locale === "vi" ? "Bất động sản & Quản lý" : "Real Estate & PMs",
      title: locale === "ja" ? "賃貸退去後・入居前の徹底ディープクリーニング" : locale === "vi" ? "Tổng vệ sinh hoàn trả hiện trạng sau khi trả phòng / trước nhận nhà" : "Deep Restoration & Turnover for Move-Outs",
      description: locale === "ja"
        ? "退去後のエアコン高圧洗浄、換気扇・油汚れの分解洗浄、床ワックスがけまで。次の入居者が気持ちよく住める状態へ完璧に仕上げます。"
        : locale === "vi"
        ? "Vệ sinh chuyên sâu: xịt rửa điều hòa áp lực cao, tẩy dầu mỡ máy hút mùi, đánh bóng sàn. Đảm bảo căn hộ sẵn sàng bàn giao cho người thuê mới."
        : "Comprehensive deep turnover including HVAC pressure wash, kitchen grease breakdown, and floor wax re-coating for instant re-leasing.",
      image: "/works/photo-room.jpg",
      highlights: [
        locale === "ja" ? "エアコン内部高圧洗浄・カビ除去" : locale === "vi" ? "Xịt rửa áp lực cao và diệt nấm mốc máy điều hòa" : "HVAC deep pressure wash and anti-mold treatment",
        locale === "ja" ? "レンジフード・ガスコンロの油汚れ分解洗浄" : locale === "vi" ? "Tháo rửa và đánh sạch cặn dầu mỡ máy hút mùi, bếp ga" : "Range hood & stove disassembly grease removal",
        locale === "ja" ? "浴室の水垢・鏡ウロコ・エプロン内部洗浄" : locale === "vi" ? "Đánh sạch cặn canxi gương kính, tẩy ố nhà tắm" : "Limescale removal, mirror polishing & drain sanitization",
        locale === "ja" ? "フローリングのワックス塗布・床面洗浄" : locale === "vi" ? "Đánh bóng sàn gỗ và phủ lớp sáp bảo vệ" : "Hardwood floor scrubbing & protective wax finish",
      ],
      badgeText: locale === "ja" ? "エアコン高圧洗浄・プロ仕様機材完備" : "HVAC pressure clean / Pro equipment",
    },
  ];

  const current = tabs[activeTab];

  return (
    <section className="relative py-20 px-5 sm:px-8 bg-slate-50/60 border-b border-slate-100">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sky-800 text-xs sm:text-sm font-black tracking-widest uppercase mb-3">
            {locale === "ja" ? "SERVICE LINEUP" : "SPECIALIZED SERVICES"}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            {locale === "ja" ? "施設タイプに合わせた専門清掃" : locale === "vi" ? "Dịch vụ Vệ sinh Chuyên biệt theo từng Cơ sở" : "Targeted Cleaning Solutions for Every Property"}
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {locale === "ja"
              ? "民泊・ホテル・賃貸物件それぞれの運営課題に特化した専門チームが対応します。"
              : locale === "vi"
              ? "Đội ngũ chuyên trách phục vụ từng nhu cầu riêng biệt của Airbnb, Khách sạn và Bất động sản."
              : "Specialized operational teams tailored for short-term rentals, boutique hotels, and rental properties."}
          </p>
        </div>

        {/* Tab Buttons Pill */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-soft max-w-full overflow-x-auto">
            {tabs.map((tab, idx) => {
              const Icon = tab.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-black text-xs sm:text-sm transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? "bg-sky-800 text-white shadow-elevated scale-[1.02]"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <Icon className={`size-4 sm:size-5 ${isActive ? "text-amber-300" : "text-slate-400"}`} />
                  <span>{tab.label}</span>
                  {tab.tag && (
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-md leading-none ${
                        isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {tab.tag}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Panel */}
        <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-10 lg:p-12 shadow-elevated">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Description Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-lg bg-sky-50 border border-sky-200/80 px-3.5 py-1 text-xs font-black text-sky-800">
                <Sparkles className="size-3.5 text-sky-600" />
                {current.badgeText}
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug">
                {current.title}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {current.description}
              </p>

              {/* Highlights Checklist */}
              <div className="space-y-3 pt-2">
                <p className="text-xs font-black text-slate-400 tracking-wider uppercase">
                  {locale === "ja" ? "主な作業内容・対応項目" : locale === "vi" ? "Hạng mục công việc chính" : "Core Scope of Work"}
                </p>
                <div className="grid gap-2.5">
                  {current.highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl bg-slate-50/80 border border-slate-100 p-3.5 text-xs sm:text-sm font-bold text-slate-800"
                    >
                      <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-normal">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap gap-3">
                <Link
                  href={companyBase.lineUrl}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#06C755] px-6 py-3.5 text-sm font-black text-white shadow-soft hover:bg-[#05b04c] transition"
                  data-analytics="line_service_tab_click"
                >
                  <MessageCircle className="size-4" />
                  {locale === "ja" ? "LINEで空き状況・お見積もり" : locale === "vi" ? "Tư vấn báo giá qua LINE" : "Check Availability on LINE"}
                </Link>
                <Link
                  href={withLocale(locale, "/services")}
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-6 py-3.5 text-sm font-black text-slate-700 hover:bg-slate-200 transition"
                >
                  {locale === "ja" ? "サービス詳細を見る" : locale === "vi" ? "Xem chi tiết dịch vụ" : "View Full Details"}
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* Right Visual Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-slate-100 aspect-[4/3] sm:aspect-[16/11]">
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 450px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-bold text-amber-300 block mb-0.5">
                    {companyBase.name} — Bawui Cleaning
                  </span>
                  <span className="text-sm sm:text-base font-black block">
                    {current.title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

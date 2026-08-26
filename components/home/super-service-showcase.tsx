import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BedDouble, Sparkles, Smartphone, Home as HomeIcon, ChevronRight, ArrowRight } from "lucide-react";
import { type Locale, withLocale } from "@/lib/i18n";

interface SuperServiceShowcaseProps {
  locale: Locale;
}

export function SuperServiceShowcase({ locale }: SuperServiceShowcaseProps) {
  const services = [
    {
      id: "hotel-turnover",
      enTitle: "Hotel Room Turnover",
      jpTitle: locale === "ja" ? "ホテル客室清掃・ベッドメイク" : locale === "vi" ? "Vệ sinh Buồng phòng Khách sạn" : "Hotel Room Turnover & Bed Making",
      desc: locale === "ja" 
        ? "ホテル基準のベッドメイキング、徹底した水回り磨き、アメニティ補充。チェックイン時間に合わせた安定稼働を実現します。" 
        : locale === "vi" 
        ? "Bọc nệm trải giường chuẩn khách sạn Omoiyari, đánh bóng nhà tắm, bổ sung đầy đủ đồ dùng trước giờ check-in." 
        : "Hotel-grade room turnovers with crisp bed making, pristine bathroom polish, and amenity replenishment.",
      image: "/works/photo-room.jpg",
      icon: BedDouble,
    },
    {
      id: "minpaku-care",
      enTitle: "Minpaku / Airbnb Care",
      jpTitle: locale === "ja" ? "民泊・Airbnb清掃代行" : locale === "vi" ? "Dọn dẹp Trọn gói Minpaku & Airbnb" : "Minpaku & Vacation Rental Turnover",
      desc: locale === "ja"
        ? "ゲスト退室後のリネン回収・洗濯乾燥・ゴミ回収・室内美装。忘れ物や破損の即時報告で民泊運営を全面サポートします。"
        : locale === "vi"
        ? "Dọn dẹp sau khi khách check-out, giặt sấy drap nệm, thu gom rác và kiểm tra đồ thất lạc, hỗ trợ chủ nhà vận hành dễ dàng."
        : "Comprehensive vacation rental turnovers: linen washing, trash removal, damage checks, and guest-ready styling.",
      image: "/works/photo-staff.jpg",
      icon: HomeIcon,
    },
    {
      id: "dx-operations",
      enTitle: "Smart Photo Inspection",
      jpTitle: locale === "ja" ? "LINE 100% 写真完了報告" : locale === "vi" ? "Báo cáo Ảnh 100% qua LINE & DX" : "LINE Photo Audit & Inspection",
      desc: locale === "ja"
        ? "清掃完了後すぐにLINEで全箇所写真と消耗品残量を報告。インスペクター二重チェックで遠隔地からでも100%安心です。"
        : locale === "vi"
        ? "Gửi ảnh nghiệm thu sắc nét và kiểm kê đồ dùng qua LINE ngay khi hoàn tất. Kiểm định 2 lớp đảm bảo chất lượng từ xa."
        : "Instant high-resolution photo proof and inventory alerts sent via LINE with dual supervisor quality inspections.",
      image: "/works/photo-report.jpg",
      icon: Smartphone,
    },
    {
      id: "deep-sanitization",
      enTitle: "Deep Water Area Polish",
      jpTitle: locale === "ja" ? "水回り徹底除菌・専門美装" : locale === "vi" ? "Vệ sinh Sâu Buồng tắm & Khử khuẩn" : "Deep Sanitization & Water Area Polish",
      desc: locale === "ja"
        ? "浴室の水垢・カビ・皮脂汚れをプロ仕様の資材で根こそぎ除去。消臭・除菌で次のゲストに清潔な空間を届けます。"
        : locale === "vi"
        ? "Tẩy sạch cặn canxi, ố vàng vách kính, khử mùi hôi ẩm mốc và diệt khuẩn chuyên sâu bằng hóa chất chuyên dụng Nhật Bản."
        : "Professional scale removal, odor elimination, and deep sanitization for sparkling, damage-free bathrooms.",
      image: "/works/photo-bathroom.jpg",
      icon: Sparkles,
    },
  ];

  return (
    <section
      id="services-showcase-section"
      className="section-services-showcase min-h-[70vh] lg:min-h-[85vh] py-16 sm:py-20 lg:py-24 px-5 sm:px-8 bg-white border-b border-slate-200/80 scroll-mt-20 flex flex-col justify-center"
    >
      <div className="services-container mx-auto max-w-6xl w-full my-auto">
        
        {/* Section Title */}
        <div id="services-header" className="services-header text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <p className="services-eyebrow font-serif-jp text-xs font-black tracking-[0.25em] text-[#00729F] uppercase mb-2">
            SERVICE
          </p>
          <h2 className="services-title font-serif-jp text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            {locale === "ja" ? "事業内容" : locale === "vi" ? "Dịch Vụ Cung Cấp" : "Core Services"}
          </h2>
          <div className="services-divider mx-auto mt-3 h-0.5 w-12 bg-[#00729F]" />
          <p className="services-lead mt-6 text-slate-600 text-sm sm:text-base leading-relaxed">
            {locale === "ja"
              ? "ホテル客室清掃・ベッドメイクから民泊清掃代行、LINE写真完了報告、水回り除菌美装まで。宿泊施設に特化したプロの技術で高評価レビューを守ります。"
              : locale === "vi"
              ? "Từ vệ sinh buồng phòng & trải giường khách sạn, đến dọn dẹp minpaku/Airbnb trọn gói, báo cáo ảnh LINE tức thì và khử khuẩn chuyên sâu."
              : "Specialized hotel room turnovers, vacation rental turnovers, instant LINE photo audits, and deep sanitization."}
          </p>
        </div>

        {/* 4 Clean Elegant Service Cards */}
        <div id="services-card-grid" className="services-card-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item, idx) => (
            <Link
              key={item.id}
              id={`service-card-${item.id}`}
              href={withLocale(locale, "/services")}
              className="service-card group rounded-2xl bg-[#F6F6F6] border border-slate-200/80 overflow-hidden hover:border-[#00729F] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="service-card-body">
                {/* Photo Banner — taller h-52 */}
                <div className="service-card-photo-wrapper relative h-52 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.jpTitle}
                    fill
                    className="service-card-image object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                  <div className="service-card-overlay absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/10 transition-colors" />
                  <span className="service-card-number absolute top-3 left-3 rounded-md bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[11px] font-black text-[#00729F] tracking-wider uppercase shadow-xs">
                    0{idx + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="service-card-text p-5">
                  <p className="service-card-eyebrow font-serif-jp text-xs font-black tracking-widest text-[#00729F] uppercase mb-1">
                    {item.enTitle}
                  </p>
                  <h3 className="service-card-title font-serif-jp text-base font-black text-slate-900 leading-snug group-hover:text-[#00729F] transition-colors">
                    {item.jpTitle}
                  </h3>
                  <p className="service-card-desc mt-3 text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Action Arrow */}
              <div className="service-card-footer p-4 pt-0 flex items-center text-xs font-black text-[#00729F] group-hover:translate-x-1 transition-transform">
                <span>{locale === "ja" ? "詳しく見る" : locale === "vi" ? "Chi tiết" : "Learn More"}</span>
                <ChevronRight className="size-4 ml-0.5" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Button */}
        <div id="services-bottom-cta" className="services-bottom-cta mt-8 text-center">
          <Link
            href={withLocale(locale, "/services")}
            className="services-btn-all inline-flex items-center gap-2 rounded-full bg-[#00729F] hover:bg-[#00466D] px-8 py-3 text-xs sm:text-sm font-black text-white transition shadow-sm"
          >
            <span>{locale === "ja" ? "事業内容・サービス一覧を見る" : locale === "vi" ? "Xem tất cả dịch vụ" : "View All Services"}</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

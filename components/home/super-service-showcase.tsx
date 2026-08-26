import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, BedDouble, Building, Smartphone, Users } from "lucide-react";
import { type Locale, withLocale } from "@/lib/i18n";

interface SuperServiceShowcaseProps {
  locale: Locale;
}

export function SuperServiceShowcase({ locale }: SuperServiceShowcaseProps) {
  const services = [
    {
      id: "bed-making",
      enTitle: "Bed making",
      jpTitle: locale === "ja" ? "ベッドメイキング・日常清掃" : locale === "vi" ? "Bọc nệm Ga gối & Dọn buồng" : "Bed Making & Daily Turnover",
      desc: locale === "ja" 
        ? "ホテル・民泊に特化した客室清掃。シワのないシーツ張りから水回り磨き、アメニティ補充まで徹底管理します。" 
        : locale === "vi" 
        ? "Vệ sinh buồng phòng khách sạn & Airbnb. Đảm bảo ga gối phẳng phiu, đánh bóng nhà tắm và châm đầy đồ dùng." 
        : "Hotel-grade room turnovers from crisp bed making to amenity replenishment.",
      image: "/works/photo-room.jpg",
      icon: BedDouble,
    },
    {
      id: "building-maintenance",
      enTitle: "Building maintenance",
      jpTitle: locale === "ja" ? "原状回復・定期美装・退去清掃" : locale === "vi" ? "Bảo trì Tòa nhà & Hoàn trả" : "Building Maintenance & Deep Clean",
      desc: locale === "ja"
        ? "エアコン内部高圧洗浄、換気扇油汚れ分解、床面ワックス塗布など。建物の美観と清潔環境を維持します。"
        : locale === "vi"
        ? "Xịt rửa điều hòa áp lực cao, tẩy dầu mỡ máy hút mùi, phủ sáp sàn gỗ. Bảo dưỡng bất động sản định kỳ."
        : "Periodic deep cleaning, floor waxing, kitchen grease extraction, and HVAC pressure washing.",
      image: "/works/photo-staff.jpg",
      icon: Building,
    },
    {
      id: "dx-operations",
      enTitle: "Smart DX Operations",
      jpTitle: locale === "ja" ? "LINE写真付き完了報告・管理" : locale === "vi" ? "Báo cáo Ảnh tức thì qua LINE" : "LINE Photo DX Management",
      desc: locale === "ja"
        ? "清掃完了後すぐにLINEで全箇所写真と消耗品残量を報告。遠隔地のオーナー様でも現地の状況を即座に把握できます。"
        : locale === "vi"
        ? "Gửi ảnh nghiệm thu và kiểm kê đồ tiêu hao qua LINE ngay khi hoàn tất. Quản lý từ xa thuận tiện."
        : "Real-time photo proof and inventory replenishment alerts sent directly to LINE.",
      image: "/works/photo-room.jpg",
      icon: Smartphone,
    },
    {
      id: "global-staffing",
      enTitle: "Global Hospitality Team",
      jpTitle: locale === "ja" ? "多言語対応・専任スタッフ体制" : locale === "vi" ? "Đội ngũ Đa ngôn ngữ Chuyên nghiệp" : "Multilingual Hospitality Team",
      desc: locale === "ja"
        ? "日・英・越・中での円滑なコミュニケーション。ホテル水準の厳しい社内研修をクリアした専任スタッフが担当します。"
        : locale === "vi"
        ? "Giao tiếp 4 thứ tiếng Nhật, Anh, Việt, Trung. Đội ngũ nhân viên chính thức được đào tạo bài bản."
        : "Certified multilingual hospitality staff fluent in Japanese, English, Vietnamese, and Chinese.",
      image: "/works/photo-staff.jpg",
      icon: Users,
    },
  ];

  const lifestyleStrip = [
    {
      src: "/works/photo-room.jpg",
      caption: locale === "ja" ? "完成客室" : locale === "vi" ? "Phòng hoàn thiện" : "Finished Room",
    },
    {
      src: "/works/photo-bathroom.jpg",
      caption: locale === "ja" ? "水回り清掃" : locale === "vi" ? "Vệ sinh nhà tắm" : "Bathroom Polish",
    },
    {
      src: "/works/photo-tools.jpg",
      caption: locale === "ja" ? "プロ仕様機材" : locale === "vi" ? "Thiết bị chuyên dụng" : "Pro Equipment",
    },
    {
      src: "/works/photo-report.jpg",
      caption: locale === "ja" ? "写真付き報告" : locale === "vi" ? "Báo cáo bằng ảnh" : "Photo Reports",
    },
  ];

  return (
    <section
      id="services-showcase-section"
      className="section-services-showcase min-h-0 lg:min-h-[80vh] py-16 sm:py-20 lg:py-28 px-5 sm:px-8 bg-white border-b border-slate-200/80 scroll-mt-16 sm:scroll-mt-20 flex flex-col justify-center"
    >
      <div className="services-container mx-auto max-w-6xl w-full">
        
        {/* Section Title */}
        <div id="services-header" className="services-header text-center max-w-3xl mx-auto mb-16">
          <p className="services-eyebrow font-serif-jp text-xs font-black tracking-[0.25em] text-[#00729F] uppercase mb-2">
            SERVICE
          </p>
          <h2 className="services-title font-serif-jp text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            {locale === "ja" ? "事業内容" : locale === "vi" ? "Dịch Vụ Cung Cấp" : "Core Services"}
          </h2>
          <div className="services-divider mx-auto mt-3 h-0.5 w-12 bg-[#00729F]" />
          <p className="services-lead mt-6 text-slate-600 text-sm sm:text-base leading-relaxed">
            {locale === "ja"
              ? "客室清掃・ベッドメイキングから、ビルメンテナンス、DX管理、多言語スタッフ体制まで包括的にサポートいたします。"
              : locale === "vi"
              ? "Từ vệ sinh buồng phòng & trải giường chuẩn khách sạn, đến bảo trì tòa nhà định kỳ, quản lý DX và đào tạo nhân sự đa quốc gia."
              : "Comprehensive hospitality cleaning, periodic building maintenance, DX automation, and staff management."}
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
              <div className="service-card-footer p-5 pt-0 flex items-center text-xs font-black text-[#00729F] group-hover:translate-x-1 transition-transform">
                <span>{locale === "ja" ? "詳しく見る" : locale === "vi" ? "Chi tiết" : "Learn More"}</span>
                <ChevronRight className="size-4 ml-0.5" />
              </div>
            </Link>
          ))}
        </div>

        {/* Lifestyle Image Strip */}
        <div id="services-lifestyle-strip" className="services-lifestyle-strip mt-14">
          <div className="lifestyle-strip-grid grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {lifestyleStrip.map((photo) => (
              <div key={photo.src} className="lifestyle-item flex flex-col items-center">
                <div className="lifestyle-photo-wrapper relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    className="lifestyle-image object-cover"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
                <p className="lifestyle-caption mt-2 text-[11px] sm:text-xs font-bold text-slate-500 text-center">
                  {photo.caption}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Button */}
        <div id="services-bottom-cta" className="services-bottom-cta mt-12 text-center">
          <Link
            href={withLocale(locale, "/services")}
            className="services-btn-all inline-flex items-center gap-2 rounded-lg bg-[#00729F] hover:bg-[#00466D] px-8 py-3.5 text-xs sm:text-sm font-black text-white transition shadow-sm"
          >
            <span>{locale === "ja" ? "事業内容・サービス一覧を見る" : locale === "vi" ? "Xem tất cả dịch vụ" : "View All Services"}</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

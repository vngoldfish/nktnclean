import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Check } from "lucide-react";
import { type Locale, withLocale } from "@/lib/i18n";

interface GlobalWorkCultureProps {
  locale: Locale;
}

export function GlobalWorkCulture({ locale }: GlobalWorkCultureProps) {
  const points = [
    locale === "ja" ? "その方の多様性を重視した職場環境" : locale === "vi" ? "Môi trường làm việc tôn trọng và phát huy sự đa dạng văn hóa" : "Inclusive workplace valuing individual diversity",
    locale === "ja" ? "新卒にこだわらない通年採用と人物重視" : locale === "vi" ? "Tuyển dụng liên tục quanh năm, đánh giá cao tinh thần trách nhiệm" : "Year-round hiring focused on character and passion",
    locale === "ja" ? "アルバイトから管理職・責任者へのキャリアアップ実績多数" : locale === "vi" ? "Lộ trình thăng tiến rõ ràng từ nhân viên buồng phòng lên giám sát, quản lý" : "Proven career growth from room cleaners to supervisors",
    locale === "ja" ? "ホテル水準の清掃マニュアルと専属トレーナー研修制度" : locale === "vi" ? "Quy trình vệ sinh chuẩn khách sạn và đào tạo kèm cặp 1-1" : "Hospitality-grade standard manuals and 1-on-1 coaching",
    locale === "ja" ? "多国籍スタッフ在籍・職場での語学交流と学びの機会" : locale === "vi" ? "Đội ngũ đa quốc gia, cơ hội học hỏi ngoại ngữ và giao lưu văn hóa" : "Multinational team fostering multilingual learning",
    locale === "ja" ? "万が一の事故・物損にも安心の損害賠償保険完備" : locale === "vi" ? "Bảo hiểm trách nhiệm bồi thường đầy đủ, an tâm tuyệt đối khi làm việc" : "Full insurance coverage protecting staff and clients",
  ];

  return (
    <section
      id="workforce-culture-section"
      className="section-workforce-culture py-20 px-5 sm:px-8 bg-[#F6F6F6] border-b border-slate-200/80"
    >
      <div className="workforce-container mx-auto max-w-5xl">
        
        {/* 1. Visual Banner — Split Layout: Photo Left + Header Right */}
        <div id="workforce-banner" className="workforce-banner grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-14">
          {/* Large Photo */}
          <div className="workforce-photo-wrapper relative aspect-[16/9] rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/works/photo-staff.jpg"
              alt="NKTN Global Team"
              fill
              className="workforce-photo-image object-cover"
              sizes="(max-width: 1024px) 100vw, 550px"
            />
            <div className="workforce-photo-overlay absolute inset-0 bg-gradient-to-t from-[#071224]/30 via-transparent to-transparent" />
          </div>

          {/* Header Text */}
          <div className="workforce-header-text text-center lg:text-left">
            <p className="workforce-eyebrow font-serif-jp text-xs font-black tracking-[0.25em] text-[#00729F] uppercase mb-2">
              RECRUIT &amp; WORKPLACE
            </p>
            <h2 className="workforce-title font-serif-jp text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              {locale === "ja" ? "国籍問わず活躍できる、そういう組織" : locale === "vi" ? "Đội Ngũ Nhân Lực Toàn Cầu & Văn Hóa Đào Tạo" : "Multinational Diversity & Growth"}
            </h2>
            <div className="workforce-divider mt-3 h-0.5 w-12 bg-[#00729F] mx-auto lg:mx-0" />
            <p className="workforce-lead mt-6 text-slate-600 text-sm sm:text-base leading-relaxed">
              {locale === "ja"
                ? "当社は日本を含め、世界中の人々と海外の文化を尊重する企業風土を実践しています。\nグローバルな環境で、確かな清掃技術とおもてなしマナーを学び、成長できる機会があります。"
                : "We foster an inclusive culture that respects global diversity, offering rigorous hotel-standard training and clear career advancement."}
            </p>
          </div>
        </div>

        {/* 2. 2-Column Checklist with Cyan Checkmark Badges (Exact Super Hotel Clean Style) */}
        <div id="workforce-checklist" className="workforce-checklist grid sm:grid-cols-2 gap-4 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 mb-12 shadow-xs">
          {points.map((item, idx) => (
            <div key={idx} id={`workforce-point-${idx + 1}`} className="workforce-point-item flex items-center gap-3.5 p-2">
              <span className="workforce-check-icon grid size-7 shrink-0 place-items-center rounded-full bg-[#19BAD7] text-white shadow-xs">
                <Check className="size-4 stroke-[3]" />
              </span>
              <span className="workforce-point-text text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* 3. 2 Clean Split Career / Partner Cards (Super Hotel Clean .project_list style) */}
        <div id="workforce-cards-grid" className="workforce-cards-grid grid sm:grid-cols-2 gap-6">
          {/* Card 1: Full-time Recruit */}
          <Link
            id="recruit-card-fulltime"
            href={withLocale(locale, "/contact")}
            className="recruit-card group rounded-2xl bg-white border border-slate-200/80 p-6 hover:border-[#00729F] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <span className="recruit-badge text-[11px] font-black text-[#00729F] bg-sky-50 border border-sky-100 px-2.5 py-0.5 rounded uppercase">
                Recruit
              </span>
              <h3 className="recruit-title font-serif-jp text-lg sm:text-xl font-black text-slate-900 mt-3 group-hover:text-[#00729F] transition-colors">
                {locale === "ja" ? "正社員・契約社員・現場責任者募集" : locale === "vi" ? "Tuyển dụng Nhân viên Chính thức & Giám sát Vận hành" : "Full-time & Supervisor Roles"}
              </h3>
              <p className="recruit-desc text-xs text-slate-600 mt-2 leading-relaxed">
                {locale === "ja" 
                  ? "ホテル清掃の現場管理、インスペクター点検、シフト調整などの運営全般を担当。未経験からでも丁寧な研修制度があります。" 
                  : locale === "vi"
                  ? "Phụ trách quản lý hiện trường buồng phòng, kiểm định chất lượng, điều phối ca làm việc. Đào tạo tận tình từ cơ bản đến nâng cao."
                  : "On-site operations, inspection audits, and shift management with comprehensive training."}
              </p>
            </div>
            <div className="recruit-action mt-6 flex items-center text-xs font-black text-[#00729F] group-hover:translate-x-1 transition-transform">
              <span>{locale === "ja" ? "採用詳細・ご応募はこちら" : locale === "vi" ? "Xem chi tiết & Ứng tuyển" : "Apply Now"}</span>
              <ChevronRight className="size-4 ml-0.5" />
            </div>
          </Link>

          {/* Card 2: Partner / Part-time */}
          <Link
            id="recruit-card-partner"
            href={withLocale(locale, "/contact")}
            className="recruit-card group rounded-2xl bg-white border border-slate-200/80 p-6 hover:border-[#00729F] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <span className="recruit-badge text-[11px] font-black text-amber-700 bg-amber-50 border border-amber-100 px-2.5 py-0.5 rounded uppercase">
                Partner / Part-time
              </span>
              <h3 className="recruit-title font-serif-jp text-lg sm:text-xl font-black text-slate-900 mt-3 group-hover:text-[#00729F] transition-colors">
                {locale === "ja" ? "客室清掃スタッフ・協力会社様募集" : locale === "vi" ? "Cộng tác viên Dọn phòng & Doanh nghiệp Hợp tác" : "Cleaners & Partner Inquiries"}
              </h3>
              <p className="recruit-desc text-xs text-slate-600 mt-2 leading-relaxed">
                {locale === "ja" 
                  ? "週2日〜OK、Wワーク・副業歓迎。大阪・関西エリアで清掃業務を請け負っていただける協力会社様・個人事業主様も随時募集中です。" 
                  : locale === "vi"
                  ? "Linh hoạt từ 2 ngày/tuần, phù hợp làm thêm. Chào đón các đơn vị đối tác, nhà thầu phụ cùng hợp tác cung cấp dịch vụ tại Kansai."
                  : "Flexible schedules, part-time shifts, and corporate partnership opportunities across Kansai."}
              </p>
            </div>
            <div className="recruit-action mt-6 flex items-center text-xs font-black text-[#00729F] group-hover:translate-x-1 transition-transform">
              <span>{locale === "ja" ? "協力会社・応募お問い合わせ" : locale === "vi" ? "Liên hệ hợp tác & Tuyển dụng" : "Partner Inquiries"}</span>
              <ChevronRight className="size-4 ml-0.5" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}

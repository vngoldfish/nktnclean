import React from "react";
import Image from "next/image";
import { ShieldCheck, Sparkles, Award } from "lucide-react";
import { type Locale } from "@/lib/i18n";

interface ComparisonTableProps {
  locale: Locale;
}

export function ComparisonTable({ locale }: ComparisonTableProps) {
  const contentMap: Record<Locale, {
    badge: string;
    title: string;
    lead: string;
    nktnLabel: string;
    othersLabel: string;
    features: {
      title: string;
      desc: string;
      nktn: { value: string; positive: boolean; symbol: string };
      others: { value: string; positive: boolean; symbol: string };
    }[];
  }> = {
    ja: {
      badge: "品質と信頼の比較",
      title: "他社清掃会社との違い",
      lead: "単なる作業ではなく、施設の稼働率と高評価レビューを守る「専属パートナー」として品質に圧倒的な差があります。",
      nktnLabel: "株式会社NKTN (Bawui Cleaning)",
      othersLabel: "一般的な清掃代行・個人委託",
      features: [
        {
          title: "緊急駆けつけ・即日対応",
          desc: "突発的なチェックインや当日の予約にも迅速対応",
          nktn: { value: "最短即日駆けつけ（24時間受付）", positive: true, symbol: "◎" },
          others: { value: "前日・当日対応不可 / 追加料金高額", positive: false, symbol: "✕" },
        },
        {
          title: "写真付きリアルタイム報告",
          desc: "清掃完了後すぐにLINEやシステムで写真付き完了報告",
          nktn: { value: "全箇所写真＋消耗品残量報告", positive: true, symbol: "◎" },
          others: { value: "文字のみ報告 / 報告なしの場合あり", positive: false, symbol: "△" },
        },
        {
          title: "損害賠償保険の加入",
          desc: "万が一の備品破損やトラブル時にも安心の補償体制",
          nktn: { value: "最高1億円補償保険完備", positive: true, symbol: "◎" },
          others: { value: "無保険または自己負担リスクあり", positive: false, symbol: "✕" },
        },
        {
          title: "スタッフ体制と研修",
          desc: "ホテル水準の厳しい清掃基準とマナー研修を実施",
          nktn: { value: "専属トレーナーによる社内基準クリア", positive: true, symbol: "◎" },
          others: { value: "単発バイト・スキマバイト中心", positive: false, symbol: "△" },
        },
        {
          title: "多言語コミュニケーション",
          desc: "海外オーナー様や外国人スタッフとも円滑にやり取り",
          nktn: { value: "日・英・ベトナム・中国語対応", positive: true, symbol: "◎" },
          others: { value: "日本語のみ", positive: false, symbol: "△" },
        },
        {
          title: "インボイス適格請求書",
          desc: "法人税務・経理処理も安心の正規事業者",
          nktn: { value: "インボイス発行事業者登録済み", positive: true, symbol: "◎" },
          others: { value: "個人免税事業者（控除不可）が多い", positive: false, symbol: "△" },
        },
      ],
    },
    en: {
      badge: "Quality & Trust Comparison",
      title: "Why Choose NKTN Over Others",
      lead: "We don't just clean — we act as your dedicated operations partner safeguarding your 5-star guest reviews.",
      nktnLabel: "NKTN Co., Ltd. (Bawui Cleaning)",
      othersLabel: "Standard Freelancers / General Cleaners",
      features: [
        {
          title: "Same-Day Emergency Dispatch",
          desc: "Immediate response for last-minute same-day check-ins",
          nktn: { value: "Same-day rush dispatch (24/7 intake)", positive: true, symbol: "◎" },
          others: { value: "Unavailable on same day / hefty fees", positive: false, symbol: "✕" },
        },
        {
          title: "Real-Time Photo Inspection Reports",
          desc: "Instant photos and replenishment reports via LINE/System",
          nktn: { value: "Full-room photo checklist + amenities report", positive: true, symbol: "◎" },
          others: { value: "Text-only or unreliable reporting", positive: false, symbol: "△" },
        },
        {
          title: "Liability Insurance Coverage",
          desc: "Complete protection against accidental property damage",
          nktn: { value: "Fully insured with comprehensive liability", positive: true, symbol: "◎" },
          others: { value: "Uninsured or host carries all risks", positive: false, symbol: "✕" },
        },
        {
          title: "Trained Professional Staff",
          desc: "Hotel-grade rigorous cleaning standards and protocols",
          nktn: { value: "Certified in-house trained team", positive: true, symbol: "◎" },
          others: { value: "Gig workers / unvetted cleaners", positive: false, symbol: "△" },
        },
        {
          title: "Multilingual Communication",
          desc: "Fluent coordination for global property owners",
          nktn: { value: "Japanese, English, Vietnamese, Chinese", positive: true, symbol: "◎" },
          others: { value: "Japanese only", positive: false, symbol: "△" },
        },
        {
          title: "Qualified Tax Invoice (Invoice System)",
          desc: "Official corporate tax invoices for seamless accounting",
          nktn: { value: "Registered Invoice System Issuer", positive: true, symbol: "◎" },
          others: { value: "Tax-exempt individuals (non-deductible)", positive: false, symbol: "△" },
        },
      ],
    },
    vi: {
      badge: "So sánh Chất lượng & Độ Tin cậy",
      title: "Điểm Khác Biệt Giữa NKTN & Đơn Vị Khác",
      lead: "Không chỉ dọn dẹp đơn thuần, chúng tôi là đối tác vận hành tận tâm giúp bảo vệ đánh giá 5 sao cho cơ sở của bạn.",
      nktnLabel: "Công ty Cổ phần NKTN (Bawui Cleaning)",
      othersLabel: "Cá nhân tự do / Đơn vị thông thường",
      features: [
        {
          title: "Ứng cứu khẩn cấp & Trong ngày",
          desc: "Xử lý tức thì các lịch check-in gấp phát sinh trong ngày",
          nktn: { value: "Hỗ trợ nhanh trong ngày (Tiếp nhận 24/7)", positive: true, symbol: "◎" },
          others: { value: "Không nhận trong ngày / Phụ phí đắt đỏ", positive: false, symbol: "✕" },
        },
        {
          title: "Báo cáo hình ảnh kèm theo tức thì",
          desc: "Gửi ảnh kiểm tra chi tiết sau dọn qua LINE / Hệ thống",
          nktn: { value: "Chụp ảnh mọi khu vực + kiểm kê đồ dùng", positive: true, symbol: "◎" },
          others: { value: "Chỉ nhắn tin hoặc không báo cáo", positive: false, symbol: "△" },
        },
        {
          title: "Bảo hiểm bồi thường thiệt hại",
          desc: "An tâm tuyệt đối nếu không may xảy ra sự cố hỏng hóc",
          nktn: { value: "Bảo hiểm trách nhiệm đầy đủ", positive: true, symbol: "◎" },
          others: { value: "Không bảo hiểm / Chủ nhà tự chịu rủi ro", positive: false, symbol: "✕" },
        },
        {
          title: "Đội ngũ chuyên nghiệp đào tạo bài bản",
          desc: "Quy chuẩn vệ sinh chuẩn khách sạn cao cấp",
          nktn: { value: "Đào tạo nội bộ khắt khe theo quy trình", positive: true, symbol: "◎" },
          others: { value: "Lao động thời vụ, không qua đào tạo", positive: false, symbol: "△" },
        },
        {
          title: "Hỗ trợ đa ngôn ngữ",
          desc: "Giao tiếp trơn tru với chủ nhà nước ngoài",
          nktn: { value: "Tiếng Nhật, Anh, Việt, Trung", positive: true, symbol: "◎" },
          others: { value: "Chỉ tiếng Nhật", positive: false, symbol: "△" },
        },
        {
          title: "Hóa đơn Invoice hợp lệ",
          desc: "Đầy đủ tư cách pháp nhân phục vụ quyết toán thuế",
          nktn: { value: "Có mã số thuế Invoice chuẩn Nhật Bản", positive: true, symbol: "◎" },
          others: { value: "Cá nhân miễn thuế (không khấu trừ được)", positive: false, symbol: "△" },
        },
      ],
    },
    zh: {
      badge: "品质与信赖对比",
      title: "与一般保洁公司的区别",
      lead: "不仅是清扫作业，更是守护您房源好评与高入住率的专属运营伙伴。",
      nktnLabel: "株式会社NKTN (Bawui Cleaning)",
      othersLabel: "一般保洁公司 / 个人兼职",
      features: [
        {
          title: "紧急应对・当天对应",
          desc: "应对突发预订与加急清扫需求",
          nktn: { value: "最快当天赶到（24小时受理）", positive: true, symbol: "◎" },
          others: { value: "无法当天对应 / 加急费高昂", positive: false, symbol: "✕" },
        },
        {
          title: "带图实时汇报",
          desc: "清扫完成后即时发送全屋照片及耗材余量",
          nktn: { value: "各区域照片＋耗材清单完备", positive: true, symbol: "◎" },
          others: { value: "仅文字或无汇报", positive: false, symbol: "△" },
        },
        {
          title: "损害赔偿保险",
          desc: "设备破损等意外情况全额保障",
          nktn: { value: "加入完备赔偿保险", positive: true, symbol: "◎" },
          others: { value: "无保险或自担风险", positive: false, symbol: "✕" },
        },
        {
          title: "员工培训体系",
          desc: "严格执行酒店级清洁与礼仪标准",
          nktn: { value: "专职人员考核达标上岗", positive: true, symbol: "◎" },
          others: { value: "临时兼职为主", positive: false, symbol: "△" },
        },
        {
          title: "多语言沟通",
          desc: "海外房东沟通无障碍",
          nktn: { value: "日/英/中/越四语对应", positive: true, symbol: "◎" },
          others: { value: "仅限日语", positive: false, symbol: "△" },
        },
        {
          title: "合规发票（Invoice）",
          desc: "正规法人开具抵扣凭证",
          nktn: { value: "已登记合规发票发行企业", positive: true, symbol: "◎" },
          others: { value: "免税个人无法抵扣", positive: false, symbol: "△" },
        },
      ],
    },
    ne: {
      badge: "गुणस्तर र विश्वसनीयता तुलना",
      title: "NKTN र अन्य बीचको भिन्नता",
      lead: "हामी केवल सरसफाइ मात्र गर्दैनौं, तपाईंको सम्पत्तिको उच्च मूल्याङ्कन जोगाउन समर्पित छौं।",
      nktnLabel: "株式会社NKTN (Bawui Cleaning)",
      othersLabel: "सामान्य सरसफाइ सेवा",
      features: [
        {
          title: "तत्काल आपतकालीन सेवा",
          desc: "सोही दिनको बुकिङका लागि छिटो सेवा",
          nktn: { value: "सोही दिन द्रुत सेवा (२४ घण्टा खुला)", positive: true, symbol: "◎" },
          others: { value: "सोही दिन उपलब्ध नहुने", positive: false, symbol: "✕" },
        },
        {
          title: "तस्बिरसहितको रिपोर्ट",
          desc: "काम सकिएपछि तुरुन्त फोटो रिपोर्टिङ",
          nktn: { value: "सबै कोठाको फोटो सहितको रिपोर्ट", positive: true, symbol: "◎" },
          others: { value: "पाठ मात्र वा रिपोर्ट नहुने", positive: false, symbol: "△" },
        },
        {
          title: "क्षतिपूर्ति बीमा",
          desc: "कुनै सामान बिग्रिएमा पूर्ण सुरक्षा",
          nktn: { value: "पूर्ण बीमा कभरेज सहित", positive: true, symbol: "◎" },
          others: { value: "बीमा नभएको", positive: false, symbol: "✕" },
        },
        {
          title: "प्रशिक्षित कर्मचारी",
          desc: "होटल स्तरको सरसफाइ मापदण्ड",
          nktn: { value: "प्रशिक्षित दक्ष टोली", positive: true, symbol: "◎" },
          others: { value: "अस्थायी अप्रशिक्षित कामदार", positive: false, symbol: "△" },
        },
        {
          title: "बहुभाषिक सेवा",
          desc: "विदेशी मालिकहरूका लागि सजिलो कुराकानी",
          nktn: { value: "जापानी, अंग्रेजी, भियतनामी, चिनियाँ", positive: true, symbol: "◎" },
          others: { value: "जापानी मात्र", positive: false, symbol: "△" },
        },
        {
          title: "आधिकारिक कर बिल",
          desc: "कानुनी कर बिल जारी गर्ने संस्था",
          nktn: { value: "दर्ता गरिएको आधिकारिक संस्था", positive: true, symbol: "◎" },
          others: { value: "दर्ता नभएका व्यक्तिहरू", positive: false, symbol: "△" },
        },
      ],
    },
    fil: {
      badge: "Paghahambing ng Kalidad at Tiwala",
      title: "Bakit NKTN ang Piliin Higit sa Iba",
      lead: "Hindi lang kami naglilinis — kami ang iyong maaasahang katuwang sa pagpapanatili ng 5-star rating.",
      nktnLabel: "株式会社NKTN (Bawui Cleaning)",
      othersLabel: "Karaniwang Tagapaglinis / Freelancer",
      features: [
        {
          title: "Emergency at Same-Day na Serbisyo",
          desc: "Mabilis na pagtugon sa mga biglaang check-in",
          nktn: { value: "Mabilis na serbisyo sa parehong araw (24/7)", positive: true, symbol: "◎" },
          others: { value: "Hindi available sa parehong araw", positive: false, symbol: "✕" },
        },
        {
          title: "May Kasamang Litrato na Ulat",
          desc: "Agarang photo report pagkatapos ng paglilinis",
          nktn: { value: "Kumpletong litrato sa bawat sulok", positive: true, symbol: "◎" },
          others: { value: "Walang litrato o mensahe lang", positive: false, symbol: "△" },
        },
        {
          title: "Seguro Laban sa Pinsala",
          desc: "Protektado ang iyong ari-arian laban sa aksidente",
          nktn: { value: "May komprehensibong insurance", positive: true, symbol: "◎" },
          others: { value: "Walang insurance", positive: false, symbol: "✕" },
        },
        {
          title: "Sanay at Propesyonal na Staff",
          desc: "Pamantayang pang-hotel sa kalinisan",
          nktn: { value: "Sertipikadong sinanay na staff", positive: true, symbol: "◎" },
          others: { value: "Mga part-time na walang pagsasanay", positive: false, symbol: "△" },
        },
        {
          title: "Maraming Wikang Suporta",
          desc: "Madaling makipag-usap para sa foreign owners",
          nktn: { value: "Japanese, English, Vietnamese, Chinese", positive: true, symbol: "◎" },
          others: { value: "Japanese lamang", positive: false, symbol: "△" },
        },
        {
          title: "Opisyal na Invoice (Invoice System)",
          desc: "Rehistradong kumpanya para sa buwis",
          nktn: { value: "Rehistradong Invoice Issuer", positive: true, symbol: "◎" },
          others: { value: "Mga indibidwal na walang rehistro", positive: false, symbol: "△" },
        },
      ],
    },
    id: {
      badge: "Perbandingan Kualitas & Kepercayaan",
      title: "Perbedaan NKTN dengan Layanan Lain",
      lead: "Bukan sekadar bersih-bersih, kami adalah mitra operasional Anda untuk menjaga ulasan bintang 5.",
      nktnLabel: "株式会社NKTN (Bawui Cleaning)",
      othersLabel: "Layanan Pembersih Biasa / Freelance",
      features: [
        {
          title: "Layanan Darurat & Hari yang Sama",
          desc: "Respons cepat untuk check-in mendadak di hari yang sama",
          nktn: { value: "Siap datang di hari yang sama (24/7)", positive: true, symbol: "◎" },
          others: { value: "Tidak bisa di hari yang sama", positive: false, symbol: "✕" },
        },
        {
          title: "Laporan Foto Real-Time",
          desc: "Laporan foto lengkap setelah selesai dibersihkan",
          nktn: { value: "Foto menyeluruh + cek perlengkapan", positive: true, symbol: "◎" },
          others: { value: "Hanya teks atau tanpa laporan", positive: false, symbol: "△" },
        },
        {
          title: "Asuransi Kerusakan Properti",
          desc: "Perlindungan menyeluruh jika terjadi kerusakan",
          nktn: { value: "Asuransi tanggung gugat lengkap", positive: true, symbol: "◎" },
          others: { value: "Tanpa asuransi", positive: false, symbol: "✕" },
        },
        {
          title: "Staf Terlatih & Profesional",
          desc: "Standar kebersihan setara hotel berbintang",
          nktn: { value: "Staf internal terlatih dan tersertifikasi", positive: true, symbol: "◎" },
          others: { value: "Pekerja lepas tanpa pelatihan", positive: false, symbol: "△" },
        },
        {
          title: "Komunikasi Multi-Bahasa",
          desc: "Kemudahan komunikasi bagi pemilik properti global",
          nktn: { value: "Jepang, Inggris, Vietnam, Mandarin", positive: true, symbol: "◎" },
          others: { value: "Hanya bahasa Jepang", positive: false, symbol: "△" },
        },
        {
          title: "Faktur Pajak Resmi (Invoice System)",
          desc: "Badan hukum resmi terdaftar untuk akuntansi bisnis",
          nktn: { value: "Penerbit Faktur Pajak Terdaftar", positive: true, symbol: "◎" },
          others: { value: "Individu bebas pajak (tidak dapat diklaim)", positive: false, symbol: "△" },
        },
      ],
    },
  };

  const t = contentMap[locale] || contentMap.ja;

  return (
    <section
      id="comparison-table-section"
      className="section-comparison-table relative overflow-hidden min-h-[70vh] lg:min-h-[85vh] py-16 sm:py-20 lg:py-24 px-5 sm:px-8 bg-gradient-to-b from-white via-slate-50/50 to-white border-y border-slate-100 scroll-mt-20 flex flex-col justify-center"
    >
      <div className="comparison-container mx-auto max-w-7xl w-full my-auto">
        {/* Section Header */}
        <div id="comparison-header" className="comparison-header text-center mb-10 sm:mb-12 max-w-3xl mx-auto">
          <span className="comparison-badge inline-flex items-center gap-1.5 rounded-full bg-sky-50 border border-sky-200/80 px-4 py-1.5 text-xs font-black tracking-widest text-sky-800 uppercase mb-4">
            <Sparkles className="size-3.5 text-sky-600" />
            {t.badge}
          </span>
          <h2 className="comparison-title text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            {t.title}
          </h2>
          <p className="comparison-lead mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
            {t.lead}
          </p>
        </div>

        {/* --- MOBILE VIEW: Card-based Comparison (< md screens) --- */}
        <div id="comparison-mobile-cards" className="comparison-mobile-cards space-y-4 md:hidden">
          {t.features.map((item, idx) => (
            <div
              key={item.title}
              id={`comparison-card-${idx + 1}`}
              className="comparison-card rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm"
            >
              {/* Feature Title & Description */}
              <div className="comparison-card-header mb-3">
                <span className="comparison-checkpoint text-[10px] font-mono font-bold text-[#00729F] uppercase tracking-wider block">
                  CHECKPOINT 0{idx + 1}
                </span>
                <h4 className="comparison-item-title font-serif-jp text-base font-black text-slate-900 leading-snug">
                  {item.title}
                </h4>
                {item.desc && (
                  <p className="comparison-item-desc text-[11px] text-slate-500 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                )}
              </div>

              {/* Side-by-side comparison cards */}
              <div className="comparison-card-grid grid grid-cols-2 gap-2.5">
                {/* NKTN Highlight Box */}
                <div className="comparison-box-nktn rounded-xl bg-sky-50/90 border border-sky-200/90 p-3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-2">
                      <span className="text-[10px] font-black text-sky-900 uppercase">
                        {locale === "ja" ? "NKTN (当社)" : locale === "vi" ? "NKTN" : "NKTN"}
                      </span>
                      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#00729F] text-white font-black text-xs shadow-xs">
                        {item.nktn.symbol}
                      </span>
                    </div>
                    <p className="text-xs font-bold text-sky-950 leading-snug">
                      {item.nktn.value}
                    </p>
                  </div>
                </div>

                {/* Others Box */}
                <div className="comparison-box-others rounded-xl bg-slate-50 border border-slate-200 p-3 flex flex-col justify-between text-slate-500">
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-2">
                      <span className="text-[10px] font-bold text-slate-500 truncate">
                        {locale === "ja" ? "一般他社" : locale === "vi" ? "Đơn vị khác" : "Others"}
                      </span>
                      <span
                        className={`grid size-6 shrink-0 place-items-center rounded-full text-xs font-bold ${
                          item.others.symbol === "✕"
                            ? "bg-rose-50 text-rose-600 border border-rose-100"
                            : "bg-slate-200/80 text-slate-600"
                        }`}
                      >
                        {item.others.symbol}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-slate-600 leading-snug">
                      {item.others.value}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- DESKTOP VIEW: Full 3-Column Table (>= md screens) --- */}
        <div
          id="comparison-desktop-table"
          role="table"
          aria-label={t.title}
          className="comparison-desktop-table hidden md:block rounded-3xl border border-slate-200/80 bg-white shadow-elevated overflow-hidden"
        >
          {/* Table Header Row */}
          <div role="rowgroup" className="comparison-table-head">
            <div role="row" className="grid grid-cols-12 bg-slate-900 text-white font-bold text-sm sm:text-base border-b border-slate-800">
              <div role="columnheader" className="col-span-4 p-4 lg:p-4.5 flex items-center">
                <span className="text-slate-300 font-bold uppercase tracking-wider text-xs">
                  {locale === "ja" ? "項目 / 条件" : locale === "vi" ? "Tiêu chí so sánh" : "Features & Standards"}
                </span>
              </div>
              <div role="columnheader" className="col-span-4 p-3.5 lg:p-4 bg-sky-800 flex items-center justify-between border-x border-sky-700/60">
                <div className="flex items-center gap-2">
                  <Award className="size-4 text-amber-400 shrink-0" />
                  <span className="text-white font-black text-xs sm:text-sm lg:text-base">{t.nktnLabel}</span>
                </div>
                <span className="inline-flex items-center rounded-md bg-amber-400 px-2 py-0.5 text-[10px] font-black text-slate-900">
                  RECOMMENDED
                </span>
              </div>
              <div role="columnheader" className="col-span-4 p-3.5 lg:p-4 bg-slate-800/80 flex items-center">
                <span className="text-slate-400 font-medium text-xs sm:text-sm">{t.othersLabel}</span>
              </div>
            </div>
          </div>

          {/* Table Rows */}
          <div role="rowgroup" className="comparison-table-body divide-y divide-slate-100">
            {t.features.map((item, idx) => (
              <div
                role="row"
                key={item.title}
                className={`comparison-row grid grid-cols-12 transition-colors duration-200 hover:bg-sky-50/30 ${
                  idx % 2 === 1 ? "bg-slate-50/40" : "bg-white"
                }`}
              >
                {/* Feature Column */}
                <div role="rowheader" className="col-span-4 p-3.5 lg:p-4 flex flex-col justify-center">
                  <span className="font-extrabold text-slate-900 text-xs sm:text-sm">
                    {item.title}
                  </span>
                  <span className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                    {item.desc}
                  </span>
                </div>

                {/* NKTN Column (Highlight) */}
                <div role="cell" className="col-span-4 p-3.5 lg:p-4 bg-sky-50/70 border-x border-sky-100 flex items-center gap-2.5">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-sky-800 text-white font-black text-xs shadow-sm">
                    {item.nktn.symbol}
                  </span>
                  <div>
                    <span className="font-bold text-sky-950 text-xs sm:text-sm leading-snug">
                      {item.nktn.value}
                    </span>
                  </div>
                </div>

                {/* Others Column */}
                <div role="cell" className="col-span-4 p-3.5 lg:p-4 flex items-center gap-2.5 text-slate-500">
                  <span
                    className={`grid size-6 shrink-0 place-items-center rounded-full text-[11px] font-bold ${
                      item.others.symbol === "✕"
                        ? "bg-rose-50 text-rose-600 border border-rose-100"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {item.others.symbol}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-600 leading-snug">
                    {item.others.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Proof Gallery */}
        <div id="comparison-visual-proof" className="comparison-visual-proof mt-8 grid grid-cols-3 gap-2 sm:gap-4">
          {[
            { src: "/works/photo-room.jpg", caption: locale === "ja" ? "仕上がり客室" : locale === "vi" ? "Phòng hoàn thiện" : "Finished Room" },
            { src: "/works/photo-bathroom.jpg", caption: locale === "ja" ? "水回り清掃" : locale === "vi" ? "Vệ sinh chuyên sâu" : "Bathroom Deep Clean" },
            { src: "/works/photo-report.jpg", caption: locale === "ja" ? "写真報告" : locale === "vi" ? "Báo cáo ảnh 100%" : "Photo Report" },
          ].map((item) => (
            <div key={item.src} className="proof-photo-card relative aspect-[3/2] rounded-xl overflow-hidden shadow-xs group">
              <Image
                src={item.src}
                alt={item.caption}
                fill
                className="proof-photo-image object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 33vw, 250px"
              />
              <div className="proof-photo-overlay absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
              <span className="proof-photo-caption absolute bottom-2 sm:bottom-2.5 left-2 sm:left-3 text-[10px] sm:text-[11px] font-black text-white drop-shadow-md">
                {item.caption}
              </span>
            </div>
          ))}
        </div>

        {/* Trust summary box below table */}
        <div id="comparison-trust-summary" className="comparison-trust-summary mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="trust-box flex items-center gap-3 rounded-2xl bg-white p-4 border border-slate-200/80 shadow-soft">
            <div className="grid size-10 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
              <ShieldCheck className="size-5" />
            </div>
            <div>
              <p className="text-xs font-black text-slate-900">
                {locale === "ja" ? "損害保険 100% 完備" : locale === "vi" ? "Bảo hiểm bồi thường 100%" : "Fully Insured Guarantee"}
              </p>
              <p className="text-[11px] text-slate-500">
                {locale === "ja" ? "万が一のトラブルも迅速補償" : locale === "vi" ? "Bồi thường nhanh chóng khi có sự cố" : "Total protection for your assets"}
              </p>
            </div>
          </div>

          <div className="trust-box flex items-center gap-3 rounded-2xl bg-white p-4 border border-slate-200/80 shadow-soft">
            <div className="grid size-10 place-items-center rounded-xl bg-sky-50 text-sky-700">
              <Sparkles className="size-5" />
            </div>
            <div>
              <p className="text-xs font-black text-slate-900">
                {locale === "ja" ? "リピート率 95.8%" : locale === "vi" ? "Tỷ lệ gia hạn 95.8%" : "95.8% Partner Retention"}
              </p>
              <p className="text-[11px] text-slate-500">
                {locale === "ja" ? "関西全域のオーナー様から信頼" : locale === "vi" ? "Được tin tưởng bởi chủ nhà khắp Kansai" : "Trusted across Osaka & Kansai"}
              </p>
            </div>
          </div>

          <div className="trust-box flex items-center gap-3 rounded-2xl bg-white p-4 border border-slate-200/80 shadow-soft">
            <div className="grid size-10 place-items-center rounded-xl bg-amber-50 text-amber-700">
              <Award className="size-5" />
            </div>
            <div>
              <p className="text-xs font-black text-slate-900">
                {locale === "ja" ? "インボイス適格請求書対応" : locale === "vi" ? "Hóa đơn thuế chuẩn Nhật (Invoice)" : "Tax Qualified Invoice"}
              </p>
              <p className="text-[11px] text-slate-500">
                {locale === "ja" ? "法人経理・税務処理もスムーズ" : locale === "vi" ? "Khấu trừ chi phí doanh nghiệp minh bạch" : "Registered Japanese Corporate"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

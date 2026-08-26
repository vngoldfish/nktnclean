import Link from "next/link";
import { ArrowRight, Mail, MessageCircle, Phone, MapPin } from "lucide-react";

import { type Locale } from "@/lib/i18n";
import { companyBase, getContent } from "@/lib/site-data-i18n";
import { pageMetadata } from "@/lib/seo";
import { PageHeroHeader } from "@/components/ui/page-hero-header";
import { FloatingContactVertical } from "@/components/ui/floating-contact-vertical";
import { CtaContactBand } from "@/components/home/cta-contact-band";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = getContent(locale);
  return pageMetadata(locale, "/contact", content.contactPage.title, content.contactPage.lead);
}

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = getContent(locale);

  return (
    <main id="contact-page-main" className="contact-page-main site-shell">
      {/* Desktop Vertical Tab + Mobile Sticky Dock */}
      <FloatingContactVertical locale={locale} />

      {/* Corporate Page Hero Header */}
      <PageHeroHeader
        locale={locale}
        enTitle="INQUIRY & CONTACT"
        jpTitle={content.contactPage.title}
        lead={content.contactPage.lead}
        currentPathName={content.contactPage.badge}
        bgImage="/works/photo-training-session.jpg"
      />

      {/* Main Contact Channels */}
      <section id="contact-channels-section" className="section-contact-channels py-20 px-5 sm:px-8 bg-[#F6F6F6] border-b border-slate-200/80">
        <div className="contact-channels-container mx-auto max-w-5xl space-y-10">
          
          {/* Main Giant LINE Action Card (Preferred in Japan) */}
          <div id="contact-line-hero-card" className="contact-line-hero-card rounded-3xl bg-white p-8 sm:p-12 border border-slate-200/80 shadow-sm text-center">
            <span className="line-badge-fast inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-4 py-1 text-xs font-black text-emerald-800 uppercase mb-4">
              <MessageCircle className="size-3.5 text-[#06C755]" />
              {locale === "ja" ? "推奨・最短15分で返信" : locale === "vi" ? "Khuyên dùng • Phản hồi sau 15 phút" : "Recommended Fast Channel"}
            </span>
            <h2 className="line-hero-title font-serif-jp text-2xl sm:text-4xl font-black text-slate-900 mb-3">
              {locale === "ja" ? "LINE公式アカウントで簡単相談・お見積もり" : locale === "vi" ? "Tư Vấn & Báo Giá Nhanh Qua LINE Chính Thức" : "Direct Fast Consultation via LINE"}
            </h2>
            <p className="line-hero-desc text-slate-600 text-xs sm:text-sm max-w-xl mx-auto mb-8">
              {locale === "ja" 
                ? "お部屋の間取り・写真・ご希望の日時を送信するだけで、概算お見積もりを即座にお出しします。" 
                : locale === "vi"
                ? "Chỉ cần gửi sơ đồ phòng, hình ảnh thực tế và thời gian mong muốn để nhận báo giá dự toán ngay lập tức."
                : "Send room photos, floor plans, and dates for an instant quote."}
            </p>

            <Link
              id="contact-btn-line-main"
              href={companyBase.lineUrl}
              className="contact-btn-line-main inline-flex items-center justify-center gap-3 rounded-2xl bg-[#06C755] px-10 py-5 text-base sm:text-lg font-black text-white shadow-glow-green hover:bg-[#05b04c] hover:scale-[1.02] transition-all"
              data-analytics="contact_page_line_hero"
            >
              <MessageCircle className="size-6" />
              <span>{content.common.lineConsultLong}</span>
              <ArrowRight className="size-5" />
            </Link>

            <div className="line-meta-info mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 font-bold">
              <span>LINE ID: <strong className="text-slate-800">{companyBase.lineId}</strong></span>
              <span>•</span>
              <span>{locale === "ja" ? "24時間受付中" : "24/7 Intake"}</span>
            </div>
          </div>

          {/* Secondary Direct Channels (Phone & Email) */}
          <div id="contact-secondary-grid" className="contact-secondary-grid grid sm:grid-cols-2 gap-6">
            
            {/* Phone Card */}
            <div id="contact-phone-card" className="contact-phone-card rounded-2xl bg-white p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-slate-400 text-xs font-black uppercase mb-2">
                  <Phone className="size-4 text-[#00729F]" />
                  <span>{content.common.phone}</span>
                </div>
                <h3 className="phone-card-title font-serif-jp text-xl font-black text-slate-900">
                  {locale === "ja" ? "お電話でのご相談" : locale === "vi" ? "Tư Vấn Qua Điện Thoại" : "Phone Inquiries"}
                </h3>
                <p className="phone-card-hours text-xs text-slate-500 mt-1">
                  {content.topBar.hours}
                </p>
                <p className="phone-card-number font-serif-jp text-2xl sm:text-3xl font-black text-[#00729F] tracking-wide mt-4">
                  {companyBase.phone}
                </p>
              </div>

              <div className="pt-6">
                <a
                  id="contact-btn-phone"
                  href={`tel:${companyBase.phone}`}
                  className="contact-btn-phone inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 w-full py-3.5 text-xs sm:text-sm font-black text-white transition"
                >
                  <Phone className="size-4" />
                  <span>{locale === "ja" ? "電話をかける" : locale === "vi" ? "Gọi điện ngay" : "Call Directly"}</span>
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div id="contact-email-card" className="contact-email-card rounded-2xl bg-white p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-slate-400 text-xs font-black uppercase mb-2">
                  <Mail className="size-4 text-[#00729F]" />
                  <span>{content.common.mail}</span>
                </div>
                <h3 className="email-card-title font-serif-jp text-xl font-black text-slate-900">
                  {locale === "ja" ? "メールでのお問い合わせ" : locale === "vi" ? "Gửi Thư Điện Tử (Email)" : "Email Inquiries"}
                </h3>
                <p className="email-card-time text-xs text-slate-500 mt-1">
                  {locale === "ja" ? "24時間受付（原則1営業日以内返信）" : locale === "vi" ? "Tiếp nhận 24/7 (Phản hồi trong 1 ngày làm việc)" : "Response within 1 business day"}
                </p>
                <p className="email-card-address text-sm sm:text-base font-bold text-slate-800 mt-4 break-all">
                  {companyBase.email}
                </p>
              </div>

              <div className="pt-6">
                <a
                  id="contact-btn-email"
                  href={`mailto:${companyBase.email}`}
                  className="contact-btn-email inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 hover:bg-slate-200 w-full py-3.5 text-xs sm:text-sm font-bold text-slate-800 transition"
                >
                  <Mail className="size-4" />
                  <span>{locale === "ja" ? "メールソフトを開く" : locale === "vi" ? "Mở ứng dụng Email" : "Send Email"}</span>
                </a>
              </div>
            </div>

          </div>

          {/* Location Map Box */}
          <div id="contact-location-box" className="contact-location-box rounded-2xl bg-white p-6 sm:p-8 border border-slate-200/80 shadow-sm overflow-hidden">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-black uppercase mb-2">
              <MapPin className="size-4 text-[#00729F]" />
              <span>ACCESS & LOCATION</span>
            </div>
            <h3 className="location-name font-serif-jp text-xl font-black text-slate-900 mb-2">
              {companyBase.name}
            </h3>
            <p className="location-address text-xs sm:text-sm text-slate-600 mb-6">
              {companyBase.location}
            </p>
            <div className="location-map-frame rounded-xl overflow-hidden border border-slate-200">
              <iframe
                title="NKTN Google Map"
                src="https://www.google.com/maps?q=大阪市西成区鶴見橋1丁目17-14-302&output=embed"
                className="h-80 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <CtaContactBand locale={locale} variant="dark" />
    </main>
  );
}

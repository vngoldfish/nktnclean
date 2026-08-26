import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Calendar, ChevronRight } from "lucide-react";

import { locales, type Locale, withLocale } from "@/lib/i18n";
import { companyBase, getContent } from "@/lib/site-data-i18n";
import { articleJsonLd, breadcrumbJsonLd, jsonLd, localizedPath, pageAlternates } from "@/lib/seo";
import { FloatingContactVertical } from "@/components/ui/floating-contact-vertical";
import { CtaContactBand } from "@/components/home/cta-contact-band";

const blogImageMap: Record<string, string> = {
  "stable-cleaning-quality": "/blog/quality-control.jpg",
  "minpaku-water-area-check": "/blog/water-area.jpg",
  "photo-report-cleaning-company": "/blog/photo-report.jpg",
  "busy-season-cleaning-operations": "/blog/busy-season.jpg",
};

export function generateStaticParams() {
  return locales.flatMap((locale) => getContent(locale).blogPosts.map((post) => ({ locale, slug: post.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;
  const content = getContent(locale);
  const post = content.blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  const path = `/blog/${post.slug}`;
  const imageSrc = blogImageMap[post.slug] || post.image;

  return {
    title: `${post.title} | ${companyBase.name} Column`,
    description: post.excerpt,
    alternates: pageAlternates(locale, path),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: localizedPath(locale, path),
      type: "article",
      images: [{ url: imageSrc, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [imageSrc],
    },
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;
  const content = getContent(locale);
  const post = content.blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const imageSrc = blogImageMap[post.slug] || post.image;
  const relatedPosts = content.blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const breadcrumb = breadcrumbJsonLd(locale, [{ name: content.nav[0][0], path: "" }, { name: content.blogPage.badge, path: "/blog" }, { name: post.title, path: `/blog/${post.slug}` }]);
  const article = articleJsonLd(locale, slug);

  return (
    <main id="blog-detail-main" className="blog-detail-main site-shell">
      {article && <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(article)} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumb)} />

      {/* Floating Vertical Contact Buttons */}
      <FloatingContactVertical locale={locale} />

      {/* Header Breadcrumb & Back */}
      <section id="blog-detail-header" className="blog-detail-header bg-[#071224] text-white py-12 px-5 sm:px-8 border-b border-white/10">
        <div className="blog-header-container mx-auto max-w-5xl">
          <nav id="blog-breadcrumbs" aria-label="Breadcrumb" className="blog-breadcrumbs mb-4 flex items-center gap-2 text-xs font-bold text-slate-300">
            <Link href={withLocale(locale, "/")} className="hover:text-white transition">Home</Link>
            <ChevronRight className="size-3.5 text-[#19BAD7]" />
            <Link href={withLocale(locale, "/blog")} className="hover:text-white transition">{content.blogPage.badge}</Link>
            <ChevronRight className="size-3.5 text-[#19BAD7]" />
            <span className="text-[#19BAD7] truncate max-w-xs">{post.title}</span>
          </nav>

          <div className="blog-meta-tags flex items-center gap-3 mb-4">
            <span className="blog-tag-category rounded-md bg-[#00729F] px-3 py-1 text-xs font-black text-white uppercase tracking-wider">
              {post.category}
            </span>
            <span className="blog-tag-date text-xs font-bold text-slate-300 flex items-center gap-1">
              <Calendar className="size-3 text-[#19BAD7]" /> {post.date}
            </span>
          </div>

          <h1 className="blog-article-title font-serif-jp text-2xl sm:text-4xl lg:text-5xl font-black leading-tight text-white">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Article Body */}
      <article id="blog-article-body" className="blog-article-body py-16 px-5 sm:px-8 bg-[#F6F6F6] border-b border-slate-200/80">
        <div className="article-container mx-auto max-w-5xl grid gap-10 lg:grid-cols-12 items-start">
          
          {/* Main Column (8 cols) */}
          <div id="article-main-column" className="article-main-column lg:col-span-8 rounded-2xl bg-white p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-8">
            
            {/* Featured Image */}
            <div className="article-featured-image-wrapper relative aspect-[16/9] w-full rounded-xl overflow-hidden shadow-xs">
              <Image src={imageSrc} alt={post.title} fill className="article-featured-image object-cover" priority sizes="(max-width: 1024px) 100vw, 700px" />
            </div>

            {/* Excerpt */}
            <p className="article-lead-excerpt text-sm sm:text-base font-bold text-slate-700 leading-relaxed border-l-4 border-[#00729F] pl-4 py-1 bg-sky-50/50">
              {post.excerpt}
            </p>

            {/* Key Points */}
            <div id="article-key-checkpoints" className="article-key-checkpoints space-y-2.5 pt-2">
              <p className="font-serif-jp text-xs font-black tracking-widest text-[#00729F] uppercase">
                KEY CHECKPOINTS
              </p>
              {post.points.map((point, idx) => (
                <div key={point} id={`checkpoint-item-${idx + 1}`} className="checkpoint-item flex items-start gap-2.5 rounded-lg bg-[#F6F6F6] p-3.5 text-xs sm:text-sm font-bold text-slate-800">
                  <CheckCircle2 className="size-4 text-[#19BAD7] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Sections */}
            <div id="article-content-sections" className="article-content-sections space-y-8 pt-6 border-t border-slate-100">
              {post.sections.map(([heading, body], sIdx) => (
                <section key={heading} id={`article-section-${sIdx + 1}`} className="article-section-block space-y-3">
                  <h2 className="section-heading font-serif-jp text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                    {heading}
                  </h2>
                  <p className="section-paragraph text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                    {body}
                  </p>
                </section>
              ))}
            </div>

            {/* Evidence Note Box */}
            <div id="article-quality-promise" className="article-quality-promise rounded-xl bg-gradient-to-r from-[#00466D] to-[#00729F] p-6 text-white shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="size-5 text-[#19BAD7]" />
                <span className="font-serif-jp text-xs font-black tracking-widest uppercase">NKTN QUALITY PROMISE</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">{post.evidence}</p>
            </div>

            {/* Back Button */}
            <div className="article-back-wrap pt-4 border-t border-slate-100">
              <Link
                id="blog-back-link"
                href={withLocale(locale, "/blog")}
                className="blog-back-link inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#00729F] hover:underline"
              >
                <ArrowLeft className="size-4" />
                <span>{content.common.backBlog}</span>
              </Link>
            </div>
          </div>

          {/* Sidebar Column (4 cols) */}
          <aside id="article-sidebar" className="article-sidebar lg:col-span-4 space-y-6">
            {/* Quick Contact Card */}
            <div id="sidebar-contact-card" className="sidebar-contact-card rounded-2xl bg-white p-6 border border-slate-200/80 shadow-sm">
              <p className="font-serif-jp text-xs font-black tracking-widest text-[#00729F] uppercase mb-1">
                CONTACT
              </p>
              <h3 className="font-serif-jp text-lg font-black text-slate-900 mb-2">
                {content.blogPage.contactTitle}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {content.blogPage.contactLead}
              </p>
              <Link
                id="sidebar-line-btn"
                href={companyBase.lineUrl}
                className="sidebar-line-btn inline-flex items-center justify-center gap-2 w-full rounded-xl bg-[#06C755] hover:bg-[#05b04c] py-3 text-xs font-black text-white shadow-xs transition"
              >
                <span>{content.common.lineConsult}</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>

            {/* Related Posts */}
            <div id="sidebar-related-card" className="sidebar-related-card rounded-2xl bg-white p-6 border border-slate-200/80 shadow-sm">
              <p className="font-serif-jp text-xs font-black tracking-widest text-[#00729F] uppercase mb-3">
                RELATED ARTICLES
              </p>
              <div className="related-articles-list space-y-3">
                {relatedPosts.map((item) => (
                  <Link
                    key={item.slug}
                    id={`related-post-${item.slug}`}
                    href={withLocale(locale, `/blog/${item.slug}`)}
                    className="related-post-item block p-3 rounded-lg bg-[#F6F6F6] hover:bg-sky-50 transition border border-slate-100"
                  >
                    <p className="related-post-title font-serif-jp text-xs font-black text-slate-800 line-clamp-2 hover:text-[#00729F]">
                      {item.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </aside>

        </div>
      </article>

      {/* Final CTA */}
      <CtaContactBand locale={locale} variant="dark" />
    </main>
  );
}

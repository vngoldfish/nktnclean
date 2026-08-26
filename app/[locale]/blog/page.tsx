import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Clock, Calendar } from "lucide-react";

import { type Locale, withLocale } from "@/lib/i18n";
import { getContent } from "@/lib/site-data-i18n";
import { pageMetadata } from "@/lib/seo";
import { PageHeroHeader } from "@/components/ui/page-hero-header";
import { FloatingContactVertical } from "@/components/ui/floating-contact-vertical";
import { CtaContactBand } from "@/components/home/cta-contact-band";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = getContent(locale);
  return pageMetadata(locale, "/blog", content.blogPage.title, content.blogPage.lead);
}

const blogImageMap: Record<string, string> = {
  "stable-cleaning-quality": "/blog/quality-control.jpg",
  "minpaku-water-area-check": "/blog/water-area.jpg",
  "photo-report-cleaning-company": "/blog/photo-report.jpg",
  "busy-season-cleaning-operations": "/blog/busy-season.jpg",
};

export default async function BlogPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = getContent(locale);

  return (
    <main className="site-shell">
      {/* Floating Vertical Contact Buttons */}
      <FloatingContactVertical locale={locale} />

      {/* Page Hero Header */}
      <PageHeroHeader
        locale={locale}
        enTitle="COLUMN & INSIGHTS"
        jpTitle={content.blogPage.title}
        lead={content.blogPage.lead}
        currentPathName={content.blogPage.badge}
        bgImage="/blog/quality-control.jpg"
      />

      {/* Blog Cards Grid */}
      <section className="py-20 px-5 sm:px-8 bg-[#F6F6F6] border-b border-slate-200/80">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2">
            {content.blogPosts.map((post, index) => {
              const imageSrc = blogImageMap[post.slug] || post.image;
              return (
                <Link
                  key={post.title}
                  href={withLocale(locale, `/blog/${post.slug}`)}
                  className="group rounded-2xl bg-white border border-slate-200/80 overflow-hidden hover:border-[#00729F] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Thumbnail Image */}
                    <div className="relative h-60 w-full overflow-hidden">
                      <Image
                        src={imageSrc}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 550px"
                      />
                      <span className="absolute top-4 left-4 rounded-md bg-[#00729F] px-3 py-1 text-xs font-black text-white shadow-xs">
                        {post.category}
                      </span>
                    </div>

                    {/* Meta & Content */}
                    <div className="p-6 sm:p-8">
                      <div className="flex items-center gap-4 text-xs font-bold text-slate-400 mb-3">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="size-3.5 text-[#00729F]" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="size-3.5 text-[#00729F]" />
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="font-serif-jp text-xl sm:text-2xl font-black text-slate-900 leading-snug group-hover:text-[#00729F] transition-colors mb-3">
                        {post.title}
                      </h2>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Read Article Action */}
                  <div className="p-6 sm:p-8 pt-0 flex items-center text-xs font-black text-[#00729F] group-hover:translate-x-1 transition-transform">
                    <span>{content.common.readMore}</span>
                    <ChevronRight className="size-4 ml-0.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CtaContactBand locale={locale} variant="dark" />
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CtaContactBand } from "@/components/home/cta-contact-band";
import { type Locale, withLocale } from "@/lib/i18n";
import { getContent } from "@/lib/site-data-i18n";
import { pageMetadata } from "@/lib/seo";

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
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <p className="text-amber-600 text-sm font-black tracking-widest mb-3">{content.blogPage.badge}</p>
        <h1 className="max-w-6xl text-balance text-4xl font-black leading-[1.08] tracking-[-0.04em] sm:text-6xl">{content.blogPage.title}</h1>
        <p className="mt-8 max-w-3xl text-base leading-8 text-nktn-ink/68">{content.blogPage.lead}</p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {content.blogPosts.map((post, index) => {
            const imageSrc = blogImageMap[post.slug] || post.image;
            return (
              <Card key={post.title} className="group overflow-hidden p-0 transition hover:-translate-y-1 hover:shadow-xl">
                <Link href={withLocale(locale, `/blog/${post.slug}`)} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nktn-blue">
                  <Image src={imageSrc} alt={post.title} width={900} height={620} className="h-72 w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                <div className="p-7 lg:p-9">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge variant={index % 2 === 0 ? "blue" : "orange"} className={index % 2 !== 0 ? "bg-amber-500 text-white" : ""}>{post.category}</Badge>
                    <span className="text-sm font-bold text-nktn-ink/45">{post.date}</span>
                    <span className="text-sm font-bold text-nktn-ink/45">{post.readTime}</span>
                  </div>
                  <h2 className="mt-8 text-3xl font-black tracking-[-0.04em]">{post.title}</h2>
                  <p className="mt-5 leading-8 text-nktn-ink/66">{post.excerpt}</p>
                  <div className="mt-8 grid gap-3">
                    {post.points.slice(0, 2).map((point) => <div key={point} className="flex gap-3 rounded-2xl bg-nktn-cream p-4 font-bold leading-7 text-nktn-ink/72"><CheckCircle2 className="mt-1 size-5 shrink-0 text-sky-800" />{point}</div>)}
                  </div>
                  <div className="mt-8 inline-flex items-center gap-2 font-black text-sky-800">{content.common.readMore} <ArrowRight className="size-4" /></div>
                </div>
              </Link>
            </Card>
          );
        })}
        </div>
      </section>

      <CtaContactBand locale={locale} />
    </main>
  );
}

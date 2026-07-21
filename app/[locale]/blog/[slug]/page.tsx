import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { locales, type Locale, withLocale } from "@/lib/i18n";
import { companyBase, getContent } from "@/lib/site-data-i18n";
import { articleJsonLd, breadcrumbJsonLd, jsonLd, localizedPath, pageAlternates } from "@/lib/seo";

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
    title: `${post.title} | ${companyBase.name} Blog`,
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
    <main className="site-shell">
      {article && <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(article)} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumb)} />
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:py-16">
        <Button variant="secondary" asChild><Link href={withLocale(locale, "/blog")}><ArrowLeft className="size-4" /> {content.common.backBlog}</Link></Button>
      </section>

      <article>
        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="orange">{post.category}</Badge>
                <span className="text-sm font-bold text-nktn-ink/45">{post.date}</span>
                <span className="text-sm font-bold text-nktn-ink/45">{post.readTime}</span>
              </div>
              <h1 className="mt-8 text-balance text-4xl font-black leading-[1.08] tracking-[-0.04em] sm:text-6xl">{post.title}</h1>
              <p className="mt-8 text-base leading-8 text-nktn-ink/68">{post.excerpt}</p>
            </div>
            <Card className="overflow-hidden p-0">
              <Image src={imageSrc} alt={post.title} width={900} height={620} className="h-[28rem] w-full object-cover" priority />
            </Card>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-24 sm:px-8 lg:grid-cols-[1fr_22rem]">
          <div className="rounded-[2.5rem] bg-white p-7 shadow-soft lg:p-10">
            <div className="grid gap-4">
              {post.points.map((point) => <div key={point} className="flex gap-3 rounded-2xl bg-nktn-cream p-4 font-black leading-7 text-nktn-ink/74"><CheckCircle2 className="mt-1 size-5 shrink-0 text-sky-800" />{point}</div>)}
            </div>

            <div className="mt-12 space-y-12">
              {post.sections.map(([heading, body]) => (
                <section key={heading}>
                  <h2 className="text-3xl font-black tracking-[-0.04em]">{heading}</h2>
                  <p className="mt-5 text-base leading-8 text-nktn-ink/68">{body}</p>
                </section>
              ))}
            </div>

            <div className="mt-12 rounded-[2rem] bg-gradient-to-br from-sky-800 to-sky-900 p-7 text-white">
              <div className="flex gap-4">
                <ShieldCheck className="mt-1 size-7 shrink-0 text-amber-500" />
                <div>
                  <p className="font-black tracking-[0.16em] text-white/50">NKTN NOTE</p>
                  <p className="mt-3 leading-8 text-white/72">{post.evidence}</p>
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-5">
            <Card className="p-6">
              <p className="text-sm font-black tracking-[0.18em] text-sky-800">CONTACT</p>
              <h2 className="mt-5 text-2xl font-black tracking-[-0.04em]">{content.blogPage.contactTitle}</h2>
              <p className="mt-4 leading-7 text-nktn-ink/62">{content.blogPage.contactLead}</p>
              <Button className="mt-6 w-full bg-[#06C755] hover:bg-[#05b04c] text-white" asChild><Link href={companyBase.lineUrl}>{content.common.lineConsult} <ArrowRight className="size-4" /></Link></Button>
              <Button className="mt-3 w-full" variant="secondary" asChild><Link href={`mailto:${companyBase.email}`}>{content.common.emailConsult}</Link></Button>
            </Card>

            <Card className="p-6">
              <p className="text-sm font-black tracking-[0.18em] text-amber-500">RELATED</p>
              <div className="mt-5 space-y-4">
                {relatedPosts.map((item) => <Link key={item.slug} href={withLocale(locale, `/blog/${item.slug}`)} className="block rounded-2xl bg-nktn-cream p-4 font-black leading-7 transition hover:bg-amber-100">{item.title}</Link>)}
              </div>
            </Card>
          </aside>
        </section>
      </article>
    </main>
  );
}

import { LocaleRedirect } from "@/components/locale-redirect";
import { getContent } from "@/lib/site-data-i18n";
import { defaultLocale } from "@/lib/i18n";

export function generateStaticParams() {
  return getContent(defaultLocale).blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailRedirect({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return <LocaleRedirect path={`/blog/${slug}`} />;
}

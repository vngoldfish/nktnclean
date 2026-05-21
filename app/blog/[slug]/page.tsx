import { LocaleRedirect } from "@/components/locale-redirect";

export default async function BlogDetailRedirect({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return <LocaleRedirect path={`/blog/${slug}`} />;
}

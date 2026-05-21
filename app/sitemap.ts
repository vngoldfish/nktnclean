import type { MetadataRoute } from "next";

import { locales } from "@/lib/i18n";
import { getContent } from "@/lib/site-data-i18n";
import { absoluteUrl, localizedPath, staticPaths } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = locales.flatMap((locale) =>
    staticPaths.map((path) => ({
      url: absoluteUrl(localizedPath(locale, path)),
      lastModified: now,
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : path === "/contact" ? 0.9 : 0.7,
    } satisfies MetadataRoute.Sitemap[number])),
  );

  const posts = locales.flatMap((locale) =>
    getContent(locale).blogPosts.map((post) => ({
      url: absoluteUrl(localizedPath(locale, `/blog/${post.slug}`)),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    } satisfies MetadataRoute.Sitemap[number])),
  );

  return [
    {
      url: absoluteUrl("/llms.txt"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    ...pages,
    ...posts,
  ];
}

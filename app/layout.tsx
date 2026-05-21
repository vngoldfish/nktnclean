import type { Metadata, Viewport } from "next";

import { siteUrl } from "@/lib/seo";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "株式会社NKTN | Bawui Cleaning - 全国対応のCleaning + DX",
    template: "%s | 株式会社NKTN / Bawui Cleaning",
  },
  description:
    "大阪市西成区を拠点に、全国のホテル・民泊客室清掃と現場管理DXを一体で支える株式会社NKTN / Bawui Cleaningの公式サイトです。",
  applicationName: "Bawui Cleaning",
  authors: [{ name: "株式会社NKTN" }],
  creator: "株式会社NKTN",
  publisher: "株式会社NKTN",
  category: "cleaning services",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/favicon.svg",
    apple: "/logo.png",
  },
  openGraph: {
    title: "株式会社NKTN | Bawui Cleaning",
    description:
      "ホテル・民泊客室清掃、現場管理、Cleaning DXを支える株式会社NKTNの公式サイトです。",
    url: "/ja",
    siteName: "株式会社NKTN / Bawui Cleaning",
    type: "website",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "株式会社NKTN / Bawui Cleaning" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F8FBFD",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}

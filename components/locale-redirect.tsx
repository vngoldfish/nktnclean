"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { defaultLocale, isLocale } from "@/lib/i18n";

export function LocaleRedirect({ path = "" }: { path?: string }) {
  const router = useRouter();

  useEffect(() => {
    const preferredLocale = window.localStorage.getItem("preferredLocale");
    const locale = preferredLocale && isLocale(preferredLocale) ? preferredLocale : defaultLocale;
    router.replace(`/${locale}${path}`);
  }, [path, router]);

  return null;
}

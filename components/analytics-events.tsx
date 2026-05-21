"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (command: string, eventName: string, parameters?: Record<string, string>) => void;
  }
}

export function AnalyticsEvents() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-analytics]") : null;

      if (!target?.dataset.analytics || !window.gtag) {
        return;
      }

      window.gtag("event", target.dataset.analytics, {
        link_url: target instanceof HTMLAnchorElement ? target.href : "",
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}

"use client";

import { useEffect } from "react";

/**
 * ScrollAnimationInitializer
 * Applies IntersectionObserver to all .reveal-on-scroll elements on the page.
 * Place this once in the layout or page to auto-animate sections on scroll.
 */
export function ScrollAnimationInitializer() {
  useEffect(() => {
    // Respect reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (prefersReduced) {
              (entry.target as HTMLElement).style.opacity = "1";
              (entry.target as HTMLElement).style.transform = "none";
            } else {
              entry.target.classList.add("revealed");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    // Observe all reveal-on-scroll elements
    const targets = document.querySelectorAll(".reveal-on-scroll");
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}

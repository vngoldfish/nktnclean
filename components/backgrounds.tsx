import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const backgroundVariants = cva("", {
  variants: {
    variant: {
      "clean-white": "bg-clean-white",
      "fresh-blue": "bg-fresh-blue text-white",
      "fresh-blue-light": "bg-fresh-blue-light",
      "trust-green": "bg-trust-green",
      "pro-gray": "bg-pro-gray",
      "hero-premium": "bg-hero-premium text-white",
      "service-card": "bg-service-card rounded-3xl p-8",
      "stat-card": "bg-stat-card rounded-2xl p-6",
      "cta-professional": "bg-cta-professional text-white",
      "fresh-bubbles": "bg-fresh-bubbles",
      "clean-pattern": "bg-clean-pattern",
    },
  },
  defaultVariants: {
    variant: "clean-white",
  },
});

interface BackgroundProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof backgroundVariants> {
  children?: React.ReactNode;
}

// Unified Background component with CVA variants
export function Background({
  variant,
  className,
  children,
  ...props
}: BackgroundProps) {
  return (
    <section
      className={cn(backgroundVariants({ variant }), className)}
      {...props}
    >
      {children}
    </section>
  );
}

// ---------------------------------------------------------------------------
// Backward-compatible named exports
// ---------------------------------------------------------------------------

// Clean White Background - Pure & Professional
export const CleanWhiteBackground = (
  props: Omit<BackgroundProps, "variant">
) => <Background variant="clean-white" {...props} />;

// Fresh Blue Background - Trust & Cleanliness
export const FreshBlueBackground = (
  props: Omit<BackgroundProps, "variant">
) => <Background variant="fresh-blue" {...props} />;

// Fresh Blue Light - Soft Professional
export const FreshBlueLightBackground = (
  props: Omit<BackgroundProps, "variant">
) => <Background variant="fresh-blue-light" {...props} />;

// Trust Green Background - Fresh & Reliable
export const TrustGreenBackground = (
  props: Omit<BackgroundProps, "variant">
) => <Background variant="trust-green" {...props} />;

// Professional Gray - Corporate & Serious
export const ProGrayBackground = (
  props: Omit<BackgroundProps, "variant">
) => <Background variant="pro-gray" {...props} />;

// Hero Premium Background
export const HeroPremiumBackground = (
  props: Omit<BackgroundProps, "variant">
) => <Background variant="hero-premium" {...props} />;

// Service Card with Professional Shadow
export const ServiceCardBackground = (
  props: Omit<BackgroundProps, "variant">
) => <Background variant="service-card" {...props} />;

// Stat Card Background
export const StatCardBackground = (
  props: Omit<BackgroundProps, "variant">
) => <Background variant="stat-card" {...props} />;

// CTA Professional Background
export const CTAProfessionalBackground = (
  props: Omit<BackgroundProps, "variant">
) => <Background variant="cta-professional" {...props} />;

// Fresh Bubbles Background
export const FreshBubblesBackground = (
  props: Omit<BackgroundProps, "variant">
) => <Background variant="fresh-bubbles" {...props} />;

// Background with Clean Pattern
export const CleanPatternBackground = (
  props: Omit<BackgroundProps, "variant">
) => <Background variant="clean-pattern" {...props} />;

export { backgroundVariants, type BackgroundProps };
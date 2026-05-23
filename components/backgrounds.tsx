import React from "react";

interface BackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

// Clean White Background - Pure & Professional
export function CleanWhiteBackground({ className = "", children }: BackgroundProps) {
  return (
    <div className={`bg-clean-white ${className}`}>
      {children}
    </div>
  );
}

// Fresh Blue Background - Trust & Cleanliness
export function FreshBlueBackground({ className = "", children }: BackgroundProps) {
  return (
    <div className={`bg-fresh-blue text-white ${className}`}>
      {children}
    </div>
  );
}

// Fresh Blue Light - Soft Professional
export function FreshBlueLightBackground({ className = "", children }: BackgroundProps) {
  return (
    <div className={`bg-fresh-blue-light ${className}`}>
      {children}
    </div>
  );
}

// Trust Green Background - Fresh & Reliable
export function TrustGreenBackground({ className = "", children }: BackgroundProps) {
  return (
    <div className={`bg-trust-green ${className}`}>
      {children}
    </div>
  );
}

// Professional Gray - Corporate & Serious
export function ProGrayBackground({ className = "", children }: BackgroundProps) {
  return (
    <div className={`bg-pro-gray ${className}`}>
      {children}
    </div>
  );
}

// Hero Premium Background
export function HeroPremiumBackground({ className = "", children }: BackgroundProps) {
  return (
    <div className={`bg-hero-premium text-white ${className}`}>
      {children}
    </div>
  );
}

// Service Card with Professional Shadow
export function ServiceCardBackground({ className = "", children }: BackgroundProps) {
  return (
    <div className={`bg-service-card rounded-3xl p-8 ${className}`}>
      {children}
    </div>
  );
}

// Stat Card Background
export function StatCardBackground({ className = "", children }: BackgroundProps) {
  return (
    <div className={`bg-stat-card rounded-2xl p-6 ${className}`}>
      {children}
    </div>
  );
}

// CTA Professional Background
export function CTAProfessionalBackground({ className = "", children }: BackgroundProps) {
  return (
    <div className={`bg-cta-professional text-white ${className}`}>
      {children}
    </div>
  );
}

// Fresh Bubbles Background
export function FreshBubblesBackground({ className = "", children }: BackgroundProps) {
  return (
    <div className={`bg-fresh-bubbles ${className}`}>
      {children}
    </div>
  );
}

// Background with Clean Pattern
export function CleanPatternBackground({ className = "", children }: BackgroundProps) {
  return (
    <div className={`bg-clean-pattern ${className}`}>
      {children}
    </div>
  );
}
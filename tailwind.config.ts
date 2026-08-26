import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        nktn: {
          green: "#047857",
          blue: "#1E3A8A",
          cream: "#F8FAFC",
          ink: "#1E293B",
          orange: "#F59E0B",
          sky: "#0284C7",
          navy: "#0C4A6E",
        },
        super: {
          blue: "#00729F",
          darkBlue: "#00466D",
          navy: "#00008C",
          cyan: "#19BAD7",
          light: "#F6F6F6",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(15, 23, 42, 0.05)",
        glass: "0 4px 16px -2px rgba(30, 58, 138, 0.05)",
        elevated: "0 10px 30px -4px rgba(15, 23, 42, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.04)",
        glow: "0 0 25px -5px rgba(2, 132, 199, 0.25)",
        "glow-green": "0 0 25px -5px rgba(6, 199, 85, 0.35)",
        "subtle-card": "0 1px 3px rgba(0,0,0,0.05), 0 10px 24px -6px rgba(15, 23, 42, 0.04)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;

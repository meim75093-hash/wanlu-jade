import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        parchment: "#ffffff",
        "parchment-soft": "#fafafa",
        ivory: "#ffffff",
        ink: "#0a0a0a",
        "ink-soft": "#1a1a1a",
        "ink-muted": "#666666",
        hairline: "#e5e5e5",
        "hairline-soft": "#f0f0f0",
        celadon: "#0abab5",
        "celadon-soft": "#5ddbd5",
        stamp: "#b00020"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        boutique: ["var(--font-boutique)", "Didot", "Bodoni 72", "Georgia", "serif"],
        "display-cn": ["var(--font-display-cn)", "Georgia", "serif"]
      },
      letterSpacing: {
        seal: "0.32em",
        label: "0.28em",
        wide2: "0.18em"
      },
      boxShadow: {
        catalogue: "0 1px 0 rgba(21,17,13,0.08), 0 30px 60px -34px rgba(21,17,13,0.35)",
        plate: "0 1px 0 rgba(21,17,13,0.05), 0 60px 120px -60px rgba(21,17,13,0.5)"
      }
    }
  },
  plugins: []
};

export default config;

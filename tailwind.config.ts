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
        parchment: "#f4efe4",
        "parchment-soft": "#f9f5ec",
        ivory: "#ffffff",
        ink: "#15110d",
        "ink-soft": "#3d352c",
        "ink-muted": "#6b6357",
        hairline: "#d9d1bf",
        "hairline-soft": "#e8e0ce",
        celadon: "#2f4a3f",
        "celadon-soft": "#5c7a6b",
        stamp: "#8b2e22"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"]
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

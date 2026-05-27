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
        obsidian: "#070908",
        ink: "#101413",
        jade: "#00A67D",
        moss: "#315C48",
        celadon: "#B7E3CE",
        gold: "#D7B66D",
        bone: "#F3EEE2",
        cinnabar: "#B84B3F"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"]
      },
      boxShadow: {
        glow: "0 0 44px rgba(0, 166, 125, 0.22)",
        gold: "0 18px 70px rgba(215, 182, 109, 0.14)",
        card: "0 1px 0 rgba(255,255,255,0.04) inset, 0 24px 60px -28px rgba(0,0,0,0.8)",
        lift: "0 30px 80px -32px rgba(0,166,125,0.4), 0 1px 0 rgba(255,255,255,0.06) inset"
      },
      backgroundImage: {
        "stone-grain":
          "radial-gradient(circle at 20% 20%, rgba(183,227,206,.16), transparent 26%), radial-gradient(circle at 80% 0%, rgba(215,182,109,.12), transparent 22%), linear-gradient(135deg, rgba(255,255,255,.08) 0 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;

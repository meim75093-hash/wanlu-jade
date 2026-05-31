"use client";
import { useLanguage } from "@/context/language";

export function LanguageToggle() {
  const { lang, toggle } = useLanguage();
  return (
    <button
      aria-label="Switch language / 切换语言"
      className="inline-flex h-10 items-center gap-1 rounded-md border border-white/18 bg-white/8 px-3 text-xs font-semibold text-bone transition hover:border-gold/40 hover:bg-white/14 active:scale-95"
      onClick={toggle}
    >
      <span className={lang === "zh" ? "text-gold" : "text-bone/40"}>中</span>
      <span className="text-bone/22">/</span>
      <span className={lang === "en" ? "text-gold" : "text-bone/40"}>EN</span>
    </button>
  );
}

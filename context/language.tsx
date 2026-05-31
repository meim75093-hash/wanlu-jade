"use client";
import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Lang = "zh" | "en";

interface LangCtx {
  lang: Lang;
  toggle: () => void;
}

const LanguageContext = createContext<LangCtx>({ lang: "zh", toggle: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("zh");

  useEffect(() => {
    const stored = localStorage.getItem("wl-lang") as Lang | null;
    if (stored === "en" || stored === "zh") setLang(stored);
  }, []);

  function toggle() {
    setLang(prev => {
      const next = prev === "zh" ? "en" : "zh";
      localStorage.setItem("wl-lang", next);
      return next;
    });
  }

  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);

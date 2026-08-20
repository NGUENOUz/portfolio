"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "./translations";

type LanguageContextType = {
  lang: string;
  setLang: (lang: string) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "fr",
  setLang: () => {},
  t: (key: string) => key,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLangState] = useState("fr");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang && (savedLang === "fr" || savedLang === "en")) {
      setLangState(savedLang);
    }
  }, []);

  const setLang = (newLang: string) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
  };

  const t = (key: string): string => {
    return translations[lang]?.[key] || key;
  };

  // Prevent hydration mismatch by rendering children only after mounting
  // (Alternatively, we can render normally, but the text might jump on client-side)
  // For a portfolio, rendering normally is better for SEO, the fallback is FR.

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

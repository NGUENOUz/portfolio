"use client";

import { useState, useEffect } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import LanguageIcon from "@mui/icons-material/Language";
import ShareIcon from "@mui/icons-material/Share";
import CheckIcon from "@mui/icons-material/Check";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export default function Toolbar({ isMobile = false }: { isMobile?: boolean }) {
  const [theme, setTheme] = useState("light");
  const { lang, setLang } = useLanguage();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Vérifier la préférence système ou locale
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const toggleLang = () => {
    const newLang = lang === "fr" ? "en" : "fr";
    setLang(newLang);
  };

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Portfolio - Wilfried Dzomeu",
          url: url,
        });
      } catch (err) {
        console.error("Erreur de partage:", err);
      }
    } else {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const containerClass = isMobile ? "toolbar-inline" : "toolbar-dock";
  
  // Désactiver l'animation Framer Motion si on est dans le drawer mobile
  // car le drawer a déjà sa propre animation
  if (isMobile) {
    return (
      <div className={containerClass}>
        <button className="toolbar-btn" onClick={toggleTheme} aria-label="Toggle Theme">
          {theme === "light" ? <DarkModeIcon fontSize="small" /> : <LightModeIcon fontSize="small" />}
        </button>

        <div className="toolbar-divider" />

        <button className="toolbar-btn lang-btn" onClick={toggleLang} aria-label="Toggle Language">
          <LanguageIcon fontSize="small" />
          <span className="lang-text">{lang.toUpperCase()}</span>
        </button>

        <div className="toolbar-divider" />

        <button className="toolbar-btn" onClick={handleShare} aria-label="Share">
          {copied ? <CheckIcon fontSize="small" style={{ color: "var(--accent)" }} /> : <ShareIcon fontSize="small" />}
        </button>
      </div>
    );
  }

  return (
    <motion.div 
      className={containerClass}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 100, damping: 20 }}
    >
      <button className="toolbar-btn" onClick={toggleTheme} aria-label="Toggle Theme">
        {theme === "light" ? <DarkModeIcon fontSize="small" /> : <LightModeIcon fontSize="small" />}
      </button>

      <div className="toolbar-divider" />

      <button className="toolbar-btn lang-btn" onClick={toggleLang} aria-label="Toggle Language">
        <LanguageIcon fontSize="small" />
        <span className="lang-text">{lang.toUpperCase()}</span>
      </button>

      <div className="toolbar-divider" />

      <button className="toolbar-btn" onClick={handleShare} aria-label="Share">
        {copied ? <CheckIcon fontSize="small" style={{ color: "var(--accent)" }} /> : <ShareIcon fontSize="small" />}
      </button>
    </motion.div>
  );
}

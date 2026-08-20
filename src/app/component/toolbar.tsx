"use client";

import { useState, useEffect } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import LanguageIcon from "@mui/icons-material/Language";
import ShareIcon from "@mui/icons-material/Share";
import CheckIcon from "@mui/icons-material/Check";
import { motion } from "motion/react";

export default function Toolbar() {
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("FR");
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
    const newLang = lang === "FR" ? "EN" : "FR";
    setLang(newLang);
    // Placeholder : A brancher plus tard avec next-intl ou un dictionnaire
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

  return (
    <motion.div 
      className="toolbar-dock"
      initial={{ y: 100, opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ delay: 1, type: "spring", stiffness: 100, damping: 20 }}
    >
      <button className="toolbar-btn" onClick={toggleTheme} aria-label="Toggle Theme">
        {theme === "light" ? <DarkModeIcon fontSize="small" /> : <LightModeIcon fontSize="small" />}
      </button>

      <div className="toolbar-divider" />

      <button className="toolbar-btn lang-btn" onClick={toggleLang} aria-label="Toggle Language">
        <LanguageIcon fontSize="small" />
        <span className="lang-text">{lang}</span>
      </button>

      <div className="toolbar-divider" />

      <button className="toolbar-btn" onClick={handleShare} aria-label="Share">
        {copied ? <CheckIcon fontSize="small" style={{ color: "var(--accent)" }} /> : <ShareIcon fontSize="small" />}
      </button>
    </motion.div>
  );
}

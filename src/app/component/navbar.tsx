"use client";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Toolbar from "./toolbar";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const links = useMemo(() => [
    { label: t("nav.home"), href: "#hero" },
    { label: t("nav.portfolio"), href: "#portfolio" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.process"), href: "#process" },
    { label: t("nav.testimonials"), href: "#temoignages" },
  ], [t]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Détecter la section active
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );

    links.forEach((link) => {
      const id = link.href.startsWith("#") ? link.href.substring(1) : link.href;
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [links]);

  // Bloquer le scroll body quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <div className={`navbar-bg${open ? " navbar-bg--hidden" : ""}${scrolled ? " navbar-bg--scrolled" : ""}`} aria-hidden="true">
        <span className="nav-logo">
          W<span className="nav-dot">.</span>D<span className="nav-dot">.</span>
        </span>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <span className="nav-link">{l.label}</span>
            </li>
          ))}
        </ul>
        <span className="nav-cta">Me contacter</span>
        <button className="nav-burger" tabIndex={-1}>
          <MenuIcon style={{ fontSize: "1.6rem" }} />
        </button>
      </div>

      <nav className={`navbar-content${open ? " navbar-content--hidden" : ""}${scrolled ? " navbar-content--scrolled" : ""}`}>
        <span className="nav-logo">
          W<span className="nav-dot">.</span>D<span className="nav-dot">.</span>
        </span>

        <ul className="nav-links">
          {links.map((l) => {
            const isActive = activeSection === (l.href.startsWith("#") ? l.href.substring(1) : l.href);
            return (
              <li key={l.href}>
                <Link href={l.href} className={`nav-link ${isActive ? "active" : ""}`}>{l.label}</Link>
              </li>
            );
          })}
        </ul>

        <Link href="#contact" className="nav-cta">{t("nav.cta")}</Link>

        <button className="nav-burger" onClick={() => setOpen(true)} aria-label="Ouvrir le menu">
          <MenuIcon style={{ color: "var(--text)", fontSize: "1.6rem" }} />
        </button>
      </nav>

      {/* ── Drawer mobile plein écran ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="drawer-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Panel */}
            <motion.div
              className="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            >
              {/* Header drawer */}
              <div className="drawer-header">
                <span className="nav-logo">
                  W<span className="nav-dot">.</span>D<span className="nav-dot">.</span>
                </span>
                <button className="drawer-close" onClick={() => setOpen(false)} aria-label="Fermer">
                  <CloseIcon />
                </button>
              </div>

              {/* Links */}
              <nav className="drawer-links">
                {links.map((l, i) => {
                  const isActive = activeSection === (l.href.startsWith("#") ? l.href.substring(1) : l.href);
                  return (
                    <motion.div
                      key={l.href}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.06 }}
                    >
                      <Link
                        href={l.href}
                        className={`drawer-link ${isActive ? "active" : ""}`}
                        onClick={() => setOpen(false)}
                      >
                        <span className="drawer-link-num">0{i + 1}</span>
                        {l.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Footer drawer */}
              <div className="drawer-footer">
                <Link href="#contact" className="btn-primary drawer-cta" onClick={() => setOpen(false)}>
                  {t("nav.cta")}
                </Link>
                <div className="drawer-socials">
                  <a href="https://wa.me/237678378976" target="_blank" rel="noreferrer" className="drawer-social">
                    <WhatsAppIcon />
                  </a>
                  <a href="https://www.linkedin.com/in/wilfrieddzomeu/?skipRedirect=true" target="_blank" rel="noreferrer" className="drawer-social">
                    <LinkedInIcon />
                  </a>
                </div>
              </div>

              {/* Barre d'outils intégrée */}
              <Toolbar isMobile={true} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

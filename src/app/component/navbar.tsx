"use client";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

const links = [
  { label: "Accueil", href: "#hero" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "À propos", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Processus", href: "#process" },
  { label: "Témoignages", href: "#temoignages" },

];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ["rgba(8,5,5,0)", "rgba(8,5,5,0.92)"]);
  const borderColor = useTransform(scrollY, [0, 80], ["rgba(255,80,50,0)", "rgba(255,80,50,0.12)"]);

  // Bloquer le scroll body quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.nav style={{ background: bg, borderBottomColor: borderColor }} className={`navbar${open ? " navbar--hidden" : ""}`}>
        <span className="nav-logo">
          W<span className="nav-dot">.</span>D<span className="nav-dot">.</span>
        </span>

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="nav-link">{l.label}</Link>
            </li>
          ))}
        </ul>

        <Link href="#contact" className="nav-cta">Me contacter</Link>

        <button className="nav-burger" onClick={() => setOpen(true)} aria-label="Ouvrir le menu">
          <MenuIcon style={{ color: "var(--text)", fontSize: "1.6rem" }} />
        </button>
      </motion.nav>

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
                {links.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.06 }}
                  >
                    <Link
                      href={l.href}
                      className="drawer-link"
                      onClick={() => setOpen(false)}
                    >
                      <span className="drawer-link-num">0{i + 1}</span>
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Footer drawer */}
              <div className="drawer-footer">
                <Link href="#contact" className="btn-primary drawer-cta" onClick={() => setOpen(false)}>
                  Me contacter
                </Link>
                <div className="drawer-socials">
                  <a href="https://wa.me/237XXXXXXXXX" target="_blank" rel="noreferrer" className="drawer-social">
                    <WhatsAppIcon />
                  </a>
                  <a href="https://instagram.com/dreno" target="_blank" rel="noreferrer" className="drawer-social">
                    <InstagramIcon />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

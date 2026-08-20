"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import wil from "../../images/wil-removebg-preview.png";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="status-dot" /> {t("nav.status")}
        </motion.div>

        <h1 className="hero-title">
          <motion.div
            className="hero-word-line"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, ease: "easeOut" }}
          >
            {t("hero.hello")}{" "}
            <span className="hero-avatar">
              <Image src={wil} alt="Wilfried" width={48} height={48} className="hero-avatar-img" />
            </span>{" "}
            WILFRIED
          </motion.div>
          {/* <div className="hero-word-line">
            Digital Transformer
          </div> */}
          {/* <div
            className="hero-word-line text-muted"
            style={{ color: "var(--muted)", fontWeight: 500 }}
          >
            qui transforme tes problèmes
          </div> */}
          {/* <div className="hero-word-line">
            en <span style={{ color: "var(--text)", marginLeft: "8px" }}>solutions digitales.</span>
          </div> */}
        </h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          {t("hero.desc")}
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <Link href="#contact" className="btn-primary">{t("hero.cta.primary")}</Link>
          <Link href="#portfolio" className="btn-ghost">{t("hero.cta.secondary")}</Link>
        </motion.div>
      </div>

      <motion.div
        className="hero-photo-wrap"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
      >
        <div className="hero-photo-container">
          <Image src={wil} alt="Wilfried Dzomeu" className="hero-photo-main" priority />
        </div>
      </motion.div>
    </section>
  );
}

"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import lere from "../../images/lere.png";

export default function Hero() {
  return (
    <section className="hero " id="hero">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* ── Texte gauche ── */}
      <div className="hero-content">
        <h1 className="hero-title">
          <motion.span
            className="hero-word-line"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, ease: "easeOut" }}
          >
            Digital Transformer
          </motion.span>
          <motion.span
            className="hero-word-line gradient-text"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, ease: "easeOut" }}
          >
            &amp; Créateur
          </motion.span>
        </h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          Je transforme ton activité en empire digital — présence sociale,
          contenu viral, site web, publicités, stratégie marketing et formation.
          Tout ce qu&apos;il faut pour <strong>dominer ton marché</strong>.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <Link href="#portfolio" className="btn-primary">Voir mon travail</Link>
          <Link href="#contact" className="btn-ghost">Travailler avec moi</Link>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          {[
            { value: "52K+", label: "Abonnés" },
            { value: "100+", label: "Clients transformés" },
            { value: "5+", label: "Services" },
          ].map((s) => (
            <div key={s.label} className="hero-stat">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Photo droite ── */}
      <motion.div
        className="hero-photo-wrap"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
      >
        <div className="hero-photo-glow" />
        <Image src={lere} alt="Dreno — Wilfried Dzomeu" className="hero-photo" priority />
        <span className="hero-photo-tag">Digital Transformer</span>
      </motion.div>

      <motion.div
        className="hero-scroll"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <span>↓</span>
      </motion.div>
    </section>
  );
}

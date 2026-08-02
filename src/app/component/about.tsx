"use client";
import { motion } from "motion/react";
import Image from "next/image";
import wil from "../../images/wil.png";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import PsychologyIcon from "@mui/icons-material/Psychology";

const brands = [
  { name: "NovaTech", abbr: "NT" },
  { name: "AfriMedia", abbr: "AM" },
  { name: "DigitalHub", abbr: "DH" },
  { name: "CreativeX", abbr: "CX" },
  { name: "BrandLab", abbr: "BL" },
  { name: "StartupCo", abbr: "SC" },
  { name: "MediaPro", abbr: "MP" },
  { name: "GrowthCo", abbr: "GC" },
];

const pillars = [
  { icon: <RocketLaunchIcon />, label: "Digital Transformer", desc: "Je digitalise ton activité de A à Z" },
  { icon: <AutoAwesomeIcon />, label: "AI Addict", desc: "J'utilise l'IA pour tout optimiser" },
  { icon: <PsychologyIcon />, label: "Stratège", desc: "Créativité + données = résultats" },
];

export default function About() {
  return (
    <>
      <section className="about-section" id="about">
        <div className="about-grid">
          <motion.div
            className="about-img-wrap"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-img-glow" />
            <Image src={wil} alt="Wilfried Dzomeu" className="about-img" />
            <div className="about-badge-float">
              <span>52K+</span>
              <span>Abonnés</span>
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="section-tag">✦ À propos</span>
            <h2 className="section-title">
              Wilfried Dzomeu
            </h2>

            <p className="about-desc">
              Digital Transformer, créateur de contenu et <strong style={{ color: "#f5f0f0" }}>AI Addict</strong> —
              j&apos;utilise l&apos;intelligence artificielle au quotidien pour optimiser ma productivité,
              tester de nouveaux outils et produire des résultats que la concurrence ne peut pas égaler.
              Je transforme les activités en empires digitaux, de la stratégie à l&apos;exécution.
            </p>

            <div className="about-pillars">
              {pillars.map((p) => (
                <div key={p.label} className="about-pillar">
                  <div className="about-pillar-icon">{p.icon}</div>
                  <div>
                    <span className="about-pillar-label">{p.label}</span>
                    <span className="about-pillar-desc">{p.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary" style={{ display: "inline-flex", marginTop: "2rem" }}>
              Transformons ton business →
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Ils nous ont fait confiance ── */}
      <section className="brands-section">
        <motion.p
          className="brands-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Ils nous ont fait confiance
        </motion.p>
        <div className="brands-track-wrap">
          <div className="brands-track">
            {[...brands, ...brands].map((b, i) => (
              <div key={i} className="brand-pill">
                <span className="brand-abbr">{b.abbr}</span>
                <span className="brand-name">{b.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

"use client";
import { motion } from "motion/react";
import Image from "next/image";
import wil from "../../images/wil.png";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { useLanguage } from "../context/LanguageContext";

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

export default function About() {
  const { t } = useLanguage();

  const pillars = [
    { icon: <RocketLaunchIcon />, label: t("about.p1.label"), desc: t("about.p1.desc") },
    { icon: <AutoAwesomeIcon />, label: t("about.p2.label"), desc: t("about.p2.desc") },
    { icon: <PsychologyIcon />, label: t("about.p3.label"), desc: t("about.p3.desc") },
  ];

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
              <span>{t("about.followers")}</span>
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="section-tag">{t("about.tag")}</span>
            <h2 className="section-title">
              {t("about.title")}
            </h2>

            <p className="about-desc">
              {t("about.desc1")} <strong style={{ color: "#f5f0f0" }}>{t("about.desc1.strong")}</strong>{" "}
              {t("about.desc2")}
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
              {t("about.btn")}
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
          {t("about.brands.title")}
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

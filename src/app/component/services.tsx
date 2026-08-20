"use client";
import { motion } from "motion/react";
import CampaignIcon from "@mui/icons-material/Campaign";
import DevicesIcon from "@mui/icons-material/Devices";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SchoolIcon from "@mui/icons-material/School";
import GroupsIcon from "@mui/icons-material/Groups";
import BackgroundPattern from "./background-pattern";
import { useLanguage } from "../context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <DevicesIcon />,
      title: t("services.s1.title"),
      desc: t("services.s1.desc"),
      color: "#e8230a",
      tag: t("services.s1.tag"),
    },
    {
      icon: <AutoAwesomeIcon />,
      title: t("services.s2.title"),
      desc: t("services.s2.desc"),
      color: "#ff6b35",
      tag: t("services.s2.tag"),
    },
    {
      icon: <CampaignIcon />,
      title: t("services.s3.title"),
      desc: t("services.s3.desc"),
      color: "#e8230a",
      tag: t("services.s3.tag"),
    },
    {
      icon: <TrendingUpIcon />,
      title: t("services.s4.title"),
      desc: t("services.s4.desc"),
      color: "#ff6b35",
      tag: t("services.s4.tag"),
    },
    {
      icon: <GroupsIcon />,
      title: t("services.s5.title"),
      desc: t("services.s5.desc"),
      color: "#e8230a",
      tag: t("services.s5.tag"),
    },
    {
      icon: <SchoolIcon />,
      title: t("services.s6.title"),
      desc: t("services.s6.desc"),
      color: "#ff6b35",
      tag: t("services.s6.tag"),
    },
  ];

  return (
    <section className="services-section" id="services" style={{ position: "relative" }}>
      <BackgroundPattern />
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-tag">{t("services.tag")}</span>
        <h2 className="section-title">{t("services.title")}</h2>
        <p className="section-sub">
          {t("services.subtitle")}
        </p>
      </motion.div>

      <div className="services-grid">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            className="service-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -6 }}
            style={{ "--accent": s.color } as React.CSSProperties}
          >
            <div className="service-card-top">
              <div className="service-icon" style={{ color: s.color }}>{s.icon}</div>
              <span className="service-tag-pill">{s.tag}</span>
            </div>
            <h3 className="service-title">{s.title}</h3>
            <p className="service-desc">{s.desc}</p>
            <div className="service-line" style={{ background: s.color }} />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="services-cta"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <div className="services-cta-banner">
          <p>{t("services.cta.text")}</p>
          <a href="#contact" className="btn-primary" style={{ background: "var(--accent)" }}>
            {t("services.cta.btn")}
          </a>
        </div>
      </motion.div>
    </section>
  );
}

"use client";
import { motion } from "motion/react";
import CampaignIcon from "@mui/icons-material/Campaign";
import DevicesIcon from "@mui/icons-material/Devices";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SchoolIcon from "@mui/icons-material/School";
import GroupsIcon from "@mui/icons-material/Groups";

const services = [
  {
    icon: <DevicesIcon />,
    title: "Digitalisation complète",
    desc: "Je transforme ton activité physique en business digital : création de tes plateformes sociales, site web ou application, identité visuelle et présence en ligne de A à Z.",
    color: "#e8230a",
    tag: "Clé en main",
  },
  {
    icon: <AutoAwesomeIcon />,
    title: "Création de contenu & IA",
    desc: "Photos, vidéos, visuels IA, reels, stories — je crée du contenu qui capte l'attention et convertit. Maîtrise des meilleurs outils IA pour des résultats professionnels.",
    color: "#ff6b35",
    tag: "Créatif",
  },
  {
    icon: <CampaignIcon />,
    title: "Publicité & Campagnes",
    desc: "Conception et gestion de campagnes publicitaires sur Meta, TikTok et Google. Ciblage précis, créatifs percutants et optimisation continue pour maximiser ton ROI.",
    color: "#e8230a",
    tag: "Performance",
  },
  {
    icon: <TrendingUpIcon />,
    title: "Stratégie Marketing & Closing",
    desc: "Élaboration de stratégies marketing sur mesure, relance clients, scripts de closing, tunnels de vente et campagnes terrain pour transformer tes prospects en clients fidèles.",
    color: "#ff6b35",
    tag: "Revenus",
  },
  {
    icon: <GroupsIcon />,
    title: "Animation de communauté",
    desc: "Gestion et animation de tes réseaux sociaux, création d'une communauté engagée, planification éditoriale et interaction avec ton audience pour bâtir une vraie relation.",
    color: "#e8230a",
    tag: "Engagement",
  },
  {
    icon: <SchoolIcon />,
    title: "Formation & Coaching",
    desc: "Formations pratiques sur la création de contenu, l'IA, le marketing digital et la monétisation. Coaching individuel ou en groupe pour accélérer ta transformation.",
    color: "#ff6b35",
    tag: "Compétences",
  },
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-tag">✦ Ce que je fais</span>
        <h2 className="section-title">Services</h2>
        <p className="section-sub">
          De la stratégie à l&apos;exécution — je m&apos;occupe de tout pour que tu te concentres sur l&apos;essentiel
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
        <p>Tu ne sais pas par où commencer ?</p>
        <a href="#contact" className="btn-primary">Parlons de ton projet →</a>
      </motion.div>
    </section>
  );
}

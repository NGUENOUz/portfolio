"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Prise de contact",
    desc: "Tu me contactes via le formulaire, WhatsApp ou les réseaux. On échange brièvement pour voir si on est alignés et si je peux vraiment t'aider.",
    side: "left",
  },
  {
    number: "02",
    title: "Analyse de tes besoins",
    desc: "On organise un appel dédié pour comprendre ton activité, tes objectifs, ta cible et tes contraintes. Rien n'est générique — tout part de toi.",
    side: "right",
  },
  {
    number: "03",
    title: "Stratégie sur mesure",
    desc: "Je conçois un plan d'action personnalisé : outils, calendrier, budget. Tu valides chaque étape avant qu'on avance.",
    side: "left",
  },
  {
    number: "04",
    title: "Exécution & Production",
    desc: "Je passe à l'action — création de contenu, plateformes, campagnes ou développement. Tu es informé à chaque étape clé.",
    side: "right",
  },
  {
    number: "05",
    title: "Livraison & Formation",
    desc: "Je te livre le travail finalisé et te forme à l'utiliser en autonomie. Pas de dépendance — tu dois maîtriser ce qu'on a construit.",
    side: "left",
  },
  {
    number: "06",
    title: "Suivi & Optimisation",
    desc: "Après la livraison, j'analyse les résultats, j'ajuste la stratégie et t'accompagne dans la durée. Ton succès est mon succès.",
    side: "right",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.2"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="process-section" id="process" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-tag">✦ Comment je travaille</span>
        <h2 className="section-title">Mon processus</h2>
        <p className="section-sub">
          Centré sur tes besoins, orienté résultats — voici à quoi s&apos;attendre quand on travaille ensemble
        </p>
      </motion.div>

      <div className="timeline">
        {/* Ligne centrale */}
        <div className="timeline-track">
          <motion.div className="timeline-progress" style={{ height: lineHeight }} />
        </div>

        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            className={`timeline-item timeline-${step.side}`}
            initial={{ opacity: 0, x: step.side === "left" ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="timeline-card">
              <span className="timeline-number">{step.number}</span>
              <h3 className="timeline-title">{step.title}</h3>
              <p className="timeline-desc">{step.desc}</p>
            </div>
            {/* Point central */}
            <motion.div
              className="timeline-dot"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.05, type: "spring", stiffness: 300 }}
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="process-cta"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <p className="process-cta-text">Prêt à démarrer ? La première étape ne coûte rien.</p>
        <a href="#contact" className="btn-primary">Commencer maintenant</a>
      </motion.div>
    </section>
  );
}

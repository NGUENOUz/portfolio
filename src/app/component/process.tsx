"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Process() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.2"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    {
      number: "01",
      title: t("process.p1.title"),
      desc: t("process.p1.desc"),
      side: "left",
    },
    {
      number: "02",
      title: t("process.p2.title"),
      desc: t("process.p2.desc"),
      side: "right",
    },
    {
      number: "03",
      title: t("process.p3.title"),
      desc: t("process.p3.desc"),
      side: "left",
    },
    {
      number: "04",
      title: t("process.p4.title"),
      desc: t("process.p4.desc"),
      side: "right",
    },
    {
      number: "05",
      title: t("process.p5.title"),
      desc: t("process.p5.desc"),
      side: "left",
    },
    {
      number: "06",
      title: t("process.p6.title"),
      desc: t("process.p6.desc"),
      side: "right",
    },
  ];



  return (
    <section className="process-section" id="process" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-tag">{t("process.tag")}</span>
        <h2 className="section-title">{t("process.title")}</h2>
        <p className="section-sub">
          {t("process.sub")}
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
        <p className="process-cta-text">{t("process.cta.text")}</p>
        <a href="#contact" className="btn-primary">{t("process.cta.btn")}</a>
      </motion.div>
    </section>
  );
}

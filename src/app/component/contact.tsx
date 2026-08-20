"use client";
import { motion } from "motion/react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  return (
    <section className="contact-section" id="contact">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-tag">{t("contact.tag")}</span>
        <h2 className="section-title">{t("contact.title")}</h2>
        <p className="section-sub">{t("contact.sub")}</p>
      </motion.div>

      <div className="contact-grid">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>{t("contact.info.title")}</h3>
          <p>{t("contact.info.desc")}</p>

          <div className="contact-links">
            <a href="https://wa.me/237678378976" className="contact-link" target="_blank" rel="noreferrer">
              <WhatsAppIcon /> WhatsApp
            </a>
            <a href="mailto:wilfrieddzomeu.ca@gmail.com" className="contact-link">
              <EmailIcon /> Email
            </a>
            <a href="https://www.linkedin.com/in/wilfrieddzomeu/?skipRedirect=true" className="contact-link" target="_blank" rel="noreferrer">
              <LinkedInIcon /> LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <input className="form-input" type="text" placeholder={t("contact.form.name")} required />
          <input className="form-input" type="email" placeholder={t("contact.form.email")} required />
          <textarea className="form-input form-textarea" placeholder={t("contact.form.message")} required />
          <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
            {t("contact.form.submit")}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

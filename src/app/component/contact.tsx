"use client";
import { motion } from "motion/react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-tag">✦ Parlons-en</span>
        <h2 className="section-title">Contact</h2>
        <p className="section-sub">Une idée ? Un projet ? Je suis là.</p>
      </motion.div>

      <div className="contact-grid">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Travaillons ensemble</h3>
          <p>Que ce soit pour une collaboration, une commande de visuels ou une formation, n&apos;hésitez pas à me contacter.</p>

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
          <input className="form-input" type="text" placeholder="Votre nom" required />
          <input className="form-input" type="email" placeholder="Votre email" required />
          <textarea className="form-input form-textarea" placeholder="Votre message" required />
          <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
            Envoyer le message ✦
          </button>
        </motion.form>
      </div>
    </section>
  );
}

"use client";
import { useEffect, useState } from "react";
import styles from "../../style/WhatsappExitPopup.module.scss"; // <-- Module SCSS importé correctement
import Image from "next/image";
import Me from "../../images/lere.png";
export default function WhatsappExitPopup() {
  const [visible, setVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false); // éviter de le montrer plusieurs fois
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  useEffect(() => {
    if (hasShown) return;

    if (!isMobile) {
      // 🖥️ Desktop : déclencheur exit-intent
      const handleMouseLeave = (e: MouseEvent) => {
        if (e.clientY <= 0 && !hasShown) {
          setVisible(true);
          setHasShown(true);
        }
      };
      document.addEventListener("mouseout", handleMouseLeave);
      return () => document.removeEventListener("mouseout", handleMouseLeave);
    } else {
      // 📱 Mobile : déclencheur après 20s d'inactivité
      const timer = setTimeout(() => {
        if (!hasShown) {
          setVisible(true);
          setHasShown(true);
        }
      }, 40000);
      return () => clearTimeout(timer);
    }
  }, [hasShown, isMobile]);

  const handleClose = () => setVisible(false);

  const whatsappLink =
    "https://wa.me/237640201468?text=Bonjour!%20J'ai%20une%20préoccupation.%20Pouvez-vous%20m'aider%20?";
  // ⚠️ Remplace le numéro par le tien au format international sans +

  return (
    <>
      {visible && (
        <div className={styles.overlay}>
          <div className={styles.popup}>
            <button className={styles.closeBtn} onClick={handleClose}>
              ×
            </button>
            <Image src={Me} alt="Wilfried Dzomeu" className={styles.icon} />

            <h3>Avant de partir...</h3>
            <p>
              As-tu une préoccupation ? Écris-moi directement sur WhatsApp 💬
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              Me contacter sur WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}

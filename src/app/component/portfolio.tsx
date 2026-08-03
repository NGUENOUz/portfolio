"use client";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

const categories = ["Tout", "Images IA", "Vidéos", "Designs", "Campagnes", "Sites & Apps"];

const works = [
  { id: 1,  src: "https://res.cloudinary.com/dsf8rehsq/image/upload/v1759345371/549619406_789954203418808_8478088820107281472_n_czshjs.jpg", cat: "Images IA",   title: "Création IA #1" },
  { id: 2,  src: "https://res.cloudinary.com/dsf8rehsq/image/upload/v1759345370/Gemini_Generated_Image_xutu99xutu99xutu_ruojip.png",           cat: "Images IA",   title: "Gemini Art" },
  { id: 3,  src: "https://res.cloudinary.com/dsf8rehsq/image/upload/v1759345370/550258272_788393083574920_1122837517657837576_n_sa7qlz.jpg",  cat: "Designs",     title: "Affiche #1" },
  { id: 4,  src: "https://res.cloudinary.com/dsf8rehsq/image/upload/v1759345308/WhatsApp_Image_2025-09-23_at_16.18.56_h2ns4o.jpg",           cat: "Campagnes",   title: "Campagne #1" },
  { id: 5,  src: "https://res.cloudinary.com/dsf8rehsq/image/upload/v1759345315/WhatsApp_Image_2025-09-23_at_16.18.54_qh9lld.jpg",           cat: "Designs",     title: "Design #2" },
  { id: 6,  src: "https://res.cloudinary.com/dsf8rehsq/image/upload/v1759345317/WhatsApp_Image_2025-09-23_at_16.18.55_aqn0yt.jpg",           cat: "Images IA",   title: "Création IA #2" },
  { id: 7,  src: "https://res.cloudinary.com/dsf8rehsq/image/upload/v1759345310/WhatsApp_Image_2025-09-24_at_17.59.41_qhyznw.jpg",           cat: "Vidéos",      title: "Contenu vidéo #1" },
  { id: 8,  src: "https://res.cloudinary.com/dsf8rehsq/image/upload/v1759345306/WhatsApp_Image_2025-09-24_at_17.59.40_jwwi3k.jpg",           cat: "Images IA",   title: "Création IA #3" },
  { id: 9,  src: "https://res.cloudinary.com/dsf8rehsq/image/upload/v1759345306/WhatsApp_Image_2025-09-24_at_17.59.43_tkat91.jpg",           cat: "Sites & Apps", title: "Projet web #1" },
  { id: 10, src: "https://res.cloudinary.com/dsf8rehsq/image/upload/v1759345306/WhatsApp_Image_2025-09-27_at_14.02.09_ru0rtk.jpg",           cat: "Campagnes",   title: "Campagne #2" },
  { id: 11, src: "https://res.cloudinary.com/dsf8rehsq/image/upload/v1759345365/550265587_788108650270030_4937257173747827666_n_g1tjhw.jpg", cat: "Vidéos",      title: "Contenu vidéo #2" },
  { id: 12, src: "https://res.cloudinary.com/dsf8rehsq/image/upload/v1759345363/Gemini_Generated_Image_11f7dw11f7dw11f7_ilxk08.png",         cat: "Images IA",   title: "Gemini Art #2" },
];

const PER_PAGE = 6;

export default function Portfolio() {
  const [active, setActive] = useState("Tout");
  const [page, setPage] = useState(1);
  const [lightbox, setLightbox] = useState<null | typeof works[0]>(null);

  const filtered = active === "Tout" ? works : works.filter((w) => w.cat === active);
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  function handleFilter(cat: string) {
    setActive(cat);
    setPage(1);
  }

  return (
    <section className="portfolio-section" id="portfolio">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-tag">✦ Mon travail</span>
        <h2 className="section-title">Portfolio</h2>
        <p className="section-sub">Des créations qui parlent d&apos;elles-mêmes</p>
      </motion.div>

      {/* Filtres — scrollable horizontalement sur mobile */}
      <div className="portfolio-filters-wrap">
        <div className="portfolio-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${active === cat ? "filter-active" : ""}`}
              onClick={() => handleFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grille */}
      <motion.div className="portfolio-grid" layout>
        <AnimatePresence mode="popLayout">
          {paginated.map((item) => (
            <motion.div
              key={item.id}
              className="portfolio-card"
              layout
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.35 }}
              onClick={() => setLightbox(item)}
            >
              <Image src={item.src} alt={item.title} fill className="portfolio-img" sizes="(max-width:768px) 50vw, 33vw" />
              <div className="portfolio-overlay">
                <ZoomInIcon className="zoom-icon" />
                <span className="portfolio-card-title">{item.title}</span>
                <span className="portfolio-card-cat">{item.cat}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="portfolio-pagination">
          <button
            className="pag-btn"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            ←
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              className={`pag-btn${page === n ? " pag-active" : ""}`}
              onClick={() => setPage(n)}
            >
              {n}
            </button>
          ))}
          <button
            className="pag-btn"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            →
          </button>
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="lightbox-inner"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="lightbox-close" onClick={() => setLightbox(null)}>
                <CloseIcon />
              </button>
              <Image src={lightbox.src} alt={lightbox.title} width={900} height={700} className="lightbox-img" />
              <p className="lightbox-title">{lightbox.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

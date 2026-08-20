"use client";
import "../style/portfolio.scss";
import "../style/multislide.scss";
import "../style/modules.scss";

import dynamic from "next/dynamic";
import Navbar from "./component/navbar";
import Hero from "./component/hero";
import Portfolio from "./component/portfolio";
import About from "./component/about";
import Services from "./component/services";
import Process from "./component/process";
import Contact from "./component/contact";
import Toolbar from "./component/toolbar";
import MyComponent from "./component/bd";
import { AnimatedTestimonials } from "./component/temoignage";
import { testimonials } from "./component/bd/temoigne";
import Faq from "./component/faq";
import { useLanguage } from "./context/LanguageContext";

const PixelInitializer = dynamic(() => import("../app/lib/usePixel"), { ssr: false });

export default function Home() {
  const { t } = useLanguage();
  return (
    <main>
      <Navbar />
      <Hero />

      <div className="slider-banner">
        <MyComponent />
      </div>

      <Portfolio />
      <About />
      <Services />
      <Process />

      <section className="temoignage-section" id="temoignages" style={{ overflow: "hidden" }}>
        <div className="section-header">
          <span className="section-tag">{t("testimonials.tag")}</span>
          <h2 className="section-title">{t("testimonials.title")}</h2>
          <p className="section-sub">{t("testimonials.sub")}</p>
        </div>
        <AnimatedTestimonials testimonials={testimonials.map((tItem, i) => ({ ...tItem, quote: t(`testimonials.t${i + 1}.quote`) }))} />
      </section>

      <section className="faq-section">
        <div className="section-header">
          <span className="section-tag">{t("faq.tag")}</span>
          <h2 className="section-title">{t("faq.title")}</h2>
        </div>
        <Faq />
      </section>

      <Contact />

      <footer className="footer-new">
        <span className="footer-logo">
          W<span style={{ color: "var(--accent)" }}>.</span>D<span style={{ color: "var(--accent)" }}>.</span>
        </span>
        <span className="footer-copy">{t("footer.copy")}</span>
      </footer>

      <Toolbar />
      <PixelInitializer />
    </main>
  );
}

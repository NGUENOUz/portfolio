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

const PixelInitializer = dynamic(() => import("../app/lib/usePixel"), { ssr: false });

export default function Home() {
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

      <section className="temoignage-section" id="temoignages">
        <div className="section-header">
          <span className="section-tag">✦ Ce qu&apos;ils disent</span>
          <h2 className="section-title">Témoignages</h2>
          <p className="section-sub">La satisfaction de mes clients parle pour moi</p>
        </div>
        <AnimatedTestimonials testimonials={testimonials} />
      </section>

      <section className="faq-section">
        <div className="section-header">
          <span className="section-tag">✦ Questions fréquentes</span>
          <h2 className="section-title">FAQ</h2>
        </div>
        <Faq />
      </section>

      <Contact />

      <footer className="footer-new">
        <span className="footer-logo">
          W<span style={{ color: "var(--accent)" }}>.</span>D<span style={{ color: "var(--accent)" }}>.</span>
        </span>
        <span className="footer-copy">© 2025 W.D. | Wilfried Dzomeu — Tous droits réservés</span>
      </footer>

      <Toolbar />
      <PixelInitializer />
    </main>
  );
}

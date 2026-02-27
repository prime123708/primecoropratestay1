import { HeroFeatures } from "./HeroFeatures";
import { HeroInfoCards } from "./HeroInfoCards";

import hero1 from "@/images/WhatsApp Image 2026-02-23 at 3.39.08 PM.jpeg";
import hero2 from "@/images/WhatsApp Image 2026-02-23 at 3.39.10 PM.jpeg";
import hero3 from "@/images/WhatsApp Image 2026-02-23 at 3.39.13 PM.jpeg";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[600px] md:h-screen overflow-hidden">
      <div className="hero-slider">
        <div className="hero-slide" style={{backgroundImage: `url(${hero1})`}}></div>
        <div className="hero-slide" style={{backgroundImage: `url(${hero2})`}}></div>
        <div className="hero-slide" style={{backgroundImage: `url(${hero3})`}}></div>
      </div>
      <div className="absolute inset-0 bg-black/30 z-10" />
      <HeroFeatures />
      <HeroInfoCards />
      <style jsx>{`
        .hero-slider {
          position: absolute;
          inset: 0;
        }
        .hero-slide {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0;
          animation: heroFade 15s ease-in-out infinite;
        }
        .hero-slide:nth-child(1) { animation-delay: 0s; }
        .hero-slide:nth-child(2) { animation-delay: 5s; }
        .hero-slide:nth-child(3) { animation-delay: 10s; }
        @keyframes heroFade {
          0% { opacity: 0; }
          6% { opacity: 1; }
          27% { opacity: 1; }
          33.33% { opacity: 0; }
          100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}

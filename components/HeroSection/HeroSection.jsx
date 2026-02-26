import { useHeroSlider } from "@/hooks/useHeroSlider";
import { HeroSlider } from "./HeroSlider";
import { HeroFeatures } from "./HeroFeatures";
import { HeroInfoCards } from "./HeroInfoCards";

import hero1 from "@/images/WhatsApp Image 2026-02-23 at 3.39.08 PM.jpeg";
import hero2 from "@/images/WhatsApp Image 2026-02-23 at 3.39.10 PM.jpeg";
import hero3 from "@/images/WhatsApp Image 2026-02-23 at 3.39.13 PM.jpeg";

const heroImages = [hero1, hero2, hero3];

export function HeroSection() {
  const currentSlide = useHeroSlider(heroImages);

  return (
    <section
      id="home"
      className="relative min-h-[600px] md:h-screen overflow-hidden"
    >
      <HeroSlider images={heroImages} currentSlide={currentSlide} />

      <div className="absolute top-8 md:top-20 left-4 md:left-12 z-10">
        <h1 className="text-3xl md:text-6xl font-serif text-white mb-6 md:mb-12 slideInLeft">
          Our Restaurant
        </h1>
      </div>

      <HeroFeatures />
      <HeroInfoCards />
    </section>
  );
}

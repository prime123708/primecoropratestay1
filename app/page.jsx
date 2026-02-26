
"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { AboutSection } from "@/components/AboutSection/AboutSection";
import { ServicesSection } from "@/components/ServicesSection/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection/TestimonialsSection";

export default function HomePage() {
  const { isVisible, addToRefs } = useIntersectionObserver();

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection isVisible={isVisible} addToRefs={addToRefs} />
      <ServicesSection isVisible={isVisible} addToRefs={addToRefs} />
      <TestimonialsSection />
    </div>
  );
}

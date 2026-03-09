import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { AboutSection } from "@/components/AboutSection/AboutSection";
import { ServicesSection } from "@/components/ServicesSection/ServicesSection";
import { ServiceSlider } from "@/components/ServicesSection/ServiceSlider";
import { TestimonialsSection } from "@/components/TestimonialsSection/TestimonialsSection";
import { AttractionSlider } from "@/components/HeroSection/AttractionSlider";
import { OffersSection } from "@/components/OffersSection/OffersSection";

export default function HomePage() {
  const { isVisible, addToRefs } = useIntersectionObserver();

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection isVisible={isVisible} addToRefs={addToRefs} />
      <AttractionSlider />
      <OffersSection />
      {/* <ServiceSlider /> */}
      <ServicesSection isVisible={isVisible} addToRefs={addToRefs} />
      <TestimonialsSection />
    </div>
  );
}

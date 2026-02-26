import { ServiceCard } from "./ServiceCard";
import banquetImg from "@/images/WhatsApp Image 2026-02-23 at 3.39.12 PM (2).jpeg";
import restaurantImg from "@/images/WhatsApp Image 2026-02-23 at 3.39.09 PM (2).jpeg";

export function ServicesSection({ isVisible, addToRefs }) {
  const services = [
    {
      title: "Daily Housekeeping",
      description:
        "Daily Housekeeping ensures a clean, comfortable, and welcoming environment every single day. Our trained staff takes care of regular cleaning, tidying, and essential upkeep to maintain high standards of hygiene and freshness.",
      image: banquetImg,
      buttonText: "Book",
      imageFirst: true,
      section: "banquet",
    },
    {
      title: "Security",
      description:
        "Security ensures a safe and protected environment around the clock. Our trained security personnel monitor the premises, manage access, and respond promptly to any concerns to maintain peace of mind. With constant vigilance and a proactive approach, security services help safeguard people, property, and assets—so you can feel confident and secure at all times.",
      image: restaurantImg,
      buttonText: "Book",
      imageFirst: false,
      section: "restaurant",
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#EF4444] font-semibold mb-2 tracking-wider">
            SERVICES
          </p>
          <h2 className="text-5xl font-serif">Our Best Ministrations</h2>
        </div>

        {services.map((service, index) => (
          <ServiceCard
            key={index}
            {...service}
            isVisible={isVisible}
            addToRefs={addToRefs}
            isLast={index === services.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

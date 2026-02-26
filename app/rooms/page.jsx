"use client";

import { useState, useEffect, useRef } from "react";
import { ParallaxBanner } from "@/components/ParallaxBanner/ParallaxBanner";
import bannerImg from "@/images/WhatsApp Image 2026-02-23 at 3.39.13 PM.jpeg";
import r1 from "@/images/WhatsApp Image 2026-02-23 at 3.39.13 PM (2).jpeg";
import r2 from "@/images/WhatsApp Image 2026-02-23 at 3.39.14 PM (2).jpeg";
import r3 from "@/images/WhatsApp Image 2026-02-23 at 3.39.11 PM (1).jpeg";
import r4 from "@/images/WhatsApp Image 2026-02-23 at 3.39.10 PM.jpeg";

export default function RoomsPage() {
  const [isVisible, setIsVisible] = useState({});
  const observerRefs = useRef([]);

  const rooms = [
    {
      title: "Luxury Rooms",
      image: r1,
      description:
        "Experience ultimate comfort in our premium luxury rooms with modern amenities and elegant interiors.",
      features: ["King Size Bed", "Air Conditioning", "Free WiFi", "Smart TV"],
      price: "₹5,000",
    },
    {
      title: "Superior Room",
      image: r2,
      description:
        "Elegant spaces designed for your perfect stay with all modern conveniences.",
      features: [
        "Queen Size Bed",
        "Work Desk",
        "Mini Bar",
        "Premium Toiletries",
      ],
      price: "₹4,000",
    },
    {
      title: "Corporate Twin Room",
      image: r3,
      description:
        "Ideal for business travelers and colleagues with twin bed configuration.",
      features: [
        "Twin Beds",
        "Work Station",
        "Coffee Maker",
        "High-Speed Internet",
      ],
      price: "₹4,500",
    },
    {
      title: "Residences Room",
      image: r4,
      description:
        "Your home away from home with extended stay comfort and spacious living.",
      features: [
        "Living Area",
        "Kitchenette",
        "Dining Space",
        "Separate Bedroom",
      ],
      price: "₹6,500",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.dataset.section]: true,
            }));
          }
        });
      },
      { threshold: 0.1 },
    );

    observerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !observerRefs.current.includes(el)) {
      observerRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      

      <ParallaxBanner
        src={bannerImg}
        alt="Rooms"
      >
        <div className="text-center text-white fadeIn">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Our Rooms</h1>
          <p className="text-xl">Comfort & Luxury Combined</p>
        </div>
      </ParallaxBanner>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {rooms.map((room, index) => (
              <div
                key={index}
                ref={addToRefs}
                data-section={`room${index}`}
                className={`bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-700 hover:scale-105 ${(isVisible[`room${index}`] ?? true) ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {room.title}
                    </h3>
                    <span className="text-2xl font-bold text-[#EF4444]">
                      {room.price}
                      <span className="text-sm text-gray-500">/night</span>
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">{room.description}</p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {room.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <div className="w-2 h-2 bg-[#EF4444] rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-[#EF4444] text-white py-3 rounded-lg font-semibold hover:bg-[#DC2626] transition-all transform hover:scale-105">
                    BOOK NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </div>
  );
}

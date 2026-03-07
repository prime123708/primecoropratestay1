"use client";

import bannerImg from "@/images/WhatsApp Image 2026-02-23 at 3.39.10 PM.jpeg";
import exteriorImg from "@/images/WhatsApp Image 2026-02-23 at 3.39.09 PM.jpeg";
import restaurantImg from "@/images/WhatsApp Image 2026-02-23 at 3.39.11 PM.jpeg";
import banquetImg from "@/images/WhatsApp Image 2026-02-23 at 3.39.12 PM.jpeg";

export default function HotelsPage() {
  return (
    <div className="min-h-screen bg-white">


      <section className="relative h-[400px] mt-16 md:mt-20">
        <img
          src={bannerImg}
          alt="Hotels"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white fadeIn">
            <h1 className="text-5xl md:text-6xl font-serif mb-4 text-white">
              Prime Corporate Stay
            </h1>
            <p className="text-xl">Your Premium Stay in Greater Noida</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fadeIn">
            <p className="text-[#c5a075] font-semibold mb-2 tracking-wider">
              OUR PROPERTY
            </p>
            <h2 className="text-4xl font-serif mb-6">
              Prime Corporate Stay, Greater Noida
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Located in the heart of Greater Noida, Prime Corporate Stay offers modern
              amenities, exceptional hospitality, and convenient access to major
              attractions and business hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 fadeIn"
              style={{ animationDelay: "100ms" }}
            >
              <img
                src={exteriorImg}
                alt="Exterior"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Prime Location</h3>
                <p className="text-gray-600">
                  Centrally located with easy access to India Expo Mart, Pari
                  Chowk, and major business districts.
                </p>
              </div>
            </div>

            <div
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 fadeIn"
              style={{ animationDelay: "200ms" }}
            >
              <img
                src={restaurantImg}
                alt="Restaurant"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Fine Dining</h3>
                <p className="text-gray-600">
                  Multi-cuisine restaurant serving North Indian, South Indian,
                  and Pan-Asian delicacies.
                </p>
              </div>
            </div>

            <div
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 fadeIn"
              style={{ animationDelay: "300ms" }}
            >
              <img
                src={banquetImg}
                alt="Banquet"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Event Spaces</h3>
                <p className="text-gray-600">
                  Elegant banquet halls perfect for weddings, conferences, and
                  celebrations.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a
              href="/contact"
              className="inline-block bg-[#c5a075] text-white px-12 py-4 text-lg font-bold rounded hover:bg-[#b08e68] transition-all transform hover:scale-105"
            >
              CONTACT US FOR BOOKINGS
            </a>
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
          animation: fadeIn 0.8s ease-out both;
        }
      `}</style>
    </div>
  );
}

"use client";

import { MapPin } from "lucide-react";
import { ParallaxBanner } from "@/components/ParallaxBanner/ParallaxBanner";
import bannerImg from "@/images/WhatsApp Image 2026-02-23 at 3.39.12 PM (3).jpeg";
import s1 from "@/images/WhatsApp Image 2026-02-23 at 3.39.08 PM.jpeg";
import s2 from "@/images/WhatsApp Image 2026-02-23 at 3.39.10 PM (1).jpeg";
import s3 from "@/images/WhatsApp Image 2026-02-23 at 3.39.11 PM (1).jpeg";

const attractions = [
  {
    title: "DLF Mall of India",
    description: "One of the largest malls in India, offering a wide range of international brands, dining, and entertainment options.",
    distance: "15 mins drive",
    image: s1
  },
  {
    title: "Okhla Bird Sanctuary",
    description: "A peaceful retreat for nature lovers and bird watchers, home to over 300 species of birds.",
    distance: "20 mins drive",
    image: s2
  },
  {
    title: "Worlds of Wonder",
    description: "A popular amusement and water park perfect for a fun-filled day with family and friends.",
    distance: "15 mins drive",
    image: s3
  },
  {
    title: "Akshardham Temple",
    description: "A stunning architectural marvel and spiritual center, showcasing India's rich culture and heritage.",
    distance: "30 mins drive",
    image: s1
  },
  {
    title: "Buddh International Circuit",
    description: "India's premier motor racing circuit, hosting international racing events and track days.",
    distance: "25 mins drive",
    image: s2
  }
];

export default function AttractionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <ParallaxBanner src={bannerImg} alt="Local Attractions">
        <div className="text-center text-white fadeInUp">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">
            Local Attractions
          </h1>
          <p className="text-xl">Explore the best of Noida and beyond</p>
        </div>
      </ParallaxBanner>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#c5a075] font-semibold mb-2 tracking-wider">
              NEARBY PLACES
            </p>
            <h2 className="text-4xl font-serif">Discover Your Surroundings</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 bg-white">
                  <div className="flex items-center text-[#c5a075] text-sm font-semibold mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {attraction.distance}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#c5a075] transition-colors">
                    {attraction.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {attraction.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif">Closest Landmarks</h2>
            <p className="text-gray-600 mt-4">Easy access to major travel hubs</p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="p-8">
              <ul className="space-y-6">
                {[
                  { name: "Hindon Airport", distance: "25.2 km" },
                  { name: "Indira Gandhi International Airport", distance: "33.7 km" },
                  { name: "Agra Airport", distance: "157.9 km" },
                  { name: "Bareilly Airport", distance: "198.5 km" },
                  { name: "Jolly Grant Airport", distance: "202.8 km" }
                ].map((landmark, idx) => (
                  <li key={idx} className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-[#c5a075]/10 rounded-full flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-[#c5a075]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </div>
                      <span className="text-lg font-medium text-gray-800">{landmark.name}</span>
                    </div>
                    <span className="text-[#c5a075] font-bold">{landmark.distance}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif mb-6">Need a Guide?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our concierge can help you plan your local trips and arrange
            transportation for a hassle-free experience.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#c5a075] text-white px-10 py-4 font-bold hover:bg-[#b08e68] transition-all rounded"
          >
            PLAN YOUR TRIP
          </a>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useState } from "react";
import { ParallaxBanner } from "@/components/ParallaxBanner/ParallaxBanner";
import bannerImg from "@/images/WhatsApp Image 2026-02-23 at 3.39.12 PM (2).jpeg";
import g1 from "@/images/WhatsApp Image 2026-02-23 at 3.39.08 PM.jpeg";
import g2 from "@/images/WhatsApp Image 2026-02-23 at 3.39.09 PM.jpeg";
import g3 from "@/images/WhatsApp Image 2026-02-23 at 3.39.09 PM (2).jpeg";
import g4 from "@/images/WhatsApp Image 2026-02-23 at 3.39.10 PM.jpeg";
import g5 from "@/images/WhatsApp Image 2026-02-23 at 3.39.10 PM (1).jpeg";
import g6 from "@/images/WhatsApp Image 2026-02-23 at 3.39.11 PM.jpeg";
import g7 from "@/images/WhatsApp Image 2026-02-23 at 3.39.11 PM (2).jpeg";
import g8 from "@/images/WhatsApp Image 2026-02-23 at 3.39.12 PM.jpeg";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      url: g1,
      title: "Hotel Exterior",
    },
    {
      url: g2,
      title: "Luxury Room",
    },
    {
      url: g3,
      title: "Restaurant",
    },
    {
      url: g4,
      title: "Banquet Hall",
    },
    {
      url: g5,
      title: "Superior Room",
    },
    {
      url: g6,
      title: "Residences",
    },
    {
      url: g7,
      title: "Lobby",
    },
    {
      url: g8,
      title: "Deluxe Room",
    },
  ];

  return (
    <div className="min-h-screen bg-white">


      <ParallaxBanner
        src={bannerImg}
        alt="Gallery"
      >
        <div className="text-center text-white fadeIn">
          <h1 className="text-5xl md:text-6xl font-serif mb-4 text-white">Gallery</h1>
          <p className="text-xl">Explore Our Beautiful Spaces</p>
        </div>
      </ParallaxBanner>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 fadeIn"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-screen">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-screen object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-[#c5a075] transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <p className="absolute bottom-4 left-4 text-white text-xl font-semibold">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}

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
          animation: fadeIn 0.6s ease-out both;
        }
      `}</style>
    </div>
  );
}

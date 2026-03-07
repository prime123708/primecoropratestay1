"use client";

import { useState } from "react";
import { ParallaxBanner } from "@/components/ParallaxBanner/ParallaxBanner";
import bannerImg from "@/images/WhatsApp Image 2026-02-23 at 3.39.12 PM.jpeg";
import g1 from "@/images/WhatsApp Image 2026-02-23 at 3.39.08 PM.jpeg";
import g2 from "@/images/WhatsApp Image 2026-02-23 at 3.39.09 PM.jpeg";
import g3 from "@/images/WhatsApp Image 2026-02-23 at 3.39.10 PM.jpeg";
import g4 from "@/images/WhatsApp Image 2026-02-23 at 3.39.11 PM.jpeg";
import g5 from "@/images/WhatsApp Image 2026-02-23 at 3.39.12 PM.jpeg";
import g6 from "@/images/WhatsApp Image 2026-02-23 at 3.39.13 PM.jpeg";
import g7 from "@/images/WhatsApp Image 2026-02-23 at 3.39.14 PM.jpeg";
import g8 from "@/images/WhatsApp Image 2026-02-23 at 3.39.14 PM (2).jpeg";
import g9 from "@/images/WhatsApp Image 2026-03-07 at 3.07.50 PM.jpeg";
import g10 from "@/images/WhatsApp Image 2026-03-07 at 3.07.51 PM.jpeg";
import g11 from "@/images/WhatsApp Image 2026-03-07 at 3.07.51 PM (1).jpeg";
import g12 from "@/images/WhatsApp Image 2026-03-07 at 3.07.51 PM (2).jpeg";
import g13 from "@/images/WhatsApp Image 2026-03-07 at 3.07.52 PM.jpeg";
import g14 from "@/images/WhatsApp Image 2026-03-07 at 3.07.52 PM (1).jpeg";
import g15 from "@/images/WhatsApp Image 2026-03-07 at 3.07.52 PM (2).jpeg";
import g16 from "@/images/WhatsApp Image 2026-03-07 at 3.07.53 PM.jpeg";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { url: g1, title: "Gallery Image 1" },
    { url: g2, title: "Gallery Image 2" },
    { url: g3, title: "Gallery Image 3" },
    { url: g4, title: "Gallery Image 4" },
    { url: g5, title: "Gallery Image 5" },
    { url: g6, title: "Gallery Image 6" },
    { url: g7, title: "Gallery Image 7" },
    { url: g8, title: "Gallery Image 8" },
    { url: g9, title: "Gallery Image 9" },
    { url: g10, title: "Gallery Image 10" },
    { url: g11, title: "Gallery Image 11" },
    { url: g12, title: "Gallery Image 12" },
    { url: g13, title: "Gallery Image 13" },
    { url: g14, title: "Gallery Image 14" },
    { url: g15, title: "Gallery Image 15" },
    { url: g16, title: "Gallery Image 16" },
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

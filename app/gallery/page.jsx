"use client";

import { useState } from "react";
import { ParallaxBanner } from "@/components/ParallaxBanner/ParallaxBanner";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
      title: "Hotel Exterior",
    },
    {
      url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
      title: "Luxury Room",
    },
    {
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      title: "Restaurant",
    },
    {
      url: "https://images.unsplash.com/photo-1519167758481-83f29da8c2b0?w=800&h=600&fit=crop",
      title: "Banquet Hall",
    },
    {
      url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
      title: "Superior Room",
    },
    {
      url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop",
      title: "Residences",
    },
    {
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop",
      title: "Lobby",
    },
    {
      url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop",
      title: "Deluxe Room",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      

      <ParallaxBanner
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&h=600&fit=crop"
        alt="Gallery"
      >
        <div className="text-center text-white fadeIn">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Gallery</h1>
          <p className="text-xl">Explore Our Beautiful Spaces</p>
        </div>
      </ParallaxBanner>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 fadeIn"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">
                    {image.title}
                  </p>
                </div>
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
              className="absolute top-4 right-4 text-white text-4xl hover:text-[#EF4444] transition-colors"
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

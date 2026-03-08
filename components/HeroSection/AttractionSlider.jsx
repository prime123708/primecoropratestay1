"use client";

import s1 from "@/images/WhatsApp Image 2026-02-23 at 3.39.08 PM.jpeg";
import s2 from "@/images/WhatsApp Image 2026-02-23 at 3.39.10 PM.jpeg";
import s3 from "@/images/WhatsApp Image 2026-02-23 at 3.39.11 PM.jpeg";

const attractions = [
    {
        title: "DLF Mall of India",
        distance: "15 mins drive",
        image: s1
    },
    {
        title: "Okhla Bird Sanctuary",
        distance: "20 mins drive",
        image: s2
    },
    {
        title: "Worlds of Wonder",
        distance: "15 mins drive",
        image: s3
    },
    {
        title: "Akshardham Temple",
        distance: "30 mins drive",
        image: s1
    },
    {
        title: "Buddh International Circuit",
        distance: "25 mins drive",
        image: s2
    }
];

export function AttractionSlider() {
    return (
        <div className="mt-20 w-[100vw] relative left-[50%] right-[50%] -mx-[50vw] overflow-hidden">
            <h3 className="text-2xl font-serif font-bold text-gray-800 mb-8 uppercase tracking-wider text-center">Nearby Attractions</h3>
            <div className="flex gap-4 w-max animate-scroll hover:animation-pause">
                {[...attractions, ...attractions, ...attractions].map((attr, index) => (
                    <div
                        key={index}
                        className="flex-none w-72 h-48 md:h-64 rounded-xl overflow-hidden relative group shadow-lg"
                    >
                        <img
                            src={attr.image}
                            alt={attr.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end text-left">
                            <h4 className="text-white text-lg font-bold truncate">{attr.title}</h4>
                            <p className="text-[#c5a075] text-sm font-semibold mt-1">{attr.distance}</p>
                        </div>
                    </div>
                ))}
            </div>
            <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333333%);
          }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    );
}

"use client";

import {
    Utensils,
    PartyPopper,
    Wifi,
    Car,
    Dumbbell,
    Briefcase,
} from "lucide-react";
import s1 from "@/images/WhatsApp Image 2026-02-23 at 3.39.08 PM.jpeg";
import s2 from "@/images/WhatsApp Image 2026-02-23 at 3.39.10 PM.jpeg";
import s3 from "@/images/WhatsApp Image 2026-02-23 at 3.39.11 PM.jpeg";
import s4 from "@/images/WhatsApp Image 2026-02-23 at 3.39.12 PM.jpeg";
import s5 from "@/images/WhatsApp Image 2026-02-23 at 3.39.13 PM.jpeg";
import s6 from "@/images/WhatsApp Image 2026-02-23 at 3.39.14 PM.jpeg";

const services = [
    {
        icon: Utensils,
        title: "Restaurant",
        image: s1,
    },
    {
        icon: PartyPopper,
        title: "Banquet Hall",
        image: s2,
    },
    {
        icon: Wifi,
        title: "Free WiFi",
        image: s3,
    },
    {
        icon: Car,
        title: "Parking",
        image: s4,
    },
    {
        icon: Dumbbell,
        title: "Fitness Center",
        image: s5,
    },
    {
        icon: Briefcase,
        title: "Business Center",
        image: s6,
    },
];

export function ServiceSlider() {
    return (
        <div className="pt-20 pb-10 w-[100vw] relative left-[50%] right-[50%] -mx-[50vw] overflow-hidden bg-gray-50">
            <div className="text-center mb-10">
                <p className="text-[#c5a075] font-semibold mb-2 tracking-wider">
                    WHAT WE OFFER
                </p>
                <h2 className="text-4xl font-serif">Our Best Ministrations</h2>
            </div>
            <div className="flex gap-4 w-max animate-scroll hover:animation-pause">
                {[...services, ...services, ...services].map((service, index) => {
                    const Icon = service.icon;
                    return (
                        <div
                            key={index}
                            className="flex-none w-72 h-64 rounded-xl overflow-hidden relative group shadow-lg"
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex flex-col items-center justify-center">
                                <Icon className="w-12 h-12 text-[#c5a075] mb-3 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300" />
                                <h3 className="text-white text-xl font-bold translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    {service.title}
                                </h3>
                            </div>
                        </div>
                    );
                })}
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
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    );
}

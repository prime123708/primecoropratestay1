"use client";

import { useState, useEffect, useRef } from "react";
import {
    ChevronLeft,
    ChevronRight,
    Coffee,
    Users,
    Wifi,
    Car,
    Sparkles,
    Briefcase,
} from "lucide-react";
import s1 from "@/images/i1.jpeg";
import s2 from "@/images/i2.jpeg";
import s3 from "@/images/WhatsApp Image 2026-02-23 at 3.39.11 PM.jpeg";
import s4 from "@/images/Parking.jpg";
import s5 from "@/images/i3.jpeg";
import s6 from "@/images/Business Center.jpg";

const services = [
    {
        icon: Coffee,
        title: "In-Room Dining",
        description: "Enjoy delicious, freshly prepared meals delivered directly to your room for your convenience.",
        image: s1,
    },
    {
        icon: Users,
        title: "Meeting Rooms",
        description: "Modern, fully equipped meeting spaces ideal for your corporate discussions and interviews.",
        image: s2,
    },
    {
        icon: Wifi,
        title: "Free WiFi",
        description: "Stay connected with high-speed internet access available throughout the premises for all our guests.",
        image: s3,
    },
    {
        icon: Car,
        title: "Parking",
        description: "Worry-free parking facilities for your vehicles with 24/7 security and surveillance.",
        image: s4,
    },
    {
        icon: Sparkles,
        title: "Daily Housekeeping",
        description: "Professional daily housekeeping services to ensure your stay is clean, comfortable, and hassle-free.",
        image: s5,
    },
    {
        icon: Briefcase,
        title: "Business Center",
        description: "A professional space equipped with all the essentials to help you stay productive while traveling.",
        image: s6,
    },
];

export function ServiceSlider() {
    const scrollRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = (e) => {
        const { scrollLeft, scrollWidth, clientWidth } = e.target;
        if (scrollWidth <= clientWidth) {
            setScrollProgress(0);
            return;
        }
        const ratio = scrollLeft / (scrollWidth - clientWidth);
        setScrollProgress(Math.max(0, Math.min(ratio, 1)));
    };

    useEffect(() => {
        let interval;
        if (!isPaused && scrollRef.current) {
            interval = setInterval(() => {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
                const slideWidth = scrollRef.current.children[0].clientWidth + 24; // Slide width + gap

                if (scrollLeft + clientWidth >= scrollWidth - 20) {
                    scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
                } else {
                    scrollRef.current.scrollBy({ left: slideWidth, behavior: "smooth" });
                }
            }, 4000);
        }
        return () => clearInterval(interval);
    }, [isPaused]);

    // Drag to scroll functionality
    const isDragging = useRef(false);
    const startX = useRef(0);
    const startScrollLeft = useRef(0);

    const handleMouseDown = (e) => {
        isDragging.current = true;
        setIsPaused(true);
        startX.current = e.pageX - scrollRef.current.offsetLeft;
        startScrollLeft.current = scrollRef.current.scrollLeft;
    };

    const handleMouseLeave = () => {
        isDragging.current = false;
        setIsPaused(false);
    };

    const handleMouseUp = () => {
        isDragging.current = false;
        setIsPaused(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX.current) * 2;
        scrollRef.current.scrollLeft = startScrollLeft.current - walk;
    };

    return (
        <div className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-12">
                <div className="text-center mb-10">
                    <p className="text-[#c5a075] font-semibold mb-2 tracking-wider uppercase">
                        WHAT WE OFFER
                    </p>
                    <h2 className="text-4xl font-serif">Our Best Ministrations</h2>
                </div>
            </div>

            <div className="w-full relative group">
                <button
                    onClick={() => {
                        if (scrollRef.current && scrollRef.current.children[0]) {
                            const slideWidth = scrollRef.current.children[0].clientWidth + 24;
                            scrollRef.current.scrollBy({ left: -slideWidth, behavior: "smooth" });
                        }
                    }}
                    className="absolute left-4 md:left-6 top-[30%] md:top-[40%] -translate-y-1/2 z-50 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl hover:bg-gray-100 transform hover:scale-110 active:scale-95 transition-all duration-200 opacity-100"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-6 h-6 text-gray-800" />
                </button>
                <button
                    onClick={() => {
                        if (scrollRef.current && scrollRef.current.children[0]) {
                            const slideWidth = scrollRef.current.children[0].clientWidth + 24;
                            scrollRef.current.scrollBy({ left: slideWidth, behavior: "smooth" });
                        }
                    }}
                    className="absolute right-4 md:right-6 top-[30%] md:top-[40%] -translate-y-1/2 z-50 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl hover:bg-gray-100 transform hover:scale-110 active:scale-95 transition-all duration-200 opacity-100"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-6 h-6 text-gray-800" />
                </button>
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                    className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 sm:px-8 gap-6 md:gap-10 pb-4 cursor-grab active:cursor-grabbing"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
                >
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                className="flex-none w-[85vw] md:w-[70vw] lg:w-[50vw] snap-center shrink-0 flex flex-col bg-white"
                            >
                                <div className="w-full h-[300px] md:h-[450px] mb-8 overflow-hidden shadow-sm relative group">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 pointer-events-none"
                                        draggable="false"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                        <Icon className="w-20 h-20 text-white/80" />
                                    </div>
                                </div>
                                <div className="flex flex-col flex-grow px-2 md:px-0 bg-white">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-10 h-10 flex items-center justify-center bg-[#c5a075]/10 rounded-full">
                                            <Icon className="w-6 h-6 text-[#c5a075]" />
                                        </div>
                                        <h3 className="text-2xl font-serif text-gray-900 tracking-widest uppercase">
                                            {service.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 mb-8 leading-relaxed font-light text-lg">
                                        {service.description}
                                    </p>
                                    <div className="flex items-center justify-between mt-auto mb-6 px-1">
                                        <a href="/services" className="text-[#a47c45] font-semibold tracking-widest text-sm uppercase hover:text-gray-900 transition-colors flex items-center group">
                                            <span className="border-b-2 border-transparent group-hover:border-[#a47c45] pb-1 transition-all">MORE &gt;</span>
                                        </a>
                                        <a href="/contact" className="bg-[#b38b59] text-white px-10 py-4 text-sm font-bold tracking-widest uppercase hover:bg-[#8e6d42] transition-colors">
                                            Book Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Progress indicator */}
                <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-16 mb-4">
                    <div className="w-full md:w-1/2 mx-auto h-[1px] bg-gray-300 relative flex overflow-hidden">
                        <div
                            className="absolute top-0 left-0 h-[2px] bg-[#c5a075] transition-all duration-150"
                            style={{
                                width: `${(100 / services.length)}%`,
                                transform: `translateX(${scrollProgress * (services.length - 1) * 100}%)`
                            }}
                        ></div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
            `}</style>
        </div>
    );
}

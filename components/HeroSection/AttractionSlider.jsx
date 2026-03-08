"use client";

import { useState, useEffect, useRef } from "react";
import mallImg from "@/images/DLF MALL OF INDIA.jpg";
import birdImg from "@/images/Okhla-Bird-Sanctuary-.jpg";
import wonderImg from "@/images/WORLD OF WONDER.jpg";
import akshardhamImg from "@/images/swaminarayan-akshardham-complex-delhi.jpg";
import buddhImg from "@/images/BUDDHA INTERNATION CIRCUIT.webp";

const attractions = [
    {
        title: "DLF Mall of India",
        description: "One of the largest malls in India, offering a wide range of international brands, dining, and entertainment options.",
        distance: "15 mins drive",
        image: mallImg
    },
    {
        title: "Okhla Bird Sanctuary",
        description: "A peaceful retreat for nature lovers and bird watchers, home to over 300 species of birds.",
        distance: "20 mins drive",
        image: birdImg
    },
    {
        title: "Worlds of Wonder",
        description: "A popular amusement and water park perfect for a fun-filled day with family and friends.",
        distance: "15 mins drive",
        image: wonderImg
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

export function AttractionSlider() {
    const scrollRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        let interval;
        if (!isPaused && scrollRef.current) {
            interval = setInterval(() => {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
                const slideWidth = scrollRef.current.children[0].clientWidth + 24; // Slide width + gap loosely

                if (scrollLeft + clientWidth >= scrollWidth - 20) {
                    scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
                } else {
                    scrollRef.current.scrollBy({ left: slideWidth, behavior: "smooth" });
                }
            }, 4000);
        }
        return () => clearInterval(interval);
    }, [isPaused]);

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft } = scrollRef.current;
            const slideWidth = scrollRef.current.children[0].clientWidth + 24;
            const index = Math.round(scrollLeft / slideWidth);
            setActiveIndex(Math.min(index, attractions.length - 1));
        }
    };

    // Drag to scroll functionality (Slide holding feature)
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
        const walk = (x - startX.current) * 2; // Scroll-fast multiplier
        scrollRef.current.scrollLeft = startScrollLeft.current - walk;
    };

    return (
        <div className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-12">
                <div className="flex justify-center text-center">
                    <h2 className="text-4xl font-serif">Nearby <br className="md:hidden" /> Attractions</h2>
                </div>
            </div>

            <div className="w-full relative">
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
                    {attractions.map((attr, index) => (
                        <div
                            key={index}
                            className="flex-none w-[85vw] md:w-[70vw] lg:w-[50vw] snap-center shrink-0 flex flex-col"
                        >
                            <div className="w-full h-[300px] md:h-[450px] mb-8 overflow-hidden shadow-sm">
                                <img
                                    src={attr.image}
                                    alt={attr.title}
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 pointer-events-none"
                                    draggable="false"
                                />
                            </div>
                            <div className="flex flex-col flex-grow px-2 md:px-0">
                                <h3 className="text-2xl font-serif text-gray-900 mb-4 tracking-widest uppercase">
                                    {attr.title}
                                </h3>
                                <p className="text-gray-600 mb-8 leading-relaxed font-light text-lg">
                                    {attr.description}
                                    <span className="block mt-2 text-[#c5a075] font-semibold text-sm tracking-wider uppercase">
                                        {attr.distance}
                                    </span>
                                </p>
                                <div className="flex items-center justify-between mt-auto">
                                    <a href="/attractions" className="text-[#a47c45] font-semibold tracking-widest text-sm uppercase hover:text-gray-900 transition-colors flex items-center group">
                                        <span className="border-b-2 border-transparent group-hover:border-[#a47c45] pb-1 transition-all">MORE &gt;</span>
                                    </a>
                                    <a href="/contact" className="bg-[#b38b59] text-white px-10 py-4 text-sm font-bold tracking-widest uppercase hover:bg-[#8e6d42] transition-colors">
                                        Book Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Progress indicator */}
                {/* <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-16 mb-4">
                    <div className="w-full md:w-1/2 mx-auto h-[1px] bg-gray-300 relative flex overflow-hidden">
                        <div
                            className="absolute top-0 left-0 h-[2px] bg-[#c5a075] transition-all duration-300"
                            style={{
                                width: `${(100 / attractions.length)}%`,
                                transform: `translateX(${activeIndex * 100}%)`
                            }}
                        ></div>
                    </div>
                </div> */}
            </div>
            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </div>
    );
}

"use client";

import { useState, useEffect, useRef } from "react";
import g1 from "@/images/WhatsApp Image 2026-03-07 at 3.07.50 PM.jpeg";
import g2 from "@/images/WhatsApp Image 2026-03-07 at 3.07.51 PM (1).jpeg";
import g3 from "@/images/WhatsApp Image 2026-03-07 at 3.07.51 PM (2).jpeg";
import g4 from "@/images/WhatsApp Image 2026-03-07 at 3.07.51 PM.jpeg";
import g5 from "@/images/WhatsApp Image 2026-03-07 at 3.07.52 PM (1).jpeg";
import g6 from "@/images/WhatsApp Image 2026-03-07 at 3.07.52 PM (2).jpeg";

const galleryImages = [g1, g2, g3, g4, g5, g6];

export function GallerySlider() {
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
                if (!scrollRef.current.children[0]) return;
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
        <div className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-8">
                <div className="flex justify-center text-center">
                    <h2 className="text-4xl font-serif">Gallery</h2>
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
                    {galleryImages.map((img, index) => (
                        <div
                            key={index}
                            className="flex-none w-[85vw] md:w-[70vw] lg:w-[50vw] snap-center shrink-0"
                        >
                            <div className="w-full h-[300px] md:h-[500px] overflow-hidden shadow-md">
                                <img
                                    src={img}
                                    alt={`Gallery Image ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 pointer-events-none"
                                    draggable="false"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Progress indicator */}
                <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-8 mb-4">
                    <div className="w-full md:w-1/2 mx-auto h-[1px] bg-gray-300 relative flex overflow-hidden">
                        <div
                            className="absolute top-0 left-0 h-[2px] bg-[#c5a075] transition-all duration-150"
                            style={{
                                width: `${(100 / galleryImages.length)}%`,
                                transform: `translateX(${scrollProgress * (galleryImages.length - 1) * 100}%)`
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

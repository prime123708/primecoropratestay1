"use client";

import { useState, useRef } from "react";
import i1 from "@/images/i1.jpeg";
import i2 from "@/images/i2.jpeg";
import i3 from "@/images/i3.jpeg";

const offers = [
    {
        title: "Suite Privilege – Members Exclusive",
        link: "/contact",
        image: i1,
        boxPosition: "left"
    },
    {
        title: "Early Booking Advantage",
        link: "/contact",
        image: i2,
        boxPosition: "center"
    },
    {
        title: "Stay Longer, Experience More",
        link: "/contact",
        image: i3,
        boxPosition: "right"
    }
];

export function OffersSection() {
    const scrollRef = useRef(null);

    // Drag to scroll functionality for mobile
    const isDragging = useRef(false);
    const startX = useRef(0);
    const startScrollLeft = useRef(0);

    const handleMouseDown = (e) => {
        isDragging.current = true;
        startX.current = e.pageX - scrollRef.current.offsetLeft;
        startScrollLeft.current = scrollRef.current.scrollLeft;
    };

    const handleMouseLeave = () => {
        isDragging.current = false;
    };

    const handleMouseUp = () => {
        isDragging.current = false;
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX.current) * 2;
        scrollRef.current.scrollLeft = startScrollLeft.current - walk;
    };

    return (
        <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-10">
                <div className="flex justify-center text-center">
                    <h2 className="text-4xl md:text-5xl font-serif text-gray-900 tracking-wider">LATEST OFFERS</h2>
                </div>
            </div>

            <div className="w-full relative max-w-[1400px] mx-auto xl:px-8">
                <div
                    ref={scrollRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide gap-6 pb-4 cursor-grab active:cursor-grabbing px-4 sm:px-8 xl:px-0"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
                >
                    {offers.map((offer, index) => (
                        <div
                            key={index}
                            className="relative flex-none w-[85vw] sm:w-[70vw] md:w-full snap-center shrink-0 group"
                        >
                            {/* Image Container */}
                            <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
                                <img
                                    src={offer.image}
                                    alt={offer.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 pointer-events-none"
                                    draggable="false"
                                />
                            </div>

                            {/* Overlapping White Box */}
                            <div
                                className={`absolute -bottom-6 bg-white p-6 shadow-md transition-all duration-300 group-hover:shadow-lg w-[85%] sm:w-[80%] md:w-[90%] lg:w-[85%] z-10
                                    ${offer.boxPosition === 'left' ? 'left-6 md:-left-4 xl:-left-8' : ''}
                                    ${offer.boxPosition === 'center' ? 'left-1/2 -translate-x-1/2' : ''}
                                    ${offer.boxPosition === 'right' ? 'right-6 md:-right-4 xl:-right-8' : ''}
                                `}
                            >
                                <h3 className="text-lg md:text-xl font-serif text-gray-800 mb-3 tracking-wide uppercase">
                                    {offer.title}
                                </h3>
                                <a
                                    href={offer.link}
                                    className="text-[#a47c45] font-semibold text-sm tracking-widest uppercase hover:text-gray-900 transition-colors flex items-center w-fit"
                                >
                                    <span className="border-b border-transparent hover:border-[#a47c45] pb-0.5 transition-all">
                                        MORE &gt;
                                    </span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Extra padding at bottom to account for the overlapping boxes */}
            <div className="h-12 md:h-16"></div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
            `}</style>
        </div>
    );
}

import { useState, useEffect } from "react";

export function useTestimonialSlider(testimonials, interval = 6000) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    if (!testimonials || testimonials.length === 0) return;
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, interval);
    return () => clearInterval(timer);
  }, [testimonials.length, interval]);

  return { currentTestimonial, setCurrentTestimonial };
}

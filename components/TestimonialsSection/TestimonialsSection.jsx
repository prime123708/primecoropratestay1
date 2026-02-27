import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Kavita",
    text: "I recently stayed at Prime Corporate Stay for three days during my friend's wedding, and I had a wonderful experience. All the pre-wedding events were so beautifully organized and managed.",
    rating: 5,
  },
  {
    name: "Manish",
    text: "Had an opportunity to stay at Prime Corporate Stay while on a private visit. A centrally located and affordable. The staff are very friendly and indulging. The food was awesome.",
    rating: 5,
  },
  {
    name: "Manoj",
    text: "The hotel is really beautiful and the rooms are spacious. Some of the rooms have balcony which adds more space to relax and enjoy sunlight.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#8B4513] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-white/80 font-semibold mb-2">TESTIMONIALS</p>
          <h2 className="text-4xl font-serif">Happy Customer Says</h2>
        </div>

        <div className="relative min-h-[200px]">
          <div className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-slide text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-xl italic mb-6">"{testimonial.text}"</p>
                <h4 className="text-2xl font-bold">{testimonial.name}</h4>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            <div className="dot active"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .testimonial-slider {
          position: relative;
        }
        .testimonial-slide {
          opacity: 0;
          position: absolute;
          inset: 0;
          animation: testimonialFade 18s infinite;
        }
        .testimonial-slide:nth-child(1) { animation-delay: 0s; position: relative; }
        .testimonial-slide:nth-child(2) { animation-delay: 6s; }
        .testimonial-slide:nth-child(3) { animation-delay: 12s; }
        @keyframes testimonialFade {
          0%, 33.33% { opacity: 1; }
          33.34%, 100% { opacity: 0; }
        }
        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255,255,255,0.5);
          animation: dotPulse 18s infinite;
        }
        .dot:nth-child(2) { animation-delay: 6s; }
        .dot:nth-child(3) { animation-delay: 12s; }
        @keyframes dotPulse {
          0%, 33.33% { background: white; width: 32px; border-radius: 6px; }
          33.34%, 100% { background: rgba(255,255,255,0.5); width: 12px; }
        }
      `}</style>
    </section>
  );
}

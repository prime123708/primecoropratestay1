import hero1 from "@/images/WhatsApp Image 2026-02-23 at 3.39.08 PM.jpeg";
import hero2 from "@/images/WhatsApp Image 2026-02-23 at 3.39.10 PM.jpeg";
import hero3 from "@/images/WhatsApp Image 2026-02-23 at 3.39.13 PM.jpeg";

export function HeroSection() {
  return (
    <section id="home" className="bg-white pt-8 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-8xl font-bold tracking-tight text-gray-900 mb-6 uppercase leading-tight">
          Welcome to <br /> Prime Corporate Stay
        </h1>

        <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden mb-8">
          <div className="hero-slider">
            <div className="hero-slide" style={{backgroundImage: `url(${hero1})`}}></div>
            <div className="hero-slide" style={{backgroundImage: `url(${hero2})`}}></div>
            <div className="hero-slide" style={{backgroundImage: `url(${hero3})`}}></div>
          </div>
          <div className="absolute inset-0 bg-black/10 z-10" />
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
            Welcome to our Cozy Haven, where Comfort Meets Style and Exceptional Service Elevates Every Experience
          </p>
          <a href="/contact" className="inline-block bg-black text-white px-12 py-5 text-lg font-bold rounded-full hover:bg-gray-800 transition-all tracking-wider uppercase">
            Book now
          </a>
        </div>
      </div>
      <style jsx>{`
        .hero-slider {
          position: absolute;
          inset: 0;
        }
        .hero-slide {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0;
          animation: heroFade 15s ease-in-out infinite;
        }
        .hero-slide:nth-child(1) { animation-delay: 0s; }
        .hero-slide:nth-child(2) { animation-delay: 5s; }
        .hero-slide:nth-child(3) { animation-delay: 10s; }
        @keyframes heroFade {
          0% { opacity: 0; }
          6% { opacity: 1; }
          27% { opacity: 1; }
          33.33% { opacity: 0; }
          100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}

import hero1 from "@/images/WhatsApp Image 2026-02-23 at 3.39.08 PM.jpeg";
import hero2 from "@/images/WhatsApp Image 2026-02-23 at 3.39.10 PM.jpeg";
import hero3 from "@/images/WhatsApp Image 2026-02-23 at 3.39.13 PM.jpeg";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[600px] md:h-screen overflow-hidden">
      <div className="hero-slider">
        <div className="hero-slide" style={{backgroundImage: `url(${hero1})`}}></div>
        <div className="hero-slide" style={{backgroundImage: `url(${hero2})`}}></div>
        <div className="hero-slide" style={{backgroundImage: `url(${hero3})`}}></div>
      </div>
      <div className="absolute inset-0 bg-black/30 z-10" />
      <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <p className="text-[#ffffff] font-semibold tracking-[0.3em] uppercase mb-4 fadeInUp" style={{ animationDelay: '0.2s' }}>
            Welcome to Prime Corporate Stay
          </p>
          <h1 className="text-4xl md:text-7xl text-white font-serif mb-8 leading-tight fadeInUp" style={{ animationDelay: '0.5s' }}>
            Experience Luxury <br /> & Homely Comfort
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 fadeInUp" style={{ animationDelay: '0.8s' }}>
            {/* <a href="/rooms" className="w-full md:w-auto bg-[#c5a075] text-white px-10 py-4 font-bold hover:bg-[#b08e68] transition-all tracking-wider">
              VIEW OUR ROOMS
            </a> */}
            <a href="/contact" className="w-full md:w-auto border-2 border-white text-white px-10 py-4 font-bold hover:bg-white hover:text-black transition-all tracking-wider">
              BOOK YOUR STAY
            </a>
          </div>
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

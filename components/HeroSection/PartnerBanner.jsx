import agoda from "@/images/agoda.png";
import goibibo from "@/images/goibibo.png";
import magicbricks from "@/images/magicbricks.png";
import booking from "@/images/booking.png";

export function PartnerBanner() {
  const partners = [
    { name: 'Agoda', src: agoda },
    { name: 'Goibibo', src: goibibo },
    { name: 'MagicBricks', src: magicbricks },
    { name: 'Booking.com', src: booking },
  ];

  // Duplicate the array to create a seamless infinite loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="mt-8 mb-4">
      <p className="text-gray-600 text-sm md:text-base font-medium mb-4 tracking-wide uppercase">
        Also Available On
      </p>
      
      <div className="relative w-full max-w-3xl mx-auto overflow-hidden bg-white/50 backdrop-blur-sm rounded-xl py-4 flex items-center">
        {/* Left and Right Fade Overlays for a smoother look */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

        <div className="flex w-max animate-infinite-scroll hover:animation-paused">
          {duplicatedPartners.map((partner, index) => (
            <div 
              key={`${partner.name}-${index}`} 
              className="px-6 md:px-12 flex items-center justify-center min-w-[160px] md:min-w-[200px]"
            >
              <img 
                src={partner.src} 
                alt={`${partner.name} logo`} 
                className="h-16 md:h-24 w-auto object-contain transition-all duration-300" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

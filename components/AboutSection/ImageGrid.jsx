import { ExperienceBadge } from "./ExperienceBadge";
import img1 from "@/images/WhatsApp Image 2026-02-23 at 3.39.09 PM.jpeg";
import img2 from "@/images/WhatsApp Image 2026-02-23 at 3.39.11 PM.jpeg";
import img3 from "@/images/WhatsApp Image 2026-02-23 at 3.39.12 PM.jpeg";
import img4 from "@/images/WhatsApp Image 2026-02-23 at 3.39.14 PM.jpeg";

export function ImageGrid() {
  const images = [
    {
      src: img1,
      alt: "Room",
      caption: "Where Guests Feel Home",
    },
    {
      src: img2,
      alt: "Dining",
      caption: "Dine. Relax. Rejoice",
    },
    {
      src: img3,
      alt: "Hospitality",
      caption: "Hospitality. Heart. Home",
    },
    {
      src: img4,
      alt: "Elegant",
      caption: "Elegant Stays, Grand Experiences",
    },
  ];

  return (
    <div className="relative">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          {images.slice(0, 2).map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4 text-white text-sm font-semibold bg-black/40 px-3 py-1 rounded">
                {image.caption}
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-4 pt-12">
          {images.slice(2, 4).map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4 text-white text-sm font-semibold bg-black/40 px-3 py-1 rounded">
                {image.caption}
              </div>
            </div>
          ))}
        </div>
      </div>

      <ExperienceBadge />
    </div>
  );
}

"use client";

import { Star, Award, Users, Clock } from "lucide-react";
import { ParallaxBanner } from "@/components/ParallaxBanner/ParallaxBanner";
import bannerImg from "@/images/WhatsApp Image 2026-02-23 at 3.39.12 PM.jpeg";
import banquetImg from "@/images/WhatsApp Image 2026-02-23 at 3.39.12 PM.jpeg";
import restaurantImg from "@/images/WhatsApp Image 2026-02-23 at 3.39.09 PM.jpeg";

export default function EventsPage() {
  const eventTypes = [
    {
      title: "Corporate Meetings",
      description: "Our state-of-the-art meeting rooms and conference facilities are designed for productive business sessions.",
      icon: <Award className="w-8 h-8" />,
      image: banquetImg
    },
    {
      title: "Weddings & Receptions",
      description: "Create unforgettable memories with our elegant banquet hall and personalized wedding packages.",
      icon: <Star className="w-8 h-8" />,
      image: restaurantImg
    },
    {
      title: "Social Celebrations",
      description: "Host your birthday parties, anniversaries, and family gatherings in our versatile event spaces.",
      icon: <Users className="w-8 h-8" />,
      image: banquetImg
    },
    {
      title: "Team Building",
      description: "Engage your team with our creative team-building activities and spacious indoor and outdoor venues.",
      icon: <Clock className="w-8 h-8" />,
      image: restaurantImg
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <ParallaxBanner src={bannerImg} alt="Events and Banquets">
        <div className="text-center text-white fadeInUp">
          <h1 className="text-5xl md:text-6xl font-serif mb-4 text-white">
            Events & Banquets
          </h1>
          <p className="text-xl">Host your special moments with us</p>
        </div>
      </ParallaxBanner>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#c5a075] font-semibold mb-2 tracking-wider">
              OUR SPACES
            </p>
            <h2 className="text-4xl font-serif">Versatile Venues for Every Occasion</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {eventTypes.map((event, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="w-full md:w-1/2">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="rounded-lg shadow-xl w-full h-64 object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <div className="text-[#c5a075] mb-4 flex justify-center md:justify-start">
                    {event.icon}
                  </div>
                  <h3 className="text-2xl font-serif mb-4">{event.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {event.description}
                  </p>
                  <a
                    href="/contact"
                    className="inline-block border-b-2 border-[#c5a075] text-[#c5a075] font-bold pb-1 hover:text-[#b08e68] hover:border-[#b08e68] transition-all"
                  >
                    BOOK THIS SPACE
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif mb-6">Planning an Event?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our expert event planners are here to help you with every detail,
            from catering to decorations. Let's make your event a success!
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#c5a075] text-white px-10 py-4 font-bold hover:bg-[#b08e68] transition-all rounded"
          >
            GET A QUOTE
          </a>
        </div>
      </section>
    </div>
  );
}

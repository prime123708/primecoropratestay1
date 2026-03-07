"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ParallaxBanner } from "@/components/ParallaxBanner/ParallaxBanner";
import bannerImg from "@/images/WhatsApp Image 2026-02-23 at 3.39.11 PM (2).jpeg";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">

      <ParallaxBanner
        src={bannerImg}
        alt="Contact"
      >
        <div className="text-center text-white fadeIn">
          <h1 className="text-5xl md:text-6xl font-serif mb-4 text-white">Contact Us</h1>
          <p className="text-xl">We're Here to Help</p>
        </div>
      </ParallaxBanner>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="fadeIn">
              <h2 className="text-3xl font-serif mb-8">Get In Touch</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-[#c5a075] mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <a
                      href="tel:+919528544057"
                      className="text-gray-600 hover:text-[#c5a075] transition-colors"
                    >
                      +91 9528544057
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-[#c5a075] mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <a
                      href="mailto:primecorporatestay@gmail.com"
                      className="text-gray-600 hover:text-[#c5a075] transition-colors"
                    >
                      primecorporatestay@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-[#c5a075] mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Address</h3>
                    <p className="text-gray-600">
                      CM 85, Sector 144, Noida,
                      <br />
                      Uttar Pradesh, 201310
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-[#c5a075] mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Hours</h3>
                    <p className="text-gray-600">24/7 Support Available</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">
                  {/* <strong>GST Number:</strong> 09AIPPA2245K1Z3 */}
                </p>
              </div>
            </div>

            <div className="fadeIn" style={{ animationDelay: "200ms" }}>
              <h2 className="text-3xl font-serif mb-8">Send Us a Message</h2>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#c5a075]"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#c5a075]"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#c5a075]"
                    placeholder="+91 XXX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#c5a075]"
                    placeholder="Your message..."
                  />
                </div>

                <button className="w-full bg-[#c5a075] text-white py-4 font-bold rounded hover:bg-[#b08e68] transition-all transform hover:scale-105">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fadeIn {
          animation: fadeIn 0.8s ease-out both;
        }
      `}</style>
    </div>
  );
}

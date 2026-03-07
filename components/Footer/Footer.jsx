import { Phone, Mail, MapPin, Star } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-6">
              <div className="text-3xl font-bold leading-tight mb-6">
                <span className="block text-[#c5a075]">prime</span>
                <span className="block text-[#F7931E] -mt-2">corporate stay</span>
              </div>
            </div>
            <div className="flex space-x-3 mb-6">
              <a
                href="#"
                className="w-12 h-12 bg-white border border-gray-300 rounded flex items-center justify-center hover:bg-[#c5a075] hover:text-white transition-all text-gray-800"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white border border-gray-300 rounded flex items-center justify-center hover:bg-[#c5a075] hover:text-white transition-all text-gray-800"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white border border-gray-300 rounded flex items-center justify-center hover:bg-[#c5a075] hover:text-white transition-all text-gray-800"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </a>
            </div>
            <a href="/contact"><button className="bg-[#c5a075] text-white px-8 py-3 font-bold hover:bg-[#b08e68] transition-all">
              RESERVE NOW
            </button></a>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 tracking-wider">
              QUICK LINKS
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <a
                href="/"
                className="text-gray-700 hover:text-[#c5a075] transition-colors"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-gray-700 hover:text-[#c5a075] transition-colors"
              >
                About
              </a>
              <a
                href="/rooms"
                className="text-gray-700 hover:text-[#c5a075] transition-colors"
              >
                Rooms
              </a>
              <a
                href="/gallery"
                className="text-gray-700 hover:text-[#c5a075] transition-colors"
              >
                Gallery
              </a>
              <a
                href="/services"
                className="text-gray-700 hover:text-[#c5a075] transition-colors"
              >
                Amenities
              </a>
              <a
                href="/attractions"
                className="text-gray-700 hover:text-[#c5a075] transition-colors"
              >
                Attractions
              </a>
              <a
                href="/events"
                className="text-gray-700 hover:text-[#c5a075] transition-colors"
              >
                Events
              </a>
              <a
                href="/faq"
                className="text-gray-700 hover:text-[#c5a075] transition-colors"
              >
                FAQs
              </a>
              <a
                href="/privacy-policy"
                className="text-gray-700 hover:text-[#c5a075] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-conditions"
                className="text-gray-700 hover:text-[#c5a075] transition-colors"
              >
                Terms & Conditions
              </a>

              <a
                href="/contact"
                className="text-gray-700 hover:text-[#c5a075] transition-colors"
              >
                Contact Us
              </a>
              {/* <div className="text-gray-700 hover:text-[#c5a075] transition-colors cursor-pointer">
                Pay Now
              </div> */}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 tracking-wider">
              GET IN TOUCH
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-[#c5a075] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="tel:+919528544057"
                    className="text-gray-700 hover:text-[#c5a075] transition-colors"
                  >
                    +91 9528544057
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-5 h-5 text-[#c5a075] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="mailto:primecorporatestay@gmail.com"
                    className="text-gray-700 hover:text-[#c5a075] transition-colors"
                  >
                    primecorporatestay@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-[#c5a075] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-700">
                    CM 85, Sector 144, Noida,
                    <br />
                    Uttar Pradesh, 201310
                  </p>
                </div>
              </div>


            </div>


          </div>
        </div>

        <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-center items-center text-sm text-gray-600">
          <p>Prime Corporate Stay © 2026. All Rights Reserved | Designed & Developed By AdAvenue Brand Labs</p>

        </div>
      </div>
    </footer >
  );
}

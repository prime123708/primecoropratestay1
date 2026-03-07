import { ParallaxBanner } from "@/components/ParallaxBanner/ParallaxBanner";
import bannerImg from "@/images/WhatsApp Image 2026-02-23 at 3.39.08 PM.jpeg";

const faqs = [
  {
    question: "What are the check-in and check-out times?",
    answer: "Check-in time is at 2:00 PM and check-out time is at 11:00 AM. Early check-in or late check-out can be requested, subject to availability."
  },
  {
    question: "Do you offer free Wi-Fi?",
    answer: "Yes, we provide high-speed complimentary Wi-Fi to all our guests throughout the property."
  },
  {
    question: "Is breakfast included in the stay?",
    answer: "Yes, we offer a delicious complimentary breakfast for all our guests from 8:00 AM to 10:30 AM."
  },
  {
    question: "Do you have parking facilities?",
    answer: "Yes, we have secure on-site parking available for our guests free of charge."
  },
  {
    question: "What is your cancellation policy?",
    answer: "Cancellations made 48 hours before the check-in date are eligible for a full refund. Please refer to our terms and conditions for more details."
  },
  {
    question: "Are pets allowed?",
    answer: "Currently, we do not allow pets to ensure the comfort of all our guests."
  },
  {
    question: "Do you provide airport transfers?",
    answer: "Yes, we can arrange airport transfers upon request. Please contact our front desk at least 24 hours in advance to schedule your pickup or drop-off."
  },
  {
    question: "Is there a laundry service available?",
    answer: "Yes, we offer professional laundry and dry-cleaning services for our guests at an additional charge."
  }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <style dangerouslySetInnerHTML={{
        __html: `
          .faq-item {
            border: 1px solid #e5e7eb;
            border-radius: 0.5rem;
            overflow: hidden;
            background: white;
            margin-bottom: 1rem;
          }
          .faq-item summary {
            padding: 1.25rem;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 1.125rem;
            font-weight: 500;
            color: #111827;
            list-style: none;
          }
          .faq-item summary::-webkit-details-marker {
            display: none;
          }
          .faq-item summary::after {
            content: '▼';
            color: #9ca3af;
            transition: transform 0.2s;
          }
          .faq-item[open] summary::after {
            transform: rotate(180deg);
          }
          .faq-item summary:hover {
            background-color: #f9fafb;
          }
          .faq-content {
            padding: 0 1.25rem 1.25rem 1.25rem;
            color: #374151;
            border-top: 1px solid #f3f4f6;
          }
        `
      }} />

      <ParallaxBanner src={bannerImg} alt="FAQs">
        <div className="text-center text-white fadeInUp">
          <h1 className="text-5xl md:text-6xl font-serif mb-4 text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-xl">Everything you need to know about your stay</p>
        </div>
      </ParallaxBanner>

      <section className="py-20 relative z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="faq-item">
                <summary>{faq.question}</summary>
                <div className="faq-content">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif">Property Highlights & Facilities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-2xl font-serif mb-6 flex items-center">
                <span className="w-8 h-8 bg-[#c5a075] text-white rounded-full flex items-center justify-center mr-3 text-sm">✓</span>
                Key Highlights
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#c5a075] rounded-full mr-3"></span>
                  970 meters to public transportation (Sector 144)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#c5a075] rounded-full mr-3"></span>
                  Front desk [24-hour]
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#c5a075] rounded-full mr-3"></span>
                  Free Wi-Fi in all rooms!
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#c5a075] rounded-full mr-3"></span>
                  Air conditioning
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#c5a075] rounded-full mr-3"></span>
                  Daily housekeeping
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-2xl font-serif mb-6 flex items-center">
                <span className="w-8 h-8 bg-[#c5a075] text-white rounded-full flex items-center justify-center mr-3 text-sm">✓</span>
                Available Facilities
              </h3>
              <div className="grid grid-cols-2 gap-4 text-gray-700">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-[#c5a075] rounded-full mr-3"></span>
                  Free Wi-Fi
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-[#c5a075] rounded-full mr-3"></span>
                  Car park
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-[#c5a075] rounded-full mr-3"></span>
                  Front desk [24-hour]
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-[#c5a075] rounded-full mr-3"></span>
                  Restaurants
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-[#c5a075] rounded-full mr-3"></span>
                  Smoke-free property
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-[#c5a075] rounded-full mr-3"></span>
                  Daily housekeeping
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-[#c5a075] rounded-full mr-3"></span>
                  Security [24-hour]
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-[#c5a075] rounded-full mr-3"></span>
                  Internet services
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif mb-6">Still have questions?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            If you can't find the answer you're looking for, please feel free to
            reach out to our friendly team. We're here to help!
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#c5a075] text-white px-10 py-4 font-bold hover:bg-[#b08e68] transition-all rounded"
          >
            CONTACT US
          </a>
        </div>
      </section>
    </div>
  );
}

"use client";

import { ParallaxBanner } from "@/components/ParallaxBanner/ParallaxBanner";
import bannerImg from "@/images/WhatsApp Image 2026-02-23 at 3.39.08 PM.jpeg";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ParallaxBanner src={bannerImg} alt="Privacy Policy">
        <div className="text-center text-white fadeInUp">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl">Your privacy is our priority</p>
        </div>
      </ParallaxBanner>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <div>
              <h2 className="text-3xl font-serif text-gray-900 mb-4">
                Overview
              </h2>
              <p>
                At Prime Corporate Stay, we are committed to protecting your
                privacy and ensuring the security of your personal information.
                This Privacy Policy explains how we collect, use, and safeguard
                your data when you use our website and services.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-serif text-gray-900 mb-4">
                Information We Collect
              </h2>
              <p>
                We may collect personal information such as your name, email
                address, phone number, and ID details when you make a booking or
                inquire about our services. We also collect payment information
                to process your reservation.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-serif text-gray-900 mb-4">
                How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To process and confirm your reservations.</li>
                <li>To communicate with you regarding your stay.</li>
                <li>To improve our services and guest experience.</li>
                <li>To comply with legal and regulatory requirements.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-serif text-gray-900 mb-4">
                Data Security
              </h2>
              <p>
                We implement a variety of security measures to maintain the
                safety of your personal information. Your sensitive information
                (such as credit card details) is encrypted and transmitted securely.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-serif text-gray-900 mb-4">
                Information Sharing
              </h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal
                information to outside parties. This does not include trusted
                third parties who assist us in operating our website or
                conducting our business, as long as those parties agree to keep
                this information confidential.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-serif text-gray-900 mb-4">
                Cookies
              </h2>
              <p>
                Our website may use cookies to enhance your browsing experience.
                Cookies are small files that a site or its service provider
                transfers to your computer's hard drive through your web browser
                that enables the site's systems to recognize your browser and
                capture and remember certain information.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-serif text-gray-900 mb-4">
                Changes to Our Privacy Policy
              </h2>
              <p>
                We may update our Privacy Policy from time to time. Any changes
                will be posted on this page, and the date of the last update
                will be revised accordingly.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-serif text-gray-900 mb-4">
                Contact Us
              </h2>
              <p>
                If you have any questions regarding this Privacy Policy, you
                may contact us using the information on our Contact page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

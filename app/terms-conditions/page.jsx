"use client";

import { ParallaxBanner } from "@/components/ParallaxBanner/ParallaxBanner";
import bannerImg from "@/images/WhatsApp Image 2026-02-23 at 3.39.08 PM.jpeg";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <ParallaxBanner src={bannerImg} alt="Terms and Conditions">
        <div className="text-center text-white fadeInUp">
          <h1 className="text-5xl md:text-6xl font-serif mb-4 text-white">
            Terms & Conditions
          </h1>
          <p className="text-xl">Our rules for a comfortable stay</p>
        </div>
      </ParallaxBanner>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <div>
              <h2 className="text-3xl font-serif text-gray-900 mb-4">
                Introduction
              </h2>
              <p>
                Welcome to Prime Corporate Stay. These terms and conditions
                outline the rules and regulations for the use of our services
                and facilities. By making a reservation and staying with us, you
                accept these terms in full.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-serif text-gray-900 mb-4">
                Booking and Payment
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  A valid ID proof (Aadhar Card, Voter ID, Passport, or Driving
                  License) is mandatory for all guests during check-in.
                </li>
                <li>
                  Full payment is required at the time of check-in or as per the
                  agreed booking terms.
                </li>
                <li>
                  We accept various payment methods, including credit/debit
                  cards, UPI, and bank transfers.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-serif text-gray-900 mb-4">
                Check-in and Check-out
              </h2>
              <p>
                Standard check-in time is 2:00 PM, and check-out time is 11:00
                AM. Early check-in or late check-out is subject to availability
                and may incur additional charges.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-serif text-gray-900 mb-4">
                Cancellation Policy
              </h2>
              <p>
                Cancellations made 48 hours or more before the check-in date
                are eligible for a full refund. Cancellations made within 48
                hours of check-in will incur a charge of one night's stay. No-shows
                will be charged the full amount of the reservation.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-serif text-gray-900 mb-4">
                Guest Conduct
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Guests are expected to maintain a peaceful and respectful
                  environment for others.
                </li>
                <li>
                  Smoking is strictly prohibited inside the rooms. Designated
                  smoking areas are available.
                </li>
                <li>
                  Any damage to property or facilities caused by guests will be
                  charged to the guest's account.
                </li>
                <li>
                  Pets are not allowed on the premises.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-serif text-gray-900 mb-4">
                Privacy and Security
              </h2>
              <p>
                We value your privacy and security. Your personal information
                is handled in accordance with our Privacy Policy. Guests are
                responsible for their personal belongings; the management is not
                liable for any loss or damage.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-serif text-gray-900 mb-4">
                Governing Law
              </h2>
              <p>
                These terms and conditions are governed by and construed in
                accordance with the laws of India. Any disputes relating to
                these terms will be subject to the exclusive jurisdiction of the
                courts in Noida, Uttar Pradesh.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

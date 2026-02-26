import { Phone } from "lucide-react";

export function CallingButton() {
  return (
    <a
      href="tel:+919528544057"
      className="fixed bottom-6 right-4 md:right-6 bg-[#EF4444] text-white px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg flex items-center space-x-2 hover:bg-[#DC2626] transition-all z-50"
    >
      <Phone className="w-4 h-4 md:w-5 md:h-5" />
      <span className="font-semibold text-sm md:text-base">Call Us</span>
    </a>
  );
}

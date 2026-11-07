import React from 'react';
import { MessageCircle } from 'lucide-react';
import { businessConfig } from '../../config/business';

export const FloatingWhatsAppButton: React.FC = () => {
  const defaultMessage = `Hello ${businessConfig.companyName}, I would like to discuss digital growth for my hotel/restaurant.`;
  const whatsappUrl = `https://wa.me/${
    businessConfig.contact.whatsappRaw
  }?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat on WhatsApp with ${businessConfig.companyName}`}
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 h-12 px-4 sm:px-5 rounded-full bg-[#FFBF47] text-[#15120F] font-semibold text-xs sm:text-sm shadow-lg border border-[#F4B942] hover:bg-[#F4B942] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B942] focus-visible:ring-offset-2 focus-visible:ring-offset-[#15120F]"
    >
      <MessageCircle className="w-5 h-5 shrink-0" strokeWidth={2.2} />
      <span className="whitespace-nowrap">Chat on WhatsApp</span>
    </a>
  );
};


import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { businessConfig } from '../config/business';
import { ContactSection } from '../sections';
import { Section, SectionHeading, Button } from '../components';

export const ContactPage: React.FC = () => {
  return (
    <>
      {/* Page Hero Header with Single Primary H1 */}
      <Section
        id="contact-hero"
        spacing="md"
        surface="primary"
        className="border-b border-[#F4B942]/12"
      >
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <SectionHeading
            as="h1"
            kicker={`Contact ${businessConfig.companyName} · ${businessConfig.headquarters.fullAddress}`}
            title={`Connect With ${businessConfig.founder} for Your Hospitality Property.`}
            subtitle="Call directly or submit the structured enquiry form below to open a prefilled WhatsApp consultation for your hotel, resort, guest house, or restaurant."
          />

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <Button
              href={businessConfig.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="md"
              icon={<MessageCircle className="w-4 h-4" />}
            >
              Chat on WhatsApp
            </Button>
            <Button
              href={businessConfig.contact.phoneHref}
              variant="outline"
              size="md"
              icon={<Phone className="w-4 h-4" />}
            >
              Call Now
            </Button>
          </div>
        </div>
      </Section>

      {/* Validated 6-Field WhatsApp Enquiry Form & Direct Contact Cards */}
      <ContactSection />
    </>
  );
};

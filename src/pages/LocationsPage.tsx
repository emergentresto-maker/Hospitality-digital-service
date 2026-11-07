import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import { businessConfig } from '../config/business';
import { locationDetailsData } from '../data/focusCities';
import { FocusCitiesSection } from '../sections';
import { Section, SectionHeading, Button } from '../components';

export const LocationsPage: React.FC = () => {
  return (
    <>
      {/* Page Hero Header with Single Primary H1 */}
      <Section
        id="locations-hero"
        spacing="md"
        surface="secondary"
        className="border-b border-[#F4B942]/12"
      >
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <SectionHeading
            as="h1"
            kicker="Service Areas & Hospitality Corridors"
            title="Supporting Hospitality Businesses Across Our Focus Cities."
            subtitle="Tailored website development, local Google SEO, WhatsApp automation, and advertising for hotels, resorts, guest houses, dharamshalas, and restaurants in Nashik, Trimbakeshwar, Ujjain, and Indore."
          />

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <Button
              href={businessConfig.contact.whatsappPrefilledHref}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="md"
              icon={<MessageCircle className="w-4 h-4" />}
            >
              Enquire for Your City
            </Button>
            <Button
              to="/services"
              variant="outline"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              View All Services
            </Button>
          </div>
        </div>

        {/* Quick City Anchor Bar */}
        <div className="mt-8 pt-6 border-t border-[#F4B942]/12 flex flex-wrap items-center gap-2.5">
          <span className="text-xs font-mono text-[#A69B8D] mr-1">
            Jump to Location:
          </span>
          {locationDetailsData.map((city) => (
            <Link
              key={city.id}
              to={`/locations#${city.id}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#15120F] border border-[#F4B942]/20 text-xs font-medium text-[#F5F1EA] hover:border-[#F4B942] hover:text-[#F4B942] transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#F4B942]" />
              <span>
                {city.number}. {city.title}
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Four Detailed Location Sections: Nashik, Trimbakeshwar, Ujjain, Indore */}
      <FocusCitiesSection hideHeader />
    </>
  );
};


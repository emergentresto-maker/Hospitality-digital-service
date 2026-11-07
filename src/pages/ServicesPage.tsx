import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { businessConfig } from '../config/business';
import { serviceCategories, aiHospitalityGrowthPackage } from '../data/services';
import {
  ServiceHighlightsSection,
  DigitalEngagementResearchSection,
  PricingSection,
} from '../sections';
import { Section, SectionHeading, Button } from '../components';

export const ServicesPage: React.FC = () => {
  return (
    <>
      {/* Page Hero Header with Single Primary H1 */}
      <Section
        id="services-hero"
        spacing="md"
        surface="primary"
        className="border-b border-[#F4B942]/12"
      >
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <SectionHeading
            as="h1"
            kicker={`${businessConfig.companyName} · ${businessConfig.businessCategory}`}
            title="Hotel Website Development, AI Automation, Social Media & Digital Marketing Services."
            subtitle="Complete digital growth infrastructure—from hotel websites, SEO, and WhatsApp automation to AI business workflows, AI-assisted Instagram Reels production, and social media management for hotels and restaurants across Nashik, Trimbakeshwar, Ujjain, and Indore."
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
              to="/contact"
              variant="outline"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Custom Enquiry Form
            </Button>
          </div>
        </div>

        {/* Quick Category & Flagship Jump Bar */}
        <div className="mt-8 pt-6 border-t border-[#F4B942]/12 flex flex-wrap items-center gap-2.5">
          <span className="text-xs font-mono text-[#A69B8D] mr-1">
            Jump to Category:
          </span>
          {serviceCategories.map((cat) => (
            <Link
              key={cat.id}
              to={`/services#category-${cat.id}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1C1814] border border-[#F4B942]/20 text-xs font-medium text-[#F5F1EA] hover:border-[#F4B942] hover:text-[#F4B942] transition-colors"
            >
              <span className="font-mono text-[#F4B942]">{cat.code}.</span>
              <span>{cat.shortLabel}</span>
            </Link>
          ))}
          <Link
            to={`/services#${aiHospitalityGrowthPackage.id}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#28211B] border border-[#F4B942]/45 text-xs font-semibold text-[#F4B942] hover:bg-[#F4B942] hover:text-[#15120F] transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Growth Package</span>
          </Link>
        </div>
      </Section>

      {/* All 15 Services Organized into 4 Categories (A-D) + Flagship AI Growth Package */}
      <ServiceHighlightsSection />

      {/* Section 8: Data-Backed Published Industry Research Section */}
      <DigitalEngagementResearchSection />

      {/* Pricing Schedule & Commercial Disclosures */}
      <PricingSection />
    </>
  );
};

import React from 'react';
import {
  Globe,
  Search,
  MessageSquareMore,
  Megaphone,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Headphones,
  ArrowRight,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { businessConfig } from '../config/business';
import { getServiceWhatsAppUrl } from '../data/services';
import {
  HeroSection,
  AboutIntroSection,
  FocusCitiesSection,
} from '../sections';
import {
  Section,
  SectionHeading,
  Card,
  IconBox,
  Button,
} from '../components';

const fourKeyServices = [
  {
    id: 'website-development',
    number: '01',
    title: 'Website Development',
    price: '₹10,000',
    priceSubtext: 'Starting price · One-time setup',
    description:
      'Mobile-first, fast-loading websites for hotels, resorts, guest houses, and restaurants designed to showcase rooms, menus, and direct booking actions.',
    icon: Globe,
  },
  {
    id: 'seo-services',
    number: '02',
    title: 'SEO Services',
    price: '₹4,999',
    priceSubtext: 'Starting price · Search visibility',
    description:
      'Targeted local and organic search optimization so travellers searching for stays and dining in your city find your property first on Google.',
    icon: Search,
  },
  {
    id: 'whatsapp-automation',
    number: '03',
    title: 'WhatsApp Automation',
    price: '₹2,499',
    priceSubtext: 'Starting price · Instant guest response',
    description:
      'Automated WhatsApp enquiry flows that greet prospective guests, share room tariffs or menus, and capture booking details around the clock.',
    icon: MessageSquareMore,
  },
  {
    id: 'google-ads-management',
    number: '04',
    title: 'Google & Meta Ads',
    price: 'Custom Quote',
    priceSubtext: 'Tailored campaign management',
    description:
      'High-intent Google Search and visual Instagram/Facebook ad campaigns engineered to fill rooms during peak pilgrimage, weekend, and wedding seasons.',
    icon: Megaphone,
  },
];

const whyChoosePillars = [
  {
    number: '01',
    title: '100% Hospitality-Focused Execution',
    description:
      'Every website layout, SEO keyword strategy, and WhatsApp enquiry flow is purpose-built for hotels, resorts, homestays, pilgrimage lodges, and restaurants.',
    icon: Sparkles,
  },
  {
    number: '02',
    title: 'Direct Booking & WhatsApp First',
    description:
      'Instead of losing margins to third-party aggregators, we turn your website visitors into direct WhatsApp and telephone enquiries with your front desk.',
    icon: TrendingUp,
  },
  {
    number: '03',
    title: 'Transparent Commercial Pricing',
    description:
      'Clear starting prices for Website Development (₹10,000), SEO (₹4,999), and WhatsApp Automation (₹2,499) with honest disclosure on ad spend and hosting.',
    icon: ShieldCheck,
  },
  {
    number: '04',
    title: 'Founder-Led Accountability',
    description:
      'Work directly with founder Shubham Upadhyay in Indore with dedicated regional insight across Nashik, Trimbakeshwar, Ujjain, and Indore.',
    icon: Headphones,
  },
];

export const HomePage: React.FC = () => {
  return (
    <>
      {/* 1. Hero Section (contains the page's single primary H1) */}
      <HeroSection />

      {/* 2. Four Key Service Highlights */}
      <Section
        id="key-services"
        spacing="lg"
        surface="secondary"
        className="border-t border-[#F4B942]/12"
      >
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <SectionHeading
            kicker="Core Hospitality Capabilities"
            title="Four Pillars of Direct Guest Acquisition."
            subtitle="Start with our core foundational services or explore our complete catalog of website, SEO, AI automation, Reels production, and social media solutions."
          />

          <div className="shrink-0">
            <Button
              to="/services"
              variant="outline"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore All Services &amp; AI Solutions
            </Button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {fourKeyServices.map((service) => {
            const whatsappHref = getServiceWhatsAppUrl(service.title, service.price);
            return (
              <Card
                key={service.number}
                as="article"
                variant="interactive"
                className="flex flex-col justify-between p-5 sm:p-6"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <IconBox icon={service.icon} size="md" variant="gold" />
                    <span className="font-mono text-xs text-[#F4B942] tabular-nums">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="font-serif-display text-2xl font-semibold text-[#F5F1EA] leading-snug">
                    {service.title}
                  </h3>

                  <div className="mt-3 pb-3 border-b border-[#F4B942]/12">
                    <p className="font-mono text-xl font-semibold text-[#F4B942] tabular-nums">
                      {service.price}
                    </p>
                    <p className="text-xs text-[#A69B8D] mt-0.5">
                      {service.priceSubtext}
                    </p>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-[#D2C9BD] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-3.5 border-t border-[#F4B942]/12 flex items-center justify-between gap-2">
                  <Button
                    to={`/services#${service.id}`}
                    variant="ghost"
                    size="sm"
                    className="!px-0 text-xs text-[#D2C9BD] hover:text-[#F4B942]"
                  >
                    Details
                  </Button>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FFBF47] hover:text-[#F4B942] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Enquire</span>
                  </a>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* 3. About UPWORD Introduction */}
      <AboutIntroSection />

      {/* 4. Why Choose UPWORD */}
      <Section
        id="why-choose-upword"
        spacing="lg"
        surface="primary"
        className="border-t border-[#F4B942]/12"
      >
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <SectionHeading
            kicker={`Why Choose ${businessConfig.companyName}`}
            title="Built Specifically for Hospitality Owners & Managers."
            subtitle="We combine refined hospitality presentation with structured execution so your property builds sustainable direct booking momentum."
          />

          <div className="shrink-0">
            <Button
              to="/process"
              variant="outline"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              See Our 8-Step Process &amp; Analytics
            </Button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {whyChoosePillars.map((pillar) => (
            <Card
              key={pillar.number}
              as="article"
              variant="default"
              className="p-5 sm:p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <IconBox icon={pillar.icon} size="md" variant="subtle" />
                  <span className="font-mono text-xs text-[#F4B942] tabular-nums">
                    {pillar.number}
                  </span>
                </div>
                <h3 className="font-serif-display text-xl sm:text-2xl font-semibold text-[#F5F1EA] leading-snug">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-[#D2C9BD] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* 5. Short Preview of Target Service Locations */}
      <FocusCitiesSection compact />

      {/* 6. Final WhatsApp Consultation CTA */}
      <Section
        id="home-cta"
        spacing="lg"
        surface="primary"
        className="border-t border-[#F4B942]/15"
      >
        <Card variant="elevated" className="p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs font-medium tracking-wider uppercase text-[#F4B942] mb-2">
                Ready to Upgrade Your Hospitality Digital Presence?
              </p>
              <h2 className="font-serif-display text-2xl sm:text-4xl font-semibold text-[#F5F1EA] leading-tight">
                Start Your Hotel or Restaurant Growth Plan With UPWORD.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#D2C9BD] leading-relaxed">
                Speak directly with {businessConfig.founder} to discuss website development, local Google rankings, or WhatsApp enquiry automation for your property in Nashik, Trimbakeshwar, Ujjain, or Indore.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center justify-end gap-3.5">
              <Button
                href={businessConfig.contact.whatsappPrefilledHref}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                icon={<MessageCircle className="w-4 h-4" />}
              >
                Get Free Consultation
              </Button>
              <Button
                href={businessConfig.contact.phoneHref}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
                icon={<Phone className="w-4 h-4" />}
              >
                Call Now
              </Button>
            </div>
          </div>
        </Card>
      </Section>
    </>
  );
};

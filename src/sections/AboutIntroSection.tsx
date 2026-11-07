import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Compass, Building2, Phone, MessageCircle, ArrowUpRight } from 'lucide-react';
import { businessConfig } from '../config/business';
import { targetMarkets } from '../data/markets';
import { Section, SectionHeading, Card, IconBox, Button } from '../components';

export const AboutIntroSection: React.FC = () => {
  return (
    <Section id="about" spacing="lg" surface="primary" className="border-t border-[#F4B942]/12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
        {/* Left Column: Short About UPWORD Introduction */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <SectionHeading
              kicker={`About ${businessConfig.companyName}`}
              title="Dedicated Digital Growth Partner for Hotels, Resorts & Restaurants."
            />

            <div className="mt-6 space-y-4 text-sm sm:text-base text-[#D2C9BD] leading-relaxed">
              <p>
                <strong className="text-[#F5F1EA] font-semibold">
                  {businessConfig.companyName}
                </strong>{' '}
                is a specialized {businessConfig.businessCategory.toLowerCase()} headquartered in{' '}
                <span className="text-[#F5F1EA]">{businessConfig.headquarters.fullAddress}</span>{' '}
                and founded by{' '}
                <span className="text-[#F5F1EA] font-medium">{businessConfig.founder}</span>.
              </p>
              <p>
                From hotel website development in Nashik and dedicated hotel website developer
                support in Trimbakeshwar to hospitality digital marketing in Ujjain and restaurant
                website development in Indore, we build digital assets that help hospitality
                properties attract guests directly.
              </p>
              <p>
                Whether you operate a hillside resort, a spiritual heritage stay, a boutique city
                hotel, or a fine-dining restaurant, we align your website, hotel SEO services,
                WhatsApp automation for hotels, and hotel Google Ads management into one cohesive
                growth system.
              </p>
            </div>
          </div>

          {/* Founder & Headquarters Callout Card */}
          <Card variant="minimal" className="mt-8 p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <IconBox icon={Building2} size="md" variant="gold" />
                <div>
                  <h3 className="text-sm font-semibold text-[#F5F1EA] font-sans">
                    Led by {businessConfig.founder}
                  </h3>
                  <p className="text-xs text-[#A69B8D] mt-0.5">
                    Founder · {businessConfig.headquarters.fullAddress}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                <Button
                  href={businessConfig.contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="sm"
                  icon={<MessageCircle className="w-3.5 h-3.5" />}
                >
                  Chat on WhatsApp
                </Button>
                <Button
                  href={businessConfig.contact.phoneHref}
                  variant="outline"
                  size="sm"
                  icon={<Phone className="w-3.5 h-3.5" />}
                >
                  Call Now
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column: Target Markets Grid (Nashik, Trimbakeshwar, Ujjain, Indore) */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div className="mb-6">
            <div className="flex items-center gap-2 text-xs font-medium text-[#F4B942] mb-2">
              <Compass className="w-4 h-4" />
              <span>Focused Regional Expertise</span>
            </div>
            <h3 className="font-serif-display text-2xl sm:text-3xl font-semibold text-[#F5F1EA]">
              Key Hospitality Markets We Serve
            </h3>
            <p className="mt-2 text-sm text-[#D2C9BD]">
              Tailored digital solutions across four high-demand hospitality destinations in
              Maharashtra and Madhya Pradesh.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {targetMarkets.map((market, index) => (
              <Card
                key={market.id}
                as="article"
                variant="interactive"
                className="flex flex-col justify-between p-5 sm:p-6"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#A69B8D] mb-3">
                    <span className="font-mono text-[#F4B942] tabular-nums">
                      0{index + 1}
                    </span>
                    <span>{market.state}</span>
                  </div>
                  <h3 className="font-serif-display text-2xl font-semibold text-[#F5F1EA]">
                    {market.city}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-[#F4B942]/95">
                    {market.regionTag}
                  </p>
                  <p className="mt-2 text-xs text-[#D2C9BD] leading-relaxed">
                    {market.seoDescription}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-[#F4B942]/12 flex items-center justify-between gap-2 text-xs">
                  <span className="inline-flex items-center gap-1.5 text-[#A69B8D]">
                    <MapPin className="w-3.5 h-3.5 text-[#F4B942] shrink-0" />
                    <span>{market.fullName}</span>
                  </span>
                  <Link
                    to={market.seoLandingPageRoute}
                    className="inline-flex items-center gap-1 font-medium text-[#F4B942] hover:text-[#FFBF47] transition-colors shrink-0"
                  >
                    <span>{market.city} SEO Guide</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};


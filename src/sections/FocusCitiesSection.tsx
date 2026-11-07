import React, { useState } from 'react';
import {
  MapPin,
  ExternalLink,
  MessageCircle,
  Building2,
  Info,
  Check,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';
import {
  locationDetailsData,
  LocationSectionData,
} from '../data/focusCities';
import { Section, SectionHeading, Card, Button } from '../components';

const DetailedLocationBlock: React.FC<{
  city: LocationSectionData;
  isReversed?: boolean;
}> = ({ city, isReversed = false }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Card
      as="article"
      id={city.id}
      variant="default"
      className="p-0 overflow-hidden scroll-mt-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Image Column */}
        <div
          className={`lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] lg:min-h-full bg-[#1C1814] overflow-hidden border-b lg:border-b-0 ${
            isReversed
              ? 'lg:order-2 lg:border-l border-[#F4B942]/15'
              : 'lg:border-r border-[#F4B942]/15'
          }`}
        >
          {!imageError ? (
            <img
              src={city.image}
              alt={city.imageAlt}
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-center"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#211B16] via-[#1C1814] to-[#15120F] flex items-center justify-center">
              <Building2 className="w-12 h-12 text-[#F4B942]/25" strokeWidth={1.5} />
            </div>
          )}

          <div
            className="absolute inset-0 bg-gradient-to-t from-[#15120F]/90 via-[#15120F]/30 to-transparent"
            aria-hidden="true"
          />

          <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 text-xs">
            <span className="font-mono font-semibold text-[#F4B942] bg-[#15120F]/90 backdrop-blur-sm px-2.5 py-1 rounded-md border border-[#F4B942]/25 tabular-nums">
              {city.number}
            </span>
            <span className="text-[#F5F1EA] bg-[#15120F]/90 backdrop-blur-sm px-2.5 py-1 rounded-md border border-[#F4B942]/20 flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#F4B942] shrink-0" />
              <span>{city.state}</span>
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
            <p className="text-xs font-medium text-[#F4B942] mb-1">
              {city.focusSummary}
            </p>
            <h2 className="font-serif-display text-2xl sm:text-3xl font-bold tracking-wide text-[#F5F1EA] leading-tight">
              {city.title}, {city.state}
            </h2>
          </div>
        </div>

        {/* Content Column */}
        <div
          className={`lg:col-span-7 p-5 sm:p-7 lg:p-8 flex flex-col justify-between ${
            isReversed ? 'lg:order-1' : ''
          }`}
        >
          <div className="space-y-5">
            {/* Location Introduction */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F4B942] mb-2">
                Location Overview
              </h3>
              <p className="text-xs sm:text-sm text-[#D2C9BD] leading-relaxed">
                {city.introduction}
              </p>
            </div>

            {/* Relevant Hospitality Business Categories */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F5F1EA] mb-2">
                Hospitality Business Categories Served
              </h3>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs text-[#D2C9BD]">
                {city.propertyTypes.map((type, idx) => (
                  <React.Fragment key={type}>
                    <span className="font-medium text-[#F5F1EA]">{type}</span>
                    {idx < city.propertyTypes.length - 1 && (
                      <span aria-hidden="true" className="text-[#F4B942]">
                        ·
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Two-column breakdown: Services Available & Growth Opportunities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-3 border-t border-[#F4B942]/12">
              <div>
                <h3 className="text-xs font-semibold text-[#F5F1EA] mb-2.5 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#F4B942] shrink-0" />
                  <span>Services Available in {city.title}</span>
                </h3>
                <ul className="space-y-1.5">
                  {city.servicesAvailable.map((srv) => (
                    <li
                      key={srv}
                      className="text-xs text-[#D2C9BD] flex items-start gap-2 leading-relaxed"
                    >
                      <span className="text-[#F4B942] mt-0.5">•</span>
                      <span>{srv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-[#F5F1EA] mb-2.5 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-[#F4B942] shrink-0" />
                  <span>Local Growth Opportunities</span>
                </h3>
                <ul className="space-y-1.5">
                  {city.growthOpportunities.map((opp) => (
                    <li
                      key={opp}
                      className="text-xs text-[#D2C9BD] flex items-start gap-2 leading-relaxed"
                    >
                      <span className="text-[#F4B942] mt-0.5">•</span>
                      <span>{opp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Verified Independent Regional Landmarks */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#15120F] border border-[#F4B942]/12">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                <span className="text-xs font-semibold text-[#F5F1EA]">
                  Regional Market Landmarks ({city.title})
                </span>
                <span className="text-[11px] font-mono text-[#A69B8D]">
                  Independent Businesses · Not UPWORD Clients
                </span>
              </div>

              <ul className="space-y-2">
                {city.independentExamples.map((place) => (
                  <li
                    key={place.name}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3 text-xs pt-1.5 first:pt-0 border-t first:border-t-0 border-[#F4B942]/10"
                  >
                    <div className="min-w-0">
                      <span className="text-[#D2C9BD] font-medium block break-words">
                        {place.name}
                      </span>
                      <span className="text-[11px] text-[#A69B8D] block">
                        Independent Business · Not an UPWORD Client
                      </span>
                    </div>
                    <a
                      href={place.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${place.name} (${place.locationLabel}) on Google Maps`}
                      className="inline-flex items-center gap-1 text-xs font-medium text-[#F4B942] hover:text-[#FFBF47] transition-colors whitespace-nowrap shrink-0 self-start sm:self-center"
                    >
                      <span>Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card Footer CTA */}
          <div className="mt-6 pt-4 border-t border-[#F4B942]/12 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <p className="text-xs text-[#A69B8D]">
              Explore our complete {city.city} digital strategy or message UPWORD directly.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <Button
                to={city.seoLandingPageRoute}
                variant="outline"
                size="md"
                className="w-full sm:w-auto"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                {city.seoLandingPageLabel}
              </Button>
              <Button
                href={city.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
                className="w-full sm:w-auto"
                icon={<MessageCircle className="w-4 h-4" />}
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

const CompactLocationPreviewCard: React.FC<{ city: LocationSectionData }> = ({
  city,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Card
      as="article"
      variant="interactive"
      className="p-0 overflow-hidden flex flex-col justify-between"
    >
      <div>
        <div className="relative aspect-[4/3] w-full bg-[#1C1814] overflow-hidden border-b border-[#F4B942]/15">
          {!imageError ? (
            <img
              src={city.image}
              alt={city.imageAlt}
              width={600}
              height={450}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-center transition-transform duration-200 hover:scale-[1.02]"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#211B16] via-[#1C1814] to-[#15120F] flex items-center justify-center">
              <Building2 className="w-10 h-10 text-[#F4B942]/25" strokeWidth={1.5} />
            </div>
          )}

          <div
            className="absolute inset-0 bg-gradient-to-t from-[#211B16] via-[#15120F]/35 to-transparent"
            aria-hidden="true"
          />

          <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between text-xs">
            <span className="font-mono font-semibold text-[#F4B942] bg-[#15120F]/85 backdrop-blur-sm px-2 py-0.5 rounded border border-[#F4B942]/25 tabular-nums">
              {city.number}
            </span>
            <span className="text-[#F5F1EA] bg-[#15120F]/85 backdrop-blur-sm px-2 py-0.5 rounded border border-[#F4B942]/20 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#F4B942] shrink-0" />
              <span>{city.state}</span>
            </span>
          </div>

          <div className="absolute bottom-3.5 left-5 right-5">
            <h3 className="font-serif-display text-2xl font-bold text-[#F5F1EA] leading-tight">
              {city.title}
            </h3>
          </div>
        </div>

        <div className="p-5">
          <p className="text-xs font-medium text-[#F4B942]">{city.focusSummary}</p>
          <p className="mt-2 text-xs text-[#D2C9BD] leading-relaxed line-clamp-3">
            {city.introduction}
          </p>
        </div>
      </div>

      <div className="px-5 pb-5 pt-2">
        <Button
          to={city.seoLandingPageRoute}
          variant="outline"
          size="sm"
          className="w-full"
          icon={<ArrowRight className="w-3.5 h-3.5" />}
        >
          {city.seoLandingPageLabel}
        </Button>
      </div>
    </Card>
  );
};

interface FocusCitiesSectionProps {
  compact?: boolean;
  hideHeader?: boolean;
}

export const FocusCitiesSection: React.FC<FocusCitiesSectionProps> = ({
  compact = false,
  hideHeader = false,
}) => {
  if (compact) {
    return (
      <Section
        id="focus-cities-preview"
        spacing="lg"
        surface="secondary"
        className="border-t border-[#F4B942]/12"
      >
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <SectionHeading
            kicker="Primary Hospitality Markets"
            title="Supporting Hospitality Businesses Across Our Focus Cities."
            subtitle="Dedicated website development, local SEO, WhatsApp enquiry automation, and ad management across Nashik, Trimbakeshwar, Ujjain, and Indore."
          />

          <div className="shrink-0">
            <Button
              to="/locations"
              variant="outline"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              View All 4 Service Locations
            </Button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {locationDetailsData.map((city) => (
            <CompactLocationPreviewCard key={city.id} city={city} />
          ))}
        </div>
      </Section>
    );
  }

  return (
    <Section
      id="focus-cities"
      spacing="lg"
      surface="primary"
      className="border-t border-[#F4B942]/12 scroll-mt-20"
    >
      {!hideHeader && (
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
          <SectionHeading
            kicker="Service Areas & Hospitality Corridors"
            title="Supporting Hospitality Businesses Across Our Focus Cities."
            subtitle="Tailored digital growth solutions designed for the distinct seasonal, pilgrimage, leisure, and dining dynamics of Nashik, Trimbakeshwar, Ujjain, and Indore."
          />

          <div className="max-w-md rounded-xl bg-[#1C1814] border border-[#F4B942]/20 p-4 flex items-start gap-3">
            <Info className="w-4 h-4 text-[#F4B942] shrink-0 mt-0.5" />
            <p className="text-xs text-[#D2C9BD] leading-relaxed">
              Referenced properties are verified independent businesses shown solely to illustrate regional hospitality markets and are not claimed as UPWORD clients.
            </p>
          </div>
        </div>
      )}

      {hideHeader && (
        <div className="mb-8 rounded-xl bg-[#1C1814] border border-[#F4B942]/20 p-4 flex items-start gap-3">
          <Info className="w-4 h-4 text-[#F4B942] shrink-0 mt-0.5" />
          <p className="text-xs text-[#D2C9BD] leading-relaxed">
            <strong>Transparency Note:</strong> Referenced properties below include verified Google Maps links to independent businesses shown solely to illustrate regional hospitality markets. They are independent businesses and are never claimed as UPWORD clients.
          </p>
        </div>
      )}

      {/* Four Dedicated Location Sections: Nashik, Trimbakeshwar, Ujjain, Indore */}
      <div className="space-y-8 sm:space-y-10">
        {locationDetailsData.map((city, idx) => (
          <DetailedLocationBlock
            key={city.id}
            city={city}
            isReversed={idx % 2 === 1}
          />
        ))}
      </div>
    </Section>
  );
};


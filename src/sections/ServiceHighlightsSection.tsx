import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  MessageCircle,
  Check,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';
import {
  servicesCatalog,
  serviceCategories,
  aiHospitalityGrowthPackage,
  getServiceWhatsAppUrl,
  ServiceCategory,
  ServiceOffering,
} from '../data/services';
import { Section, SectionHeading, Card, IconBox, Button } from '../components';

const filterTabs: { id: ServiceCategory; label: string }[] = [
  { id: 'all', label: 'All Categories (A–D)' },
  { id: 'website-search', label: 'A. Website & Search' },
  { id: 'communication-automation', label: 'B. Communication & AI' },
  { id: 'content-social', label: 'C. Content & Social' },
  { id: 'paid-growth', label: 'D. Paid Ads & Growth' },
];

const INITIAL_VISIBLE_FEATURES = 4;

const ServiceCard: React.FC<{ service: ServiceOffering }> = ({ service }) => {
  const [expanded, setExpanded] = useState(false);
  const whatsappUrl = getServiceWhatsAppUrl(service.title, service.price);
  const hasCollapsibleFeatures = service.inclusions.length > INITIAL_VISIBLE_FEATURES;
  const displayedInclusions =
    expanded || !hasCollapsibleFeatures
      ? service.inclusions
      : service.inclusions.slice(0, INITIAL_VISIBLE_FEATURES);
  const featureListId = `features-${service.id}`;

  return (
    <Card
      id={service.id}
      as="article"
      variant={service.featured ? 'elevated' : 'interactive'}
      className="p-5 sm:p-7 flex flex-col justify-between scroll-mt-24"
    >
      <div>
        {/* Card Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3.5 pb-4 border-b border-[#F4B942]/12">
          <div className="flex items-start gap-3">
            <IconBox
              icon={service.icon}
              size="md"
              variant={service.featured || service.isNewExpansion ? 'gold' : 'subtle'}
            />
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs text-[#F4B942] tabular-nums">
                  Service {service.number}
                </span>
                {service.isNewExpansion && (
                  <span className="text-[11px] font-mono font-semibold text-[#15120F] bg-[#F4B942] px-2 py-0.5 rounded">
                    AI &amp; Social Expansion
                  </span>
                )}
              </div>
              <h3 className="font-serif-display text-xl sm:text-2xl font-semibold text-[#F5F1EA] leading-snug mt-1 break-words">
                {service.title}
              </h3>
            </div>
          </div>

          <div className="flex sm:flex-col items-baseline sm:items-end justify-between sm:justify-start gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#F4B942]/10 shrink-0">
            <span className="text-[11px] text-[#A69B8D]">
              {service.isStartingPrice
                ? 'Starting Setup Price'
                : service.isNewExpansion
                ? 'Tailored Scope'
                : 'Custom Retainer / Scope'}
            </span>
            <span
              className={`font-mono font-semibold text-[#F4B942] tabular-nums ${
                service.isStartingPrice ? 'text-lg sm:text-xl' : 'text-sm sm:text-base'
              }`}
            >
              {service.price}
            </span>
          </div>
        </div>

        {/* Service Description */}
        <p className="mt-4 text-xs sm:text-sm text-[#F5F1EA]/95 font-medium leading-relaxed">
          {service.description}
        </p>

        {/* Business Value Explanation */}
        <div className="mt-3.5 p-3.5 rounded-xl bg-[#15120F] border border-[#F4B942]/15">
          <div className="flex items-start gap-2">
            <TrendingUp className="w-4 h-4 text-[#F4B942] shrink-0 mt-0.5" />
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#F4B942] block">
                Hospitality Business Value
              </span>
              <p className="mt-1 text-xs text-[#D2C9BD] leading-relaxed">
                {service.businessValue}
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Features List with Accessible Accordion */}
        <div className="mt-4">
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <p className="text-xs font-semibold text-[#F5F1EA]">
              Key Features &amp; Deliverables ({service.inclusions.length}):
            </p>
          </div>

          <ul id={featureListId} className="space-y-2">
            {displayedInclusions.map((inclusion) => (
              <li
                key={inclusion}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D2C9BD]"
              >
                <Check
                  className="w-4 h-4 text-[#F4B942] shrink-0 mt-0.5"
                  strokeWidth={2}
                />
                <span>{inclusion}</span>
              </li>
            ))}
          </ul>

          {hasCollapsibleFeatures && (
            <button
              type="button"
              aria-expanded={expanded}
              aria-controls={featureListId}
              onClick={() => setExpanded((prev) => !prev)}
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#F4B942] hover:text-[#FFBF47] transition-colors cursor-pointer py-1"
            >
              {expanded ? (
                <>
                  <span>Show fewer features</span>
                  <ChevronUp className="w-3.5 h-3.5" />
                </>
              ) : (
                <>
                  <span>
                    Show all {service.inclusions.length} features (+
                    {service.inclusions.length - INITIAL_VISIBLE_FEATURES} more)
                  </span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          )}
        </div>

        {/* Operational & Compliance Note (if present) */}
        {service.operationalNote && (
          <div className="mt-4 pt-3 border-t border-[#F4B942]/12 flex items-start gap-2 text-[11px] text-[#A69B8D] leading-relaxed">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F4B942] shrink-0 mt-0.5" />
            <span>{service.operationalNote}</span>
          </div>
        )}
      </div>

      {/* Card Footer: Price Note + Prefilled WhatsApp CTA */}
      <div className="mt-6 pt-4 border-t border-[#F4B942]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5">
        <span className="text-xs text-[#A69B8D]">{service.priceSubtext}</span>

        <Button
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant={
            service.isStartingPrice || service.featured || service.isNewExpansion
              ? 'primary'
              : 'outline'
          }
          size="md"
          className="w-full sm:w-auto"
          icon={<MessageCircle className="w-4 h-4" />}
        >
          {service.ctaLabel}
        </Button>
      </div>
    </Card>
  );
};

export const ServiceHighlightsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ServiceCategory>('all');
  const location = useLocation();

  // Ensure deep-linked service anchors (#website-development, #ai-business-automation, etc.) always resolve
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && servicesCatalog.some((s) => s.id === hash)) {
      setActiveFilter('all');
    }
  }, [location.hash]);

  const categoriesToRender =
    activeFilter === 'all'
      ? serviceCategories
      : serviceCategories.filter((cat) => cat.id === activeFilter);

  return (
    <Section id="services" spacing="md" surface="secondary">
      {/* Header & Interactive Category Filter Controls */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <SectionHeading
          kicker="Structured 4-Category Hospitality Catalog"
          title="Website, AI Automation, Social Media & Digital Growth Services."
          subtitle="Organized into four core hospitality growth pillars—preserving our confirmed foundational setup prices while offering tailored strategy & pricing for AI workflows, Reels production, and social media management."
        />

        {/* Responsive Segmented Filter Controls */}
        <div
          role="tablist"
          aria-label="Filter hospitality services by category"
          className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap items-center gap-1.5 p-1.5 bg-[#15120F] border border-[#F4B942]/18 rounded-xl w-full lg:w-auto self-start lg:self-auto"
        >
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-2 text-xs font-medium rounded-lg transition-colors text-center cursor-pointer ${
                  isActive
                    ? 'bg-[#FFBF47] text-[#15120F] font-semibold shadow-sm'
                    : 'text-[#D2C9BD] hover:text-[#F5F1EA] hover:bg-[#211B16]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Category-Grouped Service Sections (A, B, C, D) */}
      <div className="mt-10 space-y-14">
        {categoriesToRender.map((categoryInfo) => {
          const categoryServices = servicesCatalog.filter(
            (s) => s.category === categoryInfo.id
          );

          return (
            <div key={categoryInfo.id} id={`category-${categoryInfo.id}`} className="scroll-mt-24">
              {/* Category Header Bar */}
              <div className="pb-4 mb-6 border-b border-[#F4B942]/20 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#F4B942]">
                    Category {categoryInfo.code}
                  </span>
                  <h2 className="font-serif-display text-2xl sm:text-3xl font-semibold text-[#F5F1EA] mt-0.5">
                    {categoryInfo.label}
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[#D2C9BD] max-w-xl">
                  {categoryInfo.description}
                </p>
              </div>

              {/* Category Service Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
                {categoryServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Section 6: Flagship Combined Package ("AI-Powered Hospitality Growth Management") */}
      <div id={aiHospitalityGrowthPackage.id} className="mt-14 scroll-mt-24">
        <Card variant="elevated" className="p-6 sm:p-8 lg:p-10 border-2 border-[#F4B942]/45">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#F4B942] text-[#15120F] font-mono text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{aiHospitalityGrowthPackage.badge}</span>
                </span>
                <span className="font-mono text-xs text-[#F4B942]">
                  {aiHospitalityGrowthPackage.pricingLabel}
                </span>
              </div>

              <h2 className="font-serif-display text-2xl sm:text-4xl font-semibold text-[#F5F1EA] leading-tight">
                {aiHospitalityGrowthPackage.title}
              </h2>

              <p className="text-sm sm:text-base font-medium text-[#F4B942]">
                {aiHospitalityGrowthPackage.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-[#D2C9BD] leading-relaxed">
                {aiHospitalityGrowthPackage.description}
              </p>

              <div className="p-4 rounded-xl bg-[#15120F] border border-[#F4B942]/15 text-xs text-[#A69B8D] leading-relaxed">
                {aiHospitalityGrowthPackage.operationalNote}
              </div>
            </div>

            <div className="lg:col-span-5 lg:border-l border-[#F4B942]/20 lg:pl-8 flex flex-col justify-between gap-6">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F5F1EA] mb-3">
                  Integrated Capabilities Included (9 Pillars):
                </h3>
                <ul className="space-y-2">
                  {aiHospitalityGrowthPackage.pillars.map((pillar) => (
                    <li
                      key={pillar}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D2C9BD]"
                    >
                      <Check
                        className="w-4 h-4 text-[#F4B942] shrink-0 mt-0.5"
                        strokeWidth={2}
                      />
                      <span>{pillar}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#F4B942]/15">
                <Button
                  href={aiHospitalityGrowthPackage.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  icon={<MessageCircle className="w-4 h-4" />}
                >
                  {aiHospitalityGrowthPackage.ctaLabel}
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
};

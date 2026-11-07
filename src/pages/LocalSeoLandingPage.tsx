import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  MessageCircle,
  Phone,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Building2,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import { businessConfig } from '../config/business';
import {
  localSeoPagesData,
  localSeoPagesList,
  LocalSeoCitySlug,
} from '../data/localSeoPages';
import { Section, SectionHeading, Card, Button, Container } from '../components';

interface LocalSeoLandingPageProps {
  citySlug: LocalSeoCitySlug;
}

export const LocalSeoLandingPage: React.FC<LocalSeoLandingPageProps> = ({
  citySlug,
}) => {
  const pageData = localSeoPagesData[citySlug];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [imageError, setImageError] = useState(false);

  const otherCityPages = localSeoPagesList.filter((p) => p.slug !== citySlug);

  return (
    <article aria-labelledby="local-seo-h1">
      {/* Visible Semantic Breadcrumb Navigation Bar */}
      <nav
        aria-label="Breadcrumb"
        className="bg-[#1C1814] border-b border-[#F4B942]/12 py-3"
      >
        <Container>
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[#A69B8D]">
            <li>
              <Link to="/" className="hover:text-[#F4B942] transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3.5 h-3.5 text-[#F4B942]/60" />
            </li>
            <li>
              <Link
                to="/locations"
                className="hover:text-[#F4B942] transition-colors"
              >
                Service Locations
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3.5 h-3.5 text-[#F4B942]/60" />
            </li>
            <li
              aria-current="page"
              className="text-[#F4B942] font-medium truncate max-w-[240px] sm:max-w-none"
            >
              {pageData.primaryKeyword}
            </li>
          </ol>
        </Container>
      </nav>

      {/* 1. Hero Section with Single Primary H1 */}
      <Section
        id="local-hero"
        spacing="lg"
        surface="primary"
        className="border-b border-[#F4B942]/15"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#F4B942]">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>{pageData.heroKicker}</span>
            </div>

            <h1
              id="local-seo-h1"
              className="font-serif-display font-semibold text-[#F5F1EA] tracking-tight leading-[1.12] break-words"
              style={{ fontSize: 'var(--text-h1)' }}
            >
              {pageData.h1Title}
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[#D2C9BD] leading-relaxed">
              {pageData.heroSubtitle}
            </p>

            {/* Primary Conversion Buttons (No Visible Phone Number) */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3.5">
              <Button
                href={pageData.whatsappInquiryHref}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                icon={<MessageCircle className="w-4 h-4" />}
              >
                Chat on WhatsApp
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
              <Button
                to="/services"
                variant="ghost"
                size="md"
                className="w-full sm:w-auto text-[#F4B942]"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Services
              </Button>
            </div>

            {/* Service-Area & Headquarters Transparency Disclosure */}
            <div className="pt-4 border-t border-[#F4B942]/15 flex items-start gap-2.5 text-xs text-[#A69B8D]">
              <ShieldCheck className="w-4 h-4 text-[#F4B942] shrink-0 mt-0.5" />
              <span>{pageData.serviceAreaDisclosure}</span>
            </div>
          </div>

          {/* Right Column: 4:3 Hospitality Visual Card */}
          <div className="lg:col-span-5">
            <Card className="p-0 overflow-hidden border-[#F4B942]/30">
              <div className="relative aspect-[4/3] w-full bg-[#1C1814]">
                {!imageError ? (
                  <img
                    src={pageData.heroImage}
                    alt={pageData.heroImageAlt}
                    width={800}
                    height={600}
                    fetchPriority="high"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Building2 className="w-12 h-12 text-[#F4B942]/25" />
                  </div>
                )}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#15120F]/90 via-transparent to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded bg-[#15120F]/90 border border-[#F4B942]/25 font-mono text-[#F4B942]">
                    {pageData.cityName}, {pageData.stateName}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#15120F]/90 border border-[#F4B942]/20 text-[#F5F1EA]">
                    Hospitality Digital Growth
                  </span>
                </div>
              </div>

              <div className="p-5 bg-[#211B16]">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-[#F4B942] mb-2">
                  Hospitality Properties We Support in {pageData.cityName}
                </h2>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#D2C9BD]">
                  {pageData.propertyTypesServed.map((type, idx) => (
                    <React.Fragment key={type}>
                      <span className="text-[#F5F1EA] font-medium">{type}</span>
                      {idx < pageData.propertyTypesServed.length - 1 && (
                        <span aria-hidden="true" className="text-[#F4B942]">
                          ·
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* 2. Regional Hospitality Context & Local SEO Overview */}
      <Section
        id="local-overview"
        spacing="lg"
        surface="secondary"
        className="border-b border-[#F4B942]/12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-4">
            <SectionHeading
              kicker={`${pageData.cityName}, ${pageData.stateName} · Hospitality Market Context`}
              title={`Why Digital Visibility Matters for Hospitality Businesses in ${pageData.cityName}.`}
            />

            <div className="mt-4 space-y-4 text-sm sm:text-base text-[#D2C9BD] leading-relaxed">
              {pageData.introductionParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Right Column: Secondary Focus Areas & Starting Package Callout */}
          <div className="lg:col-span-5 space-y-5">
            <Card variant="default" className="p-5 sm:p-6">
              <h3 className="font-serif-display text-2xl font-semibold text-[#F5F1EA]">
                Confirmed Foundational Starting Packages
              </h3>
              <p className="mt-1.5 text-xs text-[#A69B8D]">
                Transparent starting setup rates available for {pageData.cityName} hotels, guest houses, resorts, and restaurants:
              </p>

              <ul className="mt-4 space-y-3 divide-y divide-[#F4B942]/12 text-xs sm:text-sm">
                <li className="pt-2.5 first:pt-0 flex items-center justify-between gap-2">
                  <Link
                    to="/services#website-development"
                    className="text-[#F5F1EA] hover:text-[#F4B942] font-medium transition-colors"
                  >
                    Website Development
                  </Link>
                  <span className="font-mono font-semibold text-[#F4B942] tabular-nums">
                    ₹10,000
                  </span>
                </li>
                <li className="pt-2.5 flex items-center justify-between gap-2">
                  <Link
                    to="/services#seo-services"
                    className="text-[#F5F1EA] hover:text-[#F4B942] font-medium transition-colors"
                  >
                    SEO Services
                  </Link>
                  <span className="font-mono font-semibold text-[#F4B942] tabular-nums">
                    ₹4,999
                  </span>
                </li>
                <li className="pt-2.5 flex items-center justify-between gap-2">
                  <Link
                    to="/services#whatsapp-automation"
                    className="text-[#F5F1EA] hover:text-[#F4B942] font-medium transition-colors"
                  >
                    WhatsApp Automation
                  </Link>
                  <span className="font-mono font-semibold text-[#F4B942] tabular-nums">
                    ₹2,499
                  </span>
                </li>
                <li className="pt-2.5 flex items-center justify-between gap-2">
                  <Link
                    to="/services#ai-business-automation"
                    className="text-[#F5F1EA] hover:text-[#F4B942] font-medium transition-colors"
                  >
                    AI Automation, Reels &amp; Social Media
                  </Link>
                  <span className="font-mono text-xs text-[#F5F1EA]">
                    Custom Strategy &amp; Pricing
                  </span>
                </li>
              </ul>

              <div className="mt-5 pt-4 border-t border-[#F4B942]/15">
                <Button
                  to="/services"
                  variant="outline"
                  size="sm"
                  className="w-full"
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  View Full Pricing &amp; Commercial Terms
                </Button>
              </div>
            </Card>

            {/* Google Business Profile & Service-Area Compliance Box */}
            <Card variant="minimal" className="p-5 border-[#F4B942]/25">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#F4B942] shrink-0 mt-0.5" />
                <p className="text-xs text-[#D2C9BD] leading-relaxed">
                  {pageData.gbpReadinessNote}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* 3. Local Hospitality Challenges & Digital Growth Opportunities */}
      <Section
        id="challenges-opportunities"
        spacing="lg"
        surface="primary"
        className="border-b border-[#F4B942]/12"
      >
        <SectionHeading
          kicker={`Practical Growth Strategy for ${pageData.cityName}`}
          title={`Solving Hospitality Digital Challenges in ${pageData.cityName}.`}
          subtitle={`How hotels, resorts, guest houses, and restaurants in ${pageData.cityName} can turn common visibility bottlenecks into direct guest enquiries.`}
        />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pageData.challengesAndOpportunities.map((item, idx) => (
            <Card
              key={item.challengeTitle}
              as="article"
              variant="default"
              className="p-5 sm:p-7 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-[#F4B942]">
                  <span>SCENARIO 0{idx + 1}</span>
                  <span>{pageData.cityName.toUpperCase()}</span>
                </div>

                <div className="pb-4 border-b border-[#F4B942]/12">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A69B8D]">
                    Common Property Challenge
                  </span>
                  <h3 className="font-serif-display text-xl font-semibold text-[#F5F1EA] mt-1">
                    {item.challengeTitle}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#D2C9BD] leading-relaxed">
                    {item.challengeDetail}
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#F4B942] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>UPWORD Digital Opportunity</span>
                  </span>
                  <h4 className="font-serif-display text-xl font-semibold text-[#F5F1EA] mt-1">
                    {item.opportunityTitle}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-[#D2C9BD] leading-relaxed">
                    {item.opportunityDetail}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* 4. Deep-Dive Local Strategy Pillars */}
      <Section
        id="local-strategy-pillars"
        spacing="lg"
        surface="secondary"
        className="border-b border-[#F4B942]/12"
      >
        <SectionHeading
          kicker={`Core Digital Capabilities in ${pageData.cityName}`}
          title={`Comprehensive Hospitality Digital Services for ${pageData.cityName}.`}
          subtitle="From mobile-first property websites and local Google SEO to WhatsApp enquiry automation, AI workflows, and Instagram Reels."
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {pageData.deepTopicSections.map((topic, idx) => (
            <Card
              key={topic.title}
              as="article"
              variant="interactive"
              className="p-5 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-[#F4B942] tabular-nums">
                  Pillar 0{idx + 1}
                </span>
                <h3 className="font-serif-display text-2xl font-semibold text-[#F5F1EA] mt-1 leading-snug">
                  {topic.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#D2C9BD] leading-relaxed">
                  {topic.body}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F4B942]/12">
                <Link
                  to={topic.serviceLink}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F4B942] hover:text-[#FFBF47] transition-colors"
                >
                  <span>{topic.serviceLinkLabel}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* 5. Complete 14-Service Matrix for this Location */}
      <Section
        id="local-service-matrix"
        spacing="lg"
        surface="primary"
        className="border-b border-[#F4B942]/12"
      >
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <SectionHeading
            kicker={`All Available Services in ${pageData.cityName}`}
            title={`14 Hospitality Digital Growth Services Available in ${pageData.cityName}.`}
            subtitle={`Every service below can be customized for your hotel, guest house, resort, homestay, or restaurant in ${pageData.cityName}. Click any service to inspect full deliverables on our Services page.`}
          />

          <div className="shrink-0">
            <Button
              to="/services"
              variant="outline"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Open Full Services Catalog
            </Button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {pageData.serviceMatrix.map((srv, index) => (
            <Card
              key={srv.id}
              as="article"
              variant="default"
              className="p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs mb-2">
                  <span className="font-mono text-[#F4B942] tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-[11px] text-[#F4B942] bg-[#15120F] px-2 py-0.5 rounded border border-[#F4B942]/20">
                    {srv.priceLabel}
                  </span>
                </div>
                <h3 className="font-serif-display text-xl font-semibold text-[#F5F1EA] leading-snug">
                  {srv.title}
                </h3>
                <p className="mt-2 text-xs text-[#D2C9BD] leading-relaxed">
                  {srv.cityApplication}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#F4B942]/12 flex items-center justify-between gap-2">
                <Link
                  to={srv.serviceRoute}
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#F4B942] hover:text-[#FFBF47] transition-colors"
                >
                  <span>Service Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={pageData.whatsappInquiryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#D2C9BD] hover:text-[#F4B942] transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F4B942]" />
                  <span>Enquire</span>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* 6. Location-Specific FAQ Section */}
      <Section
        id="local-faqs"
        spacing="lg"
        surface="secondary"
        className="border-b border-[#F4B942]/12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              kicker={`${pageData.cityName} Hospitality FAQs`}
              title={`Frequently Asked Questions About ${pageData.primaryKeyword}.`}
              subtitle={`Practical answers for hotel owners, guest house operators, resort managers, and restaurateurs in ${pageData.cityName}.`}
            />

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button
                href={pageData.whatsappInquiryHref}
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

          <div className="lg:col-span-7 space-y-3.5">
            {pageData.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              const answerId = `faq-answer-${pageData.cityId}-${idx}`;
              return (
                <Card
                  key={faq.question}
                  variant="default"
                  className="p-0 overflow-hidden"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() =>
                      setOpenFaqIndex((prev) => (prev === idx ? null : idx))
                    }
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 hover:bg-[#1C1814]/60 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <HelpCircle className="w-4 h-4 text-[#F4B942] shrink-0 mt-1" />
                      <h3 className="font-serif-display text-lg sm:text-xl font-semibold text-[#F5F1EA] leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#F4B942] shrink-0 mt-1" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#A69B8D] shrink-0 mt-1" />
                    )}
                  </button>

                  {isOpen && (
                    <div
                      id={answerId}
                      className="px-5 pb-5 sm:px-6 sm:pb-6 pt-2 border-t border-[#F4B942]/12 text-xs sm:text-sm text-[#D2C9BD] leading-relaxed"
                    >
                      {faq.answer}
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </Section>

      {/* 7. Cross-Links to Other Regional Hospitality Landing Pages & Final Conversion CTA */}
      <Section id="local-cta" spacing="lg" surface="primary">
        <Card variant="elevated" className="p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs font-mono uppercase tracking-wider text-[#F4B942] mb-2">
                Direct Hospitality Consultation · {pageData.cityName}
              </p>
              <h2 className="font-serif-display text-2xl sm:text-4xl font-semibold text-[#F5F1EA] leading-tight">
                Ready to Grow Your Hotel or Restaurant in {pageData.cityName}?
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-[#D2C9BD] leading-relaxed">
                Speak directly with founder {businessConfig.founder} to plan your property website, local Google SEO, WhatsApp automation, or AI-assisted social media strategy.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center justify-end gap-3">
              <Button
                href={pageData.whatsappInquiryHref}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                icon={<MessageCircle className="w-4 h-4" />}
              >
                Chat on WhatsApp
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

          {/* Internal Links to Other Regional SEO Pages */}
          <div className="mt-8 pt-6 border-t border-[#F4B942]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs text-[#A69B8D]">
              Explore other UPWORD hospitality digital marketing corridors:
            </span>
            <div className="flex flex-wrap items-center gap-3">
              {otherCityPages.map((other) => (
                <Link
                  key={other.slug}
                  to={other.slug}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#15120F] border border-[#F4B942]/20 text-xs font-medium text-[#F5F1EA] hover:border-[#F4B942] hover:text-[#F4B942] transition-colors"
                >
                  <MapPin className="w-3 h-3 text-[#F4B942]" />
                  <span>{other.cityName} Digital Marketing</span>
                </Link>
              ))}
              <Link
                to="/locations"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#F4B942] hover:underline"
              >
                <span>All Locations Overview</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </Card>
      </Section>
    </article>
  );
};

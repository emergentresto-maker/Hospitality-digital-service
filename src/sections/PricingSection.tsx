import React from 'react';
import { MessageCircle, Phone, ShieldAlert, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { businessConfig } from '../config/business';
import {
  servicesCatalog,
  aiHospitalityGrowthPackage,
  commercialConditions,
  getServiceWhatsAppUrl,
} from '../data/services';
import { Section, SectionHeading, Card, Button } from '../components';

export const PricingSection: React.FC = () => {
  const startingPriceServices = servicesCatalog.filter((s) => s.isStartingPrice);
  const customServices = servicesCatalog.filter((s) => !s.isStartingPrice);

  return (
    <Section id="pricing" spacing="lg" surface="secondary" className="border-t border-[#F4B942]/15 scroll-mt-20">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <SectionHeading
          kicker="Transparent Pricing & Commercial Policy"
          title="Confirmed Starting Prices & Custom Strategy Scopes."
          subtitle="We preserve our clear starting prices for Website Development (₹10,000), SEO Services (₹4,999), and WhatsApp Automation (₹2,499), while tailoring AI automation, Reels production, and social media management to each property's exact requirements."
        />

        <div className="flex flex-wrap items-center gap-3 shrink-0">
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

      {/* Explicit Setup vs. Custom Strategy Comparison Banner */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card variant="default" className="p-5 sm:p-7 border-[#F4B942]/30">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="font-mono text-xs font-semibold text-[#F4B942] uppercase tracking-wider">
              Tier 1 · Confirmed Starting Packages
            </span>
            <span className="text-xs font-mono text-[#A69B8D]">3 Core Services</span>
          </div>
          <h3 className="font-serif-display text-2xl font-semibold text-[#F5F1EA]">
            Foundational Digital Setup &amp; SEO Packages
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#D2C9BD] leading-relaxed">
            Fixed starting prices for your core digital foundation: Website Development (₹10,000), SEO Services (₹4,999), and WhatsApp Automation (₹2,499). Final scope depends on room count, pages, and custom workflows.
          </p>
          <ul className="mt-4 space-y-2 text-xs text-[#D2C9BD]">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#F4B942] shrink-0 mt-0.5" />
              <span>Website Development — ₹10,000 (Starting price · One-time setup)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#F4B942] shrink-0 mt-0.5" />
              <span>SEO Services — ₹4,999 (Starting price · Search optimization)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#F4B942] shrink-0 mt-0.5" />
              <span>WhatsApp Automation — ₹2,499 (Starting price · Workflow setup)</span>
            </li>
          </ul>
        </Card>

        <Card variant="default" className="p-5 sm:p-7">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="font-mono text-xs font-semibold text-[#F4B942] uppercase tracking-wider">
              Tier 2 · Custom Strategy, AI &amp; Social Retainers
            </span>
            <span className="text-xs font-mono text-[#A69B8D]">
              {customServices.length} Services + Integrated Package
            </span>
          </div>
          <h3 className="font-serif-display text-2xl font-semibold text-[#F5F1EA]">
            Custom Strategy &amp; Pricing (AI, Reels, Social &amp; Ads)
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#D2C9BD] leading-relaxed">
            AI Business Automation, AI-Powered Reels &amp; Video Production, Complete Social Media Management, Community Management, Social Media Analytics, Google/Meta Ads, and Consulting are scoped to your property&apos;s exact deliverables and posting schedules.
          </p>
          <ul className="mt-4 space-y-2 text-xs text-[#D2C9BD]">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#F4B942] shrink-0 mt-0.5" />
              <span>Custom Strategy &amp; Pricing agreed in writing per hospitality client</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#F4B942] shrink-0 mt-0.5" />
              <span>Advertising spend (Google Ads / Meta Ads) is paid separately to ad platforms</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#F4B942] shrink-0 mt-0.5" />
              <span>Domain, web hosting, and third-party WhatsApp/AI API fees are billed separately</span>
            </li>
          </ul>
        </Card>
      </div>

      {/* Highlighted Starting-Price Packages (Website Development ₹10,000, SEO ₹4,999, WhatsApp Automation ₹2,499) */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {startingPriceServices.map((service) => {
          const whatsappUrl = getServiceWhatsAppUrl(service.title, service.price);
          return (
            <Card
              key={service.id}
              variant={service.id === 'website-development' ? 'elevated' : 'default'}
              className="flex flex-col justify-between p-5 sm:p-6"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#A69B8D] mb-3">
                  <span className="font-mono text-[#F4B942] tabular-nums">
                    {service.number}. Foundational Setup
                  </span>
                  <span>Confirmed Starting Price</span>
                </div>

                <h3 className="font-serif-display text-2xl font-semibold text-[#F5F1EA]">
                  {service.title}
                </h3>

                <div className="mt-4 pb-4 border-b border-[#F4B942]/15 flex items-baseline gap-2">
                  <span className="font-mono text-3xl sm:text-4xl font-semibold text-[#F4B942] tabular-nums">
                    {service.price}
                  </span>
                  <span className="text-xs text-[#A69B8D]">onwards</span>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-[#D2C9BD] leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F4B942]/12">
                <Button
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="md"
                  className="w-full"
                  icon={<MessageCircle className="w-4 h-4" />}
                >
                  Book {service.title}
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Complete Service Rate & Pricing Policy Schedule Table */}
      <Card className="mt-10 p-0 overflow-hidden">
        <div className="px-5 py-5 sm:px-8 sm:py-6 bg-[#1C1814] border-b border-[#F4B942]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="font-serif-display text-2xl font-semibold text-[#F5F1EA]">
              Complete Hospitality Service Rate &amp; Strategy Schedule
            </h3>
            <p className="text-xs text-[#A69B8D] mt-0.5">
              Select any service below to open a prefilled WhatsApp enquiry with {businessConfig.companyName}.
            </p>
          </div>
          <span className="font-mono text-xs text-[#F4B942] tabular-nums">
            {servicesCatalog.length} Services + Integrated Package
          </span>
        </div>

        <div className="divide-y divide-[#F4B942]/12">
          {servicesCatalog.map((service) => {
            const whatsappUrl = getServiceWhatsAppUrl(service.title, service.price);
            return (
              <div
                key={service.id}
                className="px-5 py-4 sm:px-8 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 hover:bg-[#1C1814]/60 transition-colors"
              >
                <div className="flex items-start sm:items-center gap-3">
                  <span className="font-mono text-xs text-[#F4B942] tabular-nums mt-1 sm:mt-0">
                    {service.number}.
                  </span>
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-[#F5F1EA]">
                      {service.title}
                    </p>
                    <p className="text-xs text-[#A69B8D] mt-0.5">{service.priceSubtext}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-5 pl-6 sm:pl-0">
                  <span
                    className={`font-mono text-xs sm:text-sm font-semibold tabular-nums ${
                      service.isStartingPrice ? 'text-[#F4B942] sm:text-base' : 'text-[#F5F1EA]'
                    }`}
                  >
                    {service.price}
                  </span>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FFBF47] hover:text-[#F4B942] transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>
                      {service.isNewExpansion ? 'Discuss Your Requirements' : 'WhatsApp Quote'}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}

          {/* Flagship Combined Package Row */}
          <div className="px-5 py-5 sm:px-8 sm:py-6 bg-[#1C1814]/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-start sm:items-center gap-3">
              <span className="font-mono text-xs text-[#F4B942] tabular-nums mt-1 sm:mt-0">
                ★
              </span>
              <div>
                <p className="text-sm sm:text-base font-semibold text-[#F4B942]">
                  {aiHospitalityGrowthPackage.title}
                </p>
                <p className="text-xs text-[#D2C9BD] mt-0.5">
                  {aiHospitalityGrowthPackage.subtitle}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-5 pl-6 sm:pl-0">
              <span className="font-mono text-xs sm:text-sm font-semibold text-[#F4B942]">
                {aiHospitalityGrowthPackage.pricingLabel}
              </span>

              <a
                href={aiHospitalityGrowthPackage.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FFBF47] hover:text-[#F4B942] transition-colors whitespace-nowrap shrink-0"
              >
                <span>{aiHospitalityGrowthPackage.ctaLabel}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </Card>

      {/* Important Commercial Conditions */}
      <div className="mt-12">
        <div className="flex items-center gap-2.5 mb-5">
          <ShieldAlert className="w-4 h-4 text-[#F4B942] shrink-0" />
          <h3 className="font-serif-display text-xl sm:text-2xl font-semibold text-[#F5F1EA]">
            Important Commercial Disclosures (Ad Spend, Hosting &amp; API Costs)
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {commercialConditions.map((condition, idx) => (
            <Card key={condition.id} variant="minimal" className="p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <span className="font-mono text-xs text-[#F4B942] tabular-nums mt-0.5">
                  0{idx + 1}.
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-[#F5F1EA]">
                    {condition.title}
                  </h4>
                  <p className="mt-1.5 text-xs sm:text-sm text-[#D2C9BD] leading-relaxed">
                    {condition.detail}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};



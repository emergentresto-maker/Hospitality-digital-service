import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { businessConfig } from '../config/business';
import { WorkflowSection, AnalyticsSection } from '../sections';
import { Section, SectionHeading, Card, Button } from '../components';

export const ProcessPage: React.FC = () => {
  return (
    <>
      {/* Page Hero Header with Single Primary H1 */}
      <Section
        id="process-hero"
        spacing="md"
        surface="primary"
        className="border-b border-[#F4B942]/12"
      >
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <SectionHeading
            as="h1"
            kicker="Our Process & Hospitality Growth Strategy"
            title="Structured 8-Step Execution & Guest Funnel Analytics."
            subtitle="See how UPWORD takes your hospitality property from initial business discovery and website launch to WhatsApp automation, Google visibility, and measurable guest enquiry tracking."
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
              Discuss Your Growth Roadmap
            </Button>
            <Button
              to="/services"
              variant="outline"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore All 10 Services
            </Button>
          </div>
        </div>
      </Section>

      {/* 8-Step Interactive Hospitality Workflow Flowchart */}
      <WorkflowSection />

      {/* 4 Recharts Hospitality Analytics Visualizations + Mandatory Disclaimer */}
      <AnalyticsSection />

      {/* Bottom CTA */}
      <Section spacing="md" surface="primary" className="border-t border-[#F4B942]/12">
        <Card variant="minimal" className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h2 className="font-serif-display text-2xl font-semibold text-[#F5F1EA]">
              Ready to Implement This 8-Step System for Your Property?
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-[#D2C9BD]">
              Connect with {businessConfig.founder} to review your current website and guest enquiry funnel.
            </p>
          </div>
          <Button
            to="/contact"
            variant="primary"
            size="md"
            className="w-full sm:w-auto shrink-0"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Start Your Consultation
          </Button>
        </Card>
      </Section>
    </>
  );
};

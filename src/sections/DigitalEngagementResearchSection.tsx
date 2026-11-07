import React from 'react';
import { BookOpenCheck, Globe2, Calendar, Info } from 'lucide-react';
import { digitalEngagementResearchData } from '../data/services';
import { Section, SectionHeading, Card } from '../components';

export const DigitalEngagementResearchSection: React.FC = () => {
  return (
    <Section
      id="digital-engagement-research"
      spacing="lg"
      surface="primary"
      className="border-t border-[#F4B942]/15 scroll-mt-20"
    >
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <SectionHeading
          kicker="Published Industry Research (Meta · Ipsos · Kantar)"
          title="Why Digital Engagement Matters for Hospitality Businesses"
          subtitle="Published consumer research across India and global markets highlights how travellers and diners discover brands through short-form video and prefer direct messaging when communicating with businesses."
        />

        {/* Research Attribution & Non-Guarantee Disclaimer */}
        <div className="max-w-md rounded-xl bg-[#1C1814] border border-[#F4B942]/25 p-4 flex items-start gap-3">
          <Info className="w-4 h-4 text-[#F4B942] shrink-0 mt-0.5" />
          <p className="text-xs text-[#D2C9BD] leading-relaxed">
            <strong>Research Attribution Note:</strong> Figures below are third-party published survey results from Meta, Ipsos, and Kantar. They are industry benchmarks—not UPWORD client performance data—and do not guarantee specific results for an individual hotel or restaurant.
          </p>
        </div>
      </div>

      {/* Three Published Study Cards */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {digitalEngagementResearchData.map((study) => (
          <Card
            key={study.id}
            as="article"
            variant="default"
            className="p-5 sm:p-7 flex flex-col justify-between"
          >
            <div>
              {/* Top Metadata Bar: Study Code, Geography & Year */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3.5 border-b border-[#F4B942]/12 text-xs">
                <span className="font-mono font-semibold text-[#F4B942] tabular-nums">
                  {study.code} · {study.categoryLabel}
                </span>
                <div className="flex items-center gap-2 text-[#A69B8D]">
                  <span className="inline-flex items-center gap-1">
                    <Globe2 className="w-3.5 h-3.5 text-[#F4B942]" />
                    <span>{study.geography}</span>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#F4B942]" />
                    <span>{study.year}</span>
                  </span>
                </div>
              </div>

              {/* Headline Statistics */}
              <div className="mt-5 space-y-4">
                {study.metrics.map((metric) => (
                  <div
                    key={metric.value}
                    className="p-4 rounded-xl bg-[#15120F] border border-[#F4B942]/15"
                  >
                    <p className="font-mono text-3xl sm:text-4xl font-semibold text-[#F4B942] tabular-nums">
                      {metric.value}
                    </p>
                    <p className="mt-1.5 text-xs sm:text-sm text-[#F5F1EA] leading-relaxed">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Hospitality Takeaway */}
              <p className="mt-4 text-xs sm:text-sm text-[#D2C9BD] leading-relaxed">
                {study.hospitalityRelevance}
              </p>
            </div>

            {/* Source & Research Context Footer */}
            <div className="mt-6 pt-4 border-t border-[#F4B942]/12 space-y-1.5">
              <div className="flex items-start gap-2 text-xs font-semibold text-[#F5F1EA]">
                <BookOpenCheck className="w-4 h-4 text-[#F4B942] shrink-0 mt-0.5" />
                <span>Source: {study.sourceCitation}</span>
              </div>
              <p className="text-[11px] text-[#A69B8D] leading-relaxed pl-6">
                Context: {study.researchContext}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

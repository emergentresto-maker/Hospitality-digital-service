import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ArrowDown,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Check,
  MessageCircle,
} from 'lucide-react';
import { businessConfig } from '../config/business';
import { workflowSteps, WorkflowStep } from '../data/workflow';
import { Section, SectionHeading, Card, IconBox, Button } from '../components';

const HorizontalConnector: React.FC<{ active: boolean }> = ({ active }) => (
  <div
    className="hidden lg:flex items-center justify-center w-10 xl:w-12 shrink-0 select-none"
    aria-hidden="true"
  >
    <svg viewBox="0 0 48 24" fill="none" className="w-full h-6 overflow-visible">
      <line
        x1="0"
        y1="12"
        x2="38"
        y2="12"
        stroke="rgba(244, 185, 66, 0.22)"
        strokeWidth="1.75"
        strokeDasharray="4 4"
      />
      <line
        x1="0"
        y1="12"
        x2="38"
        y2="12"
        stroke="#F4B942"
        strokeWidth="2"
        className={`transition-opacity duration-200 ${active ? 'opacity-100' : 'opacity-0'}`}
      />
      <path
        d="M33 6L41 12L33 18"
        stroke={active ? '#F4B942' : 'rgba(244, 185, 66, 0.35)'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const RowBridgeConnector: React.FC<{ active: boolean }> = ({ active }) => (
  <div className="hidden lg:block relative h-14 w-full select-none my-1" aria-hidden="true">
    <svg
      viewBox="0 0 1200 56"
      preserveAspectRatio="none"
      fill="none"
      className="w-full h-full overflow-visible"
    >
      <path
        d="M 1050 0 L 1050 28 L 150 28 L 150 52"
        stroke="rgba(244, 185, 66, 0.22)"
        strokeWidth="2"
        strokeDasharray="6 6"
        strokeLinejoin="round"
      />
      <path
        d="M 1050 0 L 1050 28 L 150 28 L 150 52"
        stroke="#F4B942"
        strokeWidth="2.25"
        strokeLinejoin="round"
        className={`transition-opacity duration-200 ${active ? 'opacity-100' : 'opacity-0'}`}
      />
      <path
        d="M 143 44 L 150 53 L 157 44"
        stroke={active ? '#F4B942' : 'rgba(244, 185, 66, 0.38)'}
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const VerticalConnector: React.FC<{ active: boolean }> = ({ active }) => (
  <div
    className="flex lg:hidden flex-col items-center justify-center py-2 select-none"
    aria-hidden="true"
  >
    <div
      className={`w-0.5 h-6 transition-colors duration-200 ${
        active ? 'bg-[#F4B942]' : 'bg-[#F4B942]/25'
      }`}
    />
    <ArrowDown
      className={`w-4 h-4 -mt-1.5 transition-colors duration-200 ${
        active ? 'text-[#F4B942]' : 'text-[#F4B942]/40'
      }`}
      strokeWidth={2}
    />
  </div>
);

interface StepNodeProps {
  step: WorkflowStep;
  isCurrent: boolean;
  isReached: boolean;
  onSelect: () => void;
}

const StepNodeCard: React.FC<StepNodeProps> = ({
  step,
  isCurrent,
  isReached,
  onSelect,
}) => (
  <button
    type="button"
    onClick={onSelect}
    aria-pressed={isCurrent}
    className={`group text-left w-full rounded-xl p-5 sm:p-6 transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B942] ${
      isCurrent
        ? 'bg-[#28211B] border-2 border-[#F4B942] -translate-y-0.5 shadow-sm'
        : isReached
        ? 'bg-[#211B16] border border-[#F4B942]/38 hover:border-[#F4B942]/70 hover:-translate-y-0.5'
        : 'bg-[#211B16]/85 border border-[#F4B942]/15 hover:border-[#F4B942]/40 hover:-translate-y-0.5'
    }`}
  >
    <div className="flex items-center justify-between gap-3 mb-4">
      <IconBox
        icon={step.icon}
        size="md"
        variant={isCurrent ? 'gold' : isReached ? 'subtle' : 'outline'}
      />
      <span
        className={`font-mono text-sm font-semibold tabular-nums transition-colors ${
          isCurrent
            ? 'text-[#FFBF47]'
            : isReached
            ? 'text-[#F4B942]'
            : 'text-[#968C7E] group-hover:text-[#F4B942]'
        }`}
      >
        {step.number}
      </span>
    </div>

    <h3 className="font-serif-display text-xl sm:text-2xl font-semibold text-[#F5F1EA] group-hover:text-[#F4B942] transition-colors leading-snug">
      {step.number} {step.title}
    </h3>

    <p className="mt-2 text-xs sm:text-sm text-[#C8BFB3] leading-relaxed">
      {step.description}
    </p>

    <div className="mt-4 pt-3 border-t border-[#F4B942]/12 flex items-center justify-between text-[11px]">
      <span className={isCurrent ? 'text-[#F4B942] font-medium' : 'text-[#968C7E]'}>
        {isCurrent ? 'Selected Step' : 'Inspect Step'}
      </span>
      <ArrowRight
        className={`w-3.5 h-3.5 transition-transform duration-150 ${
          isCurrent
            ? 'text-[#F4B942] translate-x-0.5'
            : 'text-[#968C7E] group-hover:text-[#F4B942] group-hover:translate-x-0.5'
        }`}
      />
    </div>
  </button>
);

export const WorkflowSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = window.setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % workflowSteps.length);
    }, 3200);
    return () => window.clearInterval(interval);
  }, [isAutoPlaying]);

  const activeStep = workflowSteps[activeStepIndex];
  const rowOneSteps = workflowSteps.slice(0, 4);
  const rowTwoSteps = workflowSteps.slice(4, 8);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveStepIndex((prev) => (prev - 1 + workflowSteps.length) % workflowSteps.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveStepIndex((prev) => (prev + 1) % workflowSteps.length);
  };

  const stepWhatsAppHref = `https://wa.me/${
    businessConfig.contact.whatsappRaw
  }?text=${encodeURIComponent(
    `Hello ${businessConfig.companyName}, I would like to discuss Step ${activeStep.number} (${activeStep.title}) for my hotel/restaurant.`
  )}`;

  return (
    <Section id="workflow" spacing="lg" surface="primary" className="border-t border-[#F4B942]/12">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <SectionHeading
          kicker="Structured Hospitality Execution"
          title="How UPWORD Works"
          subtitle="An eight-step digital growth workflow engineered to take your hotel, resort, or restaurant from initial discovery to measurable direct bookings."
        />

        <div className="flex flex-wrap items-center gap-2.5 self-start lg:self-auto">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous workflow step"
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#211B16] border border-[#F4B942]/25 text-[#F5F1EA] hover:border-[#F4B942] hover:text-[#F4B942] transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <span className="px-3 py-2 rounded-lg bg-[#1C1814] border border-[#F4B942]/15 font-mono text-xs text-[#F4B942] tabular-nums">
            Step {activeStep.number} / 08
          </span>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next workflow step"
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#211B16] border border-[#F4B942]/25 text-[#F5F1EA] hover:border-[#F4B942] hover:text-[#F4B942] transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => setIsAutoPlaying((prev) => !prev)}
            className={`inline-flex items-center gap-2 min-h-[40px] px-4 py-2 rounded-lg text-xs font-medium border transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              isAutoPlaying
                ? 'bg-[#FFBF47] text-[#15120F] border-[#FFBF47] font-semibold'
                : 'bg-[#211B16] text-[#F5F1EA] border-[#F4B942]/30 hover:border-[#F4B942]'
            }`}
          >
            {isAutoPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5" />
                <span>Pause Tour</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-[#F4B942]" />
                <span>Walkthrough Steps</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* DESKTOP HORIZONTAL STRUCTURED FLOWCHART */}
      <div className="mt-12 hidden lg:block">
        <div className="flex items-stretch justify-between">
          {rowOneSteps.map((step, idx) => (
            <React.Fragment key={step.id}>
              <div className="flex-1 min-w-0 flex">
                <StepNodeCard
                  step={step}
                  isCurrent={activeStepIndex === idx}
                  isReached={activeStepIndex >= idx}
                  onSelect={() => {
                    setIsAutoPlaying(false);
                    setActiveStepIndex(idx);
                  }}
                />
              </div>
              {idx < rowOneSteps.length - 1 && (
                <HorizontalConnector active={activeStepIndex > idx} />
              )}
            </React.Fragment>
          ))}
        </div>

        <RowBridgeConnector active={activeStepIndex >= 4} />

        <div className="flex items-stretch justify-between">
          {rowTwoSteps.map((step, idx) => {
            const globalIdx = idx + 4;
            return (
              <React.Fragment key={step.id}>
                <div className="flex-1 min-w-0 flex">
                  <StepNodeCard
                    step={step}
                    isCurrent={activeStepIndex === globalIdx}
                    isReached={activeStepIndex >= globalIdx}
                    onSelect={() => {
                      setIsAutoPlaying(false);
                      setActiveStepIndex(globalIdx);
                    }}
                  />
                </div>
                {idx < rowTwoSteps.length - 1 && (
                  <HorizontalConnector active={activeStepIndex > globalIdx} />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* MOBILE & TABLET VERTICAL FLOWCHART */}
      <div className="mt-10 lg:hidden flex flex-col">
        {workflowSteps.map((step, idx) => (
          <React.Fragment key={step.id}>
            <StepNodeCard
              step={step}
              isCurrent={activeStepIndex === idx}
              isReached={activeStepIndex >= idx}
              onSelect={() => {
                setIsAutoPlaying(false);
                setActiveStepIndex(idx);
              }}
            />
            {idx < workflowSteps.length - 1 && (
              <VerticalConnector active={activeStepIndex > idx} />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* INTERACTIVE STEP INSPECTOR PANEL */}
      <Card variant="elevated" className="mt-10 sm:mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs font-semibold text-[#F4B942] tabular-nums">
                STEP {activeStep.number} OF 08
              </span>
              <span aria-hidden="true" className="text-[#F4B942]">
                ·
              </span>
              <span className="text-xs text-[#C8BFB3]">{activeStep.phase}</span>
            </div>

            <h3 className="font-serif-display text-2xl sm:text-3xl font-semibold text-[#F5F1EA]">
              {activeStep.number}. {activeStep.title}
            </h3>

            <p className="mt-3 text-sm sm:text-base text-[#C8BFB3] leading-relaxed">
              {activeStep.hospitalityFocus}
            </p>
          </div>

          <div className="lg:col-span-5 lg:border-l border-[#F4B942]/15 lg:pl-8 flex flex-col justify-between gap-6">
            <div>
              <p className="text-xs font-semibold text-[#F5F1EA] mb-3">
                Key Execution Checkpoints:
              </p>
              <ul className="space-y-2">
                {activeStep.checkpoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-[#C8BFB3]"
                  >
                    <Check className="w-4 h-4 text-[#F4B942] shrink-0 mt-0.5" strokeWidth={2} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <Button
                href={stepWhatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
                className="w-full sm:w-auto"
                icon={<MessageCircle className="w-4 h-4" />}
              >
                Start with {activeStep.title}
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </Section>
  );
};

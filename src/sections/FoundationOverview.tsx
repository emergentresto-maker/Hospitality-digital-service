import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  Building2,
  Compass,
  TrendingUp,
  Globe,
  BarChart3,
  ShieldCheck,
  Mountain,
} from 'lucide-react';
import { businessConfig } from '../config/business';
import { targetMarkets } from '../data/markets';
import {
  Container,
  Section,
  BrandLogo,
  IconBox,
  Card,
  Button,
  SectionHeading,
} from '../components';

const colorSwatches = [
  {
    name: 'Background Primary',
    hex: businessConfig.theme.background,
    token: '--color-bg-primary',
    role: '60% Dominant Obsidian Canvas',
  },
  {
    name: 'Background Secondary',
    hex: businessConfig.theme.secondary,
    token: '--color-bg-secondary',
    role: '30% Architectural Section Contrast',
  },
  {
    name: 'Card Surface',
    hex: businessConfig.theme.cards,
    token: '--color-bg-card',
    role: 'Elevated Resort Containers',
  },
  {
    name: 'Heritage Gold',
    hex: businessConfig.theme.gold,
    token: '--color-brand-gold',
    role: 'Brand Accent, Kickers & Hairlines',
  },
  {
    name: 'Primary CTA Gold',
    hex: businessConfig.theme.cta,
    token: '--color-brand-cta',
    role: '10% High-Intent Conversion Action',
  },
  {
    name: 'Alabaster Text',
    hex: businessConfig.theme.text,
    token: '--color-text-primary',
    role: 'High-Contrast Editorial Foreground',
  },
];

const iconShowcase = [
  { icon: Building2, label: 'Luxury Hotels & Resorts' },
  { icon: Mountain, label: 'Hilltop & Nature Retreats' },
  { icon: TrendingUp, label: 'Direct Booking Growth' },
  { icon: Globe, label: 'Digital Brand Presence' },
  { icon: Compass, label: 'Regional Market Strategy' },
  { icon: BarChart3, label: 'Revenue & Channel Insights' },
  { icon: ShieldCheck, label: 'Verified Hospitality Partner' },
  { icon: MapPin, label: 'Local Search Dominance' },
];

export const FoundationOverview: React.FC = () => {
  const [heroImageError, setHeroImageError] = useState(false);

  return (
    <div>
      {/* HERO VISUAL IDENTITY & MOUNTAIN RESORT SHOWCASE */}
      <section
        id="brand-identity"
        className="relative min-h-[78vh] lg:min-h-[84vh] flex items-end overflow-hidden border-b border-[#F4B942]/15"
      >
        {/* High-Resolution Mountain Resort Hero Image with Resilient Fallback */}
        <div className="absolute inset-0 z-0 bg-[#1C1814]">
          {!heroImageError ? (
            <img
              src={businessConfig.assets.heroMountainResort}
              alt="Luxury hilltop mountain resort surrounded by green hills and valleys at golden hour"
              referrerPolicy="no-referrer"
              onError={() => setHeroImageError(true)}
              className="w-full h-full object-cover object-center"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#211B16] via-[#1C1814] to-[#15120F] flex items-center justify-center">
              <Mountain className="w-16 h-16 text-[#F4B942]/20" strokeWidth={1.25} />
            </div>
          )}

          {/* Measured Multi-Stop Dark Luxury Scrim Overlay (WCAG AA 4.5:1+ contrast) */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#15120F] via-[#15120F]/75 to-[#15120F]/45"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#15120F]/85 via-[#15120F]/40 to-transparent"
            aria-hidden="true"
          />
        </div>

        {/* Hero Foreground Content */}
        <Container className="relative z-10 py-16 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm font-medium tracking-wider text-[#F4B942] mb-4">
              {businessConfig.businessCategory} · {businessConfig.headquarters.city},{' '}
              {businessConfig.headquarters.state}
            </p>

            <h1
              className="font-serif-display font-semibold text-[#F5F1EA] tracking-tight leading-[1.08]"
              style={{ fontSize: 'var(--text-hero)' }}
            >
              {businessConfig.tagline}
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#F5F1EA]/90 leading-relaxed max-w-2xl">
              Founded by <span className="font-semibold text-[#F4B942]">{businessConfig.founder}</span>,{' '}
              {businessConfig.companyName} crafts bespoke digital growth architectures for luxury
              mountain resorts, heritage hotels, and hospitality destinations across{' '}
              {targetMarkets.map((m) => m.city).join(', ')}.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button
                href={businessConfig.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                icon={<MessageCircle className="w-4 h-4" />}
              >
                Chat on WhatsApp
              </Button>
              <Button
                href={businessConfig.contact.phoneHref}
                variant="outline"
                size="lg"
                icon={<Phone className="w-4 h-4" />}
              >
                Call Now
              </Button>
            </div>

            {/* Quiet Unboxed Metadata Strip */}
            <div className="mt-12 pt-6 border-t border-[#F4B942]/20 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-[#C8BFB3]">
              <span>Founder: {businessConfig.founder}</span>
              <span aria-hidden="true" className="text-[#F4B942]">·</span>
              <span>HQ: {businessConfig.headquarters.fullAddress}</span>
              <span aria-hidden="true" className="text-[#F4B942]">·</span>
              <span>Markets: Nashik, Trimbakeshwar, Ujjain & Indore</span>
            </div>
          </div>
        </Container>
      </section>

      {/* 1. PREMIUM TEXT-BASED LOGO SYSTEM */}
      <Section spacing="md" surface="primary">
        <SectionHeading
          kicker="01. Brand Mark & Wordmark Architecture"
          title="Premium Text-Based Logo System"
          subtitle="Set in Cormorant Garamond Bold with calibrated uppercase architectural tracking and optional tagline lockup."
        />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card variant="elevated" className="flex flex-col justify-between gap-6">
            <div>
              <p className="text-xs font-medium text-[#F4B942] mb-4">
                Primary Brand Lockup (Wordmark + Official Tagline)
              </p>
              <div className="py-6 px-4 rounded-lg bg-[#15120F] border border-[#F4B942]/15">
                <BrandLogo size="xl" showTagline />
              </div>
            </div>
            <p className="text-xs text-[#968C7E]">
              Used in hero intros, brand presentations, and footer signatures.
            </p>
          </Card>

          <Card className="flex flex-col justify-between gap-6">
            <div>
              <p className="text-xs font-medium text-[#F4B942] mb-4">
                Responsive Scale Variants (Single-Element Wordmark)
              </p>
              <div className="space-y-4 py-4 px-5 rounded-lg bg-[#15120F] border border-[#F4B942]/15">
                <div className="flex items-center justify-between border-b border-[#F4B942]/10 pb-3">
                  <BrandLogo size="lg" />
                  <span className="font-mono text-xs text-[#968C7E]">size="lg"</span>
                </div>
                <div className="flex items-center justify-between border-b border-[#F4B942]/10 pb-3">
                  <BrandLogo size="md" />
                  <span className="font-mono text-xs text-[#968C7E]">size="md"</span>
                </div>
                <div className="flex items-center justify-between">
                  <BrandLogo size="sm" />
                  <span className="font-mono text-xs text-[#968C7E]">size="sm" (Top Bar)</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-[#968C7E]">
              Single-element wordmark preserves clean alignment in the sticky top navigation bar.
            </p>
          </Card>
        </div>
      </Section>

      {/* 2 & 3. GOLD & CHARCOAL COLOR SYSTEM + TYPOGRAPHY SYSTEM */}
      <Section id="color-typography" spacing="md" surface="secondary">
        <SectionHeading
          kicker="02. Palette & Typographic Hierarchy"
          title="Gold & Charcoal Color System"
          subtitle="Disciplined 60-30-10 luxury hospitality distribution with warm obsidian surfaces and luminous gold accents."
        />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {colorSwatches.map((swatch) => (
            <Card key={swatch.name} variant="interactive" className="flex flex-col justify-between">
              <div
                className="h-20 w-full rounded-lg border border-white/10 mb-5"
                style={{ backgroundColor: swatch.hex }}
              />
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-serif-display text-xl font-semibold text-[#F5F1EA]">
                    {swatch.name}
                  </h3>
                  <span className="font-mono text-xs text-[#F4B942] tabular-nums">
                    {swatch.hex}
                  </span>
                </div>
                <p className="text-xs text-[#C8BFB3] mt-1">{swatch.role}</p>
                <p className="mt-3 pt-3 border-t border-[#F4B942]/12 font-mono text-[11px] text-[#968C7E]">
                  var({swatch.token})
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Typography System Specification */}
        <div className="mt-14">
          <Card variant="elevated">
            <p className="text-xs font-medium text-[#F4B942] mb-6">
              03. Typography System (2+1 Hospitality Font Pairing)
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="space-y-3 border-b lg:border-b-0 lg:border-r border-[#F4B942]/15 pb-6 lg:pb-0 lg:pr-6">
                <span className="font-mono text-xs text-[#968C7E]">--font-display</span>
                <p className="font-serif-display text-3xl sm:text-4xl font-semibold text-[#F5F1EA]">
                  Cormorant Garamond
                </p>
                <p className="text-xs text-[#C8BFB3] leading-relaxed">
                  Editorial luxury serif used for hero statements, section titles, and the UPWORD
                  wordmark.
                </p>
              </div>

              <div className="space-y-3 border-b lg:border-b-0 lg:border-r border-[#F4B942]/15 pb-6 lg:pb-0 lg:pr-6">
                <span className="font-mono text-xs text-[#968C7E]">--font-sans</span>
                <p className="text-2xl sm:text-3xl font-semibold text-[#F5F1EA] tracking-tight">
                  Plus Jakarta Sans
                </p>
                <p className="text-xs text-[#C8BFB3] leading-relaxed">
                  High-legibility geometric sans-serif for body copy, navigation links, and CTA
                  buttons.
                </p>
              </div>

              <div className="space-y-3">
                <span className="font-mono text-xs text-[#968C7E]">--font-mono · tabular-nums</span>
                <p className="font-mono text-2xl sm:text-3xl font-medium text-[#F4B942] tabular-nums">
                  ₹10,000
                </p>
                <p className="text-xs text-[#C8BFB3] leading-relaxed">
                  Monospace tabular numerals for service pricing, indices, and Recharts metrics.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* 4, 5, 6, 9, 10. UI COMPONENTS, BUTTONS, CARDS, HOVER EFFECTS & ICON SYSTEM */}
      <Section id="ui-components" spacing="md" surface="primary">
        <SectionHeading
          kicker="04. Interactive Primitives & Visual Restraint"
          title="Buttons, Cards, Hover Effects & Icon System"
          subtitle="Every interactive element responds within 160ms using compositor-friendly transforms and tactile gold focus rings."
        />

        {/* Button Styles & Sizes */}
        <Card className="mt-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#F4B942]/12">
            <div>
              <h3 className="font-serif-display text-2xl font-semibold text-[#F5F1EA]">
                Button Variants & Touch-Ready Sizing
              </h3>
              <p className="text-sm text-[#C8BFB3] mt-1">
                Primary conversion CTA (#FFBF47), Heritage Gold (#F4B942), Gold Outline, Secondary
                Card Surface, and Ghost styles.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button
                href={businessConfig.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                icon={<MessageCircle className="w-4 h-4" />}
              >
                Primary CTA
              </Button>
              <Button
                href={businessConfig.contact.phoneHref}
                variant="gold"
                icon={<Phone className="w-4 h-4" />}
              >
                Call Now
              </Button>
              <Button to="/locations" variant="outline">
                Gold Outline
              </Button>
              <Button to="/" variant="secondary">
                Secondary Surface
              </Button>
              <Button to="/contact" variant="ghost">
                Quiet Ghost
              </Button>
            </div>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-[#968C7E]">
              Responsive Size Scale (40px / 44px / 48px minimum height):
            </span>
            <div className="flex flex-wrap items-center gap-3">
              <Button to="/contact" variant="outline" size="sm">
                Small (40px)
              </Button>
              <Button to="/contact" variant="outline" size="md">
                Medium (44px Mobile Standard)
              </Button>
              <Button to="/contact" variant="primary" size="lg">
                Large Hero CTA (48px)
              </Button>
            </div>
          </div>
        </Card>

        {/* Card Designs Showcase */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card variant="default">
            <p className="font-mono text-xs text-[#F4B942] mb-2">variant="default"</p>
            <h3 className="font-serif-display text-2xl font-semibold text-[#F5F1EA]">
              Standard Resort Card
            </h3>
            <p className="mt-2 text-sm text-[#C8BFB3]">
              #211B16 surface with a 15% gold hairline border that subtly brightens on hover.
            </p>
          </Card>

          <Card variant="interactive">
            <p className="font-mono text-xs text-[#F4B942] mb-2">variant="interactive"</p>
            <h3 className="font-serif-display text-2xl font-semibold text-[#F5F1EA]">
              Interactive Lift Card
            </h3>
            <p className="mt-2 text-sm text-[#C8BFB3]">
              Applies smooth 2px compositor upward lift and 42% gold border illumination on hover.
            </p>
          </Card>

          <Card variant="elevated">
            <p className="font-mono text-xs text-[#F4B942] mb-2">variant="elevated"</p>
            <h3 className="font-serif-display text-2xl font-semibold text-[#F5F1EA]">
              Featured Highlight Card
            </h3>
            <p className="mt-2 text-sm text-[#C8BFB3]">
              Enhanced 32% gold hairline border for featured hospitality offerings and key callouts.
            </p>
          </Card>
        </div>

        {/* Consistent Icon System */}
        <Card className="mt-8">
          <div className="mb-6">
            <h3 className="font-serif-display text-2xl font-semibold text-[#F5F1EA]">
              Consistent Hospitality Icon System
            </h3>
            <p className="text-sm text-[#C8BFB3] mt-1">
              Standardized 1.75px architectural stroke width wrapped in reusable IconBox containers.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {iconShowcase.map(({ icon, label }, idx) => (
              <div
                key={label}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#1C1814] border border-[#F4B942]/12 hover:border-[#F4B942]/35 transition-colors"
              >
                <IconBox
                  icon={icon}
                  size="md"
                  variant={idx % 3 === 0 ? 'gold' : idx % 3 === 1 ? 'subtle' : 'outline'}
                />
                <span className="text-xs sm:text-sm font-medium text-[#F5F1EA] leading-snug">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </Section>

      {/* TARGET MARKETS & RESPONSIVE SPACING VERIFICATION */}
      <Section id="markets" spacing="md" surface="secondary">
        <SectionHeading
          kicker="05. Regional Footprint & Responsive Grid"
          title="Target Hospitality Markets"
          subtitle="Responsive 1-to-2-to-4 column layout adapting seamlessly across mobile (375px), tablet (768px), and desktop (1440px)."
        />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {targetMarkets.map((market, index) => (
            <Card
              key={market.id}
              variant="interactive"
              className="flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#968C7E] mb-4">
                  <span className="font-mono tabular-nums text-[#F4B942]">
                    0{index + 1}
                  </span>
                  <span>{market.state}</span>
                </div>
                <h3 className="font-serif-display text-2xl font-semibold text-[#F5F1EA]">
                  {market.city}
                </h3>
                <p className="mt-2 text-xs text-[#C8BFB3] leading-relaxed">
                  {market.regionTag}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F4B942]/12 flex items-center gap-2 text-xs text-[#968C7E]">
                <MapPin className="w-3.5 h-3.5 text-[#F4B942] shrink-0" />
                <span>{market.fullName}</span>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
};

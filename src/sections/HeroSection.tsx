import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Mountain, MapPin } from 'lucide-react';
import { businessConfig } from '../config/business';
import { serviceHighlights } from '../data/services';
import { targetMarkets } from '../data/markets';
import { Container, Button } from '../components';

export const HeroSection: React.FC = () => {
  const [heroImageError, setHeroImageError] = useState(false);

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-between overflow-hidden border-b border-[#F4B942]/15"
    >
      {/* Full-Screen / Near-Full-Screen Mountain Hotel Hero Background (LCP Image — Not Lazy Loaded) */}
      <div className="absolute inset-0 z-0 bg-[#1C1814]">
        {!heroImageError ? (
          <img
            src={businessConfig.assets.heroMountainResort}
            alt="Luxury hilltop mountain resort and hotel overlooking green hills and valleys at golden hour — UPWORD Hospitality Digital Growth Agency"
            width={1920}
            height={1080}
            fetchPriority="high"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={() => setHeroImageError(true)}
            className="w-full h-full object-cover object-[62%_center] sm:object-center"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#211B16] via-[#1C1814] to-[#15120F] flex items-center justify-center">
            <Mountain className="w-16 h-16 text-[#F4B942]/20" strokeWidth={1.25} />
          </div>
        )}

        {/* Measured Multi-Stop Dark Luxury Scrim Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#15120F] via-[#15120F]/78 to-[#15120F]/55"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#15120F]/92 via-[#15120F]/65 to-[#15120F]/30"
          aria-hidden="true"
        />
      </div>

      {/* Main Hero Content */}
      <Container className="relative z-10 pt-10 pb-10 sm:pt-20 sm:pb-14 lg:pt-24 lg:pb-18 my-auto">
        <div className="max-w-3xl">
          {/* Quiet Editorial Kicker */}
          <p className="text-xs sm:text-sm font-medium tracking-wider text-[#F4B942] mb-3.5">
            {businessConfig.companyName} · {businessConfig.tagline}
          </p>

          {/* Single Primary H1 Heading */}
          <h1
            id="hero-heading"
            className="font-serif-display font-semibold text-[#F5F1EA] tracking-tight leading-[1.1] break-words"
            style={{ fontSize: 'var(--text-hero)' }}
          >
            Grow Your Hotel &amp; Restaurant Business Digitally.
          </h1>

          {/* Supporting Text */}
          <p className="mt-4 sm:mt-6 text-sm sm:text-lg lg:text-xl text-[#F5F1EA]/90 leading-relaxed max-w-2xl">
            From professional websites and Google visibility to WhatsApp automation and digital
            advertising, UPWORD manages your complete digital presence.
          </p>

          {/* Primary & Secondary CTA Buttons */}
          <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-4">
            <Button
              href={businessConfig.contact.whatsappHref}
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
              to="/services"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Services
            </Button>
          </div>

          {/* Target Locations Bar (Unboxed Typography with Separators) */}
          <div className="mt-8 sm:mt-10 pt-5 border-t border-[#F4B942]/20 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs sm:text-sm text-[#C8BFB3]">
            <span className="inline-flex items-center gap-1.5 font-medium text-[#F4B942]">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>Service Locations:</span>
            </span>
            {targetMarkets.map((market, index) => (
              <React.Fragment key={market.id}>
                <Link
                  to={market.seoLandingPageRoute}
                  className="text-[#F5F1EA] hover:text-[#F4B942] transition-colors"
                >
                  {market.city}
                </Link>
                {index < targetMarkets.length - 1 && (
                  <span aria-hidden="true" className="text-[#F4B942]/60">
                    ·
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </Container>

      {/* Bottom Hero Strip: 4 Key Service Highlights Preview */}
      <nav
        aria-label="Core Hospitality Service Highlights"
        className="relative z-10 bg-[#15120F]/90 backdrop-blur-md border-t border-[#F4B942]/15"
      >
        <Container className="py-4 sm:py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {serviceHighlights.map((service) => (
              <Link
                key={service.id}
                to={`/services#${service.id}`}
                className="group flex items-start gap-3 rounded-lg p-2 -m-2 hover:bg-[#211B16]/60 transition-colors"
              >
                <span className="font-mono text-xs font-medium text-[#F4B942] tabular-nums mt-0.5">
                  {service.number}.
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#F5F1EA] group-hover:text-[#F4B942] transition-colors">
                    {service.title}
                  </p>
                  <p className="text-xs text-[#A69B8D] mt-0.5 line-clamp-1">
                    {service.shortSummary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </nav>
    </section>
  );
};

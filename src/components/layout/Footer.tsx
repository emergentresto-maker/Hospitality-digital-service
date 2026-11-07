import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, ShieldCheck, X } from 'lucide-react';
import { businessConfig } from '../../config/business';
import { Container } from '../ui/Container';
import { BrandLogo } from '../ui/BrandLogo';
import { Button } from '../ui/Button';
import { primaryNavItems } from './Navbar';

type LegalModalType = 'privacy' | 'terms' | null;

export const Footer: React.FC = () => {
  const [activeLegalModal, setActiveLegalModal] = useState<LegalModalType>(null);

  useEffect(() => {
    if (!activeLegalModal) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveLegalModal(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLegalModal]);

  return (
    <>
      <footer
        role="contentinfo"
        className="bg-[#15120F] border-t border-[#F4B942]/18 pt-12 pb-12 sm:pt-16 sm:pb-14"
      >
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 sm:pb-12 border-b border-[#F4B942]/12">
            {/* Column 1: Brand Identity & Founder */}
            <div className="lg:col-span-4 space-y-3">
              <BrandLogo to="/" size="md" showTagline />
              <p className="text-xs sm:text-sm text-[#C8BFB3] leading-relaxed max-w-sm pt-1">
                {businessConfig.businessCategory} helping hotels, resorts, guest houses, and
                restaurants grow direct bookings and online visibility.
              </p>
              <p className="text-xs text-[#A69B8D]">
                Founded by{' '}
                <span className="text-[#F5F1EA] font-medium">{businessConfig.founder}</span>
              </p>
            </div>

            {/* Column 2: Multi-Page Navigation */}
            <div className="lg:col-span-2">
              <h2 className="text-xs font-semibold tracking-wider uppercase text-[#F4B942] mb-3.5 font-sans">
                Pages
              </h2>
              <nav aria-label="Footer Page Links">
                <ul className="space-y-2.5 text-sm text-[#C8BFB3]">
                  {primaryNavItems.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className="hover:text-[#F4B942] transition-colors inline-block py-0.5"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Column 3: Target Hospitality Markets & Local SEO Guides */}
            <div className="lg:col-span-3">
              <h2 className="text-xs font-semibold tracking-wider uppercase text-[#F4B942] mb-3.5 font-sans">
                Service Locations
              </h2>
              <nav aria-label="Footer Location Links">
                <ul className="space-y-2.5 text-sm text-[#C8BFB3]">
                  {businessConfig.targetMarkets.map((market) => (
                    <li key={market.id}>
                      <Link
                        to={market.seoLandingPageRoute}
                        className="hover:text-[#F4B942] transition-colors inline-block py-0.5"
                      >
                        Hotel Marketing in {market.city}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      to="/locations"
                      className="text-xs text-[#F4B942] hover:text-[#FFBF47] transition-colors inline-block py-0.5 font-medium"
                    >
                      All 4 Service Locations Overview →
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Column 4: Business Address & Direct Contact */}
            <div className="lg:col-span-3">
              <h2 className="text-xs font-semibold tracking-wider uppercase text-[#F4B942] mb-3.5 font-sans">
                Business Address &amp; Contact
              </h2>
              <address className="not-italic space-y-3 text-sm text-[#C8BFB3]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#F4B942] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#F5F1EA]">
                      {businessConfig.companyName} Headquarters
                    </p>
                    <p className="text-xs text-[#C8BFB3] mt-0.5">
                      {businessConfig.headquarters.fullAddress}
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-2.5">
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
              </address>
            </div>
          </div>

          {/* Bottom Bar: Copyright Notice & Legal Links */}
          <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#A69B8D]">
            <p>
              © {new Date().getFullYear()} {businessConfig.companyName}. All rights reserved. ·{' '}
              {businessConfig.headquarters.fullAddress}
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <button
                type="button"
                onClick={() => setActiveLegalModal('privacy')}
                className="text-[#C8BFB3] hover:text-[#F4B942] underline-offset-4 hover:underline transition-colors cursor-pointer min-h-[36px]"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => setActiveLegalModal('terms')}
                className="text-[#C8BFB3] hover:text-[#F4B942] underline-offset-4 hover:underline transition-colors cursor-pointer min-h-[36px]"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </Container>
      </footer>

      {/* Accessible Legal Notice Modal */}
      {activeLegalModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveLegalModal(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-xl bg-[#211B16] border border-[#F4B942]/35 p-5 sm:p-8 text-[#F5F1EA] shadow-2xl max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#F4B942]/15">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#F4B942] shrink-0" />
                <h2
                  id="legal-modal-title"
                  className="font-serif-display text-2xl sm:text-3xl font-semibold text-[#F5F1EA]"
                >
                  {activeLegalModal === 'privacy'
                    ? `${businessConfig.companyName} — Privacy Policy`
                    : `${businessConfig.companyName} — Terms of Service`}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setActiveLegalModal(null)}
                aria-label="Close legal information dialog"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[#F4B942]/25 text-[#C8BFB3] hover:text-[#F4B942] hover:border-[#F4B942] transition-colors cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {activeLegalModal === 'privacy' ? (
              <div className="mt-5 space-y-4 text-xs sm:text-sm text-[#C8BFB3] leading-relaxed">
                <p>
                  <strong className="text-[#F5F1EA]">1. Overview:</strong>{' '}
                  {businessConfig.companyName} (founded by {businessConfig.founder} and located in{' '}
                  {businessConfig.headquarters.fullAddress}) respects the privacy of hotel, resort,
                  guest house, and restaurant owners visiting this website.
                </p>
                <p>
                  <strong className="text-[#F5F1EA]">
                    2. Enquiry Data &amp; WhatsApp Communication:
                  </strong>{' '}
                  Information entered into our enquiry form (name, business name, city, business
                  type, service required, and message) is used solely to format a prefilled
                  WhatsApp message so you can initiate direct communication with{' '}
                  {businessConfig.companyName}. No form submissions are silently transmitted or
                  sold to third parties.
                </p>
                <p>
                  <strong className="text-[#F5F1EA]">3. Contact &amp; Updates:</strong> For any
                  privacy inquiries, please contact {businessConfig.companyName} directly via{' '}
                  <a
                    href={businessConfig.contact.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F4B942] hover:underline"
                  >
                    Chat on WhatsApp
                  </a>{' '}
                  or{' '}
                  <a
                    href={businessConfig.contact.phoneHref}
                    className="text-[#F4B942] hover:underline"
                  >
                    Call Now
                  </a>
                  .
                </p>
              </div>
            ) : (
              <div className="mt-5 space-y-4 text-xs sm:text-sm text-[#C8BFB3] leading-relaxed">
                <p>
                  <strong className="text-[#F5F1EA]">1. Scope of Services:</strong>{' '}
                  {businessConfig.companyName} provides hospitality digital growth services
                  including website development, SEO services, WhatsApp automation, Google Business
                  Profile management, and digital advertising across Nashik, Trimbakeshwar, Ujjain,
                  and Indore.
                </p>
                <p>
                  <strong className="text-[#F5F1EA]">2. Commercial Terms &amp; Pricing:</strong>{' '}
                  Displayed starting prices (Website Development from ₹10,000, SEO Services from
                  ₹4,999, WhatsApp Automation from ₹2,499) apply to foundational project scopes.
                  Paid advertising budgets, custom domains, premium hosting, and third-party
                  WhatsApp API charges are separate. Any recurring management fee is mutually
                  agreed upon in writing before project commencement.
                </p>
                <p>
                  <strong className="text-[#F5F1EA]">3. Jurisdiction &amp; Contact:</strong>{' '}
                  Operated from {businessConfig.headquarters.fullAddress}. Direct support:{' '}
                  <a
                    href={businessConfig.contact.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F4B942] hover:underline"
                  >
                    Chat on WhatsApp
                  </a>{' '}
                  or{' '}
                  <a
                    href={businessConfig.contact.phoneHref}
                    className="text-[#F4B942] hover:underline"
                  >
                    Call Now
                  </a>
                  .
                </p>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-[#F4B942]/15 flex items-center justify-between gap-4">
              <span className="text-xs text-[#A69B8D]">
                {businessConfig.companyName} · {businessConfig.headquarters.fullAddress}
              </span>
              <Button variant="primary" size="sm" onClick={() => setActiveLegalModal(null)}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, ArrowUpRight } from 'lucide-react';
import { businessConfig } from '../../config/business';
import { Container } from '../ui/Container';
import { BrandLogo } from '../ui/BrandLogo';
import { Button } from '../ui/Button';
import { useScrollPosition } from '../../hooks/useScrollPosition';

export interface NavItem {
  label: string;
  to: string;
}

export const primaryNavItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Our Process', to: '/process' },
  { label: 'Locations', to: '/locations' },
  { label: 'Contact', to: '/contact' },
];

export const Navbar: React.FC = () => {
  const isScrolled = useScrollPosition(20);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu automatically on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu on Escape key
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      role="banner"
      className={`sticky top-0 z-40 transition-colors duration-150 border-b ${
        isScrolled
          ? 'bg-[#15120F]/95 backdrop-blur-md border-[#F4B942]/24'
          : 'bg-[#15120F] border-[#F4B942]/14'
      }`}
    >
      <Container className="flex items-center justify-between gap-4 lg:gap-8 h-16 sm:h-20">
        {/* Zone 1: Compact Single-Element Brand Wordmark */}
        <BrandLogo to="/" size="sm" />

        {/* Zone 2: Desktop Navigation (Home | Services | Our Process | Locations | Contact) */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium"
        >
          {primaryNavItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 ${
                  isActive
                    ? 'text-[#F4B942] font-semibold after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1.5px] after:bg-[#F4B942]'
                    : 'nav-link-luxury'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Zone 3: Get Started CTA + Mobile Hamburger Button */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <Button
            to="/contact"
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex"
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            Get Started
          </Button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#F4B942]/30 bg-[#1C1814] text-[#F5F1EA] hover:border-[#F4B942] hover:text-[#F4B942] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile Slide-Down Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-nav-drawer"
          aria-label="Mobile Navigation"
          className="md:hidden bg-[#1C1814] border-t border-[#F4B942]/18 px-4 sm:px-6 py-4 space-y-1.5 shadow-2xl"
        >
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#F4B942]/12">
            <span className="text-xs font-mono uppercase tracking-wider text-[#F4B942]">
              Menu
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#C8BFB3] hover:text-[#F4B942] min-h-[36px] px-2 rounded cursor-pointer"
            >
              <span>Close</span>
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {primaryNavItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center justify-between min-h-[46px] px-3.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#211B16] text-[#F4B942] border border-[#F4B942]/30 font-semibold'
                    : 'text-[#F5F1EA] hover:bg-[#211B16] hover:text-[#F4B942]'
                }`
              }
            >
              <span>{item.label}</span>
              <ArrowUpRight className="w-4 h-4 opacity-70" />
            </NavLink>
          ))}

          <div className="pt-3 mt-2 border-t border-[#F4B942]/15 flex flex-col gap-2.5">
            <Button
              to="/contact"
              variant="primary"
              size="md"
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              Get Started
            </Button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <a
                href={businessConfig.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 min-h-[44px] px-3 rounded-lg bg-[#211B16] border border-[#F4B942]/25 text-xs font-medium text-[#F5F1EA] hover:border-[#F4B942] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#F4B942] shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={businessConfig.contact.phoneHref}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 min-h-[44px] px-3 rounded-lg bg-[#211B16] border border-[#F4B942]/25 text-xs font-medium text-[#F5F1EA] hover:border-[#F4B942] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#F4B942] shrink-0" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { SeoHead } from '../components/ui/SeoHead';
import { FloatingWhatsAppButton } from '../components/ui/FloatingWhatsAppButton';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { pathname, hash } = useLocation();

  // Scroll to top on route change, or to target #hash element if present
  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const scrollToHashElement = () => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return true;
        }
        return false;
      };

      if (!scrollToHashElement()) {
        const frameId = window.requestAnimationFrame(() => {
          scrollToHashElement();
        });
        return () => window.cancelAnimationFrame(frameId);
      }
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return (
    <div className="min-h-screen flex flex-col bg-[#15120F] text-[#F5F1EA] overflow-x-hidden">
      <SeoHead />

      {/* Keyboard Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#FFBF47] focus:text-[#15120F] focus:font-semibold"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="flex-1 min-w-0">
        {children}
      </main>

      <Footer />

      <FloatingWhatsAppButton />
    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { businessConfig } from '../../config/business';

export type BrandLogoSize = 'sm' | 'md' | 'lg' | 'xl';

interface BrandLogoProps {
  size?: BrandLogoSize;
  showTagline?: boolean;
  href?: string;
  to?: string;
  className?: string;
}

const sizeClasses: Record<BrandLogoSize, string> = {
  sm: 'text-xl sm:text-2xl tracking-[0.14em]',
  md: 'text-2xl sm:text-3xl tracking-[0.16em]',
  lg: 'text-3xl sm:text-4xl tracking-[0.18em]',
  xl: 'text-3xl sm:text-5xl lg:text-6xl tracking-[0.18em]',
};

/**
 * Premium text-based UPWORD logo crafted in Cormorant Garamond with refined architectural tracking.
 * When used inside the Top Bar <header>, leave showTagline={false} so it renders as a single wordmark element.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showTagline = false,
  href,
  to,
  className = '',
}) => {
  const wordmarkClasses = `font-serif-display font-bold uppercase text-[#F5F1EA] hover:text-[#F4B942] transition-colors duration-150 whitespace-nowrap shrink-0 select-none ${sizeClasses[size]} ${className}`;

  if (!showTagline) {
    if (to) {
      return (
        <Link to={to} className={wordmarkClasses} aria-label={businessConfig.companyName}>
          {businessConfig.companyName}
        </Link>
      );
    }
    if (href) {
      return (
        <a href={href} className={wordmarkClasses} aria-label={businessConfig.companyName}>
          {businessConfig.companyName}
        </a>
      );
    }
    return <span className={wordmarkClasses}>{businessConfig.companyName}</span>;
  }

  const content = (
    <div className={`inline-flex flex-col ${className}`}>
      <span
        className={`font-serif-display font-bold uppercase text-[#F5F1EA] whitespace-nowrap shrink-0 leading-none ${sizeClasses[size]}`}
      >
        {businessConfig.companyName}
      </span>
      <span className="mt-2 text-xs sm:text-sm font-normal tracking-wide text-[#C8BFB3]">
        {businessConfig.tagline}
      </span>
    </div>
  );

  if (to) {
    return (
      <Link to={to} className="group inline-flex flex-col focus-visible:outline-none">
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className="group inline-flex flex-col focus-visible:outline-none">
        {content}
      </a>
    );
  }

  return content;
};

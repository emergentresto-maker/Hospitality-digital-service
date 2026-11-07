import React from 'react';

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  title,
  subtitle,
  align = 'left',
  as: HeadingTag = 'h2',
  className = '',
}) => {
  const alignmentClasses =
    align === 'center' ? 'text-center mx-auto max-w-2xl' : 'text-left max-w-2xl';

  return (
    <div className={`${alignmentClasses} ${className}`}>
      {kicker && (
        <p className="text-xs font-medium tracking-wider text-[#F4B942] mb-2.5">
          {kicker}
        </p>
      )}
      <HeadingTag className="font-serif-display text-2xl sm:text-4xl lg:text-[2.5rem] font-semibold tracking-tight text-[#F5F1EA] leading-[1.15] break-words">
        {title}
      </HeadingTag>
      {subtitle && (
        <p className="mt-3.5 text-sm sm:text-base text-[#C8BFB3] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

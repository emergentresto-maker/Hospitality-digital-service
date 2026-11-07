import React from 'react';
import { Container } from './Container';

export type SectionSpacing = 'sm' | 'md' | 'lg';
export type SectionSurface = 'primary' | 'secondary';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  spacing?: SectionSpacing;
  surface?: SectionSurface;
  withContainer?: boolean;
  containerClassName?: string;
}

const spacingClasses: Record<SectionSpacing, string> = {
  sm: 'py-12 sm:py-16',
  md: 'py-16 sm:py-24',
  lg: 'py-20 sm:py-28 lg:py-32',
};

const surfaceClasses: Record<SectionSurface, string> = {
  primary: 'bg-[#15120F]',
  secondary: 'bg-[#1C1814] border-y border-[#F4B942]/12',
};

/**
 * Standardized Section wrapper enforcing consistent vertical rhythm and surface alternation.
 */
export const Section: React.FC<SectionProps> = ({
  children,
  spacing = 'md',
  surface = 'primary',
  withContainer = true,
  containerClassName = '',
  className = '',
  ...props
}) => {
  return (
    <section
      className={`${surfaceClasses[surface]} ${spacingClasses[spacing]} ${className}`}
      {...props}
    >
      {withContainer ? (
        <Container className={containerClassName}>{children}</Container>
      ) : (
        children
      )}
    </section>
  );
};

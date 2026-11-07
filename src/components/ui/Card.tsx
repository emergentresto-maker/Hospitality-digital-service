import React from 'react';

export type CardVariant = 'default' | 'elevated' | 'interactive' | 'minimal';

interface CardProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: CardVariant;
  elevated?: boolean;
  as?: 'div' | 'article' | 'section';
}

const variantClasses: Record<CardVariant, string> = {
  default:
    'bg-[#211B16] border border-[#F4B942]/15 hover:border-[#F4B942]/30 transition-colors duration-150',
  elevated:
    'bg-[#211B16] border border-[#F4B942]/32',
  interactive:
    'bg-[#211B16] border border-[#F4B942]/18 card-hover-luxury',
  minimal:
    'bg-[#1C1814] border border-[#F4B942]/12',
};

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  elevated = false,
  as: Component = 'div',
  className = '',
  ...props
}) => {
  const resolvedVariant: CardVariant = elevated ? 'elevated' : variant;

  return (
    <Component
      className={`rounded-xl p-6 sm:p-8 ${variantClasses[resolvedVariant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

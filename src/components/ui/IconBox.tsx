import React from 'react';
import type { LucideIcon } from 'lucide-react';

export type IconBoxSize = 'sm' | 'md' | 'lg';
export type IconBoxVariant = 'gold' | 'subtle' | 'outline';

interface IconBoxProps {
  icon: LucideIcon;
  size?: IconBoxSize;
  variant?: IconBoxVariant;
  className?: string;
}

const containerSizes: Record<IconBoxSize, string> = {
  sm: 'w-9 h-9 rounded-lg',
  md: 'w-11 h-11 rounded-xl',
  lg: 'w-13 h-13 rounded-xl',
};

const iconSizes: Record<IconBoxSize, number> = {
  sm: 16,
  md: 20,
  lg: 24,
};

const variantClasses: Record<IconBoxVariant, string> = {
  gold: 'bg-[#F4B942]/15 border border-[#F4B942]/35 text-[#F4B942]',
  subtle: 'bg-[#1C1814] border border-[#F4B942]/15 text-[#F4B942]',
  outline: 'bg-transparent border border-[#F4B942]/30 text-[#F5F1EA]',
};

/**
 * Consistent Icon System wrapper enforcing 1.75px architectural stroke weight and balanced framing.
 */
export const IconBox: React.FC<IconBoxProps> = ({
  icon: Icon,
  size = 'md',
  variant = 'gold',
  className = '',
}) => {
  return (
    <div
      className={`inline-flex items-center justify-center shrink-0 transition-colors duration-150 ${containerSizes[size]} ${variantClasses[variant]} ${className}`}
      aria-hidden="true"
    >
      <Icon size={iconSizes[size]} strokeWidth={1.75} />
    </div>
  );
};

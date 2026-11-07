import React from 'react';
import { Link } from 'react-router-dom';

export type ButtonVariant = 'primary' | 'gold' | 'outline' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
    to?: undefined;
  };

type ButtonAsAnchor = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
    to?: undefined;
  };

type ButtonAsRouterLink = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    to: string;
    href?: undefined;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsRouterLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[#FFBF47] text-[#15120F] font-semibold hover:bg-[#F4B942] hover:-translate-y-0.5 active:translate-y-0 shadow-sm',
  gold:
    'bg-[#F4B942] text-[#15120F] font-semibold hover:bg-[#FFBF47] hover:-translate-y-0.5 active:translate-y-0 shadow-sm',
  outline:
    'border border-[#F4B942]/50 text-[#F5F1EA] hover:border-[#F4B942] hover:bg-[#F4B942]/12 hover:-translate-y-0.5 active:translate-y-0',
  secondary:
    'bg-[#211B16] border border-[#F4B942]/20 text-[#F5F1EA] hover:border-[#F4B942]/50 hover:bg-[#1C1814] hover:-translate-y-0.5 active:translate-y-0',
  ghost:
    'text-[#C8BFB3] hover:text-[#F4B942] hover:bg-[#211B16]/70',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'min-h-[42px] px-4 py-2 text-xs',
  md: 'min-h-[46px] px-5 py-2.5 text-sm',
  lg: 'min-h-[48px] px-6 sm:px-7 py-3.5 text-sm sm:text-base',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  icon,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-lg text-center transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B942] focus-visible:ring-offset-2 focus-visible:ring-offset-[#15120F] shrink-0 cursor-pointer';

  const combinedClasses = `${baseClasses} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if ('to' in props && props.to !== undefined) {
    const { to, ...linkProps } = props as ButtonAsRouterLink;
    return (
      <Link to={to} className={combinedClasses} {...linkProps}>
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
      </Link>
    );
  }

  if ('href' in props && props.href !== undefined) {
    const { href, ...anchorProps } = props as ButtonAsAnchor;
    return (
      <a href={href} className={combinedClasses} {...anchorProps}>
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button type="button" className={combinedClasses} {...buttonProps}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

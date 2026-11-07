import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  as?: 'div' | 'section' | 'header' | 'footer' | 'main';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  as: Component = 'div',
  className = '',
  ...props
}) => {
  return (
    <Component
      className={`mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-12 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

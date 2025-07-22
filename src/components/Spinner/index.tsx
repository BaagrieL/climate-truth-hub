import React from 'react';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

export default function Spinner({ size = 'md', color = 'blue-500' }: SpinnerProps) {
  const spinnerSize = {
    sm: 'w-4 h-4 border-2',
    md: 'w-6 h-6 border-3',
    lg: 'w-8 h-8 border-4',
  }[size];

  const spinnerColor = `border-${color}`;

  return (
    <div
      className={`
        inline-block
        ${spinnerSize}
        ${spinnerColor}
        border-solid
        border-current
        border-r-transparent
        rounded-full
        animate-spin
      `}
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Carregando...</span>
    </div>
  );
}
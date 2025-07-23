import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
  textAlign?: 'left' | 'center' | 'right';
  gradientColors?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  description,
  className = '',
  textAlign = 'center',
  gradientColors = 'from-emerald-400 to-teal-400'
}) => {
  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <div className={`mb-12 animate-fade-in ${alignmentClass[textAlign]} ${className}`}>
      {subtitle && (
        <p className="text-xl text-slate-400 mb-4">
          {subtitle}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r ${gradientColors} bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]`}>
        {title}
      </h2>
      {description && (
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

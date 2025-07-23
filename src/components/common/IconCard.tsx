import React from 'react';
import { Card } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface IconCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'gradient' | 'quality';
  color?: {
    icon: string;
    bg: string;
    text?: string;
    bgHover?: string;
    border?: string;
    cardHover?: string;
  };
  animationDelay?: number;
  className?: string;
}

export const IconCard: React.FC<IconCardProps> = ({
  icon: Icon,
  title,
  description,
  variant = 'primary',
  color,
  animationDelay = 0,
  className = ''
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-slate-800/20 backdrop-blur-sm border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 hover:scale-105';
      case 'secondary':
        return 'bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-500';
      case 'outline':
        return 'bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 hover:scale-105';
      case 'gradient':
        return 'glass-card bg-slate-900/20 border-slate-700/30 hover:shadow-xl transition-all duration-500';
      case 'quality':
        return `p-6 text-center bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 group relative w-full max-w-sm h-full flex flex-col transform-gpu hover:scale-105 ${color?.cardHover || 'hover:bg-white/10'} hover:!bg-opacity-30 hover:!bg-blend-lighten`;
      default:
        return 'bg-slate-800/20 backdrop-blur-sm border-slate-700/30';
    }
  };

  const defaultColor = {
    icon: 'text-white',
    bg: 'bg-slate-800/40',
    text: 'text-white',
    bgHover: 'bg-slate-800/60',
    border: 'from-slate-500/20 to-slate-600/20',
    cardHover: 'hover:bg-white/10'
  };

  const cardColor = color || defaultColor;

  // Quality variant uses special styling
  if (variant === 'quality') {
    return (
      <Card
        className={`${getVariantStyles()} animate-fade-in-up ${className}`}
        style={{ 
          animationDelay: `${animationDelay}ms`,
          transitionProperty: 'background, border, box-shadow, transform', 
          transitionDuration: '300ms' 
        }}
      >
        {/* Background glow on hover */}
        <div className={`absolute inset-0 ${cardColor.bg} rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none`}></div>
        {/* Border glow on hover */}
        {cardColor.border && (
          <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${cardColor.border} p-px pointer-events-none`}>
            <div className="w-full h-full bg-black/90 rounded-lg"></div>
          </div>
        )}
        <div
          className={`w-16 h-16 ${cardColor.bg} rounded-xl flex items-center justify-center mx-auto mb-6 transition-colors duration-300 ${cardColor.bgHover ? `group-hover:${cardColor.bgHover}` : ''} relative z-20`}
        >
          <Icon className={`h-8 w-8 ${cardColor.icon}`} />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-white relative z-20">{title}</h3>
        <p className="text-slate-300 relative z-20">{description}</p>
      </Card>
    );
  }

  // Default variants
  return (
    <Card
      className={`p-6 ${getVariantStyles()} animate-fade-in-up ${className}`}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="flex flex-col items-center text-center">
        <div className={`p-3 rounded-full ${cardColor.bg} mb-4`}>
          <Icon className={`w-8 h-8 ${cardColor.icon}`} />
        </div>
        <h3 className={`text-lg font-semibold mb-2 ${cardColor.text || 'text-white'}`}>
          {title}
        </h3>
        <p className="text-slate-300 text-sm">{description}</p>
      </div>
    </Card>
  );
};

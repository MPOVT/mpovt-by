import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, LucideIcon, Star } from 'lucide-react';

interface ProductSpecs {
  performance: string;
  efficiency: string;
  reliability: string;
}

interface ProductCardProps {
  title: string;
  description: string;
  image?: string;
  icon?: LucideIcon;
  link: string;
  variant?: 'primary' | 'secondary' | 'compact';
  features?: string[];
  specs?: ProductSpecs;
  badge?: string;
  className?: string;
  animationDelay?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  image,
  icon: Icon,
  link,
  variant = 'primary',
  features = [],
  specs,
  badge,
  className = '',
  animationDelay = 0
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'group overflow-hidden hover:shadow-2xl transition-all duration-500 glass-card flex flex-col h-full bg-slate/10 backdrop-blur-md border border-white/20 hover:border-amber-400/50 hover:bg-slate/50 transition-all duration-700 mx-8 md:mx-12 hover:shadow-2xl hover:shadow-amber-500/20';
      case 'secondary':
        return 'p-6 bg-slate-800/20 backdrop-blur-sm border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 hover:scale-105';
      case 'compact':
        return 'p-4 bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-500';
      default:
        return 'group overflow-hidden hover:shadow-2xl transition-all duration-500 glass-card flex flex-col h-full';
    }
  };

  return (
    <Card 
      className={`${getVariantStyles()} animate-fade-in-up ${className}`}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      {image && (
        <div className="aspect-video bg-gradient-to-br from-amber-100/10 to-orange-100/10 relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Badge */}
          {badge && (
            <div className="absolute top-3 right-3">
              <div className="px-3 py-1 bg-gradient-to-r from-amber-500/90 to-orange-500/90 backdrop-blur-sm rounded-full text-white text-xs font-semibold flex items-center gap-1">
                <Star className="w-3 h-3" />
                {badge}
              </div>
            </div>
          )}
          
          {Icon && (
            <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4">
              <div className="p-2 bg-amber-500/20 backdrop-blur-sm rounded-lg">
                <Icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-amber-400" />
              </div>
            </div>
          )}
        </div>
      )}
      
      <div className="p-3 sm:p-4 md:p-6 flex flex-col flex-grow">
        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2 group-hover:text-amber-400 transition-colors text-white">
          {title}
        </h3>
        <p className="text-slate-300 mb-3 md:mb-4 text-xs sm:text-sm md:text-base flex-grow leading-relaxed">
          {description}
        </p>
        
        {features.length > 0 && (
          <div className="mb-4 space-y-2">
            <h4 className="text-amber-400 text-xs font-semibold uppercase tracking-wide">Особенности</h4>
            <div className="space-y-1">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0" />
                  <span className="text-slate-300 text-xs leading-tight">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Спецификации */}
        {specs && (
          <div className="mb-4 p-3 bg-black/30 rounded-lg border border-amber-500/20">
            <h4 className="text-amber-400 text-xs font-semibold uppercase tracking-wide mb-2">Характеристики</h4>
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center">
                <div className="text-lg font-bold text-white">{specs.performance}</div>
                <div className="text-xs text-slate-400">Производительность</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-white">{specs.efficiency}</div>
                <div className="text-xs text-slate-400">Эффективность</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-white">{specs.reliability}</div>
                <div className="text-xs text-slate-400">Надёжность</div>
              </div>
            </div>
          </div>
        )}
        
        <Button 
          asChild 
          size="sm" 
          className="w-full mt-auto text-xs sm:text-sm bg-gradient-to-r from-amber-600/80 to-orange-600/80 hover:from-amber-500/90 hover:to-orange-500/90 border border-amber-500/30 hover:border-amber-400/50 backdrop-blur-sm text-white transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20"
        >
          <Link to={link}>
            Подробнее
            <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
          </Link>
        </Button>
      </div>
    </Card>
  );
};

import React, { useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { AnimatedBackground } from './AnimatedBackground';
import OptimizedVideoPlayer from '@/components/OptimizedVideoPlayer';

interface PriorityProduct {
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  videoUrl: string;
  image: string;
  link: string;
  gradient: string;
  bgGradient: string;
  borderHover: string;
  buttonShine: string;
}

interface PriorityProductsGridSectionProps {
  title: string;
  subtitle: string;
  products: PriorityProduct[];
  className?: string;
}

export const PriorityProductsGridSection: React.FC<PriorityProductsGridSectionProps> = ({
  title,
  subtitle,
  products,
  className = ""
}) => {
  // Функция для извлечения цветов кнопки - теперь единый стиль для всех
  const getButtonColors = () => {
    return {
      border: 'border-amber-400/30',
      bg: 'bg-amber-500/10',
      hover: 'hover:bg-amber-500/20',
      textGradient: 'from-amber-200 to-orange-300'
    };
  };

  return (
    <section className={`py-16 md:py-20 relative overflow-hidden shadow-2xl ${className}`}>
      <AnimatedBackground variant="default"/>
      
      <div className="container mx-auto px-4 md:px-6 relative z-5">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-4xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-amber-200 via-orange-300 to-amber-200 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <p className="text-xl md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {products.map((product, index) => {
            const buttonColors = getButtonColors();
            
            return (
              <div 
                key={index} 
                className="w-full animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Card className={`group overflow-hidden bg-slate/10 backdrop-blur-md border border-white/20 hover:border-amber-400/50 hover:bg-slate/50 transition-all duration-700 hover:shadow-2xl hover:shadow-amber-500/20 h-full`}>
                  <div className="flex flex-col h-full">
                    {/* Video Section */}
                    <div className="relative overflow-hidden bg-slate-900 aspect-video">
                      <OptimizedVideoPlayer
                        src={product.videoUrl}
                        placeholder={product.image}
                        className="transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-6 flex flex-col justify-between bg-white/5 backdrop-blur-sm border-t border-white/10 flex-grow">
                      <div>
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="text-xl lg:text-2xl font-bold text-white drop-shadow-lg">
                            {product.title}
                          </h3>
                          <span className="text-base lg:text-lg text-slate-400 font-medium">
                            {product.subtitle}
                          </span>
                        </div>

                        <p className="text-slate-300 leading-relaxed mb-6 text-sm lg:text-base">
                          {product.description}
                        </p>
                      </div>
                      
                      <Button 
                        asChild 
                        variant="outline" 
                        size="default" 
                        className={`${buttonColors.border} ${buttonColors.bg} ${buttonColors.hover} text-sm transition-all duration-500 self-start`}
                      >
                        <Link to={product.link} className="flex items-center">
                          <span className={`bg-gradient-to-r ${buttonColors.textGradient} bg-clip-text text-transparent font-semibold`}>
                            Подробнее
                          </span>
                          <ArrowRight className={`ml-2 h-4 w-4 text-amber-300`} />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

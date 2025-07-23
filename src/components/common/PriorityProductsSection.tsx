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

interface PriorityProductsSectionProps {
  title: string;
  subtitle: string;
  products: PriorityProduct[];
  className?: string;
}

export const PriorityProductsSection: React.FC<PriorityProductsSectionProps> = ({
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-amber-200 via-orange-300 to-amber-200 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="space-y-8">
          {products.map((product, index) => {
            const buttonColors = getButtonColors();
            
            return (
              <div 
                key={index} 
                className="w-full animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Card className={`group overflow-hidden bg-slate/10 backdrop-blur-md border border-white/20 hover:border-amber-400/50 hover:bg-slate/50 transition-all duration-700 mx-8 md:mx-12 lg:mx-16 hover:shadow-2xl hover:shadow-amber-500/20`}>
                  <div className="grid lg:grid-cols-2 gap-0 min-h-[20vh] h-[315px]">
                    {/* Video Section */}
                    <div className="relative overflow-hidden bg-slate-900">
                      <OptimizedVideoPlayer
                        src={product.videoUrl}
                        placeholder={product.image}
                        className="transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-6 lg:p-8 flex flex-col justify-center bg-white/5 backdrop-blur-sm border-l border-white/10">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">
                          {product.title}
                        </h3>
                        <span className="text-lg lg:text-xl text-slate-400 font-medium">
                          {product.subtitle}
                        </span>
                      </div>

                      <p className="text-slate-300 leading-relaxed mb-8 text-sm lg:text-base">
                        {product.fullDescription}
                      </p>
                      
                      <Button 
                        asChild 
                        variant="outline" 
                        size="lg" 
                        className={`${buttonColors.border} ${buttonColors.bg} ${buttonColors.hover} text-sm md:text-base transition-all duration-500`}
                      >
                        <Link to={product.link} className="flex items-center">
                          <span className={`bg-gradient-to-r ${buttonColors.textGradient} bg-clip-text text-transparent font-semibold`}>
                            Подробнее
                          </span>
                          <ArrowRight className={`ml-2 h-4 w-4 md:h-5 md:w-5 bg-gradient-to-r ${buttonColors.textGradient} bg-clip-text text-transparent`} />
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

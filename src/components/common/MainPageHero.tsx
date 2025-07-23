import React from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatedBackground } from './AnimatedBackground';

interface MainPageHeroProps {
  logoSrc: string;
  logoAlt: string;
  subtitle: string;
  scrollIndicatorText?: string;
  className?: string;
}

export const MainPageHero: React.FC<MainPageHeroProps> = ({
  logoSrc,
  logoAlt,
  subtitle,
  scrollIndicatorText = "Прокрутите вниз",
  className = ""
}) => {
  return (
    <section className={`pt-40 md:pt-44 lg:pt-48 pb-12 md:pb-16 lg:pb-20 px-4 text-center relative overflow-hidden bg-black ${className}`}>
      <AnimatedBackground variant="hero" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="mb-8 md:mb-12 flex justify-center">
            <img 
              src={logoSrc}
              alt={logoAlt}
              className="h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56 w-auto opacity-95 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
          <p className="text-lg md:text-xl xl:text-2xl text-white/50 mb-6 md:mb-8" style={{ animationDelay: '200ms' }}>
            {subtitle}
          </p>
          
          {/* Animated mouse scroll indicator */}
          <div className="flex flex-col items-center mt-12 md:mt-16" style={{ animationDelay: '600ms' }}>
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
            <p className="text-white/40 text-sm mt-3 animate-pulse">{scrollIndicatorText}</p>
            <ChevronDown className="w-5 h-5 text-white/30 mt-2 animate-bounce" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

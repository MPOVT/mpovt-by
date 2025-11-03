import React from 'react';
import { ChevronDown } from 'lucide-react';

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
    <section className={`pt-40 md:pt-44 lg:pt-48 pb-12 md:pb-16 lg:pb-20 px-4 text-center relative overflow-hidden ${className}`}>
      {/* Animated background with particles */}
      <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black">
        {/* Moving spheres optimized for all screen ratios */}
        <div 
          className="absolute w-64 h-64 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-full blur-3xl animate-pulse moving-sphere-1"
          style={{ top: '15%', left: '10%' }}
        ></div>
        <div 
          className="absolute w-80 h-80 md:w-[28rem] md:h-[28rem] lg:w-[36rem] lg:h-[36rem] bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse moving-sphere-2"
          style={{ bottom: '10%', right: '15%' }}
        ></div>
        <div 
          className="absolute w-96 h-96 md:w-[32rem] md:h-[32rem] lg:w-[40rem] lg:h-[40rem] bg-gradient-to-r from-slate-500/10 to-slate-600/10 rounded-full blur-3xl animate-pulse moving-sphere-3"
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        ></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-amber-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="mb-8 md:mb-12 flex justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent blur-3xl"></div>
            <img 
              src={logoSrc}
              alt={logoAlt}
              className="h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56 w-auto opacity-95 hover:opacity-100 transition-all duration-500 hover:scale-105 relative z-10"
            />
          </div>
          <p className="text-lg md:text-xl xl:text-2xl text-white/60 mb-6 md:mb-8 leading-relaxed" style={{ animationDelay: '200ms' }}>
            {subtitle}
          </p>
          
          {/* Animated mouse scroll indicator */}
          <div className="flex flex-col items-center mt-12 md:mt-16 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-amber-400/40 rounded-full flex justify-center backdrop-blur-sm">
                <div className="w-1 h-3 bg-amber-400/60 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
            <p className="text-amber-100/50 text-sm mt-3 animate-pulse font-medium">{scrollIndicatorText}</p>
            <ChevronDown className="w-5 h-5 text-amber-400/40 mt-2 animate-bounce" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

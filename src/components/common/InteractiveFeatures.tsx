import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  fullDescription: string;
  backgroundImage: string;
  colorScheme: {
    primary: string;
    background: string;
    activeBackground: string;
    activeBorder: string;
    iconActive: string;
    iconInactive: string;
    gradientColor: string;
  };
}

interface InteractiveFeaturesProps {
  title: string;
  subtitle: string;
  features: Feature[];
  className?: string;
}

export const InteractiveFeatures: React.FC<InteractiveFeaturesProps> = ({
  title,
  subtitle,
  features,
  className = ""
}) => {
  const [activeFeature, setActiveFeature] = useState(0);

  const getBackgroundColor = () => {
    const colors = [
      'to-blue-900/30',
      'to-emerald-900/30',
      'to-purple-900/30',
      'to-amber-900/30'
    ];
    return colors[activeFeature] || colors[0];
  };

  return (
    <section className={`py-12 md:py-16 lg:py-20 px-4 bg-black relative transition-all duration-1000 ease-in-out ${className}`}>
      {/* Moving animated background spheres with blue/cyan colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse moving-sphere-1" 
             style={{ 
               animationDuration: '8s', 
               left: '25%', 
               top: '25%',
               transform: 'translateX(-50%) translateY(-50%)'
             }}></div>
        <div className="absolute w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse moving-sphere-2" 
             style={{ 
               animationDelay: '3s', 
               animationDuration: '10s',
               right: '25%',
               bottom: '33%',
               transform: 'translateX(50%) translateY(50%)'
             }}></div>
        <div className="absolute w-64 h-64 md:w-128 md:h-128 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse moving-sphere-3" 
             style={{ 
               animationDelay: '2s', 
               animationDuration: '12s',
               left: '50%',
               top: '50%',
               transform: 'translateX(-50%) translateY(-50%)'
             }}></div>
      </div>
      
      {/* Smooth gradient background that changes based on active feature with transition */}
      <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
        <div className={`absolute inset-0 bg-gradient-to-b from-black via-black/95 transition-all duration-1000 ease-in-out ${getBackgroundColor()}`}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 lg:mb-6 bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mt-4 md:mt-6">
            {subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Feature Icons */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-4 md:p-6 rounded-xl cursor-pointer transition-all duration-500 border-2 ${
                  activeFeature === index
                    ? `${feature.colorScheme.activeBackground} ${feature.colorScheme.activeBorder} scale-105`
                    : `${feature.colorScheme.background} border-slate-700/30 hover:border-slate-600/50`
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg transition-all duration-300 ${
                    activeFeature === index
                      ? feature.colorScheme.iconActive
                      : feature.colorScheme.iconInactive
                  }`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`font-semibold text-lg transition-colors duration-300 ${
                      activeFeature === index ? 'text-white' : 'text-slate-300'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm transition-colors duration-300 ${
                      activeFeature === index ? 'text-slate-200' : 'text-slate-400'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Content with modern design */}
          <div className="relative flex items-center justify-center">
            <div className="w-full max-w-2xl">
              <div className="relative overflow-hidden rounded-2xl backdrop-blur-2xl border border-slate-700/50 shadow-2xl h-[400px]">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={features[activeFeature].backgroundImage}
                    alt={features[activeFeature].title}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                </div>
                
                {/* Color Overlay */}
                <div className="absolute inset-0 transition-all duration-500" 
                     style={{ 
                       backgroundColor: features[activeFeature].colorScheme.primary.includes('blue') ? 'rgba(59, 130, 246, 0.7)' : 
                                       features[activeFeature].colorScheme.primary.includes('emerald') ? 'rgba(16, 185, 129, 0.6)' :
                                       features[activeFeature].colorScheme.primary.includes('purple') ? 'rgba(139, 92, 246, 0.6)' : 'rgba(245, 158, 11, 0.6)' 
                     }}></div>
                
                {/* Active feature indicator */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-80" 
                     style={{ color: features[activeFeature].colorScheme.primary.includes('blue') ? '#3b82f6' : 
                                     features[activeFeature].colorScheme.primary.includes('emerald') ? '#10b981' :
                                     features[activeFeature].colorScheme.primary.includes('purple') ? '#8b5cf6' : '#f59e0b' }}></div>
                
                {/* Content */}
                <div className="relative p-8 md:p-10 h-full flex flex-col justify-center">
                  <div className="animate-fade-in" key={activeFeature}>
                    {/* Feature icon */}
                    <div className="inline-flex p-4 rounded-2xl mb-6 bg-white/40 backdrop-blur-sm">
                      {React.createElement(features[activeFeature].icon, { className: "w-8 h-8 text-white" })}
                    </div>
                    
                    {/* Description */}
                    <p className="text-white leading-relaxed text-lg md:text-xl font-medium">
                      {features[activeFeature].fullDescription}
                    </p>
                    
                    {/* Background pattern */}
                    <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20">
                      <div className="w-full h-full bg-gradient-to-tl from-white to-transparent rounded-full blur-xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

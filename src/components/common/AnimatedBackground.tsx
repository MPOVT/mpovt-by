import React from 'react';

interface AnimatedBackgroundProps {
  variant?: 'default' | 'hero' | 'section' | 'flagship';
  className?: string;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  variant = 'default', 
  className = '' 
}) => {
  const sphereConfigs = {
    default: [
      { size: 'w-32 h-32 md:w-64 md:h-64', gradient: 'from-cyan-500/30 to-blue-500/30', position: 'top-1/4 left-1/4', animation: 'moving-sphere-1' },
      { size: 'w-48 h-48 md:w-96 md:h-96', gradient: 'from-purple-500/30 to-pink-500/30', position: 'bottom-1/6 right-1/4', animation: 'moving-sphere-2' },
      { size: 'w-64 h-64 md:w-128 md:h-128', gradient: 'from-emerald-500/30 to-teal-500/30', position: 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2', animation: 'moving-sphere-3' },
      { size: 'w-40 h-40 md:w-80 md:h-80', gradient: 'from-yellow-500/30 to-orange-500/30', position: 'top-3/4 left-1/3', animation: 'moving-sphere-4' }
    ],
    hero: [
      { size: 'w-32 h-32 md:w-64 md:h-64', gradient: 'from-cyan-500/20 to-purple-500/20', position: 'top-1/4 left-1/4', animation: 'moving-sphere-5' },
      { size: 'w-48 h-48 md:w-96 md:h-96', gradient: 'from-purple-500/20 to-emerald-500/20', position: 'bottom-1/3 right-1/4', animation: 'moving-sphere-6' },
      { size: 'w-64 h-64 md:w-128 md:h-128', gradient: 'from-emerald-500/20 to-cyan-500/20', position: 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2', animation: 'moving-sphere-7' }
    ],
    section: [
      { size: 'w-32 h-32 md:w-64 md:h-64', gradient: 'from-emerald-500/20 to-teal-500/20', position: 'top-1/6 right-1/6', animation: 'moving-sphere-8' },
      { size: 'w-48 h-48 md:w-96 md:h-96', gradient: 'from-teal-500/20 to-cyan-500/20', position: 'bottom-1/4 left-1/6', animation: 'moving-sphere-9' },
      { size: 'w-64 h-64 md:w-128 md:h-128', gradient: 'from-cyan-500/20 to-emerald-500/20', position: 'top-2/3 right-1/3', animation: 'moving-sphere-10' }
    ],
    flagship: [
      { size: 'w-32 h-32 md:w-64 md:h-64', gradient: 'from-amber-500/25 to-orange-500/25', position: 'top-1/4 left-1/5', animation: 'moving-sphere-1' },
      { size: 'w-48 h-48 md:w-96 md:h-96', gradient: 'from-orange-500/20 to-amber-600/20', position: 'bottom-1/4 right-1/5', animation: 'moving-sphere-2' },
      { size: 'w-64 h-64 md:w-128 md:h-128', gradient: 'from-amber-600/15 to-orange-400/15', position: 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2', animation: 'moving-sphere-3' },
      { size: 'w-40 h-40 md:w-80 md:h-80', gradient: 'from-yellow-500/20 to-amber-500/20', position: 'top-3/4 left-1/4', animation: 'moving-sphere-4' },
      { size: 'w-36 h-36 md:w-72 md:h-72', gradient: 'from-orange-400/18 to-amber-300/18', position: 'top-1/6 right-1/3', animation: 'moving-sphere-5' },
      { size: 'w-24 h-24 md:w-48 md:h-48', gradient: 'from-yellow-400/30 to-orange-300/30', position: 'top-1/3 left-1/6', animation: 'moving-sphere-6' },
      { size: 'w-56 h-56 md:w-112 md:h-112', gradient: 'from-amber-400/12 to-yellow-500/12', position: 'bottom-1/3 left-2/3', animation: 'moving-sphere-7' },
      { size: 'w-28 h-28 md:w-56 md:h-56', gradient: 'from-orange-300/25 to-amber-400/25', position: 'top-2/3 right-1/6', animation: 'moving-sphere-8' },
      { size: 'w-72 h-72 md:w-144 md:h-144', gradient: 'from-amber-500/10 to-orange-600/10', position: 'bottom-1/6 left-1/3', animation: 'moving-sphere-9' },
      { size: 'w-20 h-20 md:w-40 md:h-40', gradient: 'from-yellow-300/35 to-amber-200/35', position: 'top-1/12 left-3/4', animation: 'moving-sphere-10' },
      { size: 'w-44 h-44 md:w-88 md:h-88', gradient: 'from-orange-200/22 to-yellow-400/22', position: 'bottom-2/3 right-1/4', animation: 'moving-sphere-1' },
      { size: 'w-60 h-60 md:w-120 md:h-120', gradient: 'from-amber-300/14 to-orange-500/14', position: 'top-5/6 right-2/3', animation: 'moving-sphere-2' }
    ]
  };

  const spheres = sphereConfigs[variant];

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {spheres.map((sphere, index) => (
        <div
          key={index}
          className={`absolute ${sphere.size} bg-gradient-to-r ${sphere.gradient} ${sphere.position} rounded-full blur-2xl animate-pulse ${sphere.animation} opacity-80 hover:opacity-100 transition-opacity duration-1000`}
          style={{
            filter: 'blur(40px)',
            animationDuration: `${8 + index * 2}s`,
            animationDelay: `${index * 0.5}s`
          }}
        />
      ))}
    </div>
  );
};

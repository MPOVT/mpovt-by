import React from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  signature?: string;
  sphere1?: string; // классы tailwind для цвета первой сферы
  sphere2?: string; // второй
  sphere3?: string; // третьей
  main?: boolean;   // управляет стилем фона
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  sphere1 = "from-cyan-500/30 to-blue-500/30",
  sphere2 = "from-purple-500/30 to-pink-500/30",
  sphere3 = "from-emerald-500/30 to-teal-500/30",
  main = false,
  signature = null
}) => {
  const backgroundClass = main
    ? "bg-black"
    : "bg-gradient-to-b from-slate-900 via-slate-800 to-black";

  return (
    <section
      className={`pt-40 md:pt-44 lg:pt-48 pb-12 md:pb-16 lg:pb-20 px-4 text-center relative overflow-hidden ${backgroundClass}`}
    >
      {/* Animated background spheres - optimized for all screen ratios */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute w-32 h-32 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gradient-to-r ${sphere1} rounded-full blur-3xl animate-pulse moving-sphere-1`}
          style={{
            top: '20%',
            left: '15%'
          }}
        ></div>
        <div
          className={`absolute w-48 h-48 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] bg-gradient-to-r ${sphere2} rounded-full blur-3xl animate-pulse moving-sphere-2`}
          style={{
            bottom: '15%',
            right: '20%'
          }}
        ></div>
        <div
          className={`absolute w-64 h-64 md:w-[32rem] md:h-[32rem] lg:w-[40rem] lg:h-[40rem] bg-gradient-to-r ${sphere3} rounded-full blur-3xl animate-pulse moving-sphere-3`}
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        ></div>
      </div>
      
      {/* Enhanced gradient overlay for better separation */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>

      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {signature && (
            <p className="text-lg md:text-xl text-slate-400 mb-4">
              {signature}
            </p>
          )}
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl font-black mb-6 md:mb-8 text-white leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl xl:text-2xl text-white/70 mb-6 md:mb-8 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};
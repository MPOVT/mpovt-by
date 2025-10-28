import React from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
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
}) => {
  const backgroundClass = main
    ? "bg-black"
    : "bg-gradient-to-b from-slate-900 via-slate-800 to-black";

  return (
    <section
      className={`pt-40 md:pt-44 lg:pt-48 pb-12 md:pb-16 lg:pb-20 px-4 text-center relative overflow-hidden ${backgroundClass}`}
    >
      {/* Animated background spheres */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r ${sphere1} rounded-full blur-3xl animate-pulse moving-sphere-1`}
        ></div>
        <div
          className={`absolute bottom-1/6 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r ${sphere2} rounded-full blur-3xl animate-pulse moving-sphere-2`}
        ></div>
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-128 md:h-128 bg-gradient-to-r ${sphere3} rounded-full blur-3xl animate-pulse moving-sphere-3`}
        ></div>
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
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
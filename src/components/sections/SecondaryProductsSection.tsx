import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface SecondaryProduct {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  link: string;
}

interface SecondaryProductsSectionProps {
  title: string;
  subtitle: string;
  products: SecondaryProduct[];
  className?: string;
  buttonLabel?: string;
}

export const SecondaryProductsSection: React.FC<SecondaryProductsSectionProps> = ({
  title,
  subtitle,
  products,
  className = "",
  buttonLabel = ""
}) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;
    
    e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    e.currentTarget.style.transition = 'transform 0.3s ease-out';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    e.currentTarget.style.transition = 'transform 0.8s ease-out';
  };

  return (
    <section className={`py-12 md:py-16 lg:py-20 px-4 bg-black relative ${className}`}>
      {/* Moving animated background spheres with emerald/teal colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse moving-sphere-4" 
             style={{ 
               animationDuration: '8s', 
               left: '25%', 
               top: '25%'
             }}></div>
        <div className="absolute w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse moving-sphere-5" 
             style={{ 
               animationDelay: '3s', 
               animationDuration: '10s',
               right: '25%',
               bottom: '33%'
             }}></div>
        <div className="absolute w-64 h-64 md:w-128 md:h-128 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse moving-sphere-6" 
             style={{ 
               animationDelay: '2s', 
               animationDuration: '12s',
               left: '50%',
               top: '50%'
             }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 lg:mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto mt-4 md:mt-6">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Card 
                key={index} 
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 glass-card flex flex-col h-full bg-emerald-900/20 border-emerald-700/30 card-3d"
                style={{ 
                  perspective: '1000px',
                  transformStyle: 'preserve-3d'
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                  <div className="absolute top-4 left-4 p-2 bg-emerald-500/20 rounded-full backdrop-blur-sm">
                    <Icon className="w-6 h-6 text-emerald-400" />
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-1">
                    {product.description}
                  </p>
                  <Button 
                    asChild 
                    variant="outline" 
                    size="sm"
                    className="self-start border-emerald-400/30 text-emerald-400 bg-slate-800/25 hover:bg-emerald-400/10 hover:border-emerald-400/50 transition-all duration-300"
                  >
                    <Link to={product.link} className="flex items-center">
                      {buttonLabel}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

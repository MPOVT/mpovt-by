import React from 'react';
import { ProductOverview } from './ProductOverview';

interface ImageContentSectionProps {
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'gradient';
  imagePosition?: 'left' | 'right';
  imageSize?: 'small' | 'medium' | 'large' | 'full';
  backgroundGradient?: string;
  glowColors?: string;
  animationDelay?: number;
  className?: string;
}

export const ImageContentSection: React.FC<ImageContentSectionProps> = ({
  title,
  description,
  features,
  imageSrc,
  imageAlt,
  variant = 'primary',
  imagePosition = 'right',
  imageSize = 'full',
  glowColors = "from-emerald-500/20 to-teal-500/20",
  animationDelay = 0,
  className = ""
}) => {
  const isImageLeft = imagePosition === 'left';
  
  // Определяем размер изображения
  const getImageSizeClasses = () => {
    switch (imageSize) {
      case 'small':
        return 'w-2/4 max-w-sm mx-auto';
      case 'medium':
        return 'w-4/5 max-w-md mx-auto';
      case 'large':
        return 'w-11/12 max-w-lg mx-auto';
      case 'full':
      default:
        return 'w-full';
    }
  };

  return (
    <section className={`py-16 md:py-20 px-4 relative ${className}`}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Контентный блок */}
          <div className={`${isImageLeft ? 'order-2 lg:order-2' : 'order-1 lg:order-1'} animate-fade-in-left`}>
            <ProductOverview
              title={title}
              description={description}
              features={features}
              variant={variant}
              animationDelay={animationDelay}
            />
          </div>
          {/* Блок с изображением */}
          <div className={`${isImageLeft ? 'order-1 lg:order-1' : 'order-2 lg:order-2'} relative animate-fade-in-right`}>
            <div className={`absolute inset-0 bg-gradient-to-r ${glowColors} blur-3xl`}></div>
            <img 
              src={imageSrc}
              alt={imageAlt}
              className={`relative rounded-2xl shadow-2xl h-auto transform hover:scale-105 transition-transform duration-700 ${getImageSizeClasses()}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

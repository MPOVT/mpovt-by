
import { useEffect, useState } from 'react';
import { LoaderCircle } from 'lucide-react';

interface PreloadManagerProps {
  children: React.ReactNode;
}

const PreloadManager = ({ children }: PreloadManagerProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const preloadResources = async () => {
      const imagesToPreload = [
        '/lovable-uploads/70fca613-4992-4ede-98c2-f9c7e669d23e.png', // Logo
      ];

      const imagePromises = imagesToPreload.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = src;
        });
      });

      try {
        await Promise.all(imagePromises);
        
        // Минимальная длительность загрузки 2 секунды
        setTimeout(() => {
          setFadeOut(true);
          // Дополнительная задержка для плавного исчезновения
          setTimeout(() => {
            setIsLoading(false);
          }, 600);
        }, 2000);
      } catch (error) {
        console.warn('Some resources failed to preload:', error);
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => {
            setIsLoading(false);
          }, 600);
        }, 2000);
      }
    };

    preloadResources();
  }, []);

  if (isLoading) {
    return (
      <div 
        className={`fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-slate-800 to-black flex items-center justify-center transition-opacity duration-600 ${
          fadeOut ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="text-center space-y-6 animate-fade-in">
          <div className="flex justify-center">
            <LoaderCircle 
              size={48} 
              className="animate-spin text-orange-500" 
            />
          </div>
          <p className="text-lg text-white/90 font-medium">
            Загрузка...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      {children}
    </div>
  );
};

export default PreloadManager;


import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface PreloadManagerProps {
  children: React.ReactNode;
}

const PreloadManager = ({ children }: PreloadManagerProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [resourcesLoaded, setResourcesLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const preloadResources = async () => {
      const imagesToPreload = [
        '/lovable-uploads/70fca613-4992-4ede-98c2-f9c7e669d23e.png', // Logo
        // Добавьте другие критически важные изображения здесь
      ];

      const imagePromises = imagesToPreload.map((src, index) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            setProgress(((index + 1) / imagesToPreload.length) * 100);
            resolve(img);
          };
          img.onerror = reject;
          img.src = src;
        });
      });

      try {
        await Promise.all(imagePromises);
        setResourcesLoaded(true);
        
        // Минимальное время загрузки для плавного UX
        setTimeout(() => {
          setIsLoading(false);
        }, 800);
      } catch (error) {
        console.warn('Some resources failed to preload:', error);
        setResourcesLoaded(true);
        setProgress(100);
        setTimeout(() => {
          setIsLoading(false);
        }, 800);
      }
    };

    preloadResources();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center relative overflow-hidden">
        {/* Декоративные элементы фона */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-400 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-300 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="text-center space-y-8 z-10 px-6">
          {/* Logo skeleton с градиентом */}
          <div className="flex justify-center animate-bounce-in-soft">
            <div className="relative">
              <Skeleton className="h-20 w-40 rounded-xl bg-gradient-to-r from-primary/20 to-orange-400/20 border-2 border-primary/10" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-orange-400/10 rounded-xl animate-pulse"></div>
            </div>
          </div>
          
          {/* Заголовок с градиентом */}
          <div className="space-y-4 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent animate-text-glow">
              ОАО МПОВТ
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Загружаем контент для лучшего опыта...
            </p>
          </div>

          {/* Анимированные точки */}
          <div className="flex justify-center space-x-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-3 h-3 bg-gradient-to-r from-primary to-orange-400 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}
              ></div>
            ))}
          </div>
          
          {/* Прогресс бар с градиентом */}
          <div className="w-80 max-w-full mx-auto space-y-2">
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-primary via-orange-400 to-primary bg-size-200 animate-[wave_2s_ease-in-out_infinite] rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="text-sm text-muted-foreground">
              {Math.round(progress)}%
            </div>
          </div>

          {/* Декоративные иконки */}
          <div className="flex justify-center space-x-6 mt-8 opacity-40">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-orange-400 rounded-lg animate-float"></div>
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-primary rounded-lg animate-float" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-orange-400 rounded-lg animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Дополнительный декоративный элемент внизу */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default PreloadManager;

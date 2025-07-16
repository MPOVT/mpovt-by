
import { useEffect, useState } from 'react';
import { LoaderCircle } from 'lucide-react';

interface PreloadManagerProps {
  children: React.ReactNode;
  onLoadingChange?: (isLoading: boolean) => void;
}

const PreloadManager = ({ children, onLoadingChange }: PreloadManagerProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const preloadResources = async () => {
      const imagesToPreload = [
        '/lovable-uploads/70fca613-4992-4ede-98c2-f9c7e669d23e.png', // Logo
        '../public/imgs/laptops/p1.png', // H-Book изображение 1
        '../public/imgs/laptops/p2.png', // H-Book изображение 2
      ];

      const videoToPreload = '/videos/h-book.mp4'; // H-Book видео

      const imagePromises = imagesToPreload.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = src;
        });
      });

      // Предзагрузка видео
      const videoPromise = new Promise((resolve, reject) => {
        const video = document.createElement('video');
        video.onloadeddata = () => resolve(video);
        video.onerror = reject;
        video.src = videoToPreload;
        video.preload = "auto";
        video.load();
      });

      // Добавляем link теги для предзагрузки
      const resources = [
        { href: '../public/imgs/laptops/p1.png', as: 'image' },
        { href: '../public/imgs/laptops/p2.png', as: 'image' },
        { href: '/videos/h-book.mp4', as: 'video', type: 'video/mp4' }
      ];

      resources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource.href;
        link.as = resource.as;
        if (resource.type) {
          link.type = resource.type;
        }
        document.head.appendChild(link);
      });

      try {
        await Promise.all([...imagePromises, videoPromise]);
        
        // Минимальная длительность загрузки 2 секунды
        setTimeout(() => {
          setFadeOut(true);
          onLoadingChange?.(false);
          // Дополнительная задержка для плавного исчезновения
          setTimeout(() => {
            setIsLoading(false);
          }, 600);
        }, 2000);
      } catch (error) {
        console.warn('Some resources failed to preload:', error);
        setTimeout(() => {
          setFadeOut(true);
          onLoadingChange?.(false);
          setTimeout(() => {
            setIsLoading(false);
          }, 600);
        }, 2000);
      }
    };

    preloadResources();

    // Очистка при размонтировании
    return () => {
      // Удаляем добавленные link теги
      const preloadLinks = document.querySelectorAll('link[rel="preload"]') as NodeListOf<HTMLLinkElement>;
      preloadLinks.forEach(link => {
        if (link.href.includes('imgs/laptops') || link.href.includes('videos/h-book')) {
          try {
            document.head.removeChild(link);
          } catch (error) {
            // Игнорируем ошибки если элемент уже удален
          }
        }
      });
    };
  }, [onLoadingChange]);

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

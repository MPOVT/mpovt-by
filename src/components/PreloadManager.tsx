
import { useEffect, useState } from 'react';
import { LoaderCircle } from 'lucide-react';
import { ASSET_LOADING_CONFIG, createPreloadLink } from '../lib/media-assets';
import { useLanguage } from '@/contexts/LanguageContext';

interface PreloadManagerProps {
  children: React.ReactNode;
  onLoadingChange?: (isLoading: boolean) => void;
}

const PreloadManager = ({ children, onLoadingChange }: PreloadManagerProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const { t } = useLanguage();
  const [loadingStatus, setLoadingStatus] = useState((t.preload && t.preload.initializing) || 'Инициализация...');

  useEffect(() => {
    const preloadResources = async () => {
      // Регистрируем Service Worker для кэширования (без блокировки)
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/ServiceWorker.js')
          .then(registration => console.log('SW registered:', registration))
          .catch(error => console.warn('SW registration failed:', error));
      }

      setLoadingStatus(t?.components?.preload?.loadingCritical ?? 'Загружаю критические ресурсы...');

      // Функция для эффективной предзагрузки изображений
      const preloadImage = (src: string): Promise<void> => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = (e) => {
            console.warn(`Failed to preload: ${src}`, e);
            resolve(); // Продолжаем даже при ошибке
          };
          img.src = src;
        });
      };

      try {
        // Загружаем только критически важные ресурсы для первой загрузки
        const criticalAssets = ASSET_LOADING_CONFIG.critical.assets;
        const priorityAssets = ASSET_LOADING_CONFIG.priority.assets;

        // Добавляем preload ссылки только для критических ресурсов
        criticalAssets.forEach(href => {
          if (!document.querySelector(`link[href="${href}"]`)) {
            const link = createPreloadLink(href, 'image', false);
            document.head.appendChild(link);
          }
        });

        // Предзагружаем критические изображения параллельно (максимум 6 одновременно)
        setLoadingStatus(t?.components?.preload?.loadingMainImages ?? 'Загружаю основные изображения...');
        const criticalPromises = criticalAssets.map(src => preloadImage(src));
        await Promise.all(criticalPromises);

        // Предзагружаем приоритетные изображения (только для главной страницы)
        const currentPath = window.location.pathname;
        if (currentPath === '/' || currentPath === '/index.html') {
          setLoadingStatus(t?.components?.preload?.loadingHomeContent ?? 'Загружаю контент главной страницы...');
          const uniquePriorityAssets = priorityAssets
            .filter(src => !criticalAssets.includes(src as any)) // Исключаем уже загруженные
            .slice(0, 4); // Ограничиваем количество

          const priorityPromises = uniquePriorityAssets.map(src => preloadImage(src));
          await Promise.all(priorityPromises);
        }

        setLoadingStatus(t?.components?.preload?.done ?? 'Готово!');

        // Быстрое завершение загрузки (без искусственных задержек)
        setTimeout(() => {
          setFadeOut(true);
          onLoadingChange?.(false);
          setTimeout(() => {
            setIsLoading(false);
          }, 1300);
        }, 1200);

      } catch (error) {
        console.warn('Preload error:', error);
        // Быстро завершаем даже при ошибках
        setLoadingStatus(t?.components?.preload?.done ?? 'Готово!');
        setTimeout(() => {
          setFadeOut(true);
          onLoadingChange?.(false);
          setTimeout(() => {
            setIsLoading(false);
          }, 1300);
        }, 1200);
      }
    };

    // Запускаем предзагрузку
    preloadResources();

    // Очистка - удаляем только наши preload ссылки
    return () => {
      const ourPreloadLinks = document.querySelectorAll('link[rel="preload"][href*="/imgs/"]');
      ourPreloadLinks.forEach(link => {
        try {
          document.head.removeChild(link);
        } catch (error) {
          // Игнорируем ошибки
        }
      });
    };
  }, [onLoadingChange]);

  if (isLoading) {
    return (
      <div
        className={`fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-slate-800 to-black flex items-center justify-center transition-opacity duration-600 ${fadeOut ? 'opacity-0' : 'opacity-100'
          }`}
      >
        <div className="text-center space-y-6 animate-fade-in">
          {/* Логотип МПОВТ */}
          <div className="flex justify-center mb-6">
            <img
              src="/imgs/logos/mpovt.png"
              alt={t?.components?.preload?.logoAlt ?? 'ОАО МПОВТ'}
              className="h-32 w-auto object-contain opacity-90"
            />
          </div>

          {/* Индикатор загрузки */}
          <div className="flex justify-center">
            <LoaderCircle
              size={48}
              className="animate-spin text-white/80"
            />
          </div>

          {/* Основной текст загрузки */}
          <p className="text-xl text-white/90 font-medium">
            {t?.components?.preload?.loadingTitle ?? 'Загрузка'}
          </p>

          {/* Статус процесса */}
          <p className="text-sm text-white/50 font-normal animate-pulse">
            {loadingStatus}
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

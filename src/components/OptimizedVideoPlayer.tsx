
import React, { useState, useRef, useEffect } from "react";

interface OptimizedVideoPlayerProps {
  src: string;
  placeholder: string;
  className?: string;
  [key: string]: any;
}

const OptimizedVideoPlayer: React.FC<OptimizedVideoPlayerProps> = ({ 
  src, 
  placeholder, 
  className, 
  ...props 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Функция для остановки видео
  const stopVideo = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
      setShowPlaceholder(true);
      console.log('Video stopped:', src);
    }
  };

  // Эффект для обработки видимости элемента
  useEffect(() => {
    // Создаем observer с строгими параметрами
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting && entry.intersectionRatio > 0.5;
        console.log('Video visibility changed:', src, 'visible:', isVisible, 'ratio:', entry.intersectionRatio);
        setIsIntersecting(isVisible);
      },
      {
        threshold: 0.5, // Видео воспроизводится только когда видно минимум 50%
        rootMargin: '0px'
      }
    );

    const container = containerRef.current;
    if (container && observerRef.current) {
      observerRef.current.observe(container);
    }

    return () => {
      if (observerRef.current && container) {
        observerRef.current.unobserve(container);
        observerRef.current.disconnect();
      }
    };
  }, [src]);

  // Эффект для управления воспроизведением видео
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isIntersecting && isVideoLoaded) {
      console.log('Playing video:', src);
      video.play().then(() => {
        setShowPlaceholder(false);
      }).catch((error) => {
        console.error('Error playing video:', src, error);
        setShowPlaceholder(true);
      });
    } else {
      console.log('Pausing video:', src);
      video.pause();
      video.currentTime = 0;
      setShowPlaceholder(true);
    }
  }, [isIntersecting, isVideoLoaded, src]);

  // Глобальный эффект для остановки всех видео при уходе со страницы
  useEffect(() => {
    const handleBeforeUnload = () => {
      stopVideo();
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopVideo();
      }
    };

    // Добавляем слушатели событий
    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Убираем слушатели при размонтировании компонента
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      stopVideo();
    };
  }, [src]);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
    console.log('Video loaded:', src);
  };

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      {/* Видео */}
      <video
        ref={videoRef}
        src={src}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          showPlaceholder ? 'opacity-0' : 'opacity-100'
        } ${className}`}
        loop
        muted
        playsInline
        preload="metadata"
        onLoadedData={handleVideoLoad}
        {...props}
      />

      {/* Изображение-заглушка */}
      <div 
        className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
          showPlaceholder ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img 
          src={placeholder} 
          alt="Video placeholder"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <div className="w-0 h-0 border-l-[8px] border-l-white border-y-[6px] border-y-transparent ml-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptimizedVideoPlayer;

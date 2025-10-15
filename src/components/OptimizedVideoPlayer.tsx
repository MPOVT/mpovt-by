
import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

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
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [savedTime, setSavedTime] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Функция для остановки видео с сохранением позиции
  const stopVideo = () => {
    const video = videoRef.current;
    if (video && !video.paused) {
      setSavedTime(video.currentTime);
      // Сначала показываем placeholder, затем останавливаем видео
      setShowPlaceholder(true);
      // Задержка для плавного перехода
      setTimeout(() => {
        video.pause();
      }, 300);
      //console.log('Video stopped at:', video.currentTime, 'src:', src);
    }
  };

  // Функция для воспроизведения видео с восстановлением позиции
  const playVideo = async () => {
    const video = videoRef.current;
    if (video && isVideoLoaded) {
      try {
        if (savedTime > 0) {
          video.currentTime = savedTime;
        }
        await video.play();
        // Задержка для плавного перехода от placeholder к видео
        setTimeout(() => {
          setShowPlaceholder(false);
        }, 100);
        //console.log('Video playing from:', video.currentTime, 'src:', src);
      } catch (error) {
        console.error('Error playing video:', src, error);
        setShowPlaceholder(true);
      }
    }
  };

  // Эффект для обработки видимости элемента
  useEffect(() => {
    const handleIntersection = ([entry]: IntersectionObserverEntry[]) => {
      const isVisible = entry.isIntersecting && entry.intersectionRatio > 1;
      //console.log('Video visibility changed:', src, 'visible:', isVisible, 'ratio:', entry.intersectionRatio);
      setIsIntersecting(isVisible);
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
      rootMargin: '0px'
    });

    const container = containerRef.current;
    if (container && observerRef.current) {
      observerRef.current.observe(container);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [src]);

  // Эффект для управления воспроизведением видео
  useEffect(() => {
    if (isIntersecting && isVideoLoaded) {
      playVideo();
    } else if (!isIntersecting) {
      stopVideo();
    }
  }, [isIntersecting, isVideoLoaded]);

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
  }, []);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
    console.log('Video loaded:', src);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video && !video.paused) {
      setSavedTime(video.currentTime);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      {/* Видео */}
      <video
        ref={videoRef}
        src={src}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          showPlaceholder ? 'opacity-0' : 'opacity-100'
        } ${className}`}
        loop
        muted
        playsInline
        preload="metadata"
        onLoadedData={handleVideoLoad}
        onTimeUpdate={handleTimeUpdate}
        {...props}
      />

      {/* Изображение-заглушка */}
      <div 
        className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
          showPlaceholder ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img 
          src={placeholder} 
          alt={(t && t.video && t.video.placeholderAlt) || 'Video placeholder'}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
    </div>
  );
};

export default OptimizedVideoPlayer;

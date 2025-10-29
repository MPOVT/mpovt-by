import React from 'react';

interface VideoSectionProps {
  title: string;
  description: string;
  videoSrc: string;
  posterSrc?: string;
  gradientColors?: string;
  className?: string;
}

export const VideoSection: React.FC<VideoSectionProps> = ({
  title,
  description,
  videoSrc,
  posterSrc = "/placeholder.svg",
  gradientColors = "from-cyan-400 to-blue-400",
  className = ""
}) => {
  return (
    <section id="video" className={`py-16 md:py-20 px-4 bg-gradient-to-b from-black to-slate-900/50 relative ${className}`}>
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r ${gradientColors} bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]`}>
            {title}
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-2xl"></div>
            <video 
              className="w-full h-auto rounded-2xl relative z-10 pointer-events-none"
              autoPlay
              muted
              loop
              preload="auto"
              poster={posterSrc}
              playsInline
              disablePictureInPicture
              controlsList="nodownload nofullscreen noremoteplayback"
            >
              <source src={videoSrc} type="video/mp4" />
              Ваш браузер не поддерживает воспроизведение видео.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

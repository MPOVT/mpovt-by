import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, LucideIcon, FileText } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface DownloadItem {
  title: string;
  description: string;
  icon: LucideIcon;
  fileName: string;
  fileSize: string;
  downloadUrl: string;
}

interface DownloadsSectionProps {
  title: string;
  description: string;
  downloads: DownloadItem[];
  variant?: 'primary' | 'secondary' | 'outline' | 'gradient';
  gradientColors?: string;
}

export const DownloadsSection: React.FC<DownloadsSectionProps> = ({
  title,
  description,
  downloads,
  variant = 'primary',
  gradientColors = 'from-cyan-400 to-blue-400'
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          iconContainer: 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20',
          icon: 'text-cyan-400',
          button: 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-cyan-400/50 hover:shadow-cyan-500/20',
          gradientOverlay: 'from-cyan-500/10 to-blue-500/10',
          hoverBorder: 'hover:border-cyan-400/30'
        };
      case 'secondary':
        return {
          iconContainer: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20',
          icon: 'text-purple-400',
          button: 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-purple-400/50 hover:shadow-purple-500/20',
          gradientOverlay: 'from-purple-500/10 to-pink-500/10',
          hoverBorder: 'hover:border-purple-400/30'
        };
      case 'outline':
        return {
          iconContainer: 'bg-gradient-to-br from-emerald-500/20 to-teal-500/20',
          icon: 'text-emerald-400',
          button: 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-emerald-400/50 hover:shadow-emerald-500/20',
          gradientOverlay: 'from-emerald-500/10 to-teal-500/10',
          hoverBorder: 'hover:border-emerald-400/30'
        };
      case 'gradient':
        return {
          iconContainer: 'bg-gradient-to-br from-orange-500/20 to-yellow-500/20',
          icon: 'text-orange-400',
          button: 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-orange-400/50 hover:shadow-orange-500/20',
          gradientOverlay: 'from-orange-500/10 to-yellow-500/10',
          hoverBorder: 'hover:border-orange-400/30'
        };
      default:
        return {
          iconContainer: 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20',
          icon: 'text-cyan-400',
          button: 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-cyan-400/50 hover:shadow-cyan-500/20',
          gradientOverlay: 'from-cyan-500/10 to-blue-500/10',
          hoverBorder: 'hover:border-cyan-400/30'
        };
    }
  };

  const styles = getVariantStyles();
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/6 right-1/6 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/6 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`text-3xl md:text-5xl font-bold bg-gradient-to-r ${gradientColors} bg-clip-text text-transparent mb-8`}>
            {title}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        <div className="grid gap-4 max-w-5xl mx-auto">
          {downloads.map((download, index) => (
            <Card 
              key={index} 
              className={`p-6 bg-white/5 backdrop-blur-xl border border-white/10 ${styles.hoverBorder} transition-all duration-300 group relative`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradientOverlay} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-start space-x-4 flex-1">
                  <div className={`w-12 h-12 ${styles.iconContainer} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <FileText className={`w-6 h-6 ${styles.icon}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-white">
                      {download.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-1">{download.description}</p>
                    <div className="text-xs text-slate-500">
                      <span>{download.fileName}</span>
                      <span className="mx-2">•</span>
                      <span>{download.fileSize}</span>
                    </div>
                  </div>
                </div>
                <Button
                  size="sm"
                  className={`${styles.button} backdrop-blur-sm transition-all duration-300 flex-shrink-0 ml-4 shadow-lg hover:shadow-xl hover:scale-[1.02] group/btn`}
                  onClick={() => window.open(download.downloadUrl, '_blank')}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${styles.gradientOverlay} rounded-md opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300`}></div>
                  <Download className="w-4 h-4 mr-2 relative z-10" />
                  <span className="relative z-10">{t?.downloads?.downloadButton ?? 'Скачать'}</span>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface DownloadItem {
  title: string;
  description: string;
  downloadUrl: string;
  fileName?: string;
  fileSize?: string;
}

interface DownloadsSectionProps {
  title: string;
  description: string;
  downloads: DownloadItem[];
  gradientFrom?: string; // например: "cyan-400"
  gradientTo?: string;   // например: "blue-400"
  accentColor?: string;  // например: "cyan-400"
}

export const DownloadsSection: React.FC<DownloadsSectionProps> = ({
  title,
  description,
  downloads,
  gradientFrom = "cyan-400",
  gradientTo = "blue-400",
  accentColor = "cyan-400",
}) => {
  const { t } = useLanguage();

  // Формируем стили динамически по цветам
  const gradientOverlay = `from-${gradientFrom}/10 to-${gradientTo}/10`;
  const iconContainer = `bg-gradient-to-br from-${gradientFrom}/20 to-${gradientTo}/20`;
  const iconColor = `text-${accentColor}`;
  const buttonClasses = `
    bg-white/10 hover:bg-white/20 text-white border border-white/20 
    hover:border-${accentColor}/50 hover:shadow-${accentColor}/20
  `;
  const hoverBorder = `hover:border-${accentColor}/30`;

  return (
    <section className="py-16 md:py-20 bg-black relative overflow-hidden">
      {/* BG Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-1/6 right-1/6 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-${gradientFrom}/20 to-${gradientTo}/20 rounded-full blur-3xl animate-pulse`}
        ></div>
        <div
          className={`absolute bottom-1/4 left-1/6 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-${gradientTo}/20 to-${gradientFrom}/20 rounded-full blur-3xl animate-pulse`}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className={`text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-${gradientFrom} to-${gradientTo} bg-clip-text text-transparent relative z-10`}
          >
            {title}
          </h2>
          <p className="text-lg text-white/60 relative z-10">{description}</p>
        </div>

        {/* Download cards */}
        <div className="grid gap-4 max-w-5xl mx-auto">
          {downloads.map((download, index) => (
            <Card
              key={index}
              className={`p-6 bg-white/5 backdrop-blur-xl border border-white/10 ${hoverBorder} transition-all duration-300 group relative`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Hover effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${gradientOverlay} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>

              <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between relative z-10">
                <div className="flex items-start space-x-4 flex-1">
                  <div
                    className={`w-12 h-12 ${iconContainer} rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                    <FileText className={`w-6 h-6 ${iconColor}`} />
                  </div>

                  <div className="flex-1 min-w-0"> {/* Добавлен min-w-0 для предотвращения overflow */}
                    <h3 className="text-lg font-semibold text-white">
                      {download.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-1">
                      {download.description}
                    </p>

                    {(download.fileName || download.fileSize) && (
                      <div className="text-xs text-slate-500">
                        {download.fileName && <span>{download.fileName}</span>}
                        {download.fileName && download.fileSize && (
                          <span className="mx-2 sm:inline">@</span>
                        )}
                        {download.fileSize && <span>{download.fileSize}</span>}
                      </div>
                    )}
                  </div>
                </div>

                {/* Кнопка перенесена вниз для мобильных и справа для десктопа */}
                <Button
                  size="sm"
                  className={`${buttonClasses} backdrop-blur-sm transition-all duration-300 flex-shrink-0 md:ml-4 shadow-lg hover:shadow-xl hover:scale-[1.02] group/btn relative overflow-hidden w-full md:w-auto`} // w-full для мобильных
                  onClick={() => window.open(download.downloadUrl, "_blank")}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${gradientOverlay} rounded-md opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300`}
                  ></div>
                  <Download className="w-4 h-4 mr-2 relative z-10" />
                  <span className="relative z-10">
                    {t?.downloads?.downloadButton ?? "Скачать"}
                  </span>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

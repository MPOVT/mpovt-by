import Footer from '@/components/Footer';
import { PageHero } from '@/components/common/PageHero';
import { ImageContentSection } from '@/components/sections/ImageContentSection';
import { VideoSection } from '@/components/sections/VideoSection';
import { DescriptionSection } from '@/components/common/DescriptionSection';
import { SectionHeader } from '@/components/common/SectionHeader';
import { IconCard } from '@/components/common/IconCard';
import { FeatureCard } from '@/components/common/FeatureCard';
import { DownloadsSection } from '@/components/sections/DownloadsSection';
import { CTASection } from '@/components/sections/CTASection';
import { Monitor, Zap, Eye, Settings, Shield, Cpu } from 'lucide-react';

const Monitors = () => {
  const specifications = [
    { 
      icon: Monitor, 
      title: "Диагональ экрана", 
      description: "27\" - 32\" Ultra HD 4K",
      color: { icon: "text-blue-400", bg: "bg-blue-500/20" }
    },
    { 
      icon: Zap, 
      title: "Частота обновления", 
      description: "До 144Hz для плавного изображения",
      color: { icon: "text-green-400", bg: "bg-green-500/20" }
    },
    { 
      icon: Eye, 
      title: "Цветопередача", 
      description: "100% sRGB, Delta E < 2",
      color: { icon: "text-yellow-400", bg: "bg-yellow-500/20" }
    },
    { 
      icon: Settings, 
      title: "Подключения", 
      description: "USB-C, HDMI 2.1, DisplayPort 1.4",
      color: { icon: "text-purple-400", bg: "bg-purple-500/20" }
    },
    { 
      icon: Shield, 
      title: "Защита глаз", 
      description: "Технология Low Blue Light",
      color: { icon: "text-pink-400", bg: "bg-pink-500/20" }
    },
    { 
      icon: Cpu, 
      title: "Время отклика", 
      description: "1ms GTG для геймеров",
      color: { icon: "text-indigo-400", bg: "bg-indigo-500/20" }
    }
  ];

  const features = [
    {
      title: "Профессиональная цветопередача",
      description: "Откалиброванные дисплеи с точной цветопередачей для дизайнеров и фотографов",
      image: "/imgs/displays/A7_03503-min.jpg"
    },
    {
      title: "Игровая производительность",
      description: "Высокая частота обновления и минимальное время отклика для киберспорта",
      image: "/imgs/displays/A7_03508-min.jpg"
    },
    {
      title: "Эргономичный дизайн",
      description: "Регулировки по высоте, наклону и повороту для максимального комфорта",
      image: "/imgs/displays/A7_03511-min.jpg"
    },
    {
      title: "Многозадачность",
      description: "Поддержка нескольких устройств одновременно с функцией Picture-by-Picture",
      image: "/imgs/displays/A7_03513-min.jpg"
    }
  ];

  const downloads = [
    { 
      title: "Технические характеристики H-Monitor", 
      description: "Подробные спецификации мониторов",
      icon: Monitor,
      fileName: "h-monitor-specs.pdf",
      fileSize: "2.1 MB",
      downloadUrl: "/downloads/h-monitor-specs.pdf"
    },
    { 
      title: "Руководство пользователя", 
      description: "Инструкция по настройке и использованию",
      icon: Settings,
      fileName: "h-monitor-manual.pdf",
      fileSize: "5.8 MB",
      downloadUrl: "/downloads/h-monitor-manual.pdf"
    },
    { 
      title: "Драйверы и ПО для калибровки", 
      description: "Программное обеспечение и драйверы",
      icon: Zap,
      fileName: "h-monitor-drivers.zip",
      fileSize: "128 MB",
      downloadUrl: "/downloads/h-monitor-drivers.zip"
    },
    { 
      title: "Гарантийный талон", 
      description: "Условия гарантийного обслуживания",
      icon: Shield,
      fileName: "h-monitor-warranty.pdf",
      fileSize: "890 KB",
      downloadUrl: "/downloads/h-monitor-warranty.pdf"
    }
  ];

  const displayDescriptionParagraphs = [
    "H-Monitor представляет новое поколение профессиональных дисплеев, разработанных для самых требовательных пользователей. Каждый монитор проходит индивидуальную заводскую калибровку для обеспечения идеальной цветопередачи.",
    "Современные геймеры и киберспортсмены оценят высокую частоту обновления 144Hz и время отклика всего 1ms. Технология адаптивной синхронизации устраняет разрывы изображения и обеспечивает плавный геймплей.",
    "Для профессионалов в области дизайна и видеомонтажа критически важна точность цветопередачи. H-Monitor поддерживает 100% цветового пространства sRGB и Delta E менее 2, что гарантирует профессиональное качество работы.",
    "Эргономичная подставка обеспечивает полную свободу настройки положения экрана. Регулировки по высоте до 150mm, наклон ±15°, поворот ±45° и возможность портретной ориентации позволяют создать идеальное рабочее место."
  ];

  return (
    <div className="min-h-screen bg-black">
      <PageHero
        title="H-Monitor"
        subtitle="Профессиональные дисплеи нового поколения"
        description="Мониторы с превосходной цветопередачей, высокой производительностью и эргономичным дизайном для работы и развлечений"
        backgroundVariant="default"
      />

      <ImageContentSection
        title="Технологии будущего"
        description="H-Monitor объединяет передовые технологии отображения с профессиональной точностью цветопередачи"
        imageSrc="/imgs/displays/A7_03517-min.png"
        imageAlt="H-Monitor дисплей"
        features={[
          "Ultra HD 4K разрешение с HDR10",
          "Квантовые точки для расширенной цветовой гаммы",
          "Технология защиты глаз Low Blue Light",
          "Интеллектуальная настройка яркости"
        ]}
        imagePosition="right"
        imageSize="small"
      />

      <DescriptionSection
        title="Революционные дисплеи"
        paragraphs={displayDescriptionParagraphs}
      />

      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-slate-900/50 to-black relative">
        <div className="container mx-auto">
          <SectionHeader
            title="Технические характеристики"
            subtitle="ПРОФЕССИОНАЛЬНЫЕ ВОЗМОЖНОСТИ"
            description="Каждый H-Monitor создан для максимальной производительности и точности"
            gradientColors='from-emerald-400 to-teal-400'
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {specifications.map((spec, index) => (
              <IconCard
                key={index}
                icon={spec.icon}
                title={spec.title}
                description={spec.description}
                color={spec.color}
                variant="primary"
                animationDelay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 relative">
        <div className="container mx-auto">
          <SectionHeader
            title="Ключевые преимущества"
            subtitle="ПОЧЕМУ H-MONITOR?"
            description="Технологии, которые делают разницу в вашей работе и развлечениях"
            gradientColors="from-teal-400 to-cyan-400"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={Monitor}
                title={feature.title}
                description={feature.description}
                variant={index % 2 === 0 ? "primary" : "secondary"}
                animationDelay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      <DownloadsSection
        title="Документация и ПО"
        description="Загрузите необходимые документы и программное обеспечение для H-Monitor"
        downloads={downloads}
      />

      <CTASection
        title="Готовы к новому уровню качества?"
        description="H-Monitor - это инвестиция в ваш профессиональный успех и комфортную работу"
        primaryButtonText="Заказать консультацию"
        primaryButtonLink="/contact"
        secondaryButtonText="Посмотреть все мониторы"
        secondaryButtonLink="/products"
      />

      <Footer />
    </div>
  );
};

export default Monitors;
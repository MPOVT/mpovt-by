import React from "react";
import Footer from "@/components/Footer";
import { 
  PageHero, 
  SectionHeader, 
  IconCard, 
  CTASection, 
  FeatureCard, 
  DownloadsSection,
  VideoSection,
  DescriptionSection,
  ImageContentSection
} from "@/components/common";
import { 
  Download,
  Monitor,
  Battery,
  Cpu,
  Wifi,
  Camera,
  Mic,
  Usb,
  Eye,
  Laptop,
  Shield,
  Zap,
  Globe
} from "lucide-react";

const Notebooks = () => {
  // Данные для компонентов
  const specifications = [
    {
      icon: Cpu,
      title: "Процессор",
      description: "Intel Core от 13-го поколения и Ryzen от 7-го поколения",
      color: { 
        icon: "text-cyan-400", 
        bg: "bg-cyan-500/20", 
        bgHover: "bg-cyan-500/40", 
        border: "from-cyan-500/20 to-purple-500/20", 
        cardHover: "bg-cyan-500/20" 
      }
    },
    {
      icon: Monitor,
      title: "Дисплей",
      description: "15,6\" FHD IPS экран с широким углом обзора и приятной картинкой",
      color: { 
        icon: "text-emerald-400", 
        bg: "bg-emerald-500/20", 
        bgHover: "bg-emerald-500/40", 
        border: "from-emerald-500/20 to-teal-500/20", 
        cardHover: "bg-emerald-500/20" 
      }
    },
    {
      icon: Battery,
      title: "Автономность",
      description: "Емкая батарея обеспечивает до 12 часов работы от батареи",
      color: { 
        icon: "text-yellow-400", 
        bg: "bg-yellow-500/20", 
        bgHover: "bg-yellow-500/40", 
        border: "from-yellow-500/20 to-orange-500/20", 
        cardHover: "bg-yellow-500/20" 
      }
    },
    {
      icon: Wifi,
      title: "Беспроводная сеть",
      description: "Сверхбыстрое соединение с Wi-Fi 6 поколения (AX)",
      color: { 
        icon: "text-purple-400", 
        bg: "bg-purple-500/20", 
        bgHover: "bg-purple-500/40", 
        border: "from-purple-500/20 to-pink-500/20", 
        cardHover: "bg-purple-500/20" 
      }
    },
    {
      icon: Camera,
      title: "Веб-камера",
      description: "HD 720p с качественным изображением",
      color: { 
        icon: "text-pink-400", 
        bg: "bg-pink-500/20", 
        bgHover: "bg-pink-500/40", 
        border: "from-pink-500/20 to-rose-500/20", 
        cardHover: "bg-pink-500/20" 
      }
    },
    {
      icon: Mic,
      title: "Микрофон",
      description: "Отличное качество звука с интеллектуальной системой шумоподавления",
      color: { 
        icon: "text-indigo-400", 
        bg: "bg-indigo-500/20", 
        bgHover: "bg-indigo-500/40", 
        border: "from-indigo-500/20 to-blue-500/20", 
        cardHover: "bg-indigo-500/20" 
      }
    },
    {
      icon: Usb,
      title: "Интерфейсы",
      description: "Полнофункциональные порты USB Type-C и USB 3.2",
      color: { 
        icon: "text-teal-400", 
        bg: "bg-teal-500/20", 
        bgHover: "bg-teal-500/40", 
        border: "from-teal-500/20 to-cyan-500/20", 
        cardHover: "bg-teal-500/20" 
      }
    },
    {
      icon: Eye,
      title: "Дизайн",
      description: "Узкие рамки для увеличения площади экрана",
      color: { 
        icon: "text-orange-400", 
        bg: "bg-orange-500/20", 
        bgHover: "bg-orange-500/40", 
        border: "from-orange-500/20 to-red-500/20", 
        cardHover: "bg-orange-500/20" 
      }
    }
  ];

  const features = [
    {
      icon: Laptop,
      title: "Мобильность",
      description: "Легкий и удобный в переноске, подходит для работы в любом месте"
    },
    {
      icon: Shield,
      title: "Надежность",
      description: "Производство ОАО \"МПОВТ\" под брендами \"H\" и индивидуальными брендами заказчиков"
    },
    {
      icon: Zap,
      title: "Производительность",
      description: "Производительность уровня полноценной рабочей станции"
    },
    {
      icon: Globe,
      title: "Совместимость",
      description: "Поддержка всех функций корпоративной офисной среды"
    }
  ];

  const downloads = [
    {
      title: "15 MAK4 (T32E3W, T52E4W, T74E4W)",
      description: "Драйвера для моделей серии MAK4",
      icon: Download,
      fileName: "MAK4_drivers.zip",
      fileSize: "~45 MB",
      downloadUrl: "https://disk.yandex.ru/d/No7uvNYqKiqs4w"
    },
    {
      title: "14 MAK1 (TC2E3W)",
      description: "Драйвера для модели MAK1",
      icon: Download,
      fileName: "MAK1_drivers.zip",
      fileSize: "~38 MB",
      downloadUrl: "https://disk.yandex.ru/d/deUWwPDwYlt_UQ?pane=file-info"
    },
    {
      title: "15 IPK1 (T32E3WG, T52E3WG, T74E4WG)",
      description: "Драйвера для моделей серии IPK1",
      icon: Download,
      fileName: "IPK1_drivers.zip",
      fileSize: "~42 MB",
      downloadUrl: "https://disk.yandex.com/d/pPtpyEGQnC51dQ"
    }
  ];

  const displayDescriptionParagraphs = [
    "Легкий и удобный в переноске H-book оснащён 15,6-дюймовым дисплеем стандарта FHD с широким углом обзора, позволяющим демонстрировать изображение сразу нескольким людям - без искажений и потери качества.",
    "H-book поддерживает работу в беспроводных сетях 5 поколения (AC) и идеально подходит для просмотра потокового видео, а IPS матрица радует пользователей отличным качеством изображения.",
    "Благодаря узким рамкам H-book зрительно увеличивается площадь экрана - как будто вы приобрели ноутбук с большей диагональю дисплея.",
    "Простой в использовании и подключении к другим устройствам H-book оснащён веб-камерой стандарта HD (720p) с чётким и качественным изображением, и микрофоном с интеллектуальной системой шумоподавления. Полнофункциональный порт USB Type-C для подключения других устройств."
  ];

  return (
    <div className="min-h-screen bg-black">
      <PageHero
        title="Ноутбуки H-Book"
        subtitle="Мобильные решения с производительностью рабочей станции"
        description="Белорусские ноутбуки с идеальным сочетанием мобильности, производительности и доступной цены для профессиональной работы в любом месте"
        backgroundVariant="default"
      />

      {/* Секция с обзором продукта */}
      <ImageContentSection
        title='Производство ОАО "МПОВТ"'
        description='Ноутбуки производства ОАО "МПОВТ" изготавливаются под брендом "H", с возможностью производства под сторонними брендами'
        features={["Приемлемые цены", "Качественное производство", "Индивидуальный брендинг", "Белорусский производитель"]}
        imageSrc="/imgs/laptops/p1.png"
        imageAlt="H-Book Ноутбук"
        variant="primary"
        imagePosition="right"
        glowColors="from-emerald-500/20 to-teal-500/20"
        animationDelay={0}
      />

      {/* Секция с производительностью */}
      <ImageContentSection
        title="Производительность рабочей станции"
        description="Мобильные процессоры Intel Core обладают производительностью уровня полноценной рабочей станции, обеспечивая эффективную работу в любом месте"
        features={["До 8 часов работы", "Процессоры Intel Core", "Мобильность", "Высокая производительность"]}
        imageSrc="/imgs/laptops/p2.png"
        imageAlt="H-Book Performance"
        variant="secondary"
        imagePosition="left"
        glowColors="from-teal-500/20 to-cyan-500/20"
        animationDelay={200}
        className="bg-gradient-to-b from-black to-slate-900/50"
      />

      {/* Видео секция */}
      <VideoSection
        title=""
        description=""
        videoSrc="/videos/h-book.mp4"
        posterSrc="/placeholder.svg"
        gradientColors="from-cyan-400 to-blue-400"
      />

      {/* Секция с описанием дисплея */}
      <DescriptionSection
        title="Дисплей и возможности"
        paragraphs={displayDescriptionParagraphs}
        gradientColors="from-cyan-400 to-blue-400"
      />

      {/* Specifications Section */}
      <section id="specifications" className="py-16 md:py-20 px-4 bg-gradient-to-b from-slate-900/50 to-black relative">
        <div className="container mx-auto">
          <SectionHeader
            title="Технические характеристики"
            description="Передовые технологии для максимальной производительности"
            gradientColors="from-emerald-400 to-teal-400"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto justify-center items-stretch place-items-center">
            {specifications.map((spec, index) => (
              <IconCard
                key={index}
                icon={spec.icon}
                title={spec.title}
                description={spec.description}
                color={spec.color}
                variant="quality"
                animationDelay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 md:py-20 px-4 relative">
        <div className="container mx-auto">
          <SectionHeader
            title="Ключевые особенности"
            description="Преимущества, которые делают H-Book идеальным выбором"
            gradientColors="from-teal-400 to-cyan-400"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                variant="primary"
                animationDelay={index * 150}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <DownloadsSection
        title="Загрузки"
        description="Драйвера для различных моделей H-Book"
        downloads={downloads}
        variant="primary"
        gradientColors="from-cyan-400 to-blue-400"
      />

      {/* CTA Section */}
      <CTASection
        title="Заинтересованы в H-Book?"
        description="Получите подробную информацию о наших ноутбуках и условиях поставки"
        primaryButtonText="Связаться с нами"
        primaryButtonLink="/contact"
        secondaryButtonText="Другие продукты"
        secondaryButtonLink="/products"
        gradientColors={{ primary: "from-emerald-400 to-teal-400", secondary: "from-emerald-400 to-teal-400" }}
      />

      <Footer />
    </div>
  );
};

export default Notebooks;

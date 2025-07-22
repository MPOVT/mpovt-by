import React from "react";
import Footer from "@/components/Footer";
import { PageHero, SectionHeader, IconCard, CTASection, FeatureCard, DownloadsSection, ProductOverview } from "@/components/common";
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
  const specifications = [
    {
      icon: Cpu,
      title: "Процессор",
      description: "Intel Core от 13-го поколения",
      color: { icon: "text-blue-400", bg: "bg-blue-500/20" }
    },
    {
      icon: Monitor,
      title: "Дисплей",
      description: "15,6\" FHD IPS с широким углом обзора",
      color: { icon: "text-green-400", bg: "bg-green-500/20" }
    },
    {
      icon: Battery,
      title: "Автономность",
      description: "До 12 часов работы от батареи",
      color: { icon: "text-yellow-400", bg: "bg-yellow-500/20" }
    },
    {
      icon: Wifi,
      title: "Беспроводная связь",
      description: "Wi-Fi 6 поколения (AX)",
      color: { icon: "text-purple-400", bg: "bg-purple-500/20" }
    },
    {
      icon: Camera,
      title: "Веб-камера",
      description: "HD 720p с качественным изображением",
      color: { icon: "text-pink-400", bg: "bg-pink-500/20" }
    },
    {
      icon: Mic,
      title: "Микрофон",
      description: "Интеллектуальная система шумоподавления",
      color: { icon: "text-indigo-400", bg: "bg-indigo-500/20" }
    },
    {
      icon: Usb,
      title: "Подключение",
      description: "Полнофункциональный порт USB Type-C",
      color: { icon: "text-teal-400", bg: "bg-teal-500/20" }
    },
    {
      icon: Eye,
      title: "Дизайн",
      description: "Узкие рамки для увеличения площади экрана",
      color: { icon: "text-orange-400", bg: "bg-orange-500/20" }
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

  return (
    <div className="min-h-screen bg-black">
      <PageHero
        title="Ноутбуки H-Book"
        description="Мобильные решения с производительностью рабочей станции"
        backgroundVariant="default"
      />

      {/* Product Overview */}
      <section className="py-16 md:py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <ProductOverview
                title='Производство ОАО "МПОВТ"'
                description='Ноутбуки производства ОАО "МПОВТ" изготавливаются под брендом "H", имеется возможность изготовления под сторонними брендами.'
                features={["Приемлемые цены", "Качественное производство", "Индивидуальный брендинг", "Белорусский производитель"]}
                variant="primary"
                animationDelay={0}
              />
            </div>
            <div className="relative animate-fade-in-right">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-3xl"></div>
              <img 
                src="/imgs/laptops/p1.png" 
                alt="H-Book Ноутбук" 
                className="relative rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="px-4 bg-gradient-to-b from-black to-slate-900/50 relative">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative animate-fade-in-left">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
              <img 
                src="/imgs/laptops/p2.png" 
                alt="H-Book Performance" 
                className="relative rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="order-1 lg:order-2 animate-fade-in-right">
              <ProductOverview
                title="Производительность рабочей станции"
                description="Мобильные процессоры Intel Core обладают производительностью уровня полноценной рабочей станции, обеспечивая эффективную работу в любом месте."
                features={["До 8 часов работы", "Процессоры Intel Core", "Мобильность", "Высокая производительность"]}
                variant="secondary"
                animationDelay={200}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Presentation Section */}
      <section id="video" className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-slate-900/50 relative">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              H-Book в действии
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Посмотрите видеопрезентацию наших ноутбуков и убедитесь в их возможностях
            </p>
          </div>

          <div className="max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-2xl"></div>
              <video 
                className="w-full h-auto rounded-2xl relative z-10"
                controls
                autoPlay
                muted
                loop
                preload="auto"
                poster="/placeholder.svg"
              >
                <source src="/videos/h-book.mp4" type="video/mp4" />
                Ваш браузер не поддерживает воспроизведение видео.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Display & Features Section */}
      <section className="py-16 md:py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Дисплей и возможности
            </h2>
            <div className="text-slate-300 leading-relaxed space-y-4">
              <p>
                Легкий и удобный в переноске H-book оснащён 15,6-дюймовым дисплеем стандарта FHD с широким углом обзора, позволяющим демонстрировать изображение сразу нескольким людям - без искажений и потери качества.
              </p>
              <p>
                H-book поддерживает работу в беспроводных сетях 5 поколения (AC) и идеально подходит для просмотра потокового видео, а IPS матрица радует пользователей отличным качеством изображения.
              </p>
              <p>
                Благодаря узким рамкам H-book зрительно увеличивается площадь экрана - как будто вы приобрели ноутбук с большей диагональю дисплея.
              </p>
              <p>
                Простой в использовании и подключении к другим устройствам H-book оснащён веб-камерой стандарта HD (720p) с чётким и качественным изображением, и микрофоном с интеллектуальной системой шумоподавления. Полнофункциональный порт USB Type-C для подключения других устройств.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section id="specifications" className="py-16 md:py-20 px-4 bg-gradient-to-b from-slate-900/50 to-black relative">
        <div className="container mx-auto">
          <SectionHeader
            title="Технические характеристики"
            description="Передовые технологии для максимальной производительности"
            gradientColors="from-emerald-400 to-teal-400"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { 
  ArrowRight,
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
      color: "text-blue-400"
    },
    {
      icon: Monitor,
      title: "Дисплей",
      description: "15,6\" FHD IPS с широким углом обзора",
      color: "text-green-400"
    },
    {
      icon: Battery,
      title: "Автономность",
      description: "До 12 часов работы от батареи",
      color: "text-yellow-400"
    },
    {
      icon: Wifi,
      title: "Беспроводная связь",
      description: "Wi-Fi 5 поколения (AC)",
      color: "text-purple-400"
    },
    {
      icon: Camera,
      title: "Веб-камера",
      description: "HD 720p с качественным изображением",
      color: "text-pink-400"
    },
    {
      icon: Mic,
      title: "Микрофон",
      description: "Интеллектуальная система шумоподавления",
      color: "text-indigo-400"
    },
    {
      icon: Usb,
      title: "Подключение",
      description: "Полнофункциональный порт USB Type-C",
      color: "text-teal-400"
    },
    {
      icon: Eye,
      title: "Дизайн",
      description: "Узкие рамки для увеличения площади экрана",
      color: "text-orange-400"
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
      name: "15 MAK4 (T32E3W, T52E4W, T74E4W)",
      url: "https://disk.yandex.ru/d/No7uvNYqKiqs4w",
      description: "Драйвера для моделей серии MAK4"
    },
    {
      name: "14 MAK1 (TC2E3W)",
      url: "https://disk.yandex.ru/d/deUWwPDwYlt_UQ?pane=file-info",
      description: "Драйвера для модели MAK1"
    },
    {
      name: "15 IPK1 (T32E3WG, T52E3WG, T74E4WG)",
      url: "https://disk.yandex.com/d/pPtpyEGQnC51dQ",
      description: "Драйвера для моделей серии IPK1"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-20 px-4 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-128 md:h-128 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Ноутбуки H-Book
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Мобильные решения с производительностью рабочей станции
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg">
                <a href="#specifications" className="flex items-center">
                  Характеристики
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-emerald-400/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300">
                <a href="#downloads" className="flex items-center">
                  Загрузки
                  <Download className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-16 md:py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Производство ОАО "МПОВТ"
              </h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Ноутбуки производства ОАО "МПОВТ" изготавливаются под брендом "H", имеется возможность изготовления под сторонними брендами.
                </p>
                <p>
                  Данный продукт будет доступен любому пользователю по приемлимым ценам, что делает его особенно привлекательным на фоне других конкурентов.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-3xl"></div>
              <img 
                src="../public/imgs/laptops/p1.png" 
                alt="H-Book Ноутбук" 
                className="relative rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-slate-900/50 relative">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
              <img 
                src="../public/imgs/laptops/p2.png" 
                alt="H-Book Performance" 
                className="relative rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Производительность рабочей станции
              </h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Мобильные процессоры Intel Core обладают производительностью уровня полноценной рабочей станции, обеспечивая эффективную работу в любом месте, куда бы вы ни отправились.
                </p>
                <p>
                  Даже вдали от офиса благодаря H-book вам будут доступны в любом месте все необходимые для эффективной работы компоненты, а заряда батареи хватит до 8 часов работы.
                </p>
                <p>
                  Этот мобильный ПК поддерживает все функциональные возможности, доступные в корпоративной офисной среде или на полноценном рабочем месте, и при этом достаточно компактен и легок для того, чтобы вы могли повсюду носить его с собой.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Presentation Section */}
      <section id="video" className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-slate-900/50 relative">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              H-Book в действии
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Посмотрите видеопрезентацию наших ноутбуков и убедитесь в их возможностях
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
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
          <div className="max-w-4xl mx-auto text-center mb-12">
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Технические характеристики
            </h2>
            <p className="text-slate-300 text-lg">
              Передовые технологии для максимальной производительности
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specifications.map((spec, index) => (
              <Card key={index} className="p-6 bg-slate-800/20 backdrop-blur-sm border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center text-center">
                  <div className={`p-3 rounded-full bg-slate-800/40 mb-4`}>
                    <spec.icon className={`w-8 h-8 ${spec.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{spec.title}</h3>
                  <p className="text-slate-300 text-sm">{spec.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 md:py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Ключевые особенности
            </h2>
            <p className="text-slate-300 text-lg">
              Преимущества, которые делают H-Book идеальным выбором
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 bg-slate-800/10 backdrop-blur-sm border-slate-700/20 hover:border-slate-600/40 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                    <p className="text-slate-300">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section id="downloads" className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-slate-900/50 relative">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Загрузки
            </h2>
            <p className="text-slate-300 text-lg">
              Драйвера для различных моделей H-Book
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloads.map((download, index) => (
              <Card key={index} className="p-6 bg-slate-800/20 backdrop-blur-sm border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 inline-flex mb-4">
                    <Download className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{download.name}</h3>
                  <p className="text-slate-300 text-sm mb-4">{download.description}</p>
                  <Button 
                    asChild 
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                  >
                    <a href={download.url} target="_blank" rel="noopener noreferrer">
                      Скачать
                      <Download className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 relative">
        <div className="container mx-auto text-center">
          <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-500">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-white">
              Заинтересованы в H-Book?
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-6 md:mb-8 max-w-2xl mx-auto">
              Получите подробную информацию о наших ноутбуках и условиях поставки
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button asChild size="lg" className="text-sm md:text-base bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transition-all duration-500 shadow-lg">
                <Link to="/contact">
                  Связаться с нами
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-emerald-400/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-sm md:text-base transition-all duration-500">
                <Link to="/products">
                  <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent font-semibold">
                    Другие продукты
                  </span>
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Notebooks;

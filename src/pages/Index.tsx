
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Factory, 
  Settings, 
  Shield, 
  Award,
  ArrowRight,
  Laptop,
  Car,
  Radio,
  FileText,
  Users,
  TrendingUp,
  Globe,
  CheckCircle,
  Monitor,
  Tablet,
  HardDrive,
  Star,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Sparkles,
  Zap,
  Cpu,
  Battery,
  Wifi,
  Shield as ShieldIcon,
  Layers,
  Mouse,
  ChevronDown
} from "lucide-react";

const Index = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [mutedVideos, setMutedVideos] = useState<{ [key: number]: boolean }>({});
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      icon: Factory,
      title: "Современное производство",
      description: "Высокотехнологичное оборудование и автоматизация обеспечивают качество мирового уровня.",
      fullDescription: "Наше предприятие оснащено современным высокотехнологичным оборудованием и автоматизированными линиями. Постоянные инвестиции в модернизацию позволяют выпускать продукцию мирового уровня.",
      backgroundImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      colorScheme: {
        primary: "text-blue-600 dark:text-blue-400",
        background: "bg-blue-100/50 dark:bg-blue-900/30",
        activeBackground: "bg-blue-500/20 dark:bg-blue-600/30",
        activeBorder: "border-blue-500/50",
        iconActive: "bg-blue-500/60 text-white",
        iconInactive: "bg-blue-500/20 text-blue-600 dark:text-blue-400",
        gradientColor: "blue-500/30"
      }
    },
    {
      icon: Settings,
      title: "Инновационные технологии",
      description: "Постоянное внедрение передовых технологий и инновационных решений в производственные процессы.",
      fullDescription: "Мы активно внедряем самые передовые технологии и разрабатываем инновационные решения для совершенствования наших производственных процессов. Наша команда инженеров постоянно работает над созданием новых методов производства и улучшением существующих технологий.",
      backgroundImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      colorScheme: {
        primary: "text-emerald-600 dark:text-emerald-400",
        background: "bg-emerald-100/50 dark:bg-emerald-900/30",
        activeBackground: "bg-emerald-500/20 dark:bg-emerald-600/30",
        activeBorder: "border-emerald-500/50",
        iconActive: "bg-emerald-500/60 text-white",
        iconInactive: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
        gradientColor: "emerald-500/30"
      }
    },
    {
      icon: Shield,
      title: "Система качества",
      description: "Сертифицированная система менеджмента качества ISO 9001 гарантирует соответствие международным стандартам.",
      fullDescription: "Наша система менеджмента качества сертифицирована по стандарту ISO 9001, что гарантирует высочайший уровень качества всей выпускаемой продукции. Мы строго следим за соблюдением всех технологических процессов и постоянно совершенствуем систему контроля качества.",
      backgroundImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a35?w=800&h=600&fit=crop",
      colorScheme: {
        primary: "text-purple-600 dark:text-purple-400",
        background: "bg-purple-100/50 dark:bg-purple-900/30",
        activeBackground: "bg-purple-500/20 dark:bg-purple-600/30",
        activeBorder: "border-purple-500/50",
        iconActive: "bg-purple-500/60 text-white",
        iconInactive: "bg-purple-500/20 text-purple-600 dark:text-purple-400",
        gradientColor: "purple-500/30"
      }
    },
    {
      icon: Award,
      title: "Опыт и надежность",
      description: "Более 65 лет опыта в разработке и производстве электронных компонентов и систем.",
      fullDescription: "За более чем 65 лет работы мы накопили огромный опыт в области разработки и производства электронных компонентов и систем. Этот богатый опыт, передаваемый из поколения в поколение, является нашим главным конкурентным преимуществом и гарантией надежности для наших клиентов.",
      backgroundImage: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop",
      colorScheme: {
        primary: "text-amber-600 dark:text-amber-400",
        background: "bg-amber-100/50 dark:bg-amber-900/30",
        activeBackground: "bg-amber-500/20 dark:bg-amber-600/30",
        activeBorder: "border-amber-500/50",
        iconActive: "bg-amber-500/60 text-white",
        iconInactive: "bg-amber-500/20 text-amber-600 dark:text-amber-400",
        gradientColor: "amber-500/30"
      }
    }
  ];

  const priorityProducts = [
    {
      title: "ПК",
      subtitle: "H-PC",
      description: "Высокопроизводительные потребительские компьютеры для критически важных задач в экстремальных условиях",
      fullDescription: "Наши потребительские ПК H-PC созданы для работы в самых суровых условиях. Защищенные корпуса IP65, расширенный температурный диапазон от -40°C до +85°C, антивибрационная защита и модульная архитектура обеспечивают надежность в любых применениях.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop",
      link: "/products/h-pc",
      gradient: "from-blue-600 via-blue-500 to-cyan-400",
      bgGradient: "from-blue-500/20 via-cyan-400/20 to-blue-600/20",
      badge: "Флагманская серия",
      features: ["IP65 защита", "Температура -40°C до +85°C", "Модульная архитектура", "Потребительские интерфейсы"],
      featureIcon: Cpu,
      uniqueFeatures: [
        { icon: ShieldIcon, text: "IP65 защита", color: "text-cyan-400" },
        { icon: Cpu, text: "Температура -40°C до +85°C", color: "text-blue-400" },
        { icon: Layers, text: "Модульная архитектура", color: "text-indigo-400" },
        { icon: Settings, text: "Потребительские интерфейсы", color: "text-purple-400" }
      ]
    },
    {
      title: "Ноутбуки",
      subtitle: "H-Book",
      description: "Мобильные защищенные решения для полевых условий и критических миссий",
      fullDescription: "H-Book - это революция в мобильных потребительских решениях. Ударопрочный магниевый корпус, водонепроницаемость, 20-часовая автономность и возможность горячей замены батарей делают их незаменимыми для полевых работ.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&h=800&fit=crop",
      link: "/products/h-book",
      gradient: "from-emerald-600 via-emerald-500 to-teal-400",
      bgGradient: "from-emerald-500/20 via-teal-400/20 to-emerald-600/20",
      badge: "Мобильные решения",
      features: ["Ударопрочный корпус", "20ч автономность", "Водонепроницаемость", "Горячая замена батарей"],
      featureIcon: Laptop,
      uniqueFeatures: [
        { icon: ShieldIcon, text: "Ударопрочный корпус", color: "text-emerald-400" },
        { icon: Battery, text: "20ч автономность", color: "text-green-400" },
        { icon: ShieldIcon, text: "Водонепроницаемость", color: "text-teal-400" },
        { icon: Battery, text: "Горячая замена батарей", color: "text-cyan-400" }
      ]
    },
    {
      title: "Мониторы",
      subtitle: "H",
      description: "Профессиональные дисплеи повышенной надежности для потребительского мониторинга",
      fullDescription: "Наши потребительские мониторы H обеспечивают кристально четкое изображение в любых условиях освещения. Антибликовые покрытия, сенсорные технологии и широкие углы обзора гарантируют комфортную работу операторов.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=crop",
      link: "/products/h-monitors",
      gradient: "from-purple-600 via-purple-500 to-pink-400",
      bgGradient: "from-purple-500/20 via-pink-400/20 to-purple-600/20",
      badge: "Премиум дисплеи",
      features: ["Антибликовые покрытия", "Сенсорные технологии", "Широкие углы обзора", "Высокая яркость"],
      featureIcon: Monitor,
      uniqueFeatures: [
        { icon: Monitor, text: "Антибликовые покрытия", color: "text-purple-400" },
        { icon: Monitor, text: "Сенсорные технологии", color: "text-pink-400" },
        { icon: Monitor, text: "Широкие углы обзора", color: "text-violet-400" },
        { icon: Monitor, text: "Высокая яркость", color: "text-fuchsia-400" }
      ]
    },
    {
      title: "Планшеты",
      subtitle: "H-Tab",
      description: "Компактные мобильные решения для управления производством и мониторинга",
      fullDescription: "H-Tab планшеты сочетают мобильность и функциональность. Защита IP67, беспроводная связь, емкостные экраны и возможность работы в перчатках делают их идеальными для потребительского применения.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=1200&h=800&fit=crop",
      link: "/products/h-tab",
      gradient: "from-orange-600 via-orange-500 to-yellow-400",
      bgGradient: "from-orange-500/20 via-yellow-400/20 to-orange-600/20",
      badge: "Мобильный контроль",
      features: ["Защита IP67", "Работа в перчатках", "Беспроводная связь", "Емкостные экраны"],
      featureIcon: Tablet,
      uniqueFeatures: [
        { icon: ShieldIcon, text: "Защита IP67", color: "text-orange-400" },
        { icon: Settings, text: "Работа в перчатках", color: "text-yellow-400" },
        { icon: Wifi, text: "Беспроводная связь", color: "text-amber-400" },
        { icon: Tablet, text: "Емкостные экраны", color: "text-orange-300" }
      ]
    },
    {
      title: "Накопители",
      subtitle: "H-Storage",
      description: "Высокоскоростные твердотельные накопители для потребительских применений",
      fullDescription: "H-Storage M2.SSD накопители обеспечивают максимальную производительность и надежность. NVMe интерфейс, расширенный температурный диапазон и высокая износостойкость гарантируют долговечную работу в потребительских условиях.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop",
      link: "/products/h-storage",
      gradient: "from-red-600 via-red-500 to-orange-400",
      bgGradient: "from-red-500/20 via-orange-400/20 to-red-600/20",
      badge: "Высокие технологии",
      features: ["NVMe интерфейс", "Расширенный диапазон температур", "Высокая износостойкость", "Потребительская надежность"],
      featureIcon: HardDrive,
      uniqueFeatures: [
        { icon: HardDrive, text: "NVMe интерфейс", color: "text-red-400" },
        { icon: Settings, text: "Расширенный диапазон температур", color: "text-orange-400" },
        { icon: ShieldIcon, text: "Высокая износостойкость", color: "text-red-300" },
        { icon: Award, text: "Потребительская надежность", color: "text-orange-300" }
      ]
    }
  ];

  const secondaryProducts = [
    {
      title: "Автокомпоненты",
      description: "Электронные блоки управления для автомобильной промышленности",
      icon: Car,
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop",
      link: "/products/car-blocks"
    },
    {
      title: "Средства связи",
      description: "Системы связи и телекоммуникационное оборудование",
      icon: Radio,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      link: "/products/special-communication"
    },
    {
      title: "Информационные системы",
      description: "Комплексные IT-решения для бизнеса",
      icon: FileText,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      link: "/products/information-systems"
    }
  ];

  const achievements = [
    {
      number: "65+",
      label: "лет опыта",
      description: "Богатая история с 1956 года"
    },
    {
      number: "500+",
      label: "сотрудников",
      description: "Квалифицированная команда"
    },
    {
      number: "50+",
      label: "стран",
      description: "География поставок"
    },
    {
      number: "ISO 9001",
      label: "сертификация",
      description: "Международные стандарты"
    }
  ];

  const partners = [
    { name: "Партнер 1", logo: "/placeholder.svg" },
    { name: "Партнер 2", logo: "/placeholder.svg" },
    { name: "Партнер 3", logo: "/placeholder.svg" },
    { name: "Партнер 4", logo: "/placeholder.svg" },
    { name: "Партнер 5", logo: "/placeholder.svg" },
    { name: "Партнер 6", logo: "/placeholder.svg" },
  ];

  const toggleVideo = (index: number) => {
    setPlayingVideo(playingVideo === index ? null : index);
  };

  const toggleMute = (index: number) => {
    setMutedVideos(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="min-h-screen">
      {/* <Navigation /> */}
      
      {/* Hero Section - with existing animated background */}
      <section className="pt-40 md:pt-44 lg:pt-48 pb-12 md:pb-16 lg:pb-20 px-4 text-center relative overflow-hidden bg-black">
        {/* Enhanced smooth animated background extending to next section */}
        <div className="absolute inset-0 overflow-hidden" style={{ height: '200%' }}>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl opacity-0 animate-pulse" style={{ animationDuration: '8s', animationFillMode: 'forwards', animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/6 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl opacity-0 animate-pulse" style={{ animationDelay: '3s', animationDuration: '10s', animationFillMode: 'forwards' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-128 md:h-128 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-full blur-3xl opacity-0 animate-pulse" style={{ animationDelay: '2s', animationDuration: '12s', animationFillMode: 'forwards' }}></div>
          <div className="absolute top-3/4 left-1/3 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 rounded-full blur-3xl opacity-0 animate-pulse" style={{ animationDelay: '4s', animationDuration: '9s', animationFillMode: 'forwards' }}></div>
          <div className="absolute bottom-1/6 right-1/3 w-56 h-56 md:w-112 md:h-112 bg-gradient-to-r from-red-500/30 to-rose-500/30 rounded-full blur-3xl opacity-0 animate-pulse" style={{ animationDelay: '5s', animationDuration: '11s', animationFillMode: 'forwards' }}></div>
          <div className="absolute bottom-0 left-1/4 w-72 h-72 md:w-144 md:h-144 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-full blur-3xl opacity-0 animate-pulse" style={{ animationDelay: '6s', animationDuration: '14s', animationFillMode: 'forwards' }}></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="mb-8 md:mb-12 flex justify-center">
              <img 
                src="/lovable-uploads/70fca613-4992-4ede-98c2-f9c7e669d23e.png" 
                alt="ОАО МПОВТ Logo" 
                className="h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56 w-auto opacity-95 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <p className="text-lg md:text-xl xl:text-2xl text-white/50 mb-6 md:mb-8" style={{ animationDelay: '200ms' }}>
              Ведущий производитель электронных компонентов и автокомпонентов с 1956 года
            </p>
            
            {/* Animated mouse scroll indicator */}
            <div className="flex flex-col items-center mt-12 md:mt-16" style={{ animationDelay: '600ms' }}>
              <div className="animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
                </div>
              </div>
              <p className="text-white/40 text-sm mt-3 animate-pulse">Прокрутите вниз</p>
              <ChevronDown className="w-5 h-5 text-white/30 mt-2 animate-bounce" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Priority Products Section - Updated with animated background spheres ending in black */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-black via-slate-900/50 to-black relative overflow-hidden shadow-2xl">        
        {/* Animated background spheres with cyan/purple/emerald colors */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s', animationDuration: '10s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-128 md:h-128 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '12s' }}></div>
          <div className="absolute top-3/4 left-1/3 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s', animationDuration: '9s' }}></div>
          <div className="absolute bottom-1/6 right-1/3 w-56 h-56 md:w-112 md:h-112 bg-gradient-to-r from-purple-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '5s', animationDuration: '11s' }}></div>
        </div>
        
        {/* Enhanced bottom shadow separator */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent via-black/60 to-black shadow-2xl"></div>

        <div className="relative z-10">
          <div className="text-center mb-12 md:mb-16 px-4">
            <div className="mb-8">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                Флагманская продукция
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Революционные решения потребительской вычислительной техники нового поколения
            </p>
          </div>

          {/* Full-width cards with glassmorphism */}
          <div className="space-y-8">
            {priorityProducts.map((product, index) => {
              const isHovered = hoveredCard === index;
              
              return (
                <div 
                  key={index} 
                  className="w-full animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <Card className="group overflow-hidden bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-700 mx-4 hover:shadow-2xl hover:shadow-slate-900/50">
                    <div className="grid lg:grid-cols-2 gap-0 min-h-[60vh] max-h-[600px]">
                      {/* Video/Image Section */}
                      <div 
                        className="relative overflow-hidden bg-slate-900"
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <video
                          src={product.videoUrl}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          autoPlay
                          loop
                          muted
                          playsInline
                        />

                        {/* Description overlay on hover */}
                        <div className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-all duration-700 flex items-center justify-center p-6 ${
                          isHovered ? 'opacity-100' : 'opacity-0'
                        }`}>
                          <div className="text-center text-white max-w-md bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                            <p className="text-lg leading-relaxed mb-4">
                              {product.description}
                            </p>
                            <div className={`inline-block relative bg-gradient-to-r ${product.gradient} text-white text-sm px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-2xl`}>
                              <Sparkles className="w-4 h-4 animate-pulse" />
                              <span>{product.badge}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Content Section - increased transparency */}
                      <div className="p-6 lg:p-8 flex flex-col justify-center bg-gradient-to-br from-slate-800/5 to-slate-900/5 backdrop-blur-lg">
                        
                        {/* Product title */}
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 drop-shadow-lg">
                          {product.title}
                        </h3>

                        {/* Full Description */}
                        <p className="text-slate-300 leading-relaxed mb-6 text-sm lg:text-base">
                          {product.fullDescription}
                        </p>
                        
                        {/* Enhanced Features with unique styling for each card */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                          {product.uniqueFeatures.map((feature, featureIndex) => {
                            const FeatureIcon = feature.icon;
                            return (
                              <div key={featureIndex} className="group/feature flex items-center gap-3 p-3 rounded-lg transition-all duration-300 cursor-pointer">
                                <div className="relative">
                                  <FeatureIcon className={`w-5 h-5 ${feature.color} flex-shrink-0 relative z-10 drop-shadow-lg transform group-hover/feature:rotate-12 group-hover/feature:scale-125 transition-all duration-500`} />
                                </div>
                                <span className="text-slate-300 text-xs lg:text-sm group-hover/feature:text-white group-hover/feature:translate-x-2 transition-all duration-500">{feature.text}</span>
                              </div>
                            );
                          })}
                        </div>
                        
                        {/* Enhanced Non-colored Button */}
                        <Button 
                          asChild
                          className="group/btn relative w-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 backdrop-blur-sm text-white transition-all duration-500 text-base lg:text-lg py-6 overflow-hidden transform hover:scale-105"
                        >
                          <Link to={product.link}>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                            <span className="relative z-10 flex items-center justify-center">
                              Подробнее о продукте
                              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-2 duration-300 drop-shadow-lg" />
                            </span>
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section - Updated with moving gradient animation and smooth background transition */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-black relative transition-all duration-1000 ease-in-out">
        {/* Moving animated background spheres with blue/cyan colors */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse moving-sphere-1" 
               style={{ 
                 animationDuration: '8s', 
                 left: '25%', 
                 top: '25%',
                 transform: 'translateX(-50%) translateY(-50%)'
               }}></div>
          <div className="absolute w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse moving-sphere-2" 
               style={{ 
                 animationDelay: '3s', 
                 animationDuration: '10s',
                 right: '25%',
                 bottom: '33%',
                 transform: 'translateX(50%) translateY(50%)'
               }}></div>
          <div className="absolute w-64 h-64 md:w-128 md:h-128 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse moving-sphere-3" 
               style={{ 
                 animationDelay: '2s', 
                 animationDuration: '12s',
                 left: '50%',
                 top: '50%',
                 transform: 'translateX(-50%) translateY(-50%)'
               }}></div>
        </div>
        
        {/* Smooth gradient background that changes based on active feature with transition */}
        <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
          <div className={`absolute inset-0 bg-gradient-to-b from-black via-black/95 transition-all duration-1000 ease-in-out ${
            activeFeature === 0 ? 'to-blue-900/20' :
            activeFeature === 1 ? 'to-emerald-900/20' :
            activeFeature === 2 ? 'to-purple-900/20' :
            'to-amber-900/20'
          }`}></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 lg:mb-6 bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
              Инновационные решения для промышленности
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mt-4 md:mt-6">
              Современные технологии и многолетний опыт позволяют нам создавать продукцию высочайшего качества
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
            {/* Feature Icons */}
            <div className="space-y-2 md:space-y-3 lg:space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const colors = feature.colorScheme;
                return (
                  <Card
                    key={index}
                    className={cn(
                      "p-3 sm:p-4 md:p-6 cursor-pointer transition-all duration-700 ease-in-out hover:shadow-xl glass-card bg-slate-900/20 border-slate-700/30",
                      activeFeature === index 
                        ? `${colors.activeBorder} ${colors.activeBackground} shadow-2xl scale-105 bg-slate-800/40 border-opacity-100` 
                        : 'hover:scale-102 hover:bg-slate-800/30'
                    )}
                    onClick={() => setActiveFeature(index)}
                  >
                    <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                      <div className={cn(
                        "p-1.5 sm:p-2 md:p-3 rounded-xl transition-all duration-700 flex-shrink-0",
                        activeFeature === index 
                          ? `${colors.iconActive} shadow-lg` 
                          : colors.iconInactive
                      )}>
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className={cn(
                          "text-sm sm:text-base md:text-lg font-semibold transition-all duration-700 mb-1 sm:mb-2",
                          activeFeature === index ? `${colors.primary} font-bold sm:text-lg md:text-xl` : 'text-slate-300'
                        )}>
                          {feature.title}
                        </h3>
                        <p className={cn(
                          "text-xs sm:text-sm leading-relaxed transition-all duration-700",
                          activeFeature === index ? "text-white" : "text-slate-400"
                        )}>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Feature Content with crossfade transition */}
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden glass-card">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={cn(
                    "absolute inset-0 transition-all duration-1000 ease-in-out",
                    activeFeature === index ? "opacity-100 z-10" : "opacity-0 z-0"
                  )}
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${feature.backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className={cn(
                    "absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out p-4 sm:p-6 md:p-8",
                    activeFeature === index ? "opacity-100 translate-y-0 backdrop-blur-sm" : "opacity-0 translate-y-4 backdrop-blur-none"
                  )}>
                    <div className="text-center text-white max-w-full">
                      <div className={cn(
                        "w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 backdrop-blur-sm transition-all duration-1000",
                        activeFeature === index ? "scale-100 rotate-0" : "scale-75 rotate-12"
                      )}>
                        {React.createElement(feature.icon, { 
                          className: cn(
                            "text-white transition-all duration-1000",
                            "h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12"
                          )
                        })}
                      </div>
                      <h3 className={cn(
                        "text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 transition-all duration-1000",
                        activeFeature === index ? "translate-y-0 opacity-100" : "translate-y-2 opacity-75"
                      )}>
                        {feature.title}
                      </h3>
                      <p className={cn(
                        "text-white/90 leading-relaxed text-xs sm:text-sm md:text-base transition-all duration-1000 delay-100",
                        activeFeature === index ? "translate-y-0 opacity-100" : "translate-y-2 opacity-75"
                      )}>
                        {feature.fullDescription}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Products Section - Updated with improved 3D card effects */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-black relative">
        {/* Moving animated background spheres with emerald/teal colors */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse moving-sphere-4" 
               style={{ 
                 animationDuration: '8s', 
                 left: '25%', 
                 top: '25%'
               }}></div>
          <div className="absolute w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse moving-sphere-5" 
               style={{ 
                 animationDelay: '3s', 
                 animationDuration: '10s',
                 right: '25%',
                 bottom: '33%'
               }}></div>
          <div className="absolute w-64 h-64 md:w-128 md:h-128 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse moving-sphere-6" 
               style={{ 
                 animationDelay: '2s', 
                 animationDuration: '12s',
                 left: '50%',
                 top: '50%'
               }}></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 lg:mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Дополнительные направления
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto mt-4 md:mt-6">
              Проверенные решения для различных отраслей промышленности
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {secondaryProducts.map((product, index) => {
              const Icon = product.icon;
              return (
                <Card 
                  key={index} 
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-500 glass-card flex flex-col h-full bg-emerald-900/20 border-emerald-700/30 card-3d"
                  style={{ 
                    perspective: '1000px',
                    transformStyle: 'preserve-3d'
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 20; // Reduced rotation intensity
                    const rotateY = (centerX - x) / 20; // Fixed direction and reduced intensity
                    
                    e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
                  }}
                >
                  <div className="aspect-video bg-gradient-to-br from-emerald-100/20 to-teal-100/20 relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 text-white" />
                    </div>
                  </div>
                  <div className="p-3 sm:p-4 md:p-6 flex flex-col flex-grow">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2 group-hover:text-emerald-400 transition-colors text-white">
                      {product.title}
                    </h3>
                    <p className="text-emerald-200 mb-3 md:mb-4 text-xs sm:text-sm md:text-base flex-grow">{product.description}</p>
                    <Button 
                      asChild 
                      size="sm" 
                      className="w-full mt-auto text-xs sm:text-sm bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 backdrop-blur-sm text-white transition-all duration-300 hover:shadow-lg"
                    >
                      <Link to={product.link}>
                        Подробнее
                        <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section - Updated with moving background spheres */}
      <section className="py-16 md:py-20 px-4 bg-black relative">
        {/* Moving animated background spheres with orange/red colors */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse moving-sphere-7" 
               style={{ 
                 animationDuration: '8s', 
                 left: '25%', 
                 top: '25%'
               }}></div>
          <div className="absolute w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse moving-sphere-8" 
               style={{ 
                 animationDelay: '3s', 
                 animationDuration: '10s',
                 right: '25%',
                 bottom: '33%'
               }}></div>
          <div className="absolute w-64 h-64 md:w-128 md:h-128 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse moving-sphere-9" 
               style={{ 
                 animationDelay: '2s', 
                 animationDuration: '12s',
                 left: '50%',
                 top: '50%'
               }}></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
              Наши достижения
            </h2>
            <p className="text-lg md:text-xl text-orange-100 max-w-3xl mx-auto mt-6">
              Цифры, которые говорят о нашем успехе и надежности
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="text-center p-6 md:p-8 glass-card hover:shadow-xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-orange-900/30 to-pink-900/30 border-orange-700/30"
              >
                <div className="text-2xl md:text-4xl font-bold text-white mb-2">{achievement.number}</div>
                <div className="text-base md:text-lg font-semibold mb-2 text-red-400">{achievement.label}</div>
                <div className="text-orange-200 text-sm">{achievement.description}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners and CTA sections with unified background */}
      <div className="bg-black relative">
        {/* Unified moving animated background spheres with indigo/purple colors */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse moving-sphere-10" 
               style={{ 
                 animationDuration: '8s', 
                 left: '25%', 
                 top: '15%'
               }}></div>
          <div className="absolute w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse moving-sphere-11" 
               style={{ 
                 animationDelay: '3s', 
                 animationDuration: '10s',
                 right: '25%',
                 top: '40%'
               }}></div>
          <div className="absolute w-64 h-64 md:w-128 md:h-128 bg-gradient-to-r from-pink-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse moving-sphere-12" 
               style={{ 
                 animationDelay: '2s', 
                 animationDuration: '12s',
                 left: '50%',
                 top: '70%'
               }}></div>
          <div className="absolute w-40 h-40 md:w-80 md:h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse moving-sphere-13" 
               style={{ 
                 animationDelay: '4s', 
                 animationDuration: '9s',
                 left: '15%',
                 bottom: '20%'
               }}></div>
          <div className="absolute w-56 h-56 md:w-112 md:h-112 bg-gradient-to-r from-purple-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse moving-sphere-14" 
               style={{ 
                 animationDelay: '5s', 
                 animationDuration: '11s',
                 right: '15%',
                 bottom: '10%'
               }}></div>
        </div>

        {/* Partners Section */}
        <section className="py-16 md:py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Наши партнеры
              </h2>
              <p className="text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto mt-6">
                Мы сотрудничаем с ведущими компаниями по всему миру
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8">
              {partners.map((partner, index) => (
                <div 
                  key={index} 
                  className="bg-indigo-900/20 backdrop-blur-sm border border-indigo-700/30 rounded-xl p-4 md:p-6 flex items-center justify-center hover:bg-indigo-800/30 transition-all duration-300 hover:scale-105"
                >
                  <img src={partner.logo} alt={partner.name} className="max-w-full max-h-8 md:max-h-12 opacity-70 hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 px-4 relative z-10">
          <div className="container mx-auto text-center">
            <Card className="max-w-4xl mx-auto p-8 md:p-12 glass-card bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-slate-900/30 border-blue-700/30">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
                Готовы к сотрудничеству?
              </h2>
              <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto">
                Свяжитесь с нами для обсуждения ваших потребностей в электронных компонентах и автокомпонентах
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Button asChild size="lg" className="text-sm md:text-base bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-500 shadow-lg">
                  <Link to="/contact">
                    Связаться с нами
                    <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/30 bg-white/10 hover:bg-white/20 text-sm md:text-base transition-all duration-500">
                  <Link to="/products">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                      Каталог продукции
                    </span>
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </div>

      <Footer />
      
      <style>{`
        @keyframes moveX {
          0%, 100% { transform: translateX(-20px); }
          50% { transform: translateX(20px); }
        }
        
        @keyframes moveY {
          0%, 100% { transform: translateY(-15px); }
          50% { transform: translateY(15px); }
        }
        
        .moving-sphere-1 {
          animation: pulse 8s infinite, moveX 20s infinite alternate, moveY 25s infinite alternate-reverse;
        }
        
        .moving-sphere-2 {
          animation: pulse 10s infinite 3s, moveX 18s infinite alternate-reverse 3s, moveY 22s infinite alternate 3s;
        }
        
        .moving-sphere-3 {
          animation: pulse 12s infinite 2s, moveX 24s infinite alternate 2s, moveY 28s infinite alternate-reverse 2s;
        }
        
        .moving-sphere-4 {
          animation: pulse 8s infinite, moveX 22s infinite alternate, moveY 26s infinite alternate-reverse;
        }
        
        .moving-sphere-5 {
          animation: pulse 10s infinite 3s, moveX 20s infinite alternate-reverse 3s, moveY 24s infinite alternate 3s;
        }
        
        .moving-sphere-6 {
          animation: pulse 12s infinite 2s, moveX 26s infinite alternate 2s, moveY 30s infinite alternate-reverse 2s;
        }
        
        .moving-sphere-7 {
          animation: pulse 8s infinite, moveX 18s infinite alternate, moveY 22s infinite alternate-reverse;
        }
        
        .moving-sphere-8 {
          animation: pulse 10s infinite 3s, moveX 16s infinite alternate-reverse 3s, moveY 20s infinite alternate 3s;
        }
        
        .moving-sphere-9 {
          animation: pulse 12s infinite 2s, moveX 20s infinite alternate 2s, moveY 24s infinite alternate-reverse 2s;
        }
        
        .moving-sphere-10 {
          animation: pulse 8s infinite, moveX 24s infinite alternate, moveY 28s infinite alternate-reverse;
        }
        
        .moving-sphere-11 {
          animation: pulse 10s infinite 3s, moveX 22s infinite alternate-reverse 3s, moveY 26s infinite alternate 3s;
        }
        
        .moving-sphere-12 {
          animation: pulse 12s infinite 2s, moveX 26s infinite alternate 2s, moveY 30s infinite alternate-reverse 2s;
        }
        
        .moving-sphere-13 {
          animation: pulse 9s infinite 4s, moveX 19s infinite alternate 4s, moveY 23s infinite alternate-reverse 4s;
        }
        
        .moving-sphere-14 {
          animation: pulse 11s infinite 5s, moveX 21s infinite alternate-reverse 5s, moveY 25s infinite alternate 5s;
        }
        
        .card-3d {
          transition: transform 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}

export default Index;

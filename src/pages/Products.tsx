
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Car, 
  Tractor, 
  Truck, 
  Laptop,
  Monitor,
  Tablet,
  HardDrive,
  Radio,
  Archive,
  ArrowRight,
  Zap,
  Shield,
  Award,
  CheckCircle,
  Star,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Sparkles,
  Cpu,
  Battery,
  Wifi,
  Shield as ShieldIcon,
  Layers,
  Settings,
  ChevronDown
} from "lucide-react";

const Products = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Priority products (main focus) with video presentations
  const priorityProducts = [
    {
      title: "Промышленные ПК (H-PC)",
      description: "Высокопроизводительные промышленные компьютеры для критически важных задач",
      fullDescription: "Наши промышленные ПК H-PC созданы для работы в самых суровых условиях. Защищенные корпуса IP65, расширенный температурный диапазон от -40°C до +85°C, антивибрационная защита и модульная архитектура обеспечивают надежность в любых промышленных применениях.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop",
      path: "/products/h-pc",
      gradient: "from-blue-600 via-blue-500 to-cyan-400",
      features: ["Защищенные корпуса IP65", "Высокая вычислительная мощность", "Расширенная температурная стойкость", "Промышленные интерфейсы"],
      isPriority: true,
      badge: "Флагманская продукция",
      uniqueFeatures: [
        { icon: ShieldIcon, text: "IP65 защита", color: "text-cyan-400" },
        { icon: Cpu, text: "Температура -40°C до +85°C", color: "text-blue-400" },
        { icon: Layers, text: "Модульная архитектура", color: "text-indigo-400" },
        { icon: Settings, text: "Промышленные интерфейсы", color: "text-purple-400" }
      ]
    },
    {
      title: "Промышленные ноутбуки (H-Book)",
      description: "Мобильные защищенные решения для полевых условий и промышленного применения",
      fullDescription: "H-Book - это революция в мобильных промышленных решениях. Ударопрочный магниевый корпус, водонепроницаемость, 20-часовая автономность и возможность горячей замены батарей делают их незаменимыми для полевых работ.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&h=800&fit=crop",
      path: "/products/h-book",
      gradient: "from-emerald-600 via-emerald-500 to-teal-400",
      features: ["Ударопрочный дизайн", "Длительное время работы", "Полевая диагностика", "Военные стандарты защиты"],
      isPriority: true,
      badge: "Инновации",
      uniqueFeatures: [
        { icon: ShieldIcon, text: "Ударопрочный корпус", color: "text-emerald-400" },
        { icon: Battery, text: "20ч автономность", color: "text-green-400" },
        { icon: ShieldIcon, text: "Водонепроницаемость", color: "text-teal-400" },
        { icon: Battery, text: "Горячая замена батарей", color: "text-cyan-400" }
      ]
    },
    {
      title: "Промышленные мониторы (H)",
      description: "Профессиональные дисплеи повышенной надежности для промышленного мониторинга",
      fullDescription: "Наши промышленные мониторы H обеспечивают кристально четкое изображение в любых условиях освещения. Антибликовые покрытия, сенсорные технологии и широкие углы обзора гарантируют комфортную работу операторов.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=crop",
      path: "/products/h-monitors",
      gradient: "from-purple-600 via-purple-500 to-pink-400",
      features: ["Сенсорные технологии", "Широкие углы обзора", "Высокая яркость", "Антибликовые покрытия"],
      isPriority: true,
      badge: "Премиум качество",
      uniqueFeatures: [
        { icon: Monitor, text: "Антибликовые покрытия", color: "text-purple-400" },
        { icon: Monitor, text: "Сенсорные технологии", color: "text-pink-400" },
        { icon: Monitor, text: "Широкие углы обзора", color: "text-violet-400" },
        { icon: Monitor, text: "Высокая яркость", color: "text-fuchsia-400" }
      ]
    },
    {
      title: "Промышленные планшеты (H-Tab)",
      description: "Компактные мобильные решения для управления производством и мониторинга",
      fullDescription: "H-Tab планшеты сочетают мобильность и функциональность. Защита IP67, беспроводная связь, емкостные экраны и возможность работы в перчатках делают их идеальными для промышленного применения.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=1200&h=800&fit=crop",
      path: "/products/h-tab",
      gradient: "from-orange-600 via-orange-500 to-yellow-400",
      features: ["Защита от воды и пыли", "Емкостные экраны", "Беспроводная связь", "Горячая замена батарей"],
      isPriority: true,
      badge: "Мобильность",
      uniqueFeatures: [
        { icon: ShieldIcon, text: "Защита IP67", color: "text-orange-400" },
        { icon: Settings, text: "Работа в перчатках", color: "text-yellow-400" },
        { icon: Wifi, text: "Беспроводная связь", color: "text-amber-400" },
        { icon: Tablet, text: "Емкостные экраны", color: "text-orange-300" }
      ]
    },
    {
      title: "M2.SSD накопители (H-Storage)",
      description: "Высокоскоростные твердотельные накопители для промышленных применений",
      fullDescription: "H-Storage M2.SSD накопители обеспечивают максимальную производительность и надежность. NVMe интерфейс, расширенный температурный диапазон и высокая износостойкость гарантируют долговечную работу в промышленных условиях.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop",
      path: "/products/h-storage",
      gradient: "from-red-600 via-red-500 to-orange-400",
      features: ["NVMe интерфейс", "Расширенный температурный диапазон", "Высокая надежность", "Износостойкость"],
      isPriority: true,
      badge: "Высокие технологии",
      uniqueFeatures: [
        { icon: HardDrive, text: "NVMe интерфейс", color: "text-red-400" },
        { icon: Settings, text: "Расширенный диапазон температур", color: "text-orange-400" },
        { icon: ShieldIcon, text: "Высокая износостойкость", color: "text-red-300" },
        { icon: Award, text: "Промышленная надежность", color: "text-orange-300" }
      ]
    }
  ];

  // Secondary products
  const secondaryProducts = [
    {
      title: "Блоки для автомобилей",
      description: "Электронные блоки управления для автомобильной промышленности",
      icon: Car,
      path: "/products/car-blocks",
      color: "from-blue-500 to-cyan-500",
      features: ["ECU блоки управления", "Системы впрыска топлива", "ABS модули безопасности", "Диагностические системы"],
      isPriority: false,
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop"
    },
    {
      title: "Блоки для тракторов",
      description: "Специализированные решения для сельскохозяйственной техники",
      icon: Tractor,
      path: "/products/tractor-blocks",
      color: "from-green-500 to-emerald-500",
      features: ["Управление двигателем", "GPS-навигационные системы", "Системы автопилота", "Мониторинг параметров"],
      isPriority: false,
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop"
    },
    {
      title: "Блоки для комбайнов",
      description: "Высокотехнологичные системы автоматизации для уборочной техники",
      icon: Archive,
      path: "/products/combine-blocks",
      color: "from-yellow-500 to-orange-500",
      features: ["Мониторинг урожайности", "Автоматизация процессов", "Диагностика состояния", "Оптимизация работы"],
      isPriority: false,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop"
    },
    {
      title: "Блоки для карьерных самосвалов",
      description: "Надежные решения для экстремальных условий тяжелой промышленности",
      icon: Truck,
      path: "/products/dump-truck-blocks",
      color: "from-red-500 to-pink-500",
      features: ["Системы безопасности", "Телематические решения", "Мониторинг нагрузки", "Контроль производительности"],
      isPriority: false,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
    },
    {
      title: "Системы домофонной связи",
      description: "Современные IP-системы домофонной связи с видеонаблюдением",
      icon: Radio,
      path: "/products/intercoms",
      color: "from-teal-500 to-cyan-500",
      features: ["IP-технологии связи", "HD видеосвязь", "Мобильная интеграция", "Облачные сервисы"],
      isPriority: false,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a35?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-40 md:pt-44 lg:pt-48 pb-12 md:pb-16 lg:pb-20 px-4 text-center relative overflow-hidden bg-black">
        {/* Animated background spheres */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-full blur-3xl opacity-0 animate-pulse" style={{ animationDuration: '8s', animationFillMode: 'forwards', animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/6 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl opacity-0 animate-pulse" style={{ animationDelay: '3s', animationDuration: '10s', animationFillMode: 'forwards' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-128 md:h-128 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl opacity-0 animate-pulse" style={{ animationDelay: '2s', animationDuration: '12s', animationFillMode: 'forwards' }}></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-24 animate-fade-in-up">
            <div className="inline-block relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl scale-150"></div>
              <h1 className="relative text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                Наша продукция
              </h1>
            </div>
            <p className="text-lg md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Инновационные промышленные решения с акцентом на высокотехнологичную вычислительную технику
            </p>
            
            {/* Statistics */}
            <div className="flex flex-wrap justify-center gap-8 mb-16">
              <div className="glass-card p-6 border-white/40 animate-fade-in-up bg-orange-900/20" style={{ animationDelay: '200ms' }}>
                <div className="flex items-center justify-center mb-3">
                  <div className="p-3 bg-orange-500/20 rounded-xl">
                    <Award className="h-6 w-6 text-orange-400" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">15+</div>
                <div className="text-sm text-orange-200">лет опыта</div>
              </div>
              
              <div className="glass-card p-6 border-white/40 animate-fade-in-up bg-red-900/20" style={{ animationDelay: '300ms' }}>
                <div className="flex items-center justify-center mb-3">
                  <div className="p-3 bg-red-500/20 rounded-xl">
                    <Zap className="h-6 w-6 text-red-400" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">85%+</div>
                <div className="text-sm text-red-200">инновационной продукции</div>
              </div>
              
              <div className="glass-card p-6 border-white/40 animate-fade-in-up bg-pink-900/20" style={{ animationDelay: '400ms' }}>
                <div className="flex items-center justify-center mb-3">
                  <div className="p-3 bg-pink-500/20 rounded-xl">
                    <Shield className="h-6 w-6 text-pink-400" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-sm text-pink-200">качество</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Priority Products Section */}
      <section className="py-16 md:py-20 bg-black relative overflow-hidden">
        {/* Moving animated background spheres */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" 
               style={{ 
                 animationDuration: '8s', 
                 left: '25%', 
                 top: '25%',
                 animation: 'pulse 8s infinite, moveX 20s infinite alternate, moveY 24s infinite alternate-reverse'
               }}></div>
          <div className="absolute w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse" 
               style={{ 
                 animationDelay: '3s', 
                 animationDuration: '10s',
                 right: '25%',
                 bottom: '33%',
                 animation: 'pulse 10s infinite 3s, moveX 18s infinite alternate-reverse 3s, moveY 22s infinite alternate 3s'
               }}></div>
          <div className="absolute w-64 h-64 md:w-128 md:h-128 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" 
               style={{ 
                 animationDelay: '2s', 
                 animationDuration: '12s',
                 left: '50%',
                 top: '50%',
                 animation: 'pulse 12s infinite 2s, moveX 22s infinite alternate 2s, moveY 26s infinite alternate-reverse 2s'
               }}></div>
        </div>

        <div className="relative z-10">
          <div className="text-center mb-12 md:mb-16 px-4">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse"></div>
                <div className="relative p-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl transform hover:scale-110 transition-all duration-500">
                  <Sparkles className="h-8 w-8 text-white animate-pulse" />
                </div>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                Флагманская продукция
              </h2>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-emerald-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse"></div>
                <div className="relative p-4 bg-gradient-to-r from-purple-500 to-emerald-500 rounded-2xl transform hover:scale-110 transition-all duration-500">
                  <Zap className="h-8 w-8 text-white animate-pulse" />
                </div>
              </div>
            </div>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Наши ведущие решения в области промышленной вычислительной техники и систем хранения данных
            </p>
          </div>
          
          <div className="space-y-8">
            {priorityProducts.map((product, index) => {
              const isEven = index % 2 === 0;
              const isHovered = hoveredCard === index;
              
              return (
                <Card 
                  key={index} 
                  className="group overflow-hidden glass-card border-slate-700/30 hover:border-slate-600/60 hover:shadow-2xl transition-all duration-700 animate-fade-in-up bg-gradient-to-br from-slate-900/20 to-slate-800/30 backdrop-blur-sm mx-4"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`grid lg:grid-cols-2 gap-0 h-[60vh] max-h-[500px] ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Video/Image Section */}
                    <div 
                      className={`relative overflow-hidden bg-slate-900 ${!isEven ? 'lg:col-start-2' : ''}`}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <video
                        src={product.videoUrl}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                      
                      {/* Title overlay */}
                      <div className="absolute top-6 left-6 right-6">
                        <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-white drop-shadow-2xl">
                          {product.title}
                        </h3>
                      </div>

                      {/* Description overlay on hover */}
                      <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-700 flex items-center justify-center p-6 ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                      }`}>
                        <div className="text-center text-white max-w-md">
                          <p className="text-base lg:text-lg leading-relaxed mb-4">
                            {product.description}
                          </p>
                          <div className={`inline-block relative bg-gradient-to-r ${product.gradient} text-white text-sm px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-2xl`}>
                            <Star className="w-4 h-4 animate-pulse" />
                            <span>{product.badge}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className={`p-4 lg:p-6 flex flex-col justify-center ${!isEven ? 'lg:col-start-1' : ''}`}>
                      
                      {/* Full Description */}
                      <p className="text-slate-300 leading-relaxed mb-4 text-xs lg:text-sm line-clamp-3">
                        {product.fullDescription}
                      </p>
                      
                      {/* Enhanced Features */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                        {product.uniqueFeatures.slice(0, 4).map((feature, featureIndex) => {
                          const FeatureIcon = feature.icon;
                          return (
                            <div key={featureIndex} className="group/feature flex items-start space-x-2 p-2 rounded hover:bg-slate-800/30 transition-all duration-500">
                              <div className="relative">
                                <div className="absolute inset-0 bg-emerald-500 rounded-full blur-sm opacity-50 group-hover/feature:opacity-100 group-hover/feature:scale-150 transition-all duration-500"></div>
                                <FeatureIcon className={`w-3 h-3 lg:w-4 lg:h-4 ${feature.color} mt-0.5 flex-shrink-0 relative z-10 drop-shadow-lg transform group-hover/feature:rotate-12 group-hover/feature:scale-125 transition-all duration-500`} />
                              </div>
                              <span className="text-slate-300 leading-relaxed text-xs lg:text-sm group-hover/feature:text-white group-hover/feature:translate-x-1 transition-all duration-500">{feature.text}</span>
                            </div>
                          );
                        })}
                      </div>
                      
                      {/* Enhanced 3D Action Button */}
                      <Button 
                        className={`group/btn relative w-full bg-gradient-to-r ${product.gradient} hover:shadow-2xl text-white transition-all duration-500 text-sm lg:text-base py-4 lg:py-6 overflow-hidden transform hover:scale-105`}
                        onClick={() => window.location.href = product.path}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative z-10 flex items-center justify-center">
                          Подробнее о продукте
                          <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5 transition-transform group-hover/btn:translate-x-2 duration-300 drop-shadow-lg" />
                        </span>
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Secondary Products Section */}
      <section className="py-16 md:py-20 bg-black relative">
        {/* Moving animated background spheres */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse" 
               style={{ 
                 animationDuration: '8s', 
                 left: '25%', 
                 top: '25%',
                 animation: 'pulse 8s infinite, moveX 22s infinite alternate, moveY 26s infinite alternate-reverse'
               }}></div>
          <div className="absolute w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" 
               style={{ 
                 animationDelay: '3s', 
                 animationDuration: '10s',
                 right: '25%',
                 bottom: '33%',
                 animation: 'pulse 10s infinite 3s, moveX 20s infinite alternate-reverse 3s, moveY 24s infinite alternate 3s'
               }}></div>
          <div className="absolute w-64 h-64 md:w-128 md:h-128 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse" 
               style={{ 
                 animationDelay: '2s', 
                 animationDuration: '12s',
                 left: '50%',
                 top: '50%',
                 animation: 'pulse 12s infinite 2s, moveX 26s infinite alternate 2s, moveY 30s infinite alternate-reverse 2s'
               }}></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Дополнительные направления
            </h2>
            <p className="text-center text-slate-300 mb-8 max-w-2xl mx-auto">
              Проверенные решения для различных отраслей промышленности
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {secondaryProducts.map((product, index) => {
              const Icon = product.icon;
              return (
                <Card 
                  key={index} 
                  className="group overflow-hidden glass-card border-slate-700/30 hover:border-emerald-500/30 hover:shadow-xl transition-all duration-500 cursor-pointer animate-fade-in-up h-full flex flex-col bg-slate-900/20"
                  style={{ 
                    animationDelay: `${(priorityProducts.length + index) * 100}ms`,
                    transform: 'perspective(1000px)',
                    transformStyle: 'preserve-3d'
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 10;
                    const rotateY = (centerX - x) / 10;
                    
                    e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
                  }}
                >
                  <div className="aspect-video bg-gradient-to-br from-slate-800/50 to-slate-900/50 relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className={`p-3 bg-gradient-to-r ${product.color} rounded-xl`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col h-full">
                    {/* Content */}
                    <h3 className="text-lg font-bold mb-3 group-hover:text-emerald-400 transition-colors text-white">
                      {product.title}
                    </h3>
                    <p className="text-slate-300 mb-6 leading-relaxed flex-grow text-sm">
                      {product.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {product.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-3 h-3 text-emerald-400 mt-1 flex-shrink-0" />
                          <span className="text-xs text-slate-300 leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Button */}
                    <Button 
                      className="w-full mt-auto text-sm bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700 border-0 transition-all duration-300 hover:shadow-lg"
                      onClick={() => window.location.href = product.path}
                    >
                      Подробнее
                      <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-black relative">
        {/* Moving animated background spheres */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" 
               style={{ 
                 animationDuration: '8s', 
                 left: '25%', 
                 top: '25%',
                 animation: 'pulse 8s infinite, moveX 20s infinite alternate, moveY 24s infinite alternate-reverse'
               }}></div>
          <div className="absolute w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse" 
               style={{ 
                 animationDelay: '3s', 
                 animationDuration: '10s',
                 right: '25%',
                 bottom: '33%',
                 animation: 'pulse 10s infinite 3s, moveX 18s infinite alternate-reverse 3s, moveY 22s infinite alternate 3s'
               }}></div>
        </div>
        
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <Card className="p-12 text-center glass-card border-slate-700/30 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-slate-900/30 animate-fade-in-up">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
                Нужна консультация?
              </h2>
              <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                Наши специалисты помогут подобрать оптимальное решение для ваших задач
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-lg px-8 py-4 shadow-lg transition-all duration-500">
                  Связаться с нами
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-slate-600 bg-white hover:bg-white/90 transition-all duration-500">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                    Скачать каталог
                  </span>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

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
      `}</style>
    </div>
  );
};

export default Products;

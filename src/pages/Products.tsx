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
  Sparkles
} from "lucide-react";

const Products = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [mutedVideos, setMutedVideos] = useState<{ [key: number]: boolean }>({});
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
      badge: "Флагманская продукция"
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
      badge: "Инновации"
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
      badge: "Премиум качество"
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
      badge: "Мобильность"
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
      badge: "Высокие технологии"
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
      isPriority: false
    },
    {
      title: "Блоки для тракторов",
      description: "Специализированные решения для сельскохозяйственной техники",
      icon: Tractor,
      path: "/products/tractor-blocks",
      color: "from-green-500 to-emerald-500",
      features: ["Управление двигателем", "GPS-навигационные системы", "Системы автопилота", "Мониторинг параметров"],
      isPriority: false
    },
    {
      title: "Блоки для комбайнов",
      description: "Высокотехнологичные системы автоматизации для уборочной техники",
      icon: Archive,
      path: "/products/combine-blocks",
      color: "from-yellow-500 to-orange-500",
      features: ["Мониторинг урожайности", "Автоматизация процессов", "Диагностика состояния", "Оптимизация работы"],
      isPriority: false
    },
    {
      title: "Блоки для карьерных самосвалов",
      description: "Надежные решения для экстремальных условий тяжелой промышленности",
      icon: Truck,
      path: "/products/dump-truck-blocks",
      color: "from-red-500 to-pink-500",
      features: ["Системы безопасности", "Телематические решения", "Мониторинг нагрузки", "Контроль производительности"],
      isPriority: false
    },
    {
      title: "Системы домофонной связи",
      description: "Современные IP-системы домофонной связи с видеонаблюдением",
      icon: Radio,
      path: "/products/intercoms",
      color: "from-teal-500 to-cyan-500",
      features: ["IP-технологии связи", "HD видеосвязь", "Мобильная интеграция", "Облачные сервисы"],
      isPriority: false
    }
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 dark:from-orange-950 dark:via-orange-900 dark:to-orange-800">
      <Navigation />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          
          {/* Hero Section */}
          <div className="text-center mb-24 animate-fade-in-up">
            <div className="inline-block relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-orange-500/20 rounded-full blur-3xl scale-150"></div>
              <h1 className="relative text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent">
                Наша продукция
              </h1>
            </div>
            <p className="text-lg md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
              Инновационные промышленные решения с акцентом на высокотехнологичную вычислительную технику
            </p>
            
            {/* Statistics */}
            <div className="flex flex-wrap justify-center gap-8 mb-16">
              <div className="glass-card p-6 border-white/40 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <div className="flex items-center justify-center mb-3">
                  <div className="p-3 bg-primary/20 rounded-xl">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">лет опыта</div>
              </div>
              
              <div className="glass-card p-6 border-white/40 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <div className="flex items-center justify-center mb-3">
                  <div className="p-3 bg-primary/20 rounded-xl">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary mb-1">85%+</div>
                <div className="text-sm text-muted-foreground">инновационной продукции</div>
              </div>
              
              <div className="glass-card p-6 border-white/40 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <div className="flex items-center justify-center mb-3">
                  <div className="p-3 bg-primary/20 rounded-xl">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">качество</div>
              </div>
            </div>
          </div>

          {/* Priority Products Section - Enhanced with 3D effects and better spacing */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse"></div>
                  <div className="relative p-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl transform hover:scale-110 transition-all duration-500">
                    <Sparkles className="h-8 w-8 text-white animate-pulse" />
                  </div>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 bg-clip-text text-transparent">
                  Флагманская продукция
                </h2>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse"></div>
                  <div className="relative p-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl transform hover:scale-110 transition-all duration-500">
                    <Zap className="h-8 w-8 text-white animate-pulse" />
                  </div>
                </div>
              </div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Наши ведущие решения в области промышленной вычислительной техники и систем хранения данных
              </p>
            </div>
            
            <div className="space-y-8">
              {priorityProducts.map((product, index) => {
                const isPlaying = playingVideo === index;
                const isMuted = true; // Always muted
                const isEven = index % 2 === 0;
                const isHovered = hoveredCard === index;
                
                return (
                  <Card 
                    key={index} 
                    className="group overflow-hidden glass-card border-orange-200/50 hover:border-orange-400/60 hover:shadow-2xl transition-all duration-700 animate-fade-in-up bg-gradient-to-br from-white/90 to-orange-50/80 backdrop-blur-sm"
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
                      
                      {/* Content Section - Optimized for screen fit */}
                      <div className={`p-4 lg:p-6 flex flex-col justify-center ${!isEven ? 'lg:col-start-1' : ''}`}>
                        
                        {/* Full Description - Truncated for screen fit */}
                        <p className="text-muted-foreground leading-relaxed mb-4 text-xs lg:text-sm line-clamp-3">
                          {product.fullDescription}
                        </p>
                        
                        {/* Enhanced Features - Compact grid with better hover animation */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                          {product.features.slice(0, 4).map((feature, featureIndex) => (
                            <div key={featureIndex} className="group/feature flex items-start space-x-2 p-2 rounded hover:bg-orange-50 transition-all duration-500">
                              <div className="relative">
                                <div className="absolute inset-0 bg-emerald-500 rounded-full blur-sm opacity-50 group-hover/feature:opacity-100 group-hover/feature:scale-150 transition-all duration-500"></div>
                                <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-emerald-500 mt-0.5 flex-shrink-0 relative z-10 drop-shadow-lg transform group-hover/feature:rotate-12 group-hover/feature:scale-125 transition-all duration-500" />
                              </div>
                              <span className="text-muted-foreground leading-relaxed text-xs lg:text-sm group-hover/feature:text-slate-800 group-hover/feature:translate-x-1 transition-all duration-500">{feature}</span>
                            </div>
                          ))}
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

          {/* Secondary Products Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                Дополнительные направления
              </h2>
              <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                Проверенные решения для различных отраслей промышленности
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {secondaryProducts.map((product, index) => {
                const Icon = product.icon;
                return (
                  <Card 
                    key={index} 
                    className="group overflow-hidden glass-card border-white/40 hover:border-primary/30 hover:shadow-xl transition-all duration-500 cursor-pointer animate-fade-in-up h-full flex flex-col"
                    style={{ animationDelay: `${(priorityProducts.length + index) * 100}ms` }}
                  >
                    <div className="p-6 flex flex-col h-full">
                      {/* Icon */}
                      <div className="relative mb-6">
                        <div className={`absolute inset-0 bg-gradient-to-r ${product.color} opacity-20 rounded-2xl blur-xl`}></div>
                        <div className={`relative p-4 bg-gradient-to-r ${product.color} rounded-2xl w-fit`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed flex-grow text-sm">
                        {product.description}
                      </p>
                      
                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {product.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                            <span className="text-xs text-muted-foreground leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Button */}
                      <Button 
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 mt-auto text-sm"
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

          {/* Call to Action */}
          <Card className="p-12 text-center glass-card border-white/40 bg-gradient-to-r from-orange-500/5 via-orange-600/5 to-orange-500/5 animate-fade-in-up">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Нужна консультация?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Наши специалисты помогут подобрать оптимальное решение для ваших задач
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg px-8 py-4 shadow-lg">
                  Связаться с нами
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white">
                  Скачать каталог
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;

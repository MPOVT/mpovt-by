import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import OptimizedVideoPlayer from "@/components/OptimizedVideoPlayer";
import { 
  ArrowRight,
  Laptop,
  Monitor,
  Tablet,
  HardDrive,
  Car,
  Radio,
  FileText,
  Cpu,
  Battery,
  Wifi,
  Shield as ShieldIcon,
  Layers,
  Settings,
  Award,
  CheckCircle,
  Sparkles,
  Star,
  Zap
} from "lucide-react";

const Products = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
      link: "/products/laptops",
      gradient: "from-emerald-600 via-emerald-500 to-teal-400",
      bgGradient: "from-emerald-500/20 via-teal-400/20 to-emerald-600/20",
      badge: "Мобильные решения",
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
      link: "/products/car-blocks",
      fullDescription: "Наши автокомпоненты разработаны для современных автомобилей и обеспечивают высокую надежность работы всех электронных систем.",
      features: ["Высокая надежность", "Соответствие стандартам", "Долговечность", "Простота интеграции"]
    },
    {
      title: "Средства связи",
      description: "Системы связи и телекоммуникационное оборудование",
      icon: Radio,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      link: "/products/special-communication",
      fullDescription: "Профессиональные системы связи для критически важных задач с высокой степенью защиты и надежности.",
      features: ["Защищенная связь", "Высокое качество сигнала", "Широкий диапазон", "Энергоэффективность"]
    },
    {
      title: "Информационные системы",
      description: "Комплексные IT-решения для бизнеса",
      icon: FileText,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      link: "/products/information-systems",
      fullDescription: "Интегрированные информационные системы для автоматизации бизнес-процессов и повышения эффективности работы.",
      features: ["Масштабируемость", "Безопасность данных", "Интуитивный интерфейс", "Техническая поддержка"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 md:pt-44 lg:pt-48 pb-12 md:pb-16 lg:pb-20 px-4 text-center relative overflow-hidden bg-black">
        {/* Animated background matching main page style */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse moving-sphere-1"></div>
          <div className="absolute bottom-1/6 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse moving-sphere-2"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-128 md:h-128 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-full blur-3xl animate-pulse moving-sphere-3"></div>
          <div className="absolute top-3/4 left-1/3 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 rounded-full blur-3xl animate-pulse moving-sphere-4"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl font-black mb-6 md:mb-8 text-white/95 leading-tight">
              Продукция
            </h1>
            <p className="text-lg md:text-xl xl:text-2xl text-white/70 mb-6 md:mb-8">
              Комплексные решения для современных технологических вызовов
            </p>
          </div>
        </div>
      </section>

      {/* Priority Products Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-black via-slate-900/50 to-black relative overflow-hidden">
        {/* Animated background spheres */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse moving-sphere-5"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse moving-sphere-6"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-128 md:h-128 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse moving-sphere-7"></div>
        </div>
        
        <div className="relative z-10">
          <div className="text-center mb-12 md:mb-16 px-4">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent mb-8">
              Флагманская продукция
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Революционные решения потребительской вычислительной техники нового поколения
            </p>
          </div>

          {/* Mobile-optimized cards with overlay text */}
          <div className="space-y-6 md:space-y-8">
            {priorityProducts.map((product, index) => {
              const isHovered = hoveredCard === index;
              
              return (
                <div 
                  key={index} 
                  className="w-full animate-fade-in-up px-4"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <Card className="group overflow-hidden bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-700 hover:shadow-2xl hover:shadow-slate-900/50">
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Video/Image Section - Mobile full card with overlay */}
                      <div 
                        className="relative overflow-hidden bg-slate-900 aspect-video lg:aspect-auto lg:min-h-[300px]"
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <div className="relative w-full h-full">
                          <OptimizedVideoPlayer
                            src={product.videoUrl}
                            placeholder={product.image}
                            className={`transition-transform duration-700 group-hover:scale-105 ${
                              // Mobile overlay: darken and blur video
                              'lg:filter-none filter brightness-50 blur-sm lg:blur-none lg:brightness-100'
                            }`}
                          />

                          {/* Mobile overlay content - visible on mobile, hidden on desktop */}
                          <div className="absolute inset-0 lg:hidden flex flex-col justify-center items-center p-6 text-center text-white z-10">
                            <h3 className="text-2xl font-bold mb-3 drop-shadow-lg">
                              {product.title}
                            </h3>
                            <p className="text-sm leading-relaxed mb-4 opacity-90">
                              {product.description}
                            </p>
                            <div className={`inline-block relative bg-gradient-to-r ${product.gradient} text-white text-sm px-4 py-2 rounded-full font-semibold shadow-2xl`}>
                              {product.badge}
                            </div>
                          </div>

                          {/* Desktop hover overlay - hidden on mobile */}
                          <div className={`hidden lg:flex absolute inset-0 bg-black/50 backdrop-blur-sm transition-all duration-700 items-center justify-center p-4 md:p-6 ${
                            isHovered ? 'opacity-100' : 'opacity-0'
                          }`}>
                            <div className="text-center text-white max-w-md bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/20">
                              <p className="text-sm md:text-lg leading-relaxed mb-4">
                                {product.description}
                              </p>
                              <div className={`inline-block relative bg-gradient-to-r ${product.gradient} text-white text-xs md:text-sm px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold flex items-center gap-2 shadow-2xl`}>
                                <span>{product.badge}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Content Section - Hidden on mobile, visible on desktop */}
                      <div className="hidden lg:flex p-4 md:p-6 lg:p-6 flex-col justify-center bg-gradient-to-br from-slate-800/5 to-slate-900/5 backdrop-blur-lg">
                        
                        {/* Product title */}
                        <h3 className="text-xl md:text-2xl lg:text-2xl font-bold text-white mb-3 md:mb-4 drop-shadow-lg">
                          {product.title}
                        </h3>

                        {/* Full Description - more compact */}
                        <p className="text-slate-300 leading-relaxed mb-4 md:mb-5 text-sm md:text-base">
                          {product.fullDescription}
                        </p>
                        
                        {/* Enhanced Features - Mobile grid, more compact */}
                        <div className="grid grid-cols-1 gap-2 mb-5 md:mb-6">
                          {product.uniqueFeatures.map((feature, featureIndex) => {
                            const FeatureIcon = feature.icon;
                            return (
                              <div key={featureIndex} className="group/feature flex items-center gap-2 md:gap-3 p-2 rounded-lg transition-all duration-300">
                                <div className="relative">
                                  <FeatureIcon className={`w-4 h-4 md:w-5 md:h-5 ${feature.color} flex-shrink-0 relative z-10 drop-shadow-lg transform group-hover/feature:rotate-12 group-hover/feature:scale-125 transition-all duration-500`} />
                                </div>
                                <span className="text-slate-300 text-xs md:text-sm group-hover/feature:text-white group-hover/feature:translate-x-2 transition-all duration-500">{feature.text}</span>
                              </div>
                            );
                          })}
                        </div>
                        
                        {/* Mobile-optimized Button - more compact */}
                        <Button 
                          asChild
                          className="group/btn relative w-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 backdrop-blur-sm text-white transition-all duration-500 text-sm md:text-base py-3 md:py-4 overflow-hidden transform hover:scale-105"
                        >
                          <Link to={product.link}>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                            <span className="relative z-10 flex items-center justify-center text-center">
                              <span className="hidden sm:inline">Подробнее о продукте</span>
                              <span className="sm:hidden">Подробнее</span>
                              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover/btn:translate-x-2 duration-300 drop-shadow-lg" />
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

      {/* Secondary Products Section with different background spheres positioning */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-black relative">
        {/* Moving animated background spheres with different positioning */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/6 right-1/6 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse moving-sphere-8"></div>
          <div className="absolute bottom-1/4 left-1/6 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse moving-sphere-9"></div>
          <div className="absolute top-2/3 right-1/3 w-64 h-64 md:w-128 md:h-128 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse moving-sphere-10"></div>
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
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-500 glass-card flex flex-col h-full bg-emerald-900/20 border-emerald-700/30 hover:scale-105"
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
                    
                    {/* Features list with icons */}
                    <div className="mb-4 space-y-1">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                          <span className="text-white text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
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

      {/* CTA Section - Готовы к сотрудничеству? style from main page */}
      <section className="py-20 md:py-24 lg:py-28 relative bg-black overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white/95">
              Нужна консультация?
            </h2>
            <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              Наши эксперты помогут подобрать идеальное решение для ваших бизнес-задач
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="btn-primary text-lg px-8 py-4">
                <Link to="/contact">
                  Связаться с нами
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 bg-white/5 hover:bg-white/10 text-white hover:text-white text-lg px-8 py-4">
                <Link to="/">На главную</Link>
              </Button>
            </div>
          </div>
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
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotateZ(0deg); }
          50% { transform: translateY(-10px) rotateZ(180deg); }
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
          animation: pulse 9s infinite 4s, moveX 22s infinite alternate 4s, moveY 26s infinite alternate-reverse 4s;
        }
        
        .moving-sphere-5 {
          animation: pulse 8s infinite, moveX 22s infinite alternate, moveY 26s infinite alternate-reverse;
        }
        
        .moving-sphere-6 {
          animation: pulse 10s infinite 3s, moveX 20s infinite alternate-reverse 3s, moveY 24s infinite alternate 3s;
        }
        
        .moving-sphere-7 {
          animation: pulse 12s infinite 2s, moveX 26s infinite alternate 2s, moveY 30s infinite alternate-reverse 2s;
        }
        
        .moving-sphere-8 {
          animation: pulse 9s infinite 1s, moveX 19s infinite alternate 1s, moveY 23s infinite alternate-reverse 1s;
        }
        
        .moving-sphere-9 {
          animation: pulse 11s infinite 4s, moveX 17s infinite alternate-reverse 4s, moveY 21s infinite alternate 4s;
        }
        
        .moving-sphere-10 {
          animation: pulse 13s infinite 2.5s, moveX 21s infinite alternate 2.5s, moveY 25s infinite alternate-reverse 2.5s;
        }
        
        .moving-sphere-11 {
          animation: pulse 8.5s infinite 1.5s, moveX 23s infinite alternate 1.5s, moveY 27s infinite alternate-reverse 1.5s;
        }
        
        .moving-sphere-12 {
          animation: pulse 10.5s infinite 3.5s, moveX 19s infinite alternate-reverse 3.5s, moveY 23s infinite alternate 3.5s;
        }
        
        .moving-sphere-13 {
          animation: pulse 12.5s infinite 2.2s, moveX 25s infinite alternate 2.2s, moveY 29s infinite alternate-reverse 2.2s;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .floating-star {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Products;

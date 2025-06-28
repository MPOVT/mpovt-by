
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Factory, 
  Users, 
  TrendingUp, 
  Globe,
  Award,
  Settings,
  Shield,
  ArrowRight,
  MapPin,
  Calendar,
  Building,
  Quote
} from "lucide-react";

const Company = () => {
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);

  const values = [
    {
      icon: Factory,
      title: "Качество",
      description: "Высочайшие стандарты качества в каждом продукте",
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/20"
    },
    {
      icon: Users,
      title: "Команда",
      description: "Опытные специалисты и профессионалы своего дела",
      color: "text-blue-500",
      bgColor: "bg-blue-500/20"
    },
    {
      icon: TrendingUp,
      title: "Развитие",
      description: "Постоянное совершенствование и инновации",
      color: "text-purple-500",
      bgColor: "bg-purple-500/20"
    },
    {
      icon: Globe,
      title: "Глобальность",
      description: "Работаем с партнерами по всему миру",
      color: "text-orange-500",
      bgColor: "bg-orange-500/20"
    }
  ];

  const timelineEvents = [
    {
      year: "1956",
      title: "Основание предприятия",
      description: "Создание Минского производственного объединения вычислительной техники",
      color: "emerald-500"
    },
    {
      year: "1970-80",
      title: "Период роста",
      description: "Активное развитие производства электронных компонентов",
      color: "blue-500"
    },
    {
      year: "1990-2000",
      title: "Модернизация",
      description: "Внедрение современных технологий и оборудования",
      color: "purple-500"
    },
    {
      year: "2001-2010",
      title: "Сертификация",
      description: "Получение международных сертификатов качества ISO 9001",
      color: "orange-500"
    },
    {
      year: "2011-2020",
      title: "Инновации",
      description: "Разработка новых продуктов и технологических решений",
      color: "cyan-500"
    },
    {
      year: "2021-2024",
      title: "Цифровизация",
      description: "Внедрение цифровых технологий и автоматизация производства",
      color: "pink-500"
    }
  ];

  const companyStats = [
    {
      icon: Building,
      label: "Производственная площадь",
      value: "15,000 м²"
    },
    {
      icon: MapPin,
      label: "Локация",
      value: "Минск, Беларусь"
    },
    {
      icon: Calendar,
      label: "Год основания",
      value: "1956"
    }
  ];

  // Generate gradient between two timeline points
  const getTimelineGradient = (fromIndex: number, toIndex: number) => {
    const fromColor = timelineEvents[fromIndex]?.color || 'primary';
    const toColor = timelineEvents[toIndex]?.color || 'primary';
    return `linear-gradient(to right, rgb(var(--${fromColor})), rgb(var(--${toColor})))`;
  };

  return (
    <div className="min-h-screen">
      <Navigation />

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
              О компании
            </h1>
            <p className="text-lg md:text-xl xl:text-2xl text-white/70 mb-6 md:mb-8">
              Более 65 лет опыта в разработке и производстве электронных компонентов
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-black via-slate-900/50 to-black relative overflow-hidden">
        {/* Animated background spheres */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse moving-sphere-5"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse moving-sphere-6"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-16 lg:mb-20">
            <Card className="p-4 sm:p-6 md:p-8 bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-500 animate-fade-in-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 lg:mb-6 text-white">Наша история</h2>
              <div className="space-y-3 md:space-y-4 text-slate-300 leading-relaxed">
                <p className="text-sm md:text-base">
                  ОАО «МПОВТ» (Минское производственное объединение вычислительной техники) — ведущее предприятие Беларуси в области разработки и производства электронных компонентов и систем. Основанное в 1956 году, предприятие прошло долгий путь развития и модернизации.
                </p>
                <p className="text-sm md:text-base">
                  Сегодня МПОВТ — это современное высокотехнологичное предприятие, оснащенное новейшим оборудованием и укомплектованное высококвалифицированными специалистами. Мы производим широкий спектр продукции: от автокомпонентов до сложных информационных систем.
                </p>
                <p className="text-sm md:text-base">
                  Наша компания сертифицирована по международным стандартам качества ISO 9001, что подтверждает высокий уровень нашей продукции и процессов. Мы постоянно инвестируем в исследования и разработки, внедряя инновационные технологии и решения.
                </p>
              </div>
              
              {/* Quote Section */}
              <div className="mt-6 md:mt-8 p-4 md:p-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl border border-cyan-500/20">
                <div className="flex items-start space-x-3">
                  <Quote className="h-6 w-6 md:h-8 md:w-8 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <blockquote className="text-sm md:text-base text-white/90 italic leading-relaxed mb-2">
                      "Инженер должен быть не только техником, но и художником, не только математиком, но и психологом."
                    </blockquote>
                    <cite className="text-xs md:text-sm text-cyan-400 font-medium">
                      — Игорь Курчатов, советский физик-ядерщик
                    </cite>
                  </div>
                </div>
              </div>
            </Card>

            <div className="animate-fade-in-right space-y-4 md:space-y-6">
              <Card className="p-3 sm:p-4 md:p-6 bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-500 h-full">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-orange-400/20 rounded-xl overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop" 
                    alt="Здание МПОВТ"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                {/* Company Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-3 md:gap-4">
                  {companyStats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="flex items-center space-x-2 md:space-x-3 p-2 md:p-3 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-lg">
                        <div className="p-1.5 md:p-2 bg-primary/20 rounded-lg flex-shrink-0">
                          <Icon className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs md:text-sm font-medium text-white">{stat.value}</p>
                          <p className="text-xs text-slate-400 truncate">{stat.label}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-12 md:mb-16 lg:mb-20">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                Наши ценности
              </h2>
              <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                Принципы, которыми мы руководствуемся в своей работе
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card 
                    key={index} 
                    className="p-4 sm:p-6 md:p-8 text-center bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-500 hover:scale-105 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 ${value.bgColor} rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 lg:mb-6`}>
                      <Icon className={`h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 ${value.color}`} />
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 md:mb-3 text-white">{value.title}</h3>
                    <p className="text-slate-300 text-xs sm:text-sm md:text-base">{value.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-12 md:mb-16 lg:mb-20">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                История развития
              </h2>
              <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                Ключевые моменты нашего развития за более чем 65 лет
              </p>
            </div>

            <Card className="p-6 md:p-8 bg-slate-800/10 backdrop-blur-xl border border-slate-700/20">
              {/* Desktop Horizontal Timeline */}
              <div className="hidden md:block relative">
                {/* Timeline segments with gradients */}
                <div className="absolute top-6 left-0 right-0 h-0.5 flex">
                  {timelineEvents.slice(0, -1).map((event, index) => (
                    <div
                      key={index}
                      className="flex-1 h-full"
                      style={{
                        background: `linear-gradient(to right, rgb(34 197 94), rgb(59 130 246))`
                      }}
                    />
                  ))}
                </div>
                
                {/* Timeline points */}
                <div className="flex justify-between items-center relative z-10 mb-8">
                  {timelineEvents.map((event, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTimelineIndex(index)}
                      className={`relative group transition-all duration-300 ${
                        activeTimelineIndex === index ? 'scale-110' : 'hover:scale-105'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-full border-4 transition-all duration-300 flex items-center justify-center ${
                        activeTimelineIndex === index 
                          ? `bg-${event.color} border-${event.color} shadow-lg shadow-${event.color}/30` 
                          : `bg-white dark:bg-gray-800 border-${event.color}/30 hover:border-${event.color}/60`
                      }`}>
                        <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          activeTimelineIndex === index 
                            ? 'bg-white' 
                            : `bg-${event.color}/40`
                        }`}></div>
                      </div>
                      
                      {/* Year label */}
                      <div className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs md:text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                        activeTimelineIndex === index 
                          ? `text-${event.color} scale-110` 
                          : 'text-slate-400'
                      }`}>
                        {event.year}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Active event details */}
                <div className="mt-12 min-h-[120px] relative overflow-hidden">
                  <div 
                    key={activeTimelineIndex}
                    className="transition-all duration-400 ease-out"
                    style={{
                      animation: 'fadeInUp 0.4s ease-out forwards',
                      opacity: 0,
                      transform: 'translateY(16px)'
                    }}
                    onAnimationEnd={(e) => {
                      e.currentTarget.style.opacity = '1';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <h3 className={`text-xl md:text-2xl font-bold mb-3 text-${timelineEvents[activeTimelineIndex].color}`}>
                      {timelineEvents[activeTimelineIndex].title}
                    </h3>
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                      {timelineEvents[activeTimelineIndex].description}
                    </p>
                  </div>
                  
                  {/* Progress indicator with smooth transition and color animation */}
                  <div className="flex items-center mt-6 space-x-2">
                    {timelineEvents.map((event, index) => (
                      <div
                        key={index}
                        className={`h-1 rounded-full transition-all duration-500 ease-out ${
                          index === activeTimelineIndex 
                            ? `bg-${event.color} w-8` 
                            : `bg-${event.color}/20 w-2`
                        }`}
                        style={{
                          transitionDelay: index === activeTimelineIndex ? '0ms' : '100ms'
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Vertical Snake Timeline */}
              <div className="md:hidden space-y-8">
                {timelineEvents.map((event, index) => (
                  <div 
                    key={index} 
                    className={`relative ${index % 2 === 0 ? 'ml-0 mr-8' : 'ml-8 mr-0'}`}
                  >
                    {/* Event card and point container */}
                    <div className={`relative flex items-start ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}>
                      {/* Timeline point */}
                      <div className="flex-shrink-0 relative z-10">
                        <div className={`w-12 h-12 rounded-full border-4 border-${event.color} bg-white dark:bg-gray-800 flex items-center justify-center shadow-lg`}>
                          <div className={`w-3 h-3 rounded-full bg-${event.color}`}></div>
                        </div>
                      </div>
                      
                      {/* Connecting line from point to card */}
                      <div className={`w-4 h-0.5 bg-${event.color}/40 mt-6 ${
                        index % 2 === 0 ? 'ml-0' : 'mr-0'
                      }`}></div>
                      
                      {/* Event content */}
                      <div className={`flex-1 ${index % 2 === 0 ? 'ml-0' : 'mr-0'}`}>
                        <div className="bg-white/20 dark:bg-black/20 backdrop-blur-sm rounded-lg p-4 shadow-md">
                          <div className={`text-sm font-bold text-${event.color} mb-1`}>
                            {event.year}
                          </div>
                          <h3 className="text-lg font-semibold mb-2 text-white">
                            {event.title}
                          </h3>
                          <p className="text-sm text-slate-300 leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="p-6 sm:p-8 md:p-12 text-center bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 animate-fade-in-up">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 lg:mb-6 text-white">Свяжитесь с нами</h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-4 md:mb-6 lg:mb-8 max-w-2xl mx-auto">
              Узнайте больше о наших возможностях и продукции
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button asChild size="lg" className="text-sm md:text-base bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 transition-all duration-500 shadow-lg">
                <Link to="/contact">
                  Связаться с нами
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-purple-400/30 bg-purple-500/10 hover:bg-purple-500/20 text-sm md:text-base transition-all duration-500">
                <Link to="/products">
                  <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                    Наша продукция
                  </span>
                </Link>
              </Button>
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
      `}</style>
    </div>
  );
};

export default Company;

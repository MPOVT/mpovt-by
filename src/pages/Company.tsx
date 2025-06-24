
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
  Building
} from "lucide-react";

const Company = () => {
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);

  const values = [
    {
      icon: Factory,
      title: "Качество",
      description: "Высочайшие стандарты качества в каждом продукте"
    },
    {
      icon: Users,
      title: "Команда",
      description: "Опытные специалисты и профессионалы своего дела"
    },
    {
      icon: TrendingUp,
      title: "Развитие",
      description: "Постоянное совершенствование и инновации"
    },
    {
      icon: Globe,
      title: "Глобальность",
      description: "Работаем с партнерами по всему миру"
    }
  ];

  const timelineEvents = [
    {
      year: "1956",
      title: "Основание предприятия",
      description: "Создание Минского производственного объединения вычислительной техники"
    },
    {
      year: "1970-80",
      title: "Период роста",
      description: "Активное развитие производства электронных компонентов"
    },
    {
      year: "1990-2000",
      title: "Модернизация",
      description: "Внедрение современных технологий и оборудования"
    },
    {
      year: "2001-2010",
      title: "Сертификация",
      description: "Получение международных сертификатов качества ISO 9001"
    },
    {
      year: "2011-2020",
      title: "Инновации",
      description: "Разработка новых продуктов и технологических решений"
    },
    {
      year: "2021-2024",
      title: "Цифровизация",
      description: "Внедрение цифровых технологий и автоматизация производства"
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900">
      <Navigation />
      
      <div className="pt-24 md:pt-28 lg:pt-32 pb-16 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <div className="relative inline-block">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent">
                О компании
              </h1>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 lg:w-32 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4 md:mt-6">
              Более 65 лет опыта в разработке и производстве электронных компонентов
            </p>
          </div>

          {/* About Section */}
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-16 lg:mb-20">
            <Card className="p-4 sm:p-6 md:p-8 glass-card animate-fade-in-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 lg:mb-6">Наша история</h2>
              <div className="space-y-3 md:space-y-4 text-muted-foreground leading-relaxed">
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
            </Card>

            <div className="animate-fade-in-right space-y-4 md:space-y-6">
              <Card className="p-3 sm:p-4 md:p-6 glass-card h-full">
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
                          <p className="text-xs md:text-sm font-medium">{stat.value}</p>
                          <p className="text-xs text-muted-foreground truncate">{stat.label}</p>
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
              <div className="relative inline-block">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent">
                  Наши ценности
                </h2>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 md:w-20 lg:w-24 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mt-3 md:mt-4">
                Принципы, которыми мы руководствуемся в своей работе
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card 
                    key={index} 
                    className="p-4 sm:p-6 md:p-8 text-center glass-card hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 lg:mb-6">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-primary" />
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 md:mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm md:text-base">{value.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-12 md:mb-16 lg:mb-20">
            <div className="text-center mb-8 md:mb-12">
              <div className="relative inline-block">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent">
                  История развития
                </h2>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 md:w-20 lg:w-24 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mt-3 md:mt-4">
                Ключевые моменты нашего развития за более чем 65 лет
              </p>
            </div>

            <Card className="p-6 md:p-8 glass-card">
              {/* Desktop Horizontal Timeline */}
              <div className="hidden md:block relative">
                {/* Timeline line */}
                <div className="absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/30 via-orange-400/50 to-primary/30"></div>
                
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
                          ? 'bg-primary border-primary shadow-lg shadow-primary/30' 
                          : 'bg-white dark:bg-gray-800 border-primary/30 hover:border-primary/60'
                      }`}>
                        <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          activeTimelineIndex === index 
                            ? 'bg-white' 
                            : 'bg-primary/40'
                        }`}></div>
                      </div>
                      
                      {/* Year label */}
                      <div className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs md:text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                        activeTimelineIndex === index 
                          ? 'text-primary scale-110' 
                          : 'text-muted-foreground'
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
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-primary">
                      {timelineEvents[activeTimelineIndex].title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {timelineEvents[activeTimelineIndex].description}
                    </p>
                  </div>
                  
                  {/* Progress indicator with smooth transition */}
                  <div className="flex items-center mt-6 space-x-2">
                    {timelineEvents.map((_, index) => (
                      <div
                        key={index}
                        className={`h-1 rounded-full transition-all duration-500 ease-out ${
                          index === activeTimelineIndex 
                            ? 'bg-primary w-8' 
                            : 'bg-primary/20 w-2'
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
                    {/* Timeline connecting lines */}
                    {index < timelineEvents.length - 1 && (
                      <>
                        {/* Vertical line down from current point center */}
                        <div className={`absolute top-6 w-0.5 h-8 bg-gradient-to-b from-primary/50 to-primary/30 ${
                          index % 2 === 0 ? 'left-6' : 'right-6'
                        }`}></div>
                        
                        {/* Horizontal line connecting to opposite side */}
                        <div className={`absolute top-14 h-0.5 bg-gradient-to-r from-primary/30 to-primary/30 ${
                          index % 2 === 0 
                            ? 'left-6.5 right-8' 
                            : 'right-6.5 left-8'
                        }`}></div>
                        
                        {/* Vertical line up to next point center */}
                        <div className={`absolute top-14 w-0.5 h-8 bg-gradient-to-b from-primary/30 to-primary/50 ${
                          index % 2 === 0 ? 'right-8' : 'left-8'
                        }`}></div>
                      </>
                    )}
                    
                    {/* Event card */}
                    <div className={`relative flex items-start ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}>
                      {/* Timeline point */}
                      <div className="flex-shrink-0 relative z-10">
                        <div className="w-12 h-12 rounded-full border-4 border-primary bg-white dark:bg-gray-800 flex items-center justify-center shadow-lg">
                          <div className="w-3 h-3 rounded-full bg-primary"></div>
                        </div>
                      </div>
                      
                      {/* Event content */}
                      <div className={`flex-1 ${index % 2 === 0 ? 'ml-4' : 'mr-4'}`}>
                        <div className="bg-white/20 dark:bg-black/20 backdrop-blur-sm rounded-lg p-4 shadow-md">
                          <div className="text-sm font-bold text-primary mb-1">
                            {event.year}
                          </div>
                          <h3 className="text-lg font-semibold mb-2 text-foreground">
                            {event.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
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
          <Card className="p-6 sm:p-8 md:p-12 text-center glass-card animate-fade-in-up">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 lg:mb-6">Свяжитесь с нами</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 md:mb-6 lg:mb-8 max-w-2xl mx-auto">
              Узнайте больше о наших возможностях и продукции
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button asChild size="lg" className="btn-primary-smooth text-sm md:text-base">
                <Link to="/contact">
                  Связаться с нами
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white text-sm md:text-base">
                <Link to="/products">Наша продукция</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Company;

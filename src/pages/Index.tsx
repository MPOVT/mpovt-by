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
  CheckCircle
} from "lucide-react";

const Index = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Factory,
      title: "Современное производство",
      description: "Высокотехнологичное оборудование и автоматизация обеспечивают качество мирового уровня.",
      fullDescription: "Наше предприятие оснащено современным высокотехнологичным оборудованием и автоматизированными линиями. Постоянные инвестиции в модернизацию позволяют выпускать продукцию, соответствующую высоким международным стандартам качества.",
      backgroundImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      colorScheme: {
        primary: "text-blue-600 dark:text-blue-400",
        background: "bg-blue-100/50 dark:bg-blue-900/30",
        activeBackground: "bg-blue-500/20 dark:bg-blue-600/30",
        activeBorder: "border-blue-500/50",
        iconActive: "bg-blue-500/60 text-white",
        iconInactive: "bg-blue-500/20 text-blue-600 dark:text-blue-400"
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
        iconInactive: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400"
      }
    },
    {
      icon: Shield,
      title: "Система качества",
      description: "Сертифицированная система менеджмента качества ISO 9001 гарантирует соответствие международным стандартам.",
      fullDescription: "Наша система менеджмента качества сертифицирована по стандарту ISO 9001, что гарантирует высочайший уровень качества всей выпускаемой продукции. Мы строго следим за соблюдением всех технологических процессов и постоянно совершенствуем систему контроля качества.",
      backgroundImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      colorScheme: {
        primary: "text-purple-600 dark:text-purple-400",
        background: "bg-purple-100/50 dark:bg-purple-900/30",
        activeBackground: "bg-purple-500/20 dark:bg-purple-600/30",
        activeBorder: "border-purple-500/50",
        iconActive: "bg-purple-500/60 text-white",
        iconInactive: "bg-purple-500/20 text-purple-600 dark:text-purple-400"
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
        iconInactive: "bg-amber-500/20 text-amber-600 dark:text-amber-400"
      }
    }
  ];

  const products = [
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
      title: "Компьютерная техника",
      description: "Ноутбуки и компьютерное оборудование",
      icon: Laptop,
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop",
      link: "/products/laptops"
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-orange-50 to-orange-100 dark:from-orange-950 dark:via-orange-950 dark:to-orange-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-28 lg:pt-32 pb-12 md:pb-16 lg:pb-20 px-4 text-center relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent">
              ОАО «МПОВТ»
            </h1>
            <p className="text-lg md:text-xl xl:text-2xl text-muted-foreground mb-6 md:mb-8" style={{ animationDelay: '200ms' }}>
              Ведущий производитель электронных компонентов и автокомпонентов с 1956 года
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center" style={{ animationDelay: '400ms' }}>
              <Button asChild size="lg" className="btn-primary-smooth text-sm md:text-base">
                <Link to="/products">
                  Наша продукция
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white text-sm md:text-base">
                <Link to="/company">О компании</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Background decoration with continuous gradient */}
        <div className="absolute inset-0 opacity-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-primary rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-orange-400 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150%] h-32 bg-gradient-to-r from-primary/5 via-orange-400/10 to-primary/5 blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-gradient-to-b from-orange-50/70 via-white/50 to-orange-50/70 dark:from-orange-950/70 dark:via-black/50 dark:to-orange-950/70 relative">
        {/* Continuous background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/30 to-white/30 dark:from-orange-950/30 dark:to-black/30"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <div className="relative inline-block">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 lg:mb-6 bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent">
                Инновационные решения для промышленности
              </h2>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 lg:w-32 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4 md:mt-6">
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
                      "p-3 sm:p-4 md:p-6 cursor-pointer transition-all duration-500 hover:shadow-xl glass-card",
                      activeFeature === index 
                        ? `${colors.activeBorder} ${colors.activeBackground} shadow-lg scale-105` 
                        : 'hover:scale-102'
                    )}
                    onClick={() => setActiveFeature(index)}
                  >
                    <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                      <div className={cn(
                        "p-1.5 sm:p-2 md:p-3 rounded-xl transition-all duration-300 flex-shrink-0",
                        activeFeature === index 
                          ? `${colors.iconActive} shadow-lg` 
                          : colors.iconInactive
                      )}>
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className={cn(
                          "text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 mb-1 sm:mb-2",
                          activeFeature === index ? `${colors.primary} font-bold sm:text-lg md:text-xl` : ''
                        )}>
                          {feature.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
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
                    activeFeature === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}>
                    <div className="text-center text-white max-w-full">
                      <div className={cn(
                        "w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 backdrop-blur-sm transition-all duration-700",
                        activeFeature === index ? "scale-100 rotate-0" : "scale-75 rotate-12"
                      )}>
                        {React.createElement(feature.icon, { 
                          className: cn(
                            "text-white transition-all duration-700",
                            "h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12"
                          )
                        })}
                      </div>
                      <h3 className={cn(
                        "text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 transition-all duration-700",
                        activeFeature === index ? "translate-y-0 opacity-100" : "translate-y-2 opacity-75"
                      )}>
                        {feature.title}
                      </h3>
                      <p className={cn(
                        "text-white/90 leading-relaxed text-xs sm:text-sm md:text-base transition-all duration-700 delay-100",
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

      {/* Products Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-white/50 dark:bg-black/50">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <div className="relative inline-block">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 lg:mb-6 bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent">
                Наша продукция
              </h2>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 lg:w-32 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4 md:mt-6">
              Широкий спектр высококачественных электронных компонентов и систем
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <Card 
                  key={index} 
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-500 glass-card hover:scale-105 flex flex-col h-full"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-orange-400/10 relative overflow-hidden">
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
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground mb-3 md:mb-4 text-xs sm:text-sm md:text-base flex-grow">{product.description}</p>
                    <Button asChild variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary mt-auto text-xs sm:text-sm">
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

      {/* Achievements Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="relative inline-block">
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent">
                Наши достижения
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 md:w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-6">
              Цифры, которые говорят о нашем успехе и надежности
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="text-center p-6 md:p-8 glass-card hover:shadow-xl transition-all duration-500 hover:scale-105"
              >
                <div className="text-2xl md:text-4xl font-bold text-primary mb-2">{achievement.number}</div>
                <div className="text-base md:text-lg font-semibold mb-2">{achievement.label}</div>
                <div className="text-muted-foreground text-sm">{achievement.description}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 md:py-20 px-4 bg-white/50 dark:bg-black/50">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="relative inline-block">
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent">
                Наши партнеры
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 md:w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-6">
              Мы сотрудничаем с ведущими компаниями по всему миру
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="bg-white/20 dark:bg-black/20 backdrop-blur-sm border border-white/30 dark:border-white/10 rounded-xl p-4 md:p-6 flex items-center justify-center hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 hover:scale-105"
              >
                <img src={partner.logo} alt={partner.name} className="max-w-full max-h-8 md:max-h-12 opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="container mx-auto text-center">
          <Card className="max-w-4xl mx-auto p-8 md:p-12 glass-card">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Готовы к сотрудничеству?</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
              Свяжитесь с нами для обсуждения ваших потребностей в электронных компонентах и автокомпонентах
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button asChild size="lg" className="btn-primary-smooth text-sm md:text-base">
                <Link to="/contact">
                  Связаться с нами
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white text-sm md:text-base">
                <Link to="/products">Каталог продукции</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}

export default Index;

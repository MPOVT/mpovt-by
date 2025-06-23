
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
      description: "Высокотехнологичное оборудование и автоматизированные производственные линии обеспечивают качество продукции мирового уровня.",
      fullDescription: "Наше предприятие оснащено самым современным высокотехнологичным оборудованием и полностью автоматизированными производственными линиями. Мы постоянно инвестируем в модернизацию производства, что позволяет нам выпускать продукцию, соответствующую самым высоким международным стандартам качества.",
      backgroundImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
    },
    {
      icon: Settings,
      title: "Инновационные технологии",
      description: "Постоянное внедрение передовых технологий и инновационных решений в производственные процессы.",
      fullDescription: "Мы активно внедряем самые передовые технологии и разрабатываем инновационные решения для совершенствования наших производственных процессов. Наша команда инженеров постоянно работает над созданием новых методов производства и улучшением существующих технологий.",
      backgroundImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop"
    },
    {
      icon: Shield,
      title: "Система качества",
      description: "Сертифицированная система менеджмента качества ISO 9001 гарантирует соответствие международным стандартам.",
      fullDescription: "Наша система менеджмента качества сертифицирована по стандарту ISO 9001, что гарантирует высочайший уровень качества всей выпускаемой продукции. Мы строго следим за соблюдением всех технологических процессов и постоянно совершенствуем систему контроля качества.",
      backgroundImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop"
    },
    {
      icon: Award,
      title: "Опыт и надежность",
      description: "Более 65 лет опыта в разработке и производстве электронных компонентов и систем.",
      fullDescription: "За более чем 65 лет работы мы накопили огромный опыт в области разработки и производства электронных компонентов и систем. Этот богатый опыт, передаваемый из поколения в поколение, является нашим главным конкурентным преимуществом и гарантией надежности для наших клиентов.",
      backgroundImage: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop"
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
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
      link: "/products/laptops"
    },
    {
      title: "Информационные системы",
      description: "Комплексные IT-решения для бизнеса",
      icon: FileText,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 text-center relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent">
              ОАО «МПОВТ»
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Ведущий производитель электронных компонентов и автокомпонентов с 1956 года
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <Button asChild size="lg" className="btn-primary-smooth">
                <Link to="/products">
                  Наша продукция
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Link to="/company">О компании</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-400 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150%] h-32 bg-gradient-to-r from-primary/5 via-orange-400/10 to-primary/5 blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent via-white/30 to-transparent dark:via-black/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">Инновационные решения для промышленности</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Современные технологии и многолетний опыт позволяют нам создавать продукцию высочайшего качества
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Feature Icons */}
            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={index}
                    className={cn(
                      "p-6 cursor-pointer transition-all duration-500 hover:shadow-xl glass-card animate-fade-in-left",
                      activeFeature === index 
                        ? 'border-primary/50 bg-primary/20 shadow-lg scale-105' 
                        : 'hover:scale-102'
                    )}
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => setActiveFeature(index)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={cn(
                        "p-3 rounded-xl transition-all duration-300",
                        activeFeature === index 
                          ? 'bg-primary/60 text-white shadow-lg' 
                          : 'bg-primary/20 text-primary'
                      )}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className={cn(
                          "text-lg font-semibold transition-all duration-300",
                          activeFeature === index ? 'text-primary font-bold text-xl' : ''
                        )}>
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Feature Content */}
            <div className="relative h-96 rounded-2xl overflow-hidden glass-card animate-fade-in-right">
              <div 
                key={activeFeature}
                className="absolute inset-0 transition-all duration-700 ease-in-out"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${features[activeFeature].backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'blur(1px)'
                }}
              />
              <div 
                key={`content-${activeFeature}`}
                className="absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out animate-fade-in-content"
              >
                <div className="text-center p-8 text-white">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                    {React.createElement(features[activeFeature].icon, { className: "h-12 w-12 text-white" })}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{features[activeFeature].title}</h3>
                  <p className="text-white/90 leading-relaxed">{features[activeFeature].fullDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 bg-white/50 dark:bg-black/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">Наша продукция</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Широкий спектр высококачественных электронных компонентов и систем
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <Card 
                  key={index} 
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-500 glass-card animate-bounce-in-soft hover:scale-105"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-orange-400/10 relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    <Button asChild variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                      <Link to={product.link}>
                        Подробнее
                        <ArrowRight className="ml-2 h-4 w-4" />
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
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">Наши достижения</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Цифры, которые говорят о нашем успехе и надежности
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="text-center p-8 glass-card hover:shadow-xl transition-all duration-500 animate-fade-in-up hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl font-bold text-primary mb-2">{achievement.number}</div>
                <div className="text-lg font-semibold mb-2">{achievement.label}</div>
                <div className="text-muted-foreground text-sm">{achievement.description}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 px-4 bg-white/50 dark:bg-black/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">Наши партнеры</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Мы сотрудничаем с ведущими компаниями по всему миру
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="bg-white/20 dark:bg-black/20 backdrop-blur-sm border border-white/30 dark:border-white/10 rounded-xl p-6 flex items-center justify-center hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 animate-fade-in-up hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img src={partner.logo} alt={partner.name} className="max-w-full max-h-12 opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Card className="max-w-4xl mx-auto p-12 glass-card animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6">Готовы к сотрудничеству?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Свяжитесь с нами для обсуждения ваших потребностей в электронных компонентах и автокомпонентах
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-primary-smooth">
                <Link to="/contact">
                  Связаться с нами
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
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

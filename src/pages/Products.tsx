
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Car, 
  Tractor, 
  Truck, 
  Laptop,
  Phone,
  Radio,
  FileText,
  Archive,
  ArrowRight,
  Settings,
  Shield,
  Award,
  ExternalLink
} from "lucide-react";

const Products = () => {
  const productCategories = [
    {
      title: "Автокомпоненты",
      description: "Электронные блоки управления для автомобильной промышленности",
      icon: Car,
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop",
      products: ["Блоки для автомобилей", "Блоки для тракторов", "Блоки для комбайнов", "Блоки для карьерных самосвалов"],
      link: "/products/car-blocks"
    },
    {
      title: "Средства связи",
      description: "Системы связи и телекоммуникационное оборудование",
      icon: Radio,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      products: ["Домофоны", "Специальная связь", "Радиосистемы", "Телекоммуникации"],
      link: "/products/special-communication"
    },
    {
      title: "Компьютерная техника",
      description: "Ноутбуки и компьютерное оборудование",
      icon: Laptop,
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop",
      products: ["Ноутбуки", "Планшеты", "Моноблоки", "Комплектующие"],
      link: "/products/laptops"
    },
    {
      title: "Информационные системы",
      description: "Комплексные IT-решения для бизнеса",
      icon: FileText,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      products: ["CRM системы", "ERP решения", "Системы безопасности", "Облачные сервисы"],
      link: "/products/information-systems"
    },
    {
      title: "Промышленное оборудование",
      description: "Металлические шкафы и промышленная мебель",
      icon: Archive,
      image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=400&h=300&fit=crop",
      products: ["Металлические шкафы", "Стеллажи", "Промышленная мебель", "Оборудование для офиса"],
      link: "/products/metal-cabinets"
    }
  ];

  const features = [
    {
      icon: Settings,
      title: "Высокое качество",
      description: "Продукция соответствует международным стандартам качества ISO 9001"
    },
    {
      icon: Shield,
      title: "Надежность",
      description: "Все изделия проходят строгий контроль качества и тестирование"
    },
    {
      icon: Award,
      title: "Инновации",
      description: "Постоянное внедрение новых технологий и современных решений"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900">
      <Navigation />
      
      <div className="pt-24 md:pt-28 lg:pt-32 pb-16 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12 lg:mb-16 animate-fade-in-up">
            <div className="relative inline-block">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 lg:mb-6 bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent">
                Наша продукция
              </h1>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 lg:w-32 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4 md:mt-6">
              Широкий спектр высококачественных электронных компонентов и систем для различных отраслей промышленности
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12 lg:mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="p-4 sm:p-6 md:p-8 text-center glass-card hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 lg:mb-6">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 md:mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base">{feature.description}</p>
                </Card>
              );
            })}
          </div>

          {/* Product Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {productCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={index} 
                  className="group overflow-hidden glass-card hover:shadow-2xl transition-all duration-500 animate-fade-in-left flex flex-col h-full"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-orange-400/10 relative overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6">
                      <div className="p-2 sm:p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 md:mb-3 text-primary group-hover:text-orange-500 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground mb-3 md:mb-4 text-xs sm:text-sm md:text-base leading-relaxed">
                      {category.description}
                    </p>
                    
                    <div className="mb-4 md:mb-6 flex-grow">
                      <h4 className="font-semibold mb-2 md:mb-3 text-xs sm:text-sm md:text-base">Включает в себя:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 md:gap-2">
                        {category.products.map((product, productIndex) => (
                          <div key={productIndex} className="flex items-center space-x-2">
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-muted-foreground text-xs sm:text-sm">{product}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-auto">
                      <Button asChild className="btn-primary-smooth flex-1 text-xs sm:text-sm">
                        <a href={category.link}>
                          Подробнее
                          <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white text-xs sm:text-sm">
                        <a href={category.link}>
                          <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Quick Navigation */}
          <Card className="mt-8 md:mt-12 lg:mt-16 p-4 sm:p-6 md:p-8 text-center glass-card animate-fade-in-up">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 lg:mb-6">Быстрый переход к продукции</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3 md:gap-4 mb-4 md:mb-6">
              {productCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Button 
                    key={index}
                    asChild 
                    variant="outline" 
                    size="sm" 
                    className="h-auto p-3 md:p-4 flex flex-col items-center space-y-1 md:space-y-2 border-primary/30 hover:bg-primary hover:text-white transition-all duration-300 text-xs sm:text-sm"
                  >
                    <a href={category.link}>
                      <Icon className="h-4 w-4 md:h-5 md:w-5" />
                      <span className="font-medium text-center leading-tight">{category.title}</span>
                    </a>
                  </Button>
                );
              })}
            </div>
          </Card>

          {/* CTA Section */}
          <Card className="mt-8 md:mt-12 lg:mt-16 p-6 sm:p-8 md:p-12 text-center glass-card animate-fade-in-up">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 lg:mb-6">Нужна консультация?</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 md:mb-6 lg:mb-8 max-w-2xl mx-auto">
              Наши специалисты помогут подобрать оптимальное решение для ваших задач
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button asChild size="lg" className="btn-primary-smooth text-sm md:text-base">
                <a href="/contact">
                  Связаться с нами
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white text-sm md:text-base">
                <a href="/company">О компании</a>
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;

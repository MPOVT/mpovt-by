
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { 
  Car, 
  Laptop, 
  Radio, 
  FileText,
  Truck,
  Tractor,
  ArrowRight,
  Shield,
  Award,
  Settings,
  Phone
} from "lucide-react";

const Products = () => {
  const productCategories = [
    {
      title: "Автокомпоненты",
      description: "Современные электронные блоки управления для автомобильной промышленности",
      icon: Car,
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop",
      products: [
        "Блоки управления двигателем",
        "Системы ABS и ESP",
        "Блоки комфорта",
        "Приборные панели"
      ],
      link: "/products/car-blocks"
    },
    {
      title: "Промышленная техника",
      description: "Электронные системы для тракторов, комбайнов и карьерных самосвалов",
      icon: Tractor,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      products: [
        "Блоки для тракторов",
        "Системы для комбайнов",
        "Управление карьерными самосвалами",
        "Промышленная автоматика"
      ],
      link: "/products/tractor-blocks"
    },
    {
      title: "Компьютерная техника",
      description: "Ноутбуки и компьютерное оборудование для различных сфер применения",
      icon: Laptop,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      products: [
        "Промышленные ноутбуки",
        "Защищенные планшеты",
        "Встраиваемые системы",
        "Серверное оборудование"
      ],
      link: "/products/laptops"
    },
    {
      title: "Средства связи",
      description: "Системы связи и телекоммуникационное оборудование",
      icon: Radio,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      products: [
        "Радиостанции",
        "Системы диспетчерской связи",
        "Телекоммуникационное оборудование",
        "Специальная связь"
      ],
      link: "/products/special-communication"
    },
    {
      title: "Информационные системы",
      description: "Комплексные IT-решения и программное обеспечение для бизнеса",
      icon: FileText,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      products: [
        "Системы управления предприятием",
        "Базы данных",
        "Веб-приложения",
        "Мобильные решения"
      ],
      link: "/products/information-systems"
    },
    {
      title: "Дополнительные продукты",
      description: "Домофоны, металлические шкафы и другие изделия",
      icon: Phone,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      products: [
        "Видеодомофоны",
        "Системы контроля доступа",
        "Металлические шкафы",
        "Электротехнические изделия"
      ],
      link: "/products/intercoms"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Сертифицированное качество",
      description: "Вся продукция соответствует международным стандартам ISO 9001"
    },
    {
      icon: Award,
      title: "Многолетний опыт",
      description: "Более 65 лет опыта в разработке и производстве электронных систем"
    },
    {
      icon: Settings,
      title: "Индивидуальный подход",
      description: "Разработка решений под специфические требования заказчика"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Наша продукция
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Широкий спектр высококачественных электронных компонентов и систем для различных отраслей промышленности
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 text-center glass-card hover:shadow-xl transition-all duration-500 animate-fade-in-up hover:scale-105"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>

          {/* Product Categories */}
          <div className="space-y-16">
            {productCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={index}
                  className={`overflow-hidden glass-card hover:shadow-2xl transition-all duration-500 animate-fade-in-up hover:scale-[1.02] ${
                    index % 2 === 0 ? '' : ''
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Image */}
                    <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <img 
                        src={category.image}
                        alt={category.title}
                        className="w-full h-80 lg:h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-6 left-6">
                        <Icon className="h-12 w-12 text-white" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <h3 className="text-3xl font-bold mb-4 text-primary">{category.title}</h3>
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {category.description}
                      </p>
                      
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold mb-4">Основные изделия:</h4>
                        <ul className="space-y-2">
                          {category.products.map((product, productIndex) => (
                            <li key={productIndex} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <span className="text-muted-foreground">{product}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button asChild className="btn-primary-smooth w-fit">
                        <Link to={category.link}>
                          Подробнее о продукции
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <Card className="mt-16 p-12 text-center glass-card animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-6">Нужна консультация?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Наши специалисты помогут подобрать оптимальное решение для ваших задач
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-primary-smooth">
                <Link to="/contact">
                  Связаться с нами
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Link to="/company">О компании</Link>
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


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
  Radio,
  Archive,
  ArrowRight,
  Zap,
  Shield,
  Award,
  CheckCircle
} from "lucide-react";

const Products = () => {
  const productCategories = [
    {
      title: "Блоки для автомобилей",
      description: "Высокотехнологичные электронные блоки управления для современной автомобильной промышленности",
      icon: Car,
      path: "/products/car-blocks",
      color: "from-blue-500 to-cyan-500",
      features: ["ECU блоки управления", "Системы впрыска топлива", "ABS модули безопасности", "Диагностические системы"]
    },
    {
      title: "Блоки для тракторов",
      description: "Специализированные решения для повышения эффективности сельскохозяйственной техники",
      icon: Tractor,
      path: "/products/tractor-blocks",
      color: "from-green-500 to-emerald-500",
      features: ["Управление двигателем", "GPS-навигационные системы", "Системы автопилота", "Мониторинг параметров"]
    },
    {
      title: "Блоки для комбайнов",
      description: "Высокотехнологичные системы автоматизации для современной уборочной техники",
      icon: Archive,
      path: "/products/combine-blocks",
      color: "from-yellow-500 to-orange-500",
      features: ["Мониторинг урожайности", "Автоматизация процессов", "Диагностика состояния", "Оптимизация работы"]
    },
    {
      title: "Блоки для карьерных самосвалов",
      description: "Надежные и долговечные решения для экстремальных условий тяжелой промышленности",
      icon: Truck,
      path: "/products/dump-truck-blocks",
      color: "from-red-500 to-pink-500",
      features: ["Системы безопасности", "Телематические решения", "Мониторинг нагрузки", "Контроль производительности"]
    },
    {
      title: "Промышленные ноутбуки",
      description: "Защищенные вычислительные решения для работы в сложных промышленных условиях",
      icon: Laptop,
      path: "/products/laptops",
      color: "from-purple-500 to-indigo-500",
      features: ["Защищенные корпуса IP67", "Промышленные стандарты", "Высокая надежность", "Расширенная гарантия"]
    },
    {
      title: "Системы домофонной связи",
      description: "Современные IP-системы домофонной связи с видеонаблюдением и интеграцией",
      icon: Radio,
      path: "/products/intercoms",
      color: "from-teal-500 to-cyan-500",
      features: ["IP-технологии связи", "HD видеосвязь", "Мобильная интеграция", "Облачные сервисы"]
    }
  ];

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
              Выберите категорию продукции для получения подробной информации о наших инновационных решениях
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

          {/* Product Categories Grid */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
              Категории продукции
            </h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              Нажмите на любую категорию для перехода к детальной информации о продукции
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Card 
                    key={index} 
                    className="group overflow-hidden glass-card border-white/40 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 cursor-pointer animate-fade-in-up h-full flex flex-col"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="p-6 flex flex-col h-full">
                      {/* Icon with gradient background */}
                      <div className="relative mb-6">
                        <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-20 rounded-2xl blur-xl`}></div>
                        <div className={`relative p-4 bg-gradient-to-r ${category.color} rounded-2xl w-fit`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                        {category.description}
                      </p>
                      
                      {/* Features */}
                      <div className="space-y-3 mb-8">
                        {category.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Button */}
                      <Button 
                        className="w-full btn-primary-smooth group-hover:bg-primary/90 transition-all duration-300 mt-auto"
                        onClick={() => window.location.href = category.path}
                      >
                        Подробнее
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Call to Action */}
          <Card className="p-12 text-center glass-card border-white/40 bg-gradient-to-r from-primary/5 via-orange-500/5 to-primary/5 animate-fade-in-up">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Нужна консультация?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Наши специалисты помогут подобрать оптимальное решение для ваших задач
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-primary-smooth text-lg px-8 py-4">
                  Связаться с нами
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-white">
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

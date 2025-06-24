
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
  Star,
  Award,
  Users,
  TrendingUp
} from "lucide-react";

const Products = () => {
  const productCategories = [
    {
      title: "Автокомпоненты",
      description: "Высокотехнологичные электронные блоки управления для автомобильной промышленности",
      icon: Car,
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop",
      features: ["ECU блоки", "Системы впрыска", "ABS модули", "Климат-контроль"],
      stats: "500+ проектов",
      gradient: "from-blue-500/20 via-cyan-500/20 to-blue-600/20"
    },
    {
      title: "Сельхозтехника",
      description: "Специализированные решения для современного сельского хозяйства",
      icon: Tractor,
      image: "https://images.unsplash.com/photo-1574906670088-2c8e77b6f75b?w=600&h=400&fit=crop",
      features: ["Управление двигателем", "GPS-системы", "Мониторинг урожая", "Автопилот"],
      stats: "200+ машин",
      gradient: "from-green-500/20 via-emerald-500/20 to-green-600/20"
    },
    {
      title: "Промышленный транспорт",
      description: "Надежные решения для тяжелой промышленной техники",
      icon: Truck,
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop",
      features: ["Системы безопасности", "Телематика", "Диагностика", "Мониторинг"],
      stats: "150+ единиц",
      gradient: "from-orange-500/20 via-red-500/20 to-orange-600/20"
    },
    {
      title: "Средства связи",
      description: "Профессиональные системы связи и телекоммуникаций",
      icon: Radio,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      features: ["Домофонные системы", "Радиосвязь", "IP-телефония", "Оповещение"],
      stats: "1000+ устройств",
      gradient: "from-purple-500/20 via-pink-500/20 to-purple-600/20"
    },
    {
      title: "Компьютерная техника",
      description: "Современные вычислительные решения для промышленности",
      icon: Laptop,
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&h=400&fit=crop",
      features: ["Защищенные ноутбуки", "Промышленные планшеты", "Embedded системы", "IoT решения"],
      stats: "300+ устройств",
      gradient: "from-indigo-500/20 via-blue-500/20 to-indigo-600/20"
    },
    {
      title: "Промышленное оборудование",
      description: "Металлические шкафы и специализированная мебель",
      icon: Archive,
      image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=600&h=400&fit=crop",
      features: ["Серверные шкафы", "Климатические шкафы", "Защитные корпуса", "Модульные системы"],
      stats: "800+ изделий",
      gradient: "from-gray-500/20 via-slate-500/20 to-gray-600/20"
    }
  ];

  const companyStats = [
    {
      icon: Users,
      number: "15+",
      label: "лет опыта",
      description: "успешной работы на рынке"
    },
    {
      icon: Star,
      number: "1000+",
      label: "проектов",
      description: "реализовано успешно"
    },
    {
      icon: Award,
      number: "50+",
      label: "видов продукции",
      description: "в нашем портфолио"
    },
    {
      icon: TrendingUp,
      number: "24/7",
      label: "поддержка",
      description: "для наших клиентов"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 dark:from-orange-950 dark:via-orange-900 dark:to-orange-800">
      <Navigation />
      
      <div className="pt-28 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          
          {/* Hero Section */}
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-block relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-orange-500/30 rounded-full blur-3xl scale-150"></div>
              <h1 className="relative text-5xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent">
                Наша продукция
              </h1>
            </div>
            <p className="text-xl md:text-3xl text-muted-foreground max-w-5xl mx-auto leading-relaxed font-light">
              Инновационные решения для промышленности — от автокомпонентов до информационных систем
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              {companyStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index}
                    className="glass-card p-6 text-center border-white/40 hover:border-primary/30 transition-all duration-500 animate-fade-in-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="p-3 bg-primary/20 rounded-xl">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="font-semibold mb-1">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">{stat.description}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Products Grid */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                Категории продукции
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Выберите интересующую вас категорию для получения подробной информации
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {productCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Card 
                    key={index} 
                    className="group overflow-hidden glass-card border-white/40 hover:border-primary/30 hover:shadow-2xl transition-all duration-700 animate-fade-in-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="relative overflow-hidden h-64">
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-80`}></div>
                      <img 
                        src={category.image} 
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Floating Icon */}
                      <div className="absolute top-6 left-6">
                        <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 shadow-lg">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      
                      {/* Stats Badge */}
                      <div className="absolute top-6 right-6">
                        <div className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/30">
                          {category.stats}
                        </div>
                      </div>

                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      
                      {/* Title on image */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {category.title}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                        {category.description}
                      </p>
                      
                      {/* Features */}
                      <div className="grid grid-cols-2 gap-3 mb-8">
                        {category.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* CTA Button */}
                      <Button 
                        className="w-full btn-primary-smooth group-hover:bg-primary/90 transition-all duration-300 text-lg py-6"
                      >
                        Узнать подробнее
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Call to Action */}
          <Card className="p-8 md:p-16 text-center glass-card border-white/40 bg-gradient-to-r from-primary/10 via-orange-500/10 to-primary/10 animate-fade-in-up">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center p-4 bg-primary/20 rounded-2xl mb-8">
                <Star className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Готовы найти идеальное решение?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                Наши эксперты помогут подобрать оптимальную продукцию для ваших задач. 
                Получите персональную консультацию и техническое сопровождение.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="btn-primary-smooth text-lg px-10 py-4">
                  Получить консультацию
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-10 py-4 border-primary text-primary hover:bg-primary hover:text-white">
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

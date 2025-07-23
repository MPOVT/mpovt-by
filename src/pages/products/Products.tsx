import React from "react";
import Footer from "@/components/Footer";
import { PageHero, ProductCard, CTASection, AnimatedBackground } from "@/components/common";
import { 
  Laptop,
  Monitor,
  Tablet,
  HardDrive,
  Car,
  Radio,
  FileText
} from "lucide-react";

const Products = () => {
  const priorityProducts = [
    {
      title: "ПК H-PC",
      description: "Высокопроизводительные потребительские компьютеры для критически важных задач в экстремальных условиях",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop",
      link: "/products/h-pc",
      features: ["IP65 защита", "Температура -40°C до +85°C", "Модульная архитектура", "Потребительские интерфейсы"]
    },
    {
      title: "Ноутбуки H-Book",
      description: "Мобильные защищенные решения для полевых условий и критических миссий",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&h=800&fit=crop",
      link: "/products/laptops",
      features: ["Ударопрочный корпус", "20ч автономность", "Водонепроницаемость", "Горячая замена батарей"]
    },
    {
      title: "Мониторы H",
      description: "Профессиональные дисплеи повышенной надежности для потребительского мониторинга",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=crop",
      link: "/products/h-monitors",
      features: ["Антибликовые покрытия", "Сенсорные технологии", "Широкие углы обзора", "Высокая яркость"]
    },
    {
      title: "Планшеты H-Tab",
      description: "Компактные мобильные решения для управления производством и мониторинга",
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=1200&h=800&fit=crop",
      link: "/products/h-tab",
      features: ["Защита IP67", "Работа в перчатках", "Беспроводная связь", "Емкостные экраны"]
    },
    {
      title: "Накопители H-Storage",
      description: "Высокоскоростные твердотельные накопители для потребительских применений",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop",
      link: "/products/h-storage",
      features: ["NVMe интерфейс", "Расширенный диапазон температур", "Высокая износостойкость", "Потребительская надежность"]
    }
  ];

  const secondaryProducts = [
    {
      title: "Автокомпоненты",
      description: "Электронные блоки управления для автомобильной промышленности",
      icon: Car,
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop",
      link: "/products/car-blocks",
      features: ["Высокая надежность", "Соответствие стандартам", "Долговечность", "Простота интеграции"]
    },
    {
      title: "Средства связи",
      description: "Системы связи и телекоммуникационное оборудование",
      icon: Radio,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      link: "/products/special-communication",
      features: ["Защищенная связь", "Высокое качество сигнала", "Широкий диапазон", "Энергоэффективность"]
    },
    {
      title: "Информационные системы",
      description: "Комплексные IT-решения для бизнеса",
      icon: FileText,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      link: "/products/information-systems",
      features: ["Масштабируемость", "Безопасность данных", "Интуитивный интерфейс", "Техническая поддержка"]
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        title="Продукция"
        description="Комплексные решения для современных технологических вызовов"
        backgroundVariant="default"
      />

      {/* Priority Products Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-black via-slate-900/50 to-black relative overflow-hidden">
        <AnimatedBackground variant="hero" />
        
        <div className="relative z-10">
          <div className="text-center mb-12 md:mb-16 px-4">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent mb-8">
              Флагманская продукция
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Революционные решения потребительской вычислительной техники нового поколения
            </p>
          </div>

          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
              {priorityProducts.map((product, index) => (
                <ProductCard
                  key={index}
                  title={product.title}
                  description={product.description}
                  image={product.image}
                  link={product.link}
                  features={product.features}
                  variant="primary"
                  animationDelay={index * 200}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Products Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-black relative">
        <AnimatedBackground variant="section" />
        
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
            {secondaryProducts.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                image={product.image}
                icon={product.icon}
                link={product.link}
                features={product.features}
                variant="secondary"
                animationDelay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Нужна консультация?"
        description="Наши эксперты помогут подобрать идеальное решение для ваших бизнес-задач"
        primaryButtonText="Связаться с нами"
        primaryButtonLink="/contact"
        secondaryButtonText="На главную"
        secondaryButtonLink="/"
      />

      <Footer />
    </div>
  );
};

export default Products;

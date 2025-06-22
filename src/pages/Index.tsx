
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Factory, Cpu, Truck, Award, TrendingUp, Users } from "lucide-react";

const achievements = [
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Рост производства в 10 раз",
    description: "За последние 2 года предприятие значительно увеличило объемы производства"
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "85% инновационной продукции",
    description: "Доля инновационной продукции превысила 85% от общего объема"
  },
  {
    icon: <Factory className="h-8 w-8 text-primary" />,
    title: "Лидер отрасли",
    description: "Первое место в социально-экономическом соревновании в сфере промышленности"
  }
];

const partners = [
  "БЕЛАЗ", "МАЗ", "МТЗ", "Гомсельмаш", "ПТЗ", "КАМАЗ"
];

const products = [
  {
    title: "Автокомпоненты",
    description: "Блоки управления для автомобилей, тракторов и спецтехники",
    image: "https://images.unsplash.com/photo-1486753484588-804d0bf8c36d?w=800&h=600&fit=crop",
    link: "/products/car-blocks"
  },
  {
    title: "Компьютерная техника",
    description: "Ноутбуки и компоненты на собственной платформе",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=600&fit=crop",
    link: "/products/laptops"
  },
  {
    title: "Средства связи", 
    description: "Домофоны, системы специальной связи и информационные системы",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
    link: "/products/intercoms"
  }
];

export default function Index() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col page-transition-enter page-transition-enter-active">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-primary/5 overflow-hidden">
          <div className="container relative z-10 pt-20">
            <div className="text-center max-w-4xl mx-auto">
              <div className="glass-card p-8 md:p-12 animate-fade-in">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  ОАО «МПОВТ»
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Отечественный производитель изделий промышленной электроники, 
                  автокомпонентов и компьютерной техники
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="btn-primary">
                    <Link to="/products/car-blocks">Наша продукция</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="glass-card border-white/30">
                    <Link to="/company/cooperation">О компании</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow [animation-delay:2s]" />
          </div>
        </section>

        {/* About Section */}
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in [animation-delay:100ms]">
                <span className="text-sm text-primary font-medium uppercase tracking-wider">
                  О предприятии
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                  Инновационные решения для промышленности
                </h2>
                <p className="text-muted-foreground mb-6">
                  ОАО «МПОВТ» является отечественным производителем изделий промышленной электроники, 
                  автокомпонентов, компьютерной техники и средств связи на интеллектуальной платформе.
                </p>
                <p className="text-muted-foreground mb-8">
                  Мы активно сотрудничаем с ведущими предприятиями системы Минпрома и развиваем 
                  кооперационное взаимодействие с российскими партнерами.
                </p>
                <Button asChild className="btn-primary">
                  <Link to="/company/cooperation">
                    Подробнее <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="relative animate-fade-in [animation-delay:300ms]">
                <div className="glass-card p-6 rounded-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
                    alt="Производственные мощности" 
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">Современное производство</h3>
                  <p className="text-muted-foreground">
                    Высокотехнологичное оборудование и строгий контроль качества на всех этапах производства
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="section bg-primary/5">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                Наши достижения
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Результаты работы предприятия
              </h2>
              <p className="text-muted-foreground">
                За последние годы МПОВТ демонстрирует устойчивый рост и развитие
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="glass-card p-6 rounded-xl animate-fade-in text-center"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-primary/10">
                      {achievement.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="section">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                Наша продукция
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Основные направления производства
              </h2>
              <p className="text-muted-foreground">
                Широкий спектр высококачественной продукции для различных отраслей промышленности
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Link 
                  key={index}
                  to={product.link}
                  className="group animate-fade-in"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="glass-card p-6 rounded-xl transition-all duration-300 group-hover:scale-105">
                    <div className="aspect-video rounded-lg overflow-hidden mb-4">
                      <img 
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    <div className="flex items-center text-primary font-medium">
                      Подробнее <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="section bg-card">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                Наши партнеры
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Кооперационное взаимодействие
              </h2>
              <p className="text-muted-foreground">
                Мы сотрудничаем с ведущими предприятиями автомобильной и сельскохозяйственной техники
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8">
              {partners.map((partner, index) => (
                <div 
                  key={index}
                  className="glass-card px-8 py-4 rounded-lg animate-fade-in"
                  style={{ animationDelay: `${(index + 1) * 50}ms` }}
                >
                  <span className="text-lg font-semibold">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative section bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Готовы к сотрудничеству?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Свяжитесь с нами для обсуждения возможностей кооперации и поставок нашей продукции
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="btn-primary">
                  <Link to="/contact">Связаться с нами</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="glass-card border-white/30">
                  <Link to="/company/cooperation">Узнать о кооперации</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

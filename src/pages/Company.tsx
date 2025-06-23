
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { 
  Factory, 
  Users, 
  Award, 
  Target,
  ArrowRight,
  Building,
  Calendar,
  Globe,
  TrendingUp
} from "lucide-react";

const Company = () => {
  const milestones = [
    {
      year: "1956",
      title: "Основание предприятия",
      description: "Союзным правительством принято решение о строительстве в Минске завода по производству электронных вычислительных машин"
    },
    {
      year: "1970-1980",
      title: "Период роста",
      description: "Активное развитие производства и расширение номенклатуры выпускаемой продукции"
    },
    {
      year: "1990-2000",
      title: "Модернизация",
      description: "Внедрение новых технологий и переход на современные стандарты качества"
    },
    {
      year: "2000-2024",
      title: "Современный этап",
      description: "Сертификация по ISO 9001, расширение экспорта и внедрение инновационных решений"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Качество",
      description: "Неуклонное следование высоким стандартам качества в каждом изделии"
    },
    {
      icon: Users,
      title: "Команда",
      description: "Профессиональная команда специалистов с богатым опытом"
    },
    {
      icon: TrendingUp,
      title: "Инновации",
      description: "Постоянное развитие и внедрение передовых технологий"
    },
    {
      icon: Globe,
      title: "Надежность",
      description: "Более 65 лет успешной работы и доверие клиентов по всему миру"
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
              О компании
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Богатая история, накопленный опыт и стремление к совершенству
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Company Image */}
            <div className="animate-fade-in-left">
              <Card className="overflow-hidden glass-card">
                <img 
                  src="https://mpovt.by/gallery/%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9%20%D0%B2%D1%85%D0%BE%D0%B42-1.jpg?ts=1746513904" 
                  alt="Главный офис ОАО МПОВТ"
                  className="w-full h-96 object-cover"
                />
              </Card>
            </div>

            {/* Company Description */}
            <div className="space-y-6 animate-fade-in-right">
              <Card className="p-8 glass-card">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-primary/20 rounded-xl">
                    <Building className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold">Наша история</h2>
                </div>
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>
                    ОАО "МПОВТ" начинает свою историю в 1956 году, когда союзным правительством было принято решение о строительстве в Минске завода по производству электронных вычислительных машин. Богатая и насыщенная событиями история предприятия - это мощный фундамент для дальнейшего роста и развития.
                  </p>
                  <p>
                    За годы работы нам удалось создать историю, сохранить знания и опыт. Но сегодня время ставит перед нами новые цели. Это значит, что мы находимся в непрерывном поиске проектов и привлекаем для этого сильных партнеров, с которыми можно развиваться и расти.
                  </p>
                  <p>
                    В основе решения поставленных задач: обеспечение удовлетворения потребителей от покупки любого нашего изделия или услуги, упор на востребованные рынком разработки, обеспечение заданного показателя по прибыли.
                  </p>
                  <p>
                    Быстро меняющийся рынок, ужесточение конкуренции и соперничества заставляют нас сегодня делать еще более уверенные шаги вперед для развития своих преимуществ.
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">Основные вехи развития</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {milestones.map((milestone, index) => (
                <Card 
                  key={index}
                  className="p-6 glass-card hover:shadow-xl transition-all duration-500 animate-fade-in-up hover:scale-105"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{milestone.year}</h3>
                    <h4 className="text-lg font-semibold mb-3">{milestone.title}</h4>
                    <p className="text-muted-foreground text-sm">{milestone.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">Наши ценности</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card 
                    key={index}
                    className="p-6 text-center glass-card hover:shadow-xl transition-all duration-500 animate-fade-in-up hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <Card className="p-12 text-center glass-card animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-6">Хотите узнать больше?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Изучите наши подразделения, системы качества и возможности сотрудничества
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Link to="/company/quality-management">
                  Система качества
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Link to="/company/cooperation">
                  Кооперация
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Link to="/company/vacancies">
                  Вакансии
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild className="btn-primary-smooth">
                <Link to="/contact">
                  Связаться с нами
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
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

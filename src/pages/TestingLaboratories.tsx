
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  ArrowRight,
  FlaskConical,
  Microscope,
  Settings,
  Award,
  CheckCircle,
  Users,
  Clock,
  Shield
} from "lucide-react";

const TestingLaboratories = () => {
  const laboratories = [
    {
      title: "Лаборатория испытаний электроники",
      description: "Комплексное тестирование электронных компонентов и устройств",
      icon: Settings,
      features: [
        "Тестирование на устойчивость к внешним воздействиям",
        "Климатические испытания",
        "Испытания на вибрацию и удар",
        "Электромагнитная совместимость"
      ],
      accreditations: ["ISO 9001", "ГОСТ Р", "IEC"]
    },
    {
      title: "Химическая лаборатория",
      description: "Анализ материалов и веществ на соответствие стандартам",
      icon: FlaskConical,
      features: [
        "Химический анализ материалов",
        "Определение состава веществ",
        "Контроль качества сырья",
        "Экологическая экспертиза"
      ],
      accreditations: ["ГОСТ", "ASTM", "ISO 14001"]
    },
    {
      title: "Лаборатория механических испытаний",
      description: "Испытания прочности и долговечности материалов",
      icon: Microscope,
      features: [
        "Испытания на растяжение",
        "Испытания на сжатие",
        "Усталостные испытания",
        "Испытания на твердость"
      ],
      accreditations: ["ISO 9001", "ASTM", "EN"]
    }
  ];

  const advantages = [
    {
      icon: Award,
      title: "Аккредитация",
      description: "Все лаборатории имеют государственную аккредитацию"
    },
    {
      icon: Users,
      title: "Опытные специалисты",
      description: "Команда высококвалифицированных экспертов"
    },
    {
      icon: Clock,
      title: "Быстрые сроки",
      description: "Оперативное проведение испытаний и выдача результатов"
    },
    {
      icon: Shield,
      title: "Надежность",
      description: "Точные и достоверные результаты испытаний"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 md:pt-44 lg:pt-48 pb-12 md:pb-16 lg:pb-20 px-4 text-center relative overflow-hidden bg-black">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/6 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-128 md:h-128 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl font-black mb-6 md:mb-8 text-white/95 leading-tight">
              Испытательные лаборатории
            </h1>
            <p className="text-lg md:text-xl xl:text-2xl text-white/70 mb-6 md:mb-8">
              Профессиональные испытания и контроль качества продукции
            </p>
          </div>
        </div>
      </section>

      {/* Laboratories Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-black via-slate-900/50 to-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent mb-8">
              Наши лаборатории
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Современное оборудование и высококвалифицированные специалисты
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {laboratories.map((lab, index) => {
              const Icon = lab.icon;
              return (
                <Card 
                  key={index}
                  className="group overflow-hidden bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-700 hover:shadow-2xl hover:shadow-slate-900/50 h-full"
                >
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 p-3 rounded-xl mr-4">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{lab.title}</h3>
                    </div>
                    
                    <p className="text-slate-300 mb-6 flex-grow">{lab.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Виды испытаний:</h4>
                      <ul className="space-y-2">
                        {lab.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-slate-300">
                            <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-auto">
                      <h4 className="text-sm font-semibold text-white mb-2">Аккредитации:</h4>
                      <div className="flex flex-wrap gap-2">
                        {lab.accreditations.map((acc, accIndex) => (
                          <span 
                            key={accIndex}
                            className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {acc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 md:py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/6 right-1/6 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/6 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mb-8">
              Наши преимущества
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Почему стоит выбрать наши испытательные лаборатории
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <Card 
                  key={index}
                  className="group text-center p-6 bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-emerald-500/40 transition-all duration-500 hover:scale-105"
                >
                  <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{advantage.title}</h3>
                  <p className="text-slate-300">{advantage.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 lg:py-28 relative bg-black overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white/95">
              Нужны испытания?
            </h2>
            <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              Свяжитесь с нами для консультации по проведению испытаний вашей продукции
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="btn-primary text-lg px-8 py-4">
                <Link to="/contact">
                  Связаться с нами
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 bg-white/5 hover:bg-white/10 text-white hover:text-white text-lg px-8 py-4">
                <Link to="/services">Все услуги</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TestingLaboratories;

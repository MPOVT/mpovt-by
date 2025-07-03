
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  ArrowRight,
  FlaskConical,
  Settings,
  Cpu,
  Flame,
  Package,
  Zap,
  Waves,
  Wrench,
  Target,
  Shield,
  Cog,
  Award,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const certifications = [
    "БГЦА - Белорусский государственный центр аккредитации",
    "EA BLA - Европейское сотрудничество по аккредитации (испытания, калибровки, сертификация)",
    "ILAC MRA - Международное сотрудничество лабораторных аккредитаций",
    "IAF MLA - Международный форум по аккредитации (сертификация продукции и систем)"
  ];

  const additionalServices = [
    {
      title: "Металлообработка",
      description: "Высокоточная обработка металлических деталей на современном оборудовании с ЧПУ",
      icon: Settings,
      color: "from-blue-500 to-cyan-500",
      iconColor: "text-blue-400"
    },
    {
      title: "Термообработка", 
      description: "Специализированная термическая обработка для улучшения свойств материалов",
      icon: Flame,
      color: "from-red-500 to-orange-500",
      iconColor: "text-red-400"
    },
    {
      title: "Литье пластика",
      description: "Производство пластиковых изделий методом литья под давлением",
      icon: Package,
      color: "from-green-500 to-emerald-500",
      iconColor: "text-green-400"
    },
    {
      title: "SMD-монтаж",
      description: "Поверхностный монтаж электронных компонентов с высокой точностью",
      icon: Cpu,
      color: "from-purple-500 to-violet-500",
      iconColor: "text-purple-400"
    },
    {
      title: "Волновая пайка",
      description: "Автоматизированная пайка электронных компонентов волновым методом",
      icon: Waves,
      color: "from-teal-500 to-cyan-500",
      iconColor: "text-teal-400"
    },
    {
      title: "Ручной монтаж",
      description: "Прецизионный ручной монтаж сложных электронных узлов",
      icon: Wrench,
      color: "from-amber-500 to-yellow-500",
      iconColor: "text-amber-400"
    },
    {
      title: "Селективная пайка",
      description: "Точечная пайка компонентов с использованием селективного оборудования",
      icon: Target,
      color: "from-pink-500 to-rose-500",
      iconColor: "text-pink-400"
    },
    {
      title: "Полимерное покрытие",
      description: "Защитные и декоративные полимерные покрытия для различных изделий",
      icon: Shield,
      color: "from-indigo-500 to-blue-500",
      iconColor: "text-indigo-400"
    },
    {
      title: "Прессование термоактивных материалов",
      description: "Формование изделий из термоактивных полимерных материалов",
      icon: Cog,
      color: "from-slate-500 to-gray-500",
      iconColor: "text-slate-400"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 md:pt-44 lg:pt-48 pb-12 md:pb-16 lg:pb-20 px-4 text-center relative overflow-hidden bg-black">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/6 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl font-black mb-6 md:mb-8 text-white/95 leading-tight">
              Услуги
            </h1>
            <p className="text-lg md:text-xl xl:text-2xl text-white/70 mb-6 md:mb-8">
              Профессиональные услуги для вашего бизнеса
            </p>
          </div>
        </div>
      </section>

      {/* Main Service - Testing Laboratories */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-black via-slate-900/50 to-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 p-4 rounded-2xl">
                <FlaskConical className="w-12 h-12 text-cyan-400" />
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                Испытательные лаборатории
              </h2>
            </div>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              Комплексные испытания и контроль качества с международной аккредитацией
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="group overflow-hidden bg-gradient-to-br from-slate-800/20 to-slate-900/40 backdrop-blur-xl border border-slate-700/30 hover:border-cyan-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Государственная аккредитация</h3>
                    <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                      Наша лаборатория имеет полную государственную аккредитацию и международное признание. 
                      Мы обеспечиваем комплексные испытания промышленной продукции с выдачей официальных сертификатов соответствия.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      {certifications.map((cert, index) => (
                        <div key={index} className="flex items-start text-slate-300 group/cert">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mr-4 mt-2 flex-shrink-0 group-hover/cert:bg-cyan-400 transition-colors"></div>
                          <span className="leading-relaxed">{cert}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      asChild
                      size="lg"
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
                    >
                      <Link to="/services/testing-laboratories">
                        Подробнее об испытательных лабораториях
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="relative">
                    <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-8 rounded-3xl border border-cyan-500/20">
                      <div className="flex items-center mb-6">
                        <Award className="w-8 h-8 text-cyan-400 mr-3" />
                        <h4 className="text-2xl font-bold text-white">Виды испытаний</h4>
                      </div>
                      <div className="space-y-4">
                        {[
                          "Электронные испытания и EMC тестирование",
                          "Химический и материаловедческий анализ", 
                          "Механические и климатические испытания",
                          "Сертификация продукции и систем качества",
                          "Калибровка измерительного оборудования",
                          "Сертификация персонала"
                        ].map((service, index) => (
                          <div key={index} className="flex items-center text-slate-300">
                            <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                            <span>{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-black via-slate-900/30 to-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent mb-8">
              Производственные услуги
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Полный спектр современных производственных и технологических решений
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index}
                  className="group overflow-hidden bg-slate-800/20 backdrop-blur-xl border border-slate-700/30 hover:border-slate-600/50 transition-all duration-500 hover:shadow-xl hover:shadow-slate-900/50 hover:-translate-y-2"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="p-6 h-full flex flex-col">
                    <div className="mb-6">
                      <div className={`bg-gradient-to-r ${service.color}/20 group-hover:${service.color}/30 p-4 rounded-2xl transition-all duration-500 inline-block group-hover:scale-110`}>
                        <Icon className={`w-8 h-8 ${service.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white/90 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-300 leading-relaxed flex-grow group-hover:text-slate-200 transition-colors">
                      {service.description}
                    </p>
                    
                    <div className="mt-6 pt-4 border-t border-slate-700/50">
                      <div className={`bg-gradient-to-r ${service.color} h-1 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-slate-800/40 to-slate-900/40 backdrop-blur-xl border border-slate-700/30 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Индивидуальные решения</h3>
              <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                Не нашли нужную услугу? Мы готовы разработать индивидуальное решение под ваши потребности
              </p>
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 text-white border-0 text-lg px-8 py-4"
              >
                <Link to="/contact">
                  Обсудить проект
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 lg:py-28 relative bg-black overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white/95">
              Нужна консультация?
            </h2>
            <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              Свяжитесь с нами для получения подробной информации о наших услугах
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="btn-primary text-lg px-8 py-4">
                <Link to="/contact">
                  Связаться с нами
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 bg-white/5 hover:bg-white/10 text-white hover:text-white text-lg px-8 py-4">
                <Link to="/">На главную</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

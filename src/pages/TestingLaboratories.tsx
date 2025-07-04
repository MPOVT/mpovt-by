
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
  Shield,
  FileText,
  Download,
  Phone,
  Mail,
  User
} from "lucide-react";

const TestingLaboratories = () => {
  const laboratories = [
    {
      title: "Испытательная лаборатория",
      description: "Полный комплекс механических и климатических испытаний автокомпонентов и других изделий",
      icon: Settings,
      accreditationNumber: "BY/112 2.5349",
      accreditationDate: "10.12.2021",
      validityPeriod: "с 10 декабря 2021 г. до 10 декабря 2026 года",
      features: [
        "Механические испытания",
        "Климатические испытания",
        "Испытания автокомпонентов",
        "Испытания на вибрацию и удар",
        "Электромагнитная совместимость"
      ]
    },
    {
      title: "Метрологическая лаборатория",
      description: "Поверка средств измерений радиотехнических, электрических величин, средств измерения давления и температуры",
      icon: Microscope,
      accreditationNumber: "BY/112 3.0268",
      accreditationDate: "18.07.2011",
      validityPeriod: "с 19 июля 2021 г. до 19 июля 2026 года",
      features: [
        "Поверка радиотехнических средств",
        "Поверка электрических величин",
        "Поверка средств измерения давления",
        "Поверка средств измерения температуры",
        "Калибровка измерительного оборудования"
      ]
    }
  ];

  const documents = [
    {
      title: "Аттестат лаборатории испытаний",
      url: "https://mpovt.by/gallery/%D0%90%D1%82%D1%82%D0%B5%D1%81%D1%82%D0%B0%D1%82%20%D0%B0%D0%BA%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%B0%D1%86%D0%B8%D0%B8%20%D0%9B%D0%98%D1%81.pdf"
    },
    {
      title: "Область аккредитации ЛИс",
      url: "https://mpovt.by/gallery/%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%20%D0%B0%D0%BA%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%B0%D1%86%D0%B8%D0%B8%20%D0%9B%D0%98%D1%81.pdf"
    },
    {
      title: "Аттестат лаборатории метрологии",
      url: "https://mpovt.by/gallery/%D0%90%D1%82%D1%82%D0%B5%D1%81%D1%82%D0%B0%D1%82%20%D0%B0%D0%BA%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%B0%D1%86%D0%B8%D0%B8%20%D0%9B%D0%9C_16.07.2021.pdf"
    },
    {
      title: "Область аккредитации ЛМ",
      url: "https://mpovt.by/gallery/%D0%9E%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%20%D0%B0%D0%BA%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%B0%D1%86%D0%B8%D0%B8%20%D0%9B%D0%9C.pdf"
    }
  ];

  const advantages = [
    {
      icon: Award,
      title: "Аккредитация",
      description: "Все лаборатории имеют государственную аккредитацию",
      bgColor: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
      hoverBg: "hover:from-blue-500/30 hover:to-cyan-500/30",
      iconColor: "text-blue-400"
    },
    {
      icon: Users,
      title: "Опытные специалисты",
      description: "Команда высококвалифицированных экспертов",
      bgColor: "bg-gradient-to-br from-emerald-500/20 to-green-500/20",
      hoverBg: "hover:from-emerald-500/30 hover:to-green-500/30",
      iconColor: "text-emerald-400"
    },
    {
      icon: Clock,
      title: "Быстрые сроки",
      description: "Оперативное проведение испытаний и выдача результатов",
      bgColor: "bg-gradient-to-br from-purple-500/20 to-violet-500/20",
      hoverBg: "hover:from-purple-500/30 hover:to-violet-500/30",
      iconColor: "text-purple-400"
    },
    {
      icon: Shield,
      title: "Надежность",
      description: "Точные и достоверные результаты испытаний",
      bgColor: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
      hoverBg: "hover:from-orange-500/30 hover:to-red-500/30",
      iconColor: "text-orange-400"
    }
  ];

  return (
    <div className="min-h-screen">
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
        <div className="container mx-auto px-2 sm:px-8 lg:px-20 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent mb-8">
              Наши лаборатории
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Современное оборудование и высококвалифицированные специалисты
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {laboratories.map((lab, index) => {
              const Icon = lab.icon;
              // Цвета для акцентов по индексу
              const accentColors = [
                {
                  border: "hover:border-cyan-400/30",
                  glow: "from-cyan-500/10 to-purple-500/10",
                  iconBg: "from-cyan-500/20 to-purple-500/20",
                  icon: "text-cyan-400"
                },
                {
                  border: "hover:border-emerald-400/30",
                  glow: "from-emerald-500/10 to-green-500/10",
                  iconBg: "from-emerald-500/20 to-green-500/20",
                  icon: "text-emerald-400"
                }
              ];
              const color = accentColors[index % accentColors.length];
              return (
                <Card
                  key={index}
                  className={`group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 ${color.border} transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] flex flex-col h-full`}
                >
                  {/* Background glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${color.glow} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
                  <div className="p-6 md:p-8 flex flex-col h-full relative z-10">
                    <div className="flex items-center mb-6">
                      <div className={`w-14 h-14 bg-gradient-to-br ${color.iconBg} rounded-xl flex items-center justify-center mr-4 shadow-lg`}>
                        <Icon className={`w-7 h-7 ${color.icon}`} />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">{lab.title}</h3>
                    </div>
                    <p className="text-slate-300 mb-6 leading-relaxed">{lab.description}</p>
                    <div className="mb-6 p-4 bg-white/10 rounded-lg border border-white/10">
                      <p className="text-sm text-slate-400 mb-2">
                        <strong className="text-white">Основания для оказания услуг:</strong> аттестат аккредитации № {lab.accreditationNumber} от {lab.accreditationDate}
                      </p>
                      <p className="text-sm text-slate-400">
                        <strong className="text-white">Срок действия:</strong> {lab.validityPeriod}
                      </p>
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-lg font-semibold text-white mb-3">Виды услуг:</h4>
                      <ul className="space-y-2">
                        {lab.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-slate-300">
                            <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-black via-slate-900/30 to-black relative overflow-hidden">
        {/* Мягкое, центрированное и плавное свечение */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[36rem] md:h-[36rem] bg-gradient-to-br from-emerald-400/10 to-purple-400/10 rounded-full blur-3xl animate-soft-glow"></div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              // Цвета и оформление как в "Наши ценности" на Company
              const valueCardColors = [
                {
                  color: "text-emerald-500",
                  bgColor: "bg-emerald-500/20"
                },
                {
                  color: "text-blue-500",
                  bgColor: "bg-blue-500/20"
                },
                {
                  color: "text-purple-500",
                  bgColor: "bg-purple-500/20"
                },
                {
                  color: "text-orange-500",
                  bgColor: "bg-orange-500/20"
                }
              ];
              const color = valueCardColors[index % valueCardColors.length];
              return (
                <Card
                  key={index}
                  className="p-4 sm:p-6 md:p-8 text-center bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-500 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 ${color.bgColor} rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 lg:mb-6`}>
                    <Icon className={`h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 ${color.color}`} />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 md:mb-3 text-white">{advantage.title}</h3>
                  <p className="text-slate-300 text-xs sm:text-sm md:text-base">{advantage.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
        {/* Плавная анимация свечения */}
        <style>{`
          @keyframes softGlow {
            0%, 100% { filter: blur(60px) brightness(1); opacity: 0.7; transform: translate(-50%, -50%) scale(1); }
            50% { filter: blur(80px) brightness(1.1); opacity: 1; transform: translate(-50%, -50%) scale(1.08); }
          }
          .animate-soft-glow {
            animation: softGlow 12s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* Documents Section */}
      <section className="py-16 md:py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/6 right-1/6 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/6 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-8">
              Документы
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Аттестаты аккредитации и области деятельности наших лабораторий
            </p>
          </div>
          <div className="grid gap-4 max-w-5xl mx-auto">
            {documents.map((doc, index) => {
              // Цвета для карточек документов
              const docColors = [
                {
                  glow: "from-blue-500/10 to-cyan-500/10",
                  iconBg: "from-blue-500/20 to-cyan-500/20",
                  icon: "text-blue-400",
                  border: "hover:border-blue-400/30",
                  btn: "hover:border-blue-400/50 hover:shadow-blue-500/20"
                }
                // {
                //   glow: "from-purple-500/10 to-pink-500/10",
                //   iconBg: "from-purple-500/20 to-pink-500/20",
                //   icon: "text-purple-400",
                //   border: "hover:border-purple-400/30",
                //   btn: "hover:border-purple-400/50 hover:shadow-purple-500/20"
                // }
              ];
              const color = docColors[index % docColors.length];
              return (
                <Card key={index} className={`p-6 bg-white/5 backdrop-blur-xl border border-white/10 ${color.border} transition-all duration-300 group relative`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${color.glow} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className={`w-12 h-12 bg-gradient-to-br ${color.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <FileText className={`w-6 h-6 ${color.icon}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 text-white">
                          {doc.title}
                        </h3>
                        <p className="text-slate-400 text-sm">PDF документ</p>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      className={`bg-white/10 hover:bg-white/20 text-white border border-white/20 ${color.btn} backdrop-blur-sm transition-all duration-300 flex-shrink-0 ml-4 shadow-lg hover:shadow-xl hover:scale-[1.02] group/btn`}
                      onClick={() => window.open(doc.url, '_blank')}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${color.glow} rounded-md opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300`}></div>
                      <Download className="w-4 h-4 mr-2 relative z-10" />
                      <span className="relative z-10">PDF</span>
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/6 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-8">
              Контакты
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Свяжитесь с руководителем департамента для получения консультации
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="overflow-hidden bg-white/10 backdrop-blur-xl border border-white/10 hover:border-purple-400/30 transition-all duration-300 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex flex-col md:flex-row h-full relative z-10">
                <div className="w-full md:w-40 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-4 md:p-0">
                  <div className="w-28 h-32 rounded-lg shadow-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                    <User className="w-10 h-10 text-purple-400" />
                  </div>
                </div>
                <div className="flex-1 p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Шляев Артём Сергеевич
                  </h3>
                  <p className="text-white/60 mb-4">Руководитель Департамента управления качеством</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-slate-300">
                      <Phone className="w-4 h-4 mr-2 text-purple-400" />
                      <a href="tel:+375173889093" className="hover:text-purple-400 transition-colors">
                        +375 17 3889093
                      </a>
                    </div>
                    <div className="flex items-center text-slate-300">
                      <Mail className="w-4 h-4 mr-2 text-pink-400" />
                      <a href="mailto:shliaev@mpovt.by" className="hover:text-pink-400 transition-colors">
                        shliaev@mpovt.by
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 md:py-24 lg:py-28 relative bg-gradient-to-b from-black via-slate-900/20 to-black overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/6 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-128 md:h-128 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Готовы к сотрудничеству?
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Свяжитесь с нами для консультации по проведению испытаний вашей продукции
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 text-lg px-8 py-4 hover:scale-105 transition-all duration-300">
                <Link to="/contact">
                  Связаться с нами
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-slate-600/40 bg-slate-800/20 hover:bg-slate-700/30 text-white hover:text-white text-lg px-8 py-4 hover:scale-105 transition-all duration-300">
                <Link to="/services">Все услуги</Link>
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default TestingLaboratories;

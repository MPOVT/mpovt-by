
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock, ExternalLink, Phone, Mail, User } from "lucide-react";
import Footer from "@/components/Footer";

const Vacancies = () => {
  const [vacancies, setVacancies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock data for vacancies (in real implementation, this would fetch from rabota.by API)
  const mockVacancies = [
    {
      id: 1,
      title: "Инженер-программист",
      department: "Департамент разработок",
      location: "г. Минск, ул. Притыцкого, 62",
      salary: "от 1500 BYN",
      type: "Полная занятость",
      experience: "от 2 лет",
      description: "Разработка и поддержка программного обеспечения для автомобильной электроники",
      requirements: ["Высшее техническое образование", "Знание C/C++", "Опыт работы с микроконтроллерами"]
    },
    {
      id: 2,
      title: "Технолог производства",
      department: "Производственный отдел",
      location: "г. Минск, ул. Притыцкого, 62",
      salary: "от 1200 BYN",
      type: "Полная занятость",
      experience: "от 3 лет",
      description: "Разработка и оптимизация технологических процессов производства электронных блоков",
      requirements: ["Высшее техническое образование", "Опыт в производстве электроники", "Знание LEAN-технологий"]
    },
    {
      id: 3,
      title: "Менеджер по качеству",
      department: "Отдел качества",
      location: "г. Минск, ул. Притыцкого, 62",
      salary: "от 1300 BYN",
      type: "Полная занятость",
      experience: "от 2 лет",
      description: "Контроль качества продукции, ведение документации по системе менеджмента качества",
      requirements: ["Высшее образование", "Знание стандартов ISO", "Аналитические способности"]
    }
  ];

  useEffect(() => {
    // Simulate API call
    const fetchVacancies = async () => {
      setLoading(true);
      // In real implementation, make API call to rabota.by
      setTimeout(() => {
        setVacancies(mockVacancies);
        setLoading(false);
      }, 1000);
    };

    fetchVacancies();
  }, []);

  const hrManager = {
    name: "Улькин Максим Владимирович",
    position: "Руководитель департамента подбора персонала",
    photo: "https://mpovt.by/gallery_gen/81e58fda2be845b3a58d1d39baea37d0_290x307_10x0_300x307_crop.jpg?ts=1746513904",
    phones: ["+375 17 3889458", "+375 44 7635888"],
    email: "ulkin@mpovt.by"
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 md:pt-44 lg:pt-48 pb-12 md:pb-16 lg:pb-20 px-4 text-center relative overflow-hidden bg-black">
        {/* Animated background matching main page style */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse moving-sphere-1"></div>
          <div className="absolute bottom-1/6 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse moving-sphere-2"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-128 md:h-128 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-full blur-3xl animate-pulse moving-sphere-3"></div>
          <div className="absolute top-3/4 left-1/3 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 rounded-full blur-3xl animate-pulse moving-sphere-4"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="flex justify-center mb-6">
              <Briefcase className="w-12 h-12 md:w-16 md:h-16 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl font-black mb-6 md:mb-8 text-white/95 leading-tight">
              Карьера в ОАО "МПОВТ"
            </h1>
            <p className="text-lg md:text-xl xl:text-2xl text-white/70 mb-6 md:mb-8 max-w-3xl mx-auto">
              Присоединяйтесь к команде профессионалов и развивайте свою карьеру в одной из ведущих компаний Беларуси в области электронных технологий.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/30 text-primary hover:bg-primary/10"
              onClick={() => window.open('https://rabota.by/search/vacancy?from=employerPage&employer_id=1006818&hhtmFrom=employer', '_blank')}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Смотреть актуальные вакансии на rabota.by
            </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-black via-slate-900/50 to-black relative overflow-hidden">
        {/* Animated background spheres */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse moving-sphere-5"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse moving-sphere-6"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-128 md:h-128 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse moving-sphere-7"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Vacancies Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Открытые позиции
            </h2>
            
            {loading ? (
              <div className="grid gap-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 animate-pulse">
                    <CardContent className="p-6">
                      <div className="h-6 bg-white/10 rounded mb-4"></div>
                      <div className="h-4 bg-white/10 rounded mb-2"></div>
                      <div className="h-4 bg-white/10 rounded w-2/3"></div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid gap-6">
                {vacancies.map((vacancy, index) => (
                  <Card key={vacancy.id} className="bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-500 animate-fade-in-left" style={{ animationDelay: `${index * 100}ms` }}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl text-white mb-2">{vacancy.title}</CardTitle>
                          <div className="flex flex-wrap gap-2 mb-4">
                            <Badge className="bg-primary/20 text-primary border-primary/30">
                              {vacancy.department}
                            </Badge>
                            <Badge variant="outline" className="border-white/20 text-white/70">
                              {vacancy.type}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{vacancy.salary}</div>
                          <div className="text-sm text-slate-400">в месяц</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center text-slate-300">
                          <MapPin className="w-4 h-4 mr-2 text-primary" />
                          {vacancy.location}
                        </div>
                        <div className="flex items-center text-slate-300">
                          <Clock className="w-4 h-4 mr-2 text-primary" />
                          Опыт работы: {vacancy.experience}
                        </div>
                        <p className="text-slate-300">{vacancy.description}</p>
                        <div>
                          <h4 className="text-white font-semibold mb-2">Требования:</h4>
                          <ul className="list-disc list-inside text-slate-300 space-y-1">
                            {vacancy.requirements.map((req, index) => (
                              <li key={index}>{req}</li>
                            ))}
                          </ul>
                        </div>
                        <Button 
                          className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white"
                          onClick={() => window.open('https://rabota.by/search/vacancy?from=employerPage&employer_id=1006818&hhtmFrom=employer', '_blank')}
                        >
                          Откликнуться на вакансию
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* HR Manager Contact */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Контакты по вопросам трудоустройства
            </h2>
            <Card className="bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-500 max-w-2xl mx-auto animate-fade-in-up">
              <CardContent className="p-8">
                <div className="flex items-center space-x-6">
                  <div className="flex-shrink-0">
                    <img
                      src={hrManager.photo}
                      alt={hrManager.name}
                      className="w-24 h-24 rounded-full object-cover border-2 border-primary/30"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{hrManager.name}</h3>
                    <p className="text-primary mb-4">{hrManager.position}</p>
                    <div className="space-y-2">
                      {hrManager.phones.map((phone, index) => (
                        <div key={index} className="flex items-center text-slate-300">
                          <Phone className="w-4 h-4 mr-2 text-primary" />
                          <a href={`tel:${phone}`} className="hover:text-primary transition-colors">
                            {phone}
                          </a>
                        </div>
                      ))}
                      <div className="flex items-center text-slate-300">
                        <Mail className="w-4 h-4 mr-2 text-primary" />
                        <a href={`mailto:${hrManager.email}`} className="hover:text-primary transition-colors">
                          {hrManager.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Benefits Section */}
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 backdrop-blur-xl animate-fade-in-up">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-6">
                Почему стоит работать с нами?
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Стабильность</h4>
                  <p className="text-slate-300">Надежная компания с многолетней историей и стабильным финансовым положением</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Развитие</h4>
                  <p className="text-slate-300">Возможности для профессионального роста и обучения новым технологиям</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Соцпакет</h4>
                  <p className="text-slate-300">Полный социальный пакет, медицинская страховка и дополнительные льготы</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes moveX {
          0%, 100% { transform: translateX(-20px); }
          50% { transform: translateX(20px); }
        }
        
        @keyframes moveY {
          0%, 100% { transform: translateY(-15px); }
          50% { transform: translateY(15px); }
        }
        
        .moving-sphere-1 {
          animation: pulse 8s infinite, moveX 20s infinite alternate, moveY 25s infinite alternate-reverse;
        }
        
        .moving-sphere-2 {
          animation: pulse 10s infinite 3s, moveX 18s infinite alternate-reverse 3s, moveY 22s infinite alternate 3s;
        }
        
        .moving-sphere-3 {
          animation: pulse 12s infinite 2s, moveX 24s infinite alternate 2s, moveY 28s infinite alternate-reverse 2s;
        }
        
        .moving-sphere-4 {
          animation: pulse 9s infinite 4s, moveX 22s infinite alternate 4s, moveY 26s infinite alternate-reverse 4s;
        }
        
        .moving-sphere-5 {
          animation: pulse 8s infinite, moveX 22s infinite alternate, moveY 26s infinite alternate-reverse;
        }
        
        .moving-sphere-6 {
          animation: pulse 10s infinite 3s, moveX 20s infinite alternate-reverse 3s, moveY 24s infinite alternate 3s;
        }
        
        .moving-sphere-7 {
          animation: pulse 12s infinite 2s, moveX 26s infinite alternate 2s, moveY 30s infinite alternate-reverse 2s;
        }
      `}</style>
    </div>
  );
};

export default Vacancies;


import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, ExternalLink, Phone, Mail, User } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-slate-900/30"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Карьера в ОАО "МПОВТ"
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Присоединяйтесь к команде профессионалов и развивайте свою карьеру в одной из ведущих компаний Беларуси в области электронных технологий.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10"
              onClick={() => window.open('https://rabota.by/search/vacancy?from=employerPage&employer_id=1006818&hhtmFrom=employer', '_blank')}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Смотреть актуальные вакансии на rabota.by
            </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Vacancies Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Открытые позиции
            </h2>
            
            {loading ? (
              <div className="grid gap-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="bg-white/5 border-white/10 backdrop-blur-sm animate-pulse">
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
                  <Card key={vacancy.id} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl text-white mb-2">{vacancy.title}</CardTitle>
                          <div className="flex flex-wrap gap-2 mb-4">
                            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                              {vacancy.department}
                            </Badge>
                            <Badge variant="outline" className="border-white/20 text-white/70">
                              {vacancy.type}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-400">{vacancy.salary}</div>
                          <div className="text-sm text-slate-400">в месяц</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center text-slate-300">
                          <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                          {vacancy.location}
                        </div>
                        <div className="flex items-center text-slate-300">
                          <Clock className="w-4 h-4 mr-2 text-blue-400" />
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
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
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
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center space-x-6">
                  <div className="flex-shrink-0">
                    <img
                      src={hrManager.photo}
                      alt={hrManager.name}
                      className="w-24 h-24 rounded-full object-cover border-2 border-blue-500/30"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{hrManager.name}</h3>
                    <p className="text-blue-400 mb-4">{hrManager.position}</p>
                    <div className="space-y-2">
                      {hrManager.phones.map((phone, index) => (
                        <div key={index} className="flex items-center text-slate-300">
                          <Phone className="w-4 h-4 mr-2 text-blue-400" />
                          <a href={`tel:${phone}`} className="hover:text-blue-400 transition-colors">
                            {phone}
                          </a>
                        </div>
                      ))}
                      <div className="flex items-center text-slate-300">
                        <Mail className="w-4 h-4 mr-2 text-blue-400" />
                        <a href={`mailto:${hrManager.email}`} className="hover:text-blue-400 transition-colors">
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
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Почему стоит работать с нами?
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">Стабильность</h4>
                    <p className="text-slate-300">Надежная компания с многолетней историей и стабильным финансовым положением</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">Развитие</h4>
                    <p className="text-slate-300">Возможности для профессионального роста и обучения новым технологиям</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">Соцпакет</h4>
                    <p className="text-slate-300">Полный социальный пакет, медицинская страховка и дополнительные льготы</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vacancies;

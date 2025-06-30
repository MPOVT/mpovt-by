
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, ExternalLink, Phone, Mail, User, TrendingUp, Users, Award } from "lucide-react";
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

  const benefits = [
    {
      icon: TrendingUp,
      title: "Стабильность и рост",
      description: "Надежная компания с многолетней историей и стабильным финансовым положением"
    },
    {
      icon: Users,
      title: "Развитие и обучение",
      description: "Возможности для профессионального роста и обучения новым технологиям"
    },
    {
      icon: Award,
      title: "Социальный пакет",
      description: "Полный социальный пакет, медицинская страховка и дополнительные льготы"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with animated spheres */}
      <div className="fixed inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        {/* Animated spheres */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-1/3 w-64 h-64 bg-gradient-to-r from-indigo-500/10 to-green-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-24 md:pt-32 pb-16 px-4 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/5 to-transparent"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-400 bg-clip-text text-transparent leading-tight">
                Карьера в ОАО "МПОВТ"
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Присоединяйтесь к команде профессионалов и развивайте свою карьеру в одной из ведущих компаний Беларуси в области электронных технологий.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 text-white border-0"
                onClick={() => window.open('https://rabota.by/search/vacancy?from=employerPage&employer_id=1006818&hhtmFrom=employer', '_blank')}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Актуальные вакансии на rabota.by
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section - moved to top */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Почему стоит работать с нами?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="glass-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vacancies Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Открытые позиции
            </h2>
            
            {loading ? (
              <div className="grid gap-6 max-w-5xl mx-auto">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="glass-card p-6 animate-pulse">
                    <div className="h-6 bg-white/10 rounded mb-4"></div>
                    <div className="h-4 bg-white/10 rounded mb-2"></div>
                    <div className="h-4 bg-white/10 rounded w-2/3"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid gap-6 max-w-5xl mx-auto">
                {vacancies.map((vacancy, index) => (
                  <div key={vacancy.id} className="glass-card p-8 hover:scale-105 transition-all duration-300">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                          {vacancy.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 mb-4">
                          <Badge className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 border-purple-500/30 px-3 py-1">
                            {vacancy.department}
                          </Badge>
                          <Badge className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border-blue-500/30 px-3 py-1">
                            {vacancy.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center text-gray-300">
                        <MapPin className="w-5 h-5 mr-3 text-cyan-400" />
                        {vacancy.location}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Clock className="w-5 h-5 mr-3 text-purple-400" />
                        Опыт работы: {vacancy.experience}
                      </div>
                      <p className="text-gray-300 text-lg">{vacancy.description}</p>
                      <div>
                        <h4 className="text-lg font-semibold mb-3 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                          Требования:
                        </h4>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                          {vacancy.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      <Button 
                        size="lg"
                        className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white border-0 mt-6"
                        onClick={() => window.open('https://rabota.by/search/vacancy?from=employerPage&employer_id=1006818&hhtmFrom=employer', '_blank')}
                      >
                        Откликнуться на вакансию
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* HR Manager Contact */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Контакты по вопросам трудоустройства
            </h2>
            <div className="glass-card p-8 max-w-2xl mx-auto hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-6">
                <div className="flex-shrink-0">
                  <img
                    src={hrManager.photo}
                    alt={hrManager.name}
                    className="w-24 h-24 rounded-full object-cover border-2 border-orange-500/50"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    {hrManager.name}
                  </h3>
                  <p className="text-orange-300 mb-4">{hrManager.position}</p>
                  <div className="space-y-2">
                    {hrManager.phones.map((phone, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <Phone className="w-4 h-4 mr-2 text-orange-400" />
                        <a href={`tel:${phone}`} className="hover:text-orange-400 transition-colors">
                          {phone}
                        </a>
                      </div>
                    ))}
                    <div className="flex items-center text-gray-300">
                      <Mail className="w-4 h-4 mr-2 text-orange-400" />
                      <a href={`mailto:${hrManager.email}`} className="hover:text-orange-400 transition-colors">
                        {hrManager.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Vacancies;

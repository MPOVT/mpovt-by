
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Phone, Mail, Shield, Scale, Eye } from "lucide-react";
import Footer from "@/components/Footer";

const AntiCorruption = () => {
  const documents = [
    {
      title: "Закон Республики Беларусь \"О БОРЬБЕ С КОРРУПЦИЕЙ\"",
      url: "https://mpovt.by/gallery/zakon_o_borbe_s_korruptsiyey.pdf"
    },
    {
      title: "Методические рекомендации по организации антикоррупционной работы",
      url: "https://mpovt.by/gallery/metodicheskiye_rekomendatsii.pdf"
    },
    {
      title: "Постановление Совета Министров Республики Беларусь №45 от 22.01.2016",
      url: "https://mpovt.by/gallery/postanovleniye_45_22_01_2016.pdf"
    },
    {
      title: "Положение о Комиссии по противодействию коррупции",
      url: "https://mpovt.by/gallery/%D0%BF%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BE%20%D0%BA%D0%BE%D0%BC%D0%B8%D1%81%D1%81%D0%B8%D0%B82.pdf"
    },
    {
      title: "План работы Комиссии по противодействию коррупции",
      url: "https://mpovt.by/gallery/%D0%9F%D0%BB%D0%B0%D0%BD%20%D0%BC%D0%B5%D1%80%D0%BE%D0%BF%D1%80%D0%B8%D1%8F%D1%82%D0%B8%D0%B9.pdf"
    },
    {
      title: "План мероприятий по реализации Программы патриотического воспитания населения Республики Беларусь на 2022-2025 годы",
      url: "https://mpovt.by/gallery/%D0%9F%D0%9B%D0%90%D0%9D%20%D0%BC%D0%B5%D1%80%D0%BE%D0%BF%D1%80%D0%B8%D1%8F%D1%82%D0%B8%D0%B9%20%D0%BF%D0%B0%D1%82%D1%80%D0%B8%D0%BE%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B3%D0%BE%20%D0%B2%D0%BE%D1%81%D0%BF%D0%B8%D1%82%D0%B0%D0%BD%D0%B8%D1%8F.pdf"
    }
  ];

  const contact = {
    name: "Остапенко Юлия Ивановна",
    position: "Секретарь Комиссии по противодействию коррупции",
    photo: "https://mpovt.by/gallery/%D0%9E%D1%81%D1%82%D0%B0%D0%BF%D0%B5%D0%BD%D0%BA%D0%BE-ts1651744178.gif?ts=1746513905",
    phone: "+375 17 3889460",
    email: "ostapenko@mpovt.by"
  };

  const principles = [
    {
      icon: Shield,
      title: "Нулевая терпимость",
      description: "Строгое соблюдение антикоррупционного законодательства и нулевая терпимость к коррупции"
    },
    {
      icon: Scale,
      title: "Законность и справедливость",
      description: "Все процессы в компании основаны на принципах законности, справедливости и равенства"
    },
    {
      icon: Eye,
      title: "Прозрачность деятельности",
      description: "Открытость и прозрачность всех бизнес-процессов и принятия управленческих решений"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with animated spheres */}
      <div className="fixed inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        {/* Animated spheres */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-orange-500/15 to-yellow-500/15 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-1/3 w-64 h-64 bg-gradient-to-r from-yellow-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-24 md:pt-32 pb-16 px-4 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent leading-tight">
                Противодействие коррупции
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                ОАО "МПОВТ" строго соблюдает антикоррупционное законодательство и ведет активную работу 
                по предотвращению коррупционных правонарушений.
              </p>
            </div>
          </div>
        </section>

        {/* Principles Section - moved to top */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Наша позиция
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              {principles.map((principle, index) => (
                <div key={index} className="glass-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full flex items-center justify-center">
                    <principle.icon className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                    {principle.title}
                  </h3>
                  <p className="text-gray-300">{principle.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                ОАО "МПОВТ" придерживается принципов прозрачности, честности и законности во всех сферах деятельности. 
                Мы активно противодействуем любым проявлениям коррупции и создаем условия для ее предотвращения.
              </p>
            </div>
          </div>
        </section>

        {/* Documents Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Нормативные документы
            </h2>
            <div className="grid gap-4 max-w-5xl mx-auto">
              {documents.map((doc, index) => (
                <div key={index} className="glass-card p-4 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start space-x-3 flex-1">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <FileText className="w-5 h-5 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-semibold mb-1 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                          {doc.title}
                        </h3>
                        <p className="text-gray-400 text-sm">Нормативный документ</p>
                      </div>
                    </div>
                    <Button
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white border-0 flex-shrink-0 ml-4"
                      onClick={() => window.open(doc.url, '_blank')}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      PDF
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Контактное лицо
            </h2>
            <div className="glass-card p-8 max-w-2xl mx-auto hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-6">
                <div className="flex-shrink-0">
                  <img
                    src={contact.photo}
                    alt={contact.name}
                    className="w-24 h-24 rounded-full object-cover border-2 border-purple-500/50"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {contact.name}
                  </h3>
                  <p className="text-purple-300 mb-4 text-sm">{contact.position}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-300">
                      <Phone className="w-4 h-4 mr-2 text-purple-400" />
                      <a href={`tel:${contact.phone}`} className="hover:text-purple-400 transition-colors text-sm">
                        {contact.phone}
                      </a>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Mail className="w-4 h-4 mr-2 text-purple-400" />
                      <a href={`mailto:${contact.email}`} className="hover:text-purple-400 transition-colors text-sm">
                        {contact.email}
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

export default AntiCorruption;

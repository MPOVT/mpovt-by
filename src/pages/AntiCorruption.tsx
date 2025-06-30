
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Phone, Mail } from "lucide-react";
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-slate-900/30"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Противодействие коррупции
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              ОАО "МПОВТ" строго соблюдает антикоррупционное законодательство и ведет активную работу 
              по предотвращению коррупционных правонарушений.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Documents Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Нормативные документы
            </h2>
            <div className="grid gap-4 max-w-4xl mx-auto">
              {documents.map((doc, index) => (
                <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-start space-x-3">
                        <FileText className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-base font-semibold text-white mb-1">{doc.title}</h3>
                          <p className="text-slate-400 text-sm">Нормативный документ</p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 flex-shrink-0 ml-4"
                        onClick={() => window.open(doc.url, '_blank')}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        PDF
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Контактное лицо
            </h2>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center space-x-6">
                  <div className="flex-shrink-0">
                    <img
                      src={contact.photo}
                      alt={contact.name}
                      className="w-24 h-24 rounded-full object-cover border-2 border-blue-500/30"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{contact.name}</h3>
                    <p className="text-blue-400 mb-4 text-sm">{contact.position}</p>
                    <div className="space-y-2">
                      <div className="flex items-center text-slate-300">
                        <Phone className="w-4 h-4 mr-2 text-blue-400" />
                        <a href={`tel:${contact.phone}`} className="hover:text-blue-400 transition-colors text-sm">
                          {contact.phone}
                        </a>
                      </div>
                      <div className="flex items-center text-slate-300">
                        <Mail className="w-4 h-4 mr-2 text-blue-400" />
                        <a href={`mailto:${contact.email}`} className="hover:text-blue-400 transition-colors text-sm">
                          {contact.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Наша позиция
                </h3>
                <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
                  ОАО "МПОВТ" придерживается принципов прозрачности, честности и законности во всех сферах деятельности. 
                  Мы активно противодействуем любым проявлениям коррупции и создаем условия для ее предотвращения.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AntiCorruption;

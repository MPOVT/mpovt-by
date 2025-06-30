
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, User, Download, Building, Car, Zap, Droplets } from "lucide-react";
import Footer from "@/components/Footer";

const RentalAreas = () => {
  const contact = {
    name: "Медведь Татьяна Николаевна",
    position: "Ведущий инженер",
    phones: ["+375 17 3889405", "+375 17 3639295"],
    email: "rent2@mpovt.by"
  };

  const facilities = [
    {
      icon: Building,
      title: "Офисные помещения",
      description: "Современные офисные пространства с естественным освещением"
    },
    {
      icon: Building,
      title: "Производственные площади",
      description: "Оборудованные производственные помещения для различных видов деятельности"
    },
    {
      icon: Building,
      title: "Складские помещения",
      description: "Просторные складские комплексы с удобными подъездными путями"
    },
    {
      icon: Car,
      title: "Парковка",
      description: "Удобная парковка для сотрудников и посетителей"
    }
  ];

  const amenities = [
    {
      icon: Zap,
      title: "Электричество",
      description: "Стабильное электроснабжение"
    },
    {
      icon: Droplets,
      title: "Водоснабжение",
      description: "Централизованное водоснабжение"
    },
    {
      icon: Building,
      title: "Отопление",
      description: "Централизованное отопление"
    },
    {
      icon: MapPin,
      title: "Транспорт",
      description: "Удобные выездные пути"
    }
  ];

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
              <Building className="w-12 h-12 md:w-16 md:h-16 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl font-black mb-6 md:mb-8 text-white/95 leading-tight">
              Арендные площади
            </h1>
            <p className="text-lg md:text-xl xl:text-2xl text-white/70 mb-6 md:mb-8 max-w-3xl mx-auto">
              ОАО "МПОВТ" предлагает в аренду офисные, производственные и складские помещения 
              с развитой инфраструктурой в удобном районе Минска.
            </p>
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
          {/* Main Info */}
          <div className="mb-16">
            <Card className="bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-500 animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <MapPin className="w-8 h-8 text-primary mr-3" />
                  Основная информация
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Характеристики помещений</h3>
                    <ul className="space-y-2 text-slate-300">
                      <li>• Площади от 10 кв. м до 10 000 кв. м</li>
                      <li>• Естественное освещение</li>
                      <li>• Централизованное отопление</li>
                      <li>• Электроснабжение</li>
                      <li>• Водоснабжение</li>
                      <li>• Парковочные места</li>
                      <li>• Удобные выездные пути</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Местоположение</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-white font-semibold">г. Минск, ул. Притыцкого, 62</p>
                          <p className="text-slate-400 text-sm">Удобное расположение с развитой транспортной инфраструктурой</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Building className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-white font-semibold">Собственник: ОАО "МПОВТ"</p>
                          <p className="text-slate-400 text-sm">Юридическое лицо с надежной репутацией</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Types of Facilities */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Типы помещений
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {facilities.map((facility, index) => (
                <Card key={index} className="bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-500 animate-fade-in-left" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <facility.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">{facility.title}</h3>
                        <p className="text-slate-300">{facility.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Коммунальные услуги и удобства
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {amenities.map((amenity, index) => (
                <Card key={index} className="bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 text-center hover:border-slate-600/40 transition-all duration-500 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <amenity.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{amenity.title}</h3>
                    <p className="text-slate-300 text-sm">{amenity.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Price List Download */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 backdrop-blur-xl animate-fade-in-up">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Актуальный прайс-лист
                </h3>
                <p className="text-slate-300 mb-6">
                  Скачайте подробную информацию о свободных площадях и текущих ценах на аренду
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white"
                  onClick={() => window.open('https://mpovt.by/gallery/%D1%81%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D0%BD%D1%8B%D0%B5%20%D0%BF%D0%BB%D0%BE%D1%89%D0%B0%D0%B4%D0%B8%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B024.xls', '_blank')}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Скачать прайс: Свободные площади в аренду
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Map Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Расположение
            </h2>
            <Card className="bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 animate-fade-in-up">
              <CardContent className="p-0">
                <div className="h-96 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-white text-lg font-semibold">г. Минск, ул. Притыцкого, 62</p>
                    <p className="text-slate-400">Интерактивная карта</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Контактная информация
            </h2>
            <Card className="bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-500 max-w-2xl mx-auto animate-fade-in-up">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{contact.name}</h3>
                    <p className="text-primary mb-4">{contact.position}</p>
                    <div className="space-y-2">
                      {contact.phones.map((phone, index) => (
                        <div key={index} className="flex items-center text-slate-300">
                          <Phone className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
                          <a href={`tel:${phone}`} className="hover:text-primary transition-colors">
                            {phone} {index === 1 && <span className="text-sm text-slate-400">(факс)</span>}
                          </a>
                        </div>
                      ))}
                      <div className="flex items-center text-slate-300">
                        <Mail className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
                        <a href={`mailto:${contact.email}`} className="hover:text-primary transition-colors">
                          {contact.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
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

export default RentalAreas;

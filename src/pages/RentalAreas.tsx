
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, User, Download, Building, Car, Zap, Droplets, Home, Shield, DollarSign } from "lucide-react";
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
      description: "Современные офисные пространства с естественным освещением и комфортными условиями работы"
    },
    {
      icon: Building,
      title: "Производственные площади",
      description: "Оборудованные производственные помещения для различных видов деятельности с высокими потолками"
    },
    {
      icon: Building,
      title: "Складские помещения",
      description: "Просторные складские комплексы с удобными подъездными путями и погрузочными зонами"
    },
    {
      icon: Car,
      title: "Парковочные места",
      description: "Удобная парковка для сотрудников и посетителей с охраняемой территорией"
    }
  ];

  const amenities = [
    {
      icon: Zap,
      title: "Электроснабжение",
      description: "Стабильное электроснабжение с резервными источниками питания"
    },
    {
      icon: Droplets,
      title: "Водоснабжение",
      description: "Централизованное водоснабжение и канализация"
    },
    {
      icon: Home,
      title: "Отопление",
      description: "Централизованное отопление с возможностью регулирования температуры"
    },
    {
      icon: MapPin,
      title: "Транспорт",
      description: "Удобные выездные пути и близость к транспортным узлам"
    }
  ];

  const advantages = [
    {
      icon: Shield,
      title: "Надежный собственник",
      description: "ОАО \"МПОВТ\" - юридическое лицо с многолетней репутацией и стабильным положением"
    },
    {
      icon: MapPin,
      title: "Удобное расположение",
      description: "Центральное расположение в Минске с развитой инфраструктурой и транспортной доступностью"
    },
    {
      icon: DollarSign,
      title: "Гибкие условия",
      description: "Различные варианты площадей от 10 до 10 000 кв.м с индивидуальными условиями аренды"
    }
  ];

  const characteristics = [
    "Площади от 10 кв. м до 10 000 кв. м",
    "Естественное освещение во всех помещениях",
    "Централизованное отопление и вентиляция",
    "Стабильное электроснабжение 380/220В",
    "Холодное и горячее водоснабжение",
    "Охраняемые парковочные места",
    "Удобные выездные пути на основные магистрали",
    "Возможность размещения вывесок и рекламы"
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with animated spheres */}
      <div className="fixed inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        {/* Animated spheres */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-red-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-1/3 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-24 md:pt-32 pb-16 px-4 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-900/5 to-transparent"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-500 to-pink-400 bg-clip-text text-transparent leading-tight">
                Арендные площади
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                ОАО "МПОВТ" предлагает в аренду офисные, производственные и складские помещения 
                с развитой инфраструктурой в удобном районе Минска.
              </p>
            </div>
          </div>
        </section>

        {/* Advantages Section - moved to top */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Преимущества аренды у нас
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {advantages.map((advantage, index) => (
                <div key={index} className="glass-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full flex items-center justify-center">
                    <advantage.icon className="w-8 h-8 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-300">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Info */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="glass-card p-8 hover:scale-105 transition-all duration-300 max-w-6xl mx-auto">
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 text-blue-400 mr-3" />
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Основная информация
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Характеристики помещений
                  </h3>
                  <div className="grid gap-3">
                    {characteristics.map((char, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{char}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Местоположение
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-white font-semibold">г. Минск, ул. Притыцкого, 62</p>
                        <p className="text-gray-400 text-sm">Удобное расположение с развитой транспортной инфраструктурой</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Building className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-white font-semibold">Собственник: ОАО "МПОВТ"</p>
                        <p className="text-gray-400 text-sm">Юридическое лицо с надежной репутацией</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Facilities */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              Типы помещений
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {facilities.map((facility, index) => (
                <div key={index} className="glass-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <facility.icon className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                        {facility.title}
                      </h3>
                      <p className="text-gray-300">{facility.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Коммунальные услуги и удобства
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {amenities.map((amenity, index) => (
                <div key={index} className="glass-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <amenity.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {amenity.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{amenity.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Price List Download */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Актуальный прайс-лист
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Скачайте подробную информацию о свободных площадях и текущих ценах на аренду
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 text-white border-0"
                onClick={() => window.open('https://mpovt.by/gallery/%D1%81%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D0%BD%D1%8B%D0%B5%20%D0%BF%D0%BB%D0%BE%D1%89%D0%B0%D0%B4%D0%B8%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B024.xls', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Скачать прайс: Свободные площади в аренду
              </Button>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Расположение
            </h2>
            <div className="glass-card p-0 max-w-5xl mx-auto overflow-hidden">
              <div className="h-96 bg-gradient-to-br from-gray-800/50 to-gray-900/50 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-indigo-400 mx-auto mb-4" />
                  <p className="text-white text-lg font-semibold">г. Минск, ул. Притыцкого, 62</p>
                  <p className="text-gray-400">Интерактивная карта</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
              Контактная информация
            </h2>
            <div className="glass-card p-8 max-w-2xl mx-auto hover:scale-105 transition-all duration-300">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-8 h-8 text-pink-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                    {contact.name}
                  </h3>
                  <p className="text-pink-300 mb-4">{contact.position}</p>
                  <div className="space-y-2">
                    {contact.phones.map((phone, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <Phone className="w-4 h-4 mr-3 text-pink-400 flex-shrink-0" />
                        <a href={`tel:${phone}`} className="hover:text-pink-400 transition-colors">
                          {phone} {index === 1 && <span className="text-sm text-gray-400">(факс)</span>}
                        </a>
                      </div>
                    ))}
                    <div className="flex items-center text-gray-300">
                      <Mail className="w-4 h-4 mr-3 text-pink-400 flex-shrink-0" />
                      <a href={`mailto:${contact.email}`} className="hover:text-pink-400 transition-colors">
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

export default RentalAreas;


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
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-slate-900/30"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Арендные площади
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              ОАО "МПОВТ" предлагает в аренду офисные, производственные и складские помещения 
              с развитой инфраструктурой в удобном районе Минска.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Main Info */}
          <div className="mb-16">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <MapPin className="w-8 h-8 text-blue-400 mr-3" />
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
                        <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-white font-semibold">г. Минск, ул. Притыцкого, 62</p>
                          <p className="text-slate-400 text-sm">Удобное расположение с развитой транспортной инфраструктурой</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Building className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
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
                <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <facility.icon className="w-6 h-6 text-blue-400" />
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
                <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm text-center hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <amenity.icon className="w-6 h-6 text-blue-400" />
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
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-white/10 backdrop-blur-sm text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Актуальный прайс-лист
              </h3>
              <p className="text-slate-300 mb-6">
                Скачайте подробную информацию о свободных площадях и текущих ценах на аренду
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                onClick={() => window.open('https://mpovt.by/gallery/%D1%81%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D0%BD%D1%8B%D0%B5%20%D0%BF%D0%BB%D0%BE%D1%89%D0%B0%D0%B4%D0%B8%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B024.xls', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Скачать прайс: Свободные площади в аренду
              </Button>
            </div>
          </div>

          {/* Map Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Расположение
            </h2>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="h-96 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-blue-400 mx-auto mb-4" />
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
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{contact.name}</h3>
                    <p className="text-blue-400 mb-4">{contact.position}</p>
                    <div className="space-y-2">
                      {contact.phones.map((phone, index) => (
                        <div key={index} className="flex items-center text-slate-300">
                          <Phone className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                          <a href={`tel:${phone}`} className="hover:text-blue-400 transition-colors">
                            {phone} {index === 1 && <span className="text-sm text-slate-400">(факс)</span>}
                          </a>
                        </div>
                      ))}
                      <div className="flex items-center text-slate-300">
                        <Mail className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                        <a href={`mailto:${contact.email}`} className="hover:text-blue-400 transition-colors">
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
    </div>
  );
};

export default RentalAreas;

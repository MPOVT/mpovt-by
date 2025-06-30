
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Zap, Shield, Headphones, Star, Award, CheckCircle } from "lucide-react";
import Footer from "@/components/Footer";

const AssetSales = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const products = [
    { name: "Блок управления двигателем", stock: "В наличии" },
    { name: "Контроллер ЭПХХ", stock: "В наличии" },
    { name: "Блок комфорта", stock: "Ограничено" },
    { name: "Контроллер АБС", stock: "В наличии" },
    { name: "Блок управления кондиционером", stock: "В наличии" },
    { name: "Контроллер системы безопасности", stock: "Ограничено" },
    { name: "Блок управления светом", stock: "В наличии" },
    { name: "Контроллер парковочной системы", stock: "В наличии" }
  ];

  const advantages = [
    {
      icon: Award,
      title: "Высокое качество",
      description: "Вся продукция проходит строгий контроль качества и соответствует международным стандартам ISO"
    },
    {
      icon: Star,
      title: "Выгодные цены",
      description: "Конкурентоспособные цены на высококачественные электронные компоненты собственного производства"
    },
    {
      icon: Headphones,
      title: "Профессиональная поддержка",
      description: "Квалифицированная техническая поддержка и консультации по использованию продукции"
    },
    {
      icon: CheckCircle,
      title: "Гарантия надежности",
      description: "Все изделия имеют гарантию и полное техническое сопровождение от производителя"
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with animated spheres */}
      <div className="fixed inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        {/* Animated spheres */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-green-500/15 to-teal-500/15 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-1/3 w-64 h-64 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-24 md:pt-32 pb-16 px-4 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-green-500 to-teal-400 bg-clip-text text-transparent leading-tight">
                Продажа неликвидов
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Приобретайте качественные электронные блоки и контроллеры собственного производства ОАО "МПОВТ" 
                по выгодным ценам.
              </p>
            </div>
          </div>
        </section>

        {/* Advantages Section - moved to top */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Преимущества покупки у нас
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {advantages.map((advantage, index) => (
                <div key={index} className="glass-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-full flex items-center justify-center">
                    <advantage.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Table */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              Доступные товары
            </h2>
            <div className="glass-card p-0 max-w-5xl mx-auto overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10 bg-gradient-to-r from-green-500/10 to-teal-500/10">
                      <th className="text-left p-6 text-white font-semibold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                        Наименование
                      </th>
                      <th className="text-left p-6 text-white font-semibold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                        Наличие
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="p-6 text-gray-300 font-medium">{product.name}</td>
                        <td className="p-6">
                          <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                            product.stock === "В наличии" 
                              ? "bg-green-500/20 text-green-300 border border-green-500/30"
                              : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                          }`}>
                            {product.stock}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Contact and Form Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Связаться с нами
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div className="glass-card p-8 hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Отдел продаж
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      Телефоны:
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-300">
                        <Phone className="w-5 h-5 mr-3 text-purple-400" />
                        <a href="tel:+375173889464" className="hover:text-purple-400 transition-colors">
                          +375 (17) 388 94 64
                        </a>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Phone className="w-5 h-5 mr-3 text-purple-400" />
                        <a href="tel:+375173889465" className="hover:text-purple-400 transition-colors">
                          +375 (17) 388 94 65
                        </a>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Phone className="w-5 h-5 mr-3 text-purple-400" />
                        <a href="tel:+375173889466" className="hover:text-purple-400 transition-colors">
                          +375 (17) 388 94 66
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                      Email:
                    </h4>
                    <div className="flex items-center text-gray-300">
                      <Mail className="w-5 h-5 mr-3 text-pink-400" />
                      <a href="mailto:pcbmarket@mpovt.by" className="hover:text-pink-400 transition-colors">
                        pcbmarket@mpovt.by
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="glass-card p-8 hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Отправить сообщение
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-white mb-2 block">Имя</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-orange-400"
                      placeholder="Ваше имя"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white mb-2 block">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-orange-400"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-white mb-2 block">Телефон</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-orange-400"
                      placeholder="+375 XX XXX XX XX"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-white mb-2 block">Сообщение</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-orange-400 min-h-[100px]"
                      placeholder="Опишите ваш запрос..."
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white border-0"
                  >
                    Отправить сообщение
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default AssetSales;


import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Package, Phone, Mail, Send, ShoppingCart } from "lucide-react";
import Footer from "@/components/Footer";

const AssetSales = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const products = [
    {
      name: "Неликвидная продукция",
      category: "Электроника",
      status: "Доступно",
      description: "Различные виды электронной продукции и комплектующих"
    },
    {
      name: "Излишки материалов",
      category: "Материалы",
      status: "Доступно", 
      description: "Производственные материалы и заготовки"
    },
    {
      name: "Оборудование",
      category: "Техника",
      status: "По запросу",
      description: "Промышленное оборудование различного назначения"
    },
    {
      name: "Комплектующие",
      category: "Запчасти",
      status: "Доступно",
      description: "Запасные части и комплектующие изделия"
    }
  ];

  const salesContact = {
    department: "Отдел продаж",
    phones: ["+375 (17) 388 94 64", "+375 (17) 388 94 65", "+375 (17) 388 94 66"],
    email: "pcbmarket@mpovt.by"
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
              <ShoppingCart className="w-12 h-12 md:w-16 md:h-16 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl font-black mb-6 md:mb-8 text-white/95 leading-tight">
              Продажа неликвидов
            </h1>
            <p className="text-lg md:text-xl xl:text-2xl text-white/70 mb-6 md:mb-8 max-w-3xl mx-auto">
              ОАО "МПОВТ" предлагает к продаже неликвидную продукцию, излишки материалов и оборудования 
              по выгодным ценам.
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
          {/* Products Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Доступная продукция
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {products.map((product, index) => (
                <Card key={index} className="bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-500 animate-fade-in-left" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-3">
                        <Package className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">{product.name}</h3>
                          <p className="text-primary text-sm font-medium">{product.category}</p>
                        </div>
                      </div>
                      <Badge 
                        className={`${
                          product.status === 'Доступно' 
                            ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                            : 'bg-orange-500/20 text-orange-400 border-orange-500/30'
                        }`}
                      >
                        {product.status}
                      </Badge>
                    </div>
                    <p className="text-slate-300 text-sm">{product.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact and Form Section */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Sales Contact */}
            <Card className="bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-500 animate-fade-in-left">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center">
                  <Phone className="w-6 h-6 text-primary mr-3" />
                  {salesContact.department}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Телефоны:</h4>
                    <div className="space-y-1">
                      {salesContact.phones.map((phone, index) => (
                        <div key={index} className="flex items-center text-slate-300">
                          <Phone className="w-4 h-4 mr-2 text-primary" />
                          <a href={`tel:${phone}`} className="hover:text-primary transition-colors text-sm">
                            {phone}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <Mail className="w-4 h-4 mr-2 text-primary" />
                    <a href={`mailto:${salesContact.email}`} className="hover:text-primary transition-colors text-sm">
                      {salesContact.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-500 animate-fade-in-right">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center">
                  <Send className="w-6 h-6 text-primary mr-3" />
                  Отправить запрос
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1 text-slate-300">
                      Имя *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-600/30 bg-slate-800/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-white placeholder-slate-400"
                      placeholder="Ваше имя"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1 text-slate-300">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-600/30 bg-slate-800/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-white placeholder-slate-400"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1 text-slate-300">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-600/30 bg-slate-800/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-white placeholder-slate-400"
                      placeholder="+375 (xx) xxx-xx-xx"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1 text-slate-300">
                      Сообщение *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-600/30 bg-slate-800/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none text-white placeholder-slate-400"
                      placeholder="Опишите интересующую вас продукцию..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white text-sm">
                    Отправить запрос
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 backdrop-blur-xl animate-fade-in-up">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Выгодные предложения
                </h3>
                <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                  Мы предлагаем конкурентоспособные цены на неликвидную продукцию и материалы. 
                  Все товары проходят проверку качества и поставляются с необходимой документацией. 
                  Свяжитесь с нашим отделом продаж для получения подробной информации о наличии и ценах.
                </p>
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

export default AssetSales;

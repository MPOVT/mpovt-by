
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail } from "lucide-react";
import Footer from "@/components/Footer";

const AssetSales = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const products = [
    { name: "Блок управления двигателем", price: "150 BYN", stock: "В наличии" },
    { name: "Контроллер ЭПХХ", price: "120 BYN", stock: "В наличии" },
    { name: "Блок комфорта", price: "90 BYN", stock: "Ограничено" },
    { name: "Контроллер АБС", price: "200 BYN", stock: "В наличии" },
    { name: "Блок управления кондиционером", price: "80 BYN", stock: "В наличии" },
    { name: "Контроллер системы безопасности", price: "110 BYN", stock: "Ограничено" },
    { name: "Блок управления светом", price: "60 BYN", stock: "В наличии" },
    { name: "Контроллер парковочной системы", price: "140 BYN", stock: "В наличии" }
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
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-slate-900/30"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Продажа неликвидов
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Приобретайте качественные электронные блоки и контроллеры собственного производства ОАО "МПОВТ" 
              по выгодным ценам.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Products Table */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Доступные товары
            </h2>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left p-4 text-white font-semibold">Наименование</th>
                        <th className="text-left p-4 text-white font-semibold">Цена</th>
                        <th className="text-left p-4 text-white font-semibold">Наличие</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product, index) => (
                        <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="p-4 text-slate-300">{product.name}</td>
                          <td className="p-4 text-blue-400 font-semibold">{product.price}</td>
                          <td className="p-4">
                            <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                              product.stock === "В наличии" 
                                ? "bg-green-500/20 text-green-400"
                                : "bg-yellow-500/20 text-yellow-400"
                            }`}>
                              {product.stock}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact and Form Section */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Отдел продаж</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Телефоны:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center text-slate-300">
                        <Phone className="w-4 h-4 mr-2 text-blue-400" />
                        <a href="tel:+375173889464" className="hover:text-blue-400 transition-colors">
                          +375 (17) 388 94 64
                        </a>
                      </div>
                      <div className="flex items-center text-slate-300">
                        <Phone className="w-4 h-4 mr-2 text-blue-400" />
                        <a href="tel:+375173889465" className="hover:text-blue-400 transition-colors">
                          +375 (17) 388 94 65
                        </a>
                      </div>
                      <div className="flex items-center text-slate-300">
                        <Phone className="w-4 h-4 mr-2 text-blue-400" />
                        <a href="tel:+375173889466" className="hover:text-blue-400 transition-colors">
                          +375 (17) 388 94 66
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Email:</h4>
                    <div className="flex items-center text-slate-300">
                      <Mail className="w-4 h-4 mr-2 text-blue-400" />
                      <a href="mailto:pcbmarket@mpovt.by" className="hover:text-blue-400 transition-colors">
                        pcbmarket@mpovt.by
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Отправить сообщение</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-white">Имя</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                      placeholder="Ваше имя"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-white">Телефон</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                      placeholder="+375 XX XXX XX XX"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-white">Сообщение</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 min-h-[100px]"
                      placeholder="Опишите ваш запрос..."
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  >
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Преимущества покупки у нас
                </h3>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">Качество</h4>
                    <p className="text-slate-300">Вся продукция проходит строгий контроль качества и соответствует международным стандартам</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">Цены</h4>
                    <p className="text-slate-300">Выгодные цены на высококачественные электронные компоненты собственного производства</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">Поддержка</h4>
                    <p className="text-slate-300">Профессиональная техническая поддержка и консультации по использованию продукции</p>
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

export default AssetSales;


import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send
} from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent">
              Контакты
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Свяжитесь с нами для получения консультации или размещения заказа
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-8 glass-card hover:shadow-xl transition-all duration-500 animate-fade-in-left">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-primary/20 rounded-xl">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">Телефон</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-lg">+375 (17) 298-45-67</p>
                  <p className="text-lg">+375 (17) 298-45-68</p>
                  <p className="text-muted-foreground">Отдел продаж</p>
                </div>
              </Card>

              <Card className="p-8 glass-card hover:shadow-xl transition-all duration-500 animate-fade-in-left" style={{ animationDelay: '100ms' }}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-primary/20 rounded-xl">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">Email</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-lg">info@mpovt.by</p>
                  <p className="text-lg">sales@mpovt.by</p>
                  <p className="text-muted-foreground">Основная почта</p>
                </div>
              </Card>

              <Card className="p-8 glass-card hover:shadow-xl transition-all duration-500 animate-fade-in-left" style={{ animationDelay: '200ms' }}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-primary/20 rounded-xl">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">Адрес</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-lg">Республика Беларусь</p>
                  <p className="text-lg">220012, г. Минск</p>
                  <p className="text-lg">ул. Академика Купревича, 21</p>
                </div>
              </Card>

              <Card className="p-8 glass-card hover:shadow-xl transition-all duration-500 animate-fade-in-left" style={{ animationDelay: '300ms' }}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-primary/20 rounded-xl">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">Время работы</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-lg">Пн-Пт: 8:00 - 17:00</p>
                  <p className="text-lg">Сб-Вс: выходной</p>
                  <p className="text-muted-foreground">Время указано по Минску</p>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-8 glass-card hover:shadow-xl transition-all duration-500 animate-fade-in-right">
              <h3 className="text-2xl font-semibold mb-6">Отправить сообщение</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Имя *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Ваше имя"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="+375 (xx) xxx-xx-xx"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Тема сообщения *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Тема вашего сообщения"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Сообщение *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Ваше сообщение..."
                  />
                </div>

                <Button type="submit" className="w-full btn-primary-smooth">
                  <Send className="mr-2 h-5 w-5" />
                  Отправить сообщение
                </Button>
              </form>
            </Card>
          </div>

          {/* Map Section */}
          <Card className="mt-16 p-8 glass-card animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <h3 className="text-2xl font-semibold mb-6 text-center">Как нас найти</h3>
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-orange-400/10 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-lg font-medium">Карта будет загружена</p>
                <p className="text-muted-foreground">ул. Академика Купревича, 21, Минск</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;

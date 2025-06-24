
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
      
      <div className="pt-24 md:pt-28 lg:pt-32 pb-16 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12 lg:mb-16 animate-fade-in-up">
            <div className="relative inline-block">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 lg:mb-6 bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent">
                Контакты
              </h1>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 lg:w-32 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4 md:mt-6">
              Свяжитесь с нами для получения консультации или размещения заказа
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-4 md:space-y-6 lg:space-y-8">
              <Card className="p-4 sm:p-6 md:p-8 glass-card hover:shadow-xl transition-all duration-500 animate-fade-in-left">
                <div className="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4 lg:mb-6">
                  <div className="p-2 md:p-3 bg-primary/20 rounded-xl">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-2xl font-semibold">Телефон</h3>
                </div>
                <div className="space-y-1 md:space-y-2">
                  <p className="text-sm sm:text-base md:text-lg">+375 (17) 298-45-67</p>
                  <p className="text-sm sm:text-base md:text-lg">+375 (17) 298-45-68</p>
                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base">Отдел продаж</p>
                </div>
              </Card>

              <Card className="p-4 sm:p-6 md:p-8 glass-card hover:shadow-xl transition-all duration-500 animate-fade-in-left" style={{ animationDelay: '100ms' }}>
                <div className="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4 lg:mb-6">
                  <div className="p-2 md:p-3 bg-primary/20 rounded-xl">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-2xl font-semibold">Email</h3>
                </div>
                <div className="space-y-1 md:space-y-2">
                  <p className="text-sm sm:text-base md:text-lg">info@mpovt.by</p>
                  <p className="text-sm sm:text-base md:text-lg">sales@mpovt.by</p>
                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base">Основная почта</p>
                </div>
              </Card>

              <Card className="p-4 sm:p-6 md:p-8 glass-card hover:shadow-xl transition-all duration-500 animate-fade-in-left" style={{ animationDelay: '200ms' }}>
                <div className="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4 lg:mb-6">
                  <div className="p-2 md:p-3 bg-primary/20 rounded-xl">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-2xl font-semibold">Адрес</h3>
                </div>
                <div className="space-y-1 md:space-y-2">
                  <p className="text-sm sm:text-base md:text-lg">Республика Беларусь</p>
                  <p className="text-sm sm:text-base md:text-lg">220012, г. Минск</p>
                  <p className="text-sm sm:text-base md:text-lg">ул. Академика Купревича, 21</p>
                </div>
              </Card>

              <Card className="p-4 sm:p-6 md:p-8 glass-card hover:shadow-xl transition-all duration-500 animate-fade-in-left" style={{ animationDelay: '300ms' }}>
                <div className="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4 lg:mb-6">
                  <div className="p-2 md:p-3 bg-primary/20 rounded-xl">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-2xl font-semibold">Время работы</h3>
                </div>
                <div className="space-y-1 md:space-y-2">
                  <p className="text-sm sm:text-base md:text-lg">Пн-Пт: 8:00 - 17:00</p>
                  <p className="text-sm sm:text-base md:text-lg">Сб-Вс: выходной</p>
                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base">Время указано по Минску</p>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-4 sm:p-6 md:p-8 glass-card hover:shadow-xl transition-all duration-500 animate-fade-in-right h-fit">
              <h3 className="text-base sm:text-lg md:text-2xl font-semibold mb-4 md:mb-6">Отправить сообщение</h3>
              <form className="space-y-3 md:space-y-4 lg:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1 md:mb-2">
                    Имя *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-xs sm:text-sm md:text-base"
                    placeholder="Ваше имя"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1 md:mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-xs sm:text-sm md:text-base"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-medium mb-1 md:mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-xs sm:text-sm md:text-base"
                    placeholder="+375 (xx) xxx-xx-xx"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-medium mb-1 md:mb-2">
                    Тема сообщения *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-xs sm:text-sm md:text-base"
                    placeholder="Тема вашего сообщения"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1 md:mb-2">
                    Сообщение *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none text-xs sm:text-sm md:text-base"
                    placeholder="Ваше сообщение..."
                  />
                </div>

                <Button type="submit" className="w-full btn-primary-smooth text-xs sm:text-sm md:text-base">
                  <Send className="mr-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                  Отправить сообщение
                </Button>
              </form>
            </Card>
          </div>

          {/* Map Section */}
          <Card className="mt-8 md:mt-12 lg:mt-16 p-4 sm:p-6 md:p-8 glass-card animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <h3 className="text-base sm:text-lg md:text-2xl font-semibold mb-3 md:mb-4 lg:mb-6 text-center">Как нас найти</h3>
            <div className="aspect-[16/9] sm:aspect-[21/9] md:aspect-video bg-gradient-to-br from-primary/10 to-orange-400/10 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 text-primary mx-auto mb-3 md:mb-4" />
                <p className="text-sm sm:text-base md:text-lg font-medium">Карта будет загружена</p>
                <p className="text-muted-foreground text-xs sm:text-sm md:text-base">ул. Академика Купревича, 21, Минск</p>
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

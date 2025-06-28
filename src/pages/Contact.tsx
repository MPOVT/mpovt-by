
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
    <div className="min-h-screen">
      <Navigation />
      
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl font-black mb-6 md:mb-8 text-white/95 leading-tight">
              Контакты
            </h1>
            <p className="text-lg md:text-xl xl:text-2xl text-white/70 mb-6 md:mb-8">
              Свяжитесь с нами для получения консультации или размещения заказа
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-black via-slate-900/50 to-black relative overflow-hidden">
        {/* Animated background spheres */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse moving-sphere-5"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse moving-sphere-6"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-128 md:h-128 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse moving-sphere-7"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Contact Information Grid 2x2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16 lg:mb-20">
            <Card className="p-4 sm:p-6 md:p-8 bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-500 animate-fade-in-left">
              <div className="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4 lg:mb-6">
                <div className="p-2 md:p-3 bg-emerald-500/20 rounded-xl">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-emerald-500" />
                </div>
                <h3 className="text-base sm:text-lg md:text-2xl font-semibold text-white">Телефон</h3>
              </div>
              <div className="space-y-1 md:space-y-2">
                <p className="text-sm sm:text-base md:text-lg text-slate-300">+375 (17) 298-45-67</p>
                <p className="text-sm sm:text-base md:text-lg text-slate-300">+375 (17) 298-45-68</p>
                <p className="text-slate-400 text-xs sm:text-sm md:text-base">Отдел продаж</p>
              </div>
            </Card>

            <Card className="p-4 sm:p-6 md:p-8 bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-500 animate-fade-in-left" style={{ animationDelay: '100ms' }}>
              <div className="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4 lg:mb-6">
                <div className="p-2 md:p-3 bg-blue-500/20 rounded-xl">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-blue-500" />
                </div>
                <h3 className="text-base sm:text-lg md:text-2xl font-semibold text-white">Email</h3>
              </div>
              <div className="space-y-1 md:space-y-2">
                <p className="text-sm sm:text-base md:text-lg text-slate-300">info@mpovt.by</p>
                <p className="text-sm sm:text-base md:text-lg text-slate-300">sales@mpovt.by</p>
                <p className="text-slate-400 text-xs sm:text-sm md:text-base">Основная почта</p>
              </div>
            </Card>

            <Card className="p-4 sm:p-6 md:p-8 bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-500 animate-fade-in-left" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4 lg:mb-6">
                <div className="p-2 md:p-3 bg-purple-500/20 rounded-xl">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-purple-500" />
                </div>
                <h3 className="text-base sm:text-lg md:text-2xl font-semibold text-white">Адрес</h3>
              </div>
              <div className="space-y-1 md:space-y-2">
                <p className="text-sm sm:text-base md:text-lg text-slate-300">Республика Беларусь</p>
                <p className="text-sm sm:text-base md:text-lg text-slate-300">220012, г. Минск</p>
                <p className="text-sm sm:text-base md:text-lg text-slate-300">ул. Академика Купревича, 21</p>
              </div>
            </Card>

            <Card className="p-4 sm:p-6 md:p-8 bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-500 animate-fade-in-left" style={{ animationDelay: '300ms' }}>
              <div className="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4 lg:mb-6">
                <div className="p-2 md:p-3 bg-orange-500/20 rounded-xl">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-orange-500" />
                </div>
                <h3 className="text-base sm:text-lg md:text-2xl font-semibold text-white">Время работы</h3>
              </div>
              <div className="space-y-1 md:space-y-2">
                <p className="text-sm sm:text-base md:text-lg text-slate-300">Пн-Пт: 8:00 - 17:00</p>
                <p className="text-sm sm:text-base md:text-lg text-slate-300">Сб-Вс: выходной</p>
                <p className="text-slate-400 text-xs sm:text-sm md:text-base">Время указано по Минску</p>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-4 sm:p-6 md:p-8 bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-500 animate-fade-in-up mb-8 md:mb-12 lg:mb-16">
            <h3 className="text-base sm:text-lg md:text-2xl font-semibold mb-4 md:mb-6 text-white">Отправить сообщение</h3>
            <form className="space-y-3 md:space-y-4 lg:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1 md:mb-2 text-slate-300">
                    Имя *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-slate-600/30 bg-slate-800/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-xs sm:text-sm md:text-base text-white placeholder-slate-400"
                    placeholder="Ваше имя"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1 md:mb-2 text-slate-300">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-slate-600/30 bg-slate-800/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-xs sm:text-sm md:text-base text-white placeholder-slate-400"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-medium mb-1 md:mb-2 text-slate-300">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-slate-600/30 bg-slate-800/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-xs sm:text-sm md:text-base text-white placeholder-slate-400"
                    placeholder="+375 (xx) xxx-xx-xx"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-medium mb-1 md:mb-2 text-slate-300">
                    Тема сообщения *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-slate-600/30 bg-slate-800/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-xs sm:text-sm md:text-base text-white placeholder-slate-400"
                    placeholder="Тема вашего сообщения"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1 md:mb-2 text-slate-300">
                  Сообщение *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-slate-600/30 bg-slate-800/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none text-xs sm:text-sm md:text-base text-white placeholder-slate-400"
                  placeholder="Ваше сообщение..."
                />
              </div>

              <Button type="submit" className="w-full text-xs sm:text-sm md:text-base bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 transition-all duration-500 shadow-lg">
                <Send className="mr-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                Отправить сообщение
              </Button>
            </form>
          </Card>

          {/* Map Section */}
          <Card className="p-4 sm:p-6 md:p-8 bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <h3 className="text-base sm:text-lg md:text-2xl font-semibold mb-3 md:mb-4 lg:mb-6 text-center text-white">Как нас найти</h3>
            <div className="aspect-[16/9] sm:aspect-[21/9] md:aspect-video bg-gradient-to-br from-primary/10 to-orange-400/10 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 text-primary mx-auto mb-3 md:mb-4" />
                <p className="text-sm sm:text-base md:text-lg font-medium text-white">Карта будет загружена</p>
                <p className="text-slate-400 text-xs sm:text-sm md:text-base">ул. Академика Купревича, 21, Минск</p>
              </div>
            </div>
          </Card>
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

export default Contact;

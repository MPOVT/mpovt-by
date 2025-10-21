import React from "react";
import { Card } from "@/components/ui/card";
import { Phone, Mail, User } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16 md:py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/6 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-8">
            Контакты
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Свяжитесь с руководителем департамента для получения консультации
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <Card className="overflow-hidden bg-white/10 backdrop-blur-xl border border-white/10 hover:border-purple-400/30 transition-all duration-300 relative">
        
            <div className="flex flex-col md:flex-row h-full relative z-10">
              <div className="w-full md:w-40 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-4 md:p-0">
                <div className="w-28 h-32 rounded-lg shadow-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <User className="w-10 h-10 text-purple-400" />
                </div>
              </div>
              <div className="flex-1 p-6">
                <h3 className="text-xl font-bold mb-2 text-white">
                  Шляев Артём Сергеевич
                </h3>
                <p className="text-white/60 mb-4">Руководитель Департамента управления качеством</p>
                <div className="space-y-2">
                  <div className="flex items-center text-slate-300">
                    <Phone className="w-4 h-4 mr-2 text-purple-400" />
                    <a href="tel:+375173889093" className="hover:text-purple-400 transition-colors">
                      +375 17 3889093
                    </a>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <Mail className="w-4 h-4 mr-2 text-pink-400" />
                    <a href="mailto:shliaev@mpovt.by" className="hover:text-pink-400 transition-colors">
                      shliaev@mpovt.by
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
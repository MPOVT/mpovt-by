
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero section with animated background similar to main page */}
      <section className="pt-40 md:pt-44 lg:pt-48 pb-12 md:pb-16 lg:pb-20 px-4 text-center relative overflow-hidden bg-black">
        {/* Animated background spheres matching main page style */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-red-500/30 to-orange-500/30 rounded-full blur-3xl opacity-0 animate-pulse" style={{ animationDuration: '8s', animationFillMode: 'forwards', animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/6 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-full blur-3xl opacity-0 animate-pulse" style={{ animationDelay: '3s', animationDuration: '10s', animationFillMode: 'forwards' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-128 md:h-128 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl opacity-0 animate-pulse" style={{ animationDelay: '2s', animationDuration: '12s', animationFillMode: 'forwards' }}></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <Card className="max-w-lg w-full mx-auto text-center p-12 bg-slate-900/20 backdrop-blur-xl border border-slate-700/30 rounded-2xl shadow-2xl animate-fade-in">
            <div className="relative mb-8">
              <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-4">
                404
              </h1>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
              Страница не найдена
            </h2>
            
            <p className="text-slate-300 mb-8 leading-relaxed">
              К сожалению, запрашиваемая страница не существует. Возможно, она была перемещена или удалена.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white group transition-all duration-300"
              >
                <Link to="/">
                  <Home className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Вернуться на главную
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                className="border-white/30 bg-white/10 hover:bg-white/20 text-white group transition-all duration-300"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Назад
              </Button>
            </div>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default NotFound;

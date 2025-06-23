
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900">
      <Navigation />
      
      <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-20">
        <Card className="max-w-lg w-full text-center p-12 glass-card rounded-2xl shadow-2xl animate-fade-in">
          <div className="relative mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-primary mb-4">
              404
            </h1>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Страница не найдена
          </h2>
          
          <p className="text-muted-foreground mb-8 leading-relaxed">
            К сожалению, запрашиваемая страница не существует. Возможно, она была перемещена или удалена.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              className="btn-primary-smooth group"
            >
              <Link to="/">
                <Home className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Вернуться на главную
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white group"
              onClick={() => window.history.back()}
            >
              <span className="cursor-pointer">
                <ArrowLeft className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Назад
              </span>
            </Button>
          </div>
        </Card>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-orange-400/10 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;

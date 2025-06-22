
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Building2 } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card text-card-foreground pt-16 pb-8 border-t animate-fade-in">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="animate-slide-in-left">
            <h4 className="text-xl font-bold mb-4 text-primary">ОАО «МПОВТ»</h4>
            <p className="text-muted-foreground mb-4">
              Отечественный производитель изделий промышленной электроники, автокомпонентов, 
              компьютерной техники и средств связи на интеллектуальной платформе.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          
          <div className="animate-slide-in-left" style={{ animationDelay: '200ms' }}>
            <h4 className="text-xl font-bold mb-4 text-primary">Быстрые ссылки</h4>
            <ul className="space-y-2">
              {[
                { name: "Главная", path: "/" },
                { name: "О компании", path: "/company" },
                { name: "Продукция", path: "/products" },
                { name: "Услуги", path: "/services" },
                { name: "Контакты", path: "/contact" },
                { name: "Поддержка и сервис", path: "/support" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="animate-slide-in-left" style={{ animationDelay: '400ms' }}>
            <h4 className="text-xl font-bold mb-4 text-primary">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-start transition-all duration-300 hover:translate-x-1">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 text-primary" />
                <span className="text-muted-foreground">
                  г. Минск, Фрунзенский район<br />
                  Беларусь
                </span>
              </li>
              <li className="flex items-center transition-all duration-300 hover:translate-x-1">
                <Phone className="w-5 h-5 mr-2 text-primary" />
                <span className="text-muted-foreground">+375 (17) XXX-XX-XX</span>
              </li>
              <li className="flex items-center transition-all duration-300 hover:translate-x-1">
                <Mail className="w-5 h-5 mr-2 text-primary" />
                <span className="text-muted-foreground">info@mpovt.by</span>
              </li>
              <li className="flex items-center transition-all duration-300 hover:translate-x-1">
                <Building2 className="w-5 h-5 mr-2 text-primary" />
                <span className="text-muted-foreground">mpovt.by</span>
              </li>
            </ul>
          </div>
          
          <div className="animate-slide-in-left" style={{ animationDelay: '600ms' }}>
            <h4 className="text-xl font-bold mb-4 text-primary">Наша продукция</h4>
            <p className="text-muted-foreground mb-4">
              Сертифицированная компьютерная и потребительская техника, 
              автоэлектроника, промышленная электроника.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">
                <strong>Партнеры:</strong> БЕЛАЗ, МАЗ, МТЗ, Гомсельмаш, ПТЗ, КАМАЗ
              </div>
              <div className="text-sm text-primary font-medium">
                Доля инновационной продукции: 85%+
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 mt-8 text-center text-muted-foreground animate-fade-in" style={{ animationDelay: '800ms' }}>
          <p>&copy; {currentYear} ОАО «МПОВТ». Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}

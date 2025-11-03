
import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, MapPin, Building2, Github, Send  } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-slate-800 animate-fade-in">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="animate-slide-in-left">
            <p className="text-slate-300 mb-4">
              {t?.components?.footer?.description ?? 'Отечественный производитель изделий промышленной электроники, автокомпонентов и компьютерной техники на интеллектуальной платформе'}
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/MPOVT/mpovt-by/" className="text-slate-400 hover:text-amber-200 transition-all duration-300 hover:scale-110">
                <Github size={20} />
                <span className="sr-only">Github</span>
              </a>
              <a href="https://www.instagram.com/mpov.t" className="text-slate-400 hover:text-purple-400 transition-all duration-300 hover:scale-110">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://t.me/HORIZONT_holding" className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110">
                <Send size={20} />
                <span className="sr-only">Telegram</span>
              </a>
            </div>
            
            {/* Studio Logos Block */}
            <div className="mt-6 pt-4 border-t border-slate-700/50">
              <div className="flex items-center space-x-6">
                {/* H Brand Logo */}
                <a 
                  href="https://h-holding.by" 
                  className="block group transition-all duration-300 hover:scale-105 w-fit"
                >
                  <div className="relative h-14">
                    <img 
                      src="/imgs/logos/H-transparent.svg" 
                      alt="H Brand" 
                      className="h-full w-auto object-contain transition-opacity duration-300 group-hover:opacity-0"
                    />
                    <img 
                      src="/imgs/logos/H-default.svg" 
                      alt="H Brand" 
                      className="absolute top-0 left-0 h-full w-auto object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-in-left" style={{ animationDelay: '200ms' }}>
            <h4 className="text-xl font-bold mb-4 text-amber-200">{t?.components?.footer?.quickLinks ?? 'Быстрые ссылки'}</h4>
            <ul className="space-y-2">
              {[
                { name: t?.components?.navigation?.home ?? "Главная", path: "/" },
                { name: t?.components?.navigation?.company?.main ?? "О компании", path: "/company" },
                { name: t?.components?.navigation?.products?.main ?? "Продукция", path: "/products" },
                { name: t?.components?.navigation?.services?.main ?? "Услуги", path: "/services" },
                { name: t?.components?.navigation?.contacts ?? "Контакты", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-slate-400 hover:text-amber-200 transition-all duration-300 hover:translate-x-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="animate-slide-in-left" style={{ animationDelay: '400ms' }}>
            <h4 className="text-xl font-bold mb-4 text-amber-200">{t?.components?.navigation?.contacts ?? 'Контакты'}</h4>
            <ul className="space-y-3">
              <li className="flex items-start transition-all duration-300 hover:translate-x-1">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 text-amber-200" />
                <span className="text-slate-300">
                  <a target="_blank" rel="noopener noreferrer" href="https://yandex.by/maps/-/CLFTYGK3">
                  {t?.components?.footer?.address?.city ?? "г. Москва"}, {t?.components?.footer?.address?.district ?? "Фрунзенский район"}<br />
                  {t?.components?.footer?.address?.street ?? "улица Китай-город"}<br />
                  {t?.components?.footer?.address?.country ?? "Беларусь"}
                  </a>
                </span>
              </li>
              <li className="flex items-center transition-all duration-300 hover:translate-x-1">
                <Phone className="w-5 h-5 mr-2 text-amber-200" />
                <span className="text-slate-300">
                  <a href="tel:+375173889099">+375 (17) 388-90-99</a>
                </span>
              </li>
              <li className="flex items-center transition-all duration-300 hover:translate-x-1">
                <Mail className="w-5 h-5 mr-2 text-amber-200" />
                <span className="text-slate-300">
                  <a href="mailto:mpovt@mpovt.by">mpovt@mpovt.by</a>
                </span>
              </li>
              <li className="flex items-center transition-all duration-300 hover:translate-x-1">
                <Building2 className="w-5 h-5 mr-2 text-amber-200" />
                <span className="text-slate-300">mpovt.by</span>
              </li>
            </ul>
          </div>
          
          <div className="animate-slide-in-left" style={{ animationDelay: '600ms' }}>
            <h4 className="text-xl font-bold mb-4 text-amber-200">{t?.components?.footer?.productsHeading ?? 'Наша продукция'}</h4>
            <p className="text-slate-300 mb-4">
              {t?.components?.footer?.productsDescription ?? 'Сертифицированная компьютерная и потребительская техника, автоэлектроника, промышленная электроника'}
            </p>
            <div className="space-y-2">
              {/* <div className="text-sm text-slate-400">
                <strong className="text-slate-300">Партнеры:</strong> БЕЛАЗ, МАЗ, МТЗ, Гомсельмаш, ПТЗ, КАМАЗ
              </div> */}
              <div className="text-sm text-amber-200 font-medium">
                {t?.components?.footer?.innovationShare ?? 'Доля инновационной продукции: 85%+'}
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 mt-8 text-center text-slate-400 animate-fade-in" style={{ animationDelay: '800ms' }}>
          <p>{t?.components?.footer?.copyright ?? `© ${currentYear} ОАО «МПОВТ»`}. {t?.components?.footer?.allRights ?? 'Все права защищены'}</p>
        </div>
      </div>
    </footer>
  );
}

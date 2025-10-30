import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, FileText, Users, Cog, Briefcase, MapPin, Shield, ShoppingCart, Laptop, Monitor, Tablet, HardDrive, MoreHorizontal, FlaskConical, Computer } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from '@/components/LanguageSelector';

interface NavigationProps {
  isLoading?: boolean;
}

export default function Navigation({ isLoading = false }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // menu item templates are defined below after `t` is available

  const { t } = useLanguage();

  const companyMenuItems = [
    { name: t?.components?.navigation?.company?.qas ?? 'Система менеджмента качества', path: "/company/quality-management", icon: Cog },
    { name: t?.components?.navigation?.company?.cooperation ?? 'Кооперация', path: "/company/cooperation", icon: Users },
    { name: t?.components?.navigation?.company?.vacancies ?? 'Вакансии', path: "/company/vacancies", icon: Briefcase },
    { name: t?.components?.navigation?.company?.rent ?? 'Арендные площади', path: "/company/rental-areas", icon: MapPin },
    { name: t?.components?.navigation?.company?.anticorruption ?? 'Противодействие коррупции', path: "/company/anti-corruption", icon: Shield },
  ];

  const productMenuItems = [
    { name: t?.components?.navigation?.products?.computers ?? 'Персональные компьютеры', path: "/products/computers", icon: Computer },
    { name: t?.components?.navigation?.products?.laptops ?? 'Ноутбуки', path: "/products/laptops", icon: Laptop },
    { name: t?.components?.navigation?.products?.monitors ?? 'Мониторы', path: "/products/monitors", icon: Monitor },
    { name: t?.components?.navigation?.products?.tablets ?? 'Планшеты', path: "/products/tablets", icon: Tablet },
    { name: t?.components?.navigation?.products?.storage ?? 'Накопители', path: "/products/storage", icon: HardDrive },
    { name: t?.components?.navigation?.products?.other ?? 'Другое', path: "/products/other", icon: MoreHorizontal }
  ];

  const servicesMenuItems = [
    { name: t?.components?.navigation?.services?.testingLabs ?? 'Испытательные лаборатории', path: "/services/testing-laboratories", icon: FlaskConical },
  ];

  // Preload logo image
  useEffect(() => {
    const preloadLogo = new Image();
    preloadLogo.src = "/imgs/logos/mpovt.png";
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [isLoading]);

  const handleDropdownClick = (e: React.MouseEvent, dropdown: string) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Desktop Navigation */}
      <header 
        className={cn(
          "hidden xl:block transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-0"
        )}
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          zIndex: 1000
        }}
      >
        <div className="flex justify-center w-full pt-4">
          <nav className={cn(
            "max-w-5xl transition-all duration-700 ease-out rounded-2xl px-6 py-3",
            scrolled 
              ? "bg-black/60 backdrop-blur-xl border-2 shadow-lg shadow-slate-900/30" 
              : ""
          )}
          style={{
            borderColor: scrolled ? 'rgba(255, 255, 255, 0.3)' : 'transparent',
            borderWidth: '2px'
          }}
          >
            <div className="flex justify-between items-center">
              <Link to="/" className="flex items-center group">
                <img 
                  src="/imgs/logos/mpovt.png" 
                  alt="ОАО МПОВТ Logo" 
                  className="h-8 w-auto transition-all duration-300 group-hover:scale-110 drop-shadow-lg"
                />
              </Link>

              <div className="flex items-center space-x-4 ml-8">
                <ul className="flex items-center space-x-1">
                <li>
                  <Link 
                    to="/" 
                    className={cn(
                      "px-4 py-2 rounded-xl font-medium text-white transition-all duration-300",
                      scrolled 
                        ? "hover:text-orange-300" 
                        : "hover:text-orange-300 hover:bg-white/10"
                    )}
                  >
                    {t?.components?.navigation?.home ?? 'Главная'}
                  </Link>
                </li>
                
                <li className="relative">
                  <button
                    onClick={(e) => handleDropdownClick(e, 'company')}
                    className={cn(
                      "flex items-center px-4 py-2 rounded-xl font-medium text-white transition-all duration-300",
                      scrolled 
                        ? "hover:text-orange-300" 
                        : "hover:text-orange-300 hover:bg-white/10"
                    )}
                  >
                    {t?.components?.navigation?.company?.main ?? 'О компании'} 
                    <ChevronDown className={cn(
                      "ml-1 h-4 w-4 transition-all duration-500 ease-out",
                      activeDropdown === 'company' && "rotate-180 text-orange-300"
                    )} />
                  </button>
                  
                  <div className={cn(
                    "absolute top-full left-0 mt-6 min-w-[360px] transition-all duration-500 ease-out origin-top transform",
                    activeDropdown === 'company' 
                      ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" 
                      : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                  )}
                  style={{ zIndex: 1001 }}
                  >
                    <div className="rounded-xl p-2 shadow-xl bg-black/90 backdrop-blur-xl border-2 border-white/20 shadow-slate-900/30">
                      <Link
                        to="/company"
                        className="flex items-center px-4 py-3 text-sm text-white hover:text-orange-300 rounded-lg transition-all duration-300 hover:bg-white/10 border-b border-white/10 mb-2 font-medium group"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <Users className="mr-3 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                        {t?.components?.navigation?.company?.home ?? 'О компании - Главная'}
                      </Link>
                      {companyMenuItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="flex items-center px-4 py-3 text-sm text-white/90 hover:text-orange-300 rounded-lg transition-all duration-300 hover:bg-white/5 group"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <item.icon className="mr-3 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>

                <li className="relative">
                  <button
                    onClick={(e) => handleDropdownClick(e, 'products')}
                    className={cn(
                      "flex items-center px-4 py-2 rounded-xl font-medium text-white transition-all duration-300",
                      scrolled 
                        ? "hover:text-orange-300" 
                        : "hover:text-orange-300 hover:bg-white/10"
                    )}
                  >
                    {t?.components?.navigation?.products?.main ?? 'Продукция'} 
                    <ChevronDown className={cn(
                      "ml-1 h-4 w-4 transition-all duration-500 ease-out",
                      activeDropdown === 'products' && "rotate-180 text-orange-300"
                    )} />
                  </button>
                  
                  <div className={cn(
                    "absolute top-full left-0 mt-6 min-w-[280px] transition-all duration-500 ease-out origin-top transform",
                    activeDropdown === 'products' 
                      ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" 
                      : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                  )}
                  style={{ zIndex: 1001 }}
                  >
                    <div className="rounded-xl p-2 shadow-xl bg-black/90 backdrop-blur-xl border-2 border-white/20 shadow-slate-900/30">
                      <Link
                        to="/products"
                        className="flex items-center px-4 py-3 text-sm text-white hover:text-orange-300 rounded-lg transition-all duration-300 hover:bg-white/10 border-b border-white/10 mb-2 font-medium group"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <ShoppingCart className="mr-3 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                        {t?.components?.navigation?.products?.home ?? 'Продукция - Главная'}
                      </Link>
                      {productMenuItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="flex items-center px-4 py-3 text-sm text-white/90 hover:text-orange-300 rounded-lg transition-all duration-300 hover:bg-white/5 group"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <item.icon className="mr-3 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>

                <li className="relative">
                  <button
                    onClick={(e) => handleDropdownClick(e, 'services')}
                    className={cn(
                      "flex items-center px-4 py-2 rounded-xl font-medium text-white transition-all duration-300",
                      scrolled 
                        ? "hover:text-orange-300" 
                        : "hover:text-orange-300 hover:bg-white/10"
                    )}
                  >
                    {t?.components?.navigation?.services?.main ?? 'Услуги'}
                    <ChevronDown className={cn(
                      "ml-1 h-4 w-4 transition-all duration-500 ease-out",
                      activeDropdown === 'services' && "rotate-180 text-orange-300"
                    )} />
                  </button>
                  
                  <div className={cn(
                    "absolute top-full left-0 mt-6 min-w-[300px] transition-all duration-500 ease-out origin-top transform",
                    activeDropdown === 'services' 
                      ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" 
                      : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                  )}
                  style={{ zIndex: 1001 }}
                  >
                    <div className="rounded-xl p-2 shadow-xl bg-black/90 backdrop-blur-xl border-2 border-white/20 shadow-slate-900/30">
                      <Link
                        to="/services"
                        className="flex items-center px-4 py-3 text-sm text-white hover:text-orange-300 rounded-lg transition-all duration-300 hover:bg-white/10 border-b border-white/10 mb-2 font-medium group"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <Cog className="mr-3 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                        {t?.components?.navigation?.services?.home ?? 'Услуги - Главная'}
                      </Link>
                      {servicesMenuItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="flex items-center px-4 py-3 text-sm text-white/90 hover:text-orange-300 rounded-lg transition-all duration-300 hover:bg-white/5 group"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <item.icon className="mr-3 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
                
                <li>
                  <Link 
                    to="/contact" 
                    className={cn(
                      "px-4 py-2 rounded-xl font-medium text-white transition-all duration-300",
                      scrolled 
                        ? "hover:text-orange-300" 
                        : "hover:text-orange-300 hover:bg-white/10"
                    )}
                  >
                    {t?.components?.navigation?.contacts ?? 'Контакты'}
                  
                  </Link>
                </li>
              </ul>
                <div className="flex items-center ml-4">
                  <LanguageSelector />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation */}
      <header 
        className={cn(
          "xl:hidden transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-0"
        )}
        style={{
          position: 'fixed',
          top: '16px',
          right: '16px',
          zIndex: 1000
        }}
      >
          <div className={cn(
          "transition-all duration-700 ease-out rounded-2xl",
          scrolled 
            ? "bg-black/60 backdrop-blur-xl border shadow-lg shadow-slate-900/30" 
            : "rounded-2xl"
        )}
        style={{
          borderColor: scrolled ? 'rgba(255, 255, 255, 0.3)' : 'transparent',
          borderWidth: '1px'
        }}
        >
          <div className="flex items-center justify-between px-4 py-3">
            <Link to="/" className="flex items-center">
              <img 
                src="/imgs/logos/mpovt.png" 
                alt="ОАО МПОВТ Logo" 
                className="h-6 w-auto drop-shadow-lg pr-4"
              />
            </Link>

            <div className="flex items-center space-x-2">
              {/* Compact language selector placed after logo in mobile header */}
              <LanguageSelector compact />

              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="ml-0 rounded-full transition-all duration-300 hover:scale-110 hover:bg-white/10 text-white hover:text-orange-300"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={cn(
        "xl:hidden transition-all duration-500 ease-out",
        mobileMenuOpen 
          ? "opacity-100 backdrop-blur-sm bg-black/30 pointer-events-auto" 
          : "opacity-0 pointer-events-none"
      )}
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        zIndex: 999
      }}
      >
        <div 
          className="absolute inset-0"
          onClick={closeMobileMenu}
        />
        
        <div className={cn(
          "absolute bg-black/90 backdrop-blur-xl border-2 border-white/20 rounded-xl shadow-xl p-6 transition-all duration-500 ease-out transform max-h-[70vh] overflow-y-auto shadow-slate-900/30",
          mobileMenuOpen 
            ? "translate-y-0 scale-100 opacity-100" 
            : "-translate-y-4 scale-95 opacity-0"
        )}
        style={{
          top: '100px',
          left: '16px',
          right: '16px'
        }}
        >
          <div className="space-y-4">
            <Link 
              to="/" 
              className="block text-lg font-medium py-2 text-white hover:text-orange-300 transition-all duration-300" 
              onClick={closeMobileMenu}
            >
              {t?.components?.navigation?.home ?? 'Главная'}
            </Link>
            
            <div>
              <div className="text-lg font-medium py-2 text-white/70">{t?.components?.navigation?.company?.main ?? 'О компании'}</div>
              <div className="ml-4 space-y-2">
                <Link 
                  to="/company"
                  className="block py-1 text-base text-white hover:text-orange-300 transition-all duration-300 font-medium" 
                  onClick={closeMobileMenu}
                >
                  {t?.components?.navigation?.company?.home ?? 'О компании - Главная'}
                </Link>
                {companyMenuItems.map(item => (
                  <Link 
                    key={item.path}
                    to={item.path} 
                    className="block py-1 text-sm text-white/80 hover:text-orange-300 transition-all duration-300" 
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
            </div>
            
            <div>
              <div className="text-lg font-medium py-2 text-white/70">{t?.components?.navigation?.products?.main ?? 'Продукция'}</div>
              <div className="ml-4 space-y-2">
                <Link 
                  to="/products"
                  className="block py-1 text-base text-white hover:text-orange-300 transition-all duration-300 font-medium" 
                  onClick={closeMobileMenu}
                >
                  {t?.components?.navigation?.products?.home ?? 'Продукция - Главная'}
                </Link>
                {productMenuItems.map(item => (
                  <Link 
                    key={item.path}
                    to={item.path} 
                    className="block py-1 text-sm text-white/80 hover:text-orange-300 transition-all duration-300" 
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <div>
              <div className="text-lg font-medium py-2 text-white/70">{t?.components?.navigation?.services?.main ?? 'Услуги'}</div>
              <div className="ml-4 space-y-2">
                <Link 
                  to="/services"
                  className="block py-1 text-base text-white hover:text-orange-300 transition-all duration-300 font-medium" 
                  onClick={closeMobileMenu}
                >
                  {t?.components?.navigation?.services?.home ?? 'Услуги - Главная'}
                </Link>
                {servicesMenuItems.map(item => (
                  <Link 
                    key={item.path}
                    to={item.path} 
                    className="block py-1 text-sm text-white/80 hover:text-orange-300 transition-all duration-300" 
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link 
              to="/contact" 
              className="block text-lg font-medium py-2 text-white hover:text-orange-300 transition-all duration-300" 
              onClick={closeMobileMenu}
            >
              {t?.components?.navigation?.contacts ?? 'Контакты'}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

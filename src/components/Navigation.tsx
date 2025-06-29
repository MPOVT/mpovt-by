
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, FileText, Users, Cog, Briefcase, MapPin, Shield, ShoppingCart, Car, Tractor, Truck, Laptop, Phone, Radio, Database, Archive } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  isLoading?: boolean;
}

export default function Navigation({ isLoading = false }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const companyMenuItems = [
    { name: "Электронное обращение", path: "/company/electronic-appeal", icon: FileText },
    { name: "Система менеджмента качества", path: "/company/quality-management", icon: Cog },
    { name: "Кооперация", path: "/company/cooperation", icon: Users },
    { name: "Вакансии", path: "/company/vacancies", icon: Briefcase },
    { name: "Арендные площади", path: "/company/rental-areas", icon: MapPin },
    { name: "Противодействие коррупции", path: "/company/anti-corruption", icon: Shield },
    { name: "Продажа неликвидов", path: "/company/asset-sales", icon: ShoppingCart }
  ];

  const productMenuItems = [
    { name: "Блоки для автомобилей", path: "/products/car-blocks", icon: Car },
    { name: "Блоки для тракторов", path: "/products/tractor-blocks", icon: Tractor },
    { name: "Блоки для комбайнов", path: "/products/combine-blocks", icon: Tractor },
    { name: "Блоки для карьерных самосвалов", path: "/products/dump-truck-blocks", icon: Truck },
    { name: "Ноутбуки", path: "/products/laptops", icon: Laptop },
    { name: "Домофоны", path: "/products/intercoms", icon: Phone },
    { name: "Специальная связь", path: "/products/special-communication", icon: Radio },
    { name: "Информационные системы", path: "/products/information-systems", icon: Database },
    { name: "Металлические шкафы", path: "/products/metal-cabinets", icon: Archive }
  ];

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
            "max-w-5xl transition-all duration-700 ease-out",
            scrolled 
              ? "bg-black/85 backdrop-blur-xl border-2 border-white/30 rounded-2xl shadow-lg px-6 py-3 shadow-slate-500/20" 
              : "px-6 py-3"
          )}>
            <div className="flex justify-between items-center">
              <Link to="/" className="flex items-center group">
                <img 
                  src="/lovable-uploads/70fca613-4992-4ede-98c2-f9c7e669d23e.png" 
                  alt="ОАО МПОВТ Logo" 
                  className="h-8 w-auto transition-all duration-300 group-hover:scale-110 drop-shadow-lg"
                />
              </Link>

              <ul className="flex items-center space-x-1 ml-8">
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
                    Главная
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
                    О компании 
                    <ChevronDown className={cn(
                      "ml-1 h-4 w-4 transition-all duration-500 ease-out",
                      activeDropdown === 'company' && "rotate-180 text-orange-300"
                    )} />
                  </button>
                  
                  <div className={cn(
                    "absolute top-full left-0 mt-4 min-w-[360px] transition-all duration-500 ease-out origin-top transform",
                    activeDropdown === 'company' 
                      ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" 
                      : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                  )}
                  style={{ zIndex: 1001 }}
                  >
                    <div className="rounded-xl p-2 shadow-xl bg-black/90 backdrop-blur-xl border-2 border-white/20 shadow-slate-500/20">
                      <Link
                        to="/company"
                        className="flex items-center px-4 py-3 text-sm text-white hover:text-orange-300 rounded-lg transition-all duration-300 hover:bg-white/10 border-b border-white/10 mb-2 font-medium group"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <Users className="mr-3 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                        О компании - Главная
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
                    Продукция 
                    <ChevronDown className={cn(
                      "ml-1 h-4 w-4 transition-all duration-500 ease-out",
                      activeDropdown === 'products' && "rotate-180 text-orange-300"
                    )} />
                  </button>
                  
                  <div className={cn(
                    "absolute top-full left-0 mt-4 min-w-[400px] transition-all duration-500 ease-out origin-top transform",
                    activeDropdown === 'products' 
                      ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" 
                      : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                  )}
                  style={{ zIndex: 1001 }}
                  >
                    <div className="rounded-xl p-2 shadow-xl bg-black/90 backdrop-blur-xl border-2 border-white/20 shadow-slate-500/20">
                      <Link
                        to="/products"
                        className="flex items-center px-4 py-3 text-sm text-white hover:text-orange-300 rounded-lg transition-all duration-300 hover:bg-white/10 border-b border-white/10 mb-2 font-medium group"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <ShoppingCart className="mr-3 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                        Продукция - Главная
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

                <li>
                  <Link 
                    to="/services" 
                    className={cn(
                      "px-4 py-2 rounded-xl font-medium text-white transition-all duration-300",
                      scrolled 
                        ? "hover:text-orange-300" 
                        : "hover:text-orange-300 hover:bg-white/10"
                    )}
                  >
                    Услуги
                  </Link>
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
                    Контакты
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/support" 
                    className={cn(
                      "px-4 py-2 rounded-xl font-medium text-white transition-all duration-300",
                      scrolled 
                        ? "hover:text-orange-300" 
                        : "hover:text-orange-300 hover:bg-white/10"
                    )}
                  >
                    Поддержка и сервис
                  </Link>
                </li>
              </ul>
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
          "transition-all duration-700 ease-out",
          scrolled 
            ? "rounded-2xl bg-black/85 backdrop-blur-xl border-2 border-white/30 shadow-lg shadow-slate-500/20" 
            : "rounded-2xl"
        )}>
          <div className="flex items-center justify-between px-4 py-3">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/70fca613-4992-4ede-98c2-f9c7e669d23e.png" 
                alt="ОАО МПОВТ Logo" 
                className="h-6 w-auto drop-shadow-lg"
              />
            </Link>

            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-3 rounded-full transition-all duration-300 hover:scale-110 hover:bg-white/10 text-white hover:text-orange-300"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
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
          "absolute bg-black/90 backdrop-blur-xl border-2 border-white/20 rounded-xl shadow-xl p-6 transition-all duration-500 ease-out transform max-h-[70vh] overflow-y-auto shadow-slate-500/20",
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
              Главная
            </Link>
            
            <div>
              <div className="text-lg font-medium py-2 text-white/70">О компании</div>
              <div className="ml-4 space-y-2">
                <Link 
                  to="/company"
                  className="block py-1 text-base text-white hover:text-orange-300 transition-all duration-300 font-medium" 
                  onClick={closeMobileMenu}
                >
                  О компании - Главная
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
              <div className="text-lg font-medium py-2 text-white/70">Продукция</div>
              <div className="ml-4 space-y-2">
                <Link 
                  to="/products"
                  className="block py-1 text-base text-white hover:text-orange-300 transition-all duration-300 font-medium" 
                  onClick={closeMobileMenu}
                >
                  Продукция - Главная
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
            
            <Link 
              to="/services" 
              className="block text-lg font-medium py-2 text-white hover:text-orange-300 transition-all duration-300" 
              onClick={closeMobileMenu}
            >
              Услуги
            </Link>
            <Link 
              to="/contact" 
              className="block text-lg font-medium py-2 text-white hover:text-orange-300 transition-all duration-300" 
              onClick={closeMobileMenu}
            >
              Контакты
            </Link>
            <Link 
              to="/support" 
              className="block text-lg font-medium py-2 text-white hover:text-orange-300 transition-all duration-300" 
              onClick={closeMobileMenu}
            >
              Поддержка и сервис
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

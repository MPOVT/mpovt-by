
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const companyMenuItems = [
    { name: "Электронное обращение", path: "/company/electronic-appeal" },
    { name: "Система менеджмента качества", path: "/company/quality-management" },
    { name: "Кооперация", path: "/company/cooperation" },
    { name: "Вакансии", path: "/company/vacancies" },
    { name: "Арендные площади", path: "/company/rental-areas" },
    { name: "Противодействие коррупции", path: "/company/anti-corruption" },
    { name: "Продажа неликвидов", path: "/company/asset-sales" }
  ];

  const productMenuItems = [
    { name: "Блоки для автомобилей", path: "/products/car-blocks" },
    { name: "Блоки для тракторов", path: "/products/tractor-blocks" },
    { name: "Блоки для комбайнов", path: "/products/combine-blocks" },
    { name: "Блоки для карьерных самосвалов", path: "/products/dump-truck-blocks" },
    { name: "Ноутбуки", path: "/products/laptops" },
    { name: "Домофоны", path: "/products/intercoms" },
    { name: "Специальная связь", path: "/products/special-communication" },
    { name: "Информационные системы", path: "/products/information-systems" },
    { name: "Металлические шкафы", path: "/products/metal-cabinets" }
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
      {/* Desktop Navigation - Island Style */}
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[9999] w-full max-w-6xl px-4 hidden xl:block">
        <nav className={cn(
          "mx-auto rounded-2xl transition-all duration-500 ease-out",
          scrolled 
            ? "bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl" 
            : "bg-transparent border border-transparent"
        )}>
          <div className="flex justify-between items-center px-6 py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img 
                src="/lovable-uploads/70fca613-4992-4ede-98c2-f9c7e669d23e.png" 
                alt="ОАО МПОВТ Logo" 
                className="h-8 w-auto transition-all duration-500 group-hover:scale-110"
              />
            </Link>

            {/* Desktop Navigation */}
            <ul className="flex items-center space-x-1">
              <li>
                <Link 
                  to="/" 
                  className="px-4 py-2 rounded-xl font-medium text-white/90 hover:text-white transition-all duration-300 hover:bg-white/10 hover:scale-105"
                >
                  Главная
                </Link>
              </li>
              
              {/* Company Dropdown */}
              <li className="relative">
                <button
                  onClick={(e) => handleDropdownClick(e, 'company')}
                  className="flex items-center px-4 py-2 rounded-xl font-medium text-white/90 hover:text-white transition-all duration-300 hover:bg-white/10 hover:scale-105"
                >
                  О компании 
                  <ChevronDown className={cn(
                    "ml-1 h-4 w-4 transition-transform duration-300",
                    activeDropdown === 'company' && "rotate-180"
                  )} />
                </button>
                
                <div className={cn(
                  "absolute top-full left-0 mt-2 min-w-[320px] transition-all duration-300 ease-out origin-top z-50",
                  activeDropdown === 'company' 
                    ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" 
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                )}>
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-2 shadow-2xl">
                    <Link
                      to="/company"
                      className="block px-4 py-3 text-sm text-white/90 hover:text-white rounded-lg transition-all duration-300 hover:bg-white/20 border-b border-white/10 mb-2 font-medium"
                      onClick={() => setActiveDropdown(null)}
                    >
                      О компании - Главная
                    </Link>
                    {companyMenuItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-3 text-sm text-white/80 hover:text-white rounded-lg transition-all duration-300 hover:bg-white/10"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>

              {/* Products Dropdown */}
              <li className="relative">
                <button
                  onClick={(e) => handleDropdownClick(e, 'products')}
                  className="flex items-center px-4 py-2 rounded-xl font-medium text-white/90 hover:text-white transition-all duration-300 hover:bg-white/10 hover:scale-105"
                >
                  Продукция 
                  <ChevronDown className={cn(
                    "ml-1 h-4 w-4 transition-transform duration-300",
                    activeDropdown === 'products' && "rotate-180"
                  )} />
                </button>
                
                <div className={cn(
                  "absolute top-full left-0 mt-2 min-w-[360px] transition-all duration-300 ease-out origin-top z-50",
                  activeDropdown === 'products' 
                    ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" 
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                )}>
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-2 shadow-2xl">
                    <Link
                      to="/products"
                      className="block px-4 py-3 text-sm text-white/90 hover:text-white rounded-lg transition-all duration-300 hover:bg-white/20 border-b border-white/10 mb-2 font-medium"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Продукция - Главная
                    </Link>
                    {productMenuItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-3 text-sm text-white/80 hover:text-white rounded-lg transition-all duration-300 hover:bg-white/10"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>

              <li>
                <Link 
                  to="/services" 
                  className="px-4 py-2 rounded-xl font-medium text-white/90 hover:text-white transition-all duration-300 hover:bg-white/10 hover:scale-105"
                >
                  Услуги
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="px-4 py-2 rounded-xl font-medium text-white/90 hover:text-white transition-all duration-300 hover:bg-white/10 hover:scale-105"
                >
                  Контакты
                </Link>
              </li>
              <li>
                <Link 
                  to="/support" 
                  className="px-4 py-2 rounded-xl font-medium text-white/90 hover:text-white transition-all duration-300 hover:bg-white/10 hover:scale-105"
                >
                  Поддержка и сервис
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation - Compact top-right */}
      <header className="fixed top-4 right-4 z-[9999] xl:hidden">
        <div className={cn(
          "rounded-2xl transition-all duration-500 ease-out",
          scrolled 
            ? "bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl" 
            : "bg-white/5 backdrop-blur-sm border border-white/10"
        )}>
          <div className="flex items-center justify-between px-4 py-3">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/70fca613-4992-4ede-98c2-f9c7e669d23e.png" 
                alt="ОАО МПОВТ Logo" 
                className="h-6 w-auto"
              />
            </Link>

            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-3 rounded-full transition-all duration-300 hover:scale-110 hover:bg-white/10 text-white/90 hover:text-white"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 xl:hidden">
          <div 
            className="absolute inset-0 backdrop-blur-sm bg-black/30"
            onClick={closeMobileMenu}
          />
          
          <div className="absolute top-20 left-4 right-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl p-6">
            <div className="space-y-4 max-h-[70vh] overflow-y-auto">
              <Link 
                to="/" 
                className="block text-lg font-medium py-2 text-white/90 hover:text-white transition-all duration-300" 
                onClick={closeMobileMenu}
              >
                Главная
              </Link>
              
              <div>
                <div className="text-lg font-medium py-2 text-white/70">О компании</div>
                <div className="ml-4 space-y-2">
                  <Link 
                    to="/company"
                    className="block py-1 text-base text-white/90 hover:text-white transition-all duration-300 font-medium" 
                    onClick={closeMobileMenu}
                  >
                    О компании - Главная
                  </Link>
                  {companyMenuItems.map(item => (
                    <Link 
                      key={item.path}
                      to={item.path} 
                      className="block py-1 text-sm text-white/80 hover:text-white transition-all duration-300" 
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
                    className="block py-1 text-base text-white/90 hover:text-white transition-all duration-300 font-medium" 
                    onClick={closeMobileMenu}
                  >
                    Продукция - Главная
                  </Link>
                  {productMenuItems.map(item => (
                    <Link 
                      key={item.path}
                      to={item.path} 
                      className="block py-1 text-sm text-white/80 hover:text-white transition-all duration-300" 
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link 
                to="/services" 
                className="block text-lg font-medium py-2 text-white/90 hover:text-white transition-all duration-300" 
                onClick={closeMobileMenu}
              >
                Услуги
              </Link>
              <Link 
                to="/contact" 
                className="block text-lg font-medium py-2 text-white/90 hover:text-white transition-all duration-300" 
                onClick={closeMobileMenu}
              >
                Контакты
              </Link>
              <Link 
                to="/support" 
                className="block text-lg font-medium py-2 text-white/90 hover:text-white transition-all duration-300" 
                onClick={closeMobileMenu}
              >
                Поддержка и сервис
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

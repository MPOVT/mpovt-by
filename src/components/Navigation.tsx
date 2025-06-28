import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
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
      setScrolled(window.scrollY > 20);
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

  // Prevent body scroll when mobile menu is open
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
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out",
        "bg-white/15 dark:bg-black/15 backdrop-blur-xl py-4",
        scrolled 
          ? "border-b border-white/20 dark:border-white/10 shadow-2xl" 
          : "border-b border-transparent"
      )}>
        <nav className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src="/lovable-uploads/70fca613-4992-4ede-98c2-f9c7e669d23e.png" 
              alt="ОАО МПОВТ Logo" 
              className="h-8 xl:h-10 w-auto transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden xl:flex items-center space-x-2">
            <li>
              <Link 
                to="/" 
                className="px-3 xl:px-4 py-2 rounded-lg font-medium text-sm xl:text-base transition-all duration-300 hover:bg-white/10 hover:text-primary hover:scale-105 hover:shadow-lg"
              >
                Главная
              </Link>
            </li>
            
            {/* Company Dropdown */}
            <li className="relative">
              <button
                onClick={(e) => handleDropdownClick(e, 'company')}
                className="flex items-center px-3 xl:px-4 py-2 rounded-lg font-medium text-sm xl:text-base transition-all duration-300 hover:bg-white/10 hover:text-primary hover:scale-105 hover:shadow-lg"
              >
                О компании 
                <ChevronDown className={cn(
                  "ml-1 h-4 w-4 transition-transform duration-300",
                  activeDropdown === 'company' && "rotate-180"
                )} />
              </button>
              
              <div className={cn(
                "absolute top-full left-0 mt-4 min-w-[320px] transition-all duration-300 ease-out origin-top",
                activeDropdown === 'company' 
                  ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" 
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              )}>
                <div className="bg-white/95 dark:bg-black/95 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl p-2 shadow-2xl">
                  <Link
                    to="/company"
                    className="block px-4 py-3 text-sm rounded-lg transition-all duration-300 hover:bg-white/20 hover:text-primary border-b border-white/10 mb-2 font-medium"
                    onClick={() => setActiveDropdown(null)}
                  >
                    О компании - Главная
                  </Link>
                  {companyMenuItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-3 text-sm rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-primary"
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
                className="flex items-center px-3 xl:px-4 py-2 rounded-lg font-medium text-sm xl:text-base transition-all duration-300 hover:bg-white/10 hover:text-primary hover:scale-105 hover:shadow-lg"
              >
                Продукция 
                <ChevronDown className={cn(
                  "ml-1 h-4 w-4 transition-transform duration-300",
                  activeDropdown === 'products' && "rotate-180"
                )} />
              </button>
              
              <div className={cn(
                "absolute top-full left-0 mt-4 min-w-[360px] transition-all duration-300 ease-out origin-top",
                activeDropdown === 'products' 
                  ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" 
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              )}>
                <div className="bg-white/95 dark:bg-black/95 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl p-2 shadow-2xl">
                  <Link
                    to="/products"
                    className="block px-4 py-3 text-sm rounded-lg transition-all duration-300 hover:bg-white/20 hover:text-primary border-b border-white/10 mb-2 font-medium"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Продукция - Главная
                  </Link>
                  {productMenuItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-3 text-sm rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-primary"
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
                className="px-3 xl:px-4 py-2 rounded-lg font-medium text-sm xl:text-base transition-all duration-300 hover:bg-white/10 hover:text-primary hover:scale-105 hover:shadow-lg"
              >
                Услуги
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="px-3 xl:px-4 py-2 rounded-lg font-medium text-sm xl:text-base transition-all duration-300 hover:bg-white/10 hover:text-primary hover:scale-105 hover:shadow-lg"
              >
                Контакты
              </Link>
            </li>
            <li>
              <Link 
                to="/support" 
                className="px-3 xl:px-4 py-2 rounded-lg font-medium text-sm xl:text-base transition-all duration-300 hover:bg-white/10 hover:text-primary hover:scale-105 hover:shadow-lg"
              >
                Поддержка и сервис
              </Link>
            </li>
          </ul>

          {/* Desktop Actions */}
          <div className="hidden xl:flex items-center space-x-3">
            <ThemeToggle />
            <Button asChild className="btn-primary-smooth text-sm xl:text-base px-4 xl:px-6">
              <Link to="/contact">Связаться с нами</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="xl:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-full transition-all duration-300 hover:scale-110 hover:bg-white/10"
            >
              {mobileMenuOpen ? <X className="h-5 w-5 xl:h-6 xl:w-6" /> : <Menu className="h-5 w-5 xl:h-6 xl:w-6" />}
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 xl:hidden">
          {/* Background overlay */}
          <div 
            className={cn(
              "absolute inset-0 transition-all duration-500 ease-out",
              "backdrop-blur-sm bg-black/30"
            )}
            onClick={closeMobileMenu}
          />
          
          {/* Mobile menu content */}
          <div className={cn(
            "absolute top-20 left-4 right-4 bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-xl shadow-2xl p-4 xl:p-6 transition-all duration-300 ease-out",
            "animate-slide-down"
          )}>
            <div className="space-y-3 xl:space-y-4 max-h-[70vh] overflow-y-auto">
              <Link 
                to="/" 
                className="block text-base xl:text-lg font-medium py-2 transition-all duration-300 hover:text-primary" 
                onClick={closeMobileMenu}
              >
                Главная
              </Link>
              
              <div>
                <div className="text-base xl:text-lg font-medium py-2 text-muted-foreground">О компании</div>
                <div className="ml-4 space-y-2">
                  <Link 
                    to="/company"
                    className="block py-1 text-sm xl:text-base transition-all duration-300 hover:text-primary font-medium" 
                    onClick={closeMobileMenu}
                  >
                    О компании - Главная
                  </Link>
                  {companyMenuItems.map(item => (
                    <Link 
                      key={item.path}
                      to={item.path} 
                      className="block py-1 text-sm xl:text-base transition-all duration-300 hover:text-primary" 
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="text-base xl:text-lg font-medium py-2 text-muted-foreground">Продукция</div>
                <div className="ml-4 space-y-2">
                  <Link 
                    to="/products"
                    className="block py-1 text-sm xl:text-base transition-all duration-300 hover:text-primary font-medium" 
                    onClick={closeMobileMenu}
                  >
                    Продукция - Главная
                  </Link>
                  {productMenuItems.map(item => (
                    <Link 
                      key={item.path}
                      to={item.path} 
                      className="block py-1 text-sm xl:text-base transition-all duration-300 hover:text-primary" 
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link 
                to="/services" 
                className="block text-base xl:text-lg font-medium py-2 transition-all duration-300 hover:text-primary" 
                onClick={closeMobileMenu}
              >
                Услуги
              </Link>
              <Link 
                to="/contact" 
                className="block text-base xl:text-lg font-medium py-2 transition-all duration-300 hover:text-primary" 
                onClick={closeMobileMenu}
              >
                Контакты
              </Link>
              <Link 
                to="/support" 
                className="block text-base xl:text-lg font-medium py-2 transition-all duration-300 hover:text-primary" 
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

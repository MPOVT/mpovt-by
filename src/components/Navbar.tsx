
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "glass-nav py-3 shadow-lg" : "bg-transparent py-5"
    )}>
      <nav className="container flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">М</span>
          </div>
          <span className="font-bold text-xl">МПОВТ</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-8">
          <li>
            <Link to="/" className="font-medium transition-colors hover:text-primary">
              Главная
            </Link>
          </li>
          
          <li className="relative">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center font-medium transition-colors hover:text-primary">
                О компании <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass-card border-white/20">
                {companyMenuItems.map(item => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link to={item.path} className="w-full cursor-pointer">
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </li>

          <li className="relative">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center font-medium transition-colors hover:text-primary">
                Продукция <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass-card border-white/20">
                {productMenuItems.map(item => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link to={item.path} className="w-full cursor-pointer">
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </li>

          <li>
            <Link to="/services" className="font-medium transition-colors hover:text-primary">
              Услуги
            </Link>
          </li>
          <li>
            <Link to="/contact" className="font-medium transition-colors hover:text-primary">
              Контакты
            </Link>
          </li>
          <li>
            <Link to="/support" className="font-medium transition-colors hover:text-primary">
              Поддержка и сервис
            </Link>
          </li>
        </ul>

        <div className="hidden lg:flex items-center space-x-2">
          <ThemeToggle />
          <Button asChild className="btn-primary">
            <Link to="/contact">Связаться с нами</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="rounded-full">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 z-40 glass-nav lg:hidden transition-opacity duration-300",
        mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}>
        <div className={cn(
          "fixed inset-y-0 right-0 w-3/4 max-w-sm glass-card shadow-xl p-6 transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="flex flex-col h-full">
            <div className="flex justify-end mb-8">
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)} className="rounded-full">
                <X className="h-6 w-6" />
              </Button>
            </div>
            <ul className="space-y-4 flex-1 overflow-y-auto">
              <li>
                <Link to="/" className="block text-lg font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                  Главная
                </Link>
              </li>
              <li>
                <div className="text-lg font-medium py-2 text-muted-foreground">О компании</div>
                <ul className="ml-4 space-y-2">
                  {companyMenuItems.map(item => (
                    <li key={item.path}>
                      <Link to={item.path} className="block py-1 text-sm" onClick={() => setMobileMenuOpen(false)}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <div className="text-lg font-medium py-2 text-muted-foreground">Продукция</div>
                <ul className="ml-4 space-y-2">
                  {productMenuItems.map(item => (
                    <li key={item.path}>
                      <Link to={item.path} className="block py-1 text-sm" onClick={() => setMobileMenuOpen(false)}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <Link to="/services" className="block text-lg font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                  Услуги
                </Link>
              </li>
              <li>
                <Link to="/contact" className="block text-lg font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                  Контакты
                </Link>
              </li>
              <li>
                <Link to="/support" className="block text-lg font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                  Поддержка и сервис
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

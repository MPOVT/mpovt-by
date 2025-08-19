import React, { useState, useRef, useEffect } from "react";
import Footer from "@/components/Footer";
import { 
  MainPageHero, 
  PriorityProductsSection, 
  InteractiveFeatures, 
  SecondaryProductsSection, 
  AchievementsSection 
} from "@/components/common";
import { 
  Factory, 
  Settings, 
  Shield, 
  Award,
  Car,
  Radio,
  FileText,
} from "lucide-react";

const IndexRefactored = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Factory,
      title: "Современное производство",
      description: "Высокотехнологичное оборудование и автоматизация обеспечивают качество мирового уровня",
      fullDescription: "Наше предприятие оснащено современным высокотехнологичным оборудованием и автоматизированными линиями. Постоянные инвестиции в модернизацию позволяют выпускать продукцию мирового уровня",
      backgroundImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      colorScheme: {
        primary: "text-blue-600 dark:text-blue-400",
        background: "bg-blue-500/15 dark:bg-blue-900/30",
        activeBackground: "bg-blue-500/20 dark:bg-blue-600/30",
        activeBorder: "border-blue-500/50",
        iconActive: "bg-blue-500/60 text-white",
        iconInactive: "bg-blue-500/20 text-blue-600 dark:text-blue-400",
        gradientColor: "blue-500/30"
      }
    },
    {
      icon: Settings,
      title: "Инновационные технологии",
      description: "Передовые решения и современные технологии для создания уникальных продуктов",
      fullDescription: "Мы используем самые передовые технологии и инновационные подходы в разработке и производстве. Собственный центр R&D позволяет создавать уникальные решения для наших клиентов",
      backgroundImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      colorScheme: {
        primary: "text-emerald-600 dark:text-emerald-400",
        background: "bg-emerald-500/15 dark:bg-emerald-900/30",
        activeBackground: "bg-emerald-500/20 dark:bg-emerald-600/30",
        activeBorder: "border-emerald-500/50",
        iconActive: "bg-emerald-500/60 text-white",
        iconInactive: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
        gradientColor: "emerald-500/30"
      }
    },
    {
      icon: Shield,
      title: "Надежность и качество",
      description: "Строгий контроль качества и международные стандарты ISO",
      fullDescription: "Система менеджмента качества соответствует международным стандартам ISO 9001. Каждый этап производства контролируется для обеспечения максимальной надежности продукции",
      backgroundImage: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop",
      colorScheme: {
        primary: "text-purple-600 dark:text-purple-400",
        background: "bg-purple-500/15 dark:bg-purple-900/30",
        activeBackground: "bg-purple-500/20 dark:bg-purple-600/30",
        activeBorder: "border-purple-500/50",
        iconActive: "bg-purple-500/60 text-white",
        iconInactive: "bg-purple-500/20 text-purple-600 dark:text-purple-400",
        gradientColor: "purple-500/30"
      }
    },
    {
      icon: Award,
      title: "Экспертность и опыт",
      description: "Более 65 лет опыта в производстве электронных компонентов",
      fullDescription: "За более чем 65-летнюю историю мы накопили огромный опыт в производстве электронных компонентов. Наши специалисты - признанные эксперты в своих областях",
      backgroundImage: "https://mpovt.by/gallery_gen/fccf496500ea44cf6f53d1465fccbc28_fit.jpg?ts=1746513902",
      colorScheme: {
        primary: "text-amber-600 dark:text-amber-400",
        background: "bg-amber-500/15 dark:bg-amber-900/30",
        activeBackground: "bg-amber-500/20 dark:bg-amber-600/30",
        activeBorder: "border-amber-500/50",
        iconActive: "bg-amber-500/60 text-white",
        iconInactive: "bg-amber-500/20 text-amber-600 dark:text-amber-400",
        gradientColor: "amber-500/30"
      }
    }
  ];

  const priorityProducts = [
    {
      title: "ПК",
      subtitle: "H-Top",
      description: "Высокопроизводительные потребительские компьютеры для критически важных задач в экстремальных условиях",
      fullDescription: "Наши потребительские ПК H-Top созданы для работы в самых суровых условиях. Защищенные корпуса IP65, расширенный температурный диапазон от -40°C до +85°C, антивибрационная защита и модульная архитектура обеспечивают надежность в любых применениях",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      image: "/imgs/mini-pc/H-top.jpg",
      link: "/products/computers",
      gradient: "from-amber-600 via-slate-500 to-slate-900",
      bgGradient: "from-amber-900/50 via-slate-900/20 to-slate-900/50",
      borderHover: "hover:border-orange-400/50",
      buttonShine: "before:from-transparent before:via-orange-400/60 before:to-transparent"
    },
    {
      title: "Ноутбуки",
      subtitle: "H-Book",
      description: "Мобильные защищенные решения для полевых условий и критических миссий",
      fullDescription: "H-Book - это революция в мобильных потребительских решениях. Ударопрочный магниевый корпус, водонепроницаемость, 20-часовая автономность и возможность горячей замены батарей делают их незаменимыми для полевых работ",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      image: "/imgs/laptops/h-book-pro.jpg",
      link: "/products/laptops",
      gradient: "from-amber-600 via-amber-500 to-orange-400",
      bgGradient: "from-amber-900/50 via-slate-900/20 to-slate-900/50",
      borderHover: "hover:border-orange-400/50",
      buttonShine: "before:from-transparent before:via-orange-400/60 before:to-transparent"
    },
    {
      title: "Мониторы",
      subtitle: "H-Monitor",
      description: "Профессиональные дисплеи повышенной надежности для потребительского мониторинга",
      fullDescription: "Наши потребительские мониторы H обеспечивают кристально четкое изображение в любых условиях освещения. Антибликовые покрытия, сенсорные технологии и широкие углы обзора гарантируют комфортную работу операторов",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      image: "/imgs/displays/h-monitor.jpg",
      link: "/products/monitors",
      gradient: "from-amber-600 via-amber-500 to-orange-400",
      bgGradient: "from-amber-900/50 via-slate-900/20 to-slate-900/50",
      borderHover: "hover:border-orange-400/50",
      buttonShine: "before:from-transparent before:via-orange-400/60 before:to-transparent"
    },
    {
      title: "SSD накопители",
      subtitle: "H-Storage",
      description: "Твердотельные накопители промышленного класса для критически важных применений",
      fullDescription: "H-Storage SSD накопители разработаны для работы в промышленных условиях с расширенным температурным диапазоном. Высокая скорость, надежность и защита данных делают их идеальными для критически важных систем",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      image: "/imgs/ssd/h-storage.jpg",
      link: "/products/h-ssd",
      gradient: "from-amber-600 via-amber-500 to-orange-400",
      bgGradient: "from-amber-900/50 via-slate-900/20 to-slate-900/50",
      borderHover: "hover:border-orange-400/50",
      buttonShine: "before:from-transparent before:via-orange-400/60 before:to-transparent"
    }
  ];

  const secondaryProducts = [
    {
      title: "Автокомпоненты",
      description: "Электронные блоки управления для автомобильной промышленности",
      icon: Car,
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop",
      link: "/products/car-blocks"
    },
    {
      title: "Средства связи",
      description: "Системы связи и телекоммуникационное оборудование",
      icon: Radio,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      link: "/products/special-communication"
    },
    {
      title: "Информационные системы",
      description: "Комплексные IT-решения для бизнеса любых размеров",
      icon: FileText,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      link: "/products/information-systems"
    }
  ];

  const achievements = [
    {
      number: "65+",
      label: "лет опыта",
      description: "Богатая история с 1956 года"
    },
    {
      number: "500+",
      label: "сотрудников",
      description: "Квалифицированная команда"
    },
    {
      number: "50+",
      label: "стран",
      description: "География поставок"
    },
    {
      number: "ISO 9001",
      label: "сертификация",
      description: "Международные стандарты"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <MainPageHero
        logoSrc="/imgs/logos/mpovt.png"
        logoAlt="ОАО МПОВТ Logo"
        subtitle="Ведущий производитель электронных компонентов и автокомпонентов с 1956 года"
        scrollIndicatorText="Прокрутите вниз"
      />

      <PriorityProductsSection
        title="Флагманская продукция"
        subtitle="Революционные решения потребительской вычислительной техники нового поколения"
        products={priorityProducts}
      />

      <InteractiveFeatures
        title="Инновационные решения для промышленности"
        subtitle="Современные технологии и многолетний опыт позволяют нам создавать продукцию высочайшего качества"
        features={features}
      />

      <SecondaryProductsSection
        title="Дополнительные направления"
        subtitle="Проверенные решения для различных отраслей промышленности"
        products={secondaryProducts}
      />

      <AchievementsSection
        title="Наши достижения"
        subtitle="Цифры, которые говорят о нашем успехе и надежности"
        achievements={achievements}
      />

      <Footer />
    </div>
  );
};

export default IndexRefactored;

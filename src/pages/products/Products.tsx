import React from "react";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import {
  PageHero,
  CTASection,
  PriorityProductsGridSection,
  SecondaryProductsSection,
  SectionHeader,
  IconCard,
} from "@/components/common";
import { MEDIA_ASSETS } from "@/lib/media-assets";
import {
  Car,
  FileText,
  Cpu,
  Shield,
  Zap,
  Thermometer,
  Battery,
  Wifi,
  Award,
  MapPin,
  Users,
  CheckCircle,
} from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const Products: React.FC = () => {
  const { t } = useLanguage();

  const priorityProducts = [
    {
      title: "H-Top",
      subtitle: t?.products?.priority?.computers?.card?.subtitle ?? "Мини-ПК",
      description:
        t?.products?.priority?.computers?.card?.description ??
        "Компактные высокопроизводительные компьютеры",
      fullDescription:
        t?.products?.priority?.computers?.card?.fullDescription ??
        "Мощные мини-компьютеры с производительностью полноразмерных систем.",
      videoUrl: "/videos/multi-render.mp4",
      image: MEDIA_ASSETS.priorityProducts.miniPc,
      link: "/products/computers",
      gradient: "from-amber-400 to-orange-500",
      bgGradient: "from-amber-900/20 to-orange-900/20",
      borderHover: "hover:border-amber-400/50",
      buttonShine: "from-amber-400/20 to-orange-400/20",
    },
    {
      title: "H-Book",
      subtitle: t?.products?.priority?.laptops?.card?.subtitle ?? "Ноутбуки",
      description:
        t?.products?.priority?.laptops?.card?.description ??
        "Мобильные защищенные решения",
      fullDescription:
        t?.products?.priority?.laptops?.card?.fullDescription ??
        "Профессиональные ноутбуки для мобильной работы.",
      videoUrl: "/videos/h-book.mp4",
      image: MEDIA_ASSETS.priorityProducts.laptop,
      link: "/products/laptops",
      gradient: "from-amber-400 to-orange-500",
      bgGradient: "from-amber-900/20 to-orange-900/20",
      borderHover: "hover:border-amber-400/50",
      buttonShine: "from-amber-400/20 to-orange-400/20",
    },
    {
      title: "H-Monitor",
      subtitle: t?.products?.priority?.monitors?.card?.subtitle ?? "Мониторы",
      description:
        t?.products?.priority?.monitors?.card?.description ??
        "Профессиональные дисплеи",
      fullDescription:
        t?.products?.priority?.monitors?.card?.fullDescription ??
        "Высококачественные мониторы для оператора.",
      videoUrl: "/videos/h-tab.mp4",
      image: MEDIA_ASSETS.priorityProducts.monitor,
      link: "/products/monitors",
      gradient: "from-amber-400 to-orange-500",
      bgGradient: "from-amber-900/20 to-orange-900/20",
      borderHover: "hover:border-amber-400/50",
      buttonShine: "from-amber-400/20 to-orange-400/20",
    },
    {
      title: "H-Storage",
      subtitle: t?.products?.priority?.ssd?.card?.subtitle ?? "Накопители",
      description:
        t?.products?.priority?.ssd?.card?.description ??
        "Высокоскоростные NVMe SSD накопители",
      fullDescription:
        t?.products?.priority?.ssd?.card?.fullDescription ??
        "Сверхбыстрые NVMe накопители для критичных задач.",
      videoUrl: "/videos/multi-render.mp4",
      image: MEDIA_ASSETS.priorityProducts.ssd,
      link: "/products/storage",
      gradient: "from-amber-400 to-orange-500",
      bgGradient: "from-amber-900/20 to-orange-900/20",
      borderHover: "hover:border-amber-400/50",
      buttonShine: "from-amber-400/20 to-orange-400/20",
    },
  ];

  const secondaryProducts = [
    {
      title:
        t?.products?.additional?.autoComponents?.title ?? "Автокомпоненты",
      description:
        t?.products?.additional?.autoComponents?.description ??
        "Электронные блоки управления для автомобильной промышленности",
      icon: Car,
      image:
        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop",
      link: "/products/car-blocks",
    },
    {
      title:
        t?.products?.additional?.itSystems?.title ??
        "Информационные системы",
      description:
        t?.products?.additional?.itSystems?.description ??
        "Комплексные IT-решения для бизнеса",
      icon: FileText,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      link: "/products/information-systems",
    },
  ];

  const technologies = [
    {
      icon: Cpu,
      title: t?.products?.main?.techCards?.performance?.title ??
        "Высокая производительность",
      description:
        t?.products?.main?.techCards?.performance?.description ??
        "Современные процессоры Intel и AMD для максимальной производительности",
      color: {
        icon: "text-cyan-400",
        bg: "bg-cyan-500/20",
        bgHover: "bg-cyan-500/40",
        border: "from-cyan-500/20 to-blue-500/20",
        cardHover: "bg-cyan-500/20",
      },
    },
    {
      icon: Shield,
      title: t?.products?.main?.techCards?.reliability?.title ?? "Надёжность",
      description:
        t?.products?.main?.techCards?.reliability?.description ??
        "Расширенное тестирование и контроль качества на всех этапах",
      color: {
        icon: "text-emerald-400",
        bg: "bg-emerald-500/20",
        bgHover: "bg-emerald-500/40",
        border: "from-emerald-500/20 to-teal-500/20",
        cardHover: "bg-emerald-500/20",
      },
    },
    {
      icon: Zap,
      title: t?.products?.main?.techCards?.efficiency?.title ?? "Энергоэффективность",
      description:
        t?.products?.main?.techCards?.efficiency?.description ??
        "Оптимизированное энергопотребление до 90% эффективности",
      color: {
        icon: "text-purple-400",
        bg: "bg-purple-500/20",
        bgHover: "bg-purple-500/40",
        border: "from-purple-500/20 to-pink-500/20",
        cardHover: "bg-purple-500/20",
      },
    },
    {
      icon: Thermometer,
      title: t?.products?.main?.techCards?.temperature?.title ?? "Расширенный диапазон",
      description:
        t?.products?.main?.techCards?.temperature?.description ??
        "Работа в условиях от -40°C до +85°C без потери производительности",
      color: {
        icon: "text-orange-400",
        bg: "bg-orange-500/20",
        bgHover: "bg-orange-500/40",
        border: "from-orange-500/20 to-red-500/20",
        cardHover: "bg-orange-500/20",
      },
    },
    {
      icon: Battery,
      title: t?.products?.main?.techCards?.battery?.title ?? "Длительная автономность",
      description:
        t?.products?.main?.techCards?.battery?.description ??
        "Управление питанием для работы до 12 часов без подзарядки",
      color: {
        icon: "text-yellow-400",
        bg: "bg-yellow-500/20",
        bgHover: "bg-yellow-500/40",
        border: "from-yellow-500/20 to-orange-500/20",
        cardHover: "bg-yellow-500/20",
      },
    },
    {
      icon: Wifi,
      title: t?.products?.main?.techCards?.connectivity?.title ?? "Современная связь",
      description:
        t?.products?.main?.techCards?.connectivity?.description ??
        "Wi-Fi 6E, Bluetooth 5.3 для максимальной совместимости",
      color: {
        icon: "text-indigo-400",
        bg: "bg-indigo-500/20",
        bgHover: "bg-indigo-500/40",
        border: "from-indigo-500/20 to-blue-500/20",
      },
    },
  ];

  const advantages = [
    {
      icon: MapPin,
      title: t?.products?.main?.advantagesCards?.local?.title ?? "Отечественное производство",
      description:
        t?.products?.main?.advantagesCards?.local?.description ??
        "Продукция производится в Беларуси с использованием современных технологий и международными стандартами качества",
      color: {
        icon: "text-emerald-400",
        bg: "bg-emerald-500/20",
        bgHover: "bg-emerald-500/40",
        border: "from-emerald-500/20 to-teal-500/20",
        cardHover: "bg-emerald-500/20",
      },
    },
    {
      icon: Award,
      title: t?.products?.main?.advantagesCards?.iso?.title ?? "Сертификация ISO",
      description:
        t?.products?.main?.advantagesCards?.iso?.description ??
        "Система менеджмента качества сертифицирована по международным стандартам ISO 9001 и IATF 16949",
      color: {
        icon: "text-amber-400",
        bg: "bg-amber-500/20",
        bgHover: "bg-amber-500/40",
        border: "from-amber-500/20 to-orange-500/20",
        cardHover: "bg-amber-500/20",
      },
    },
    {
      icon: Users,
      title: t?.products?.main?.advantagesCards?.team?.title ?? "Экспертная команда",
      description:
        t?.products?.main?.advantagesCards?.team?.description ??
        "Высококвалифицированные специалисты с многолетним опытом разработки и производства электронной техники",
      color: {
        icon: "text-cyan-400",
        bg: "bg-cyan-500/20",
        bgHover: "bg-cyan-500/40",
        border: "from-cyan-500/20 to-blue-500/20",
        cardHover: "bg-cyan-500/20",
      },
    },
    {
      icon: CheckCircle,
      title: t?.products?.main?.advantagesCards?.fullCycle?.title ?? "Полный цикл производства",
      description:
        t?.products?.main?.advantagesCards?.fullCycle?.description ??
        "От разработки и проектирования до серийного производства и послепродажного обслуживания",
      color: {
        icon: "text-purple-400",
        bg: "bg-purple-500/20",
        bgHover: "bg-purple-500/40",
        border: "from-purple-500/20 to-pink-500/20",
        cardHover: "bg-purple-500/20",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <PageHero
        title={t?.products?.main?.pageTitle ?? "Продукция"}
        description={
          t?.products?.main?.pageSubtitle ??
          "Комплексные решения для современных технологических вызовов"
        }
        backgroundVariant="default"
      />

      {/* Priority Products Section */}
      <PriorityProductsGridSection
        title={t?.products?.main?.priorityTitle ?? "Флагманская продукция"}
        subtitle={
          t?.products?.main?.prioritySubtitle ??
          "Инновационные решения белорусского производства с мировыми стандартами качества"
        }
        products={priorityProducts}
        buttonLabel={t?.components?.buttons?.readMore ?? 'Подробнее'}
      />

      {/* Технологии и инновации */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-black to-slate-900/50 relative">
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            title={t?.products?.main?.techTitle ?? "Технологии и инновации"}
            description={
              t?.products?.main?.techSubtitle ??
              "Передовые разработки для решения современных технологических задач"
            }
            gradientColors="from-cyan-400 via-blue-400 to-purple-400"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {technologies.map((tech, index) => (
              <IconCard
                key={index}
                icon={tech.icon}
                title={tech.title}
                description={tech.description}
                color={tech.color}
                variant="quality"
                animationDelay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Преимущества отечественного производства */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-slate-900/50 to-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[36rem] md:h-[36rem] bg-gradient-to-br from-emerald-400/10 to-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            title={t?.products?.main?.advantagesTitle ?? "Преимущества нашего производства"}
            description={t?.products?.main?.advantagesSubtitle ?? "Белорусское качество с международными стандартами"}
            gradientColors="from-green-400 via-breeze-400 to-indigo-400"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              let solidBg = advantage.color.bg;
              let hoverBg = advantage.color.bgHover;
              let iconColor = advantage.color.icon;

              // switch (advantage.title) {
              //   case 'Отечественное производство':
              //     solidBg = 'bg-emerald-500/20';
              //     hoverBg = 'hover:bg-emerald-900/40';
              //     break;
              //   case 'Сертификация ISO':
              //     solidBg = 'bg-amber-500/20';
              //     hoverBg = 'hover:bg-amber-900/40';
              //     break;
              //   case 'Экспертная команда':
              //     solidBg = 'bg-cyan-500/20';
              //     hoverBg = 'hover:bg-cyan-900/40';
              //     break;
              //   case 'Полный цикл производства':
              //     solidBg = 'bg-purple-500/20';
              //     hoverBg = 'hover:bg-purple-900/40';
              //     break;
              //   default:
              //     solidBg = 'bg-slate-500/20';
              //     hoverBg = 'hover:bg-slate-800/40';
              // }

              return (
                <Card
                  key={index}
                  className={`group overflow-hidden backdrop-blur-xl bg-slate-800/10 border border-slate-700/30 transition-all duration-500 hover:shadow-xl hover:shadow-slate-900/50 hover:-translate-y-2 ${hoverBg}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-6 h-full flex flex-col">
                    <div className="mb-6">
                      <div className={`inline-block p-4 rounded-2xl transition-all duration-500 group-hover:scale-110 ${solidBg}`}>
                        <Icon className={`w-8 h-8 ${iconColor} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white/90 transition-colors">
                      {advantage.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed flex-grow group-hover:text-slate-200 transition-colors">
                      {advantage.description}
                    </p>
                    <div className="mt-6 pt-4 border-slate-700/50">
                      <div className={`h-1 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${solidBg}`}></div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Secondary Products Section */}
      <SecondaryProductsSection
        title={t?.products?.additional?.title ?? "Дополнительные направления"}
        subtitle={t?.products?.additional?.description ?? "Проверенные решения для различных отраслей промышленности"}
        products={secondaryProducts}
        buttonLabel={t?.components?.buttons?.readMore ?? 'Подробнее'}
      />

      <CTASection
        title={t?.products?.main?.ctaTitle ?? "Нужна консультация?"}
        description={t?.products?.main?.ctaDescription ?? "Наши эксперты помогут подобрать идеальное решение для ваших бизнес-задач"}
        primaryButtonText={t?.products?.main?.ctaButton ?? "Связаться с нами"}
        primaryButtonLink="/contact"
        secondaryButtonText={t?.products?.main?.ctaButtonSecond ?? "На главную"}
        secondaryButtonLink="/"
      />

      <Footer />
    </div>
  );
};

export default Products;


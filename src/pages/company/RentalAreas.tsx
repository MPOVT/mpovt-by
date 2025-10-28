import { useRef } from "react";
import CTACard from "@/components/common/CTACard";
import SmallMap from "@/components/common/SmallMap";

// Кастомный хук для 3D-tilt/parallax эффекта
function useCardTilt() {
  const ref = useRef(null);
  const handleMouseMove = (e) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;
    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04,1.04,1.04)`;
    card.style.transition = 'transform 0.1s';
  };
  const handleMouseLeave = () => {
    const card = ref.current;
    if (!card) return;
    card.style.transform = '';
    card.style.transition = 'transform 0.5s';
  };
  return { ref, handleMouseMove, handleMouseLeave };
}


import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, User, Download, Building, Car, Zap, Droplets, Home, Shield, CheckCircle, Award, Star, Sun, Droplet, Thermometer, Eye } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Footer from "@/components/Footer";
import ContactSection from "@/components/sections/ContactSection";
import InfoCardsSection from "@/components/sections/InfoCardsSection";

const RentalAreas = () => {
  const { t } = useLanguage();
  const contact = {
    name: t?.company?.rent?.contactInfo?.name ?? "Медведь Татьяна Николаевна",
    position: t?.company?.rent?.contactInfo?.jobLabel ?? "Ведущий инженер",
    phones: ["+375 17 3889405", "+375 17 3639295"],
    email: "rent2@mpovt.by"
  };

  const facilities = [
    {
      icon: Building,
      title: t?.company?.rent?.roomsTypesCards?.office?.title ?? "Офисные помещения",
      description: t?.company?.rent?.roomsTypesCards?.office?.description ?? "Современные офисные пространства с естественным освещением и комфортными условиями работы"
    },
    {
      icon: Building,
      title: t?.company?.rent?.roomsTypesCards?.production?.title ?? "Производственные площади",
      description: t?.company?.rent?.roomsTypesCards?.production?.description ?? "Оборудованные производственные помещения для различных видов деятельности с высокими потолками"
    },
    {
      icon: Building,
      title: t?.company?.rent?.roomsTypesCards?.storage?.title ?? "Складские помещения",
      description: t?.company?.rent?.roomsTypesCards?.storage?.description ?? "Просторные складские комплексы с удобными подъездными путями и погрузочными зонами"
    }
  ];

  const amenities = [
    {
      icon: Zap,
      title: t?.company?.rent?.benefitsCards?.electricity?.title ?? "Электроснабжение",
      description: t?.company?.rent?.benefitsCards?.electricity?.description ?? "Стабильное электроснабжение с резервными источниками питания",
      color: "from-yellow-400/20 to-orange-400/20",
      iconColor: "text-yellow-400",
      titleColor: "from-yellow-400 to-orange-400"
    },
    {
      icon: Droplets,
      title: t?.company?.rent?.benefitsCards?.water?.title ?? "Водоснабжение",
      description: t?.company?.rent?.benefitsCards?.water?.description ?? "Централизованное водоснабжение и канализация",
      color: "from-cyan-400/20 to-blue-400/20",
      iconColor: "text-cyan-400",
      titleColor: "from-cyan-400 to-blue-400"
    },
    {
      icon: Home,
      title: t?.company?.rent?.benefitsCards?.heating?.title ?? "Отопление",
      description: t?.company?.rent?.benefitsCards?.heating?.description ?? "Централизованное отопление с возможностью регулирования температуры",
      color: "from-red-400/20 to-pink-400/20",
      iconColor: "text-red-400",
      titleColor: "from-red-400 to-pink-400"
    },
    {
      icon: MapPin,
      title: t?.company?.rent?.benefitsCards?.transport?.title ?? "Транспорт",
      description: t?.company?.rent?.benefitsCards?.transport?.description ?? "Удобные выездные пути и близость к транспортным узлам",
      color: "from-green-400/20 to-lime-400/20",
      iconColor: "text-green-400",
      titleColor: "from-green-400 to-lime-400"
    }
  ];

  // --- Пассивные анимации для 3D-покачивания карточек ---
  const tiltStyles = `\n@keyframes tilt1 { 0%{transform:rotateX(10deg) rotateY(-10deg);} 50%{transform:rotateX(-10deg) rotateY(10deg);} 100%{transform:rotateX(10deg) rotateY(-10deg);} }\n@keyframes tilt2 { 0%{transform:rotateX(-8deg) rotateY(8deg);} 50%{transform:rotateX(8deg) rotateY(-8deg);} 100%{transform:rotateX(-8deg) rotateY(8deg);} }\n@keyframes tilt3 { 0%{transform:rotateX(6deg) rotateY(-6deg);} 50%{transform:rotateX(-6deg) rotateY(6deg);} 100%{transform:rotateX(6deg) rotateY(-6deg);} }\n@keyframes tilt4 { 0%{transform:rotateX(-6deg) rotateY(6deg);} 50%{transform:rotateX(6deg) rotateY(-6deg);} 100%{transform:rotateX(-6deg) rotateY(6deg);} }\n.animate-tilt-1 {animation: tilt1 3s ease-in-out infinite alternate;}\n.animate-tilt-2 {animation: tilt2 3.5s ease-in-out infinite alternate;}\n.animate-tilt-3 {animation: tilt3 2.5s ease-in-out infinite alternate;}\n.animate-tilt-4 {animation: tilt4 4s ease-in-out infinite alternate;}\n`;

  React.useEffect(() => {
    if (!document.getElementById('tilt-anim-styles')) {
      const style = document.createElement('style');
      style.id = 'tilt-anim-styles';
      style.innerHTML = tiltStyles;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 md:pt-44 lg:pt-48 pb-12 md:pb-16 lg:pb-20 px-4 text-center relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-black">
        {/* Animated background spheres */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-violet-500/30 to-fuchsia-500/30 rounded-full blur-3xl animate-pulse moving-sphere-1"></div>
          <div className="absolute bottom-1/6 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-indigo-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse moving-sphere-2"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-128 md:h-128 bg-gradient-to-r from-fuchsia-500/30 to-indigo-500/30 rounded-full blur-3xl animate-pulse moving-sphere-3"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl font-black mb-6 md:mb-8 text-white leading-tight">
              {t?.company?.rent?.pageTitle ?? "Арендные площади"}
            </h1>
            <p className="text-lg md:text-xl xl:text-2xl text-white/70 mb-6 md:mb-8 max-w-3xl mx-auto">
              {t?.company?.rent?.pageSubtitle ?? "Мы предлагаем в аренду офисные, производственные и складские помещения с развитой инфраструктурой в удобном местоположении"}
            </p>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-b from-black to-black relative overflow-hidden">
        {/* Enhanced animated background spheres */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 rounded-full blur-3xl animate-pulse moving-sphere-5"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-indigo-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse moving-sphere-6"></div>
          <div className="absolute top-2/3 left-1/6 w-36 h-36 md:w-72 md:h-72 bg-gradient-to-r from-fuchsia-500/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse moving-sphere-7"></div>
        </div>

        <InfoCardsSection
          title={t?.company?.rent?.whyUsTitle ?? "Преимущества аренды у нас"}
          subtitle={t?.company?.rent?.whyUsSubtitle ?? "Почему стоит выбрать арендные площади ОАО \"МПОВТ\""}
          titleGradientFrom="from-violet-400"
          titleGradientVia="via-fuchsia-400"
          titleGradientTo="to-indigo-400"
          backgroundGlowFrom="from-violet-400/15"
          backgroundGlowVia="via-fuchsia-400/15"
          backgroundGlowTo="to-indigo-400/15"
          columns={3}
          cards={[
            {
              title: t?.company?.rent?.whyUsCards?.reliability?.title ?? "Надежный собственник",
              description:
                t?.company?.rent?.whyUsCards?.reliability?.description ??
                "ОАО \"МПОВТ\" — юридическое лицо с многолетней репутацией и стабильным положением",
              icon: Shield,
              iconColor: "text-violet-400",
              iconBg: "bg-violet-500/20",
              iconBgHover: "bg-violet-500/40",
              borderFrom: "from-violet-500/20",
              borderTo: "to-fuchsia-500/20",
              cardHoverBg: "bg-violet-500/20",
            },
            {
              title: t?.company?.rent?.whyUsCards?.location?.title ?? "Удобное расположение",
              description:
                t?.company?.rent?.whyUsCards?.location?.description ??
                "Центральное расположение в Минске с развитой инфраструктурой и транспортной доступностью",
              icon: Star,
              iconColor: "text-fuchsia-400",
              iconBg: "bg-fuchsia-500/20",
              iconBgHover: "bg-fuchsia-500/40",
              borderFrom: "from-fuchsia-500/20",
              borderTo: "to-pink-500/20",
              cardHoverBg: "bg-fuchsia-500/20",
            },
            {
              title: t?.company?.rent?.whyUsCards?.flexibility?.title ?? "Гибкие условия",
              description:
                t?.company?.rent?.whyUsCards?.flexibility?.description ??
                "Различные варианты площадей от 10 до 10 000 кв.м с индивидуальными условиями аренды",
              icon: Award,
              iconColor: "text-indigo-400",
              iconBg: "bg-indigo-500/20",
              iconBgHover: "bg-indigo-500/40",
              borderFrom: "from-indigo-500/20",
              borderTo: "to-blue-500/20",
              cardHoverBg: "bg-indigo-500/20",
            },
          ]}
        />

        {/* Main Info Section (новый стиль) */}
        <section className="py-16 md:py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <div className="text-center mb-12 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400/10 via-fuchsia-400/10 to-indigo-400/10 rounded-3xl blur-3xl"></div>
              <h2 className="text-3xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent relative z-10">
                {t?.company?.rent?.infoTitle ?? "Основная информация"}
              </h2>
              <p className="text-lg text-white/60 mb-4 relative z-10">
                {t?.company?.rent?.infoSubtitle ?? "Ключевые характеристики и инфраструктура арендуемых площадей"}
              </p>
              {/* Убрана полоска */}
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Характеристики */}
              <Card className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-violet-400/30 transition-all duration-300 group relative flex flex-col">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-1">{t?.company?.rent?.infoCards?.features?.title ?? "Характеристики помещений"}</h3>
                  <p className="text-sm text-white/60 mb-2">{t?.company?.rent?.infoCards?.features?.description ?? "Параметры и преимущества для арендаторов"}</p>
                </div>
                <div className="grid gap-4">
                  {/* Пример уникальных карточек с разными иконками и цветами */}
                  <div className="flex items-center gap-4 p-4 rounded-xl border border-indigo-500/20 shadow-lg">
                    <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500/10 to-indigo-500/10 flex-shrink-0"> {/* Добавлен flex-shrink-0 */}
                      <Home className="w-6 h-6 text-indigo-400" /> {/* Размер иконки фиксирован */}
                    </span>
                    <span className="text-slate-200 text-base flex-shrink"> {/* Или flex-shrink-1, если нужно сжиматься */}
                      {t?.company?.rent?.infoCards?.features?.area ?? "Площади от 10 кв. м до 10 000 кв. м"}
                    </span>
                    {/* <span className="text-slate-200 text-base max-[410px]:text-sm">{t?.company?.rent?.infoCards?.features?.area ?? "Площади от 10 кв. м до 10 000 кв. м"}</span> */}
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl border border-fuchsia-500/20 shadow-lg">
                    <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-fuchsia-500/10 to-pink-500/10 flex-shrink-0">
                      <Zap className="w-6 h-6 text-fuchsia-400" />
                    </span>
                    <span className="text-slate-200 text-base">{t?.company?.rent?.infoCards?.features?.electricity ?? "Стабильное электроснабжение 380/220В"}</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl border border-emerald-500/20 shadow-lg">
                    <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-500/10 to-lime-500/10 flex-shrink-0">
                      <Droplets className="w-6 h-6 text-emerald-400" />
                    </span>
                    <span className="text-slate-200 text-base">{t?.company?.rent?.infoCards?.features?.heating ?? "Холодное и горячее водоснабжение"}</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl border border-yellow-500/20 shadow-lg">
                    <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-yellow-500/10 to-orange-500/10 flex-shrink-0">
                      <Shield className="w-6 h-6 text-yellow-400" />
                    </span>
                    <span className="text-slate-200 text-base">{t?.company?.rent?.infoCards?.features?.security ?? "Охраняемые парковочные места"}</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl border border-cyan-500/20 shadow-lg">
                    <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 flex-shrink-0">
                      <Car className="w-6 h-6 text-cyan-400" />
                    </span>
                    <span className="text-slate-200 text-base">{t?.company?.rent?.infoCards?.features?.routes ?? "Удобные выездные пути на основные магистрали"}</span>
                  </div>
                </div>
              </Card>
              {/* Местоположение + карта */}
              <Card className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-indigo-400/30 transition-all duration-300 group relative flex flex-col">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent mb-1">{t?.company?.rent?.infoCards?.location?.title ?? "Местоположение"}</h3>
                  <p className="text-sm text-white/60 mb-2">{t?.company?.rent?.infoCards?.location?.description ?? "Инфраструктура и транспортная доступность"}</p>
                </div>
                <div className="grid gap-4 mb-4">
                  <div className="flex items-center gap-4 p-4 rounded-xl border border-blue-500/20 shadow-lg">
                    <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-400" />
                    </span>
                    <span className="text-slate-200 text-base">{t?.company?.rent?.infoCards?.location?.address ?? "г. Минск, ул. Притыцкого, 62к2"}</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl border border-emerald-500/20 shadow-lg">
                    <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-500/10 to-lime-500/10 flex-shrink-0">
                      <Building className="w-6 h-6 text-emerald-400" />
                    </span>
                    <span className="text-slate-200 text-base">{t?.company?.rent?.infoCards?.location?.organization ?? "Собственность ОАО \"МПОВТ\""}</span>
                  </div>
                </div>
                {/* Мини-карта */}
                <SmallMap className="h-48 md:h-60 mt-2 rounded-xl" address="ул. Притыцкого, 62 к.2, Минск"/>
              </Card>
            </div>
          </div>
        </section>

        {/* Types of Facilities Section */}
        <section className="py-16 md:py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <div className="text-center mb-12 relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 rounded-3xl blur-3xl"></div>
              <h2 className="text-3xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent relative z-10">
                {t?.company?.rent?.roomsTypesTitle ?? "Типы помещений"}
              </h2>
              <p className="text-lg text-white/60 mb-4 relative z-10">{t?.company?.rent?.roomsTypesSubtitle ?? "Варианты доступных площадей для аренды"}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto center">
              {facilities.map((facility, index) => (
                <Card key={index} className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 group relative">
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-start space-x-4 relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <facility.icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                        {facility.title}
                      </h3>
                      <p className="text-slate-300">{facility.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Amenities Section с пассивным 3D tilt эффектом */}
        <section className="py-16 md:py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <div className="text-center mb-12 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-yellow-400/10 rounded-3xl blur-3xl"></div>
              <h2 className="text-3xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent relative z-10">
                {t?.company?.rent?.benefitsTitle ?? "Коммунальные услуги и удобства"}
              </h2>
              <p className="text-lg text-white/60 mb-4 relative z-10">
                {t?.company?.rent?.benefitsSubtitle ?? "Современные инженерные системы и комфорт для арендаторов"}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {/* Карточки с пассивным 3D-покачиванием и цветами, соответствующими иконкам */}
              {amenities.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={idx}
                    className={`p-6 text-center bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 group relative cursor-pointer select-none shadow-xl hover:scale-105 hover:rotate-0`}
                    style={{ perspective: 1000, willChange: 'transform' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05) rotateX(0deg) rotateY(0deg)'; e.currentTarget.style.transition = 'transform 0.3s'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.transition = 'transform 1.2s'; }}
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`w-7 h-7 ${item.iconColor}`} />
                    </div>
                    <h3 className={`text-lg font-bold mb-2 bg-gradient-to-r ${item.titleColor} bg-clip-text text-transparent`}>
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-sm">{item.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Price List Download Section - Hidden */}
        <section className="hidden py-16 md:py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12 relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-purple-400/10 to-emerald-400/10 rounded-3xl blur-3xl"></div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent relative z-10">
                Актуальный прайс-лист
              </h2>
              <p className="text-white/60 mb-8 text-lg relative z-10">
                Скачайте подробную информацию о свободных площадях и текущих ценах на аренду
              </p>
            </div>
            {/* Мобильная версия: современный блок отсутствия таблицы */}
            <div className="block md:hidden max-w-sm mx-auto mb-10">
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-cyan-900/60 via-slate-900/80 to-purple-900/60 border border-cyan-400/10 shadow-2xl backdrop-blur-xl flex flex-col items-center text-center overflow-hidden">
                {/* Decorative glow */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-purple-400/10 rounded-full blur-2xl z-0"></div>
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-cyan-400/10 rounded-full blur-2xl z-0"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <Download className="w-10 h-10 mb-4 text-cyan-400 drop-shadow-lg" />
                  <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Таблица доступна только на десктопе</h3>
                  <p className="text-slate-300 text-sm mb-5">Для просмотра подробной информации скачайте актуальный прайс-лист или откройте сайт на компьютере.</p>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white border-0 transition-all duration-300 shadow-lg"
                    onClick={() => window.open('https://mpovt.by/gallery/%D1%81%D0%B2%D0%BE%D0%B4%D0%BD%D0%B8%D0%B5%20%D0%BF%D0%BB%D0%BE%D1%89%D0%B0%D0%B4%D0%B8%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B024.xls', '_blank')}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Скачать прайс-лист
                  </Button>
                </div>
              </div>
            </div>
            {/* Десктопная версия: таблица */}
            <div className="hidden md:block overflow-x-auto max-w-6xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-xl bg-white/5 backdrop-blur-xl">
                <div style={{ maxHeight: '480px', overflowY: 'auto' }}>
                  <table className="min-w-full table-fixed">
                    <thead className="sticky top-0 z-10 bg-slate-900/80 backdrop-blur-sm">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-cyan-400 uppercase sticky top-0 z-10 bg-slate-900/80 backdrop-blur-sm">Этаж</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-purple-400 uppercase sticky top-0 z-10 bg-slate-900/80 backdrop-blur-sm">Инв. номер</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-emerald-400 uppercase sticky top-0 z-10 bg-slate-900/80 backdrop-blur-sm">Тип помещения</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-yellow-400 uppercase sticky top-0 z-10 bg-slate-900/80 backdrop-blur-sm">Площадь, м²</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-blue-400 uppercase sticky top-0 z-10 bg-slate-900/80 backdrop-blur-sm">Инженерное обеспечение</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-pink-400 uppercase sticky top-0 z-10 bg-slate-900/80 backdrop-blur-sm">Состояние ремонта</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {Array.from({ length: 20 }).map((_, i) => {

                        const floor = (i % 5) + 1;
                        const inv = 100000 + i * 123;
                        const types = ["Офисное помещение", "Складское помещение", "Производственное помещение", "Парковка"];
                        const type = types[i % types.length];
                        const area = 30 + i * 10;
                        const repairStates = [
                          { label: "Требуется ремонт", color: "bg-yellow-500/20 text-yellow-300" },
                          { label: "Неудовлетворительный ремонт", color: "bg-rose-500/20 text-rose-300" },
                          { label: "Удовлетворительный ремонт", color: "bg-blue-500/20 text-blue-300" },
                          { label: "Хороший ремонт", color: "bg-emerald-500/20 text-emerald-300" }
                        ];
                        const repair = repairStates[i % repairStates.length];
                        return (
                          <tr key={i} className="hover:bg-cyan-900/10 transition">
                            <td className="px-4 py-3 text-slate-200">{floor}</td>
                            <td className="px-4 py-3 text-slate-200">{inv}</td>
                            <td className="px-4 py-3 text-slate-200 whitespace-nowrap">{type}</td>
                            <td className="px-4 py-3 text-slate-200">{area}</td>
                            <td className="px-4 py-3 text-slate-200">
                              <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                  <Eye className="w-4 h-4 text-yellow-300" />
                                  <span className="text-xs text-slate-400">Окна</span>
                                  <Sun className="w-4 h-4 text-yellow-200 ml-3" />
                                  <span className="text-xs text-slate-400">Освещение</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Droplet className="w-4 h-4 text-cyan-300" />
                                  <span className="text-xs text-slate-400">Вода</span>
                                  <Thermometer className="w-4 h-4 text-rose-300 ml-3" />
                                  <span className="text-xs text-slate-400">Отопление</span>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-3"><span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${repair.color}`}>{repair.label}</span></td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="text-xs text-slate-400 mt-2 ml-1">* Для получения актуальной информации по всем площадям скачайте прайс-лист или свяжитесь с отделом аренды.</div>
            </div>
          </div>
        </section>

        <ContactSection
          title={t?.company?.rent?.contactTitle ?? "Контактное лицо"}
          subtitle={t?.company?.rent?.contactSubtitle ?? "Свяжитесь с нашим специалистом по вопросам аренды"}
          titleGradientFrom="from-purple-400"
          titleGradientTo="to-pink-400"
          glowFrom="from-purple-400/20"
          glowTo="to-pink-500/20"
          contact={{
            name: contact.name,
            position: contact.position,
            phones: contact.phones,
            emails: [contact.email],
          }}
          holderColorFrom="from-purple-500/10"
          holderColorTo="to-pink-500/10"
        />

        <Footer />
      </div>
    </div>
  );
};

export default RentalAreas;

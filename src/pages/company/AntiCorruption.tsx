

import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Phone, Mail, Shield, Scale, Eye } from "lucide-react";
import Footer from "@/components/Footer";
import InfoCardsSection from "@/components/sections/InfoCardsSection";
import ContactSection from "@/components/sections/ContactSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { DownloadsSection } from "@/components/common/DownloadsSection";

const AntiCorruption = () => {
  const { t } = useLanguage();

  const documents = [
    {
      title: t?.company?.anticorruption?.docsCards?.anticorruptionPolicy?.title ?? "Закон Республики Беларусь \"О БОРЬБЕ С КОРРУПЦИЕЙ\"",
      description: t?.company?.anticorruption?.docsCards?.anticorruptionPolicy?.description ?? "Основной нормативный акт, регулирующий вопросы противодействия коррупции в РБ",
      downloadUrl: "https://mpovt.by/gallery/zakon_o_borbe_s_korruptsiyey.pdf"
    },
    {
      title: t?.company?.anticorruption?.docsCards?.anticorruptionManual?.title ?? "Методические рекомендации по организации антикоррупционной работы",
      description: t?.company?.anticorruption?.docsCards?.anticorruptionManual?.description ?? "Практические рекомендации по построению антикоррупционной системы на предприятии",
      downloadUrl: "https://mpovt.by/gallery/metodicheskiye_rekomendatsii.pdf"
    },
    {
      title: t?.company?.anticorruption?.docsCards?.countryDecision?.title ?? "Постановление Совета Министров Республики Беларусь №45 от 22.01.2016",
      description: t?.company?.anticorruption?.docsCards?.countryDecision?.description ?? "Порядок организации антикоррупционной работы на предприятиях",
      downloadUrl: "https://mpovt.by/gallery/postanovleniye_45_22_01_2016.pdf"
    },
    {
      title: t?.company?.anticorruption?.docsCards?.commissionStatement?.title ?? "Положение о Комиссии по противодействию коррупции",
      description: t?.company?.anticorruption?.docsCards?.commissionStatement?.description ?? "Документ, регламентирующий деятельность антикоррупционной комиссии ОАО 'МПОВТ'",
      downloadUrl: "https://mpovt.by/gallery/%D0%BF%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BE%20%D0%BA%D0%BE%D0%BC%D0%B8%D1%81%D1%81%D0%B8%D0%B82.pdf"
    },
    {
      title: t?.company?.anticorruption?.docsCards?.plan?.title ?? "План работы Комиссии по противодействию коррупции",
      description: t?.company?.anticorruption?.docsCards?.plan?.description ?? "Актуальный план мероприятий по противодействию коррупции на предприятии",
      downloadUrl: "https://mpovt.by/gallery/%D0%9F%D0%BB%D0%B0%D0%BD%20%D0%BC%D0%B5%D1%80%D0%BE%D0%BF%D1%80%D0%B8%D1%8F%D1%82%D0%B8%D0%B9.pdf"
    },
    {
      title: t?.company?.anticorruption?.docsCards?.patrioticEducation?.title ?? "План мероприятий по реализации Программы патриотического воспитания населения Республики Беларусь на 2022-2025 годы",
      description: t?.company?.anticorruption?.docsCards?.patrioticEducation?.description ?? "Патриотическое воспитание как часть антикоррупционной работы",
      downloadUrl: "https://mpovt.by/gallery/%D0%9F%D0%9B%D0%90%D0%9D%20%D0%BC%D0%B5%D1%80%D0%BE%D0%BF%D1%80%D0%B8%D1%8F%D1%82%D0%B8%D0%B9%20%D0%BF%D0%B0%D1%82%D1%80%D0%B8%D0%BE%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B3%D0%BE%20%D0%B2%D0%BE%D1%81%D0%BF%D0%B8%D1%82%D0%B0%D0%BD%D0%B8%D1%8F.pdf"
    }
  ];

  const contact = {
    name: t?.company?.anticorruption?.contactInfo?.name ?? "Остапенко Юлия Ивановна",
    position: t?.company?.anticorruption?.contactInfo?.jobLabel ?? "Секретарь Комиссии по противодействию коррупции",
    photo: "https://mpovt.by/gallery/%D0%9E%D1%81%D1%82%D0%B0%D0%BF%D0%B5%D0%BD%D0%BA%D0%BE-ts1651744178.gif?ts=1746513905",
    phone: "+375 17 3889460",
    email: "ostapenko@mpovt.by"
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 md:pt-44 lg:pt-48 pb-12 md:pb-16 lg:pb-20 px-4 text-center relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-black">
        {/* Animated background spheres */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-rose-500/30 to-red-500/30 rounded-full blur-3xl animate-pulse moving-sphere-1"></div>
          <div className="absolute bottom-1/6 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-amber-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse moving-sphere-2"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-128 md:h-128 bg-gradient-to-r from-red-500/30 to-amber-500/30 rounded-full blur-3xl animate-pulse moving-sphere-3"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl font-black mb-6 md:mb-8 text-white leading-tight">
              {t?.company?.anticorruption?.pageTitle ?? "Противодействие коррупции"}
            </h1>
            <p className="text-lg md:text-xl xl:text-2xl text-white/70 mb-6 md:mb-8 max-w-3xl mx-auto">
              {t?.company?.anticorruption?.pageSubtitle ?? "ОАО «МПОВТ» строго соблюдает антикоррупционное законодательство и ведет активную работу по предотвращению коррупционных правонарушений"}
            </p>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-b from-black to-black relative overflow-hidden">
        {/* Enhanced animated background spheres */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-rose-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse moving-sphere-5"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-amber-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse moving-sphere-6"></div>
          <div className="absolute top-2/3 left-1/6 w-36 h-36 md:w-72 md:h-72 bg-gradient-to-r from-pink-500/10 to-amber-500/10 rounded-full blur-3xl animate-pulse moving-sphere-7"></div>
        </div>

        <InfoCardsSection
          title={t?.company?.anticorruption?.policyTitle ?? "Наша позиция"}
          subtitle={t?.company?.anticorruption?.policySubtitle ?? 'Принципы прозрачности, честности и законности в деятельности ОАО "МПОВТ"'}
          titleGradientFrom="from-red-400"
          titleGradientVia="via-rose-400"
          titleGradientTo="to-amber-400"
          backgroundGlowFrom="from-red-400/15"
          backgroundGlowVia="via-rose-400/15"
          backgroundGlowTo="to-amber-400/15"
          columns={3}
          cards={[
            {
              title: t?.company?.anticorruption?.policyCards?.zeroTolerance?.title ?? "Нулевая терпимость",
              description:
                t?.company?.anticorruption?.policyCards?.zeroTolerance?.description ?? "Строгое соблюдение антикоррупционного законодательства и нулевая терпимость к коррупции",
              icon: Shield,
              iconColor: "text-red-400",
              iconBg: "bg-red-500/20",
              iconBgHover: "bg-red-500/40",
              borderFrom: "from-red-500/20",
              borderTo: "to-rose-500/20",
              cardHoverBg: "bg-red-500/20",
            },
            {
              title: t?.company?.anticorruption?.policyCards?.justice?.title ?? "Законность и справедливость",
              description:
                t?.company?.anticorruption?.policyCards?.justice?.description ?? "Все процессы в компании основаны на принципах законности, справедливости и равенства",
              icon: Scale,
              iconColor: "text-rose-400",
              iconBg: "bg-rose-500/20",
              iconBgHover: "bg-rose-500/40",
              borderFrom: "from-rose-500/20",
              borderTo: "to-pink-500/20",
              cardHoverBg: "bg-rose-500/20",
            },
            {
              title: t?.company?.anticorruption?.policyCards?.opacity?.title ?? "Прозрачность деятельности",
              description:
                t?.company?.anticorruption?.policyCards?.opacity?.description ?? "Открытость и прозрачность всех бизнес-процессов и принятия управленческих решений",
              icon: Eye,
              iconColor: "text-amber-400",
              iconBg: "bg-amber-500/20",
              iconBgHover: "bg-amber-500/40",
              borderFrom: "from-amber-500/20",
              borderTo: "to-yellow-500/20",
              cardHoverBg: "bg-amber-500/20",
            },
          ]}
          bottomCard={{
            title: t?.company?.anticorruption?.bottomCard?.title ?? "О нашем подходе к противодействию коррупции",
            description:
              t?.company?.anticorruption?.bottomCard?.description ?? 'Мы стремимся создать корпоративную культуру, основанную на честности, ответственности и прозрачности. Наши сотрудники проходят регулярное обучение по вопросам этики и антикоррупционной политики. Мы активно сотрудничаем с государственными органами и общественными организациями для укрепления доверия и обеспечения прозрачности в нашей деятельности',
            gradientFrom: "from-red-300",
            gradientVia: "via-rose-200",
            gradientTo: "to-amber-300",
          }}
        />

        <DownloadsSection
          title={t?.company?.anticorruption?.docsTitle ?? "Нормативные документы"}
          description={t?.company?.anticorruption?.docsSubtitle ?? "Драйвера для различных моделей H-Book"}
          downloads={documents}
          gradientFrom="purple-400"
          gradientTo="pink-400"
          accentColor="purple-400"
        />

        <ContactSection
          title={t?.company?.anticorruption?.contactTitle ?? "Контакты по вопросам противодействия коррупции"}
          subtitle={t?.company?.anticorruption?.contactSubtitle ?? "Свяжитесь с нашим специалистом по вопросам противодействия коррупции"}
          titleGradientFrom="from-orange-400"
          titleGradientTo="to-yellow-400"
          glowFrom="from-orange-400/15"
          glowTo="to-yellow-400/15"
          contact={{
            name: contact.name,
            position: contact.position,
            phones: [contact.phone],
            emails: [contact.email],
            photo: contact.photo
          }}
          holderColorFrom="from-orange-500/10"
          holderColorTo="to-yellow-500/10"
        />

        <Footer />
      </div>
    </div>
  );
};

export default AntiCorruption;

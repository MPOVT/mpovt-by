
import React from "react";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import ContactSection from "@/components/sections/ContactSection";
import { useLanguage } from '@/contexts/LanguageContext';
import { DownloadsSection } from "@/components/common";
import InfoCardsSection from "@/components/sections/InfoCardsSection";
import { Award, CheckCircle, Clock, Microscope, Settings, Shield, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const TestingLaboratories = () => {
  const { t } = useLanguage();

  const documents = [
    {
      title: t?.services?.testingLabs?.docsCards?.testing?.title ?? "Аттестат лаборатории испытаний",
      description: t?.services?.testingLabs?.docsCards?.testing?.description ?? "Аттестат аккредитации испытательной лаборатории, подтверждающий компетентность в проведении испытаний автокомпонентов и других изделий",
      downloadUrl: "/public/pdf/certificates/accreditation/LIS_Accreditation_Certificate.pdf"
    },
    {
      title: t?.services?.testingLabs?.docsCards?.lis?.title ?? "Область аккредитации ЛИс",
      description: t?.services?.testingLabs?.docsCards?.lis?.description ?? "Перечень услуг, тестов и методик, на которые лаборатория получила официальное подтверждение компетентности",
      downloadUrl: "/public/pdf/certificates/accreditation/Scope_of_LIS_accreditation.pdf"
    },
    {
      title: t?.services?.testingLabs?.docsCards?.metrology?.title ?? "Аттестат лаборатории метрологии",
      description: t?.services?.testingLabs?.docsCards?.metrology?.description ?? "Аттестат аккредитации метрологической лаборатории, подтверждающий компетентность в поверке средств измерений радиотехнических, электрических величин, давления и температуры",
      downloadUrl: "/public/pdf/certificates/accreditation/LM_Accreditation_Certificate.pdf"
    },
    {
      title: t?.services?.testingLabs?.docsCards?.lm?.title ?? "Область аккредитации ЛМ",
      description: t?.services?.testingLabs?.docsCards?.lm?.description ?? "Перечень средств измерений и методик поверки, на которые метрологическая лаборатория получила официальное подтверждение компетентности",
      downloadUrl: "/public/pdf/certificates/accreditation/Scope_of_LM_accreditation.pdf"
    }
  ];

  const advantages = [
    {
      icon: Award,
      title: t?.services?.testingLabs?.advantagesCards?.accreditation?.title ?? "Аккредитация",
      description: t?.services?.testingLabs?.advantagesCards?.accreditation?.description ?? "Все лаборатории имеют государственную аккредитацию",
      iconColor: "text-blue-400",
      iconBg: "bg-blue-500/20",
      iconBgHover: "bg-blue-500/40",
      borderFrom: "from-blue-500/20",
      borderTo: "to-cyan-500/20",
      cardHoverBg: "bg-blue-500/20",
    },
    {
      icon: Users,
      title: t?.services?.testingLabs?.advantagesCards?.specs?.title ?? "Опытные специалисты",
      description: t?.services?.testingLabs?.advantagesCards?.specs?.description ?? "Команда высококвалифицированных экспертов",
      iconColor: "text-green-400",
      iconBg: "bg-green-500/20",
      iconBgHover: "bg-green-500/40",
      borderFrom: "from-green-500/20",
      borderTo: "to-lime-500/20",
      cardHoverBg: "bg-green-500/20",
    },
    {
      icon: Clock,
      title: t?.services?.testingLabs?.advantagesCards?.speed?.title ?? "Быстрые сроки",
      description: t?.services?.testingLabs?.advantagesCards?.speed?.description ?? "Оперативное проведение испытаний и выдача результатов",
      iconColor: "text-orange-400",
      iconBg: "bg-orange-500/20",
      iconBgHover: "bg-orange-500/40",
      borderFrom: "from-orange-500/20",
      borderTo: "to-yellow-500/20",
      cardHoverBg: "bg-orange-500/20",
    },
    {
      icon: Shield,
      title: t?.services?.testingLabs?.advantagesCards?.secure?.title ?? "Надежность",
      description: t?.services?.testingLabs?.advantagesCards?.secure?.description ?? "Точные и достоверные результаты испытаний",
      iconColor: "text-pink-400",
      iconBg: "bg-pink-500/20",
      iconBgHover: "bg-pink-500/40",
      borderFrom: "from-pink-500/20",
      borderTo: "to-purple-500/20",
      cardHoverBg: "bg-pink-500/20",
    }
  ];

  const laboratories = [
    {
      title: t?.services?.testingLabs?.ourLabsCards?.testing?.name ?? "Испытательная лаборатория",
      description: t?.services?.testingLabs?.ourLabsCards?.testing?.description ?? "Полный комплекс механических и климатических испытаний автокомпонентов и других изделий",
      icon: Settings,
      accreditationNumber: "BY/112 2.5349",
      accreditationDate: "10.12.2021",
      validityPeriod: (t?.services?.testingLabs?.accreditation?.expiresDescription ?? "до") + " " + "10.12.2026",
      features: [
        t?.services?.testingLabs?.ourLabsCards?.testing?.services?.mechanical ?? "Механические испытания",
        t?.services?.testingLabs?.ourLabsCards?.testing?.services?.climatic ?? "Климатические испытания",
        t?.services?.testingLabs?.ourLabsCards?.testing?.services?.autoComponents ?? "Испытания автокомпонентов",
        t?.services?.testingLabs?.ourLabsCards?.testing?.services?.vibration ?? "Испытания на вибрацию и удар",
        t?.services?.testingLabs?.ourLabsCards?.testing?.services?.emc ?? "Электромагнитная совместимость"
      ]
    },
    {
      title: t?.services?.testingLabs?.ourLabsCards?.metrology?.name ?? "Метрологическая лаборатория",
      description: t?.services?.testingLabs?.ourLabsCards?.metrology?.description ?? "Поверка средств измерений радиотехнических, электрических величин, средств измерения давления и температуры",
      icon: Microscope,
      accreditationNumber: "BY/112 3.0268",
      accreditationDate: "18.07.2011",
      validityPeriod:  (t?.services?.testingLabs?.accreditation?.expiresDescription ?? "до") + " " + "19.07.2026",
      features: [
        t?.services?.testingLabs?.ourLabsCards?.metrology?.services?.radio ?? "Поверка радиотехнических средств",
        t?.services?.testingLabs?.ourLabsCards?.metrology?.services?.electric ?? "Поверка электрических величин",
        t?.services?.testingLabs?.ourLabsCards?.metrology?.services?.pressure ?? "Поверка средств измерения давления",
        t?.services?.testingLabs?.ourLabsCards?.metrology?.services?.temperature ?? "Поверка средств измерения температуры",
        t?.services?.testingLabs?.ourLabsCards?.metrology?.services?.calibration ?? "Калибровка измерительного оборудования"
      ]
    }
  ];

  return (
    <div className="min-h-screen">

      <HeroSection
        title={t?.services?.testingLabs?.pageTitle ?? "Испытательные лаборатории"}
        subtitle={t?.services?.testingLabs?.pageSubtitle ?? "Профессиональные испытания и контроль качества продукции"}
        sphere1="from-cyan-500/30 to-blue-500/30"
        sphere2="from-purple-500/30 to-pink-500/30"
        sphere3="from-emerald-500/30 to-teal-500/30"
      />

      <div className="bg-gradient-to-b from-black to-black relative overflow-hidden">
        <section className="py-16 md:py-20 bg-gradient-to-b from-black via-slate-900/50 to-black relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
          </div>
          <div className="container mx-auto px-2 sm:px-8 lg:px-20 relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                {t?.services?.testingLabs?.ourLabsTitle ?? "Наши лаборатории"}
              </h2>
              <p className="text-lg text-white/60 max-w-4xl mx-auto leading-relaxed">
                {t?.services?.testingLabs?.ourLabsSubtitle ?? "Современное оборудование и высококвалифицированные специалисты"}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              {laboratories.map((lab, index) => {
                const Icon = lab.icon;
                const accentColors = [
                  {
                    border: "hover:border-cyan-400/30",
                    glow: "from-cyan-500/10 to-purple-500/10",
                    iconBg: "from-cyan-500/20 to-purple-500/20",
                    icon: "text-cyan-400"
                  },
                  {
                    border: "hover:border-emerald-400/30",
                    glow: "from-emerald-500/10 to-green-500/10",
                    iconBg: "from-emerald-500/20 to-green-500/20",
                    icon: "text-emerald-400"
                  }
                ];
                const color = accentColors[index % accentColors.length];
                return (
                  <Card
                    key={index}
                    className={`group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 ${color.border} transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] flex flex-col h-full`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${color.glow} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
                    <div className="p-6 md:p-8 flex flex-col h-full relative z-10">
                      <div className="flex items-center mb-6">
                        <div className={`w-14 h-14 bg-gradient-to-br ${color.iconBg} rounded-xl flex items-center justify-center mr-4 shadow-lg`}>
                          <Icon className={`w-7 h-7 ${color.icon}`} />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white">{lab.title}</h3>
                      </div>
                      <p className="text-slate-300 mb-6 leading-relaxed">{lab.description}</p>
                      <div className="mb-6 p-4 bg-white/10 rounded-lg border border-white/10">
                        <p className="text-sm text-slate-400 mb-2">
                          <strong className="text-white">{t?.services?.testingLabs?.accreditation?.title ?? "Основания для оказания услуг:"}</strong> {t?.services?.testingLabs?.accreditation?.description ?? "аттестат аккредитации"} № {lab.accreditationNumber} {t?.services?.testingLabs?.accreditation?.expiresFromDescription ?? "от"} {lab.accreditationDate}
                        </p>
                        <p className="text-sm text-slate-400">
                          <strong className="text-white">{t?.services?.testingLabs?.accreditation?.expiresTitle ?? "Срок действия"}:</strong> {lab.validityPeriod}
                        </p>
                      </div>
                      <div className="flex-grow">
                        <ul className="space-y-2">
                          {lab.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-slate-300">
                              <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <InfoCardsSection
          title={t?.services?.testingLabs?.advantages ?? "Долгосрочное партнерство"}
          subtitle={t?.services?.testingLabs?.advantagesSubtitle ?? "Строим долгосрочные партнерства на основе доверия и профессионализма"}
          titleGradientFrom="from-blue-400"
          titleGradientVia="via-green-400"
          titleGradientTo="to-pink-400"
          backgroundGlowFrom="from-cyan-400/15"
          backgroundGlowVia="via-slate-900/30"
          backgroundGlowTo="to-lime-400/15"
          columns={4}
          cards={advantages}
        />
        <DownloadsSection
          title={t?.company?.cooperation?.docsTitle ?? "Информация о сотрудничестве"}
          description={t?.company?.cooperation?.docsSubtitle ?? "Документы и материалы для потенциальных партнеров и участников закупочных процедур"}
          downloads={documents}
          gradientFrom="purple-400"
          gradientTo="pink-400"
          accentColor="purple-400"
        />
        <ContactSection
          title={t?.services?.testingLabs?.contactTitle ?? "Контакты"}
          subtitle={t?.services?.testingLabs?.contactSubtitle ?? "Свяжитесь с руководителем департамента для получения консультации"}
          titleGradientFrom="from-emerald-400"
          titleGradientVia="via-teal-400"
          titleGradientTo="to-emerald-400"
          glowFrom="from-emerald-500/20"
          glowTo="to-teal-500/20"
          contact={{
            name: t?.services?.testingLabs?.contactInfo?.name ?? "Шляев Артём Сергеевич",
            position: t?.services?.testingLabs?.contactInfo?.jobLabel ?? "Руководитель Департамента управления качеством",
            phones: ["+375 17 3889093"],
            emails: ["shliaev@mpovt.by"],
          }}
          holderColorFrom="from-emerald-500/10"
          holderColorTo="to-teal-500/10"
        />
      </div>

      <Footer />
    </div>
  );
};

export default TestingLaboratories;
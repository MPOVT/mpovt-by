import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, ExternalLink, Phone, Mail, User, TrendingUp, Users, Award, Briefcase, ChevronDown, ChevronUp } from "lucide-react";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import InfoCardsSection from "@/components/sections/InfoCardsSection";
import ContactSection from "@/components/sections/ContactSection";

const Vacancies = () => {
  const { t } = useLanguage();
  const [vacancies, setVacancies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedVacancies, setExpandedVacancies] = useState({});

  // Для хранения ref на раскрывающиеся блоки
  const detailsRefs = React.useRef({});

  // Mock data for vacancies
  const mockVacancies = [
    {
      id: 1,
      title: "Инженер-программист",
      department: "Департамент разработок",
      type: "Полная занятость",
      experience: "от 2 лет",
      shortDescription: "Разработка и поддержка программного обеспечения для автомобильной электроники.",
      fullDescription: "Разработка и поддержка программного обеспечения для автомобильной электроники. Участие в проектах по созданию электронных блоков управления для ведущих автопроизводителей.",
      requirements: ["Высшее техническое образование", "Знание C/C++", "Опыт работы с микроконтроллерами", "Знание протоколов CAN, LIN"]
    },
    {
      id: 2,
      title: "Технолог производства",
      department: "Производственный отдел",
      type: "Полная занятость",
      experience: "от 3 лет",
      shortDescription: "Разработка и оптимизация технологических процессов производства электронных блоков.",
      fullDescription: "Разработка и оптимизация технологических процессов производства электронных блоков. Контроль качества на всех этапах производственного цикла.",
      requirements: ["Высшее техническое образование", "Опыт в производстве электроники", "Знание LEAN-технологий", "Опыт работы с SMT-линиями"]
    },
    {
      id: 3,
      title: "Менеджер по качеству",
      department: "Отдел качества",
      type: "Полная занятость",
      experience: "от 2 лет",
      shortDescription: "Контроль качества продукции, ведение документации по системе менеджмента качества.",
      fullDescription: "Контроль качества продукции, ведение документации по системе менеджмента качества в соответствии с требованиями ISO 9001 и IATF 16949.",
      requirements: ["Высшее образование", "Знание стандартов ISO", "Аналитические способности", "Опыт аудита качества"]
    }
  ];

  useEffect(() => {
    const fetchVacancies = async () => {
      setLoading(true);
      setTimeout(() => {
        setVacancies(mockVacancies);
        setLoading(false);
      }, 1000);
    };

    fetchVacancies();
  }, []);

  const toggleVacancy = (id) => {
    setExpandedVacancies(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const hrManager = {
    name: t?.company?.vacancies?.contactInfo?.name ?? "Кононович Елена Александровна",
    position: t?.company?.vacancies?.contactInfo?.jobLabel ?? "Руководитель департамента подбора персонала",
    photo: "/imgs/workers/elena_kononovich.jpg",
    phones: ["+375 17 3886446"],
    email: "ekononovich@mpovt.by"
  };

  const contact = {
    name: t?.company?.vacancies?.contactInfo?.name ?? "Кононович Елена Александровна",
    position: t?.company?.vacancies?.contactInfo?.jobLabel ?? "Руководитель департамента подбора персонала",
    photo: "/imgs/workers/elena_kononovich.jpg",
    phones: ["+375 17 3886446"],
    email: "ekononovich@mpovt.by"
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 md:pt-44 lg:pt-48 pb-12 md:pb-16 lg:pb-20 px-4 text-center relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-black">
        {/* Animated background spheres */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse moving-sphere-1"></div>
          <div className="absolute bottom-1/6 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse moving-sphere-2"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-128 md:h-128 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse moving-sphere-3"></div>
          <div className="absolute top-1/3 right-1/3 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-r from-orange-500/15 to-yellow-500/15 rounded-full blur-3xl animate-pulse moving-sphere-4"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl font-black mb-6 md:mb-8 text-white leading-tight">
              {t?.company?.vacancies?.pageTitle ?? "Вакансии"}
            </h1>
            <p className="text-lg md:text-xl xl:text-2xl text-white/70 mb-6 md:mb-8 max-w-3xl mx-auto">
              {t?.company?.vacancies?.pageSubtitle ?? "Присоединяйтесь к команде профессионалов и развивайте свою карьеру в одной из ведущих компаний Беларуси в области электронных технологий."}
            </p>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-b from-black to-black relative overflow-hidden">
        {/* Enhanced animated background spheres */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-cyan-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse moving-sphere-5"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/15 to-emerald-500/15 rounded-full blur-3xl animate-pulse moving-sphere-6"></div>
          <div className="absolute top-2/3 left-1/6 w-36 h-36 md:w-72 md:h-72 bg-gradient-to-r from-pink-500/15 to-orange-500/15 rounded-full blur-3xl animate-pulse moving-sphere-7"></div>
          <div className="absolute bottom-1/4 center w-44 h-44 md:w-88 md:h-88 bg-gradient-to-r from-yellow-500/15 to-red-500/15 rounded-full blur-3xl animate-pulse moving-sphere-8"></div>
        </div>

        <InfoCardsSection
          title={t?.company?.vacancies?.whyUsTitle ?? "Почему стоит работать с нами?"}
          subtitle={
            t?.company?.vacancies?.whyUsSubtitle ??
            "Стабильность, развитие и комфортные условия для успешной карьеры"
          }
          titleGradientFrom="from-cyan-400"
          titleGradientVia="via-purple-400"
          titleGradientTo="to-emerald-400"
          backgroundGlowFrom="from-cyan-400/15"
          backgroundGlowVia="via-purple-400/15"
          backgroundGlowTo="to-emerald-400/15"
          columns={3}
          cards={[
            {
              title:
                t?.company?.vacancies?.whyUsCards?.stability?.title ??
                "Стабильность и рост",
              description:
                t?.company?.vacancies?.whyUsCards?.stability?.description ??
                "Надежная компания с многолетней историей и стабильным финансовым положением",
              icon: TrendingUp,
              iconColor: "text-cyan-400",
              iconBg: "bg-cyan-500/20",
              iconBgHover: "bg-cyan-500/40",
              borderFrom: "from-cyan-500/20",
              borderTo: "to-purple-500/20",
              cardHoverBg: "bg-cyan-500/20",
            },
            {
              title:
                t?.company?.vacancies?.whyUsCards?.improvement?.title ??
                "Развитие и обучение",
              description:
                t?.company?.vacancies?.whyUsCards?.improvement?.description ??
                "Возможности для профессионального роста и обучения новым технологиям",
              icon: Users,
              iconColor: "text-purple-400",
              iconBg: "bg-purple-500/20",
              iconBgHover: "bg-purple-500/40",
              borderFrom: "from-purple-500/20",
              borderTo: "to-pink-500/20",
              cardHoverBg: "bg-purple-500/20",
            },
            {
              title:
                t?.company?.vacancies?.whyUsCards?.benefits?.title ?? "Социальный пакет",
              description:
                t?.company?.vacancies?.whyUsCards?.benefits?.description ??
                "Полный социальный пакет, медицинская страховка и дополнительные льготы",
              icon: Award,
              iconColor: "text-emerald-400",
              iconBg: "bg-emerald-500/20",
              iconBgHover: "bg-emerald-500/40",
              borderFrom: "from-emerald-500/20",
              borderTo: "to-teal-500/20",
              cardHoverBg: "bg-emerald-500/20",
            },
          ]}
        />

        {/* <section className="py-16 md:py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <div className="text-center mb-12 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-3xl blur-3xl"></div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative z-10">
                Открытые позиции
              </h2>
              <p className="text-lg text-white/60 relative z-10">
                Актуальные вакансии для специалистов различного профиля
              </p>
            </div>
            
            {loading ? (
              <div className="grid gap-6 max-w-5xl mx-auto">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 animate-pulse">
                    <div className="h-6 bg-white/10 rounded mb-4"></div>
                    <div className="h-4 bg-white/10 rounded mb-2"></div>
                    <div className="h-4 bg-white/10 rounded w-2/3"></div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid gap-6 max-w-5xl mx-auto">
                {vacancies.map((vacancy) => (
                  <Card key={vacancy.id} className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="p-6 relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3 flex-1">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                            <Briefcase className="w-5 h-5 text-blue-400" />
                          </div>
                          <h3 className="text-xl font-bold text-white">
                            {vacancy.title}
                          </h3>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleVacancy(vacancy.id)}
                          className="text-white hover:bg-white/10 transition-all duration-200"
                        >
                          {expandedVacancies[vacancy.id] ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                      
                      <div className="flex flex-wrap gap-3 mb-4">
                        <Badge className="bg-slate-700/50 text-slate-200 border-slate-600 px-3 py-1">
                          {vacancy.department}
                        </Badge>
                        <Badge className="bg-slate-700/50 text-slate-200 border-slate-600 px-3 py-1">
                          {vacancy.type}
                        </Badge>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex items-center text-slate-300 mb-2">
                          <Clock className="w-4 h-4 mr-2 text-purple-400" />
                          Опыт работы: {vacancy.experience}
                        </div>
                        <p className="text-slate-200 leading-relaxed">
                          {vacancy.shortDescription}
                        </p>
                      </div>
                      
                      <div
                        ref={el => {
                          if (el) detailsRefs.current[vacancy.id] = el;
                        }}
                        style={{
                          maxHeight: expandedVacancies[vacancy.id]
                            ? detailsRefs.current[vacancy.id]?.scrollHeight + 'px'
                            : '0px',
                          opacity: expandedVacancies[vacancy.id] ? 1 : 0,
                          transition: 'max-height 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.4s cubic-bezier(0.4,0,0.2,1)',
                          overflow: 'hidden',
                        }}
                      >
                        <div
                          className="space-y-4 mb-6 pt-4 border-t border-white/10"
                          style={{
                            pointerEvents: expandedVacancies[vacancy.id] ? 'auto' : 'none',
                          }}
                        >
                          <div>
                            <p className="text-slate-200 leading-relaxed mb-4">
                              {vacancy.fullDescription}
                            </p>
                            <h4 className="text-lg font-semibold mb-3 text-white">
                              Требования:
                            </h4>
                            <ul className="list-disc list-inside text-slate-300 space-y-1">
                              {vacancy.requirements.map((req, index) => (
                                <li key={index}>{req}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="flex flex-col md:flex-row gap-4 pt-6">
                            <Button 
                              size="sm"
                              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl h-10 group/btn overflow-hidden"
                              onClick={() => window.open('https://rabota.by/search/vacancy?from=employerPage&employer_id=1006818&hhtmFrom=employer', '_blank')}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                              <ExternalLink className="w-4 h-4 mr-2 relative z-10" />
                              <span className="relative z-10">Смотреть на rabota.by</span>
                            </Button>
                            <Button 
                              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-0 h-10"
                              onClick={() => window.open('https://rabota.by/search/vacancy?from=employerPage&employer_id=1006818&hhtmFrom=employer', '_blank')}
                            >
                              Откликнуться на вакансию
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section> */}

        {/* Rabota.by info block */}
        <section className="py-16 md:py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <div className="text-center mb-12 relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/15 to-cyan-400/15 rounded-3xl blur-3xl"></div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent relative z-10">
                {t?.company?.vacancies?.offersTitle ?? "Актуальные вакансии"}
              </h2>
              <p className="text-lg text-white/60 relative z-10">
                {t?.company?.vacancies?.offersSubtitle ?? "Полный список открытых позиций на ведущей платформе поиска работы"}
              </p>
            </div>

            <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-cyan-900/70 via-blue-900/70 to-slate-900/70 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group relative hover:scale-[1.01] hover:shadow-2xl hover:shadow-cyan-500/10">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="text-center relative z-10">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  {t?.company?.vacancies?.offersCard?.title ?? "Больше вакансий на rabota.by"}
                </h3>
                <p className="text-lg text-cyan-100 mb-6 leading-relaxed">
                  {t?.company?.vacancies?.offersCard?.description ?? "Полный список актуальных вакансий ОАО «МПОВТ» доступен на нашей странице в rabota.by Здесь вы найдете самую свежую информацию о всех открытых позициях"}
                </p>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyan-400/40 text-cyan-100 hover:bg-cyan-800/30 hover:text-white transition-all duration-200 shadow-none px-6 py-2"
                  onClick={() => window.open('https://rabota.by/search/vacancy?from=employerPage&employer_id=1006818&hhtmFrom=employer', '_blank')}
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  <span>{t?.company?.vacancies?.offersCard?.buttonLabel ?? "Перейти на rabota.by"}</span>
                </Button>
              </div>
            </Card>
          </div>
        </section>

        <ContactSection
          title={t?.company?.vacancies?.contactTitle ?? "Контакты по вопросам трудоустройства"}
          subtitle={t?.company?.vacancies?.contactSubtitle ?? "Свяжитесь с нашим специалистом по подбору персонала для получения подробной информации"}
          titleGradientFrom="from-green-400"
          titleGradientTo="to-teal-400"
          glowFrom="from-green-400/25"
          glowTo="to-teal-400/25"
          contact={{
            name: contact.name,
            position: contact.position,
            phones: contact.phones,
            emails: [contact.email],
            photo: contact.photo
          }}
          holderColorFrom="from-green-500/10"
          holderColorTo="to-teal-500/10"
        />
        <Footer />
      </div>
    </div>
  );
};

export default Vacancies;

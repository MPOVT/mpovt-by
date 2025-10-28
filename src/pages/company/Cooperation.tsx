import { Handshake, Target, Award } from "lucide-react";
import Footer from "@/components/Footer";
import { useLanguage } from '@/contexts/LanguageContext';
import InfoCardsSection from "@/components/sections/InfoCardsSection";
import { DownloadsSection } from "@/components/common";
import { HeroSection } from "@/components/sections/HeroSection";


const Cooperation = () => {
  const { t } = useLanguage();

  const bottomCard = {
    title: t?.company?.cooperation?.additionalCard?.title ?? "О нашем подходе к кооперации",
    description:
      t?.company?.cooperation?.additionalCard?.description ?? "Мы заинтересованы в развитии долгосрочных партнерских отношений с поставщиками, подрядчиками и другими участниками рынка. Мы стремимся к взаимовыгодному сотрудничеству и готовы рассмотреть различные формы партнерства",
    gradientFrom: "from-blue-300",
    gradientVia: "via-orange-200",
    gradientTo: "to-rose-300"
  };

  const cooperationInfo = [
    {
      title: t?.company?.cooperation?.docsCards?.sales?.title ?? "Участие ОАО \"МПОВТ\" в процедурах закупок",
      description: t?.company?.cooperation?.docsCards?.sales?.description ?? "Информация о участии предприятия в государственных и коммерческих закупках",
      downloadUrl: "https://mpovt.by/gallery/%D0%A3%D1%87%D0%B0%D1%81%D1%82%D0%B8%D0%B5%20%D0%9E%D0%90%D0%9E%20%D0%9C%D0%9F%D0%9E%D0%92%D0%A2%20%D0%B2%20%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D0%B4%D1%83%D1%80%D0%B0%D1%85%20%D0%B7%D0%B0%D0%BA%D1%83%D0%BF%D0%BE%D0%BA.pdf"
    },
    {
      title: t?.company?.cooperation?.docsCards?.realResources?.title ?? "Перечень основных средств ОАО \"МПОВТ\", подлежащих реализации",
      description: t?.company?.cooperation?.docsCards?.realResources?.description ?? "Актуальная информация об основных средствах предприятия, доступных для реализации",
      downloadUrl: "https://mpovt.by/gallery/%D0%9F%D0%B5%D1%80%D0%B5%D1%87%D0%B5%D0%BD%D1%8C%20%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D1%8B%D1%85%20%D1%81%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B2%20%D0%9E%D0%90%D0%9E%20%D0%9C%D0%9F%D0%9E%D0%92%D0%A2%20%D0%B4%D0%BB%D1%8F%20%D1%80%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8.pdf"
    }
  ];

  const advantages = [
    {
      title: t?.company?.cooperation?.cooperationCards?.longTermCooperation?.title ?? "Долгосрочное сотрудничество",
      description: t?.company?.cooperation?.cooperationCards?.longTermCooperation?.description ?? "Стремимся к построению долгосрочных и взаимовыгодных отношений с надежными партнерами",
      icon: Handshake,
      iconColor: "text-blue-400",
      iconBg: "bg-blue-500/20",
      iconBgHover: "bg-blue-500/40",
      borderFrom: "from-blue-500/20",
      borderTo: "to-cyan-500/20",
      cardHoverBg: "bg-blue-500/20",
    },
    {
      title: t?.company?.cooperation?.cooperationCards?.flexibleCollaboration?.title ?? "Гибкие условия сотрудничества",
      description: t?.company?.cooperation?.cooperationCards?.flexibleCollaboration?.description ?? "Индивидуальный подход к каждому партнеру и готовность к различным формам кооперации",
      icon: Target,
      iconColor: "text-orange-400",
      iconBg: "bg-orange-500/20",
      iconBgHover: "bg-orange-500/40",
      borderFrom: "from-orange-500/20",
      borderTo: "to-yellow-500/20",
      cardHoverBg: "bg-orange-500/20",
    },
    {
      title: t?.company?.cooperation?.cooperationCards?.highQualityStandards?.title ?? "Высокие стандарты качества",
      description: t?.company?.cooperation?.cooperationCards?.highQualityStandards?.description ?? "Соблюдение международных стандартов качества во всех аспектах сотрудничества",
      icon: Award,
      iconColor: "text-pink-400",
      iconBg: "bg-pink-500/20",
      iconBgHover: "bg-pink-500/40",
      borderFrom: "from-pink-500/20",
      borderTo: "to-purple-500/20",
      cardHoverBg: "bg-pink-500/20",
    }
  ];

  const contactPerson = {
    name: "Иванов Алексей Петрович",
    position: "Заместитель генерального директора по коммерческим вопросам",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=200&fit=crop&crop=face",
    phone: "+375 17 3889456",
    email: "cooperation@mpovt.by"
  };

  return (
    <div className="min-h-screen">
      <HeroSection
        title={t?.company?.cooperation?.pageTitle ?? "Кооперация"}
        subtitle={t?.company?.cooperation?.pageSubtitle ?? "Развиваем взаимовыгодные партнерские отношения и создаем возможности для успешного бизнеса вместе с надежными партнерами"}
        sphere1="from-cyan-500/30 to-blue-500/30"
        sphere2="from-purple-500/30 to-pink-500/30"
        sphere3="from-emerald-500/30 to-teal-500/30"
      />

      <div className="bg-gradient-to-b from-black to-black relative overflow-hidden">
        {/* Enhanced animated background spheres */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse moving-sphere-5"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse moving-sphere-6"></div>
          <div className="absolute top-2/3 left-1/6 w-36 h-36 md:w-72 md:h-72 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse moving-sphere-7"></div>
          <div className="absolute bottom-1/4 center w-44 h-44 md:w-88 md:h-88 bg-gradient-to-r from-yellow-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse moving-sphere-8"></div>
        </div>

        <InfoCardsSection
          title={t?.company?.cooperation?.cooperationTitle ?? "Долгосрочное партнерство"}
          subtitle={t?.company?.cooperation?.cooperationSubtitle ?? "Строим долгосрочные партнерства на основе доверия и профессионализма"}
          titleGradientFrom="from-blue-400"
          titleGradientVia="via-orange-400"
          titleGradientTo="to-pink-400"
          backgroundGlowFrom="from-cyan-400/15"
          backgroundGlowVia="via-purple-400/15"
          backgroundGlowTo="to-emerald-400/15"
          columns={3}
          cards={advantages}
          bottomCard={bottomCard}
        />

        <DownloadsSection
          title={t?.company?.cooperation?.docsTitle ?? "Информация о сотрудничестве"}
          description={t?.company?.cooperation?.docsSubtitle ?? "Документы и материалы для потенциальных партнеров и участников закупочных процедур"}
          downloads={cooperationInfo}
          gradientFrom="purple-400"
          gradientTo="pink-400"
          accentColor="purple-400"
        />

        {/* <section className="py-16 md:py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <div className="text-center mb-12 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/15 to-yellow-400/15 rounded-3xl blur-3xl"></div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent relative z-10">
                Контакты по вопросам кооперации
              </h2>
              <p className="text-lg text-white/60 relative z-10">
                Свяжитесь с нашим специалистом для обсуждения возможностей сотрудничества
              </p>
            </div>
            
            <Card className="max-w-2xl mx-auto overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex flex-col md:flex-row h-full relative z-10">
                <div className="w-full md:w-40 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-orange-500/10 to-yellow-500/10 p-4 md:p-0">
                  <img
                    src={contactPerson.photo}
                    alt={contactPerson.name}
                    className="w-28 h-32 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="flex-1 p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {contactPerson.name}
                  </h3>
                  <p className="text-white/60 mb-4">{contactPerson.position}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-slate-300">
                      <Phone className="w-4 h-4 mr-2 text-orange-400" />
                      <a href={`tel:${contactPerson.phone}`} className="hover:text-orange-400 transition-colors">
                        {contactPerson.phone}
                      </a>
                    </div>
                    <div className="flex items-center text-slate-300">
                      <Mail className="w-4 h-4 mr-2 text-yellow-400" />
                      <a href={`mailto:${contactPerson.email}`} className="hover:text-yellow-400 transition-colors">
                        {contactPerson.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section> */}

        <Footer />
      </div>
    </div>
  );
};

export default Cooperation;
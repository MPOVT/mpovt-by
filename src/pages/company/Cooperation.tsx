import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Download, ExternalLink, Handshake, Target, Users, TrendingUp, Award, CheckCircle, Phone, Mail, Building } from "lucide-react";
import Footer from "@/components/Footer";

const Cooperation = () => {
  const cooperationInfo = [
    {
      title: "Участие ОАО \"МПОВТ\" в процедурах закупок",
      description: "Информация о участии предприятия в государственных и коммерческих закупках",
      url: "https://mpovt.by/gallery/%D0%A3%D1%87%D0%B0%D1%81%D1%82%D0%B8%D0%B5%20%D0%9E%D0%90%D0%9E%20%D0%9C%D0%9F%D0%9E%D0%92%D0%A2%20%D0%B2%20%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D0%B4%D1%83%D1%80%D0%B0%D1%85%20%D0%B7%D0%B0%D0%BA%D1%83%D0%BF%D0%BE%D0%BA.pdf"
    },
    {
      title: "Перечень основных средств ОАО \"МПОВТ\", подлежащих реализации",
      description: "Актуальная информация об основных средствах предприятия, доступных для реализации",
      url: "https://mpovt.by/gallery/%D0%9F%D0%B5%D1%80%D0%B5%D1%87%D0%B5%D0%BD%D1%8C%20%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D1%8B%D1%85%20%D1%81%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B2%20%D0%9E%D0%90%D0%9E%20%D0%9C%D0%9F%D0%9E%D0%92%D0%A2%20%D0%B4%D0%BB%D1%8F%20%D1%80%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8.pdf"
    }
  ];

  const advantages = [
    {
      icon: Handshake,
      title: "Долгосрочное партнерство",
      description: "Стремимся к построению долгосрочных и взаимовыгодных отношений с надежными партнерами"
    },
    {
      icon: Target,
      title: "Гибкие условия сотрудничества",
      description: "Индивидуальный подход к каждому партнеру и готовность к различным формам кооперации"
    },
    {
      icon: Award,
      title: "Высокие стандарты качества",
      description: "Соблюдение международных стандартов качества во всех аспектах сотрудничества"
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
      {/* Hero Section */}
      <section className="pt-40 md:pt-44 lg:pt-48 pb-12 md:pb-16 lg:pb-20 px-4 text-center relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-black">
        {/* Animated background spheres */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse moving-sphere-1"></div>
          <div className="absolute bottom-1/6 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse moving-sphere-2"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-128 md:h-128 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-full blur-3xl animate-pulse moving-sphere-3"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl font-black mb-6 md:mb-8 text-white leading-tight">
              Кооперация
            </h1>
            <p className="text-lg md:text-xl xl:text-2xl text-white/70 mb-6 md:mb-8 max-w-3xl mx-auto">
              Развиваем взаимовыгодные партнерские отношения и создаем возможности для успешного бизнеса вместе с надежными партнерами.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-b from-black to-black relative overflow-hidden">
        {/* Enhanced animated background spheres */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse moving-sphere-5"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse moving-sphere-6"></div>
          <div className="absolute top-2/3 left-1/6 w-36 h-36 md:w-72 md:h-72 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse moving-sphere-7"></div>
          <div className="absolute bottom-1/4 center w-44 h-44 md:w-88 md:h-88 bg-gradient-to-r from-yellow-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse moving-sphere-8"></div>
        </div>

        {/* Partnership Development Section */}
        <section className="py-16 md:py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <div className="text-center mb-12 relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/15 via-purple-400/15 to-emerald-400/15 rounded-3xl blur-3xl"></div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-orange-400 to-pink-400 bg-clip-text text-transparent relative z-10">
                Развитие партнерских отношений
              </h2>
              <p className="text-lg text-white/60 relative z-10">
                Строим долгосрочные партнерства на основе взаимного доверия и профессионализма
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12 justify-center items-stretch place-items-center">
              {advantages.map((advantage, index) => {
                const Icon = advantage.icon;
                const iconColors = [
                  { icon: "text-blue-400", bg: "bg-blue-500/20", bgHover: "bg-blue-500/40", border: "from-blue-500/20 to-cyan-500/20", cardHover: "bg-blue-500/20" },
                  { icon: "text-orange-400", bg: "bg-orange-500/20", bgHover: "bg-orange-500/40", border: "from-orange-500/20 to-yellow-500/20", cardHover: "bg-orange-500/20" },
                  { icon: "text-pink-400", bg: "bg-pink-500/20", bgHover: "bg-pink-500/40", border: "from-pink-500/20 to-purple-500/20", cardHover: "bg-pink-500/20" }
                ][index];
                return (
                  <Card 
                    key={index} 
                    className={`p-6 text-center bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 group relative w-full max-w-sm h-full flex flex-col transform-gpu hover:scale-105 ${iconColors.cardHover} hover:!bg-opacity-30 hover:!bg-blend-lighten`}
                    style={{ transitionProperty: 'background, border, box-shadow, transform', transitionDuration: '300ms' }}
                  >
                    {/* Background glow on hover */}
                    <div className={`absolute inset-0 ${iconColors.bg} rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none`}></div>
                    {/* Border glow on hover */}
                    <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${iconColors.border} p-px pointer-events-none`}>
                      <div className="w-full h-full bg-black/90 rounded-lg"></div>
                    </div>
                    <div
                      className={`w-16 h-16 ${iconColors.bg} rounded-xl flex items-center justify-center mx-auto mb-6 transition-colors duration-300 group-hover:${iconColors.bgHover} relative z-20`}
                    >
                      <Icon className={`h-8 w-8 ${iconColors.icon}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white relative z-20">{advantage.title}</h3>
                    <p className="text-slate-300 relative z-20">{advantage.description}</p>
                  </Card>
                );
              })}
            </div>

            {/* Cooperation Approach Info Card */}
            <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-slate-900/30 via-slate-700/30 to-slate-900/30 backdrop-blur-xl border border-slate-500/20 hover:border-slate-400/30 transition-all duration-300 group relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 via-slate-600/5 to-slate-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-center relative z-10">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-300 via-orange-200 to-rose-300 bg-clip-text text-transparent">
                  О нашем подходе к кооперации
                </h3>
                <p className="text-lg text-slate-200 leading-relaxed">
                  ОАО "МПОВТ" заинтересовано в развитии долгосрочных партнерских отношений с поставщиками, подрядчиками и другими участниками рынка. Мы стремимся к взаимовыгодному сотрудничеству и готовы рассмотреть различные формы кооперации.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Cooperation Information Section */}
        <section className="py-16 md:py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <div className="text-center mb-12 relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-3xl blur-3xl"></div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative z-10">
                Информация о сотрудничестве
              </h2>
              <p className="text-lg text-white/60 relative z-10">
                Документы и материалы для потенциальных партнеров и участников закупочных процедур
              </p>
            </div>
            
            <div className="grid gap-6 max-w-5xl mx-auto">
              {cooperationInfo.map((info, index) => (
                <Card key={index} className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 group relative">
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FileText className="w-6 h-6 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 text-white">
                          {info.title}
                        </h3>
                        <p className="text-slate-400 text-sm">{info.description}</p>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      className="bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-purple-400/50 backdrop-blur-sm transition-all duration-300 flex-shrink-0 ml-4 shadow-lg hover:shadow-xl hover:shadow-purple-500/20 hover:scale-[1.02] group/btn"
                      onClick={() => window.open(info.url, '_blank')}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-md opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      <Download className="w-4 h-4 mr-2 relative z-10" />
                      <span className="relative z-10">PDF</span>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Person Section */}
        <section className="py-16 md:py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <div className="text-center mb-12 relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/15 to-yellow-400/15 rounded-3xl blur-3xl"></div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent relative z-10">
                Контакты по вопросам кооперации
              </h2>
              <p className="text-lg text-white/60 relative z-10">
                Свяжитесь с нашим специалистом для обсуждения возможностей сотрудничества
              </p>
            </div>
            
            <Card className="max-w-2xl mx-auto overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 relative">
              {/* Background glow */}
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
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Cooperation;

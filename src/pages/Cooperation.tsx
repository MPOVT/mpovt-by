
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Phone, Mail, User, Building2, Handshake, Globe } from "lucide-react";
import Footer from "@/components/Footer";

const Cooperation = () => {
  const contacts = [
    {
      name: "Соболевская Елена Анатольевна",
      position: "Руководитель Департамента логистики и внешнеэкономической деятельности",
      phone: "+375 17 3889398",
      email: "sobolevskaya@mpovt.by"
    },
    {
      name: "Матюшонок Дмитрий Эдуардович",
      position: "Начальник сектора Департамента разработок",
      phone: "+375 17 3889083",
      email: null
    }
  ];

  const links = [
    {
      title: "Участие ОАО \"МПОВТ\" в процедурах закупок",
      url: "https://icetrade.by/search/aucArchive?search_text=%D0%9E%D0%90%D0%9E+%D0%9C%D0%9F%D0%9E%D0%92%D0%A2&zakup_type%5B1%5D=1&zakup_type%5B2%5D=1&auc_num=&okrb=&company_title=&participant=&establishment=0&industries=&period=&created_from=&created_to=&request_end_from=&request_end_to=&t%5BTrade%5D=1&t%5BeTrade%5D=1&t%5BsocialOrder%5D=1&t%5BsingleSource%5D=1&t%5BAuction%5D=1&t%5BRequest%5D=1&t%5BcontractingTrades%5D=1&t%5Bnegotiations%5D=1&t%5BOther%5D=1&r%5B1%5D=1&r%5B2%5D=2&r%5B7%5D=7&r%5B3%5D=3&r%5B4%5D=4&r%5B6%5D=6&r%5B5%5D=5&sort=num%3Adesc&sbm=1&onPage=20",
      description: "Информация о участии компании в торговых процедурах и закупках на платформе IceTrade"
    },
    {
      title: "Перечень основных средств ОАО \"МПОВТ\", подлежащих реализации",
      url: "https://mpovt.by/gallery/%D0%A0%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F%2022.pdf",
      description: "Документ со списком основных средств компании, доступных для реализации"
    }
  ];

  const advantages = [
    {
      icon: Building2,
      title: "Надежное партнерство",
      description: "Многолетний опыт успешного сотрудничества с ведущими компаниями отрасли"
    },
    {
      icon: Handshake,
      title: "Взаимовыгодное сотрудничество",
      description: "Гибкие условия партнерства и индивидуальный подход к каждому проекту"
    },
    {
      icon: Globe,
      title: "Международный опыт",
      description: "Опыт работы на международных рынках и знание глобальных стандартов"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with animated spheres */}
      <div className="fixed inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        {/* Animated spheres */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-teal-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-1/3 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-24 md:pt-32 pb-16 px-4 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-900/5 to-transparent"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
                Кооперация
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                ОАО "МПОВТ" активно развивает партнерские отношения и участвует в различных формах сотрудничества для достижения взаимовыгодных результатов.
              </p>
            </div>
          </div>
        </section>

        {/* Advantages Section - moved to top */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Развитие партнерских отношений
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              {advantages.map((advantage, index) => (
                <div key={index} className="glass-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full flex items-center justify-center">
                    <advantage.icon className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-300">{advantage.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                ОАО "МПОВТ" заинтересовано в развитии долгосрочных партнерских отношений с поставщиками, 
                подрядчиками и другими участниками рынка. Мы стремимся к взаимовыгодному сотрудничеству 
                и готовы рассмотреть различные формы кооперации.
              </p>
            </div>
          </div>
        </section>

        {/* Links Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Информация о сотрудничестве
            </h2>
            <div className="grid gap-6 max-w-5xl mx-auto">
              {links.map((link, index) => (
                <div key={index} className="glass-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        {link.title}
                      </h3>
                      <p className="text-gray-300 mb-4">{link.description}</p>
                    </div>
                    <Button
                      className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white border-0 ml-4 flex-shrink-0"
                      onClick={() => window.open(link.url, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Открыть
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contacts Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Контактные лица
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {contacts.map((contact, index) => (
                <div key={index} className="glass-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {contact.name}
                      </h3>
                      <p className="text-purple-300 mb-4 text-sm">{contact.position}</p>
                      <div className="space-y-2">
                        <div className="flex items-center text-gray-300">
                          <Phone className="w-4 h-4 mr-2 text-purple-400" />
                          <a href={`tel:${contact.phone}`} className="hover:text-purple-400 transition-colors text-sm">
                            {contact.phone}
                          </a>
                        </div>
                        {contact.email && (
                          <div className="flex items-center text-gray-300">
                            <Mail className="w-4 h-4 mr-2 text-purple-400" />
                            <a href={`mailto:${contact.email}`} className="hover:text-purple-400 transition-colors text-sm">
                              {contact.email}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Cooperation;

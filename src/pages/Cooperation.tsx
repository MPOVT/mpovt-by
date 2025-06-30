
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Phone, Mail, User } from "lucide-react";
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-slate-900/30"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Кооперация
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              ОАО "МПОВТ" активно развивает партнерские отношения и участвует в различных формах сотрудничества для достижения взаимовыгодных результатов.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Links Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Информация о сотрудничестве
            </h2>
            <div className="grid gap-6 max-w-4xl mx-auto">
              {links.map((link, index) => (
                <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">{link.title}</h3>
                        <p className="text-slate-400 text-sm mb-4">{link.description}</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 ml-4 flex-shrink-0"
                        onClick={() => window.open(link.url, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Открыть
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contacts Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Контактные лица
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {contacts.map((contact, index) => (
                <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-2">{contact.name}</h3>
                        <p className="text-blue-400 mb-4 text-sm">{contact.position}</p>
                        <div className="space-y-2">
                          <div className="flex items-center text-slate-300">
                            <Phone className="w-4 h-4 mr-2 text-blue-400" />
                            <a href={`tel:${contact.phone}`} className="hover:text-blue-400 transition-colors text-sm">
                              {contact.phone}
                            </a>
                          </div>
                          {contact.email && (
                            <div className="flex items-center text-slate-300">
                              <Mail className="w-4 h-4 mr-2 text-blue-400" />
                              <a href={`mailto:${contact.email}`} className="hover:text-blue-400 transition-colors text-sm">
                                {contact.email}
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Развитие партнерских отношений
                </h3>
                <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
                  ОАО "МПОВТ" заинтересовано в развитии долгосрочных партнерских отношений с поставщиками, 
                  подрядчиками и другими участниками рынка. Мы стремимся к взаимовыгодному сотрудничеству 
                  и готовы рассмотреть различные формы кооперации.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cooperation;

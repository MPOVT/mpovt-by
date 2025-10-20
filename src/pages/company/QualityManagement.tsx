import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Download, CheckCircle, Award, Shield, Target, Users, Truck, Laptop, Cable, Cpu, Factory, Computer, Zap, Microchip } from "lucide-react";
import Footer from "@/components/Footer";
import { useLanguage } from '@/contexts/LanguageContext';

const QualityManagement = () => {
  const { t } = useLanguage();

  const certificates = [
    {
      title: t?.company?.qas?.certsCards?.iso9001?.title ?? "СТБ ISO 9001-2015",
      number: "BY /112 05.01. 003.01 00601",
      validUntil: "14.02.2026",
      certifier: t?.company?.qas?.certsCards?.iso9001?.provider ?? "РУП «БелГИМ»",
      description: t?.company?.qas?.certsCards?.iso9001?.description ?? "Международный стандарт системы менеджмента качества, обеспечивающий постоянное улучшение процессов и удовлетворенность клиентов",
      pdfUrl: "https://mpovt.by/gallery/%D0%A1%D0%A2%D0%91%20ISO%209001.pdf"
    },
    {
      title: t?.company?.qas?.certsCards?.iatf16949?.title ?? "СТБ 16949-2018",
      number: "BY/112 05.07. 003.01 00602",
      validUntil: "14.02.2026",
      certifier: t?.company?.qas?.certsCards?.iatf16949?.provider ?? "РУП «БелГИМ»",
      description: t?.company?.qas?.certsCards?.iatf16949?.description ?? "Стандарт системы менеджмента качества для автомобильной промышленности, обеспечивающий высочайшие требования к качеству продукции",
      pdfUrl: "https://mpovt.by/gallery/%D0%A1%D0%A2%D0%91%2016949.pdf"
    }
  ];

  const documents = [
    {
      title: t?.company?.qas?.docsCards?.pipQualityPolicy?.title ?? "Руководство по менеджменту качества поставщиков ПКИ и материалов для производства автокомпонентов",
      description: t?.company?.qas?.docsCards?.pipQualityPolicy?.description ?? "Документ, определяющий требования и стандарты качества для поставщиков продукции и материалов, используемых в производстве автокомпонентов",
      url: "https://mpovt.by/gallery/%D0%A0%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE.pdf"
    },
    {
      title: t?.company?.qas?.docsCards?.qualityPolicy?.title ?? "Политика в области качества",
      description: t?.company?.qas?.docsCards?.qualityPolicy?.description ?? "Официальный документ, отражающий приверженность компании обеспечению высокого качества продукции и услуг",
      url: "https://mpovt.by/gallery/%D0%9E%D0%A2%D0%9A%D0%A0%D0%AB%D0%A2%D0%9E%D0%95%20%D0%90%D0%9A%D0%A6%D0%98%D0%9E%D0%9D%D0%95%D0%A0%D0%9D%D0%9E%D0%95%20%D0%9E%D0%91%D0%A9%D0%95%D0%A1%D0%A2%D0%92%D0%9E.pdf"
    },
    // {
    //   title: "План выполнения ОАО \"МПОВТ\" мероприятий Республиканского плана мероприятий по проведению в 2024 году Года качества",
    //   url: "https://mpovt.by/gallery/%D0%9F%D0%BB%D0%B0%D0%BD%20%D0%B2%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%BC%D0%B5%D1%80%D0%BE%D0%BF%D1%80%D0%B8%D1%8F%D1%82%D0%B8%D0%B9.pdf"
    // }
  ];

  const productCertificates = [
    {
      title: t?.company?.qas?.validCertsCards?.tractors?.title ?? "Автотракторная продукция",
      description: t?.company?.qas?.validCertsCards?.tractors?.description ?? "Электронные блоки управления для тракторов и сельскохозяйственной техники",
      icon: Factory,
      iconColor: "text-orange-400",
      bgColor: "from-orange-500/20 to-red-500/20",
      hoverBg: "from-orange-500/10 to-red-500/10",
      borderColor: "from-orange-500/30 to-red-500/30",
      url: "https://mpovt.by/gallery/%D0%A1%D0%95%D0%A0%D0%A2%D0%98%D0%A4%D0%98%D0%9A%D0%90%D0%A2%20%D0%A1%D0%9E%D0%91%D0%A1%D0%A2%D0%92%D0%95%D0%9D%D0%9D%D0%9E%D0%93%D0%9E%20%D0%9F%D0%A0%D0%9E%D0%98%D0%97%D0%92%D0%9E%D0%94%D0%A1%D0%A2%D0%92%D0%90%20(%D0%B0%D0%B2%D1%82%D0%BE%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%BE%D0%B5).pdf"
    },
    {
      title: t?.company?.qas?.validCertsCards?.laptops?.title ?? "Ноутбуки",
      description: t?.company?.qas?.validCertsCards?.laptops?.description ?? "Портативные компьютеры для профессионального и образовательного использования",
      icon: Computer,
      iconColor: "text-blue-400",
      bgColor: "from-blue-500/20 to-cyan-500/20",
      hoverBg: "from-blue-500/10 to-cyan-500/10",
      borderColor: "from-blue-500/30 to-cyan-500/30",
      url: "https://mpovt.by/gallery/%D0%A1%D0%95%D0%A0%D0%A2%D0%98%D0%A4%D0%98%D0%9A%D0%90%D0%A2%20%D0%A1%D0%9E%D0%91%D0%A1%D0%A2%D0%92%D0%95%D0%9D%D0%9D%D0%9E%D0%93%D0%9E%20%D0%9F%D0%A0%D0%9E%D0%98%D0%97%D0%92%D0%9E%D0%94%D0%A1%D0%A2%D0%92%D0%90%20%D0%9D%D0%90%20%D0%9D%D0%9E%D0%A3%D0%A2%D0%91%D0%A3%D0%9A%D0%98.PDF"
    },
    {
      title: t?.company?.qas?.validCertsCards?.powerAdapters?.title ?? "Адаптер сетевой",
      description: t?.company?.qas?.validCertsCards?.powerAdapters?.description ?? "Источники питания и зарядные устройства для электронной техники",
      icon: Zap,
      iconColor: "text-yellow-400",
      bgColor: "from-yellow-500/20 to-orange-500/20",
      hoverBg: "from-yellow-500/10 to-orange-500/10",
      borderColor: "from-yellow-500/30 to-orange-500/30",
      url: "https://mpovt.by/gallery/%D0%90%D0%B4%D0%B0%D0%BF%D1%82%D0%B5%D1%80%20%D1%81%D0%B5%D1%82%D0%B5%D0%B2%D0%BE%D0%B9%20%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%20%D1%81%D0%BE%D0%B1%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BF%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%B0.PDF"
    },
    {
      title: t?.company?.qas?.validCertsCards?.systemPlates?.title ?? "Плата системная",
      description: t?.company?.qas?.validCertsCards?.systemPlates?.description ?? "Основные компоненты и материнские платы для компьютерной техники",
      icon: Microchip,
      iconColor: "text-green-400",
      bgColor: "from-green-500/20 to-emerald-500/20",
      hoverBg: "from-green-500/10 to-emerald-500/10",
      borderColor: "from-green-500/30 to-emerald-500/30",
      url: "https://mpovt.by/gallery/%D0%9F%D0%BB%D0%B0%D1%82%D0%B0%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%BD%D0%B0%D1%8F%20%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%20%D1%81%D0%BE%D0%B1%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BF%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%B0.PDF"
    }
  ];

  const advantages = [
    {
      icon: Shield,
      title: t?.company?.qas?.qualityCards?.iso?.title ?? "Международные стандарты",
      description: t?.company?.qas?.qualityCards?.iso?.description ?? "Сертификация по ISO 9001 и IATF 16949 подтверждает соответствие мировым стандартам качества"
    },
    {
      icon: Target,
      title: t?.company?.qas?.qualityCards?.growing?.title ?? "Постоянное совершенствование",
      description: t?.company?.qas?.qualityCards?.growing?.description ?? "Непрерывное улучшение процессов и внедрение передовых методов управления качеством"
    },
    {
      icon: Users,
      title: t?.company?.qas?.qualityCards?.team?.title ?? "Квалифицированная команда",
      description: t?.company?.qas?.qualityCards?.team?.description ?? "Высококвалифицированные специалисты обеспечивают контроль качества на всех этапах"
    }
  ];

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
              {t?.company?.qas?.pageTitle ?? "Система менеджмента качества"}
            </h1>
            <p className="text-lg md:text-xl xl:text-2xl text-white/70 mb-6 md:mb-8 max-w-3xl mx-auto">
              {t?.company?.qas?.pageSubtitle ?? "ОАО \"МПОВТ\" поддерживает высочайшие стандарты качества, подтвержденные международными сертификатами и строгим соблюдением требований ISO"}
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

        {/* Advantages Section */}
        <section className="py-16 md:py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <div className="text-center mb-8 md:mb-12 relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-purple-400/10 to-emerald-400/10 rounded-3xl blur-3xl"></div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent relative z-10">
                {t?.company?.qas?.qualityTitle ?? "Наша приверженность качеству"}
              </h2>
              <p className="text-lg text-white/60 relative z-10">
                {t?.company?.qas?.qualitySubtitle ?? "Соответствие международным стандартам и непрерывное совершенствование процессов"}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto justify-center items-stretch place-items-center">
              {advantages.map((advantage, index) => {
                const Icon = advantage.icon;
                // Цвета для карточек: cyan, purple, emerald (по аналогии с Vacancies)
                const iconColors = [
                  { icon: "text-cyan-400", bg: "bg-cyan-500/20", bgHover: "bg-cyan-500/40", border: "from-cyan-500/20 to-purple-500/20", cardHover: "bg-cyan-500/20" },
                  { icon: "text-purple-400", bg: "bg-purple-500/20", bgHover: "bg-purple-500/40", border: "from-purple-500/20 to-pink-500/20", cardHover: "bg-purple-500/20" },
                  { icon: "text-emerald-400", bg: "bg-emerald-500/20", bgHover: "bg-emerald-500/40", border: "from-emerald-500/20 to-teal-500/20", cardHover: "bg-emerald-500/20" }
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
          </div>
        </section>

        {/* Certificates Section */}
        <section className="py-16 md:py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <div className="text-center mb-12 relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 rounded-3xl blur-3xl"></div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent relative z-10">
                {t?.company?.qas?.certsTitle ?? "Сертификаты соответствия"}
              </h2>
              <p className="text-lg text-white/60 relative z-10">
                {t?.company?.qas?.certsSubtitle ?? "Официальные документы, подтверждающие соответствие международным стандартам качества"}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {certificates.map((cert, index) => (
                <Card key={index} className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 group transform-gpu hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:shadow-emerald-500/20 relative hover:border-emerald-400/30 [transform-style:preserve-3d]">
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-start justify-between mb-6 relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-emerald-400" />
                    </div>
                    <Badge className="bg-emerald-500/10 text-emerald-300 border-emerald-500/20 px-3 py-1 text-sm">
                      {t?.company?.qas?.certsExpiriesLabel ?? "до"} {cert.validUntil}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white relative z-10">
                    {cert.title}
                  </h3>
                  <p className="text-slate-300 mb-6 text-sm leading-relaxed relative z-10">
                    {cert.description}
                  </p>
                  <div className="space-y-3 mb-6 relative z-10">
                    <p className="text-slate-300 text-sm">
                      <span className="text-emerald-400 font-medium">{t?.company?.qas?.certsNumberLabel ?? "Номер"}:</span> {cert.number}
                    </p>
                    <p className="text-slate-300 text-sm">
                      <span className="text-emerald-400 font-medium">{t?.company?.qas?.certsProviderLabel ?? "Орган сертификации"}:</span> {cert.certifier}
                    </p>
                  </div>
                  <Button
                    className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-emerald-400/50 backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/20 hover:scale-[1.02] relative z-10 group/btn"
                    onClick={() => window.open(cert.pdfUrl, '_blank')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-md opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <Download className="w-4 h-4 mr-2 relative z-10" />
                    <span className="relative z-10">{t?.company?.qas?.certsDownloadLabel ?? "Скачать сертификат"}</span>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Documents Section */}
        <section className="py-16 md:py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <div className="text-center mb-12 relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-3xl blur-3xl"></div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative z-10">
                {t?.company?.qas?.docsTitle ?? "Документы и руководства"}
              </h2>
              <p className="text-lg text-white/60 relative z-10">
                {t?.company?.qas?.docsSubtitle ?? "Нормативная документация и руководящие материалы по системе менеджмента качества"}
              </p>
            </div>
            
            <div className="grid gap-6 max-w-5xl mx-auto">
              {documents.map((doc, index) => (
                <Card key={index} className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 group hover:scale-105 hover:border-transparent relative">
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Border glow on hover */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-px">
                    <div className="w-full h-full bg-black/90 rounded-lg"></div>
                  </div>
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FileText className="w-6 h-6 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 text-white">
                          {doc.title}
                        </h3>
                        <p className="text-slate-400 text-sm">{doc.description}</p>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      className="bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-purple-400/50 backdrop-blur-sm transition-all duration-300 flex-shrink-0 ml-4 shadow-lg hover:shadow-xl hover:shadow-purple-500/20 hover:scale-[1.02] group/btn"
                      onClick={() => window.open(doc.url, '_blank')}
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

        {/* Product Certificates Section */}
        <section className="py-16 md:py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <div className="text-center mb-12 relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-yellow-400/10 rounded-3xl blur-3xl"></div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent relative z-10">
                {t?.company?.qas?.validCertsTitle ?? "Сертификаты соответствия продукции собственного производства"}
              </h2>
              <p className="text-lg text-white/60 relative z-10">
                {t?.company?.qas?.validCertsSubtitle ?? "Документы, подтверждающие качество и безопасность выпускаемой продукции"}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {productCertificates.map((cert, index) => {
                const Icon = cert.icon;
                
                return (
                  <Card key={index} className="overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 group relative">
                    {/* Background glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${cert.hoverBg} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <div className="flex flex-col md:flex-row h-full relative z-10">
                      <div className="w-full md:w-32 flex-shrink-0">
                        <div className={`w-full h-32 md:h-full bg-gradient-to-br ${cert.bgColor} flex items-center justify-center`}>
                          <Icon className={`w-12 h-12 ${cert.iconColor}`} />
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <h3 className="text-lg font-semibold mb-2 text-white">
                          {cert.title}
                        </h3>
                        <p className="text-slate-300 text-sm mb-4">{cert.description}</p>
                        <Button
                          size="sm"
                          className={`bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-${cert.iconColor.split('-')[1]}-400/50 backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-${cert.iconColor.split('-')[1]}-500/20 hover:scale-[1.02] group/btn`}
                          onClick={() => window.open(cert.url, '_blank')}
                        >
                          <div className={`absolute inset-0 bg-gradient-to-r ${cert.hoverBg} rounded-md opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300`}></div>
                          <Download className="w-4 h-4 mr-2 relative z-10" />
                          <span className="relative z-10">PDF</span>
                        </Button>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default QualityManagement;

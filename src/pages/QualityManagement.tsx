
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Download, CheckCircle, Award, Shield, Target, Users } from "lucide-react";
import Footer from "@/components/Footer";

const QualityManagement = () => {
  const certificates = [
    {
      title: "СТБ ISO 9001-2015",
      number: "BY /112 05.01. 003.01 00601",
      validUntil: "14.02.2026",
      certifier: "РУП «БелГИМ»",
      pdfUrl: "https://mpovt.by/gallery/%D0%A1%D0%A2%D0%91%20ISO%209001.pdf"
    },
    {
      title: "СТБ 16949-2018",
      number: "BY/112 05.07. 003.01 00602",
      validUntil: "14.02.2026",
      certifier: "РУП «БелГИМ»",
      pdfUrl: "https://mpovt.by/gallery/%D0%A1%D0%A2%D0%91%2016949.pdf"
    }
  ];

  const documents = [
    {
      title: "Руководство по менеджменту качества поставщиков ПКИ и материалов для производства автокомпонентов",
      url: "https://mpovt.by/gallery/%D0%A0%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE.pdf"
    },
    {
      title: "Политика в области качества",
      url: "https://mpovt.by/gallery/%D0%9E%D0%A2%D0%9A%D0%A0%D0%AB%D0%A2%D0%9E%D0%95%20%D0%90%D0%9A%D0%A6%D0%98%D0%9E%D0%9D%D0%95%D0%A0%D0%9D%D0%9E%D0%95%20%D0%9E%D0%91%D0%A9%D0%95%D0%A1%D0%A2%D0%92%D0%9E.pdf"
    },
    {
      title: "План выполнения ОАО \"МПОВТ\" мероприятий Республиканского плана мероприятий по проведению в 2024 году Года качества",
      url: "https://mpovt.by/gallery/%D0%9F%D0%BB%D0%B0%D0%BD%20%D0%B2%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%BC%D0%B5%D1%80%D0%BE%D0%BF%D1%80%D0%B8%D1%8F%D1%82%D0%B8%D0%B9.pdf"
    }
  ];

  const productCertificates = [
    {
      title: "Автотракторная продукция",
      url: "https://mpovt.by/gallery/%D0%A1%D0%95%D0%A0%D0%A2%D0%98%D0%A4%D0%98%D0%9A%D0%90%D0%A2%20%D0%A1%D0%9E%D0%91%D0%A1%D0%A2%D0%92%D0%95%D0%9D%D0%9D%D0%9E%D0%93%D0%9E%20%D0%9F%D0%A0%D0%9E%D0%98%D0%97%D0%92%D0%9E%D0%94%D0%A1%D0%A2%D0%92%D0%90%20(%D0%B0%D0%B2%D1%82%D0%BE%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%BE%D0%B5).pdf"
    },
    {
      title: "Ноутбуки",
      url: "https://mpovt.by/gallery/%D0%A1%D0%95%D0%A0%D0%A2%D0%98%D0%A4%D0%98%D0%9A%D0%90%D0%A2%20%D0%A1%D0%9E%D0%91%D0%A1%D0%A2%D0%92%D0%95%D0%9D%D0%9D%D0%9E%D0%93%D0%9E%20%D0%9F%D0%A0%D0%9E%D0%98%D0%97%D0%92%D0%9E%D0%94%D0%A1%D0%A2%D0%92%D0%90%20%D0%9D%D0%90%20%D0%9D%D0%9E%D0%A3%D0%A2%D0%91%D0%A3%D0%9A%D0%98.PDF"
    },
    {
      title: "Адаптер сетевой",
      url: "https://mpovt.by/gallery/%D0%90%D0%B4%D0%B0%D0%BF%D1%82%D0%B5%D1%80%20%D1%81%D0%B5%D1%82%D0%B5%D0%B2%D0%BE%D0%B9%20%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%20%D1%81%D0%BE%D0%B1%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BF%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%B0.PDF"
    },
    {
      title: "Плата системная",
      url: "https://mpovt.by/gallery/%D0%9F%D0%BB%D0%B0%D1%82%D0%B0%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%BD%D0%B0%D1%8F%20%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%20%D1%81%D0%BE%D0%B1%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BF%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%B0.PDF"
    }
  ];

  const advantages = [
    {
      icon: Shield,
      title: "Международные стандарты",
      description: "Сертификация по ISO 9001 и IATF 16949 подтверждает соответствие мировым стандартам качества"
    },
    {
      icon: Target,
      title: "Постоянное совершенствование",
      description: "Непрерывное улучшение процессов и внедрение передовых методов управления качеством"
    },
    {
      icon: Users,
      title: "Квалифицированная команда",
      description: "Высококвалифицированные специалисты обеспечивают контроль качества на всех этапах"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with animated spheres */}
      <div className="fixed inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        {/* Animated spheres */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-1/3 w-64 h-64 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section - like Contact page */}
        <section className="pt-24 md:pt-32 pb-16 px-4 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
                Система менеджмента качества
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                ОАО "МПОВТ" поддерживает высочайшие стандарты качества, подтвержденные международными сертификатами и строгим соблюдением требований ISO.
              </p>
            </div>
          </div>
        </section>

        {/* Advantages Section - moved to top */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Наша приверженность качеству
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {advantages.map((advantage, index) => (
                <div key={index} className="glass-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                    <advantage.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-300">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Сертификаты соответствия
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {certificates.map((cert, index) => (
                <div key={index} className="glass-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-green-400" />
                    </div>
                    <Badge className="bg-gradient-to-r from-green-500/20 to-green-400/20 text-green-300 border-green-500/30 px-3 py-1">
                      До {cert.validUntil}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    {cert.title}
                  </h3>
                  <div className="space-y-3 mb-6">
                    <p className="text-gray-300">
                      <span className="text-blue-400 font-semibold">Номер:</span> {cert.number}
                    </p>
                    <p className="text-gray-300">
                      <span className="text-blue-400 font-semibold">Орган:</span> {cert.certifier}
                    </p>
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 text-white border-0"
                    onClick={() => window.open(cert.pdfUrl, '_blank')}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Скачать сертификат
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Documents Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Документы и руководства
            </h2>
            <div className="grid gap-6 max-w-5xl mx-auto">
              {documents.map((doc, index) => (
                <div key={index} className="glass-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <FileText className="w-6 h-6 text-orange-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                          {doc.title}
                        </h3>
                        <p className="text-gray-400 text-sm">Официальный документ ОАО "МПОВТ"</p>
                      </div>
                    </div>
                    <Button
                      className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white border-0 flex-shrink-0 ml-4"
                      onClick={() => window.open(doc.url, '_blank')}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      PDF
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Certificates Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Сертификаты продукции собственного производства
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {productCertificates.map((cert, index) => (
                <div key={index} className="glass-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                          {cert.title}
                        </h3>
                        <p className="text-gray-400 text-sm">Сертификат соответствия</p>
                      </div>
                    </div>
                    <Button
                      className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white border-0"
                      onClick={() => window.open(cert.url, '_blank')}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      PDF
                    </Button>
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

export default QualityManagement;

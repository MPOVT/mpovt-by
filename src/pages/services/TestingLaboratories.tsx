
import React from "react";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import LaboratoriesSection from "@/components/TestingLabs/LaboratoriesSection";
import AdvantagesSection from "@/components/TestingLabs/AdvantagesSection";
import DocumentsSection from "@/components/TestingLabs/DocumentsSection";
import ContactSection from "@/components/sections/ContactSection";
import { useLanguage } from '@/contexts/LanguageContext';
import { DownloadsSection } from "@/components/common";

const TestingLaboratories = () => {
  const { t } = useLanguage();

  const documents = [
    { 
      title: "Аттестат лаборатории испытаний", 
      description: "",
      downloadUrl: "https://mpovt.by/gallery/%D0%90%D1%82%D1%82%D0%B5%D1%81%D1%82%D0%B0%D1%82%20%D0%B0%D0%BA%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%B0%D1%86%D0%B8%D0%B8%20%D0%9B%D0%98%D1%81.pdf" 
    },
    { 
      title: "Область аккредитации ЛИс",
      description: "",
      downloadUrl: "https://mpovt.by/gallery/%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%20%D0%B0%D0%BA%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%B0%D1%86%D0%B8%D0%B8%20%D0%9B%D0%98%D1%81.pdf" 
    },
    { 
      title: "Аттестат лаборатории метрологии",
      description: "",
      downloadUrl: "https://mpovt.by/gallery/%D0%90%D1%82%D1%82%D0%B5%D1%81%D1%82%D0%B0%D1%82%20%D0%B0%D0%BA%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%B0%D1%86%D0%B8%D0%B8%20%D0%9B%D0%9C_16.07.2021.pdf" 
    },
    { 
      title: "Область аккредитации ЛМ", 
      description: "",
      downloadUrl: "https://mpovt.by/gallery/%D0%9E%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%20%D0%B0%D0%BA%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%B0%D1%86%D0%B8%D0%B8%20%D0%9B%D0%9C.pdf" 
    }
  ];

  const advantages = [
    
  ]

  return (
    <div className="min-h-screen">
      <HeroSection
        title={t?.company?.qas?.pageTitle ?? "Система менеджмента качества"}
        subtitle={t?.company?.qas?.pageSubtitle ?? "ОАО \"МПОВТ\" поддерживает высочайшие стандарты качества, подтвержденные международными сертификатами и строгим соблюдением требований ISO"}
        sphere1="from-cyan-500/30 to-blue-500/30"
        sphere2="from-purple-500/30 to-pink-500/30"
        sphere3="from-emerald-500/30 to-teal-500/30"
      />
      <LaboratoriesSection />
      <AdvantagesSection />
      <DownloadsSection
        title={t?.company?.cooperation?.docsTitle ?? "Информация о сотрудничестве"}
        description={t?.company?.cooperation?.docsSubtitle ?? "Документы и материалы для потенциальных партнеров и участников закупочных процедур"}
        downloads={documents}
        gradientFrom="purple-400"
        gradientTo="pink-400"
        accentColor="purple-400"
      />
      <ContactSection
        title="Контакты"
        subtitle="Свяжитесь с руководителем департамента для получения консультации"
        titleGradientFrom="from-emerald-400"
        titleGradientVia="via-teal-400"
        titleGradientTo="to-emerald-400"
        glowFrom="from-emerald-500/20"
        glowTo="to-teal-500/20"
        contact={{
          name: "Шляев Артём Сергеевич",
          position: "Руководитель Департамента управления качеством",
          phones: ["+375 17 3889093"],
          emails: ["shliaev@mpovt.by"],
        }}
        holderColorFrom="from-emerald-500/10"
        holderColorTo="to-teal-500/10"
      />
      <Footer />
    </div>
  );
};

export default TestingLaboratories;

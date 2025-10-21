
import React from "react";
import Footer from "@/components/Footer";
import HeroSection from "@/components/TestingLabs/HeroSection";
import LaboratoriesSection from "@/components/TestingLabs/LaboratoriesSection";
import AdvantagesSection from "@/components/TestingLabs/AdvantagesSection";
import DocumentsSection from "@/components/TestingLabs/DocumentsSection";
import ContactSection from "@/components/TestingLabs/ContactSection";

const TestingLaboratories = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <LaboratoriesSection />
      <AdvantagesSection />
      <DocumentsSection />
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

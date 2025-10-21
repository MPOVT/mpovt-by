import React from "react";
import CTACard from "@/components/common/CTACard";

interface ContactSectionProps {
  title: string; // Текст заголовка
  subtitle: string; // Текст под заголовком
  titleGradientFrom?: string; // Цвет градиента заголовка (начало)
  titleGradientVia?: string;  // Цвет середины
  titleGradientTo?: string;   // Цвет конца
  glowFrom?: string; // Цвет первого "шара"
  glowTo?: string;   // Цвет второго "шара"
  contact: {
    name: string;
    position: string;
    photo?: string;
    phones: string[];
    emails: string[];
  };
  holderColorFrom?: string;
  holderColorTo?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  title,
  subtitle,
  titleGradientFrom = "from-purple-400",
  titleGradientVia = "via-pink-400",
  titleGradientTo = "to-purple-400",
  glowFrom = "from-purple-500/20",
  glowTo = "to-pink-500/20",
  contact,
  holderColorFrom = "from-purple-500/10",
  holderColorTo = "to-pink-500/10",
}) => {
  return (
    <section className="py-16 md:py-20 bg-black relative overflow-hidden">
      {/* Анимированные фоновые шары */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r ${glowFrom} ${glowTo} rounded-full blur-3xl animate-pulse`}
        ></div>
        <div
          className={`absolute bottom-1/6 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r ${glowTo} ${glowFrom} rounded-full blur-3xl animate-pulse`}
        ></div>
      </div>

      {/* Контент */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className={`text-3xl md:text-5xl font-bold bg-gradient-to-r ${titleGradientFrom} ${titleGradientVia} ${titleGradientTo} bg-clip-text text-transparent mb-2`}
          >
            {title}
          </h2>
          <p className="text-lg text-white/60 mb-4 relative z-10">{subtitle}</p>
        </div>

        {/* Контактная карточка */}
        <CTACard
          name={contact.name}
          position={contact.position}
          photo={contact.photo}
          phoneNumbers={contact.phones}
          emails={contact.emails}
          holderColorFrom={holderColorFrom}
          holderColorTo={holderColorTo}
        />
      </div>
    </section>
  );
};

export default ContactSection;

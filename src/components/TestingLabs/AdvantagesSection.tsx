import React from "react";
import { Card } from "@/components/ui/card";
import { Award, Users, Clock, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const defaultAdvantages = [
  {
    icon: Award,
    title: "Аккредитация",
    description: "Все лаборатории имеют государственную аккредитацию"
  },
  {
    icon: Users,
    title: "Опытные специалисты",
    description: "Команда высококвалифицированных экспертов"
  },
  {
    icon: Clock,
    title: "Быстрые сроки",
    description: "Оперативное проведение испытаний и выдача результатов"
  },
  {
    icon: Shield,
    title: "Надежность",
    description: "Точные и достоверные результаты испытаний"
  }
];

const AdvantagesSection = () => {
  const { t } = useLanguage();

  const advantages = (t.testingLabs && t.testingLabs.advantages) || defaultAdvantages;

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-black via-slate-900/30 to-black relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[36rem] md:h-[36rem] bg-gradient-to-br from-emerald-400/10 to-purple-400/10 rounded-full blur-3xl animate-soft-glow"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mb-8">
            { (t.testingLabs && t.testingLabs.advantagesHeading) || 'Наши преимущества' }
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            { (t.testingLabs && t.testingLabs.advantagesDescription) || 'Почему стоит выбрать наши испытательные лаборатории' }
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            const valueCardColors = [
              {
                color: "text-emerald-500",
                bgColor: "bg-emerald-500/20"
              },
              {
                color: "text-blue-500",
                bgColor: "bg-blue-500/20"
              },
              {
                color: "text-purple-500",
                bgColor: "bg-purple-500/20"
              },
              {
                color: "text-orange-500",
                bgColor: "bg-orange-500/20"
              }
            ];
            const color = valueCardColors[index % valueCardColors.length];
            return (
              <Card
                key={index}
                className="p-4 sm:p-6 md:p-8 text-center bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-500 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 ${color.bgColor} rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 lg:mb-6`}>
                  <Icon className={`h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 ${color.color}`} />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 md:mb-3 text-white">{advantage.title}</h3>
                <p className="text-slate-300 text-xs sm:text-sm md:text-base">{advantage.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
      <style>{`
        @keyframes softGlow {
          0%, 100% { filter: blur(60px) brightness(1); opacity: 0.7; transform: translate(-50%, -50%) scale(1); }
          50% { filter: blur(80px) brightness(1.1); opacity: 1; transform: translate(-50%, -50%) scale(1.08); }
        }
        .animate-soft-glow {
          animation: softGlow 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AdvantagesSection;
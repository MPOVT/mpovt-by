import React from 'react';
import { Building2, Users, Globe, Award, TrendingUp, Shield } from 'lucide-react';

interface CompanyOverviewSectionProps {
  className?: string;
}

export const CompanyOverviewSection: React.FC<CompanyOverviewSectionProps> = ({ className = "" }) => {
  const stats = [
    {
      icon: Building2,
      value: "1956",
      label: "Год основания",
      description: "Более 65 лет опыта в электронной промышленности"
    },
    {
      icon: Users,
      value: "500+",
      label: "Сотрудников",
      description: "Высококвалифицированная команда специалистов"
    },
    {
      icon: Globe,
      value: "50+",
      label: "Стран",
      description: "География экспорта нашей продукции"
    },
    {
      icon: Award,
      value: "ISO 9001",
      label: "Сертификация",
      description: "Международные стандарты качества"
    }
  ];

  const capabilities = [
    {
      icon: TrendingUp,
      title: "Инновации и развитие",
      description: "Постоянные инвестиции в R&D и модернизацию производства",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Качество и надежность",
      description: "Строгий контроль на каждом этапе производственного процесса",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Building2,
      title: "Современное производство",
      description: "Высокотехнологичное оборудование и автоматизация процессов",
      color: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <section className={`py-16 md:py-20 lg:py-24 px-4 relative overflow-hidden ${className}`}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-slate-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full blur-3xl moving-sphere-4"
          style={{ top: '10%', right: '10%' }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl moving-sphere-5"
          style={{ bottom: '20%', left: '15%' }}
        ></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              О нашей компании
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            ОАО "Минский приборостроительный завод имени В. Г. Менгеля" — ведущее предприятие Республики Беларусь 
            в области разработки и производства электронной техники и автокомпонентов
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 md:mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-amber-500/50 transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-orange-500/0 group-hover:from-amber-500/10 group-hover:to-orange-500/10 rounded-2xl transition-all duration-500"></div>
              
              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-amber-400" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-white font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-slate-400 leading-relaxed">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/60 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/80 transition-all duration-500 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${(index + 4) * 100}ms` }}
            >
              {/* Animated gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${capability.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${capability.color} bg-opacity-20 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors duration-300">
                  {capability.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Company Description */}
        <div className="mt-16 md:mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 animate-fade-in" style={{ animationDelay: '700ms' }}>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-slate-300 leading-relaxed mb-4">
                Наше предприятие специализируется на производстве защищенных компьютеров, ноутбуков, мониторов, 
                накопителей данных, а также электронных блоков управления для автомобильной промышленности.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Мы обладаем полным циклом производства — от разработки и проектирования до выпуска готовой продукции. 
                Наша система менеджмента качества сертифицирована по стандартам ISO 9001 и IATF 16949.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Продукция МПОВТ успешно поставляется в страны СНГ, Европы, Азии и Африки, что подтверждает 
                высокое качество и конкурентоспособность наших решений на мировом рынке.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
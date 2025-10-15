import React from 'react';
import Footer from '@/components/Footer';
import { PageHero } from '@/components/common/PageHero';
import { ImageContentSection } from '@/components/common/ImageContentSection';
import { DescriptionSection } from '@/components/common/DescriptionSection';
import { SectionHeader } from '@/components/common/SectionHeader';
import { IconCard } from '@/components/common/IconCard';
import { FeatureCard } from '@/components/common/FeatureCard';
import { DownloadsSection } from '@/components/common/DownloadsSection';
import { CTASection } from '@/components/common/CTASection';
import { Tablet, Battery, Camera, Wifi, Usb, Cpu, Shield } from 'lucide-react';
import { VideoSection } from '@/components/common/VideoSection';

const Tablets = () => {
  const specifications = [
    { icon: Cpu, title: 'Процессор', description: 'Энергоэффективные ARM/Intel решения', color: { icon: 'text-cyan-400', bg: 'bg-cyan-500/20' } },
    { icon: Battery, title: 'Автономность', description: 'До 10-12 часов воспроизведения видео', color: { icon: 'text-emerald-400', bg: 'bg-emerald-500/20' } },
    { icon: Camera, title: 'Камеры', description: 'Основная 13 MP + фронтальная 8 MP', color: { icon: 'text-yellow-400', bg: 'bg-yellow-500/20' } },
    { icon: Wifi, title: 'Связь', description: 'Wi-Fi 6 и LTE/5G опции', color: { icon: 'text-purple-400', bg: 'bg-purple-500/20' } },
    { icon: Usb, title: 'Интерфейсы', description: 'USB-C, поддержка периферии и зарядки', color: { icon: 'text-pink-400', bg: 'bg-pink-500/20' } },
    { icon: Shield, title: 'Безопасность', description: 'Биометрия и аппаратный шифр/TPM', color: { icon: 'text-indigo-400', bg: 'bg-indigo-500/20' } }
  ];

  const features = [
    { icon: Tablet, title: 'Портативность', description: 'Тонкие и лёгкие планшеты для работы и творчества' },
    { icon: Cpu, title: 'Производительность', description: 'Поддержка офисных и профессиональных приложений' },
    { icon: Battery, title: 'Длительное время работы', description: 'Оптимизированное энергопотребление для целого дня работы' },
    { icon: Camera, title: 'Медиа и творчество', description: 'Качественная съёмка и поддержка стилусов' }
  ];

  const downloads = [
    { title: 'Технические характеристики H-Tab', description: 'Спецификации планшетов', icon: Cpu, fileName: 'h-tab-specs.pdf', fileSize: '1.1 MB', downloadUrl: '/downloads/h-tab-specs.pdf' },
    { title: 'Руководство пользователя', description: 'Инструкция и советы по эксплуатации', icon: Shield, fileName: 'h-tab-manual.pdf', fileSize: '920 KB', downloadUrl: '/downloads/h-tab-manual.pdf' }
  ];

  const descriptionParagraphs = [
    'H-Tab — это серия планшетов, разработанных для тех, кто ценит мобильность и функциональность.',
    'Планшеты предлагают высокую яркость дисплея, поддержку стилусов и опциональные модули связи для работы в дороге.',
    'Устройства подходят для образования, бизнеса и мультимедиа благодаря комбинации производительности и удобства.'
  ];

  return (
    <div className="min-h-screen bg-black">
      <PageHero
        title="H-Tab"
        subtitle="Планшеты для обучения, работы и творчества"
        description="Универсальные планшеты с длительным временем работы и поддержкой периферии"
      />

      <ImageContentSection
        title="Мобильность и функциональность"
        description="H-Tab создан для тех, кто работает в движении и требует надёжного инструмента"
        imageSrc={'/placeholder.svg'}
        imageAlt="H-Tab планшет"
        features={["Поддержка стилусов", "LTE/5G опции", "Яркие IPS и OLED дисплеи", "Защитное стекло" ]}
        imagePosition="left"
      />

      <VideoSection
        title="H-Tab: компактность и мощность"
        description="Узнайте, как H-Tab меняет представление о портативных устройствах"
        videoSrc="/videos/h-tab.mp4"
      />

      <DescriptionSection title="Описание" paragraphs={descriptionParagraphs} />

      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-slate-900/50 to-black relative">
        <div className="container mx-auto">
          <SectionHeader title="Технические характеристики" description="Основные характеристики H-Tab" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {specifications.map((spec, index) => (
              <IconCard key={index} icon={spec.icon} title={spec.title} description={spec.description} color={spec.color} variant="primary" animationDelay={index * 100} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 relative">
        <div className="container mx-auto">
          <SectionHeader title="Ключевые преимущества" subtitle="ПОЧЕМУ H-TAB?" description="Преимущества, которые делают планшеты удобными и универсальными" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {features.map((feature, index) => (
              <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} variant={index % 2 === 0 ? 'primary' : 'secondary'} animationDelay={index * 0.15} />
            ))}
          </div>
        </div>
      </section>

      <DownloadsSection title="Загрузки" description="Документы и прошивки" downloads={downloads} />

      <CTASection title="Интересует H-Tab?" description="Свяжитесь с нами для консультации и заказа" primaryButtonText="Связаться" primaryButtonLink="/contact" secondaryButtonText="Все продукты" secondaryButtonLink="/products" />

      <Footer />
    </div>
  );
};

export default Tablets;

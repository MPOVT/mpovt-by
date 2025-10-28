import Footer from '@/components/Footer';
import { PageHero } from '@/components/common/PageHero';
import { ImageContentSection } from '@/components/common/ImageContentSection';
import { DescriptionSection } from '@/components/common/DescriptionSection';
import { SectionHeader } from '@/components/common/SectionHeader';
import { IconCard } from '@/components/common/IconCard';
import { FeatureCard } from '@/components/common/FeatureCard';
import { DownloadsSection } from '@/components/sections/DownloadsSection';
import { CTASection } from '@/components/sections/CTASection';
import { MEDIA_ASSETS } from '@/lib/media-assets';
import { HardDrive, Zap, Cpu, Shield, Activity, Download } from 'lucide-react';

const Storage = () => {
  const specifications = [
    { icon: HardDrive, title: 'Тип накопителя', description: 'NVMe PCIe 3.0 / 4.0 SSD', color: { icon: 'text-blue-400', bg: 'bg-blue-500/20' } },
    { icon: Cpu, title: 'Емкость', description: 'От 256GB до 4TB', color: { icon: 'text-green-400', bg: 'bg-green-500/20' } },
    { icon: Activity, title: 'Скорость', description: 'До 7000 MB/s чтение / 6500 MB/s запись', color: { icon: 'text-yellow-400', bg: 'bg-yellow-500/20' } },
    { icon: Zap, title: 'Энергопотребление', description: 'Оптимизировано для низкого энергопотребления', color: { icon: 'text-purple-400', bg: 'bg-purple-500/20' } },
    { icon: Shield, title: 'Надежность', description: 'MTBF > 2 млн часов, поддержка SMART', color: { icon: 'text-pink-400', bg: 'bg-pink-500/20' } },
  { icon: Shield, title: 'Гарантия', description: 'От 3 до 5 лет официальной гарантии', color: { icon: 'text-indigo-400', bg: 'bg-indigo-500/20' } }
  ];

  const features = [
    {
      title: 'Высокая производительность',
      description: 'Современные NVMe контроллеры и быстрые NAND-чипы для критически важных задач',
      image: MEDIA_ASSETS.priorityProducts.ssd
    },
    {
      title: 'Широкий выбор форм-факторов',
      description: 'M.2 2280, 2.5" SATA и U.2 для разных систем и сценариев',
      image: MEDIA_ASSETS.priorityProducts.ssd
    },
    {
      title: 'Безопасность данных',
      description: 'Поддержка аппаратного шифрования и возможностей резервного копирования',
      image: MEDIA_ASSETS.priorityProducts.ssd
    },
    {
      title: 'Энергоэффективность',
      description: 'Низкое энергопотребление для ноутбуков и дата-центров',
      image: MEDIA_ASSETS.priorityProducts.ssd
    }
  ];

  const downloads = [
    {
      title: 'Технические характеристики H-Storage',
      description: 'Подробные спецификации SSD-накопителей',
      icon: HardDrive,
      fileName: 'h-storage-specs.pdf',
      fileSize: '1.2 MB',
      downloadUrl: '/downloads/h-storage-specs.pdf'
    },
    {
      title: 'Руководство по установке',
      description: 'Инструкция по установке и замене накопителя',
      icon: Download,
      fileName: 'h-storage-install.pdf',
      fileSize: '600 KB',
      downloadUrl: '/downloads/h-storage-install.pdf'
    }
  ];

  const descriptionParagraphs = [
    'H-Storage — линейка высокопроизводительных твердотельных накопителей, разработанных для профессиональных пользователей и предприятий.',
    'Наши SSD предлагают комбинацию высокой скорости передачи данных, длительного срока службы и расширенных функций безопасности, включая аппаратное шифрование и поддержку SMART.',
    'Доступны различные форм-факторы и емкости, что делает H-Storage подходящим решением как для ноутбуков и рабочих станций, так и для серверных стоек.'
  ];

  return (
    <div className="min-h-screen bg-black">
      <PageHero
        title="H-Storage"
        subtitle="Надёжные и быстрые SSD для бизнеса и частных пользователей"
        description="Твердотельные накопители высокой производительности: для ноутбуков, рабочих станций и серверов"
      />

      <ImageContentSection
        title="Скорость и надёжность"
        description="H-Storage объединяет лучшие технологии NAND и контроллеров для максимальной производительности"
        imageSrc={MEDIA_ASSETS.priorityProducts.ssd}
        imageAlt="H-Storage SSD"
        features={["NVMe PCIe 4.0", "Аппаратное шифрование", "Высокий ресурс перезаписи", "Широкий выбор форм-факторов"]}
        imagePosition="right"
      />

      <DescriptionSection title="Описание" paragraphs={descriptionParagraphs} />

      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-slate-900/50 to-black relative">
        <div className="container mx-auto">
          <SectionHeader
            title="Технические характеристики"
            subtitle="H-STORAGE"
            description="Характеристики, которые важны при выборе SSD"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {specifications.map((spec, index) => (
              <IconCard
                key={index}
                icon={spec.icon}
                title={spec.title}
                description={spec.description}
                color={spec.color}
                variant="primary"
                animationDelay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 relative">
        <div className="container mx-auto">
          <SectionHeader
            title="Ключевые преимущества"
            subtitle="ПОЧЕМУ H-STORAGE?"
            description="Надёжность и скорость — основа наших накопителей"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={HardDrive}
                title={feature.title}
                description={feature.description}
                variant={index % 2 === 0 ? 'primary' : 'secondary'}
                animationDelay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      <DownloadsSection title="Документация" description="Файлы для загрузки" downloads={downloads} />

      <CTASection
        title="Нужны быстрые и надёжные накопители?"
        description="Свяжитесь с нами для подбора оптимального решения под вашу задачу"
        primaryButtonText="Получить предложение"
        primaryButtonLink="/contact"
        secondaryButtonText="Все продукты"
        secondaryButtonLink="/products"
      />

      <Footer />
    </div>
  );
};

export default Storage;

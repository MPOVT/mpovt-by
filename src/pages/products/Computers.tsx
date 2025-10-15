import Footer from '@/components/Footer';
import { PageHero } from '@/components/common/PageHero';
import { ImageContentSection } from '@/components/common/ImageContentSection';
import { VideoSection } from '@/components/common/VideoSection';
import { DescriptionSection } from '@/components/common/DescriptionSection';
import { SectionHeader } from '@/components/common/SectionHeader';
import { IconCard } from '@/components/common/IconCard';
import { FeatureCard } from '@/components/common/FeatureCard';
import { DownloadsSection } from '@/components/common/DownloadsSection';
import { CTASection } from '@/components/common/CTASection';
import { OptimizedImage } from '@/components/OptimizedImage';
import { MEDIA_ASSETS } from '@/lib/media-assets';
import { Cpu, HardDrive, Wifi, Thermometer, Volume2, Zap } from 'lucide-react';

const Computers = () => {
  const specifications = [
    { 
      icon: Cpu, 
      title: "Процессор", 
      description: "Intel Core i7 / AMD Ryzen 7",
      color: { icon: "text-blue-400", bg: "bg-blue-500/20" }
    },
    { 
      icon: HardDrive, 
      title: "Накопитель", 
      description: "1TB NVMe SSD + 32GB RAM",
      color: { icon: "text-green-400", bg: "bg-green-500/20" }
    },
    { 
      icon: Wifi, 
      title: "Подключения", 
      description: "Wi-Fi 6E, Bluetooth 5.3, USB-C",
      color: { icon: "text-yellow-400", bg: "bg-yellow-500/20" }
    },
    { 
      icon: Thermometer, 
      title: "Охлаждение", 
      description: "Бесшумная система до 35°C",
      color: { icon: "text-purple-400", bg: "bg-purple-500/20" }
    },
    { 
      icon: Volume2, 
      title: "Уровень шума", 
      description: "Менее 25 дБ при полной нагрузке",
      color: { icon: "text-pink-400", bg: "bg-pink-500/20" }
    },
    { 
      icon: Zap, 
      title: "Энергопотребление", 
      description: "65W TDP, до 90% эффективности",
      color: { icon: "text-indigo-400", bg: "bg-indigo-500/20" }
    }
  ];

  const features = [
    {
      title: "Компактный форм-фактор",
      description: "Мощный компьютер в корпусе размером с книгу - идеально для любого рабочего места",
      image: MEDIA_ASSETS.priorityProducts.miniPc
    },
    {
      title: "Тихая работа",
      description: "Продвинутая система охлаждения обеспечивает бесшумную работу даже под нагрузкой",
      image: MEDIA_ASSETS.computers.hTop1
    },
    {
      title: "Высокая производительность",
      description: "Современные процессоры и быстрые SSD накопители для максимальной скорости работы",
      image: MEDIA_ASSETS.computers.hTop3
    },
    {
      title: "Богатые возможности подключения",
      description: "Множество портов для подключения периферии и внешних устройств",
      image: MEDIA_ASSETS.computers.hTop4
    }
  ];

  const downloads = [
    { 
      title: "Технические характеристики H-Top", 
      description: "Подробные спецификации мини-ПК",
      icon: Cpu,
      fileName: "h-top-specs.pdf",
      fileSize: "1.8 MB",
      downloadUrl: "/downloads/h-top-specs.pdf"
    },
    { 
      title: "Руководство по установке", 
      description: "Пошаговая инструкция по настройке",
      icon: HardDrive,
      fileName: "h-top-install.pdf",
      fileSize: "4.2 MB",
      downloadUrl: "/downloads/h-top-install.pdf"
    },
    { 
      title: "Драйверы и утилиты", 
      description: "Необходимое программное обеспечение",
      icon: Wifi,
      fileName: "h-top-drivers.zip",
      fileSize: "256 MB",
      downloadUrl: "/downloads/h-top-drivers.zip"
    },
    { 
      title: "Гарантийные условия", 
      description: "Информация о гарантийном обслуживании",
      icon: Zap,
      fileName: "h-top-warranty.pdf",
      fileSize: "1.1 MB",
      downloadUrl: "/downloads/h-top-warranty.pdf"
    }
  ];

  const computerDescriptionParagraphs = [
    "H-Top - это революция в мире компактных компьютеров. Несмотря на миниатюрные размеры, эти системы обеспечивают производительность, сопоставимую с полноразмерными настольными ПК.",
    "Современные процессоры Intel Core и AMD Ryzen в сочетании с быстрой памятью DDR5 и NVMe накопителями обеспечивают мгновенный отклик системы и высокую скорость работы с любыми приложениями.",
    "Особое внимание уделено системе охлаждения. Инновационная конструкция с медными тепловыми трубками и интеллектуальным управлением вентиляторами поддерживает оптимальную температуру при минимальном уровне шума.",
    "H-Top идеально подходит для современных офисов, где ценятся эстетика и функциональность. Компактный дизайн позволяет разместить компьютер даже на самом маленьком рабочем столе, а богатые возможности подключения обеспечивают совместимость с любой периферией."
  ];

  return (
    <div className="min-h-screen bg-black">
      <PageHero
        title="H-Top"
        subtitle="Мини-ПК максимальной мощности"
        description="Компактные компьютеры с производительностью полноразмерных систем для современного офиса и дома"
      />

      <ImageContentSection
        title="Мощь в миниатюре"
        description="H-Top доказывает, что размер не влияет на производительность - современные технологии в минималистичном дизайне"
        imageSrc={MEDIA_ASSETS.computers.hTop5}
        imageAlt="H-Top мини-ПК"
        features={[
          "Процессоры последнего поколения",
          "До 64GB оперативной памяти",
          "Поддержка 4K мониторов",
          "Модульная конструкция для апгрейда"
        ]}
        imagePosition="left"
      />

      <DescriptionSection
        title="Технологии нового поколения"
        paragraphs={computerDescriptionParagraphs}
      />

      <section className="pt-20">
        <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-black">
          <div className="container mx-auto px-4 py-20">
            <SectionHeader
              title="Технические характеристики"
              subtitle="МОЩНОСТЬ В ДЕТАЛЯХ"
              description="H-Top объединяет передовые технологии в компактном корпусе"
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
                  animationDelay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Ключевые преимущества"
            subtitle="ПОЧЕМУ H-TOP?"
            description="Особенности, которые делают H-Top идеальным выбором для современных задач"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={Cpu}
                title={feature.title}
                description={feature.description}
                variant={index % 2 === 0 ? "primary" : "secondary"}
                animationDelay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      <DownloadsSection
        title="Документация и драйверы"
        description="Загрузите необходимые файлы для настройки и использования H-Top"
        downloads={downloads}
      />

      <CTASection
        title="Переходите на новый уровень"
        description="H-Top - это будущее настольных компьютеров уже сегодня"
        primaryButtonText="Получить предложение"
        primaryButtonLink="/contact"
        secondaryButtonText="Сравнить модели"
        secondaryButtonLink="/products"
      />

      <Footer />
    </div>
  );
};

export default Computers;
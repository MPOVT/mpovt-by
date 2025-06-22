
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { MapPin, Phone, Mail, Clock, Building2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  email: z.string().email("Пожалуйста, введите корректный email"),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, "Сообщение должно содержать минимум 10 символов"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log(data);
    toast({
      title: "Сообщение отправлено!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen flex flex-col page-transition-enter page-transition-enter-active">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="section bg-gradient-to-br from-primary/10 via-background to-primary/5">
          <div className="container">
            <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Свяжитесь с нами
              </h1>
              <p className="text-xl text-muted-foreground">
                Готовы обсудить сотрудничество или ответить на ваши вопросы. 
                Выберите удобный способ связи.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form Section */}
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8 animate-fade-in [animation-delay:200ms]">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Контактная информация</h2>
                  <p className="text-muted-foreground mb-8">
                    Наша команда готова помочь вам с любыми вопросами о продукции, 
                    сотрудничестве и услугах компании.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="glass-card border-white/20 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Адрес</h3>
                          <p className="text-muted-foreground">
                            г. Минск, Фрунзенский район<br />
                            Республика Беларусь
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-white/20 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Телефон</h3>
                          <p className="text-muted-foreground">
                            +375 (17) XXX-XX-XX<br />
                            <span className="text-sm">Многоканальный</span>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-white/20 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Email</h3>
                          <p className="text-muted-foreground">
                            info@mpovt.by<br />
                            <span className="text-sm">Общие вопросы</span>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-white/20 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <Clock className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Режим работы</h3>
                          <p className="text-muted-foreground">
                            Пн-Пт: 8:00 - 17:00<br />
                            <span className="text-sm">Сб-Вс: выходные</span>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div className="animate-fade-in [animation-delay:400ms]">
                <Card className="glass-card border-white/20">
                  <CardHeader>
                    <CardTitle className="text-2xl">Отправить сообщение</CardTitle>
                    <CardDescription>
                      Заполните форму ниже, и мы свяжемся с вами в ближайшее время
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Имя *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Ваше имя" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email *</FormLabel>
                                <FormControl>
                                  <Input placeholder="email@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Компания</FormLabel>
                                <FormControl>
                                  <Input placeholder="Название компании" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Телефон</FormLabel>
                                <FormControl>
                                  <Input placeholder="+375 (XX) XXX-XX-XX" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Сообщение *</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Расскажите о ваших потребностях или задайте вопрос..."
                                  className="min-h-[120px]"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button type="submit" className="btn-primary w-full">
                          Отправить сообщение
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="section bg-primary/5">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="glass-card border-white/20 text-center animate-scale-in" style={{ animationDelay: '100ms' }}>
                <CardContent className="p-6">
                  <div className="p-3 rounded-lg bg-primary/10 w-fit mx-auto mb-4">
                    <Building2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Корпоративные клиенты</h3>
                  <p className="text-muted-foreground">
                    Специальные условия сотрудничества для крупных предприятий и организаций
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card border-white/20 text-center animate-scale-in" style={{ animationDelay: '200ms' }}>
                <CardContent className="p-6">
                  <div className="p-3 rounded-lg bg-primary/10 w-fit mx-auto mb-4">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Техническая поддержка</h3>
                  <p className="text-muted-foreground">
                    Круглосуточная поддержка по вопросам эксплуатации нашей продукции
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card border-white/20 text-center animate-scale-in" style={{ animationDelay: '300ms' }}>
                <CardContent className="p-6">
                  <div className="p-3 rounded-lg bg-primary/10 w-fit mx-auto mb-4">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Быстрый ответ</h3>
                  <p className="text-muted-foreground">
                    Гарантируем ответ на ваше обращение в течение 24 часов
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

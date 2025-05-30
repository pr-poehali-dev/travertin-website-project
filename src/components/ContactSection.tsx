import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="py-16 px-4 bg-travertine-100/30">
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-white shadow-xl border-travertine-200">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-3xl font-montserrat text-primary">
              Свяжитесь с нами
            </CardTitle>
            <p className="text-muted-foreground">
              Профессиональная консультация и быстрая доставка по всей России
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">📞</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Телефоны:</p>
                    <p className="text-muted-foreground">+7 (917) 256-88-88</p>
                    <p className="text-muted-foreground">+7 (917) 929-07-70</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email:</p>
                    <p className="text-muted-foreground">
                      2005faststroi@mail.ru
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Адрес:</p>
                    <p className="text-muted-foreground">г. Ялта</p>
                    <p className="text-muted-foreground">ИП Брегеда Т.В.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-travertine-50 p-6 rounded-lg">
                  <h3 className="font-montserrat font-semibold text-lg mb-3">
                    Дополнительно в наличии:
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Грунтовка для травертина 14 кг
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Изделия из травертина (фонтаны, мойки)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Стеновые и напольные плиты
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Полированный травертин
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    onClick={() => window.open("tel:+79172568888")}
                  >
                    Позвонить сейчас
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={() => window.open("mailto:2005faststroi@mail.ru")}
                  >
                    Написать письмо
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;

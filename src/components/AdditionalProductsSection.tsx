import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AdditionalProductsSection = () => {
  return (
    <section className="py-16 px-4 bg-travertine-50">
      <div className="container mx-auto max-w-6xl">
        <Card className="bg-white shadow-lg border-travertine-200">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-3xl font-montserrat text-primary flex items-center justify-center gap-3">
              <Icon name="Wrench" size={32} className="text-primary" />
              Дополнительно
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <h3 className="text-xl font-montserrat font-semibold text-foreground mb-4 flex items-center gap-3">
                <Icon name="Paintbrush2" size={24} className="text-primary" />
                Грунтовка для травертина 14 кг
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <Icon
                    name="Shield"
                    size={16}
                    className="text-primary mt-1 flex-shrink-0"
                  />
                  <span className="text-muted-foreground">
                    обеспечивает прочное сцепление
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon
                    name="Zap"
                    size={16}
                    className="text-primary mt-1 flex-shrink-0"
                  />
                  <span className="text-muted-foreground">
                    устойчива к растрескиванию
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon
                    name="Brush"
                    size={16}
                    className="text-primary mt-1 flex-shrink-0"
                  />
                  <span className="text-muted-foreground">
                    подходит для нанесения травертина и других декоративных
                    штукатурок
                  </span>
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-montserrat font-semibold text-foreground mb-4 flex items-center gap-3">
                  <Icon name="Hammer" size={24} className="text-primary" />
                  Изделия из травертина
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <Icon
                      name="Droplets"
                      size={16}
                      className="text-primary flex-shrink-0"
                    />
                    <span className="text-muted-foreground">фонтаны</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon
                      name="Bath"
                      size={16}
                      className="text-primary flex-shrink-0"
                    />
                    <span className="text-muted-foreground">мойки</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-montserrat font-semibold text-foreground mb-4 flex items-center gap-3">
                  <Icon name="Package" size={24} className="text-primary" />
                  Широкий ассортимент
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <Icon
                      name="Square"
                      size={16}
                      className="text-primary mt-1 flex-shrink-0"
                    />
                    <span className="text-muted-foreground">
                      стеновых и напольных плит
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon
                      name="Sparkles"
                      size={16}
                      className="text-primary mt-1 flex-shrink-0"
                    />
                    <span className="text-muted-foreground">
                      полированный травертин – не требует дополнительной
                      шлифовки
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AdditionalProductsSection;

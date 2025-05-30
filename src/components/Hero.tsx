import { Card, CardContent } from "@/components/ui/card";

const Hero = () => {
  return (
    <section className="py-16 px-4 animate-fade-in">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-primary mb-4">
            ТРАВЕРТИН
          </h1>
          <p className="text-xl text-muted-foreground font-medium">
            Поставки и строительные изделия
          </p>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-travertine-200">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-travertine-200 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-primary transition-colors">
                  <span className="text-2xl">🚚</span>
                </div>
                <h3 className="font-montserrat font-semibold text-lg mb-2">
                  Прямые поставки
                </h3>
                <p className="text-sm text-muted-foreground">Без посредников</p>
              </div>

              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-travertine-200 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-primary transition-colors">
                  <span className="text-2xl">🗺️</span>
                </div>
                <h3 className="font-montserrat font-semibold text-lg mb-2">
                  Все регионы России
                </h3>
                <p className="text-sm text-muted-foreground">
                  Доставим куда угодно
                </p>
              </div>

              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-travertine-200 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-primary transition-colors">
                  <span className="text-2xl">📦</span>
                </div>
                <h3 className="font-montserrat font-semibold text-lg mb-2">
                  Любые объемы
                </h3>
                <p className="text-sm text-muted-foreground">
                  От мелких до крупных партий
                </p>
              </div>

              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-travertine-200 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-primary transition-colors">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="font-montserrat font-semibold text-lg mb-2">
                  Бесплатная консультация
                </h3>
                <p className="text-sm text-muted-foreground">
                  Поможем с выбором
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Hero;

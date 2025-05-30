import ProductCard from "./ProductCard";

const ProductsSection = () => {
  const products = [
    {
      title: "Asman Travertine",
      description:
        "Предназначена для отделки внутренних и наружных стен, создаёт фактуру, имитирующую натуральный камень с характерным рельефом.",
      features: [
        "выразительная текстура и природный оттенок",
        "высокая прочность",
        "подходит для интерьеров с повышенной нагрузкой",
        "экспортное качество",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=400&h=300&fit=crop",
    },
    {
      title: "SITRIN Travertin",
      description:
        "Декоративная штукатурка на основе натурального травертина. Создаёт эффект благородной каменной фактуры с выразительным рельефом.",
      features: [
        "натуральная основа",
        "высокая прочность, стойкость к истиранию и атмосферным воздействиям",
        "возможность реализации различных фактур: от тонкой известняковой поверхности до глубоких «царапанных» рисунков",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    },
    {
      title: "TRAVERTIN GOLD",
      description:
        "Декоративная штукатурка на основе натурального молотого мрамора. Предназначена для создания благородной каменной фактуры. Подходит для отделки фасадов, цоколей, арок, колонн и интерьеров премиум-класса.",
      features: [
        "содержит натуральный мрамор",
        "высокая прочность и устойчивость к ультрафиолету, влаге и перепадам температур",
        "создаёт эффект рельефной, «живой» каменной поверхности",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section id="products" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold text-primary mb-4">
            Наша продукция
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Премиальные декоративные покрытия из натурального травертина для
            профессионального строительства
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              features={product.features}
              imageUrl={product.imageUrl}
              className="animate-fade-in"
              style={
                { animationDelay: `${index * 0.2}s` } as React.CSSProperties
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

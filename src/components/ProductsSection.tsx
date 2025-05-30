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
    },
  ];

  return (
    <section className="py-16 px-4 bg-white/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-montserrat font-bold text-center text-primary mb-4">
          В продаже
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Премиальные декоративные покрытия из натурального травертина
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              features={product.features}
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

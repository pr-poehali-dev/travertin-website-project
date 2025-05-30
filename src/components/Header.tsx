import { useState } from "react";
import { Card } from "@/components/ui/card";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-travertine-200 shadow-sm">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          {/* Логотип слева */}
          <div className="flex items-center">
            <h1 className="text-2xl font-montserrat font-bold text-primary">
              ТРАВЕРТИН
            </h1>
            <span className="ml-2 text-sm text-muted-foreground hidden sm:block">
              ИП Брегеда Т.В.
            </span>
          </div>

          {/* Навигация справа - десктоп */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("products")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Продукция
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Изделия
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Контакты
            </button>
            <Card className="px-4 py-2 bg-primary text-white border-0">
              <span className="text-sm font-medium">+7 (917) 256-88-88</span>
            </Card>
          </nav>

          {/* Мобильное меню */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="text-2xl">{isMenuOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        {/* Мобильная навигация */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-travertine-200 bg-white">
            <nav className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("products")}
                className="text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Продукция
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Изделия
              </button>
              <button
                onClick={() => scrollToSection("contacts")}
                className="text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Контакты
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

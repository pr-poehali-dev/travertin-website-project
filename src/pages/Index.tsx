import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import AdditionalProductsSection from "@/components/AdditionalProductsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <Hero />
        <ProductsSection />
        <AdditionalProductsSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;

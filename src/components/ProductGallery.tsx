import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Травертиновая плитка",
      category: "Плитка",
      imageUrl:
        "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Декоративная штукатурка",
      category: "Штукатурка",
      imageUrl:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Фасадные панели",
      category: "Панели",
      imageUrl:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      title: "Мозаика травертин",
      category: "Мозаика",
      imageUrl:
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      title: "Брусчатка",
      category: "Брусчатка",
      imageUrl:
        "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=400&h=300&fit=crop",
    },
    {
      id: 6,
      title: "Столешницы",
      category: "Столешницы",
      imageUrl:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-montserrat font-bold text-primary mb-4">
            Наши изделия
          </h2>
          <p className="text-xl text-muted-foreground">
            Галерея готовых работ и изделий из травертина
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <Card
              key={item.id}
              className="group overflow-hidden bg-white shadow-lg border-travertine-200 hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => setSelectedImage(item)}
                      className="bg-white/90 hover:bg-white"
                    >
                      <Icon name="ZoomIn" size={16} className="mr-2" />
                      Увеличить
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-sm text-primary font-medium mb-1">
                    {item.category}
                  </div>
                  <h3 className="font-montserrat font-semibold text-lg">
                    {item.title}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <Button
                variant="ghost"
                size="sm"
                className="absolute -top-12 right-0 text-white hover:text-gray-300"
                onClick={() => setSelectedImage(null)}
              >
                <Icon name="X" size={24} />
              </Button>
              <img
                src={selectedImage.imageUrl.replace(
                  "w=400&h=300",
                  "w=800&h=600",
                )}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 rounded-b-lg">
                <div className="text-sm text-gray-300">
                  {selectedImage.category}
                </div>
                <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGallery;

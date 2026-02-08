import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { products, categories } from "@/data/products";
import ProductCard from "./ProductCard";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState<string>("الكل");

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "الكل") {
      return products;
    }
    return products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  return (
    <section id="products" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
          ref={ref}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="font-medium text-sm">تشكيلتنا</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            منتجاتنا <span className="text-primary">المميزة</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            اكتشف مجموعتنا الفاخرة من البهارات والتوابل الأصيلة، المختارة بعناية لتضفي على وجباتكم نكهة لا تُنسى
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10"
        >
          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden">
            <ScrollArea className="w-full whitespace-nowrap">
              <div className="flex gap-3 pb-4 px-1">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={cn(
                      "inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap border",
                      selectedCategory === category.id
                        ? "bg-primary text-primary-foreground border-primary shadow-md"
                        : "bg-card text-foreground border-primary/40 hover:border-primary hover:bg-primary/5"
                    )}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
              <ScrollBar orientation="horizontal" className="h-2" />
            </ScrollArea>
          </div>

          {/* Desktop: Centered Tabs */}
          <div className="hidden md:flex justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={cn(
                  "inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 border-2",
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground border-primary shadow-lg scale-105"
                    : "bg-card text-foreground border-primary/40 hover:border-primary hover:bg-primary/10 hover:scale-102"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Products Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mb-8"
        >
          <span className="text-muted-foreground text-sm">
            عرض {filteredProducts.length} منتج
          </span>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <p className="text-muted-foreground text-lg">
              لا توجد منتجات في هذه الفئة
            </p>
          </motion.div>
        )}

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/9671255358?text=مرحباً، أرغب في معرفة المزيد عن منتجاتكم"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            تصفح جميع المنتجات
            <span className="text-lg">←</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;

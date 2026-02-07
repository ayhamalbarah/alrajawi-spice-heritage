import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
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

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

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

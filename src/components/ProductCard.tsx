import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      `مرحباً، أرغب في طلب:\n\n📦 المنتج: ${product.name}\n💰 السعر: ${product.price.toLocaleString()} ريال\n\nشكراً لكم - بهارات الرجوي`
    );
    window.open(`https://wa.me/9671255358?text=${message}`, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift">
        {/* Image */}
        <div className="relative overflow-hidden aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Quick Add Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <Button
              onClick={handleWhatsAppOrder}
              className="w-full gradient-gold text-primary-foreground font-bold rounded-xl"
            >
              <ShoppingCart className="w-4 h-4 ml-2" />
              اطلب الآن
            </Button>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-5">
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
            {product.category}
          </span>
          <h3 className="text-lg font-bold text-foreground mt-3 mb-1">
            {product.name}
          </h3>
          <p className="text-xs text-muted-foreground mb-3">
            {product.nameEn}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-primary">
              {product.price.toLocaleString()}
              <span className="text-sm font-normal text-muted-foreground mr-1">ريال</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleWhatsAppOrder}
              className="text-primary hover:bg-primary/10 rounded-xl"
            >
              <ShoppingCart className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;

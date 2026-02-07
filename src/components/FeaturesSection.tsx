import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Store, Globe, Star, CreditCard } from "lucide-react";

const features = [
  {
    icon: Store,
    title: "5 فروع بالتجزئة",
    description: "متاجر منتشرة في صنعاء وتعز لخدمتكم",
    value: 5,
    suffix: "فروع",
  },
  {
    icon: Globe,
    title: "رؤية دولية",
    description: "نستهدف الأسواق الإقليمية والدولية",
    value: null,
    suffix: null,
  },
  {
    icon: Star,
    title: "جودة فاخرة",
    description: "أجود أنواع البهارات والحبوب المختارة",
    value: 100,
    suffix: "%",
  },
  {
    icon: CreditCard,
    title: "دفع آمن",
    description: "Visa, Mastercard, NFC والدفع عند الاستلام",
    value: null,
    suffix: null,
  },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-background">
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
            <span className="font-medium text-sm">لماذا الرجوي؟</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            تميز <span className="text-primary">يستحق الثقة</span>
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 h-full border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift">
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Counter (if applicable) */}
                {feature.value && (
                  <div className="mt-6 text-3xl font-bold text-primary">
                    <Counter value={feature.value} suffix={feature.suffix || ""} />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

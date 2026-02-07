import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const StorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="story" className="py-20 md:py-32 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full" />
              <span className="font-medium text-sm">قصة النجاح</span>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight"
            >
              عراقة تمتد
              <br />
              <span className="text-primary">عبر الأجيال</span>
            </motion.h2>

            {/* Story Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-4 text-muted-foreground text-lg leading-relaxed"
            >
              <p>
                ابتدأت قصة النجاح عام <span className="text-primary font-bold">1954</span> من متجر صغير في مدينة صنعاء القديمة 
                <span className="text-foreground font-medium"> (سوق الملح)</span>، حيث كان السوق قبلة للتجار والعملاء من جميع أنحاء اليمن.
              </p>
              <p>
                وعبر السنين، ازدادت سمعة الرجوي وشهرته لتصل إلى أعلى المراتب بفضل قيم المؤسسين: 
                <span className="text-foreground font-medium"> الحاج عبدالله الرجوي</span> و
                <span className="text-foreground font-medium"> الحاج حسين الرجوي</span>، 
                اللذين زرعا بذور الجودة والأمانة في كل حبة بهار.
              </p>
              <p>
                اليوم، نفخر بأننا نواصل إرث أجدادنا، مع التزامنا بتقديم أجود أنواع البهارات والتوابل 
                التي تضفي على مائدتكم نكهة أصيلة لا تُنسى.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-10"
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">+70</div>
                <div className="text-sm text-muted-foreground mt-1">عاماً من الخبرة</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">5</div>
                <div className="text-sm text-muted-foreground mt-1">فروع في اليمن</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">+100</div>
                <div className="text-sm text-muted-foreground mt-1">منتج متنوع</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=600&fit=crop"
                  alt="صنعاء القديمة - سوق الملح"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold">1954</div>
                  <div className="text-sm opacity-90">منذ عام</div>
                </div>
              </motion.div>

              {/* Decorative Element */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/30 rounded-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { branches } from "@/data/products";
import { Button } from "@/components/ui/button";

const BranchesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const mainBranch = branches.find((b) => b.isMain);
  const otherBranches = branches.filter((b) => !b.isMain);

  return (
    <section id="branches" className="py-20 md:py-28 bg-background">
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
            <span className="font-medium text-sm">فروعنا</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            زوروا <span className="text-primary">فروعنا</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            نتشرف بخدمتكم في جميع فروعنا المنتشرة في اليمن
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main Branch Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:row-span-2"
          >
            <div className="bg-card rounded-2xl overflow-hidden border border-border/50 h-full">
              {/* Map Placeholder */}
              <div className="relative h-64 lg:h-80 bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop"
                  alt="موقع الفرع الرئيسي"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 right-4 left-4">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-xl inline-flex items-center gap-2 font-medium">
                    <MapPin className="w-4 h-4" />
                    الفرع الرئيسي
                  </div>
                </div>
              </div>

              {/* Branch Info */}
              {mainBranch && (
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    {mainBranch.name}
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">العنوان</div>
                        <div className="font-medium text-foreground">{mainBranch.address}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">ساعات العمل</div>
                        <div className="font-medium text-foreground">{mainBranch.hours}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">هاتف</div>
                        <div className="font-medium text-foreground" dir="ltr">{mainBranch.phone}</div>
                      </div>
                    </div>
                  </div>

                  <Button
                    className="w-full mt-6 gradient-gold text-primary-foreground font-bold rounded-xl"
                    onClick={() => window.open("https://maps.google.com/?q=Sanaa,Yemen", "_blank")}
                  >
                    <Navigation className="w-4 h-4 ml-2" />
                    احصل على الاتجاهات
                  </Button>
                </div>
              )}
            </div>
          </motion.div>

          {/* Other Branches */}
          <div className="space-y-4">
            {otherBranches.map((branch, index) => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground mb-2">{branch.name}</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        {branch.address}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        {branch.hours}
                      </div>
                    </div>
                  </div>
                  <a
                    href={`tel:${branch.phone}`}
                    className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BranchesSection;

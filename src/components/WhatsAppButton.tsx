import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleClick = () => {
    const message = encodeURIComponent(
      "مرحباً، أود الاستفسار عن منتجاتكم - بهارات الرجوي"
    );
    window.open(`https://wa.me/9671255358?text=${message}`, "_blank");
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, type: "spring" }}
      onClick={handleClick}
      className="fixed bottom-6 left-6 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center whatsapp-pulse hover:scale-110 transition-transform"
      aria-label="تواصل عبر واتساب"
    >
      <MessageCircle className="w-8 h-8" fill="white" />
    </motion.button>
  );
};

export default WhatsAppButton;

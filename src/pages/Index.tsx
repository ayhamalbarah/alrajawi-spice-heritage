import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import FeaturesSection from "@/components/FeaturesSection";
import ProductsSection from "@/components/ProductsSection";
import BranchesSection from "@/components/BranchesSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen font-cairo" dir="rtl">
      <Header />
      <main>
        <Hero />
        <StorySection />
        <FeaturesSection />
        <ProductsSection />
        <BranchesSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;

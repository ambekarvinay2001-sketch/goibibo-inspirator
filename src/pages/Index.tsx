import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PopularDestinations from "@/components/PopularDestinations";
import PromotionalOffers from "@/components/PromotionalOffers";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <PromotionalOffers />
      <PopularDestinations />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedAuctions from "@/components/FeaturedAuctions";
import EncryptionExplainer from "@/components/EncryptionExplainer";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedAuctions />
      <EncryptionExplainer />
      <Footer />
    </div>
  );
};

export default Index;

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Features />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;
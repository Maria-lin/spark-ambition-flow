import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import PolesSection from "@/components/landing/PolesSection";
import HowItWorks from "@/components/landing/HowItWorks";
import ProblemSolution from "@/components/landing/ProblemSolution";
import InstitutionsSection from "@/components/landing/InstitutionsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PolesSection />
      <ProblemSolution />
      <HowItWorks />
      <InstitutionsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;

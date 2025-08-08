import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Main page content with proper semantic HTML structure */}
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        
        {/* Recommended Broker Section */}
        <section className="py-16 bg-muted/50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Recommended Broker</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Trade using a trusted platform for Kenyan Prince students.
            </p>
            <a
              href="https://direct-fxpro.com/en/partner/sSPJZLCi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-[#FFD700] text-black font-semibold rounded-lg hover:bg-[#FFD700]/90 transition-colors"
            >
              Start with FXPro
            </a>
          </div>
        </section>
        
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const HeroSection = () => {
  const handleInvestNow = () => {
    window.open('https://www.instagram.com/_kenyanprince?igsh=MWk3OWFzN3hiNWZ1cQ==', '_blank');
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* Hero Carousel */}
      <div className="relative min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] overflow-hidden bg-black">
        <Carousel className="w-full h-full">
          <CarouselContent>
            <CarouselItem>
              <div className="relative w-full min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center">
                <img 
                  src="/lovable-uploads/2e61d5f9-dd1d-420f-9bff-f3509dec38a7.png" 
                  alt="Kenyan Prince - Elite Forex Trader" 
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-black/5" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white px-4">
                    <div className="inline-flex items-center space-x-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
                      <TrendingUp className="h-4 w-4 text-accent" />
                      <span className="text-accent font-medium">Elite Forex Trader</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                      Master Forex Trading
                      <span className="block bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                        Build Your Wealth
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Join Kenya's most trusted forex trading mentor. Turn market knowledge into consistent profits.
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              onClick={handleInvestNow}
              variant="invest"
              size="xl"
              className="group min-w-[200px] shadow-2xl"
            >
              Invest Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="min-w-[180px] border-primary/30 hover:border-primary"
            >
              Learn More
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Successful Traders</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">85%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">KES 2M+</div>
              <div className="text-muted-foreground">Portfolio Value</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
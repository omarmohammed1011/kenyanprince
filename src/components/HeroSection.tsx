import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowRight, Instagram, MessageCircle, Calendar } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const HeroSection = () => {
  const handleTelegram = () => {
    window.open('https://t.me/kenyanprince', '_blank');
  };

  const handleInstagram = () => {
    window.open('https://www.instagram.com/_kenyanprince?igsh=MWk3OWFzN3hiNWZ1cQ==', '_blank');
  };

  const handleMentorship = () => {
    window.open('https://wa.me/254799695165', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Full Screen Hero Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/817d710f-c9c5-46c2-aec6-bd347acf596e.png" 
          alt="KP Forex Trading - The Ultimate of Trading" 
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Centered Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center text-white max-w-4xl mx-auto">

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Master the Markets
            <span className="block bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              with Expert Trading
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join Kenya's most trusted forex trading mentor and transform your financial future.
          </p>

          {/* CTA Buttons Overlay */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleInstagram}
              className="group min-w-[200px] bg-[#FFD700] text-black hover:bg-[#FFD700]/90 shadow-2xl text-lg py-6 px-8 font-semibold"
              size="xl"
            >
              <Instagram className="mr-2 h-5 w-5" />
              Follow Instagram
            </Button>

            <Button
              onClick={handleMentorship}
              className="group min-w-[200px] bg-[#FFD700] text-black hover:bg-[#FFD700]/90 shadow-2xl text-lg py-6 px-8 font-semibold"
              size="xl"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Join Now
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
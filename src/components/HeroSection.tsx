import { Button } from "@/components/ui/button";
import { heroData } from "@/data/siteData";
import { Calendar } from "lucide-react";

const HeroSection = () => {
  const handleButtonClick = (href: string) => {
    window.open(href, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Full Screen Hero Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroData.backgroundImage}
          alt={heroData.backgroundAlt}
          className="w-full h-full object-cover object-center"
        />
        {/* 50% black overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Centered Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center text-white max-w-4xl mx-auto">

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {heroData.title.primary}
            <span className="block bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              {heroData.title.accent}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            {heroData.subtitle}
          </p>

          {/* CTA Buttons Overlay */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {heroData.ctaButtons.map((button, index) => (
              <Button
                key={index}
                onClick={() => handleButtonClick(button.href!)}
                className="group min-w-[200px] bg-[#FFD700] text-black hover:bg-[#FFD700]/90 shadow-2xl text-lg py-6 px-8 font-semibold"
                size="xl"
              >
                {button.icon && <button.icon className="mr-2 h-5 w-5" />}
                {button.text}
              </Button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
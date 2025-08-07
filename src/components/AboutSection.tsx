import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { aboutData } from "@/data/siteData";

const AboutSection = () => {

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            {aboutData.title}
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            {aboutData.subtitle}
          </p>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {aboutData.achievements.map((achievement, index) => (
              <div key={index} className="flex items-center justify-center md:justify-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-lg text-foreground font-medium">{achievement}</span>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {aboutData.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl md:text-4xl font-bold mb-2 ${
                  stat.variant === 'primary' ? 'text-primary' : 
                  stat.variant === 'accent' ? 'text-accent' : 'text-secondary'
                }`}>
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {aboutData.cta.title}
            </h3>
            <p className="text-muted-foreground mb-6">
              {aboutData.cta.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {aboutData.cta.buttons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant as any}
                  size="lg"
                  className="min-w-[180px] group"
                  onClick={button.href ? () => window.open(button.href, '_blank') : undefined}
                >
                  {button.icon && <button.icon className="mr-2 h-5 w-5" />}
                  {button.text}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
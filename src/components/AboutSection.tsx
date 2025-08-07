import { CheckCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const achievements = [
    "5+ Years Trading Experience",
    "Proven Track Record",
    "Risk Management Expert",
    "Consistent Monthly Returns"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            About Kenyan Prince
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Elite forex trader dedicated to transforming financial futures through proven strategies and disciplined trading.
          </p>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center justify-center md:justify-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-lg text-foreground font-medium">{achievement}</span>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Successful Traders</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">85%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">$5M</div>
              <div className="text-muted-foreground">Portfolio Value</div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your Trading?
            </h3>
            <p className="text-muted-foreground mb-6">
              Follow my journey and get exclusive trading insights on Instagram.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="elite"
                size="lg"
                className="min-w-[200px]"
              >
                Start Trading Now
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="min-w-[180px] group"
                onClick={() => window.open('https://www.instagram.com/_kenyanprince?igsh=MWk3OWFzN3hiNWZ1cQ==', '_blank')}
              >
                <Instagram className="mr-2 h-5 w-5" />
                Follow on Instagram
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
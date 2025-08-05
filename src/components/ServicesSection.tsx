import { TrendingUp, Shield, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "1-on-1 Mentorship",
      description: "Personal guidance from market analysis to execution strategies.",
      price: "KES 25,000",
      features: ["Weekly Sessions", "Live Trading", "Strategy Development"]
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Master the art of protecting your capital while maximizing profits.",
      price: "KES 15,000",
      features: ["Position Sizing", "Stop Loss Strategy", "Portfolio Protection"]
    },
    {
      icon: Target,
      title: "Trading Signals",
      description: "Premium forex signals with detailed entry and exit points.",
      price: "KES 8,000",
      features: ["Daily Signals", "Market Analysis", "24/7 Support"]
    },
    {
      icon: Users,
      title: "VIP Community",
      description: "Exclusive access to elite trader community and resources.",
      price: "KES 35,000",
      features: ["Private Group", "Market Updates", "Elite Network"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Trading Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive trading education and mentorship designed for serious traders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="relative group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/30">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">
                  {service.description}
                </p>
                
                <div className="text-2xl font-bold text-primary">
                  {service.price}
                  <span className="text-sm text-muted-foreground font-normal">/month</span>
                </div>
                
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center space-x-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="elite" 
                  size="lg" 
                  className="w-full mt-6 group-hover:scale-105 transition-transform"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Custom Trading Package?
            </h3>
            <p className="text-muted-foreground mb-6">
              Need a personalized approach? Let's discuss your trading goals.
            </p>
            <Button variant="gold" size="lg">
              Contact for Custom Plan
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
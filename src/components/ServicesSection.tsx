import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { servicesData } from "@/data/siteData";

const ServicesSection = () => {

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            {servicesData.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {servicesData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.services.map((service, index) => (
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
                  <span className="text-sm text-muted-foreground font-normal">{service.period}</span>
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
              {servicesData.bottomCta.title}
            </h3>
            <p className="text-muted-foreground mb-6">
              {servicesData.bottomCta.subtitle}
            </p>
            <Button variant="gold" size="lg">
              {servicesData.bottomCta.buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
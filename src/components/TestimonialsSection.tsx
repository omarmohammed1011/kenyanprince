import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { testimonialsData } from "@/data/siteData";

const TestimonialsSection = () => {

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            {testimonialsData.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {testimonialsData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonialsData.testimonials.map((testimonial, index) => (
            <Card key={index} className="relative hover:shadow-lg transition-all duration-300 border-border">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                {/* Profit Badge */}
                <div className="bg-primary/10 border border-primary/20 rounded-full px-3 py-1 w-fit mb-4">
                  <span className="text-primary font-semibold text-sm">{testimonial.profit}</span>
                </div>
                
                {/* Author */}
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="text-center mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {testimonialsData.bottomStats.map((stat, index) => (
              <div key={index}>
                <div className={`text-3xl font-bold mb-2 ${
                  stat.variant === 'primary' ? 'text-primary' : 
                  stat.variant === 'accent' ? 'text-accent' : 'text-secondary'
                }`}>
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
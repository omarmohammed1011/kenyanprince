import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "David M.",
      role: "Software Engineer",
      content: "Kenyan Prince taught me discipline and risk management. My trading account grew 150% in 6 months.",
      rating: 5,
      profit: "+KES 120,000"
    },
    {
      name: "Sarah K.",
      role: "Business Owner",
      content: "Clear strategies, excellent mentorship. Finally making consistent profits in forex trading.",
      rating: 5,
      profit: "+KES 85,000"
    },
    {
      name: "James O.",
      role: "Marketing Manager",
      content: "Best investment I've made. The signals and mentorship are worth every shilling.",
      rating: 5,
      profit: "+KES 200,000"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from real traders who transformed their financial future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
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
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">KES 15M+</div>
              <div className="text-muted-foreground">Total Profits Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
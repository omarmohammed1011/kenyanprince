import { TrendingUp, Instagram, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/_kenyanprince?igsh=MWk3OWFzN3hiNWZ1cQ==",
      label: "Instagram"
    },
    {
      icon: Mail,
      href: "mailto:trading@kenyanprince.com",
      label: "Email"
    },
    {
      icon: Phone,
      href: "https://wa.me/254700000000",
      label: "WhatsApp"
    }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold">Kenyan Prince</span>
            </div>
            <p className="text-secondary-foreground/80 mb-6 max-w-md">
              Elite forex trader dedicated to transforming financial futures through proven strategies and disciplined trading education.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="text-secondary-foreground hover:text-accent hover:bg-accent/10"
                  onClick={() => window.open(link.href, '_blank')}
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {["Home", "About", "Services", "Testimonials", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-secondary-foreground/80 hover:text-accent transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <nav className="space-y-2">
              <div className="text-secondary-foreground/80">1-on-1 Mentorship</div>
              <div className="text-secondary-foreground/80">Risk Management</div>
              <div className="text-secondary-foreground/80">Trading Signals</div>
              <div className="text-secondary-foreground/80">VIP Community</div>
            </nav>
          </div>
        </div>

        {/* Final CTA */}
        <div className="border-t border-secondary-foreground/20 pt-8 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Trading?</h3>
            <p className="text-secondary-foreground/80 mb-6 max-w-md mx-auto">
              Join hundreds of successful traders who transformed their financial future.
            </p>
            <Button variant="gold" size="lg">
              Invest Now
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary-foreground/20 pt-8 text-center">
          <p className="text-secondary-foreground/60">
            © 2024 Kenyan Prince Trading. All rights reserved.
          </p>
          <p className="text-secondary-foreground/60 text-sm mt-2">
            Trading involves risk. Past performance does not guarantee future results.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
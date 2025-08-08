import { Button } from "@/components/ui/button";
import { footerData } from "@/data/siteData";

const Footer = () => {

  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <footerData.brand.icon className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold">{footerData.brand.name}</span>
            </div>
            <p className="text-secondary-foreground/80 mb-6 max-w-md">
              {footerData.brand.description}
            </p>
            <div className="flex space-x-4">
              {footerData.socialLinks.map((link, index) => (
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
              {footerData.quickLinks.map((item) => (
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
              {footerData.services.map((service, index) => (
                <div key={index} className="text-secondary-foreground/80">{service}</div>
              ))}
            </nav>
          </div>
        </div>

        {/* Final CTA */}
        <div className="border-t border-secondary-foreground/20 pt-8 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">{footerData.finalCta.title}</h3>
            <p className="text-secondary-foreground/80 mb-6 max-w-md mx-auto">
              {footerData.finalCta.subtitle}
            </p>
            <Button variant="gold" size="lg">
              {footerData.finalCta.buttonText}
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary-foreground/20 pt-8 text-center">
          <p className="text-secondary-foreground/60">
            {footerData.legal.copyright}
          </p>
          <p className="text-secondary-foreground/60 text-sm mt-2">
            {footerData.legal.disclaimer}
          </p>
          <p className="text-secondary-foreground/40 text-xs mt-4">
            Website made by{' '}
            <a 
              href="https://iqbalagency.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Iqbal Agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
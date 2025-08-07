import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { contactData } from "@/data/siteData";

const ContactSection = () => {

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            {contactData.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {contactData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                {contactData.form.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contactData.form.fields.slice(0, 2).map((field) => (
                  <Input 
                    key={field.name}
                    placeholder={field.placeholder} 
                    type={field.type}
                    className="border-border" 
                    required={field.required}
                  />
                ))}
              </div>
              {contactData.form.fields.slice(2).map((field) => (
                field.type === 'textarea' ? (
                  <Textarea 
                    key={field.name}
                    placeholder={field.placeholder} 
                    className="min-h-[120px] border-border"
                    required={field.required}
                  />
                ) : (
                  <Input 
                    key={field.name}
                    placeholder={field.placeholder} 
                    type={field.type}
                    className="border-border" 
                    required={field.required}
                  />
                )
              ))}
              <Button variant="elite" size="lg" className="w-full group">
                {contactData.form.submitText}
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8">
                Multiple ways to reach out. Choose what works best for you.
              </p>
            </div>

            <div className="space-y-6">
              {contactData.contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center space-x-4 group cursor-pointer"
                     onClick={() => window.open(contact.action, '_blank')}>
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <contact.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{contact.title}</div>
                    <div className="text-muted-foreground group-hover:text-primary transition-colors">
                      {contact.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-6 mt-8">
              <h4 className="text-xl font-bold text-foreground mb-3">
                {contactData.cta.title}
              </h4>
              <p className="text-muted-foreground mb-4">
                {contactData.cta.subtitle}
              </p>
              <Button variant="gold" size="lg" className="w-full">
                {contactData.cta.buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
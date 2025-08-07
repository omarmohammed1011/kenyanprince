import { 
  TrendingUp, 
  Shield, 
  Target, 
  Users, 
  CheckCircle, 
  Mail, 
  Phone, 
  Instagram,
  Star,
  Quote
} from "lucide-react";

// Site Configuration
export const siteConfig = {
  name: "Kenyan Prince Trading",
  domain: "kenyanprince.com",
  email: "trading@kenyanprince.com",
  phone: "+254 799 695 165",
  whatsapp: "254799695165",
  instagram: {
    handle: "@_kenyanprince",
    url: "https://www.instagram.com/_kenyanprince?igsh=MWk3OWFzN3hiNWZ1cQ=="
  },
  telegram: "https://t.me/kenyanprince"
};

// Hero Section Data
export const heroData = {
  title: {
    primary: "Master the Markets",
    accent: "with Expert Trading"
  },
  subtitle: "Join Kenya's most trusted forex trading mentor and transform your financial future.",
  backgroundImage: "/lovable-uploads/817d710f-c9c5-46c2-aec6-bd347acf596e.png",
  backgroundAlt: "KP Forex Trading - The Ultimate of Trading",
  ctaButtons: [
    {
      text: "Follow Instagram",
      icon: Instagram,
      href: siteConfig.instagram.url,
      variant: "primary"
    },
    {
      text: "Join Now",
      icon: TrendingUp,
      href: `https://wa.me/${siteConfig.whatsapp}`,
      variant: "primary"
    }
  ]
};

// About Section Data
export const aboutData = {
  title: "About Kenyan Prince",
  subtitle: "Elite forex trader dedicated to transforming financial futures through proven strategies and disciplined trading.",
  achievements: [
    "5+ Years Trading Experience",
    "Proven Track Record", 
    "Risk Management Expert",
    "Consistent Monthly Returns"
  ],
  stats: [
    {
      value: "500+",
      label: "Successful Traders",
      variant: "primary"
    },
    {
      value: "85%", 
      label: "Success Rate",
      variant: "accent"
    },
    {
      value: "$5M",
      label: "Portfolio Value", 
      variant: "primary"
    }
  ],
  cta: {
    title: "Ready to Transform Your Trading?",
    subtitle: "Follow my journey and get exclusive trading insights on Instagram.",
    buttons: [
      {
        text: "Start Trading Now",
        variant: "elite"
      },
      {
        text: "Follow on Instagram",
        icon: Instagram,
        href: siteConfig.instagram.url,
        variant: "outline"
      }
    ]
  }
};

// Services Section Data
export const servicesData = {
  title: "Trading Services",
  subtitle: "Comprehensive trading education and mentorship designed for serious traders.",
  services: [
    {
      icon: TrendingUp,
      title: "1-on-1 Mentorship",
      description: "Personal guidance from market analysis to execution strategies.",
      price: "$650",
      period: "/month",
      features: ["Weekly Sessions", "Live Trading", "Strategy Development"]
    },
    {
      icon: Shield,
      title: "Risk Management", 
      description: "Master the art of protecting your capital while maximizing profits.",
      price: "$390",
      period: "/month",
      features: ["Position Sizing", "Stop Loss Strategy", "Portfolio Protection"]
    },
    {
      icon: Target,
      title: "Trading Signals",
      description: "Premium forex signals with detailed entry and exit points.",
      price: "$210", 
      period: "/month",
      features: ["Daily Signals", "Market Analysis", "24/7 Support"]
    },
    {
      icon: Users,
      title: "VIP Community",
      description: "Exclusive access to elite trader community and resources.",
      price: "$910",
      period: "/month", 
      features: ["Private Group", "Market Updates", "Elite Network"]
    }
  ],
  bottomCta: {
    title: "Custom Trading Package?",
    subtitle: "Need a personalized approach? Let's discuss your trading goals.",
    buttonText: "Contact for Custom Plan"
  }
};

// Testimonials Section Data
export const testimonialsData = {
  title: "Success Stories",
  subtitle: "Real results from real traders who transformed their financial future.",
  testimonials: [
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
  ],
  bottomStats: [
    {
      value: "500+",
      label: "Happy Clients",
      variant: "primary"
    },
    {
      value: "KES 15M+",
      label: "Total Profits Generated", 
      variant: "accent"
    },
    {
      value: "4.9/5",
      label: "Average Rating",
      variant: "primary" 
    }
  ]
};

// Contact Section Data
export const contactData = {
  title: "Start Your Trading Journey",
  subtitle: "Ready to transform your financial future? Get in touch and let's discuss your trading goals.",
  form: {
    title: "Get Started Today",
    fields: [
      { name: "firstName", placeholder: "First Name", type: "text", required: true },
      { name: "lastName", placeholder: "Last Name", type: "text", required: true },
      { name: "email", placeholder: "Email Address", type: "email", required: true },
      { name: "phone", placeholder: "Phone Number", type: "tel", required: false },
      { 
        name: "message", 
        placeholder: "Tell us about your trading experience and goals...", 
        type: "textarea", 
        required: true 
      }
    ],
    submitText: "Send Message"
  },
  contactInfo: [
    {
      icon: Mail,
      title: "Email",
      value: siteConfig.email,
      action: `mailto:${siteConfig.email}`
    },
    {
      icon: Phone,
      title: "WhatsApp", 
      value: siteConfig.phone,
      action: `https://wa.me/${siteConfig.whatsapp}`
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: siteConfig.instagram.handle,
      action: siteConfig.instagram.url
    }
  ],
  cta: {
    title: "Ready to Invest?",
    subtitle: "Don't wait. Start building your wealth today with proven forex strategies.",
    buttonText: "Invest Now - $650"
  }
};

// Footer Section Data
export const footerData = {
  brand: {
    name: siteConfig.name,
    description: "Elite forex trader dedicated to transforming financial futures through proven strategies and disciplined trading education.",
    icon: TrendingUp
  },
  socialLinks: [
    {
      icon: Instagram,
      href: siteConfig.instagram.url,
      label: "Instagram"
    },
    {
      icon: Mail,
      href: `mailto:${siteConfig.email}`,
      label: "Email"
    },
    {
      icon: Phone, 
      href: `https://wa.me/${siteConfig.whatsapp}`,
      label: "WhatsApp"
    }
  ],
  quickLinks: ["Home", "About", "Services", "Testimonials", "Contact"],
  services: [
    "1-on-1 Mentorship",
    "Risk Management", 
    "Trading Signals",
    "VIP Community"
  ],
  finalCta: {
    title: "Ready to Start Trading?",
    subtitle: "Join hundreds of successful traders who transformed their financial future.",
    buttonText: "Invest Now"
  },
  legal: {
    copyright: `© ${new Date().getFullYear()} ${siteConfig.name}. All rights reserved.`,
    disclaimer: "Trading involves risk. Past performance does not guarantee future results."
  }
};

// Navigation Data
export const navigationData = {
  logo: {
    text: siteConfig.name,
    icon: TrendingUp
  },
  links: [
    { text: "Home", href: "#home" },
    { text: "About", href: "#about" },
    { text: "Services", href: "#services" },
    { text: "Testimonials", href: "#testimonials" },
    { text: "Contact", href: "#contact" }
  ],
  cta: {
    text: "Start Trading",
    href: `https://wa.me/${siteConfig.whatsapp}`
  }
};
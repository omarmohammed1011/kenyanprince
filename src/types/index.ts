import { LucideIcon } from "lucide-react";

// Common Types
export interface IconLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export interface StatItem {
  value: string;
  label: string;
  variant: "primary" | "accent" | "secondary";
}

export interface CtaButton {
  text: string;
  icon?: LucideIcon;
  href?: string;
  variant: "primary" | "secondary" | "outline" | "elite" | "gold" | "invest";
  onClick?: () => void;
}

// Hero Section Types
export interface HeroData {
  title: {
    primary: string;
    accent: string;
  };
  subtitle: string;
  backgroundImage: string;
  backgroundAlt: string;
  ctaButtons: CtaButton[];
}

// About Section Types
export interface AboutData {
  title: string;
  subtitle: string;
  achievements: string[];
  stats: StatItem[];
  cta: {
    title: string;
    subtitle: string;
    buttons: CtaButton[];
  };
}

// Services Section Types
export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  period: string;
  features: string[];
}

export interface ServicesData {
  title: string;
  subtitle: string;
  services: Service[];
  bottomCta: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
}

// Testimonials Section Types
export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  profit: string;
}

export interface TestimonialsData {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
  bottomStats: StatItem[];
}

// Contact Section Types
export interface FormField {
  name: string;
  placeholder: string;
  type: "text" | "email" | "tel" | "textarea";
  required: boolean;
}

export interface ContactInfo {
  icon: LucideIcon;
  title: string;
  value: string;
  action: string;
}

export interface ContactData {
  title: string;
  subtitle: string;
  form: {
    title: string;
    fields: FormField[];
    submitText: string;
  };
  contactInfo: ContactInfo[];
  cta: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
}

// Footer Section Types
export interface FooterData {
  brand: {
    name: string;
    description: string;
    icon: LucideIcon;
  };
  socialLinks: IconLink[];
  quickLinks: string[];
  services: string[];
  finalCta: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
  legal: {
    copyright: string;
    disclaimer: string;
    credits?: string; // Optional credits field
  };
}

// Navigation Types
export interface NavigationData {
  logo: {
    text: string;
    icon: LucideIcon;
  };
  links: {
    text: string;
    href: string;
  }[];
  cta: {
    text: string;
    href: string;
  };
}

// Site Configuration Types
export interface SiteConfig {
  name: string;
  domain: string;
  email: string;
  phone: string;
  whatsapp: string;
  instagram: {
    handle: string;
    url: string;
  };
  telegram: string;
}
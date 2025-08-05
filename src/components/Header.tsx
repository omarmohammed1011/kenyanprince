import { useState } from "react";
import { Menu, X, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-transparent backdrop-blur-md z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-8 w-8 text-accent" />
            <span className="text-xl font-bold text-white">Kenyan Prince</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
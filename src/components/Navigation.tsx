import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    { name: "Home", href: "#home" },
    { 
      name: "Solutions", 
      href: "#solutions",
      dropdown: [
        "Process Technology",
        "Environmental Solutions", 
        "Heat Transfer Systems",
        "Distillation & Evaporation"
      ]
    },
    { 
      name: "Products", 
      href: "#products",
      dropdown: [
        "Pusher Centrifuge",
        "Mass Transfer Internals",
        "Heat Pumps",
        "Membrane Systems"
      ]
    },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/e8c37867-3a5e-4204-8f62-a84288908b86.png" 
              alt="Senim Solution LLP Logo" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center text-foreground hover:text-primary transition-colors py-2"
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </a>
                
                {item.dropdown && hoveredItem === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-card border border-border rounded-lg shadow-elegant z-50 animate-fade-in">
                    <div className="p-2">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem}
                          href={`#${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded-md transition-colors"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Button variant="default" className="shadow-glow hover-scale transition-all duration-300">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            {navItems.map((item) => (
              <div key={item.name} className="py-2">
                <a
                  href={item.href}
                  className="block text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
                {item.dropdown && (
                  <div className="ml-4 mt-2 space-y-1">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href={`#${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button variant="default" className="mt-4 w-full">
              Get Quote
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
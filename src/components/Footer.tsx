import { 
  Mail, 
  Phone, 
  MapPin,
  Linkedin,
  Twitter,
  Facebook
} from "lucide-react";

const Footer = () => {

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Solutions", href: "#solutions" },
    { name: "Products", href: "#products" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Process Technology",
    "Environmental Solutions", 
    "Heat Transfer Systems",
    "Mixing & Reaction",
    "Process Equipment",
    "Consultancy Services"
  ];

  const industries = [
    "Oil & Gas",
    "Petrochemicals",
    "Pharmaceutical",
    "Food Processing",
    "Chemical Plants",
    "Power Generation"
  ];

  return (
    <footer className="bg-foreground text-background relative">

      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/lovable-uploads/e8c37867-3a5e-4204-8f62-a84288908b86.png" 
                alt="Senim Solution LLP Logo" 
                className="h-12 w-auto"
              />
            </div>
            
            <p className="text-background/80 mb-6 leading-relaxed">
              Leading engineering and technology company specializing in process technology, 
              equipment manufacturing, and environmental solutions.
            </p>

            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
                <span className="text-sm text-background/80">
                  Industrial Area, Ahmedabad, Gujarat, India
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
                <span className="text-sm text-background/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
                <span className="text-sm text-background/80">info@senim.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-background/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#solutions"
                    className="text-background/80 hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-bold mb-6">Industries</h3>
            <ul className="space-y-3">
              {industries.map((industry, index) => (
                <li key={index}>
                  <span className="text-background/80 text-sm">
                    {industry}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-background/80 text-sm mb-4 md:mb-0">
              © 2024 Senim Solution LLP. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
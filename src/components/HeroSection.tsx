import { ArrowRight, Play, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/hero-industrial.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Industrial Engineering Solutions"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in [animation-delay:300ms]">
            <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 mb-6">
              <CheckCircle className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">Trusted by Industry Leaders</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in [animation-delay:600ms]">
              Advanced 
              <span className="block text-primary-glow animate-fade-in [animation-delay:900ms]">Engineering</span>
              <span className="block animate-fade-in [animation-delay:1200ms]">Solutions</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-in [animation-delay:1500ms]">
              Leading process technology and engineering excellence in distillation, 
              evaporation, heat transfer, and environmental solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in [animation-delay:1800ms]">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-8 py-4 text-lg shadow-glow hover-scale transition-all duration-300"
              >
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-4 text-lg hover-scale transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-in [animation-delay:2100ms]">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary-glow">25+</div>
                <div className="text-sm text-primary-foreground/80">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary-glow">500+</div>
                <div className="text-sm text-primary-foreground/80">Projects Delivered</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary-glow">50+</div>
                <div className="text-sm text-primary-foreground/80">Industries Served</div>
              </div>
            </div>
          </div>

          {/* Right side - Features */}
          <div className="hidden lg:block animate-scale-in [animation-delay:2400ms]">
            <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
              <h3 className="text-2xl font-bold text-primary-foreground mb-6">Why Choose Senim?</h3>
              <div className="space-y-4">
                {[
                  "Latest Technology & Innovation",
                  "Comprehensive Maintenance Support", 
                  "Expert Engineering Team",
                  "Full Service Solutions"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-glow mr-3 flex-shrink-0" />
                    <span className="text-primary-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-glow rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
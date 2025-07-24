import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Award, 
  Users, 
  Globe, 
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const navigate = useNavigate();
  
  const achievements = [
    { icon: Award, value: "25+", label: "Years of Excellence" },
    { icon: Users, value: "100+", label: "Expert Engineers" },
    { icon: Globe, value: "15+", label: "Countries Served" },
    { icon: Target, value: "500+", label: "Successful Projects" }
  ];

  const industries = [
    "Oil & Gas",
    "Petrochemicals", 
    "Refinery",
    "Agro Chemicals",
    "Fertilizer",
    "Pharmaceutical",
    "Power Plants",
    "Food Processing"
  ];

  return (
    <section ref={ref} id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About
              <span className="block text-primary">SENIM Solution LLP</span>
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
              Senim is engineering and technology company leading in Process Technology, Process Engineering, 
              Process Equipments and Process Plants. We specialize in Process Application Technologies, 
              Products & Services in the field of Distillation, Evaporation, Heat Transfer, Mixing & Reaction, 
              Environmental, Effluent Treatment & Membrane Technologies and Green Technologies.
            </p>

            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              Senim has in-house manufacturing facilities for Process Equipments, Mass Transfer Internals, 
              Reactors, Agitators & Vessels, Membranes Systems, Heat Pumps, Turbulator Heat Exchangers.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Process Technology Innovation",
                "Environmental & Green Solutions", 
                "In-house Manufacturing Excellence",
                "Comprehensive Technical Support"
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-sm md:text-base text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="shadow-glow hover-scale transition-all duration-300"
                onClick={() => navigate('/about')}
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className={`grid grid-cols-2 gap-6 transition-all duration-1000 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`}>
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="text-center p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 hover-scale"
                style={{ animationDelay: isVisible ? `${index * 0.1}s` : '0s' }}
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{achievement.value}</div>
                  <div className="text-sm text-muted-foreground">{achievement.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="text-center mb-12 animate-fade-in">
          <h3 className="text-3xl font-bold text-foreground mb-4">Industries We Serve</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Providing specialized consultancy and engineering solutions across diverse industrial sectors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="text-lg font-semibold text-foreground">{industry}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-muted/50 rounded-2xl p-8 md:p-12 text-center animate-fade-in">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Ready to Transform Your Operations?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our expert team help you optimize your processes with cutting-edge technology 
            and proven engineering solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-glow hover-scale transition-all duration-300">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="hover-scale transition-all duration-300">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
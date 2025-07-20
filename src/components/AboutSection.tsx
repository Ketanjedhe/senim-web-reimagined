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

const AboutSection = () => {
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
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About
              <span className="block text-primary">SENIM Solution LLP</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Senim is a leading engineering and technology company specializing in Process Technology, 
              Process Engineering, Process Equipment, and Process Plants. We excel in Process Application 
              Technologies, Products & Services across multiple domains.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our expertise spans Distillation, Evaporation, Heat Transfer, Mixing & Reaction, 
              Environmental solutions, Effluent Treatment, Membrane Technologies, and Green Technologies. 
              With state-of-the-art in-house manufacturing facilities, we deliver excellence in every project.
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
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="shadow-glow">
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6 animate-scale-in">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="text-center p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
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
            <Button size="lg" className="shadow-glow">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
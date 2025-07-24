import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Target, 
  Award, 
  Users, 
  Globe, 
  ArrowRight,
  CheckCircle,
  Eye,
  Lightbulb,
  Building2,
  FileText
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
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
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="shadow-glow hover-scale transition-all duration-300">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-primary mb-4">About SENIM Solution LLP</DialogTitle>
                  </DialogHeader>
                  
                  <div className="space-y-8">
                    {/* Company Details */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                        <Building2 className="w-5 h-5 mr-2 text-primary" />
                        Company Information
                      </h3>
                      <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                        <p className="text-foreground"><strong>GST No:</strong> 27AFAFS7294B1ZW</p>
                        <p className="text-foreground"><strong>Managing Director:</strong> Pravin Pawane</p>
                        <p className="text-foreground"><strong>Legal Name:</strong> SENIM Solution LLP</p>
                      </div>
                    </div>

                    {/* Vision */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                        <Eye className="w-5 h-5 mr-2 text-primary" />
                        Our Vision
                      </h3>
                      <div className="bg-card border border-border rounded-lg p-6">
                        <p className="text-muted-foreground leading-relaxed">
                          Senim Solutions and Equipment LLP's vision is to provide engineering and technical 
                          solutions that are responsive to our clients' needs in an innovative, cost effective, 
                          professional, quality service manner. We will accomplish this by utilizing our common 
                          values and in achieving our business objective of having you as a satisfied client.
                        </p>
                      </div>
                    </div>

                    {/* Mission */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                        <Lightbulb className="w-5 h-5 mr-2 text-primary" />
                        Our Mission
                      </h3>
                      <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                          Our aim is to deliver exceptional project management and engineering services 
                          for suitable growth of human society.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          To be the leading turnkey project designing and execution company, committed 
                          to quality and timely completion of projects, continuously enhancing value of company.
                        </p>
                      </div>
                    </div>

                    {/* Capabilities */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                        <Target className="w-5 h-5 mr-2 text-primary" />
                        Our Capabilities
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          "Process Technology",
                          "Process Engineering", 
                          "Process Equipments",
                          "Process Plants",
                          "Distillation Systems",
                          "Evaporation Systems",
                          "Heat Transfer Solutions",
                          "Mixing & Reaction Systems",
                          "Environmental Solutions",
                          "Effluent Treatment",
                          "Membrane Technologies",
                          "Green Technologies"
                        ].map((capability, index) => (
                          <div key={index} className="flex items-center bg-muted/30 rounded-lg p-3">
                            <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                            <span className="text-sm text-foreground">{capability}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Manufacturing */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                        <FileText className="w-5 h-5 mr-2 text-primary" />
                        Manufacturing Facilities
                      </h3>
                      <div className="bg-card border border-border rounded-lg p-6">
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          Senim has in-house manufacturing facilities for:
                        </p>
                        <ul className="space-y-2">
                          {[
                            "Process Equipments",
                            "Mass Transfer Internals",
                            "Reactors",
                            "Agitators & Vessels", 
                            "Membranes Systems",
                            "Heat Pumps",
                            "Turbulator Heat Exchangers"
                          ].map((item, index) => (
                            <li key={index} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                              <span className="text-sm text-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
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
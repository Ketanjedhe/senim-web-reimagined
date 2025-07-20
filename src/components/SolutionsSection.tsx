import { 
  Zap, 
  Droplets, 
  Thermometer, 
  Recycle, 
  Settings, 
  Shield,
  ArrowRight 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Zap,
      title: "Process Technology",
      description: "Advanced process engineering solutions for distillation, evaporation, and mass transfer applications.",
      features: ["Distillation Systems", "Evaporation Technology", "Mass Transfer Solutions"]
    },
    {
      icon: Droplets,
      title: "Environmental Solutions",
      description: "Comprehensive effluent treatment and environmental technology for sustainable operations.",
      features: ["Effluent Treatment", "Membrane Technology", "Green Solutions"]
    },
    {
      icon: Thermometer,
      title: "Heat Transfer Systems",
      description: "Innovative heat transfer equipment and solutions for optimal energy efficiency.",
      features: ["Heat Exchangers", "Heat Pumps", "Turbulator Technology"]
    },
    {
      icon: Recycle,
      title: "Mixing & Reaction",
      description: "Specialized mixing and reaction systems for chemical and pharmaceutical industries.",
      features: ["Agitators", "Reactors", "Mixing Systems"]
    },
    {
      icon: Settings,
      title: "Process Equipment",
      description: "In-house manufacturing of process equipment with precision engineering and quality.",
      features: ["Vessels", "Internals", "Custom Equipment"]
    },
    {
      icon: Shield,
      title: "Consultancy Services",
      description: "Expert consultancy for oil & gas, petrochemicals, refinery, and pharmaceutical industries.",
      features: ["Technical Consulting", "Process Optimization", "Project Management"]
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Engineering Excellence
            <span className="block text-primary">Across Industries</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to commissioning, we deliver comprehensive engineering solutions 
            that drive efficiency, sustainability, and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-scale-in border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <solution.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground">{solution.description}</p>
                </div>

                <div className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary-glow">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="shadow-glow">
            View All Solutions
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
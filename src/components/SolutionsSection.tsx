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
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SolutionDetailModal from "./SolutionDetailModal";
import { useState } from "react";

const SolutionsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedSolution, setSelectedSolution] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const solutions = [
    {
      icon: Zap,
      title: "Process Technology",
      description: "Advanced process engineering solutions for distillation, evaporation, and mass transfer applications.",
      features: ["Distillation Systems", "Evaporation Technology", "Mass Transfer Solutions"],
      detailedInfo: {
        overview: "Our process technology division specializes in designing and implementing advanced separation and purification systems. We combine cutting-edge engineering with decades of experience to deliver solutions that maximize efficiency while minimizing operational costs and environmental impact.",
        applications: ["Crude oil refining", "Chemical processing", "Pharmaceutical production", "Food & beverage processing", "Petrochemical manufacturing", "Environmental treatment"],
        benefits: ["Up to 30% energy savings", "Increased product purity", "Reduced operating costs", "Enhanced process control", "Minimal maintenance requirements", "Compliance with environmental standards"],
        specifications: ["Operating temperature: -50°C to 400°C", "Pressure range: Vacuum to 100 bar", "Capacity: 10 kg/hr to 1000 MT/hr", "Materials: SS316L, Hastelloy, Inconel", "Control system: DCS/PLC integrated", "Efficiency: >99% separation"],
        industries: ["Oil & Gas", "Petrochemicals", "Pharmaceuticals", "Chemical Processing", "Food & Beverage", "Environmental"]
      }
    },
    {
      icon: Droplets,
      title: "Environmental Solutions",
      description: "Comprehensive effluent treatment and environmental technology for sustainable operations.",
      features: ["Effluent Treatment", "Membrane Technology", "Green Solutions"],
      detailedInfo: {
        overview: "Our environmental solutions division focuses on developing sustainable technologies for waste treatment, emission control, and resource recovery. We help industries achieve environmental compliance while converting waste streams into valuable resources.",
        applications: ["Industrial wastewater treatment", "Air pollution control", "Solid waste management", "Resource recovery systems", "Zero liquid discharge", "Emission monitoring"],
        benefits: ["90-99% pollutant removal", "Resource recovery potential", "Regulatory compliance", "Reduced environmental footprint", "Cost-effective operation", "Sustainable technology"],
        specifications: ["Treatment capacity: 1-1000 m³/day", "Removal efficiency: >95%", "Operating pH: 2-12", "Temperature range: 5-80°C", "Power consumption: <2 kWh/m³", "Automation level: Fully automated"],
        industries: ["Chemical", "Pharmaceutical", "Textile", "Food Processing", "Power Generation", "Municipal"]
      }
    },
    {
      icon: Thermometer,
      title: "Heat Transfer Systems",
      description: "Innovative heat transfer equipment and solutions for optimal energy efficiency.",
      features: ["Heat Exchangers", "Heat Pumps", "Turbulator Technology"],
      detailedInfo: {
        overview: "Our heat transfer systems are engineered to optimize thermal efficiency across various industrial processes. We design custom solutions that maximize heat recovery, reduce energy consumption, and improve overall process economics.",
        applications: ["Process heating/cooling", "Waste heat recovery", "Steam generation", "Condensation systems", "Thermal oil systems", "Cryogenic applications"],
        benefits: ["Up to 70% energy savings", "Enhanced heat transfer rates", "Compact design", "Low pressure drop", "Corrosion resistance", "Extended service life"],
        specifications: ["Heat duty: 10 kW to 100 MW", "Operating pressure: Vacuum to 150 bar", "Temperature range: -196°C to 600°C", "Heat transfer coefficient: 500-5000 W/m²K", "Fouling factor: 0.0001-0.001 m²K/W", "Design codes: ASME, TEMA"],
        industries: ["Power Generation", "Chemical Processing", "Oil & Gas", "HVAC", "Renewable Energy", "Manufacturing"]
      }
    },
    {
      icon: Recycle,
      title: "Mixing & Reaction",
      description: "Specialized mixing and reaction systems for chemical and pharmaceutical industries.",
      features: ["Agitators", "Reactors", "Mixing Systems"],
      detailedInfo: {
        overview: "Our mixing and reaction systems are designed to achieve optimal mass transfer, heat transfer, and chemical reaction rates. We provide complete solutions from laboratory scale to full production, ensuring scalability and process optimization.",
        applications: ["Chemical synthesis", "Pharmaceutical manufacturing", "Polymerization", "Crystallization", "Emulsification", "Bioreactors"],
        benefits: ["Uniform mixing", "Optimized reaction rates", "Precise temperature control", "Scalable designs", "FDA compliant materials", "Energy efficient operation"],
        specifications: ["Volume range: 1L to 100,000L", "Mixing speed: 10-1500 RPM", "Power rating: 0.1-500 kW", "Operating pressure: Vacuum to 50 bar", "Temperature control: ±1°C", "Materials: SS316L, Hastelloy, Glass-lined"],
        industries: ["Pharmaceuticals", "Specialty Chemicals", "Biotechnology", "Food & Beverage", "Cosmetics", "Agrochemicals"]
      }
    },
    {
      icon: Settings,
      title: "Process Equipment",
      description: "In-house manufacturing of process equipment with precision engineering and quality.",
      features: ["Vessels", "Internals", "Custom Equipment"],
      detailedInfo: {
        overview: "Our state-of-the-art manufacturing facility produces high-quality process equipment tailored to specific industrial requirements. We combine advanced fabrication techniques with rigorous quality control to deliver equipment that exceeds industry standards.",
        applications: ["Pressure vessels", "Storage tanks", "Column internals", "Piping systems", "Structural components", "Custom fabrications"],
        benefits: ["Precision manufacturing", "Quality assurance", "Custom designs", "Fast delivery", "Cost-effective solutions", "Full traceability"],
        specifications: ["Fabrication capacity: Up to 500 MT", "Wall thickness: 3-150 mm", "Diameter range: 0.3-15 m", "Length: Up to 50 m", "Design codes: ASME VIII, PD 5500", "Testing: RT, PT, UT, PMI"],
        industries: ["Process Industries", "Power Generation", "Oil & Gas", "Water Treatment", "Mining", "Infrastructure"]
      }
    },
    {
      icon: Shield,
      title: "Consultancy Services",
      description: "Expert consultancy for oil & gas, petrochemicals, refinery, and pharmaceutical industries.",
      features: ["Technical Consulting", "Process Optimization", "Project Management"],
      detailedInfo: {
        overview: "Our consultancy services leverage decades of industry experience to provide strategic guidance, technical expertise, and project management solutions. We help clients optimize their operations, implement new technologies, and achieve their business objectives.",
        applications: ["Process audits", "Technology assessments", "Feasibility studies", "Project execution", "Troubleshooting", "Training programs"],
        benefits: ["Expert knowledge", "Cost optimization", "Risk mitigation", "Time savings", "Technology transfer", "Compliance assurance"],
        specifications: ["Project duration: 1 week to 5 years", "Team size: 2-50 experts", "Coverage: Global", "Languages: English, Hindi, Regional", "Certification: ISO 9001", "Experience: 25+ years"],
        industries: ["Oil & Gas", "Petrochemicals", "Pharmaceuticals", "Chemicals", "Power", "Infrastructure"]
      }
    }
  ];

  return (
    <section ref={ref} id="solutions" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Engineering Excellence
            <span className="block text-primary">Across Industries</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to commissioning, we deliver comprehensive engineering solutions 
            that drive efficiency, sustainability, and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 hover-scale border-border ${
                isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
              }`}
              style={{ animationDelay: isVisible ? `${index * 0.1}s` : '0s' }}
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

                <Button 
                  variant="ghost" 
                  className="group/btn p-0 h-auto text-primary hover:text-primary-glow"
                  onClick={() => {
                    setSelectedSolution(solution);
                    setIsModalOpen(true);
                  }}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="shadow-glow hover-scale transition-all duration-300">
            View All Solutions
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      <SolutionDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        solution={selectedSolution}
      />
    </section>
  );
};

export default SolutionsSection;
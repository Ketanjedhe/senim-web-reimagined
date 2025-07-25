import { Zap, ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const ProcessTechnology = () => {
  const navigate = useNavigate();

  const solution = {
    icon: Zap,
    title: "Process Technology",
    description: "Advanced process engineering solutions for distillation, evaporation, and mass transfer applications.",
    detailedInfo: {
      overview: "Our process technology division specializes in designing and implementing advanced separation and purification systems. We combine cutting-edge engineering with decades of experience to deliver solutions that maximize efficiency while minimizing operational costs and environmental impact.",
      applications: ["Crude oil refining", "Chemical processing", "Pharmaceutical production", "Food & beverage processing", "Petrochemical manufacturing", "Environmental treatment"],
      benefits: ["Up to 30% energy savings", "Increased product purity", "Reduced operating costs", "Enhanced process control", "Minimal maintenance requirements", "Compliance with environmental standards"],
      specifications: ["Operating temperature: -50°C to 400°C", "Pressure range: Vacuum to 100 bar", "Capacity: 10 kg/hr to 1000 MT/hr", "Materials: SS316L, Hastelloy, Inconel", "Control system: DCS/PLC integrated", "Efficiency: >99% separation"],
      industries: ["Oil & Gas", "Petrochemicals", "Pharmaceuticals", "Chemical Processing", "Food & Beverage", "Environmental"]
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-primary py-20">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-8 text-primary-foreground hover:bg-white/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          
          <div className="flex items-center mb-6">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mr-6">
              <solution.icon className="w-10 h-10 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                {solution.title}
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl">
                {solution.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Overview */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {solution.detailedInfo.overview}
              </p>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Applications */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Applications</h3>
                <div className="space-y-3">
                  {solution.detailedInfo.applications.map((app, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{app}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Key Benefits</h3>
                <div className="space-y-3">
                  {solution.detailedInfo.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-4 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Specifications */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Technical Specifications</h3>
              <div className="bg-muted/30 rounded-xl p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {solution.detailedInfo.specifications.map((spec, index) => (
                    <div key={index} className="text-muted-foreground">
                      • {spec}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Industries */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Target Industries</h3>
              <div className="flex flex-wrap gap-3">
                {solution.detailedInfo.industries.map((industry, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <Card className="bg-gradient-primary">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                  Ready to Implement This Solution?
                </h3>
                <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                  Get expert consultation and custom engineering solutions tailored to your specific requirements.
                </p>
                <Button size="lg" variant="secondary" className="hover-scale transition-all duration-300">
                  Request Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessTechnology;
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useNavigate } from "react-router-dom";

const ProductsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const navigate = useNavigate();
  
  const products = [
    {
      title: "Senim Pusher Centrifuge",
      description: "Advanced solid-liquid separation in continuous operation with higher yields and energy efficiency.",
      features: [
        "Continuous Operation",
        "Higher Throughput", 
        "Low Energy Consumption",
        "Minimal Maintenance"
      ],
      highlights: [
        "No spillage, Higher yields",
        "Higher wash efficiency",
        "Minimum floor space required",
        "Low maintenance cost"
      ],
      href: "/products/senim-pusher-centrifuge"
    },
    {
      title: "Mass Transfer Internals",
      description: "Precision-engineered internals for distillation columns and absorption towers.",
      features: [
        "Custom Design",
        "High Efficiency",
        "Corrosion Resistant",
        "Easy Installation"
      ],
      highlights: [
        "Optimized mass transfer",
        "Reduced pressure drop",
        "Enhanced separation efficiency",
        "Long service life"
      ],
      href: "/products/mass-transfer-internals"
    },
    {
      title: "Heat Pump Systems",
      description: "Energy-efficient heat pump solutions for industrial heating and cooling applications.",
      features: [
        "Energy Efficient",
        "Reliable Operation",
        "Low Operating Cost",
        "Environmental Friendly"
      ],
      highlights: [
        "Up to 70% energy savings",
        "Reduced carbon footprint",
        "Advanced control systems",
        "Proven technology"
      ],
      detailedInfo: {
        overview: "Our industrial heat pump systems revolutionize energy efficiency in heating and cooling applications. By utilizing waste heat recovery and renewable energy sources, these systems significantly reduce operational costs while minimizing environmental impact. Advanced control systems ensure optimal performance across varying load conditions.",
        technicalSpecs: ["Heating capacity: 50 kW to 10 MW", "COP: 3.0-6.5", "Operating temperature: -40°C to 120°C", "Refrigerants: R134a, R717, R744", "Power supply: 380-6600V", "Control system: PLC with HMI"],
        performance: ["Variable capacity control", "Automatic defrost cycle", "Remote monitoring capability", "Energy optimization algorithms", "Fault diagnosis system", "Seasonal efficiency >300%"],
        applications: ["District heating", "Process heating", "Drying applications", "Space conditioning", "Water heating", "Waste heat recovery"],
        advantages: ["Reduces energy consumption by up to 70% compared to conventional systems", "Environmentally friendly refrigerants minimize global warming potential", "Intelligent controls adapt to varying load conditions automatically", "Low maintenance requirements ensure high availability and reduced lifecycle costs"]
      }
    },
    {
      title: "Membrane Systems",
      description: "Advanced membrane technology for separation, purification, and treatment processes.",
      features: [
        "High Selectivity",
        "Compact Design",
        "Low Maintenance",
        "Versatile Applications"
      ],
      highlights: [
        "Superior separation efficiency",
        "Minimal waste generation",
        "Easy cleaning procedures",
        "Modular construction"
      ],
      detailedInfo: {
        overview: "Our advanced membrane systems provide highly efficient separation solutions across diverse industrial applications. Utilizing cutting-edge membrane materials and innovative module designs, these systems deliver superior performance in filtration, purification, and concentration processes while maintaining low operational costs and minimal environmental impact.",
        technicalSpecs: ["Membrane area: 1-10,000 m²", "Operating pressure: 1-100 bar", "Temperature range: 5-95°C", "pH tolerance: 1-14", "Pore size: 0.1-1000 nm", "Recovery rate: 75-98%"],
        performance: ["High flux rates", "Excellent rejection rates", "Chemical compatibility", "Thermal stability", "Fouling resistance", "Long membrane life"],
        applications: ["Water treatment", "Pharmaceutical processing", "Food & beverage", "Chemical concentration", "Gas separation", "Biotechnology"],
        advantages: ["Modular design allows easy scaling and expansion for growing capacity needs", "Advanced membrane materials provide exceptional chemical and thermal stability", "Automated cleaning systems minimize downtime and maintenance requirements", "Energy-efficient operation reduces operational costs by up to 40%"]
      }
    }
  ];

  return (
    <section ref={ref} id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Innovative Products
            <span className="block text-primary">Built for Performance</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our in-house manufacturing capabilities deliver precision-engineered products 
            that set industry standards for quality and reliability.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 hover-scale ${
                isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
              }`}
              style={{ animationDelay: isVisible ? `${index * 0.2}s` : '0s' }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">{product.title}</h3>
                  <p className="text-muted-foreground text-base sm:text-lg">{product.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                    <div className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Benefits</h4>
                    <div className="space-y-2">
                      {product.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary-glow rounded-full mr-3 flex-shrink-0"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto group/btn border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-scale transition-all duration-300"
                  onClick={() => navigate(product.href)}
                >
                  View Specifications
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-primary rounded-2xl p-6 sm:p-8 md:p-12 text-center animate-fade-in">
          <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
            Custom Engineering Solutions
          </h3>
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Need a specialized solution? Our engineering team can design and manufacture 
            custom equipment tailored to your specific requirements.
          </p>
          <Button size="lg" variant="secondary" className="w-full sm:w-auto shadow-elegant hover-scale transition-all duration-300">
            Request Custom Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

    </section>
  );
};

export default ProductsSection;
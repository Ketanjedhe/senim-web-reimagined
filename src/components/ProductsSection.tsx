import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ProductsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
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
      ]
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
      ]
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
      ]
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
      ]
    }
  ];

  return (
    <section ref={ref} id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Innovative Products
            <span className="block text-primary">Built for Performance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
                  <h3 className="text-2xl font-bold text-foreground mb-4">{product.title}</h3>
                  <p className="text-muted-foreground text-lg">{product.description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
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

                <Button variant="outline" className="group/btn border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-scale transition-all duration-300">
                  View Specifications
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center animate-fade-in">
          <h3 className="text-3xl font-bold text-primary-foreground mb-4">
            Custom Engineering Solutions
          </h3>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Need a specialized solution? Our engineering team can design and manufacture 
            custom equipment tailored to your specific requirements.
          </p>
          <Button size="lg" variant="secondary" className="shadow-elegant hover-scale transition-all duration-300">
            Request Custom Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
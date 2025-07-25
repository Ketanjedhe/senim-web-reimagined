import { ArrowLeft, CheckCircle, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const SeninPusherCentrifuge = () => {
  const navigate = useNavigate();

  const product = {
    title: "Senim Pusher Centrifuge",
    description: "Advanced solid-liquid separation in continuous operation with higher yields and energy efficiency.",
    detailedInfo: {
      overview: "The Senim Pusher Centrifuge represents the pinnacle of solid-liquid separation technology. Engineered for continuous operation, this centrifuge delivers exceptional performance in crystalline product separation with maximum yield and minimum operational costs. The innovative pusher mechanism ensures gentle handling of crystals while maintaining high throughput rates.",
      technicalSpecs: ["Basket diameter: 600-2000 mm", "Throughput: 500-15000 kg/hr", "G-force: 100-800", "Motor power: 15-200 kW", "Wash water consumption: 2-8 m³/hr", "Material: SS316L, Hastelloy"],
      performance: ["Continuous operation 24/7", "Cake moisture: <2%", "Product purity: >99.5%", "Automated wash cycles", "Self-cleaning capability", "Variable speed control"],
      applications: ["Salt crystallization", "Sugar refining", "Chemical intermediates", "Pharmaceutical APIs", "Specialty chemicals", "Food grade products"],
      advantages: ["Zero spillage design eliminates product loss", "Counter-current washing ensures maximum purity", "Compact footprint reduces installation space", "Automated operation minimizes labor costs", "Easy maintenance with quick-change components"]
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
              <Cog className="w-10 h-10 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                {product.title}
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl">
                {product.description}
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
              <h2 className="text-3xl font-bold text-foreground mb-6">Product Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.detailedInfo.overview}
              </p>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Technical Specifications */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Technical Specifications</h3>
                <div className="space-y-3">
                  {product.detailedInfo.technicalSpecs.map((spec, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{spec}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Performance Features */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Performance Features</h3>
                <div className="space-y-3">
                  {product.detailedInfo.performance.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-4 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Applications */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Applications</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {product.detailedInfo.applications.map((app, index) => (
                  <div key={index} className="bg-muted/30 rounded-lg p-4 text-center">
                    <span className="text-muted-foreground font-medium">{app}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Key Advantages */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Key Advantages</h3>
              <div className="space-y-4">
                {product.detailedInfo.advantages.map((advantage, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4">
                    <p className="text-muted-foreground">{advantage}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <Card className="bg-gradient-primary">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                  Interested in This Product?
                </h3>
                <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                  Get detailed specifications, pricing, and delivery information for the Senim Pusher Centrifuge.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="hover-scale transition-all duration-300">
                    Request Quote
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    Download Brochure
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeninPusherCentrifuge;
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Award, Globe, Lightbulb } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <Button 
            variant="outline" 
            onClick={() => navigate('/')}
            className="mb-8 border-white/20 text-white hover:bg-white/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              About Senim Engineering
            </h1>
            <p className="text-xl text-white/90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Leading the way in process engineering and industrial solutions since our inception
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Senim Engineering Pvt. Ltd. stands as a beacon of innovation and excellence in the field of process engineering. 
                Founded with a vision to revolutionize industrial processes, we have consistently delivered cutting-edge solutions 
                that drive efficiency, sustainability, and growth across diverse industries.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our journey began with a simple yet powerful mission: to bridge the gap between theoretical engineering concepts 
                and practical industrial applications. Today, we are proud to be recognized as industry leaders, serving clients 
                across oil & gas, petrochemicals, pharmaceuticals, and environmental sectors.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Innovation</h3>
                </div>
                <p className="text-muted-foreground">
                  We continuously push the boundaries of engineering excellence, developing innovative solutions 
                  that address the evolving needs of modern industries.
                </p>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Quality</h3>
                </div>
                <p className="text-muted-foreground">
                  Our commitment to quality is unwavering. Every solution we deliver meets the highest standards 
                  of engineering excellence and operational reliability.
                </p>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Partnership</h3>
                </div>
                <p className="text-muted-foreground">
                  We believe in building lasting partnerships with our clients, working collaboratively 
                  to achieve mutual success and sustainable growth.
                </p>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Sustainability</h3>
                </div>
                <p className="text-muted-foreground">
                  Environmental responsibility is at the core of our operations. We develop solutions 
                  that promote sustainability and minimize environmental impact.
                </p>
              </div>
            </div>

            {/* Expertise Areas */}
            <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Expertise</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-muted/30 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-foreground mb-3">Process Engineering</h4>
                  <p className="text-muted-foreground">
                    Advanced distillation, evaporation, and mass transfer solutions tailored to your specific requirements.
                  </p>
                </div>
                <div className="bg-muted/30 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-foreground mb-3">Equipment Manufacturing</h4>
                  <p className="text-muted-foreground">
                    In-house manufacturing of precision-engineered process equipment with stringent quality control.
                  </p>
                </div>
                <div className="bg-muted/30 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-foreground mb-3">Consultancy Services</h4>
                  <p className="text-muted-foreground">
                    Expert technical consulting and project management services across multiple industries.
                  </p>
                </div>
              </div>
            </div>

            {/* Commitment */}
            <div className="bg-gradient-primary rounded-2xl p-8 text-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <h2 className="text-3xl font-bold text-white mb-4">Our Commitment</h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                At Senim Engineering, we are committed to delivering solutions that not only meet but exceed 
                your expectations. Our team of experienced engineers and industry experts work tirelessly 
                to ensure your success is our success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
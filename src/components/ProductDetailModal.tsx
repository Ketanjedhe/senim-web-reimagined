import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    title: string;
    description: string;
    features: string[];
    highlights: string[];
    detailedInfo: {
      overview: string;
      technicalSpecs: string[];
      performance: string[];
      applications: string[];
      advantages: string[];
    };
  } | null;
}

const ProductDetailModal = ({ isOpen, onClose, product }: ProductDetailModalProps) => {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            {product.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Overview */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Product Overview</h3>
            <p className="text-muted-foreground leading-relaxed">
              {product.detailedInfo.overview}
            </p>
          </div>

          {/* Technical Specifications */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Technical Specifications</h3>
            <div className="bg-muted/30 rounded-xl p-4">
              <ul className="space-y-2">
                {product.detailedInfo.technicalSpecs.map((spec, index) => (
                  <li key={index} className="text-muted-foreground">
                    • {spec}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Performance Features */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Performance Features</h3>
            <div className="grid md:grid-cols-2 gap-2">
              {product.detailedInfo.performance.map((perf, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{perf}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Applications</h3>
            <div className="grid md:grid-cols-2 gap-2">
              {product.detailedInfo.applications.map((app, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{app}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Competitive Advantages */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Competitive Advantages</h3>
            <div className="space-y-3">
              {product.detailedInfo.advantages.map((advantage, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{advantage}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <Button variant="outline" className="hover-scale transition-all duration-300">
              Download Datasheet
            </Button>
            <Button className="hover-scale transition-all duration-300">
              Request Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;
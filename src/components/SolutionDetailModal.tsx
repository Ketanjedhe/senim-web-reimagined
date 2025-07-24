import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

interface SolutionDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  solution: {
    title: string;
    description: string;
    features: string[];
    detailedInfo: {
      overview: string;
      applications: string[];
      benefits: string[];
      specifications: string[];
      industries: string[];
    };
  } | null;
}

const SolutionDetailModal = ({ isOpen, onClose, solution }: SolutionDetailModalProps) => {
  if (!solution) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            {solution.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Overview */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Overview</h3>
            <p className="text-muted-foreground leading-relaxed">
              {solution.detailedInfo.overview}
            </p>
          </div>

          {/* Applications */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Applications</h3>
            <div className="grid md:grid-cols-2 gap-2">
              {solution.detailedInfo.applications.map((app, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{app}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Key Benefits</h3>
            <div className="grid md:grid-cols-2 gap-2">
              {solution.detailedInfo.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specifications */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Technical Specifications</h3>
            <div className="bg-muted/30 rounded-xl p-4">
              <ul className="space-y-2">
                {solution.detailedInfo.specifications.map((spec, index) => (
                  <li key={index} className="text-muted-foreground">
                    • {spec}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Target Industries</h3>
            <div className="flex flex-wrap gap-2">
              {solution.detailedInfo.industries.map((industry, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="flex justify-end pt-4">
            <Button className="hover-scale transition-all duration-300">
              Request Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SolutionDetailModal;
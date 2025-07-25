import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ProcessTechnology from "./pages/solutions/ProcessTechnology";
import EnvironmentalSolutions from "./pages/solutions/EnvironmentalSolutions";
import HeatTransferSystems from "./pages/solutions/HeatTransferSystems";
import SeninPusherCentrifuge from "./pages/products/SeninPusherCentrifuge";
import MassTransferInternals from "./pages/products/MassTransferInternals";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions/process-technology" element={<ProcessTechnology />} />
          <Route path="/solutions/environmental-solutions" element={<EnvironmentalSolutions />} />
          <Route path="/solutions/heat-transfer-systems" element={<HeatTransferSystems />} />
          <Route path="/products/senim-pusher-centrifuge" element={<SeninPusherCentrifuge />} />
          <Route path="/products/mass-transfer-internals" element={<MassTransferInternals />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop"; // Import ScrollToTop
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Products";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import UsedEquipmentSales from "./pages/UsedEquipmentSales";
import Distributors from "./pages/Distributors";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";

// Service Pages
import LogStackers from "./pages/services/LogStackers";
import WebStackers from "./pages/services/WebStackers";
import ConveyorSystems from "./pages/services/ConveyorSystems";
import PressRelocation from "./pages/services/PressRelocation";
import PressRebuilds from "./pages/services/PressRebuilds;";
import ServiceTroubleshooting from "./pages/services/ServiceTroubleshooting";
import PressSourcing from "./pages/services/PressSourcing";
import TechnicalEvaluation from "./pages/services/TechnicalEvaluation";
import AfterSalesSupport from "./pages/services/AfterSalesSupport";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop /> {/* Add ScrollToTop here */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/used-equipment-sales" element={<UsedEquipmentSales />} />
          <Route path="/distributors" element={<Distributors />} />
          <Route path="/admin" element={<Admin />} />

          {/* Service Pages */}
          <Route path="/services/log-stackers" element={<LogStackers />} />
          <Route path="/services/webstackers" element={<WebStackers />} />
          <Route path="/services/conveyors" element={<ConveyorSystems />} />
          <Route path="/services/press-relocation" element={<PressRelocation />} />
          <Route path="/services/press-rebuilds" element={<PressRebuilds />} />
          <Route path="/services/service-troubleshooting" element={<ServiceTroubleshooting />} />
          <Route path="/services/press-sourcing" element={<PressSourcing />} />
          <Route path="/services/technical-evaluation" element={<TechnicalEvaluation />} />
          <Route path="/services/after-sales-support" element={<AfterSalesSupport />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

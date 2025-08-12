
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import UrbanLogisticsProject from "./pages/UrbanLogisticsProject";
import SportRetailProject from "./pages/SportRetailProject";
import WorkwearProject from "./pages/WorkwearProject";
import HockeyProject from "./pages/HockeyProject";
import PetProject from "./pages/PetProject";
import DentalClinicsProject from "./pages/DentalClinicsProject";

import TechDetails from "./pages/TechDetails";
import DevelopmentProcess from "./pages/DevelopmentProcess";
import About from "./pages/About";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Blog from "./pages/Blog";
import CollaboratorForm from "./components/CollaboratorForm";
import InternalTeamForm from "./components/InternalTeamForm";
import PartnershipForm from "./components/PartnershipForm";
import BlogPostDetail from "./pages/BlogPostDetail";

const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects/optimizacion-logistica" element={<UrbanLogisticsProject />} />
            <Route path="/projects/optimizacion-alquiler-equipos-eventos" element={<SportRetailProject />} />
            <Route path="/projects/workwear" element={<WorkwearProject />} />
            <Route path="/projects/hockey" element={<HockeyProject />} />
            <Route path="/projects/clinicas-dentales" element={<DentalClinicsProject />} />
            <Route path="/tech-details" element={<TechDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/development-process" element={<DevelopmentProcess />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/collaborator-form" element={<CollaboratorForm />} />
            <Route path="/internal-team-form" element={<InternalTeamForm />} />
            <Route path="/partnership-form" element={<PartnershipForm />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPostDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

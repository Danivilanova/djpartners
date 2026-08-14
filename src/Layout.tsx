import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import ConsentBanner from "@/components/ConsentBanner";
import { storeGclidFromUrl } from "@/lib/gclid";

/**
 * Layout raíz para vite-react-ssg: envuelve todas las rutas con los providers
 * globales (React Query, Tooltip), los toasters, el banner de consentimiento y
 * el <Outlet/> donde se renderiza cada página.
 */
export default function Layout() {
  const [queryClient] = useState(() => new QueryClient());

  // Persistir el gclid de Google Ads al aterrizar (cookie 90 días) para
  // adjuntarlo a los formularios de lead (conversiones offline en HubSpot).
  useEffect(() => {
    storeGclidFromUrl();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ConsentBanner />
        <Outlet />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

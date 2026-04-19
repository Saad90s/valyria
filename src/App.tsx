import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Jib l'Navbar w l'Footer hna
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Les pages
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Contact from "@/pages/Contact";
import Services from "@/pages/Services";
import About from "@/pages/About";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Hna kandiro Layout lli ghadi tban f ga3 les pages */}
        <div className="flex flex-col min-h-screen">
          
          <Navbar /> {/* Ghadi tban lfo9 f ga3 l-pages */}
          
          {/* L-contenu dial les pages kayban hna */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer /> {/* Ghadi tban lta7t f ga3 l-pages */}
          
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Company from "./pages/company/Company";
import QualityManagement from "./pages/company/QualityManagement";
import Vacancies from "./pages/company/Vacancies";
import Cooperation from "./pages/company/Cooperation";
import RentalAreas from "./pages/company/RentalAreas";
import AntiCorruption from "./pages/company/AntiCorruption";
import Products from "./pages/products/Products";
import Notebooks from "./pages/products/Notebooks";
import Monitors from "./pages/products/Monitors";
import Computers from "./pages/products/Computers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Services from "./pages/services/Services";
import TestingLabs from "./pages/services/TestingLaboratories";
import { LanguageProvider } from "./contexts/LanguageContext";
import ScrollToTop from "./components/ScrollToTop";
import PreloadManager from "./components/PreloadManager";
import Navigation from "./components/Navigation";
import Tablets from "./pages/products/Tablets";
import Storage from "./pages/products/Storage";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black">
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop isLoading={isLoading} />
            <Navigation isLoading={isLoading} />
            <PreloadManager onLoadingChange={setIsLoading}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/company" element={<Company />} />
                <Route path="/company/quality-management" element={<QualityManagement />} />
                <Route path="/company/vacancies" element={<Vacancies />} />
                <Route path="/company/cooperation" element={<Cooperation />} />
                <Route path="/company/rental-areas" element={<RentalAreas />} />
                <Route path="/company/anti-corruption" element={<AntiCorruption />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/testing-laboratories" element={<TestingLabs />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/laptops" element={<Notebooks />} />
                <Route path="/products/monitors" element={<Monitors />} />
                <Route path="/products/computers" element={<Computers />} />
                <Route path="/products/tablets" element={<Tablets />} />
                <Route path="/products/storage" element={<Storage />} />
                <Route path="/contact" element={<Contact />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </PreloadManager>
          </BrowserRouter>
        </LanguageProvider>
      </QueryClientProvider>
    </div>
  );
};

export default App;

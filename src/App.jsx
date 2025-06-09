import { useEffect } from 'react';
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import AdminLogin from "./pages/AdminPage/AdminLogin/AdminLogin";
import AdminRoutes from "./routes/AdminRoutes";
import MainRoutes from "./routes/MainRoutes";
import { BrowserRouter, Route, Routes, useNavigate, useNavigation } from "react-router-dom";

function App() {
  const ScrollToTop = () => {
    const navigate = useNavigate();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [navigate]);
    return null;
  };

  return (
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path='/*' element={<MainRoutes />} />
          {/* 관리자 페이지 */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route element={<NotFound />} />

        </Routes>
        <Footer />
      </TooltipProvider>
    </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
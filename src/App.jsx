import { Switch, Route, useLocation } from "wouter";
import { useEffect, useState } from 'react';
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Pages
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import HistoryPage from "./pages/AboutPage/HistoryPage";
import FacilitiesPage from "./pages/AboutPage/FacilitiesPage";
import CertificatePage from "./pages/CertificatePage/CertificatePage";

// 공조냉동기계 자격증 페이지
import RefrigerationPage from "./pages/CertificatePage/RefrigerationPage";
import RefrigerationMasterPage from "./pages/CertificatePage/RefrigerationMasterPage";
import RefrigerationIndustrialPage from "./pages/CertificatePage/RefrigerationIndustrialPage";
import RefrigerationEngineerPage from "./pages/CertificatePage/RefrigerationEngineerPage";

// 에너지관리 자격증 페이지
import EnergyPage from "./pages/CertificatePage/EnergyPage";
import EnergyMasterPage from "./pages/CertificatePage/EnergyMasterPage";
import EnergyIndustrialPage from "./pages/CertificatePage/EnergyIndustrialPage";
import EnergyEngineerPage from "./pages/CertificatePage/EnergyEngineerPage";
import EnergyCraftsmanPage from "./pages/CertificatePage/EnergyCraftsmanPage";

// 설비보전 자격증 페이지
import MaintenancePage from "./pages/CertificatePage/MaintenancePage";
import MaintenanceIndustrialPage from "./pages/CertificatePage/MaintenanceIndustrialPage";
import MaintenanceEngineerPage from "./pages/CertificatePage/MaintenanceEngineerPage";

// 온수온돌 자격증 페이지
import HotWaterPage from "./pages/CertificatePage/HotWaterPage";
import HotWaterMasterPage from "./pages/CertificatePage/HotWaterMasterPage";

import CoursePage from "./pages/CoursePage/CoursePage";
import CourseDetailPage from "./pages/CoursePage/CourseDetailPage";
import JobCenterPage from "./pages/JobCenterPage/JobCenterPage";
import NoticePage from "./pages/CommunityPage/NoticePage";
import ContactPage from "./pages/CommunityPage/ContactPage";
import LocationPage from "./pages/CommunityPage/LocationPage";
import AdminLogin from "./pages/AdminPage/AdminLogin/AdminLogin";
import AdminRoutes from "./routes/AdminRoutes";
import useAuthstate from "./hooks/useAuthstate";
import NoticeDetailPage from "./pages/CommunityPage/NoticeDetailpage/NoticeDetailPage";
import CourseAllPage from "./pages/CourseAllPage/CourseAllPage";
function Router() {
  const ScrollToTop = () => {
    const [location] = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
    return null;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/about" component={AboutPage} exact />
        <Route path="/about/history" component={HistoryPage} />
        <Route path="/about/facilities" component={FacilitiesPage} />
        <Route path="/certificate" component={CertificatePage} />
        
        {/* 공조냉동기계 자격증 라우팅 */}
        <Route path="/certificate/refrigeration" component={RefrigerationPage} />
        <Route path="/certificate/refrigeration/master" component={RefrigerationMasterPage} />
        <Route path="/certificate/refrigeration/industrial" component={RefrigerationIndustrialPage} />
        <Route path="/certificate/refrigeration/engineer" component={RefrigerationEngineerPage} />
        
        {/* 에너지관리 자격증 라우팅 */}
        <Route path="/certificate/energy" component={EnergyPage} />
        <Route path="/certificate/energy/master" component={EnergyMasterPage} />
        <Route path="/certificate/energy/industrial" component={EnergyIndustrialPage} />
        <Route path="/certificate/energy/engineer" component={EnergyEngineerPage} />
        <Route path="/certificate/energy/craftsman" component={EnergyCraftsmanPage} />
        
        {/* 설비보전 자격증 라우팅 */}
        <Route path="/certificate/maintenance" component={MaintenancePage} />
        <Route path="/certificate/maintenance/industrial" component={MaintenanceIndustrialPage} />
        <Route path="/certificate/maintenance/engineer" component={MaintenanceEngineerPage} />
        
        {/* 온수온돌 자격증 라우팅 */}
        <Route path="/certificate/heating" component={HotWaterPage} />
        <Route path="/certificate/heating/master" component={HotWaterMasterPage} />
        
        <Route path="/courseJoin" component={CourseAllPage} />
        <Route path="/courseAll" component={CourseAllPage} />
        <Route path="/course" component={CoursePage} />
        <Route path="/course/:id" component={CourseDetailPage} />
        <Route path="/job-center" component={JobCenterPage} />
        <Route path="/notice" component={NoticePage} />
        <Route path="/notice/:id" component={NoticeDetailPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/location" component={LocationPage} />
        <Route path="/community/location" component={LocationPage} />
        <Route path="/about/location" component={LocationPage} />

        {/* 관리자 페이지 */}
        <Route path="/admin/login" component={AdminLogin} />
        <AdminRoutes />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
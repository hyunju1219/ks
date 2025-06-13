import AboutPage from '@/pages/AboutPage/AboutPage';
import FacilitiesPage from '@/pages/AboutPage/FacilitiesPage';
import HistoryPage from '@/pages/AboutPage/HistoryPage';
import PracticeDetailPage from '@/pages/AboutPage/PracticePage/PracticeDetailPage';
import EnergyCraftsmanPage from '@/pages/CertificatePage/EnergyCraftsmanPage';
import EnergyEngineerPage from '@/pages/CertificatePage/EnergyEngineerPage';
import EnergyIndustrialPage from '@/pages/CertificatePage/EnergyIndustrialPage';
import EnergyMasterPage from '@/pages/CertificatePage/EnergyMasterPage';
import EnergyPage from '@/pages/CertificatePage/EnergyPage';
import HotWaterMasterPage from '@/pages/CertificatePage/HotWaterMasterPage';
import HotWaterPage from '@/pages/CertificatePage/HotWaterPage';
import MaintenanceEngineerPage from '@/pages/CertificatePage/MaintenanceEngineerPage';
import MaintenanceIndustrialPage from '@/pages/CertificatePage/MaintenanceIndustrialPage';
import MaintenancePage from '@/pages/CertificatePage/MaintenancePage';
import RefrigerationEngineerPage from '@/pages/CertificatePage/RefrigerationEngineerPage';
import RefrigerationIndustrialPage from '@/pages/CertificatePage/RefrigerationIndustrialPage';
import RefrigerationMasterPage from '@/pages/CertificatePage/RefrigerationMasterPage';
import RefrigerationPage from '@/pages/CertificatePage/RefrigerationPage';
import ContactPage from '@/pages/CommunityPage/ContactPage';
import LocationPage from '@/pages/CommunityPage/LocationPage';
import NoticeDetailPage from '@/pages/CommunityPage/NoticeDetailpage/NoticeDetailPage';
import NoticePage from '@/pages/CommunityPage/NoticePage';
import CourseAllPage from '@/pages/CourseAllPage/CourseAllPage';
import CoureseJoinPage from '@/pages/CourseJoinPage/CourseJoinPage';
import CourseDetailPage from '@/pages/CourseTypePage/CourseDetailPage';
import CourseTypePage from '@/pages/CourseTypePage/CourseTypePage';
import JobCenterPage from '@/pages/JobPage/JobCenterPage/JobCenterPage';
import JobEmpPage from '@/pages/JobPage/JobEmpPage/JobEmpPage';
import JobInfoDetailPage from '@/pages/JobPage/JobInfoDetailPage/JobInfoDetailPage';
import JobInfoPage from '@/pages/JobPage/JobInfoPage/JobInfoPage';
import JobLicensePage from '@/pages/JobPage/JobLicensePage/JobLicensePage';
import MainPage from '@/pages/MainPage/MainPage';
import { Route, Routes } from 'react-router-dom';

function MainRoutes() {
    return (
        <Routes>
            <Route path="" element={<MainPage/>} exact />

            {/* 학교소개 */}
            <Route path="about" element={<AboutPage/>} exact />
            <Route path="about/history" element={<HistoryPage/>} />
            <Route path="about/facilities" element={<FacilitiesPage/>} />
            <Route path="about/practice/:id" element={<PracticeDetailPage/>} />
            <Route path="about/location" element={<LocationPage/>} />

            {/* 과정소개 */}
            {/* 공조냉동기계 자격증 라우팅 */}
            <Route path="certificate/refrigeration" element={<RefrigerationPage/>} />
            <Route path="certificate/refrigeration/master" element={<RefrigerationMasterPage/>} />
            <Route path="certificate/refrigeration/industrial" element={<RefrigerationIndustrialPage/>} />
            <Route path="certificate/refrigeration/engineer" element={<RefrigerationEngineerPage/>} />

            {/* 에너지관리 자격증 라우팅 */}
            <Route path="certificate/energy" element={<EnergyPage/>} />
            <Route path="certificate/energy/master" element={<EnergyMasterPage/>} />
            <Route path="certificate/energy/industrial" element={<EnergyIndustrialPage/>} />
            <Route path="certificate/energy/engineer" element={<EnergyEngineerPage/>} />
            <Route path="certificate/energy/craftsman" element={<EnergyCraftsmanPage/>} />

            {/* 설비보전 자격증 라우팅 */}
            <Route path="certificate/maintenance" element={<MaintenancePage/>} />
            <Route path="certificate/maintenance/industrial" element={<MaintenanceIndustrialPage/>} />
            <Route path="certificate/maintenance/engineer" element={<MaintenanceEngineerPage/>} />

            {/* 온수온돌 자격증 라우팅 */}
            <Route path="certificate/heating" element={<HotWaterPage/>} />
            <Route path="certificate/heating/master" element={<HotWaterMasterPage/>} />

            {/* 교육과정 */}
            <Route path="courses/open" element={<CoureseJoinPage/>} />
            <Route path="courses/all" element={<CourseAllPage/>} />
            <Route path="courses/type/:type" element={<CourseTypePage/>} />          {/* 국가기간전략훈련, 내일배움카드, 과정평가형 */}
            <Route path="courses/:id" element={<CourseDetailPage/>} />

            {/* 취업센터 */}
            <Route path="job-center" element={<JobCenterPage/>} />
            <Route path="job-center/license" element={<JobLicensePage/>} />
            <Route path="job-center/info" element={<JobInfoPage/>} />               
            <Route path="job-center/info/:id" element={<JobInfoDetailPage/>} />     
            <Route path="job-center/emp" element={<JobEmpPage/>} />                 

            {/* 고객지원 */}
            <Route path="notice" element={<NoticePage/>} />
            <Route path="notice/:id" element={<NoticeDetailPage/>} />
            <Route path="contact" element={<ContactPage/>} />

        </Routes>
    );
}

export default MainRoutes;
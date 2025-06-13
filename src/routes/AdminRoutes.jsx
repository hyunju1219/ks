
import { useEffect } from "react";
import AdminPage from "@/pages/AdminPage/AdminPage";
import AdminCourseAdd from "@/pages/AdminPage/AdminCourseAdd/AdminCourseAdd";
import AdminCourseEdit from "@/pages/AdminPage/AdminCourseEdit/AdminCourseEdit";
import AdminNotice from "@/pages/AdminPage/AdminNotice/AdminNotice";
import useAuthstate from "@/hooks/useAuthstate";
import AdminNoticeEdit from "@/pages/AdminPage/AdminNoticeEdit/AdminNoticeEdit";
import { Route, Routes, useNavigate } from "react-router-dom";
import AdminJobEmp from "@/pages/AdminPage/AdminJobEmp/AdminJobEmp";
import AdminJobInfo from "@/pages/AdminPage/AdminJobInfo/AdminJobInfo";
import AdminJobLicense from "@/pages/AdminPage/AdminJobLicense/AdminJobLicense";

function AdminRoutes() {
  const { user, isLoggedIn, authLoading } = useAuthstate();
  const navigate = useNavigate();

  // 인증되지 않았으면 로그인 페이지로 리디렉션
  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/admin/login");
    }
  }, [authLoading, user, navigate]);

  // 인증 확인 중일 땐 아무 것도 렌더링하지 않음
  if (authLoading) return null;

  // 인증이 안 된 경우 리디렉션 처리됐으므로 아무 것도 렌더링하지 않음
  if (!user) return null;

  // 인증된 경우 관리자 라우트 렌더링
  return (
    <Routes>
      <Route path="" element={<AdminPage />} />

      {/* 교육과정 등록 */}
      <Route path="/course" element={<AdminCourseAdd />} />
      <Route path="/course/:id" element={<AdminCourseEdit />} />

      {/* 취업지원 */}
      <Route path="job/emp/add" element={<AdminJobEmp />} />
      <Route path="job/license/add" element={<AdminJobLicense />} />
      <Route path="job/license/:id/edit" element={<AdminJobLicense />} />
      <Route path="job/emp/:id/edit" element={<AdminJobEmp />} />
      <Route path="job/add" element={<AdminJobInfo />} />
      <Route path="job/:id/edit" element={<AdminJobInfo />} /> 

      {/* 공지사항 등록 */}
      <Route path="/notice" element={<AdminNotice />} />
      <Route path="/notice/:id" element={<AdminNoticeEdit />} />
    </Routes>
  );
}

export default AdminRoutes;

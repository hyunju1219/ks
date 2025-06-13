/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import * as s from "./style";

import DeleteButton from "@/components/Button/DeleteButton";
import { deleteLicensePost, getLicensePostById, saveLicensePost } from "@/firebase/JobLicenseService";

const AdminJobLicense = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);
  
  const [licensePost, setLicensePost] = useState({
    date: "",
    company: "",
    type: "",
    course: "",
    name: ""
  });
  
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isEditMode) {
      const fetchPostData = async () => {
        setIsLoading(true);
        try {
          const postData = await getLicensePostById(id);
          if (postData) {
            setLicensePost({
              date: postData.date,
              name: postData.name,
              company: postData.company,
              course: postData.course,
              type: postData.type,
            });
          } else {
            alert("존재하지 않는 게시글입니다.");
            navigate("/admin"); // 또는 적절한 목록 페이지로 이동
          }
        } catch (err) {
          console.error("데이터 로딩 실패:", err);
          setError({ form: "데이터를 불러오는 데 실패했습니다." });
        } finally {
          setIsLoading(false);
        }
      };
      fetchPostData();
    }
  }, [id, isEditMode, navigate]);

  const handleChange = (field, value) => {
    setLicensePost((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

 const handleDelete = async () => {
    if (!window.confirm("정말로 이 항목을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.")) {
      return; // 사용자가 '취소'를 누르면 함수 종료
    }

    setIsSubmitting(true);
    try {
      await deleteLicensePost(id); // 서비스 함수에 id를 전달하여 삭제 요청
      navigate("/job-center/license"); // 삭제 후 목록 페이지로 이동
    } catch (err) {
      console.error("삭제 실패:", err);
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newError = {};
    if (!licensePost.name.trim()) newError.name = "이름은 필수입니다.";
    if (!licensePost.date.trim()) newError.date = "취득날짜은 필수입니다.";
    if (!licensePost.company.trim()) newError.company = "발급기관은 필수입니다.";
    if (!licensePost.type.trim()) newError.type = "자격증종목은 필수입니다.";
    if (!licensePost.course.trim()) newError.course = "과정명은 필수입니다.";

    setError(newError);
    if (Object.keys(newError).length > 0) {
      setIsSubmitting(false);
      return;
    }

    try {
      const dataToSave = { ...licensePost };
      if (isEditMode) {
        dataToSave.id = id;
      }
      
      await saveLicensePost(dataToSave);

      alert(`자격증 취득 현황이 성공적으로 ${isEditMode ? '수정' : '등록'}되었습니다.`);
      
      setLicensePost({ title: "", content: "" });
      setError({});
      navigate(`/job-center/license`);
      
    } catch (err) {
      console.error("저장 실패:", err);
      setError({ form: "저장에 실패했습니다." });
    } finally {
      setIsSubmitting(false);
    }
  };
  if (isLoading) {
    return <div>데이터를 불러오는 중...</div>;
  }

  return (
    <div css={s.pageContainer}>
      <h2 css={s.pageTitle}>자격증 취득 현황 {isEditMode ? '수정' : '등록'}</h2>
      <form onSubmit={handleSubmit} css={s.form}>
        <label css={s.label}>
          이름
          <input
            type="text"
            placeholder="이름을 입력하세요"
            value={licensePost.name}
            onChange={(e) => handleChange("name", e.target.value)}
            css={s.input}
            disabled={isSubmitting}
          />
          {error.title && <span css={s.error}>{error.name}</span>}
        </label>

        <label css={s.label}>
            업체명
            <input
              type="text"
              placeholder="발급기관을 입력하세요"
              value={licensePost.company}
              onChange={(e) => handleChange("company", e.target.value)}
              css={s.input}
              disabled={isSubmitting}
            />
          {error.title && <span css={s.error}>{error.company}</span>}
        </label>
         <label css={s.label}>
          직종
          <input
            type="text"
            placeholder="자격증 종목을 입력하세요"
            value={licensePost.type}
            onChange={(e) => handleChange("type", e.target.value)}
            css={s.input}
            disabled={isSubmitting}
          />
          {error.title && <span css={s.error}>{error.type}</span>}
        </label>
         <label css={s.label}>
          과정명
          <input
            type="text"
            placeholder="과정명을 입력하세요"
            value={licensePost.course}
            onChange={(e) => handleChange("course", e.target.value)}
            css={s.input}
            disabled={isSubmitting}
          />
          {error.title && <span css={s.error}>{error.course}</span>}
        </label>
         <label css={s.label}>
          취업일자
          <input
            type="date"
            placeholder="취득일자를 입력하세요"
            value={licensePost.date}
            onChange={(e) => handleChange("date", e.target.value)}
            css={s.input}
            disabled={isSubmitting}
          />
          {error.title && <span css={s.error}>{error.date}</span>}
        </label>
        {error.form && <p css={s.error}>{error.form}</p>}

        <div>
          <button type="submit" css={s.button} disabled={isSubmitting}>
            {isSubmitting ? '저장 중...' : (isEditMode ? '수정' : '등록')}
          </button>
           {isEditMode && (
            <DeleteButton 
              onClick={handleDelete} 
              disabled={isSubmitting} 
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default AdminJobLicense;
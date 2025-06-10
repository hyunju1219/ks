// src/pages/AdminPage/AdminJobEmp/AdminJobEmp.jsx

/** @jsxImportSource @emotion/react */
import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom"; // useParams 추가
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import * as s from "./style";
// [수정] 필요한 모든 서비스 함수를 import
import { saveEmpPost, getEmpPostById } from "@/firebase/jobEmpService"; 

import ImageResize from 'quill-image-resize-module-react';
if (typeof window !== 'undefined') {
  Quill.register('modules/imageResize', ImageResize);
}

const AdminJobEmp = () => {
  // 1. 라우터 훅 및 모드 확인
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);

  const quillRef = useRef(null);
  
  // 2. 상태 관리
  const [empPost, setEmpPost] = useState({
    title: "",
    content: ""
  });
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 3. 수정 모드일 때 데이터 로딩
  useEffect(() => {
    if (isEditMode) {
      const fetchPostData = async () => {
        setIsLoading(true);
        try {
          const postData = await getEmpPostById(id);
          if (postData) {
            setEmpPost({
              title: postData.title,
              content: postData.content,
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

  // 4. 입력 핸들러
  const handleChange = (field, value) => {
    setEmpPost((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // 5. 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newError = {};
    if (!empPost.title.trim()) newError.title = "제목은 필수입니다.";
    if (!empPost.content || empPost.content === "<p><br></p>" || empPost.content.replace(/<(.|\n)*?>/g, '').trim().length === 0) {
      newError.content = "내용은 필수입니다.";
    }
    setError(newError);
    if (Object.keys(newError).length > 0) {
      setIsSubmitting(false);
      return;
    }

    try {
      // 수정 모드일 경우 id를 함께 전달
      const dataToSave = { ...empPost };
      if (isEditMode) {
        dataToSave.id = id;
      }
      
      const boardId = await saveEmpPost(dataToSave);

      alert(`취업 현황이 성공적으로 ${isEditMode ? '수정' : '등록'}되었습니다.`);
      
      // 성공 후 폼 초기화 및 페이지 이동
      setEmpPost({ title: "", content: "" });
      setError({});
      navigate(`/job-center/emp/${boardId}`);
      
    } catch (err) {
      console.error("저장 실패:", err);
      setError({ form: "저장에 실패했습니다." });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Quill 모듈 설정
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
      ["link", "image"],
      [{ align: [] }],
      [{ color: [] }, { background: [] }],
      ["clean"],
    ],
    imageResize: {
      parchment: typeof window !== 'undefined' ? Quill.import('parchment') : null,
      modules: ['Resize', 'DisplaySize'],
    },
  };

  const formats = [
    "header", "font", "bold", "italic", "underline", "strike", "blockquote",
    "list", "bullet", "indent", "link", "image", "align", "color", "background",
  ];

  if (isLoading) {
    return <div>데이터를 불러오는 중...</div>;
  }

  return (
    <div css={s.pageContainer}>
      <h2 css={s.pageTitle}>취업현황 {isEditMode ? '수정' : '등록'}</h2>
      <form onSubmit={handleSubmit} css={s.form}>
        <label css={s.label}>
          제목
          <input
            type="text"
            placeholder="제목을 입력하세요"
            value={empPost.title}
            onChange={(e) => handleChange("title", e.target.value)}
            css={s.input}
            disabled={isSubmitting}
          />
          {error.title && <span css={s.error}>{error.title}</span>}
        </label>

        <label css={s.label}>
          내용
          <ReactQuill
            ref={quillRef}
            theme="snow"
            value={empPost.content}
            onChange={(value) => handleChange("content", value)}
            modules={modules}
            formats={formats}
            css={s.editor}
            placeholder="내용을 입력해주세요..."
            readOnly={isSubmitting}
          />
          {error.content && <span css={s.error}>{error.content}</span>}
        </label>
        
        {error.form && <p css={s.error}>{error.form}</p>}

        <button type="submit" css={s.button} disabled={isSubmitting}>
          {isSubmitting ? '저장 중...' : (isEditMode ? '수정하기' : '등록하기')}
        </button>
      </form>
    </div>
  );
};

export default AdminJobEmp;
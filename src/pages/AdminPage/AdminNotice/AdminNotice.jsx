/** @jsxImportSource @emotion/react */
import { useState, useRef } from "react"; // useRef 추가
import ReactQuill, { Quill } from "react-quill"; // Quill 임포트
import "react-quill/dist/quill.snow.css";
import * as s from "./style";
import { useLocation } from "wouter";
import { saveNotice } from "@/firebase/noticeService";

// ImageResize 모듈 임포트 및 등록 (컴포넌트 외부 또는 최상단에서 한 번만)
import ImageResize from 'quill-image-resize-module-react';
if (typeof window !== 'undefined') { // 브라우저 환경에서만 Quill 모듈 등록
  Quill.register('modules/imageResize', ImageResize);
}


const AdminNotice = () => {
  const [notice, setNotice] = useState({
    category: "",
    title: "",
    content: "",
    isImportant: false,
  });
  const [error, setError] = useState({});
  const [, setLocation] = useLocation();
  const quillRef = useRef(null); // Quill 인스턴스에 접근하기 위한 ref (커스텀 핸들러 시 필요)

  const handleChange = (field, value) => {
    setNotice((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newError = {};
    if (!notice.category) newError.category = "카테고리를 선택하세요.";
    if (!notice.title.trim()) newError.title = "제목은 필수입니다.";
    // 내용 유효성 검사 강화 (HTML 태그 제외한 순수 텍스트 내용 확인)
    if (!notice.content || notice.content === "<p><br></p>" || notice.content.replace(/<(.|\n)*?>/g, '').trim().length === 0) {
      newError.content = "내용은 필수입니다.";
    }
    setError(newError);
    if (Object.keys(newError).length > 0) return;

    try {
      // saveNotice 함수는 ID를 자동으로 생성하거나,
      // ID가 없는 객체를 받으면 새로 생성하는 로직을 가지고 있어야 합니다.
      await saveNotice(notice);

      alert("공지사항이 등록되었습니다.");

      // 성공 후 폼 초기화
      setNotice({
        category: "",
        title: "",
        content: "",
        isImportant: false,
      });
      setError({});
      setLocation("/notice"); // 공지사항 목록 페이지로 이동
    } catch (err) {
      console.error("공지사항 저장 실패:", err);
      alert("등록에 실패했습니다.");
    }
  };

  // React Quill 모듈 설정 (툴바에 이미지 버튼 추가 및 ImageResize 모듈)
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"], // 이미지 업로드 버튼
      [{ align: [] }],
      [{ color: [] }, { background: [] }],
      ["clean"],
    ],
    imageResize: { // 이미지 리사이즈 모듈 설정
      parchment: typeof window !== 'undefined' ? Quill.import('parchment') : null, // 브라우저 환경에서만 import
      modules: ['Resize', 'DisplaySize'], // 사용할 하위 모듈
    },
    // (선택 사항) Firebase Storage 등 외부 스토리지 연동 시 이미지 핸들러
    // handlers: {
    //   image: () => { /* 커스텀 이미지 핸들러 로직 */ }
    // }
  };

  const formats = [ // 에디터에서 사용될 포맷 목록
    "header", "font", "bold", "italic", "underline", "strike", "blockquote",
    "list", "bullet", "indent", "link", "image", "align", "color", "background",
  ];

  return (
    <div css={s.pageContainer}>
      <h2 css={s.pageTitle}>공지사항 등록</h2>
      <form onSubmit={handleSubmit} css={s.form}>
        <label css={s.label}>
          카테고리
          <select
            value={notice.category}
            onChange={(e) => handleChange("category", e.target.value)}
            css={s.select}
          >
            <option value="">선택하세요</option>
            <option value="일반공지">일반공지</option>
            <option value="수강정보">수강정보</option>
            <option value="기타">기타</option>
          </select>
          {error.category && <span css={s.error}>{error.category}</span>}
        </label>

        <label css={s.label}>
          제목
          <input
            type="text"
            placeholder="제목을 입력하세요"
            value={notice.title}
            onChange={(e) => handleChange("title", e.target.value)}
            css={s.input}
          />
          {error.title && <span css={s.error}>{error.title}</span>}
        </label>

        <label css={s.label}>
          내용
          <ReactQuill
            ref={quillRef}
            theme="snow"
            value={notice.content}
            onChange={(value) => handleChange("content", value)}
            modules={modules} // modules prop 전달
            formats={formats} // formats prop 전달
            css={s.editor}
            placeholder="내용을 입력해주세요..."
          />
          {error.content && <span css={s.error}>{error.content}</span>}
        </label>

        <label css={s.checkboxLabel}>
          <input
            type="checkbox"
            checked={notice.isImportant}
            onChange={(e) => handleChange("isImportant", e.target.checked)}
            css={s.checkbox}
          />
          긴급공지로 등록
        </label>

        <button type="submit" css={s.button}>등록</button>
      </form>
    </div>
  );
};

export default AdminNotice;
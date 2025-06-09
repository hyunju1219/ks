/** @jsxImportSource @emotion/react */
import { useEffect, useState, useRef } from "react"; // useRef 추가
import ReactQuill, { Quill } from "react-quill"; // Quill 임포트
import "react-quill/dist/quill.snow.css";
import * as s from "./style";
import { getNoticeById, saveNotice } from "@/firebase/noticeService";

// ImageResize 모듈 임포트
import ImageResize from 'quill-image-resize-module-react';
import { useNavigate, useParams } from "react-router-dom";
Quill.register('modules/imageResize', ImageResize); // Quill에 모듈 등록

const AdminNoticeEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [notice, setNotice] = useState({
    category: "",
    title: "",
    content: "",
    isImportant: false,
  });
  const [error, setError] = useState({});
  const quillRef = useRef(null); // Quill 인스턴스에 접근하기 위한 ref

  // 데이터 불러오기 (이전과 동일)
  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const data = await getNoticeById(id);
          if (data) {
            setNotice({
              category: data.category || "",
              title: data.title || "",
              content: data.content || "",
              isImportant: data.isImportant || false,
            });
          } else {
            console.warn(`ID ${id}에 해당하는 공지사항을 찾을 수 없습니다.`);
          }
        } catch (err) {
          console.error("데이터 불러오기 실패:", err);
        }
      } else {
        setNotice({
          category: "",
          title: "",
          content: "",
          isImportant: false,
        });
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (field, value) => {
    setNotice((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // handleSubmit 함수 (이전과 동일)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newError = {};
    if (!notice.category) newError.category = "카테고리를 선택하세요.";
    if (!notice.title.trim()) newError.title = "제목은 필수입니다.";
    if (!notice.content || notice.content === "<p><br></p>" || notice.content.replace(/<(.|\n)*?>/g, '').trim().length === 0) {
      newError.content = "내용은 필수입니다.";
    }
    setError(newError);
    if (Object.keys(newError).length > 0) return;

    const noticeDataToSave = { ...notice };
    if (id) {
      noticeDataToSave.id = id;
    }

    try {
      await saveNotice(noticeDataToSave);
      alert(id ? "공지사항이 수정되었습니다." : "공지사항이 등록되었습니다.");
      navigate("/notice");
    } catch (err) {
      console.error("공지사항 저장 실패:", err);
      alert("저장에 실패했습니다.");
    }
  };


  // React Quill 모듈 설정 (ImageResize 모듈 추가)
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
      ["link", "image"], // 이미지 버튼은 그대로 둡니다.
      [{ align: [] }],
      [{ color: [] }, { background: [] }],
      ["clean"],
    ],
    // ImageResize 모듈 설정
    imageResize: {
      parchment: Quill.import('parchment'),
      modules: ['Resize', 'DisplaySize'] // 사용할 하위 모듈들
      // modules: ['Resize', 'DisplaySize', 'Toolbar'] // 툴바도 사용하려면 추가
      // Resize: 이미지 클릭 시 크기 조절 핸들 표시
      // DisplaySize: 이미지 크기 표시
      // Toolbar: 이미지 클릭 시 간단한 툴바 (정렬 등) 표시 (선택 사항)
    },
    // Firebase Storage 등 외부 스토리지 연동 시 이미지 핸들러 설정 (선택 사항)
    // handlers: {
    //   image: imageHandler // 커스텀 이미지 핸들러 함수
    // }
  };

  const formats = [ // formats 목록 (imageResize 모듈이 사용하는 class/style도 고려될 수 있으나, 기본적으로는 이미지 태그 관련)
    "header", "font", "bold", "italic", "underline", "strike", "blockquote",
    "list", "bullet", "indent", "link", "image", "align", "color", "background",
    // imageResize 모듈이 추가하는 스타일/클래스가 있다면 여기에 명시적으로 추가할 수도 있습니다.
    // (예: 'width', 'height', 'style', 'float' 등 - 라이브러리 문서 확인 필요)
  ];

  // (선택 사항) 커스텀 이미지 핸들러 (Firebase Storage 연동 등)
  // const imageHandler = () => {
  //   const input = document.createElement('input');
  //   input.setAttribute('type', 'file');
  //   input.setAttribute('accept', 'image/*');
  //   input.click();

  //   input.onchange = async () => {
  //     const file = input.files[0];
  //     if (file) {
  //       // 여기에 Firebase Storage 업로드 로직 구현
  //       // 예시: const imageUrl = await uploadImageToFirebase(file);
  //       // const editor = quillRef.current.getEditor();
  //       // const range = editor.getSelection(true);
  //       // editor.insertEmbed(range.index, 'image', imageUrl);
  //       console.log("선택된 파일:", file.name);
  //       alert("커스텀 이미지 핸들러: Firebase Storage 연동 로직 필요");
  //     }
  //   };
  // };


  return (
    <div css={s.pageContainer}>
      <h2 css={s.pageTitle}>{id ? "공지사항 수정" : "공지사항 등록"}</h2>
      <form onSubmit={handleSubmit} css={s.form}>
        {/* 카테고리, 제목 입력 필드 (이전과 동일) */}
        <label css={s.label}>
          카테고리
          <select value={notice.category} onChange={(e) => handleChange("category", e.target.value)} css={s.select} >
            <option value="">선택하세요</option>
            <option value="일반공지">일반공지</option>
            <option value="수강정보">수강정보</option>
            <option value="기타">기타</option>
          </select>
          {error.category && <span css={s.error}>{error.category}</span>}
        </label>

        <label css={s.label}>
          제목
          <input type="text" placeholder="제목을 입력하세요" value={notice.title} onChange={(e) => handleChange("title", e.target.value)} css={s.input} />
          {error.title && <span css={s.error}>{error.title}</span>}
        </label>

        <label css={s.label}>
          내용
          <ReactQuill
            ref={quillRef} // ref 설정
            theme="snow"
            value={notice.content}
            onChange={(value) => handleChange("content", value)}
            modules={modules}
            formats={formats}
            css={s.editor}
            placeholder="내용을 입력해주세요..."
          />
          {error.content && <span css={s.error}>{error.content}</span>}
        </label>

        <label css={s.checkboxLabel}>
          <input type="checkbox" checked={notice.isImportant} onChange={(e) => handleChange("isImportant", e.target.checked)} css={s.checkbox} />
          긴급공지로 등록
        </label>

        <button type="submit" css={s.button}>
          {id ? "수정" : "등록"}
        </button>
      </form>
    </div>
  );
};

export default AdminNoticeEdit;
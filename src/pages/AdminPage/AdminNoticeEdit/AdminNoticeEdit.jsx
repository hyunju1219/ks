/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import "react-quill/dist/quill.snow.css";
import * as s from "./style";
import { useLocation, useParams } from "wouter";
import { getNoticeById, saveNotice } from "@/firebase/noticeService";

const AdminNoticeEdit = () => {
  const { id } = useParams();
  const [, setLocation] = useLocation();
  const [notice, setNotice] = useState({
    id: "",
    category: "",
    title: "",
    content: "",
    isImportant: false,
  });
  const [error, setError] = useState({});

  console.log(notice);
  //데이터 불러오기기
  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      try {
        const data = await getNoticeById(id);
        if (data) {
          setNotice({
            id: data.id,
            category: data.category || "",
            title: data.title || "",
            content: data.content || "",
            isImportant: data.isImportant || false,
          });
        }
      } catch (err) {
        console.error("데이터 불러오기 실패:", err);
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

  //데이터 수정
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newError = {};
    if (!notice.category) newError.category = "카테고리를 선택하세요.";
    if (!notice.title.trim()) newError.title = "제목은 필수입니다.";
    if (!notice.content || notice.content === "<p><br></p>") newError.content = "내용은 필수입니다.";
    setError(newError);
    if (Object.keys(newError).length > 0) return;

    const newId = id || uuidv4();

    try {
      await saveNotice(notice);
      // await setDoc(doc(db, "notices", newId), {
      //   id: newId,
      //   ...notice,
      //   createdAt: serverTimestamp(),
      // });
      alert("공지사항이 수정되었습니다.");
      setLocation("/notice");
    } catch (err) {
      console.error("공지사항 저장 실패:", err);
      alert("저장에 실패했습니다.");
    }
  };

  return (
    <div css={s.pageContainer}>
      <h2 css={s.pageTitle}>{id ? "공지사항 수정" : "공지사항 등록"}</h2>
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
            theme="snow"
            value={notice.content}
            onChange={(value) => handleChange("content", value)}
            css={s.editor}
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

        <button type="submit" css={s.button}>
          {id ? "수정" : "등록"}
        </button>
      </form>
    </div>
  );
};

export default AdminNoticeEdit;

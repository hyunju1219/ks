/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import * as s from './style';

import { uploadImage } from '@/firebase/uploadImage';
import { deleteCourse, getCourseById, saveCourse } from '@/firebase/courseService';

import { useLocation, useParams } from 'wouter';

const AdminCourseEdit = () => {
  const { id } = useParams();
  const [, setLocation] = useLocation();
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [form, setForm] = useState({
    courseName: '',
    category: '',
    type: '',
    registrationPeriod: '',
    schedule: '',
    location: '',
    price: '',
    selfCost: '',
    supportFund: '',
    capacity: '',
    description: '',
  });

  useEffect(() => {
    console.log("실행");
      const fetchCourse = async () => {
        try {
          const data = await getCourseById(id);
          if (!data) {
            alert('존재하지 않는 교육 과정입니다.');
            setLocation('/course');
            return;
          }
          setForm(data);
        } catch (error) {
          console.error('데이터 불러오기 실패:', error);
          alert('데이터를 불러오는데 실패했습니다.');
          setLocation('/course');
        } finally {
          setLoading(false);
        }
      };
    
      fetchCourse();
  },[id, setLocation]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImageFile(file);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

const handleSave = async () => {
    try {
      const courseId = form.id || crypto.randomUUID();
      let uploadedUrl = imageUrl;

      if (imageFile) {
        // 새 이미지 업로드 전에 현재 form.imageUrl과 비교할 변수
        const oldImageUrl = form.imageUrl;

        // 새 이미지 업로드
        uploadedUrl = await uploadImage(imageFile);
        setImageUrl(uploadedUrl);

        // URL이 바뀌었으면 기존 이미지 삭제
        if (oldImageUrl && oldImageUrl !== uploadedUrl && oldImageUrl.startsWith("https://")) {
          try {
            const imageRef = ref(storage, getStoragePathFromUrl(oldImageUrl));
            await deleteObject(imageRef);
          } catch (deleteError) {
            console.warn("기존 이미지 삭제 실패:", deleteError);
          }
        }
      }

      const newCourse = {
        ...form,
        id: courseId,
        imageUrl: uploadedUrl,
      };

      await saveCourse(newCourse);
      alert('수정 완료');
    } catch (err) {
      console.error('저장 오류', err);
      alert('저장 실패');
    }
  };

  const getStoragePathFromUrl = (url) => {
    try {
      const baseUrl = "https://firebasestorage.googleapis.com/v0/b/";
      if (!url.startsWith(baseUrl)) return null;

      const parts = url.split("/o/");
      if (parts.length < 2) return null;

      const pathAndQuery = parts[1];
      const path = pathAndQuery.split("?")[0];

      return decodeURIComponent(path);
    } catch {
      return null;
    }
  };

// 삭제 버튼 핸들러
const handleDelete = async () => {
  if (!form.id) return alert('id 없음');

  try {
    await deleteCourse(form.id);
    alert('삭제 완료');
  } catch (err) {
    console.error('삭제 오류', err);
    alert('삭제 실패');
  }
};

  return (
    <div css={s.container}>
      <div css={s.buttonGroup}>
        <button onClick={handleSave} css={s.saveButton}>수정</button>
        <button onClick={handleDelete} css={s.deleteButton}>삭제</button>
      </div>
      <div css={s.formRow}>
        <div css={s.formGroup}>
          <label>과정 대표 이미지</label>
          <div css={s.imageUploadGroup}>
            <div css={s.imageBox}>
              <input type="file" accept="image/*" onChange={handleImageChange} />
              {imageUrl && <img src={imageUrl} alt="preview" css={s.previewImg} />}
            </div>
          </div>
        </div>

        <div css={s.formGroup} style={{ flex: 1 }}>
          <label>과정 이름</label>
          <input name="courseName" value={form.courseName} onChange={handleChange} css={s.input} />
          <label>카테고리</label>
          <select name="category" value={form.category} onChange={handleChange} css={s.select}>
            <option value="">선택하세요</option>
            <option value="전체">전체</option>
            <option value="국비지원">국비지원</option>
            <option value="기업위탁">기업위탁</option>
            <option value="일반과정">일반과정</option>
          </select>
        </div>
      </div>

      <div css={s.gridRow}>
        <div css={s.gridItem}>
          <label>교육 유형</label>
          <input name="type" value={form.type} onChange={handleChange} css={s.input} />
        </div>
        <div css={s.gridItem}>
          <label>접수 기간</label>
          <input name="registrationPeriod" value={form.registrationPeriod} onChange={handleChange} css={s.input} />
        </div>
        <div css={s.gridItem}>
          <label>훈련 기간 및 일정</label>
          <input name="schedule" value={form.schedule} onChange={handleChange} css={s.input} />
        </div>
      </div>

      <div css={s.gridRow}>
        <div css={s.gridItem}>
          <label>교육 장소</label>
          <input name="location" value={form.location} onChange={handleChange} css={s.input} />
        </div>
        <div css={s.gridItem}>
          <label>교육비</label>
          <input name="price" value={form.price} onChange={handleChange} css={s.input} />
        </div>
        <div css={s.gridItem}>
          <label>자비 부담금</label>
          <input name="selfCost" value={form.selfCost} onChange={handleChange} css={s.input} />
        </div>
      </div>

      <div css={s.gridRow}>
        <div css={s.gridItem}>
          <label>내일배움카드 지원금</label>
          <input name="supportFund" value={form.supportFund} onChange={handleChange} css={s.input} />
        </div>
        <div css={s.gridItem}>
          <label>정원</label>
          <input name="capacity" value={form.capacity} onChange={handleChange} css={s.input} />
        </div>
      </div>

      <div css={s.formGroup}>
        <label>교육과정 설명</label>
        <textarea name="description" value={form.description} onChange={handleChange} css={s.textarea} />
      </div>

      
    </div>
  );
};

export default AdminCourseEdit;

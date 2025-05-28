/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import * as s from './style';
import { uploadImage } from '@/firebase/uploadImage';
import { saveCourse } from '@/firebase/courseService';
import { useLocation } from 'wouter';
import ReactQuill from 'react-quill';

const AdminCourseAdd = () => {
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [, setLocation] = useLocation();
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImageFile(file);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleDescriptionChange = (value) => {
    setForm((prev) => ({ ...prev, description: value }));
  };

  const handleSave = async () => {
  try {
    const courseId = form.id || crypto.randomUUID();
    let uploadedUrl = imageUrl;

    if (imageFile) {
      uploadedUrl = await uploadImage(imageFile);
      setImageUrl(uploadedUrl);
    }

    const newCourse = {
      ...form,
      id: courseId,
      imageUrl: uploadedUrl,
    };

    await saveCourse(newCourse); // Firestore 저장 로직
    alert('저장 완료');
    setLocation('/course');
  } catch (err) {
    console.error('저장 오류', err);
    alert('저장 실패');
  }
};

  return (
    <div css={s.container}>
      <div css={s.buttonGroup}>
        <button onClick={handleSave} css={s.saveButton}>저장</button>
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
        <ReactQuill 
          value={form.description} onChange={handleDescriptionChange} 
          style={{ width: "800px", height: "200px", marginBottom: "20px" }}
        />
      </div>

      
    </div>
  );
};

export default AdminCourseAdd;

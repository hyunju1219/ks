/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import * as s from './style'; // s.previewImg, s.imageBox 등의 스타일이 여기에 정의되어 있어야 함
import { uploadImage } from '@/firebase/uploadImage';
import { saveCourse } from '@/firebase/courseService';
import { useLocation } from 'wouter';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ReactQuill CSS

const AdminCourseAdd = () => {
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [, setLocation] = useLocation();
  const [form, setForm] = useState({
    courseName: '',
    category: '',
    recruitmentStatus: '모집예정',
    registrationPeriod: '',
    trainingPeriod: '',
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
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImageFile(null);
      setImageUrl('');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleDescriptionChange = (value) => {
    setForm((prev) => ({ ...prev, description: value }));
  };

  const handleSave = async () => {
    if (!form.courseName || !form.category) {
      alert('과정 이름과 카테고리는 필수입니다.');
      return;
    }
    try {
      let finalImageUrl = form.imageUrl || '';
      if (imageFile) {
        finalImageUrl = await uploadImage(imageFile);
      }
      const courseDataToSave = { ...form, imageUrl: finalImageUrl };
      await saveCourse(courseDataToSave);
      alert('저장 완료');
      setLocation('/course');
    } catch (err) {
      console.error('저장 오류', err);
      alert('저장 실패: ' + (err.message || '알 수 없는 오류'));
    }
  };

  return (
    <div css={s.container}>
      <div css={s.formRow}>
        <div css={s.formGroup}>
          <label>과정 대표 이미지</label> {/* 이 레이블은 이제 시각적으로만 역할 */}
          <div css={s.imageUploadGroup}>
            {/* 파일 입력을 숨깁니다. */}
            <input
              type="file"
              id="courseImageInput" // ID 추가
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }} // 시각적으로 숨김
            />
            {/* 이미지 미리보기 영역을 레이블로 만들어 파일 입력을 트리거합니다. */}
            <label htmlFor="courseImageInput" css={s.imageBoxLabel} /* s.imageBoxLabel 스타일 필요 */>
              {imageUrl ? (
                <img src={imageUrl} alt="미리보기" css={s.previewImg} />
              ) : (
                <span>이미지 미리보기<br/>(클릭하여 파일 선택)</span> // 사용자 안내 텍스트 추가
              )}
            </label>
          </div>
        </div>

        <div css={s.formGroup} style={{ flex: 1 }}>
          <label htmlFor="courseName">과정 이름</label>
          <input id="courseName" name="courseName" value={form.courseName} onChange={handleChange} css={s.input} />

          <label htmlFor="category">카테고리</label>
          <select id="category" name="category" value={form.category} onChange={handleChange} css={s.select}>
            <option value="">선택하세요</option>
            <option value="국가기간전략훈련">국가기간전략훈련</option>
            <option value="내일배움카드">내일배움카드</option>
            <option value="과정평가형">과정평가형</option>
            <option value="부산시과정">부산시과정</option>
          </select>

          <label>모집여부</label>
          <div css={s.radioGroup} >
            <label htmlFor="scheduled" css={s.radioLabel}>
              <input type="radio" id="scheduled" name="recruitmentStatus" value="모집예정" checked={form.recruitmentStatus === '모집예정'} onChange={handleChange} css={s.radioInput} />
              모집예정
            </label>
            <label htmlFor="recruiting" css={s.radioLabel}>
              <input type="radio" id="recruiting" name="recruitmentStatus" value="모집중" checked={form.recruitmentStatus === '모집중'} onChange={handleChange} css={s.radioInput} />
              모집중
            </label>
            <label htmlFor="finished" css={s.radioLabel}>
              <input type="radio" id="finished" name="recruitmentStatus" value="모집마감" checked={form.recruitmentStatus === '모집마감'} onChange={handleChange} css={s.radioInput} />
              모집마감
            </label>
          </div>
        </div>
      </div>

      {/* ... 나머지 폼 필드들 ... */}
      <div css={s.gridRow}>
        <div css={s.gridItem}>
          <label htmlFor="registrationPeriod">접수 기간</label>
          <input id="registrationPeriod" name="registrationPeriod" value={form.registrationPeriod} onChange={handleChange} css={s.input} />
        </div>
        <div css={s.gridItem}>
          <label htmlFor="trainingPeriod">훈련 기간</label>
          <input id="trainingPeriod" name="trainingPeriod" value={form.trainingPeriod} onChange={handleChange} css={s.input} />
        </div>
         <div css={s.gridItem}>
          <label htmlFor="schedule">일정</label>
          <input id="schedule" name="schedule" value={form.schedule} onChange={handleChange} css={s.input} />
        </div>
      </div>

      <div css={s.gridRow}>
        <div css={s.gridItem}>
          <label htmlFor="price">교육비</label>
          <input id="price" name="price" type="number" value={form.price} onChange={handleChange} css={s.input} />
        </div>
        <div css={s.gridItem}>
          <label htmlFor="selfCost">자비 부담금</label>
          <input id="selfCost" name="selfCost" type="number" value={form.selfCost} onChange={handleChange} css={s.input} />
        </div>
      </div>

      <div css={s.gridRow}>
        <div css={s.gridItem}>
          <label htmlFor="location">교육 장소</label>
          <input id="location" name="location" value={form.location} onChange={handleChange} css={s.input} />
        </div>
        <div css={s.gridItem}>
          <label htmlFor="supportFund">내일배움카드 지원금</label>
          <input id="supportFund" name="supportFund" type="number" value={form.supportFund} onChange={handleChange} css={s.input} />
        </div>
        <div css={s.gridItem}>
          <label htmlFor="capacity">정원</label>
          <input id="capacity" name="capacity" type="number" value={form.capacity} onChange={handleChange} css={s.input} />
        </div>
      </div>

      <div css={s.formGroupFullWidth} >
        <label htmlFor="description">교육과정 설명</label>
        <ReactQuill
          id="description"
          theme="snow"
          value={form.description}
          onChange={handleDescriptionChange}
          style={{ height: "200px", marginBottom: "50px" }}
        />
      </div>
      <div css={s.buttonGroup}>
        <button onClick={handleSave} css={s.saveButton}>저장</button>
      </div>
    </div>
  );
};

export default AdminCourseAdd;
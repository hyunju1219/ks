/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import * as s from './style'; // s.previewImg, s.imageBox, s.imageBoxLabel 등의 스타일 필요

import { uploadImage } from '@/firebase/uploadImage';
import { deleteCourse, getCourseById, saveCourse } from '@/firebase/courseService';
import { storage } from '@/firebase/config';
import { ref, deleteObject } from "firebase/storage";

import { useLocation, useParams } from 'wouter';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AdminCourseEdit = () => {
  const { id } = useParams();
  const [, setLocation] = useLocation();
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [form, setForm] = useState({
    id: '',
    courseName: '',
    category: '',
    recruitmentStatus: '모집예정',
    registrationPeriod: '',
    trainingPeriod:'',
    schedule: '',
    location: '',
    price: '',
    selfCost: '',
    supportFund: '',
    capacity: '',
    description: '',
    imageUrl: '',
  });

  useEffect(() => {
    if (!id) {
      alert('잘못된 접근입니다. 과정 ID가 없습니다.');
      setLocation('/admin/course');
      return;
    }
    const fetchCourse = async () => {
      try {
        const data = await getCourseById(id);
        if (!data) {
          alert('존재하지 않는 교육 과정입니다.');
          setLocation('/admin/course');
          return;
        }
        setForm(data);
        setImageUrl(data.imageUrl || '');
      } catch (error) {
        console.error('데이터 불러오기 실패:', error);
        alert('데이터를 불러오는데 실패했습니다.');
        setLocation('/admin/course');
      }
    };
    fetchCourse();
  }, [id, setLocation]);

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
      setImageUrl(form.imageUrl || '');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleDescriptionChange = (value) => {
    setForm((prev) => ({ ...prev, description: value }));
  };

  const getStoragePathFromUrl = (url) => {
    try {
      if (!url || !url.startsWith("https://firebasestorage.googleapis.com/")) return null;
      const decodedUrl = decodeURIComponent(url);
      const pathStartIndex = decodedUrl.indexOf('/o/') + 3;
      const pathEndIndex = decodedUrl.indexOf('?');
      if (pathStartIndex === 2 || pathEndIndex === -1) return null;
      return decodedUrl.substring(pathStartIndex, pathEndIndex);
    } catch (error) { return null; }
  };

  const handleSave = async () => {
    if (!form.id) {
      alert("수정할 과정의 ID가 없습니다.");
      return;
    }
    try {
      let finalImageUrl = form.imageUrl;
      if (imageFile) {
        const oldStoragePath = form.imageUrl ? getStoragePathFromUrl(form.imageUrl) : null;
        const newUploadedUrl = await uploadImage(imageFile);
        finalImageUrl = newUploadedUrl;
        if (oldStoragePath && form.imageUrl !== newUploadedUrl) {
          try {
            const imageRef = ref(storage, oldStoragePath);
            await deleteObject(imageRef);
          } catch (deleteError) {
            console.warn("기존 Storage 이미지 삭제 실패:", deleteError);
          }
        }
      }
      const courseDataToSave = { ...form, imageUrl: finalImageUrl };
      await saveCourse(courseDataToSave);
      alert('수정 완료');
      setLocation(`/course/${id}`);
    } catch (err) {
      console.error('저장 오류', err);
      alert('저장 실패: ' + (err.message || '알 수 없는 오류'));
    }
  };

  const handleDeleteCourse = async () => {
    if (!form.id) {
      alert('삭제할 과정의 ID가 없습니다.');
      return;
    }
    if (!window.confirm("정말로 이 과정을 삭제하시겠습니까?")) return;
    try {
      if (form.imageUrl) {
        const storagePath = getStoragePathFromUrl(form.imageUrl);
        if (storagePath) {
          try {
            const imageRef = ref(storage, storagePath);
            await deleteObject(imageRef);
          } catch (imageDeleteError) {
            console.warn("Storage 이미지 삭제 실패:", imageDeleteError);
          }
        }
      }
      await deleteCourse(form.id);
      alert('삭제 완료');
      setLocation('/admin/course');
    } catch (err) {
      console.error('삭제 오류', err);
      alert('삭제 실패: ' + (err.message || '알 수 없는 오류'));
    }
  };

  return (
    <div css={s.container}>
      <div css={s.formRow}>
        <div css={s.formGroup}>
          <label>과정 대표 이미지</label> {/* 시각적 레이블 */}
          <div css={s.imageUploadGroup}>
            {/* 파일 입력을 숨깁니다. */}
            <input
              type="file"
              id="courseEditImageInput" // 고유 ID 부여
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }} // 시각적으로 숨김
            />
            {/* 이미지 미리보기 영역을 레이블로 만들어 파일 입력을 트리거합니다. */}
            <label htmlFor="courseEditImageInput" css={s.imageBoxLabel} /* s.imageBoxLabel 스타일 필요 */>
              {imageUrl ? (
                <img src={imageUrl} alt="미리보기" css={s.previewImg} />
              ) : (
                <span>이미지 없음<br/>(클릭하여 파일 선택)</span>
              )}
            </label>
          </div>
        </div>

        <div css={s.formGroup} style={{ flex: 1 }}>
          <label htmlFor="courseName">과정 이름</label>
          <input id="courseName" name="courseName" value={form.courseName || ''} onChange={handleChange} css={s.input} />

          <label htmlFor="category">카테고리</label>
          <select id="category" name="category" value={form.category || ''} onChange={handleChange} css={s.select}>
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
          <input id="registrationPeriod" name="registrationPeriod" value={form.registrationPeriod || ''} onChange={handleChange} css={s.input} />
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
          <label htmlFor="location">교육 장소</label>
          <input id="location" name="location" value={form.location || ''} onChange={handleChange} css={s.input} />
        </div>
        <div css={s.gridItem}>
          <label htmlFor="price">교육비</label>
          <input id="price" name="price" type="number" value={form.price || ''} onChange={handleChange} css={s.input} />
        </div>
        <div css={s.gridItem}>
          <label htmlFor="selfCost">자비 부담금</label>
          <input id="selfCost" name="selfCost" type="number" value={form.selfCost || ''} onChange={handleChange} css={s.input} />
        </div>
      </div>
      <div css={s.gridRow}>
        <div css={s.gridItem}>
          <label htmlFor="supportFund">내일배움카드 지원금</label>
          <input id="supportFund" name="supportFund" type="number" value={form.supportFund || ''} onChange={handleChange} css={s.input} />
        </div>
        <div css={s.gridItem}>
          <label htmlFor="capacity">정원</label>
          <input id="capacity" name="capacity" type="number" value={form.capacity || ''} onChange={handleChange} css={s.input} />
        </div>
        <div css={s.gridItem}></div>
      </div>
      <div css={s.formGroupFullWidth}>
        <label htmlFor="description">교육과정 설명</label>
        <ReactQuill
          id="description"
          theme="snow"
          value={form.description || ''}
          onChange={handleDescriptionChange}
          style={{ height: "200px", marginBottom: "50px" }}
        />
      </div>
      <div css={s.buttonGroup}>
        <button onClick={handleSave} css={s.saveButton}>수정</button>
        <button onClick={handleDeleteCourse} css={s.deleteButton}>삭제</button>
      </div>
    </div>
  );
};

export default AdminCourseEdit;
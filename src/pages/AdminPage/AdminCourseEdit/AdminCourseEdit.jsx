/** @jsxImportSource @emotion/react */
import { useEffect, useState, useRef } from 'react'; // useRef 추가
import * as s from './style';

import { uploadImage } from '@/firebase/uploadImage';
import { deleteCourse, getCourseById, saveCourse } from '@/firebase/courseService';
import { storage } from '@/firebase/config';
import { ref, deleteObject } from "firebase/storage";

import { useLocation, useParams } from 'wouter';
import ReactQuill, { Quill } from 'react-quill'; // Quill 임포트
import 'react-quill/dist/quill.snow.css';

// ImageResize 모듈 임포트 및 등록
import ImageResize from 'quill-image-resize-module-react';
if (typeof window !== 'undefined') {
  Quill.register('modules/imageResize', ImageResize);
}

const AdminCourseEdit = () => {
  const { id } = useParams();
  const [, setLocation] = useLocation();
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(''); // 대표 이미지 URL
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
    description: '', // 교육과정 설명
    imageUrl: '', // 대표 이미지 URL 필드
    certificationType:''
  });
  const quillRef = useRef(null); // Quill 인스턴스 접근용

  useEffect(() => {
    if (!id) {
      alert('잘못된 접근입니다. 과정 ID가 없습니다.');
      setLocation('/admin/course'); // 관리자 과정 목록 페이지로 이동 (예시)
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
        setImageUrl(data.imageUrl || ''); // 불러온 데이터의 imageUrl로 상태 업데이트
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
      setImageFile(file); // 새 파일 저장
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result); // 미리보기 URL 업데이트
      };
      reader.readAsDataURL(file);
    } else {
      // 파일 선택 취소 시, 기존 이미지 URL 유지 (또는 초기화 정책에 따라 다름)
      setImageFile(null);
      // setImageUrl(form.imageUrl || ''); // 기존 form의 imageUrl로 되돌리거나,
      // 또는 사용자가 이미지를 제거하려는 의도일 수 있으므로, 이 부분은 정책에 따라 결정
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // ReactQuill의 onChange 핸들러
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
    } catch (error) { console.error("Error parsing storage path:", error); return null; }
  };

  const handleSave = async () => {
    if (!form.id) {
      alert("수정할 과정의 ID가 없습니다.");
      return;
    }
    if (!form.courseName || !form.category) {
      alert('과정 이름과 카테고리는 필수입니다.');
      return;
    }
    if (!form.description || form.description.replace(/<(.|\n)*?>/g, '').trim().length === 0) {
        alert('교육과정 설명은 필수입니다.');
        return;
    }

    try {
      let finalImageUrl = form.imageUrl; // 기본값은 기존 이미지 URL

      if (imageFile) { // 새 이미지가 선택된 경우
        // 기존 이미지가 있었다면 Storage에서 삭제
        if (form.imageUrl) {
          const oldStoragePath = getStoragePathFromUrl(form.imageUrl);
          if (oldStoragePath) {
            try {
              const imageRef = ref(storage, oldStoragePath);
              await deleteObject(imageRef);
              console.log("기존 대표 이미지 Storage에서 삭제 성공:", oldStoragePath);
            } catch (deleteError) {
              // 삭제 실패는 저장 과정을 막지 않음 (로깅만)
              console.warn("기존 대표 이미지 Storage에서 삭제 실패:", deleteError);
            }
          }
        }
        // 새 이미지 업로드
        finalImageUrl = await uploadImage(imageFile);
      }
      // courseDataToSave 객체를 생성할 때, form의 imageUrl이 아닌 finalImageUrl을 사용합니다.
      const courseDataToSave = { ...form, imageUrl: finalImageUrl };
      await saveCourse(courseDataToSave); // saveCourse는 id 유무에 따라 생성/수정 분기
      alert('수정 완료');
      setLocation(`/course/${id}`); // 수정된 과정 상세 페이지로 이동 (예시)
    } catch (err) {
      console.error('저장 오류', err);
      alert('저장 실패: ' + (err.message || '알 수 없는 오류'));
    }
  };

  const handleDeleteCourse = async () => {
    // ... (기존 삭제 로직과 동일)
    if (!form.id) {
      alert('삭제할 과정의 ID가 없습니다.');
      return;
    }
    if (!window.confirm("정말로 이 과정을 삭제하시겠습니까? 삭제된 데이터는 복구할 수 없습니다.")) return;

    try {
      // Firestore 문서 삭제 전에 Storage 이미지 삭제 (선택 사항)
      if (form.imageUrl) {
        const storagePath = getStoragePathFromUrl(form.imageUrl);
        if (storagePath) {
          try {
            const imageRef = ref(storage, storagePath);
            await deleteObject(imageRef);
            console.log("대표 이미지 Storage에서 삭제 성공 (과정 삭제 시):", storagePath);
          } catch (imageDeleteError) {
            console.warn("대표 이미지 Storage 삭제 실패 (과정 삭제 시):", imageDeleteError);
          }
        }
      }
      await deleteCourse(form.id);
      alert('삭제 완료');
      setLocation('/admin/course'); // 관리자 과정 목록 페이지로 이동
    } catch (err) {
      console.error('삭제 오류', err);
      alert('삭제 실패: ' + (err.message || '알 수 없는 오류'));
    }
  };


  // React Quill 모듈 설정
  const quillModules = {
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

  const quillFormats = [
    "header", "font", "bold", "italic", "underline", "strike", "blockquote",
    "list", "bullet", "indent", "link", "image", "align", "color", "background",
  ];


  return (
    <div css={s.container}>
      <div css={s.formRow}>
        <div css={s.formGroup}>
          <label>과정 대표 이미지</label>
          <div css={s.imageUploadGroup}>
            <input
              type="file"
              id="courseEditImageInput"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
            <label htmlFor="courseEditImageInput" css={s.imageBoxLabel}>
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

      <div css={s.gridRow}>
        <div css={s.gridItem}>
          <label htmlFor="registrationPeriod">접수 기간</label>
          <input id="registrationPeriod" name="registrationPeriod" value={form.registrationPeriod || ''} onChange={handleChange} css={s.input} />
        </div>
        <div css={s.gridItem}>
          <label htmlFor="trainingPeriod">훈련 기간</label>
          <input id="trainingPeriod" name="trainingPeriod" value={form.trainingPeriod || ''} onChange={handleChange} css={s.input} />
        </div>
          <div css={s.gridItem}>
          <label htmlFor="schedule">일정</label>
          <input id="schedule" name="schedule" value={form.schedule || ''} onChange={handleChange} css={s.input} />
        </div>
      </div>
      <div css={s.gridRow}>
            <div css={s.gridItem}>
              <label htmlFor="price">교육비</label>
              <input id="price" name="price" type="number" value={form.price || ''} onChange={handleChange} css={s.input} />
            </div>
            <div css={s.gridItem}>
              <label htmlFor="selfCost">자비 부담금</label>
              <input id="selfCost" name="selfCost" type="number" value={form.selfCost || ''} onChange={handleChange} css={s.input} />
            </div>
              <div css={s.gridItem}>
              <label htmlFor="supportFund">내일배움카드 지원금</label>
              <input id="supportFund" name="supportFund" type="number" value={form.supportFund || ''} onChange={handleChange} css={s.input} />
            </div>
          </div>
    
          <div css={s.gridRow}>
            <div css={s.gridItem}>
              <label htmlFor="certificationType">자격증 종류</label>
              <select id="certificationType" name="certificationType" value={form.certificationType || ''} onChange={handleChange} css={s.select}>
                <option value="">선택하세요</option>
                <option value="공조냉동기계">공조냉동기계</option>
                <option value="에너지관리">에너지관리</option>
                <option value="설비보전">설비보전</option>
                <option value="온수온돌">온수온돌</option>
              </select>
            </div>
            <div css={s.gridItem}>
              <label htmlFor="capacity">정원</label>
              <input id="capacity" name="capacity" type="number" value={form.capacity || ''} onChange={handleChange} css={s.input} />
            </div>
            <div css={s.gridItem}>
              <label htmlFor="location">관련링크</label>
              <input id="location" name="location" value={form.location || ''} onChange={handleChange} css={s.input} />
            </div>
          </div>
      <div css={s.formGroupFullWidth}>
        <label htmlFor="description">교육과정 설명</label>
        <ReactQuill
          ref={quillRef} // ref 추가
          id="description"
          theme="snow"
          value={form.description || ''} // 초기값 || '' 추가
          onChange={handleDescriptionChange}
          modules={quillModules} // modules prop 전달
          formats={quillFormats} // formats prop 전달
          style={{ height: "200px", marginBottom: "50px" }}
          placeholder="교육과정 상세 내용을 입력해주세요..."
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
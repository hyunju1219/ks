// src/pages/JobPostingForm/JobPostingForm.jsx

/** @jsxImportSource @emotion/react */
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // useParams 추가
import * as s from "./style";
// 1. Firebase 서비스 함수를 import 합니다.
import { saveJobPost, getJobPostById } from '@/firebase/jobInfoService';

const JobPostingForm = () => {
  // 2. 라우팅 관련 훅을 선언하고, 수정 모드를 확인합니다.
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);
  console.log(isEditMode);
  
  // 각 섹션을 참조하기 위한 Ref
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  
  // 3. 폼 제출 및 데이터 로딩 상태를 관리할 state를 추가합니다.
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // 폼 데이터 상태 (초기값은 비워두는 것이 일반적입니다)
  const [formData, setFormData] = useState({
    companyName: '',
    businessRegistrationNo: '',
    representativeName: '',
    numEmployees: '',
    industry: '',
    mainBusinessActivities: '',
    companyAddress: '',
    phoneNumber: '',
    faxNumber: '',
    contactPerson: '',
    contactNumber: '',
    email: '',
    jobType: '',
    numRecruits: '',
    jobDescription: '',
    expectedWorkLocation: '',
    applicationDeadline: '',
    ageLimit: '',
    educationLevel: '무관',
    qualifications: '',
    equipmentUsed: '',
    employmentType: '계약직',
    probationPeriod: '',
    salaryConditionType: '월급',
    salaryAmount: '',
    bonus: '',
    workingHours: '',
    overtime: '',
    fourMajorInsurances: {
      nationalPension: false, employmentInsurance: false,
      industrialAccidentInsurance: false, healthInsurance: false,
    },
    benefits: {
      dormitory: false, commuterBus: false, mealProvision: false,
      severancePay: false, scholarship: false, congratulatoryCondolence: false,
    },
    applicationEmail: 'kstg35@naver.com',
    vocationalSchoolContactPerson: '고기원',
    vocationalSchoolContactTel: '051-806-2200',
  });

  // 4. 수정 모드일 때, 기존 데이터를 불러오는 useEffect를 추가합니다.
  useEffect(() => {
    if (isEditMode) {
      const fetchPostingData = async () => {
        setIsLoading(true);
        try {
          const data = await getJobPostById(id);
          if (data) {
            setFormData(data);
          } else {
            alert('해당하는 공고가 없습니다.');
            navigate('/admin'); // 관리자 페이지 등으로 이동
          }
        } catch (err) {
          console.error(err);
          setError('데이터를 불러오는 데 실패했습니다.');
        } finally {
          setIsLoading(false);
        }
      };
      fetchPostingData();
    }
  }, [id, isEditMode, navigate]);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name.startsWith('fourMajorInsurances.')) {
        setFormData(prev => ({ ...prev, fourMajorInsurances: { ...prev.fourMajorInsurances, [name.split('.')[1]]: checked, }}));
      } else if (name.startsWith('benefits.')) {
        setFormData(prev => ({ ...prev, benefits: { ...prev.benefits, [name.split('.')[1]]: checked, }}));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value, }));
    }
  };

  // 5. handleSubmit 함수를 수정하여 Firestore에 데이터를 저장합니다.
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // 수정 모드일 경우 id를 함께 전달
      const dataToSave = { ...formData };
      if (isEditMode) {
        dataToSave.id = id;
      }
      
      const savedId = await saveJobPost(dataToSave);
      alert(`구인 공고가 성공적으로 ${isEditMode ? '수정' : '등록'}되었습니다.`);
      // 성공 후 상세 페이지나 목록 페이지로 이동할 수 있습니다.
      navigate(`/job-center/info/${savedId}`); // 예시 경로
      
    } catch (err) {
      console.error("저장 실패:", err);
      setError('저장에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNavClick = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // 데이터 로딩 중 UI
  if (isLoading) {
    return <div>데이터를 불러오는 중...</div>
  }

  return (
    <div css={s.pageLayout}>
      <nav css={s.sideNav}>
        <h3 css={s.navTitle}>등록 양식</h3>
        <ul>
          <li css={s.navItem}><button type="button" onClick={() => handleNavClick(section1Ref)}>1. 기본 정보</button></li>
          <li css={s.navItem}><button type="button" onClick={() => handleNavClick(section2Ref)}>2. 모집 요강</button></li>
          <li css={s.navItem}><button type="button" onClick={() => handleNavClick(section3Ref)}>3. 근무조건</button></li>
          <li css={s.navItem}><button type="button" onClick={() => handleNavClick(section4Ref)}>4. 기타 및 접수</button></li>
        </ul>
      </nav>

      <div css={s.formContainer}>
        <form css={s.form} onSubmit={handleSubmit}>
          {/* 제목을 동적으로 변경 */}
          <h1 css={s.title}>구인 의뢰 공고 {isEditMode ? '수정' : '등록'}</h1>

          {error && <p css={s.errorText}>{error}</p>}

          <section ref={section1Ref} css={s.section}>
            <h2 css={s.sectionTitle}>1. 기본 정보</h2>
            <div css={s.grid}>
                {/* ... 폼 필드들 ... */}
                <div css={s.inputGroup}><label css={s.label} htmlFor="companyName">회사명</label><input css={s.input} type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} required /></div>
                <div css={s.inputGroup}><label css={s.label} htmlFor="businessRegistrationNo">사업자등록번호</label><input css={s.input} type="text" id="businessRegistrationNo" name="businessRegistrationNo" value={formData.businessRegistrationNo} onChange={handleChange} /></div>
                <div css={s.inputGroup}><label css={s.label} htmlFor="representativeName">대표자명</label><input css={s.input} type="text" id="representativeName" name="representativeName" value={formData.representativeName} onChange={handleChange} /></div>
                <div css={s.inputGroup}><label css={s.label} htmlFor="numEmployees">근로자수</label><input css={s.input} type="number" id="numEmployees" name="numEmployees" value={formData.numEmployees} onChange={handleChange} min="0" /></div>
                <div css={s.inputGroup}><label css={s.label} htmlFor="industry">업종</label><input css={s.input} type="text" id="industry" name="industry" value={formData.industry} onChange={handleChange} /></div>
                <div css={s.inputGroup}><label css={s.label} htmlFor="mainBusinessActivities">주요사업내용</label><input css={s.input} type="text" id="mainBusinessActivities" name="mainBusinessActivities" value={formData.mainBusinessActivities} onChange={handleChange} /></div>
                <div css={s.inputGroupFull}><label css={s.label} htmlFor="companyAddress">회사주소</label><input css={s.input} type="text" id="companyAddress" name="companyAddress" value={formData.companyAddress} onChange={handleChange} /></div>
                <div css={s.inputGroup}><label css={s.label} htmlFor="phoneNumber">전화번호</label><input css={s.input} type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} /></div>
                <div css={s.inputGroup}><label css={s.label} htmlFor="faxNumber">팩스번호</label><input css={s.input} type="tel" id="faxNumber" name="faxNumber" value={formData.faxNumber} onChange={handleChange} /></div>
                <div css={s.inputGroup}><label css={s.label} htmlFor="contactPerson">담당자</label><input css={s.input} type="text" id="contactPerson" name="contactPerson" value={formData.contactPerson} onChange={handleChange} /></div>
                <div css={s.inputGroup}><label css={s.label} htmlFor="contactNumber">연락처</label><input css={s.input} type="tel" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} /></div>
                <div css={s.inputGroupFull}><label css={s.label} htmlFor="email">E-mail</label><input css={s.input} type="email" id="email" name="email" value={formData.email} onChange={handleChange} /></div>
            </div>
          </section>

          <section ref={section2Ref} css={s.section}>
              <h2 css={s.sectionTitle}>2. 모집 요강</h2>
              <div css={s.grid}>
                  {/* ... 폼 필드들 ... */}
                  <div css={s.inputGroup}><label css={s.label} htmlFor="jobType">모집직종</label><input css={s.input} type="text" id="jobType" name="jobType" value={formData.jobType} onChange={handleChange} required /></div>
                  <div css={s.inputGroup}><label css={s.label} htmlFor="numRecruits">모집인원</label><input css={s.input} type="number" id="numRecruits" name="numRecruits" value={formData.numRecruits} onChange={handleChange} min="1" required /></div>
                  <div css={s.inputGroupFull}><label css={s.label} htmlFor="jobDescription">직무내용</label><textarea css={s.textarea} id="jobDescription" name="jobDescription" value={formData.jobDescription} onChange={handleChange} rows="3" required></textarea></div>
                  <div css={s.inputGroupFull}><label css={s.label} htmlFor="expectedWorkLocation">근무예정지</label><input css={s.input} type="text" id="expectedWorkLocation" name="expectedWorkLocation" value={formData.expectedWorkLocation} onChange={handleChange} /></div>
                  <div css={s.inputGroup}><label css={s.label} htmlFor="applicationDeadline">접수마감일</label><input css={s.input} type="date" id="applicationDeadline" name="applicationDeadline" value={formData.applicationDeadline} onChange={handleChange} /></div>
                  <div css={s.inputGroup}><label css={s.label} htmlFor="ageLimit">연령제한</label><input css={s.input} type="text" id="ageLimit" name="ageLimit" value={formData.ageLimit} onChange={handleChange} placeholder="예: 50대 미만, 무관" /></div>
                  <div css={s.inputGroup}><label css={s.label} htmlFor="educationLevel">학력</label><select css={s.select} id="educationLevel" name="educationLevel" value={formData.educationLevel} onChange={handleChange}><option value="무관">무관</option><option value="고졸">고졸</option><option value="대졸">대졸</option><option value="석사">석사</option><option value="박사">박사</option></select></div>
                  <div css={s.inputGroup}><label css={s.label} htmlFor="qualifications">자격사항</label><input css={s.input} type="text" id="qualifications" name="qualifications" value={formData.qualifications} onChange={handleChange} placeholder="예: 보일러 또는 공조냉동" /></div>
                  <div css={s.inputGroupFull}><label css={s.label} htmlFor="equipmentUsed">사용장비</label><input css={s.select} type="text" id="equipmentUsed" name="equipmentUsed" value={formData.equipmentUsed} onChange={handleChange} /></div>
                  <div css={s.inputGroup}><label css={s.label} htmlFor="employmentType">고용형태</label><select css={s.select} id="employmentType" name="employmentType" value={formData.employmentType} onChange={handleChange}><option value="계약직">계약직</option><option value="정규직">정규직</option><option value="인턴">인턴</option></select></div>
                  <div css={s.inputGroup}><label css={s.label} htmlFor="probationPeriod">수습기간</label><input css={s.input} type="text" id="probationPeriod" name="probationPeriod" value={formData.probationPeriod} onChange={handleChange} placeholder="예: 3개월, 없음" /></div>
              </div>
          </section>

          <section ref={section3Ref} css={s.section}>
              <h2 css={s.sectionTitle}>3. 근무조건</h2>
              <div css={s.grid}>
                  {/* ... 폼 필드들 ... */}
                  <div css={s.inputGroup}><label css={s.label} htmlFor="salaryConditionType">급여조건</label><div css={s.salaryInputGroup}><select css={s.select} id="salaryConditionType" name="salaryConditionType" value={formData.salaryConditionType} onChange={handleChange}><option value="시급">시급</option><option value="월급">월급</option><option value="연봉">연봉</option><option value="면접후결정">면접 후 결정</option></select><input css={s.input} type="number" id="salaryAmount" name="salaryAmount" value={formData.salaryAmount} onChange={handleChange} placeholder="금액" min="0" disabled={formData.salaryConditionType === '면접후결정'} />{formData.salaryConditionType !== '면접후결정' && <span css={s.unit}>원</span>}</div></div>
                  <div css={s.inputGroup}><label css={s.label} htmlFor="bonus">상여금</label><input css={s.input} type="text" id="bonus" name="bonus" value={formData.bonus} onChange={handleChange} placeholder="예: 없음, 연 1회" /></div>
                  <div css={s.inputGroup}><label css={s.label} htmlFor="workingHours">근무시간</label><input css={s.input} type="text" id="workingHours" name="workingHours" value={formData.workingHours} onChange={handleChange} placeholder="예: 9시-6시, 주 5일" /></div>
                  <div css={s.inputGroup}><label css={s.label} htmlFor="overtime">잔업</label><input css={s.input} type="text" id="overtime" name="overtime" value={formData.overtime} onChange={handleChange} placeholder="예: 없음, 월 10시간 이내" /></div>
                  <div css={s.inputGroupFull}><label css={s.label}>4대보험가입</label><div css={s.checkboxGroup}><label css={s.checkboxLabel}><input type="checkbox" name="fourMajorInsurances.nationalPension" checked={formData.fourMajorInsurances.nationalPension} onChange={handleChange} /> 국민연금</label><label css={s.checkboxLabel}><input type="checkbox" name="fourMajorInsurances.employmentInsurance" checked={formData.fourMajorInsurances.employmentInsurance} onChange={handleChange} /> 고용보험</label><label css={s.checkboxLabel}><input type="checkbox" name="fourMajorInsurances.industrialAccidentInsurance" checked={formData.fourMajorInsurances.industrialAccidentInsurance} onChange={handleChange} /> 산재보험</label><label css={s.checkboxLabel}><input type="checkbox" name="fourMajorInsurances.healthInsurance" checked={formData.fourMajorInsurances.healthInsurance} onChange={handleChange} /> 건강보험</label></div></div>
                  <div css={s.inputGroupFull}><label css={s.label}>복리후생</label><div css={s.checkboxGroup}><label css={s.checkboxLabel}><input type="checkbox" name="benefits.dormitory" checked={formData.benefits.dormitory} onChange={handleChange} /> 기숙사</label><label css={s.checkboxLabel}><input type="checkbox" name="benefits.commuterBus" checked={formData.benefits.commuterBus} onChange={handleChange} /> 통근버스</label><label css={s.checkboxLabel}><input type="checkbox" name="benefits.mealProvision" checked={formData.benefits.mealProvision} onChange={handleChange} /> 중식제공</label><label css={s.checkboxLabel}><input type="checkbox" name="benefits.severancePay" checked={formData.benefits.severancePay} onChange={handleChange} /> 퇴직금</label><label css={s.checkboxLabel}><input type="checkbox" name="benefits.scholarship" checked={formData.benefits.scholarship} onChange={handleChange} /> 학자금</label><label css={s.checkboxLabel}><input type="checkbox" name="benefits.congratulatoryCondolence" checked={formData.benefits.congratulatoryCondolence} onChange={handleChange} /> 경조사</label></div></div>
              </div>
          </section>

          <section ref={section4Ref} css={s.section}>
              <h2 css={s.sectionTitle}>4. 기타 및 접수 안내</h2>
              <div css={s.inputGroupFull}>
                  <label css={s.label} htmlFor="applicationEmail">구인등록 E-mail</label>
                  <input css={s.input} type="email" id="applicationEmail" name="applicationEmail" value={formData.applicationEmail} onChange={handleChange} />
                  <p css={s.text}>*구인신청서 작성 후 E-mail로 사업자등록증 사본과 같이 보내주시면 구인등록이 가능합니다.</p>
                  <p css={s.text}>(추후 NCS기반 교과과정 개발을 위한 사업현장 수요조사서 작성관련으로 담당자분께 연락드리겠습니다.)</p>
              </div>
              <div css={s.inputGroup}>
                  <label css={s.label} htmlFor="vocationalSchoolContactPerson">학원 담당자</label>
                  <input css={s.input} type="text" id="vocationalSchoolContactPerson" name="vocationalSchoolContactPerson" value={formData.vocationalSchoolContactPerson} onChange={handleChange} />
              </div>
              <div css={s.inputGroup}>
                  <label css={s.label} htmlFor="vocationalSchoolContactTel">학원 담당자 연락처</label>
                  <input css={s.input} type="tel" id="vocationalSchoolContactTel" name="vocationalSchoolContactTel" value={formData.vocationalSchoolContactTel} onChange={handleChange} />
              </div>
          </section>
          
          {/* 버튼 텍스트를 동적으로 변경 */}
          <button css={s.submitButton} type="submit" disabled={isSubmitting}>
            {isSubmitting ? '저장 중...' : (isEditMode ? '수정하기' : '등록하기')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobPostingForm;
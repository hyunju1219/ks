/** @jsxImportSource @emotion/react */
import * as s from './style';
import React, { useState, useRef, useEffect } from "react"; // useEffect 추가
import { toast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { getRecruitingCourses } from "@/firebase/courseService";

// addContact 함수 (실제 구현 필요)
const addContact = async (contactData) => {
  console.log("임시 addContact 호출됨:", contactData);
  return { success: true, message: "임시 저장 성공" };
};

const ContactForm = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    selectedCourse: "", // 과정 선택 상태 추가
    applicationPath: "", // 지원 경로 상태 추가
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [privacyCheckboxChecked, setPrivacyCheckboxChecked] = useState(false);
  const [availableCourses, setAvailableCourses] = useState([]); // 선택 가능한 과정 목록 상태

  // 지원 경로 옵션
  const applicationPathOptions = [
    "인터넷", "전단지", "현수막", "사람인", "고용지원센터", 
    "직접내방", "지인소개", "잡코리아", "기타"
  ];

  // 컴포넌트 마운트 시 과정 목록 불러오기
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const coursesData = await getRecruitingCourses(); // 모집중인 과정만 가져오도록 가정
        // courseName만 추출하여 목록으로 만듦
        setAvailableCourses(coursesData.map(course => course.courseName));
      } catch (error) {
        console.error("과정 목록을 불러오는데 실패했습니다:", error);
        // 오류 발생 시 기본 옵션 또는 빈 배열 설정
        setAvailableCourses(["과정 로딩 실패"]);
      }
    };
    fetchCourses();
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePrivacyAgreement = () => {
    if (privacyCheckboxChecked) {
      setAgreedToPrivacy(true);
    } else {
      toast({
        title: "동의 필요",
        description: "개인정보 수집 및 이용에 동의해주세요.",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 필수 필드 유효성 검사
    if (!formData.selectedCourse) {
      toast({ title: "선택 필요", description: "문의할 과정을 선택해주세요.", variant: "destructive" });
      return;
    }
    if (!formData.applicationPath) {
      toast({ title: "선택 필요", description: "지원 경로를 선택해주세요.", variant: "destructive" });
      return;
    }

    setLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS 환경 변수가 설정되지 않았습니다.");
      toast({ title: "설정 오류", description: "이메일 서비스가 올바르게 설정되지 않았습니다.", variant: "destructive" });
      setLoading(false);
      return;
    }

    // 이메일 템플릿에 selectedCourse와 applicationPath도 포함
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      selectedCourse: formData.selectedCourse,
      applicationPath: formData.applicationPath,
      subject: formData.subject,
      message: formData.message,
      to_email: "kstg355@naver.com"
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(async (result) => {
        console.log("이메일 전송 성공:", result.text);
        try {
          // 저장할 데이터에도 추가된 필드 포함
          await addContact({ ...formData, createdAt: new Date() });
          console.log("문의 내용 저장 성공");
        } catch (error) {
          console.error("문의 내용 저장 중 예외 발생:", error);
        }
        setLoading(false);
        toast({ title: "문의가 접수되었습니다.", description: "빠른 시일 내에 답변 드리겠습니다." });
        setFormData({ name: "", email: "", phone: "", selectedCourse: "", applicationPath: "", subject: "", message: "" });
        // setAgreedToPrivacy(false);
        // setPrivacyCheckboxChecked(false);
      })
      .catch((error) => {
        console.error("이메일 전송 실패:", error);
        setLoading(false);
        toast({ title: "문의 접수 실패", description: "문의 전송 중 오류가 발생했습니다.", variant: "destructive" });
      });
  };

  const privacyPolicyText = `
개인정보처리방침

금성기술직업전문학교는 정보통신서비스 제공자가 준수하여야 할 관련 법규상의 개인정보보호 규정을 준수하며, 관련 법령에 의거한 개인정보취급방침을 정하여 이용자 권익 보호에 최선을 다하고 있습니다. 회사의 개인정보취급방침은 다음과 같은 내용을 담고 있습니다.

1. 수집하는 개인정보 항목 및 수집방법
2. 개인정보 수집 및 이용목적
3. 수집한 개인정보의 보유 및 이용기간
4. 동의를 거부할 권리가 있다는 사실과 동의 거부에 따른 불이익 내용
5. 개인정보에 관한 민원서비스

1. 수집하는 개인정보 항목 및 수집방법

회사는 상담 서비스를 위해 아래와 같은 개인정보를 수집하고 있습니다.

가. 수집항목 : 이름, 전화번호, 이메일
나. 개인정보 수집방법 : 홈페이지(상담게시판)

2. 개인정보 수집 및 이용목적

회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.

가. 과정문의에 대한 전화 및 이메일 상담
나. 마케팅 및 광고에 활용(이멘트 등 광고성 정보 전달)

3. 수집한 개인정보의 보유 및 이용기간

회사는 모든 검토가 완료된 후 5년간 이용자의 조회를 위하여 보관하며, 이 후 해당정보를 지체없이 파기합니다.

4. 동의를 거부할 권리가 있다는 사실과 동의 거부에 따른 불이익 내용

이용자는 회사 홈페이지에서 수집하는 개인정보에 대해 동의를 거부할 권리가 있으며, 동의 거부 시에는 온라인 상담 서비스가 일부 제한 됩니다.

5. 개인정보에 관한 민원서비스

회사는 고객의 개인정보를 보호하고 개인정보와 관련된 불만을 처리하기 위하여 아래와 같이 관련 부서 및 개인정보관리책임자를 지정하고 있습니다.

가. 성명/직위 : 박영미/실장
나. 소속 : 금성기술직업전문학교 행정부
다. 전화번호 : 051-806-2200 / 051-864-0535
라. E-mail : kstg35@naver.com

`;

  if (!agreedToPrivacy) {
    return (
      <div css={s.PrivacyContainer}>
        <h2 css={s.PrivacyTitle}>개인정보보호정책</h2>
        <div css={s.PrivacyContentBox}>
          <pre css={s.PrivacyText}>{privacyPolicyText}</pre>
        </div>
        <div css={s.FormPrivacy}>
          <input
            css={s.Checkbox}
            type="checkbox"
            id="privacyInitialAgree"
            checked={privacyCheckboxChecked}
            onChange={(e) => setPrivacyCheckboxChecked(e.target.checked)}
          />
          <label css={s.PrivacyLabel} htmlFor="privacyInitialAgree">
            개인정보 수집,이용에 동의합니다.
          </label>
        </div>
        <button css={s.AgreeButton} onClick={handlePrivacyAgreement}>
          동의합니다.
        </button>
      </div>
    );
  }

  return (
    <div css={s.FormContainer}>
      <form ref={formRef} id="contact-form" css={s.Form} onSubmit={handleSubmit}>
        <div css={s.FormRow}>
          <div css={s.FormGroup}>
            <label css={s.Label}>이름 *</label>
            <input css={s.Input} type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="홍길동" />
          </div>
          <div css={s.FormGroup}>
            <label css={s.Label}>이메일 *</label>
            <input css={s.Input} type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="example@email.com" />
          </div>
        </div>

        <div css={s.FormRow}>
          <div css={s.FormGroup}>
            <label css={s.Label}>연락처 *</label>
            <input css={s.Input} type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="010-1234-5678" />
          </div>
          {/* 과정 선택 Select Box */}
          <div css={s.FormGroup}>
            <label css={s.Label}>문의 과정 *</label>
            <select
              css={s.Select} // 새로운 Select 스타일 적용
              name="selectedCourse"
              value={formData.selectedCourse}
              onChange={handleChange}
              required
            >
              <option value="">과정을 선택해주세요</option>
              {availableCourses.length > 0 ? (
                availableCourses.map((courseName, index) => (
                  <option key={index} value={courseName}>
                    {courseName}
                  </option>
                ))
              ) : (
                <option value="" disabled>과정 정보를 불러오는 중...</option>
              )}
               <option value="전체">기타</option>
            </select>
          </div>
        </div>

        {/* 지원 경로 Radio Buttons */}
        <div css={s.FormGroup}>
          <label css={s.Label}>지원 경로 *</label>
          <div css={s.RadioGroupContainer}> {/* 라디오 버튼 그룹을 감싸는 컨테이너 */}
            {applicationPathOptions.map((option, index) => (
              <label key={index} css={s.RadioLabel}>
                <input
                  type="radio"
                  name="applicationPath"
                  value={option}
                  checked={formData.applicationPath === option}
                  onChange={handleChange}
                  required
                  css={s.RadioInput}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div css={s.FormGroup}>
          <label css={s.Label}>문의 제목 *</label>
          <input css={s.Input} type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="문의 제목을 입력해주세요" />
        </div>

        <div css={s.FormGroup}>
          <label css={s.Label}>문의 내용 *</label>
          <textarea css={s.Textarea} name="message" value={formData.message} onChange={handleChange} required placeholder="문의 내용을 상세히 적어주세요" rows={5} />
        </div>

        <button css={s.SubmitButton} type="submit" disabled={loading}>
          {loading ? "제출 중..." : "문의하기"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
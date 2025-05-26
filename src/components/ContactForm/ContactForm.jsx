/** @jsxImportSource @emotion/react */
import * as s from './style';

import React, { useState, useRef } from "react";
import { toast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import * as styles from "./style";
import { addContact } from "../../utils/mockData";

const ContactForm = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // 디버깅을 위한 로그 추가
    console.log("이메일 전송 시도...");

    // 환경 변수에서 서비스 ID와 템플릿 ID 가져오기
    const serviceId = "service_wb9vm4o";
    const templateId = "template_pda39mw";

    console.log(`서비스 ID: ${serviceId}, 템플릿 ID: ${templateId} 사용`);

    // 문의 양식을 객체로 구성하여 전송
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      to_email: "guswn11223@gmail.com",
    };

    console.log("전송할 파라미터:", templateParams);

    // 개별 파라미터로 전송 시도
    emailjs
      .send(serviceId, templateId, templateParams, "BdP_qT22_UqWtCAof")
      .then(async (result) => {
        console.log("이메일 전송 성공:", result.text);
        
        // 데이터 저장
        try {
          console.log("문의 내용 저장 시도...");
          const contactData = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message
          };
          console.log("저장할 데이터:", contactData);
          
          const contactResult = await addContact(contactData);
          console.log("저장 결과:", contactResult);
          
          if (contactResult.success) {
            console.log("문의 내용 저장 성공");
          } else {
            console.error("저장 실패 응답:", contactResult);
          }
        } catch (error) {
          console.error("문의 내용 저장 중 예외 발생:", error);
        }
        
        setLoading(false);
        toast({
          title: "문의가 접수되었습니다.",
          description:
            "guswn11223@gmail.com으로 내용이 전송되었습니다. 빠른 시일 내에 답변 드리겠습니다.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("이메일 전송 실패:", error);
        console.error("에러 세부 정보:", JSON.stringify(error, null, 2));
        setLoading(false);
        toast({
          title: "문의 접수 실패",
          description:
            "문의 전송 중 오류가 발생했습니다. 에러 정보를 콘솔에서 확인해주세요.",
          variant: "destructive",
        });
      });
  };

  return (
    <div css={s.FormContainer}>
      <form ref={formRef} id="contact-form" css={s.Form} onSubmit={handleSubmit}>
        <div css={s.FormRow}>
          <div css={s.FormGroup}>
            <label css={s.Label}>이름 *</label>
            <input
              css={s.Input}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="홍길동"
            />
          </div>

          <div css={s.FormGroup}>
            <label css={s.Label}>이메일 *</label>
            <input
              css={s.Input}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="example@email.com"
            />
          </div>
        </div>

        <div css={s.FormRow}>
          <div css={s.FormGroup}>
            <label css={s.Label}>연락처 *</label>
            <input
              css={s.Input}
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="010-1234-5678"
            />
          </div>

          <div css={s.FormGroup}>
            <label css={s.Label}>문의 제목 *</label>
            <input
              css={s.Input}
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="문의 제목을 입력해주세요"
            />
          </div>
        </div>

        <div css={s.FormGroup}>
          <label css={s.Label}>문의 내용 *</label>
          <textarea
            css={s.Textarea}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="문의 내용을 상세히 적어주세요"
            rows={5}
          />
        </div>

        <div css={s.FormPrivacy}>
          <input css={s.Checkbox} type="checkbox" id="privacy" required />
          <label css={s.PrivacyLabel} htmlFor="privacy">
            개인정보 수집 및 이용에 동의합니다.
          </label>
        </div>

        <button css={s.SubmitButton} type="submit" disabled={loading}>
          {loading ? "제출 중..." : "문의하기"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

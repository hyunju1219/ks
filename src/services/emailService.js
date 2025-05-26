import emailjs from '@emailjs/browser';

// EmailJS 초기화
// 참고: 실제 서비스 ID, 템플릿 ID, 사용자 ID는 EmailJS 계정에서 생성해야 합니다.
export const sendEmail = (formData) => {
  const templateParams = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    subject: formData.subject,
    message: formData.message,
    to_email: 'guswn11223@gmail.com', // 수신할 이메일 주소
  };

  // PUBLIC_KEY는 EmailJS 대시보드에서 확인할 수 있습니다.
  // SERVICE_ID와 TEMPLATE_ID는 EmailJS 계정에서 생성해야 합니다.
  return emailjs.send(
    'service_id', // 실제 서비스 ID로 교체해야 합니다
    'template_id', // 실제 템플릿 ID로 교체해야 합니다
    templateParams,
    'public_key' // 실제 PUBLIC_KEY로 교체해야 합니다
  );
};

// EmailJS 초기화 함수 - 앱 시작 시 호출됩니다
export const initEmailJS = (publicKey) => {
  emailjs.init(publicKey);
};
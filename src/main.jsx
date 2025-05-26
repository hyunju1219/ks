import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import emailjs from '@emailjs/browser';

// EmailJS 초기화
// 환경 변수에서 공개키 가져오기
const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
if (emailjsPublicKey) {
  emailjs.init(emailjsPublicKey);
  console.log('EmailJS가 초기화되었습니다.');
} else {
  console.warn('EmailJS 공개키가 설정되지 않았습니다. .env 파일을 확인하세요.');
}

createRoot(document.getElementById("root")).render(<App />);
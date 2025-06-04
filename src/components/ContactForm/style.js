// style.js
import { css } from '@emotion/react';

// --- 기존 스타일 (FormContainer, Form, FormRow 등) ---
export const FormContainer = css`
  max-width: 768px;
  margin: 2rem auto; /* 상하 마진 추가 */
  padding: 2rem 1rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

export const Form = css`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormRow = css`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 1rem;
  }
`;

export const FormGroup = css`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Label = css`
  font-weight: 600; /* 필수 표시와 일관성을 위해 약간 더 두껍게 */
  margin-bottom: 0.5rem;
  color: #374151;
  display: flex; /* 필수 표시를 위해 */
  align-items: center;
`;

export const Input = css`
  padding: 0.75rem;
  border: 1px solid #d1d5db; // Tailwind gray-300
  border-radius: 0.375rem; // rounded-md
  font-size: 1rem;
  color: #1f2937; // Tailwind gray-800
  background-color: #f9fafb; // Tailwind gray-50

  &:focus {
    outline: none;
    border-color: #2563eb; // Tailwind blue-600
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
  }
`;

export const Textarea = css`
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px; /* 최소 높이 설정 */
  color: #1f2937;
  background-color: #f9fafb;
  
  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
  }
`;

export const FormPrivacy = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem; /* 위쪽 마진 추가 */
`;

export const Checkbox = css`
  width: 1.1rem; /* 크기 미세 조정 */
  height: 1.1rem;
  cursor: pointer;
  accent-color: #2563eb; /* 체크 시 색상 (브라우저 지원 확인 필요) */
`;

export const PrivacyLabel = css`
  font-size: 0.875rem;
  color: #4b5563; // Tailwind gray-600
  cursor: pointer;
  user-select: none; /* 텍스트 선택 방지 */
`;

export const SubmitButton = css`
  background-color: #0056b3; // Tailwind blue-600
  color: white;
  font-weight: 600; /* 글꼴 두께 조정 */
  padding: 0.75rem 1.5rem; /* 패딩 조정 */
  border: none;
  border-radius: 0.375rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  
  &:hover:not(:disabled) {
    background-color: rgb(0, 76, 158); ; // Tailwind blue-700
  }
  
  &:disabled {
    background-color: #9ca3af; // Tailwind gray-400
    cursor: not-allowed;
  }
`;

// --- 개인정보처리방침 화면을 위한 새로운 스타일 ---
export const PrivacyContainer = css`
  max-width: 768px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #fff;
  border: 1px solid #e5e7eb; // Tailwind gray-200
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const PrivacyTitle = css`
  font-size: 1.5rem; // 24px
  font-weight: 600;
  color: #111827; // Tailwind gray-900
  text-align: center;
  margin-bottom: 0.5rem;
`;

export const PrivacyContentBox = css`
  border: 1px solid #d1d5db; // Tailwind gray-300
  border-radius: 0.375rem;
  padding: 1rem;
  height: 300px; /* 고정 높이 */
  overflow-y: auto; /* 내용이 넘칠 경우 스크롤 */
  background-color: #f9fafb; // Tailwind gray-50
  line-height: 1.6;
  color: #374151; // Tailwind gray-700
`;

export const PrivacyText = css`
  white-space: pre-wrap; /* 줄바꿈 및 공백 유지, 자동 줄바꿈 허용 */
  font-size: 0.875rem; /* 14px */
  font-family: 'Malgun Gothic', '맑은 고딕', sans-serif; /* 가독성 좋은 폰트 */
  word-break: keep-all; /* 단어 단위 줄바꿈 (한글) */
`;

export const AgreeButton = css`
  /* SubmitButton과 유사한 스타일 적용 */
  background-color: #0056b3; // Tailwind green-600 (동의 버튼 색상 예시)
  color: white;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.375rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  align-self: center; 
  width: auto; 
  min-width: 120px; 

  &:hover {
    background-color:rgb(0, 76, 158); 
  }
`;

export const Select = css`
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 1rem;
  color: #1f2937;
  background-color: #f9fafb;
  width: 100%; /* FormGroup 안에서 꽉 차도록 */
  appearance: none; /* 기본 화살표 제거 (커스텀 화살표 추가 시) */
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007BC2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22%2F%3E%3C%2Fsvg%3E');
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 0.65em auto;

  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
  }

  option {
    color: #1f2937;
  }
`;

// --- 지원 경로 Radio Button 스타일 ---
export const RadioGroupContainer = css`
  display: flex;
  flex-wrap: wrap; /* 여러 줄로 나뉘도록 */
  gap: 0.75rem 1.5rem; /* 상하 좌우 간격 */
  padding-top: 0.25rem; /* Label과의 간격 */
`;

export const RadioLabel = css`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 0.95rem; /* 약간 작은 폰트 */
  color: #374151;
  user-select: none;
`;

export const RadioInput = css`
  margin-right: 0.5rem;
  width: 1.1rem;
  height: 1.1rem;
  cursor: pointer;
  accent-color: #2563eb; /* 선택 시 색상 (브라우저 지원 확인) */
  
  /* 커스텀 라디오 버튼 (선택 사항 - 브라우저 기본 스타일 사용 시 주석 처리) */
  /* appearance: none;
  border: 1px solid #d1d5db;
  border-radius: 50%;
  position: relative;
  &:checked {
    border-color: #2563eb;
    background-color: #2563eb;
  }
  &:checked::after {
    content: '';
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  } */
`;

export const RequiredIndicator = css`
  &::after {
    content: " *";
    color: red;
    margin-left: 0.1rem;
  }
`;
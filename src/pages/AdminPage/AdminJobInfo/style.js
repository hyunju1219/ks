// src/pages/JobPostingForm/style.js

import { css } from "@emotion/react";

// --- [추가] 전체 페이지 레이아웃 스타일 ---
export const pageLayout = css`
  display: flex;
  max-width: 1200px;
  margin: 2rem auto;
  gap: 3rem;
  padding: 0 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

// --- [추가] 사이드 내비게이션 스타일 ---
export const sideNav = css`
  flex: 0 0 220px; /* 고정 너비 */
  
  @media (max-width: 1024px) {
    flex-basis: auto;
    width: 100%;
  }

  /* 스크롤 시 화면에 고정 */
  position: sticky;
  top: 2rem;
  align-self: start;
`;

export const navTitle = css`
  font-size: 1.25rem;
  font-weight: 600;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #333;
  margin-bottom: 1rem;
`;

export const navItem = css`
  list-style: none;
  margin-bottom: 0.5rem;

  & > button {
    width: 100%;
    text-align: left;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    color: #4A5568;
    background-color: transparent;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s, transform 0.2s;

    &:hover {
      background-color: #F7FAFC;
      color: #2D3748;
      transform: translateX(5px);
    }
  }
`;

// --- [추가] 오른쪽 폼 컨테이너 스타일 ---
export const formContainer = css`
  flex: 1; /* 남은 공간 모두 차지 */
  min-width: 0; /* flex item이 부모를 넘어가지 않도록 */
`;


// --- 기존 스타일 (변경 없음) ---
export const form = css`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

export const title = css`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2.5rem;
  color: #2D3748;
`;

export const section = css`
  margin-bottom: 2.5rem;
  padding-top: 1rem; /* for scrollIntoView offset */
`;

export const sectionTitle = css`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #E2E8F0;
  color: #1A202C;
`;

export const grid = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const inputGroup = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const inputGroupFull = css`
  ${inputGroup};
  grid-column: 1 / -1;
`;

export const label = css`
  font-weight: 600;
  color: #4A5568;
`;

export const input = css`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #CBD5E0;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: #4299E1;
    box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.2);
  }
  
  &:disabled {
    background-color: #F7FAFC;
    cursor: not-allowed;
  }
`;

export const textarea = css`
  ${input};
  resize: vertical;
  min-height: 80px;
`;

export const select = css`
  ${input};
  appearance: none;
  background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>');
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1.25em 1.25em;
  padding-right: 2.5rem; /* 화살표 아이콘 공간 확보 */
`;

export const salaryInputGroup = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  & > select {
    flex: 0 0 150px;
  }
  & > input {
    flex: 1;
  }
`;

export const unit = css`
  font-size: 1rem;
  color: #4A5568;
`;

export const note = css`
  font-size: 0.875rem;
  color: #718096;
  margin-top: 0.5rem;
`;

export const checkboxGroup = css`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 0.5rem 0;
`;

export const checkboxLabel = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
`;

export const text = css`
  font-size: 0.9rem;
  color: #718096;
  margin: 0.5rem 0;
  line-height: 1.5;
`;

export const submitButton = css`
  display: block;
  width: 100%;
  margin-top: 2.5rem;
  padding: 1rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: #fff;
  background-color: #3182CE;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2B6CB0;
  }
`;

export const errorText = css`
  color: #E53E3E;
  background-color: #FFF5F5;
  border: 1px solid #FC8181;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;
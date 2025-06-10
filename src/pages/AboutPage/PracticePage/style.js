import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
`;
export const sectionTitle = css`
  font-size: 1.875rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 3rem;
    height: 0.25rem;
    background-color: #0056b3;
    margin: 1rem auto 0;
  }
`;

export const facilitiesIntro = css`
  font-size: 1.125rem;
  color: #4b5563;
  margin-bottom: 3rem;
  text-align: center;
  line-height: 1.6;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

export const facilitiesGrid = css`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const facilityCard = css`
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background-color: white;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-0.25rem);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`;

export const facilityImageContainer = css`
  height: 220px;
  overflow: hidden;
`;

export const facilityImage = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const facilityContent = css`
  padding: 1.5rem;
`;

export const facilityTitle = css`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  text-align: center;
`;

export const detailContainer = css`
  max-width: 1200px;
  margin: 1rem auto;

  @media (max-width: 768px) {
    margin: 1.5rem auto;
    padding: 1.5rem;
  }
`;

export const backButton = css`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
  border: 1px solid #d1d5db;
  color: #4b5563;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
  margin-bottom: 2rem;

  &:hover {
    background-color: #f3f4f6;
    color: #1f2937;
  }
`;

export const detailHeader = css`
  padding-bottom: 1.5rem;
  margin-bottom: 2rem;
`;

export const detailTitle = css`
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const detailImage = css`
  width: 80%;
  height: auto;
  margin: 0 auto 2rem;
  max-height: 500px;
  object-fit: cover;
`;

export const contentGrid = css`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const mainContent = css`
  // 왼쪽 컨텐츠 영역
`;

export const sidebar = css`
  // 오른쪽 사이드바 영역
  background-color: #f9fafb;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  align-self: start; // 그리드 아이템이 위쪽에 붙도록
`;

export const description = css`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #374151;
  white-space: pre-wrap; // 줄바꿈과 공백을 유지
`;

export const detailSectionTitle = css`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e5e7eb;
`;

export const subjectsList = css`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
`;

export const subjectItem = css`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #4b5563;
  margin-bottom: 0.75rem;

  &::before {
    content: '✓';
    color: #0056b3; // 기존 스타일의 accent color
    font-weight: bold;
    font-size: 1.1rem;
    margin-right: 0.75rem;
  }
`;

export const detailInfo = css`
  font-size: 1rem;
  color: #4b5563;
  margin-bottom: 0.5rem;

  strong {
    font-weight: 600;
    color: #1f2937;
    margin-right: 0.5rem;
  }
`;
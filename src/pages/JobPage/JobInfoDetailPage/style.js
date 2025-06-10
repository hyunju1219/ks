// src/pages/JobInfoDetailPage/style.js

import { css } from '@emotion/react';

export const layout = css`
  /* 페이지 전체 레이아웃 */
`;

export const container = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

// [추가] 상세 정보 컨테이너 스타일
export const postContainer = css`
  max-width: 900px;
  margin: 2rem auto;
  padding: 3rem;
  background-color: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  position: relative;
`;

export const adminButtons = css`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  display: flex;
  gap: 0.5rem;
`;

export const mainHeader = css`
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #111827;
`;

export const companyName = css`
  font-size: 1.5rem;
  font-weight: 500;
  color: #4b5563;
  margin-bottom: 0.5rem;
`;

export const jobTitle = css`
  font-size: 2rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
`;

export const detailSection = css`
  margin-bottom: 3rem;
`;

export const detailSectionTitle = css`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
`;

export const detailGrid = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const detailItem = css`
  display: flex;
  gap: 1rem;
  padding: 0.5rem 0;
  align-items: baseline;
`;

export const detailItemFull = css`
  ${detailItem};
  grid-column: 1 / -1;
`;

export const itemLabel = css`
  flex-shrink: 0;
  width: 100px;
  font-weight: 600;
  color: #4b5563;
  position: relative;
  
  &::after {
    content: ':';
    position: absolute;
    right: 0;
  }
`;

export const benefitsGrid = css`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const benefitItem = css`
  background-color: #f3f4f6;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-size: 0.95rem;
  font-weight: 500;
  color: #374151;
`;

export const loadingContainer = css`
  text-align: center;
  padding: 4rem;
  font-size: 1.2rem;
  color: #6b7280;
`;

export const errorContainer = css`
  text-align: center;
  padding: 4rem;
  font-size: 1.2rem;
  color: #ef4444;
`;
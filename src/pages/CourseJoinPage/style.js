import { css } from '@emotion/react';

// --- Page Container & Layout ---
export const pageContainer = css`// 전체 페이지 배경색 (선택 사항)
`;

export const contentWrapper = css`
  max-width: 1152px; // 6xl
  margin-left: auto;
  margin-right: auto;
  padding: 1.5rem; // p-6
  background-color: white;
`;

// --- Header Info ---
export const headerInfo = css`
  margin-bottom: 1.5rem; // mb-6
`;

export const totalCount = css`
  display: flex;
  align-items: center;
  color: #4b5563; // text-gray-600
  font-size: 0.875rem; // text-sm
  margin-bottom: 1rem; // mb-4
`;

export const totalCountIcon = css`
  margin-right: 0.5rem; // mr-2
`;

// --- Table Styles ---
export const tableHeader = css`
  background-color: #f9fafb; // bg-gray-50
  border-top: 2px solid #d1d5db; // border-t-2 border-gray-300
`;

export const tableGrid = css`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 1rem; // gap-4
  padding: 1rem; // p-4
  text-align: center;
`;

export const tableHeaderText = css`
  font-weight: 600; // font-semibold
  color: #374151; // text-gray-700
`;

export const courseListContainer = css`
  border: 1px solid #e5e7eb; // border border-gray-200
`;

export const courseRow = (isEven) => css`
  ${tableGrid}; // 기본 그리드 레이아웃 상속
  border-bottom: 1px solid #e5e7eb; // border-b border-gray-200
  align-items: center; // items-center
  background-color: ${isEven ? 'white' : '#f9fafb'}; // bg-white or bg-gray-50
`;

// --- Course Item Details ---
export const courseInfoCell = css`
  grid-column: span 12 / span 12; // col-span-12
  display: flex;
  flex-direction: column; // 모바일에서는 수직 정렬
  gap: 1rem; // gap-4

  @media (min-width: 640px) { // sm
    flex-direction: row; // 작은 화면 이상에서는 수평 정렬
  }
  @media (min-width: 768px) { // md
    grid-column: span 5 / span 5;
  }
  @media (min-width: 1024px) { // lg
    grid-column: span 6 / span 6;
  }
`;

export const courseImageContainer = css`
  flex-shrink: 0;
  width: 100%; // 모바일에서 전체 너비
  height: 8rem; // h-32 (128px) 모바일 이미지 높이

  @media (min-width: 640px) { // sm
    width: 6rem; // w-24 (96px)
    height: 4rem; // h-16 (64px)
  }
`;

export const courseImage = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.25rem; // rounded
  border: 1px solid #e5e7eb; // border
`;

export const courseTextDetails = css`

`;

export const courseTitle = css`
  font-weight: 600; // font-semibold
  color: #1f2937; // text-gray-800
  margin-bottom: 0.25rem; // mb-1
  line-height: 1.375; // leading-tight
  font-size: 1rem; // text-base

  @media (min-width: 640px) { // sm
    margin-bottom: 0.5rem; // sm:mb-2
  }
  @media (min-width: 768px) { // md
    font-size: 1.125rem; // md:text-lg
  }
`;

export const courseMetaInfo = css`
  // space-y-1 Tailwind은 직접적인 CSS 변환이 어려우므로, 자식 요소에 margin-bottom을 주거나 gap을 사용합니다.
  display: flex;
  flex-direction: column;
  gap: 0.25rem; // space-y-1 대체
  font-size: 0.75rem; // text-xs
  color: #4b5563; // text-gray-600

  @media (min-width: 640px) { // sm
    font-size: 0.875rem; // sm:text-sm
  }
`;

export const metaItem = css`
  display: flex;
`;

export const metaLabel = css`
    padding-right: 0.5rem;
    font-weight: 500; // font-medium
`;

export const periodTimeCell = css`
  grid-column: span 12 / span 12;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media (min-width: 768px) { // md
    grid-column: span 4 / span 4;
    text-align: left;
  }
  @media (min-width: 1024px) { // lg
    grid-column: span 3 / span 3;
  }
`;

export const periodText = css`
  font-size: 0.75rem; // text-xs
  font-weight: 500; // font-medium
  color: #1f2937; // text-gray-800
  text-align: center;

  @media (min-width: 640px) { // sm
    font-size: 0.875rem; // sm:text-sm
  }
`;

export const timeText = css`
  font-size: 0.75rem; // text-xs
  color: #4b5563; // text-gray-600

  @media (min-width: 640px) { // sm
    font-size: 0.875rem; // sm:text-sm
  }
`;

export const applyButtonCell = css`
  grid-column: span 12 / span 12;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem; // mt-2

  @media (min-width: 768px) { // md
    grid-column: span 3 / span 3;
    margin-top: 0; // md:mt-0
  }
`;

export const applyButton = (isRecruiting) => css`
  padding: 0.375rem 0.75rem; // px-3 py-1.5
  border-radius: 0.25rem; // rounded
  color: white;
  font-weight: 500; // font-medium
  font-size: 0.75rem; // text-xs
  transition: background-color 0.2s ease-in-out;
  background-color: ${isRecruiting ? '#0056b3' : '#9ca3af'}; // bg-blue-500 or bg-gray-400
  cursor: ${isRecruiting ? 'pointer' : 'not-allowed'};

  &:hover {
    background-color: ${isRecruiting ? 'rgb(2, 69, 141)' : '#9ca3af'}; // hover:bg-blue-600 or no change
  }

  @media (min-width: 640px) { // sm
    padding: 0.5rem 1rem; // sm:px-4 sm:py-2
    font-size: 0.875rem; // sm:text-sm
  }
`;

// --- Pagination ---
export const paginationContainer = css`
  margin-top: 1.5rem; // mt-6
  display: flex;
  justify-content: center;
`;

export const paginationInner = css`
  display: flex;
  gap: 0.5rem; // space-x-2
`;

export const paginationButton = (isActive) => css`
  padding: 0.25rem 0.75rem; // px-3 py-1
  border: 1px solid #d1d5db; // border border-gray-300
  border-radius: 0.25rem; // rounded
  font-size: 0.875rem; // text-sm
  transition: background-color 0.2s ease-in-out;
  
  background-color: ${isActive ? '#0056b3' : 'transparent'}; // bg-blue-500 or transparent
  color: ${isActive ? 'white' : '#374151'};

  &:hover {
    background-color: ${isActive ? 'rgb(2, 69, 141)' : '#f9fafb'}; // hover:bg-gray-50
  }
`;

// --- Loading & Empty State ---
export const loadingContainer = css`
  ${contentWrapper}; // contentWrapper 스타일 상속
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export const emptyStateContainer = css`
  padding: 2.5rem; // p-10
  text-align: center;
  color: #6b7280; // text-gray-500
`;
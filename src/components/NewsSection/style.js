import { css } from '@emotion/react';

export const SectionContainer = css`
  padding: 4rem 0;
  /* background-color: rgba(77, 130, 197, 0.1); */
`;

export const SectionInner = css`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const SectionHeader = css`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const SectionTitle = css`
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const ViewAllLink = css`
  display: flex;
  align-items: center;
  color: white;
  font-weight: 500;
  transition: color 0.3s;
  cursor: pointer;

  svg {
    margin-left: 0.25rem;
  }

  &:hover {
    color: #003d81;
  }
`;

export const NewsTable = css`
  width: 100%;
  background-color: transparent;
  overflow: hidden;
  border-collapse: collapse;
  
`;

export const TableHeaderDate = css`
  display: none;

  @media (min-width: 768px) {
    display: table-cell;
  }

  text-align: center;
  padding: 0.75rem 1rem;
  font-weight: 600;
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
  width: 8rem;
`;

// 테이블 데이터 셀 공통 스타일
export const TableCell = css`
  padding: 0.75rem 0.5rem;
  border-bottom: 1px solid #f3f4f6; /* 옅은 구분선 */
  vertical-align: middle; /* 수직 중앙 정렬 */
`;

export const TableCellLast = css`
  padding: 0.75rem 1rem;
  border-bottom: none;
`;

export const TableCellDate = css`
  display: none;

  @media (min-width: 768px) {
    display: table-cell;
  }

  padding: 0.75rem 1rem;
  border-bottom: 1px solid #e5e7eb;
  text-align: center;
  color: #6b7280;
`;

export const TableCellDateLast = css`
  display: none;

  @media (min-width: 768px) {
    display: table-cell;
  }

  padding: 0.75rem 1rem;
  border-bottom: none;
  text-align: center;
  color: #6b7280;
`;

export const NewsLink = css`
  transition: color 0.3s;
  cursor: pointer;
  color: white;
  &:hover {
    color:rgb(88, 88, 88);
  }
`;

export const NewBadge = css`
  display: inline-block;
  margin-left: 0.5rem;
  background-color: #0056b3;
  color: white;
  font-size: 0.75rem;
  padding: 0.125rem 0.5rem;
  border-radius: 0.25rem;
`;





// 테이블 헤더 셀 공통 스타일
export const TableHeaderCell = css`
  padding: 0.75rem 0.5rem;
  text-align: left;
  border-bottom: 2px solid #e5e7eb; /* 구분선 */
  font-weight: 600;
  color: #374151;
  font-size: 0.9rem;
`;

// 제목 헤더 셀 스타일 (너비 조절 등)
export const TitleHeaderCell = css`
  width: 75%; /* 제목이 길 수 있으므로 너비 확보 */
`;

// 날짜 헤더 셀 스타일
export const DateHeaderCell = css`
  width: 25%;
  text-align: center; /* 날짜는 중앙 정렬 */
`;




// 제목 셀 스타일
export const TitleCell = css`
width: 80%;
  /* 추가 스타일이 필요하면 여기에 작성 */
`;

// 날짜 셀 스타일
export const DateCell = css`
  text-align: center; /* 날짜 중앙 정렬 */
  font-size: 0.875rem;
  color: white;
`;

// 공지사항 링크 래퍼 (Link 컴포넌트에 적용)
export const NewsLinkWrapper = css`
  text-decoration: none; /* 링크 밑줄 제거 */
  color: #1f2937; /* 기본 링크 색상 */
  display: block; /* 클릭 영역 확장 */
  &:hover .news-title-text { /* 호버 시 제목 텍스트에만 효과 */
    color: #0056b3; /* 호버 시 색상 변경 */
    text-decoration: underline; /* 호버 시 밑줄 (선택 사항) */
  }
`;

// 공지사항 제목 텍스트 (NewsLinkWrapper 내부에 사용)
export const NewsTitleText = css`
  /* 개별 스타일이 필요하면 여기에 */
  /* NewsLinkWrapper의 호버 효과를 위해 클래스 대신 사용 */
  transition: color 0.2s ease-in-out;
  color: white;
`;


// 로딩 인디케이터 스타일 (간단 예시)
export const LoadingIndicator = css`
  padding: 2rem;
  text-align: center;
  color: #6b7280;
`;

// 내용 없음 메시지 스타일
export const EmptyMessage = css`
  padding: 2rem;
  text-align: center;
  color: #6b7280;
`;

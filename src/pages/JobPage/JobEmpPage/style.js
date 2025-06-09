import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
`;

export const container = css`
  max-width: 1200px;
  margin: 5rem auto;
`;

export const searchSection = css`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

export const jobInfoSection = css`
    /* jobInfoSection 스타일이 필요하면 여기에 추가합니다. */
`;

export const jobTable = css`
  width: 100%; /* 너비를 100%로 설정하여 부모 컨테이너에 맞춤 */
  background-color: white;
  border-radius: 0.5rem;
  overflow: hidden;
  border-collapse: collapse; /* 테이블 셀 간의 경계를 합침 */
  display: table; /* 모바일에서도 보이도록 display: none 제거 또는 미디어 쿼리 조정 */
  
  /* 모바일에서는 다른 레이아웃을 원할 경우 미디어 쿼리 사용
  @media (max-width: 767px) {
    display: block;
  }
  */
`;

export const tableHeader = css`
  text-align: center;
  padding: 0.75rem 1rem;
  font-weight: 600;
  background-color: #f3f4f6;
  border-bottom: 2px solid #e5e7eb; /* 헤더 구분을 위해 더 두꺼운 선 사용 */

  /* ▼▼▼ [수정된 부분] 열 별로 너비 지정 ▼▼▼ */
  &:nth-of-type(1) { /* 번호 열 (첫 번째) */
    width: 10%;
  }
  &:nth-of-type(2) { /* 제목 열 (두 번째) */
    width: 70%;
  }
  &:nth-of-type(3) { /* 날짜 열 (세 번째) */
    width: 20%;
  }
`;

export const tableRow = css`
  cursor: pointer;
  &:hover {
    background-color: #f9fafb;
  }
`;

export const tableCell = css`
  padding: 0.75rem 1rem;
  text-align: center;
  border-bottom: 1px solid #e5e7eb;

  /* ▼▼▼ [수정된 부분] 헤더와 너비를 맞춤 ▼▼▼ */
  &:nth-of-type(1) { /* 번호 셀 */
    width: 10%;
  }
  &:nth-of-type(2) { /* 제목 셀 */
    width: 70%;
    text-align: left; /* 제목은 왼쪽 정렬이 보기 좋습니다. */
    padding-left: 2rem; /* 왼쪽 여백 추가 */
  }
  &:nth-of-type(3) { /* 날짜 셀 */
    width: 20%;
  }
`;

export const emptyMessage = css`
    padding: 2rem;
    text-align: center;
    color: #6b7280;
`;
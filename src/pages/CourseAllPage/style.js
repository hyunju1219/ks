import { css } from "@emotion/react";

export const pageContainer = css`
  background-color: #f9f9f9;
`;

export const innerWrapper = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const mainTitle = css`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
`;
export const InfoSection = css`
  margin-bottom: 2.5rem;
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  border: 1px solid #f0f0f0;
`;

export const tableWrapper = css`
  width: 100%;
  overflow-x: auto;
  
  /* 스크롤바 약간 숨기기 (선택) */
  -webkit-overflow-scrolling: touch; /* iOS 부드러운 스크롤 */
  
  /* 모바일에서만 적용하려면 미디어 쿼리 사용 */
  @media (max-width: 768px) {
    /* 스크롤바가 잘 보이도록 아래 여백 추가 가능 */
    margin-bottom: 1rem;
  }
`;

export const categoryTitle = css`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
  color: #1f2937;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #e5e7eb;
  position: relative;
  
  &:after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 80px;
    height: 2px;
    background-color: #0056b3;
  }
`;

export const table = css`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 40px;
  font-size: 14px;
  text-align: center;
`;

export const th = css`
  border: 1px solid #ccc;
  padding: 12px;
 background-color: #f3f4f6; // 연한 파란색 (AliceBlue)
  font-weight: bold;
`;

export const td = css`
  border: 1px solid #ccc;
  padding: 12px;
`;

export const button = css`
  padding: 0.5rem;
  background-color: rgba(0, 86, 179, 0.1);
  border-radius: 0.5rem;
  color: wh;
  &:disabled {
    background-color: #dbdbdb;
  }
`;
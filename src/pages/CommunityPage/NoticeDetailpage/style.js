import { css } from '@emotion/react';

export const pageContainer = css`
  box-sizing: border-box;
  padding: 50px 20px;
   width: 100%; /* 기본적으로 부모 요소의 전체 너비를 사용 */
  max-width: 1200px; /* 상하좌우 패딩 증가 */
  margin: 0 auto;

  @media (max-width: 1280px) { /* 더 넓은 화면에도 대응 */
    padding: 40px 20px;
  }

  @media (max-width: 1024px) {
    padding: 30px 16px;
  }

  @media (max-width: 768px) {
    padding: 20px 16px;
  }
`;

export const loading = css`
  padding: 80px 0;
  text-align: center;
  font-size: 18px;
  color: #555;
`;

export const detailBox = css`
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 50px; /* 전체 패딩 증가 */
  box-shadow: 0 6px 20px rgba(0,0,0,0.05);

  @media (max-width: 768px) {
    padding: 30px; /* 태블릿 크기에서 패딩 조정 */
  }

  @media (max-width: 480px) {
    padding: 20px; /* 모바일 크기에서 패딩 조정 */
  }
`;

export const header = css`
  border-bottom: 1px solid #eee;
  padding-bottom: 25px; /* 패딩 증가 */
  margin-bottom: 35px; /* 마진 증가 */
  display: flex;
  flex-direction: column;
  gap: 12px; /* 간격 증가 */

  @media (max-width: 768px) {
    margin-bottom: 25px;
    padding-bottom: 20px;
  }
`;

export const title = css`
  font-size: 30px; /* 제목 글꼴 크기 증가 */
  font-weight: 700;
  color: #2c3e50;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const meta = css`
  display: flex;
  gap: 15px; /* 간격 증가 */
  color: #7f8c8d;
  font-size: 16px; /* 글꼴 크기 증가 */
  flex-wrap: wrap;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const categoryTag = css`
  background: #e9eff3;
  color: #34495e;
  padding: 5px 12px; /* 패딩 증가 */
  border-radius: 6px; /* 둥근 정도 증가 */
  font-weight: 600;
`;

export const dateText = css`
  /* 기본 스타일 유지 */
`;

export const content = css`
  font-size: 18px; /* 내용 글꼴 크기 증가 */
  color: #34495e;
  line-height: 1.9; /* 줄 간격 증가로 가독성 향상 */
  white-space: pre-wrap;
  margin-bottom: 50px; /* 마진 증가 */

  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 35px 0; /* 이미지 마진 증가 */
    border-radius: 10px; /* 둥근 정도 증가 */
    box-shadow: 0 4px 12px rgba(0,0,0,0.1); /* 그림자 강화 */
  }

  p {
    margin-bottom: 1.2em; /* 단락 하단 마진 증가 */
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 2em; /* 제목 상단 마진 증가 */
    margin-bottom: 1em; /* 제목 하단 마진 증가 */
    font-weight: 700;
    color: #2c3e50;
  }

  a {
    color: #3498db;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  ul, ol {
    margin-left: 25px; /* 목록 왼쪽 마진 증가 */
    margin-bottom: 1.5em; /* 목록 하단 마진 증가 */
  }

  li {
    margin-bottom: 0.7em; /* 목록 항목 하단 마진 증가 */
  }

  blockquote {
    border-left: 5px solid #ccc; /* 테두리 두께 증가 */
    padding-left: 20px; /* 패딩 증가 */
    color: #555;
    margin: 1.5em 0; /* 마진 증가 */
    font-style: italic;
  }

  @media (max-width: 768px) {
    font-size: 17px;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 30px;
  }
`;

export const adminButtons = css`
  display: flex;
  gap: 15px; /* 간격 증가 */
  margin-top: 40px; /* 마진 증가 */
  justify-content: flex-end;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const baseButton = css`
  padding: 12px 25px; /* 패딩 증가 */
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px; /* 글꼴 크기 증가 */
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 14px 15px;
  }
`;

export const editBtn = css`
  ${baseButton};
  background: #3498db;
  color: white;

  &:hover {
    background: #2980b9;
  }
`;

export const deleteBtn = css`
  ${baseButton};
  background: #e74c3c;
  color: white;

  &:hover {
    background: #c0392b;
  }
`;

export const listBtn = css`
  ${baseButton};
  background: #f8f8f8; /* 배경색 변경 */
  color: #555; /* 글자색 변경 */
  border: 1px solid #ccc; /* 테두리 추가 */
  margin-top: 40px; /* 마진 증가 */
  width: 100%;
  text-align: center;

  &:hover {
    background: #e9e9e9;
    color: #333;
  }
`;
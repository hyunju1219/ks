import { css } from "@emotion/react";

export const postContainer = css`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
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

export const postHeader = css`
  padding-bottom: 1.5rem;
  border-bottom: 2px solid #f3f4f6;
  margin-bottom: 2rem;
`;

export const postTitle = css`
  font-size: 2rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
  line-height: 1.3;
`;

export const postMeta = css`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #6b7280;
`;

export const postContent = css`
  min-height: 300px;
  line-height: 1.8;
  font-size: 1.1rem;
  color: #374151;
  display: flex;
  justify-content: center;

  /* ReactQuill에서 생성된 HTML 태그 스타일링 */
  p {
    margin-bottom: 1rem;
  }
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 1rem 0;
  }
  blockquote {
    border-left: 4px solid #e5e7eb;
    padding-left: 1rem;
    margin-left: 0;
    font-style: italic;
    color: #6b7280;
  }
`;

export const buttonContainer = css`
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;
  text-align: center;
`;

export const listButton = css`
  background-color: #1f2937;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #374151;
  }
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
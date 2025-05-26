import { css } from '@emotion/react';

export const pageContainer = css`
  padding: 40px 16px;
  width: 960px;
  margin: 0 auto;
`;

export const loading = css`
  padding: 80px 0;
  text-align: center;
  font-size: 18px;
`;

export const detailBox = css`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.04);

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const titleLayout = css`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

export const title = css`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
`;

export const meta = css`
  display: flex;
  gap: 16px;
  color: #777;
  font-size: 14px;
  margin-bottom: 24px;
  flex-wrap: wrap;
`;

export const content = css`
  font-size: 16px;
  color: #333;
  line-height: 1.7;
  white-space: pre-wrap;

  img {
    max-width: 100%;
    margin: 20px 0;
    border-radius: 8px;
  }
`;

export const adminButtons = css`
  display: flex;
  gap: 10px;
`;

export const editBtn = css`
  padding: 8px 16px;
  background: #1976d2;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #1565c0;
  }
`;

export const deleteBtn = css`
  padding: 8px 16px;
  background: #d32f2f;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #c62828;
  }
`;

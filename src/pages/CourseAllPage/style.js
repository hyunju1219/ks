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
`;

export const categoryTitle = css`
  font-size: 20px;
  font-weight: 600;
  margin-top: 40px;
  margin-bottom: 12px;
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
 background-color: #e0f0ff; // 연한 파란색 (AliceBlue)
  font-weight: bold;
`;

export const td = css`
  border: 1px solid #ccc;
  padding: 12px;
`;
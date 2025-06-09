import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
`;
export const container = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const title = css`
  font-size: 25px;
  font-weight: 700;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  word-break: keep-all;
  border-bottom: 1px solid #dbdbdb;
`;
export const etcSection = css`
    display: flex;
    width: 100%;
    justify-content: flex-end;
`;

export const etcInfo = css`
    padding: 0 0.5rem;
    font-size: 14px;
    color: gray;
`;

export const date = css`
  font-size: 14px;
  color: #777;
  margin-bottom: 24px;
`;

export const content = css`
  font-size: 16px;
  line-height: 1.8;
  color: #333;
  white-space: pre-line;
`;

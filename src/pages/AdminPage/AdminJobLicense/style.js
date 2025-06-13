import { css } from "@emotion/react";

export const pageContainer = css`
  width: 960px;
  margin: 0 auto;
  padding: 2rem;
  background: #fff;
  `;
export const pageTitle = css`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 30px;
`
export const form= css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const label= css`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 500;
`;
export const input= css`
  margin-top: 8px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;
export const select = css`
  margin-top: 8px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: white;
  appearance: none;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;
export const editor= css`
  margin-top: 8px;
  .ql-editor {
    min-height: 200px;
  }
`;
export const button= css`
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  align-self: flex-start;
  transition: background-color 0.2s;
  &:hover {
    background-color: #0056b3;
  }
`;
export const error= css`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

export const checkboxLabel = css`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;

export const checkbox = css`
  transform: scale(1.2);
`;

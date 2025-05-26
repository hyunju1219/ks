import { css } from '@emotion/react';

export const layout = css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background: #f7f9fc;
`;

export const form = css`
  background: #fff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
`;

export const title = css`
  font-size: 24px;
  margin-bottom: 24px;
  text-align: center;
  font-weight: 600;
  color: #333;
`;

export const input = css`
  padding: 12px 16px;
  margin-bottom: 16px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
  }
`;

export const button = css`
  background-color: #007bff;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background-color: #0056b3;
  }
`;

export const error = css`
  color: red;
  margin-top: 8px;
  font-size: 14px;
  text-align: center;
`;

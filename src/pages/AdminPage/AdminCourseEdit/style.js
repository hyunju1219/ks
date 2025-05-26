/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const container = css`
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem;
  background: #fff;
`;

export const title = css`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const formRow = css`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const formGroup = css`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;

  label {
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
`;
export const imageUploadGroup = css`
  display: flex;
  gap: 1rem;
`;

export const imageBox = css`
  width: 150px;
  height: 150px;
  border: 2px dashed #ccc;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;

  input[type="file"] {
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    cursor: pointer;
  }

  &::before {
    content: "이미지 선택";
    position: absolute;
    font-size: 0.875rem;
    color: #888;
  }
`;

export const previewImg = css`
  margin-top: 8px;
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
`;

export const input = css`
  padding: 0.75rem 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
`;

export const textarea = css`
  padding: 0.75rem 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  min-height: 150px;
  font-size: 1rem;
  resize: vertical;
`;

export const select = input;

export const gridRow = css`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

export const gridItem = css`
  flex: 1 1 calc(33.333% - 1rem);
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
`;

export const buttonGroup = css`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const saveButton = css`
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const deleteButton = css`
  padding: 0.75rem 1.5rem;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #a71d2a;
  }
`;

import { css } from "@emotion/react";

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

const baseButton = css`
  background-color: #0056b3;
  color: white;
  font-weight: 500;
  padding: 0.625rem 1.25rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.3s;
  display: inline-block;
  
  &:hover {
    background-color: #003d81;
  }
`;

export const editBtn = css`
  ${baseButton};
  color: white;

  &:hover {
    background: #2980b9;
  }
`;

export const deleteBtn = css`
  ${baseButton};
  background: red;
  color: white;
  margin-left: 1rem;

  &:hover {
    background: #c0392b;
  }
`;

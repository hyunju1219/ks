import { css } from "@emotion/react";


export const layout = css`
    width: 100%;
`;

export const container = css`
  max-width: 1200px;
  margin: 5rem auto;
`;

export const searchSection = css`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

export const jobTable = css`
  min-width: 100%;
  background-color: white;
  border-radius: 0.5rem;
  /* box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); */
  overflow: hidden;
  display: none;
  
  @media (min-width: 768px) {
    display: table;
  }
`;

export const tableHeader = css`
  text-align: center;
  padding: 0.75rem 1rem;
  font-weight: 600;
  background-color: #f3f4f6;
  border-bottom: 1px solid #e5e7eb;
  /* &:first-of-type {
    display: flex;
    align-items: center;
  } */
`;

export const tableRow = css`
  cursor: pointer;
  &:hover {
    background-color: #f9fafb;
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid #e5e7eb;
  }
`;

export const tableCell = css`
  padding: 0.75rem 1rem;
  text-align: center;
  border-bottom: 1px solid #e5e7eb;
  /* &:first-of-type {
    display: flex;
    align-items: center;
  } */
`;
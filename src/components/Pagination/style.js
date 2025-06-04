import { css } from '@emotion/react';

export const paginationContainerStyle = css`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
`;

export const paginationInnerStyle = css`
  display: flex;
  gap: 0.5rem;
`;

export const paginationButtonStyle = (isActive, disabled) => css`
  padding: 0.25rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  transition: background-color 0.2s ease-in-out, opacity 0.2s ease-in-out;
  cursor: ${disabled ? 'not-allowed' : 'pointer'};
  opacity: ${disabled ? 0.5 : 1};

  background-color: ${isActive ? '#0056b3' : 'transparent'};
  color: ${isActive ? 'white' : '#374151'};

  &:hover:not(:disabled) {
    background-color: ${isActive ? 'rgb(2, 69, 141)' : '#f9fafb'};
  }

  &:disabled {
    color: #9ca3af; // 비활성화 시 글자색
  }
`;
import { css } from '@emotion/react';

export const SectionContainer = css`
  padding: 5rem 0;
  background-color: #0056b3;
`;

export const SectionInner = css`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
`;

export const SectionTitle = css`
  font-size: 1.875rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

export const SectionSubtitle = css`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
`;

export const ButtonContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  max-width: 32rem;
  margin: 0 auto;
  
  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const PrimaryButton = css`
  display: inline-block;
  background-color: white;
  color: #0056b3;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: background-color 0.3s;
  cursor: pointer;
  
  &:hover {
    background-color: #f3f4f6;
  }
`;

export const SecondaryButton = css`
  display: inline-block;
  background-color: #00a0e9;
  color: white;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: background-color 0.3s;
  cursor: pointer;
  
  &:hover {
    background-color: #0080b7;
  }
`;

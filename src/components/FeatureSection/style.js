import { css } from '@emotion/react';

export const SectionContainer = css`
  padding: 4rem 0;
  background-color: white;
`;

export const SectionInner = css`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const SectionTitle = css`
  font-size: 35px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
`;

export const FeatureGrid = css`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const FeatureCard = css`
  background-color: #f9fafb;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.3s;
  text-align: center;
  
  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`;

export const IconContainer = css`
  background-color: #4d82c5;
  color: white;
  width: 4rem;
  height: 4rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem auto;
`;

export const FeatureTitle = css`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
`;

export const FeatureDescription = css`
  color: #4b5563;
`;

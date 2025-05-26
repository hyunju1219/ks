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
  font-size: 1.875rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
`;

export const SectionSubtitle = css`
  color: #6b7280;
  text-align: center;
  margin-bottom: 3rem;
`;

export const FacilityGrid = css`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const FacilityCard = css`
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.3s;
  
  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`;

export const FacilityImage = css`
  width: 100%;
  height: 16rem;
  object-fit: cover;
`;

export const FacilityContent = css`
  padding: 1rem;
  background-color: white;
`;

export const FacilityTitle = css`
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const FacilityDescription = css`
  color: #6b7280;
`;

export const ButtonContainer = css`
  margin-top: 2.5rem;
  text-align: center;
`;

export const ViewMoreButton = css`
  display: inline-block;
  background-color: #00a0e9;
  color: white;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #0080b7;
  }
`;

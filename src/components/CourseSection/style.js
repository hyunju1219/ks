import { css } from '@emotion/react';

export const SectionContainer = css`
  padding: 4rem 0;
  background-color: #f9fafb;
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

export const CourseGrid = css`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const CourseCard = css`
  background-color: white;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.3s;
  
  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`;

export const CourseImage = css`
  width: 100%;
  height: 12rem;
  object-fit: cover;
`;

export const CourseContent = css`
  padding: 1.5rem;
`;

export const CourseTitle = css`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const CourseDescription = css`
  color: #6b7280;
  margin-bottom: 1rem;
`;

export const CourseFooter = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CourseBadge = css`
  background-color: #0056b3;
  color: white;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
`;

export const CourseLink = css`
  color: #00a0e9;
  font-weight: 500;
  transition: color 0.3s;
  
  &:hover {
    color: #003d81;
  }
`;

export const ButtonContainer = css`
  margin-top: 2.5rem;
  text-align: center;
`;

export const ViewAllButton = css`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, #1f2937, #374151);
  color: white;
  font-weight: 600;
  font-size: 16px;
  padding: 16px 32px;
  border-radius: 12px;
  text-decoration: none;
  box-shadow: 0 8px 16px -4px rgba(31, 41, 55, 0.4);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 24px -4px rgba(31, 41, 55, 0.5);
    
    &::before {
      left: 100%;
    }
    
    svg {
      transform: translateX(4px);
    }
  }
  
  &:active {
    transform: translateY(0);
  }
  
  svg {
    transition: transform 0.3s ease;
  }
`;

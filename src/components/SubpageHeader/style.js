import { css } from '@emotion/react';

export const HeaderContainer = css`
  background-color: #f9fafb;
  padding: 2.5rem 0;
  border-bottom: 1px solid #e5e7eb;
`;

export const HeaderContent = css`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
`;

export const HeaderTitle = css`
  font-size: 2.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.75rem;
`;

export const HeaderSubtitle = css`
  color: #6b7280;
  max-width: 36rem;
  margin: 0 auto 1.5rem auto;
`;

export const Breadcrumbs = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #6b7280;
  font-size: 0.875rem;
`;

export const BreadcrumbLink = css`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #6b7280;
  transition: color 0.3s;
  cursor: pointer;
  
  &:hover {
    color: #0056b3;
  }
`;

export const BreadcrumbCurrent = css`
  color: #0056b3;
  font-weight: 500;
`;

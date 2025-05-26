import { css } from '@emotion/react';

export const FooterContainer = css`
  background-color: #1f2937;
  color: white;
  padding-top: 3rem;
  padding-bottom: 1.5rem;
`;

export const FooterContent = css`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const FooterGrid = css`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const FooterColumn = css`
  display: flex;
  flex-direction: column;
`;

export const FooterTitle = css`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const FooterDescription = css`
  color: #d1d5db;
  margin-bottom: 0.5rem;
`;

export const FooterHeading = css`
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const FooterLinkList = css`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FooterLink = css`
  color: #d1d5db;
  transition: color 0.3s;
  cursor: pointer;
  
  &:hover {
    color: white;
  }
`;

export const FooterText = css`
  color: #d1d5db;
  margin-bottom: 0.5rem;
`;

export const SocialLinks = css`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const SocialLink = css`
  color: #d1d5db;
  transition: color 0.3s;
  
  &:hover {
    color: white;
  }
`;

export const FooterCopyright = css`
  padding-top: 2rem;
  border-top: 1px solid #374151;
  text-align: center;
  font-size: 0.875rem;
  color: #9ca3af;
`;

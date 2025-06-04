import { css } from '@emotion/react';

export const pageContainer = css`
  flex: 1;
  min-height: 100vh;
`;

export const container = css`
background-color: #0056b3;
`;

export const layout = css`
  width: 100%;
  max-width: 1280px;
  display: flex;
  margin: 0 auto;
  gap: 0; /* 간격이 필요하면 추가 */
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

/* NewsSection이 왼쪽 절반을 차지하도록 */
export const newsSection = css`
  flex: 1;
  width: 50%;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

/* CTASection이 오른쪽 절반을 차지하도록 */
export const ctaSection = css`
  flex: 1;
  width: 50%;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;
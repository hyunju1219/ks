import { css, keyframes } from '@emotion/react';

// 애니메이션 키프레임
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

// 메인 컨테이너
export const pageContainer = css`
  flex: 1;
  min-height: 100vh;
`;

export const container = css`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  
  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

// 정보 섹션
export const infoSection = css`
  background: #f9fafb;
  padding: 80px 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="%23000" opacity="0.02"/><circle cx="75" cy="75" r="1" fill="%23000" opacity="0.02"/><circle cx="50" cy="10" r="1" fill="%23000" opacity="0.02"/><circle cx="10" cy="90" r="1" fill="%23000" opacity="0.02"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

// 네비게이션 그리드
export const navGrid = css`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  margin-bottom: 80px;
  animation: ${fadeInUp} 0.8s ease-out;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-bottom: 60px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

// 네비게이션 카드
export const navCard = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 24px 16px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  text-decoration: none;
  color: inherit;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
  /* min-height: 50px; */
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-color: #e2e8f0;
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-2px);
  }
`;

// 아이콘 래퍼
export const iconWrapper = (color) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: linear-gradient(135deg, ${color}, ${color}dd);
  color: white;
  box-shadow: 0 8px 16px -4px ${color}40;
  transition: all 0.3s ease;
  flex-shrink: 0;
  
  ${navCard}:hover & {
    transform: scale(1.1);
    box-shadow: 0 12px 20px -4px ${color}60;
  }

  /* & > svg {
    width: 100%;
    height: 100%;
  } */
`;

// 네비게이션 라벨
export const navLabel = css`
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

// 화살표 아이콘
export const arrowIcon = css`
  color: #9ca3af;
  transition: all 0.3s ease;
  
  ${navCard}:hover & {
    color: #4b5563;
    transform: translateX(4px);
  }
`;

// 연락처 카드
export const contactCard = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 24px 16px;
  background: #0056b3;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  color: white;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-height: 140px;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`;

export const contactInfo = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const contactLabel = css`
  font-size: 16px;
  font-weight: 600;
  display: block;
  margin-bottom: 8px;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const phoneNumbers = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
`;

export const phoneLink = css`
  color: white;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

// 코스 섹션
export const courseSectionWrapper = css`
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;
`;

export const sectionHeader = css`
  text-align: center;
  margin-bottom: 60px;
`;

export const sectionTitle = css`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const sectionSubtitle = css`
  font-size: 18px;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

// 로딩 상태
export const loadingContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
`;

export const loadingSpinner = css`
  width: 40px;
  height: 40px;
  border: 4px solid #e5e7eb;
  border-top: 4px solid #3b82f6;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 16px;
`;

export const loadingText = css`
  color: #6b7280;
  font-size: 16px;
`;

// 코스 그리드
export const courseGrid = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

// 코스 카드
export const courseCard = css`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
    border-color: #e5e7eb;
  }
`;

export const imageContainer = css`
  position: relative;
  overflow: hidden;
  height: 220px;
`;

export const courseImage = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;

`;

export const categoryBadge = css`
  position: absolute;
  top: 16px;
  left: 16px;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
`;

export const cardContent = css`
  padding: 28px;
`;

export const courseTitle = css`
  font-size: 22px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 20px;
  line-height: 1.3;
   display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;

export const courseDetails = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const detailItem = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #f3f4f6;
  
  &:last-child {
    border-bottom: none;
  }
`;

export const detailLabel = css`
  font-size: 14px;
  font-weight: 600;
  color: #6b7280;
`;

export const detailValue = css`
  font-size: 14px;
  font-weight: 500;
  color: #1f2937;
`;

// 전체보기 버튼
export const viewAllContainer = css`
  text-align: center;
`;

export const viewAllButton = css`
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

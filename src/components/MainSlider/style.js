import { keyframes } from '@emotion/css';
import { css } from '@emotion/react';

const slideAnimation = keyframes`
  0% { opacity: 0; transform: translateX(50px); }
  10% { opacity: 1; transform: translateX(0); }
  90% { opacity: 1; transform: translateX(0); }
  100% { opacity: 0; transform: translateX(-50px); }
`;

export const SliderContainer = css`
  position: relative;
  /* background-color: #003d81; */
  overflow: hidden;
  height: 500px;
  
  @media (min-width: 768px) {
    height: 600px;
  }
`;

// 기본 슬라이드 스타일
export const SlideBase = css`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
`;

// 활성화된 슬라이드 스타일
export const SlideActive = css`
  ${SlideBase}
  display: block;
  animation: ${slideAnimation} 6s forwards;
`;

// 비활성화된 슬라이드 스타일
export const SlideInactive = css`
  ${SlideBase}
  display: none;
`;

export const SlideOverlay = css`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const SlideContent = css`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 1rem;
  max-width: 1280px;
  margin: 0 auto;
`;

export const SlideTitle = css`
  color: white;
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const SlideSubtitle = css`
  color: white;
  font-size: 1.25rem;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const SlideButton = css`
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

export const SliderControls = css`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

// 기본 슬라이더 점 스타일
export const SliderDotBase = css`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 9999px;
  transition: background-color 0.3s;
  
  &:focus {
    background-color: white;
  }
`;

// 활성화된 슬라이더 점 스타일
export const SliderDotActive = css`
  ${SliderDotBase}
  background-color: white;
`;

// 비활성화된 슬라이더 점 스타일
export const SliderDotInactive = css`
  ${SliderDotBase}
  background-color: rgba(255, 255, 255, 0.5);
`;

export const swiperContainerStyle = css`
  width: 100%;
  height: 500px; /* 슬라이더 높이를 원하는 대로 조절하세요 */
  position: relative; /* 네비게이션/페이지네이션 버튼의 절대 위치 기준 */

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    background-size: cover;
    background-position: center;
    display: flex; /* 슬라이드 내부 컨텐츠 정렬을 위해 */
    justify-content: center;
    align-items: center;
    /* 예시: 슬라이드 텍스트 스타일
    color: white;
    font-size: 2rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    */
  }

  /* 페이지네이션 점 스타일 (선택 사항) */
  .swiper-pagination-bullet {
    background-color: rgba(255, 255, 255, 0.7); /* 비활성 점 색상 */
    opacity: 1;
    width: 10px;
    height: 10px;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    background-color: white; /* 활성 점 색상 */
    transform: scale(1.2); /* 활성 점 약간 크게 */
  }

  /* 네비게이션 화살표 스타일 (선택 사항, navigation={true} 설정 시) */
  .swiper-button-prev,
  .swiper-button-next {
    color: white; /* 화살표 색상 */
    &:after {
      font-size: 24px; /* 화살표 아이콘 크기 */
    }
  }
  .swiper-button-prev {
    left: 20px; /* 왼쪽 여백 */
  }
  .swiper-button-next {
    right: 20px; /* 오른쪽 여백 */
  }

    
  @media (max-width: 768px) {
   display: none;
  }
 
`;
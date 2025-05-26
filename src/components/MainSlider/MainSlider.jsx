/** @jsxImportSource @emotion/react */
import * as s from './style';

import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'wouter';

const MainSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: '전문가를 양성하는 금성기술직업전문학교',
      subtitle: '국가공인 자격증 취득을 위한 최고의 선택',
      buttonText: '교육과정 알아보기',
      buttonLink: '/course',
      bgImage: 'https://images.unsplash.com/photo-1581093806997-124204d9fa9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600'
    },
    {
      id: 2,
      title: '현장 중심 실무 교육',
      subtitle: '최신 장비와 숙련된 강사진으로 실무 역량 강화',
      buttonText: '시설 둘러보기',
      buttonLink: '/about/facilities',
      bgImage: 'https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600'
    },
    {
      id: 3,
      title: '취업 성공을 위한 첫걸음',
      subtitle: '높은 취업률과 체계적인 취업 지원 시스템',
      buttonText: '취업 성공 사례',
      buttonLink: '/job-center',
      bgImage: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600'
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  }, [slides.length]);

  // 자동 슬라이드 기능
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 6000);
    return () => clearInterval(intervalId);
  }, [nextSlide]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section css={s.SliderContainer}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          css={index === currentSlide ? s.SlideActive : s.SlideInactive}
          style={{ backgroundImage: `url(${slide.bgImage})` }}
        >
          <div css={s.SlideOverlay} />
          <div css={s.SlideContent}>
            <h1 css={s.SlideTitle}>{slide.title}</h1>
            <p css={s.SlideSubtitle}>{slide.subtitle}</p>
            <Link href={slide.buttonLink}>
              <span css={s.SlideButton}>
                {slide.buttonText}
              </span>
            </Link>
          </div>
        </div>
      ))}
      
      <div css={s.SliderControls}>
        {slides.map((_, index) => (
          <button 
            key={index}
            css={index === currentSlide ? s.SliderDotActive : s.SliderDotInactive}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default MainSlider;

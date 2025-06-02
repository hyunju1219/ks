/** @jsxImportSource @emotion/react */
import * as s from './style';

import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'wouter';

import slide1 from '../../assets/slide/slide-001.jpg';
import slide2 from '../../assets/slide/slide-002.jpg';
import slide3 from '../../assets/slide/slide-003.jpg';
import slide4 from '../../assets/slide/slide-004.jpg';
import slide5 from '../../assets/slide/slide-005.jpg';

const MainSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      bgImage: slide3
    },
    {
      id: 2,
      bgImage: slide2
    },
    {
      id: 3,
      bgImage: slide1
    },
    {
      id: 4,
      bgImage: slide4
    },
    {
      id: 5,
      bgImage: slide5
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
          {/* <div css={s.SlideOverlay} />
          <div css={s.SlideContent}>
            <h1 css={s.SlideTitle}>{slide.title}</h1>
            <p css={s.SlideSubtitle}>{slide.subtitle}</p>
            <Link href={slide.buttonLink}>
              <span css={s.SlideButton}>
                {slide.buttonText}
              </span>
            </Link>
          </div> */}
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

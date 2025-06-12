/** @jsxImportSource @emotion/react */
import * as s from './style';

// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper modules
import { Navigation, Pagination, Autoplay, EffectFade, A11y } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// 슬라이드 이미지 임포트
import slide1 from '../../assets/slide/slide-001.jpg';
import slide2 from '../../assets/slide/slide-002.jpg';
import slide3 from '../../assets/slide/slide-007.png';
import slide4 from '../../assets/slide/slide-006.png';
import slide5 from '../../assets/slide/slide-005.jpg';
import slide6 from '../../assets/slide/slide-009.png';

// 1. useNavigate 훅을 임포트합니다.
import { useNavigate } from 'react-router-dom';

const MainSlider = () => {
  // 2. useNavigate 훅을 컴포넌트 내에서 호출합니다.
  const navigate = useNavigate();

  // 슬라이드 데이터 배열
  const slides = [
    { id: 1, bgImage: slide3, title: "국가기간전략산업직종훈련" },
    { id: 2, bgImage: slide4, title: "국민내일배움카드 과정" },
    { id: 3, bgImage: slide6, title: "부산시 맞춤훈련" },
    { id: 4, bgImage: slide2, title: "최고의 시설과 장비" },
    { id: 5, bgImage: slide5, title: "우수훈련기관 선정" },
    { id: 6, bgImage: slide1, title: "우수훈련기관 선정" },
  ];

  // 3. 슬라이드 클릭 시 실행될 핸들러 함수를 만듭니다.
  const handleSlideClick = (index) => {
    // 인덱스가 0 또는 1이 아닐 경우 (즉, 2 이상일 경우)에만 이동합니다.
    // 기존의 !(idx === 0 || 1) 조건은 idx > 1 과 같습니다.
    if (index > 1) {
      navigate('/courses/all');
    }
  };

  return (
    <section css={s.swiperContainerStyle} aria-label="메인 슬라이드쇼">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        a11y={{
          enabled: true,
          prevSlideMessage: '이전 슬라이드',
          nextSlideMessage: '다음 슬라이드',
          firstSlideMessage: '첫 번째 슬라이드입니다',
          lastSlideMessage: '마지막 슬라이드입니다',
          paginationBulletMessage: '슬라이드 {{index}}번으로 이동',
        }}
        style={{ height: '100%' }}
        className="main-swiper-instance"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide
            key={slide.id}
            // 4. onClick 이벤트와 조건부 스타일을 적용합니다.
            onClick={() => handleSlideClick(idx)}
            style={{
              backgroundImage: `url(${slide.bgImage})`,
              cursor: idx > 1 ? 'pointer' : 'default',
            }}
            aria-label={slide.title || `슬라이드 ${slide.id}`}
          >
            {idx > 1 && (
              <div css={s.slideLayout}></div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MainSlider;
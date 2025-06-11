/** @jsxImportSource @emotion/react */
import * as s from './style';

// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper modules (Navigation, Pagination, Autoplay, EffectFade, A11y는 필수입니다)
import { Navigation, Pagination, Autoplay, EffectFade, A11y } from 'swiper/modules';

// Swiper styles (core, pagination, effect-fade는 필수입니다)
import 'swiper/css';
import 'swiper/css/navigation'; // 네비게이션 화살표를 사용하려면 주석 해제
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// 슬라이드 이미지 임포트 (경로는 실제 프로젝트 구조에 맞게 조정해주세요)
import slide1 from '../../assets/slide/slide-001.jpg';
import slide2 from '../../assets/slide/slide-002.jpg';
import slide3 from '../../assets/slide/slide-007.png';
import slide4 from '../../assets/slide/slide-006.png';
import slide5 from '../../assets/slide/slide-005.jpg';

// Swiper 컨테이너 및 기본 슬라이드 스타일 (Emotion 사용)


const MainSlider = () => {
  // 슬라이드 데이터 배열
  const slides = [
    { id: 1, bgImage: slide3, title: "국가기간전략산업직종훈련" }, // 예시 텍스트 추가
    { id: 2, bgImage: slide4, title: "국민내일배움카드 과정" },
    { id: 3, bgImage: slide1, title: "부산시 맞춤훈련" },
    { id: 4, bgImage: slide2, title: "최고의 시설과 장비" },
    { id: 5, bgImage: slide5, title: "우수훈련기관 선정" },
  ];

  return (
    <section css={s.swiperContainerStyle} aria-label="메인 슬라이드쇼">
      <Swiper
        // 설치할 모듈들
        modules={[Navigation, Pagination, Autoplay, EffectFade, A11y]}
        
        // 기본 옵션
        spaceBetween={0} // fade 효과 시에는 0으로 설정
        slidesPerView={1} // 한 번에 보여줄 슬라이드 수
        loop={true} // 무한 루프
        
        // 자동 재생 (Autoplay)
        autoplay={{
          delay: 5000, // 슬라이드 간 지연 시간 (ms)
          disableOnInteraction: false, // 사용자와의 상호작용 후에도 자동 재생 유지
          pauseOnMouseEnter: true, // 마우스 올리면 자동 재생 일시 정지
        }}
        
        // 페이지네이션 (점 네비게이터)
        pagination={{
          clickable: true, // 점 클릭으로 슬라이드 이동 가능
          // el: '.swiper-custom-pagination', // 커스텀 페이지네이션 요소 지정 시
        }}
        
        
        // 효과 (Effect) - fade
        effect="fade"
        fadeEffect={{
          crossFade: true, // 부드러운 교차 페이드 효과
        }}
        
        // 접근성 (A11y)
        a11y={{
          enabled: true,
          prevSlideMessage: '이전 슬라이드',
          nextSlideMessage: '다음 슬라이드',
          firstSlideMessage: '첫 번째 슬라이드입니다',
          lastSlideMessage: '마지막 슬라이드입니다',
          paginationBulletMessage: '슬라이드 {{index}}번으로 이동',
        }}
        
      
        style={{ height: '100%' }}
        className="main-swiper-instance" // 필요시 커스텀 클래스 추가
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            style={{ backgroundImage: `url(${slide.bgImage})` }}
            aria-label={slide.title || `슬라이드 ${slide.id}`}
          >
           
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MainSlider;
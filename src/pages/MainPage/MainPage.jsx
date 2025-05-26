import React from 'react';
import { Helmet } from 'react-helmet';
import MainSlider from '../../components/MainSlider/MainSlider';
import FeatureSection from '../../components/FeatureSection/FeatureSection';
import CourseSection from '../../components/CourseSection/CourseSection';
import FacilitiesSection from '../../components/FacilitiesSection/FacilitiesSection';
import NewsSection from '../../components/NewsSection/NewsSection';
import CTASection from '../../components/CTASection/CTASection';
import * as S from './style';

const MainPage = () => {
  return (
    <S.PageContainer>
      <Helmet>
        <title>금성기술직업전문학교 - 당신의 성공적인 커리어를 지원합니다</title>
        <meta name="description" content="공조냉동기계, 에너지관리, 설비보전 등 국가공인 자격증 취득과 취업을 위한 금성기술직업전문학교의 교육 프로그램을 알아보세요." />
      </Helmet>
      
      <MainSlider />
      <FeatureSection />
      <CourseSection />
      <FacilitiesSection />
      <NewsSection />
      <CTASection />
    </S.PageContainer>
  );
};

export default MainPage;

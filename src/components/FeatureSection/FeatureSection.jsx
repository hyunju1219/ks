/** @jsxImportSource @emotion/react */
import * as s from './style';
import { School, Wrench, Briefcase } from 'lucide-react';


const FeatureSection = () => {
  const features = [
    {
      id: 1,
      icon: <School size={32} />,
      title: '국가공인 자격증 취득',
      description: '공조냉동기계, 에너지관리, 설비보전, 온수온돌 등 다양한 국가공인 자격증 취득을 위한 체계적인 교육 과정'
    },
    {
      id: 2,
      icon: <Wrench size={32} />,
      title: '실무 중심 현장 교육',
      description: '산업 현장에서 바로 활용할 수 있는 실무 중심의 교육 프로그램과 최신 장비를 활용한 실습 환경 제공'
    },
    {
      id: 3,
      icon: <Briefcase size={32} />,
      title: '취업 지원 시스템',
      description: '1:1 취업 상담, 이력서 작성 지원, 취업 추천 및 사후 관리를 통한 체계적인 취업 지원 시스템 운영'
    }
  ];

  return (
    <section css={s.SectionContainer}>
      <div css={s.SectionInner}>
        <h2 css={s.SectionTitle}>금성기술직업전문학교의 특징</h2>
        
        <div css={s.FeatureGrid}>
          {features.map(feature => (
            <div css={s.FeatureCard} key={feature.id}>
              <div css={s.IconContainer}>
                {feature.icon}
              </div>
              <h3 css={s.FeatureTitle}>{feature.title}</h3>
              <p css={s.FeatureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

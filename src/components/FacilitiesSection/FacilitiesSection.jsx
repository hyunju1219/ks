/** @jsxImportSource @emotion/react */
import * as s from './style';
import { Link } from 'wouter';

const FacilitiesSection = () => {
  const facilities = [
    {
      id: 1,
      title: '교육동 전경',
      description: '쾌적한 학습 환경을 제공하는 현대적인 교육 시설',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400'
    },
    {
      id: 2,
      title: '공조냉동 실습실',
      description: '최신 장비를 통한 실무 중심의 실습 교육',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400'
    },
    {
      id: 3,
      title: '에너지관리 실습실',
      description: '에너지 설비 운용 및 관리 기술 습득을 위한 실습 공간',
      image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400'
    }
  ];

  return (
    <section css={s.SectionContainer}>
      <div css={s.SectionInner}>
        <h2 css={s.SectionTitle}>최신 교육 시설</h2>
        <p css={s.SectionSubtitle}>현장과 동일한 환경에서 실무 능력을 키울 수 있는 최신 교육 시설을 갖추고 있습니다</p>
        
        <div css={s.FacilityGrid}>
          {facilities.map(facility => (
            <div css={s.FacilityCard} key={facility.id}>
              <img css={s.FacilityImage} src={facility.image} alt={facility.title} />
              <div css={s.FacilityContent}>
                <h3 css={s.FacilityTitle}>{facility.title}</h3>
                <p css={s.FacilityDescription}>{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div css={s.ButtonContainer}>
          <Link href="/about/facilities">
            <span css={s.ViewMoreButton}>시설 더 보기</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;

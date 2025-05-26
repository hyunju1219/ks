import React from 'react';
import { Helmet } from 'react-helmet';
import SubpageHeader from '../../components/SubpageHeader/SubpageHeader';
import CTASection from '../../components/CTASection/CTASection';
import * as S from './style';

// 실제 시설 이미지 가져오기
import computerLabImage from '../../assets/facilities/computer-lab.png';
import practiceLabImage from '../../assets/facilities/classroom.png';
import energyLabImage from '../../assets/facilities/energy-lab.png';
import outdoorSpaceImage from '../../assets/facilities/outdoor.png';
import weldingLabImage from '../../assets/facilities/welding-lab.png';
import facilityLabImage from '../../assets/facilities/facility-lab.png';
import materialsLabImage from '../../assets/facilities/materials-lab.png';
import refrigerantLabImage from '../../assets/facilities/refrigerant-lab.png';
import refrigerantLab2Image from '../../assets/facilities/refrigerant-lab2.png';
import refrigerantTanksImage from '../../assets/facilities/gas-tanks.png';
import indoorImage from '../../assets/facilities/indoor-hallway.png';
import buildingImage from '../../assets/facilities/building.png';

const FacilitiesPage = () => {
  const breadcrumbs = [
    { name: '학교 소개', link: '/about' },
    { name: '교육시설', link: null }
  ];
  
  const facilities = [
    {
      id: 1,
      title: '공조냉동 실습실',
      description: '공조냉동기계 실습을 위한 최신 설비를 갖춘 실습실입니다. 냉동기, 공조기의 운전 및 관리에 필요한 실무 능력을 배양할 수 있습니다.',
      image: refrigerantLabImage
    },
    {
      id: 2,
      title: '공조냉동 실습실 (2)',
      description: '추가 공조냉동 실습 공간으로, 블랙보드를 통한 이론 교육과 함께 실습 작업대가 구비되어 있습니다. 실습과 이론을 동시에 학습할 수 있는 공간입니다.',
      image: refrigerantLab2Image
    },
    {
      id: 3,
      title: '에너지관리 실습실',
      description: '에너지 효율 관리 실습을 위한 최신 설비를 갖추고 있습니다. 보일러, 열교환기 등 에너지 설비의 운용 및 관리를 실습할 수 있는 공간입니다.',
      image: energyLabImage
    },
    {
      id: 4,
      title: '설비보전 실습실',
      description: '산업 설비의 유지보수 및 관리에 필요한 실습 설비를 갖추고 있습니다. 실제 현장과 유사한 환경에서 실무 경험을 쌓을 수 있습니다.',
      image: facilityLabImage
    },
    {
      id: 5,
      title: '용접 실습실',
      description: '다양한 용접 도구와 장비를 갖추고 있으며, 실제 산업 현장에서 필요한 용접 기술을 습득할 수 있는 실습실입니다.',
      image: weldingLabImage
    },
    {
      id: 6,
      title: '재료실',
      description: '실습에 필요한 다양한 도구와 재료를 보관하고 관리하는 공간입니다. 학생들이 실습에 필요한 모든 재료를 제공받을 수 있습니다.',
      image: materialsLabImage
    },
    {
      id: 7,
      title: '컴퓨터실',
      description: '설계 프로그램 교육 및 이론 학습을 위한 최신 컴퓨터 시설을 갖춘 교육실입니다. 모든 학생이 개별 PC를 사용하여 실습할 수 있습니다.',
      image: computerLabImage
    },
    {
      id: 8,
      title: '강의실',
      description: '쾌적한 환경에서 이론 수업을 진행할 수 있는 강의실입니다. 모든 강의실에는 냉난방 설비가 완비되어 있습니다.',
      image: practiceLabImage
    },
    {
      id: 9,
      title: '냉매 보관실',
      description: '냉동기 실습에 필요한 다양한 냉매를 안전하게 보관하는 공간입니다. 철저한 안전 관리를 통해 실습 환경을 조성합니다.',
      image: refrigerantTanksImage
    },
    {
      id: 10,
      title: '휴게 공간',
      description: '학생들이 휴식을 취하고 교류할 수 있는 야외 휴게 공간입니다. 식사 및 휴식을 위한 편의시설이 마련되어 있습니다.',
      image: outdoorSpaceImage
    },
    {
      id: 11,
      title: '내부 복도',
      description: '깔끔하게 정비된 학교 내부 복도입니다. 쾌적한 환경에서 학습할 수 있도록 관리되고 있습니다.',
      image: indoorImage
    },
    {
      id: 12,
      title: '학교 외관',
      description: '금성기술직업전문학교의 현대적인 외관입니다. 접근성이 좋은 위치에 자리하고 있어 교통이 편리합니다.',
      image: buildingImage
    }
  ];

  return (
    <S.PageContainer>
      <Helmet>
        <title>교육시설 - 금성기술직업전문학교</title>
        <meta name="description" content="금성기술직업전문학교의 교육시설을 소개합니다. 최신 장비를 갖춘 실습실과 쾌적한 교육 환경을 제공합니다." />
      </Helmet>
      
      <SubpageHeader 
        title="교육시설" 
        subtitle="최신 장비와 쾌적한 환경에서 실무 중심의 교육을 제공합니다"
        breadcrumbs={breadcrumbs}
      />
      
      <S.ContentSection>
        <S.SectionInner>
          <S.SectionTitle>실습 및 교육 시설</S.SectionTitle>
          
          <S.FacilitiesIntro>
            금성기술직업전문학교는 학생들이 실무에 바로 적용할 수 있는 기술을 습득할 수 있도록
            최신 장비와 시설을 갖추고 있습니다. 각 분야별 전문 실습실과 쾌적한 교육 환경을 통해
            효과적인 학습이 이루어질 수 있도록 지원하고 있습니다.
          </S.FacilitiesIntro>
          
          <S.FacilitiesGrid>
            {facilities.map(facility => (
              <S.FacilityCard key={facility.id}>
                <S.FacilityImageContainer>
                  <S.FacilityImage 
                    src={facility.image} 
                    alt={facility.title} 
                  />
                </S.FacilityImageContainer>
                <S.FacilityContent>
                  <S.FacilityTitle>{facility.title}</S.FacilityTitle>
                  <S.FacilityDescription>{facility.description}</S.FacilityDescription>
                </S.FacilityContent>
              </S.FacilityCard>
            ))}
          </S.FacilitiesGrid>
          
          <S.SectionTitle>시설 특징</S.SectionTitle>
          
          <S.FacilityFeaturesList>
            <S.FacilityFeatureItem>
              <S.FacilityFeatureIcon>✓</S.FacilityFeatureIcon>
              <S.FacilityFeatureContent>
                <S.FacilityFeatureTitle>최신 실습 장비</S.FacilityFeatureTitle>
                <S.FacilityFeatureDescription>
                  산업 현장에서 실제 사용되는 최신 장비와 설비를 갖추어 실무 적응력을 높입니다.
                </S.FacilityFeatureDescription>
              </S.FacilityFeatureContent>
            </S.FacilityFeatureItem>
            
            <S.FacilityFeatureItem>
              <S.FacilityFeatureIcon>✓</S.FacilityFeatureIcon>
              <S.FacilityFeatureContent>
                <S.FacilityFeatureTitle>실무 중심 교육 환경</S.FacilityFeatureTitle>
                <S.FacilityFeatureDescription>
                  실제 현장과 유사한 환경에서 실습할 수 있도록 실습실을 구성하였습니다.
                </S.FacilityFeatureDescription>
              </S.FacilityFeatureContent>
            </S.FacilityFeatureItem>
            
            <S.FacilityFeatureItem>
              <S.FacilityFeatureIcon>✓</S.FacilityFeatureIcon>
              <S.FacilityFeatureContent>
                <S.FacilityFeatureTitle>쾌적한 교육 환경</S.FacilityFeatureTitle>
                <S.FacilityFeatureDescription>
                  모든 강의실과 실습실에 냉난방 시설을 완비하여 쾌적한 환경에서 학습할 수 있습니다.
                </S.FacilityFeatureDescription>
              </S.FacilityFeatureContent>
            </S.FacilityFeatureItem>
            
            <S.FacilityFeatureItem>
              <S.FacilityFeatureIcon>✓</S.FacilityFeatureIcon>
              <S.FacilityFeatureContent>
                <S.FacilityFeatureTitle>소규모 정예 교육</S.FacilityFeatureTitle>
                <S.FacilityFeatureDescription>
                  소규모 그룹으로 진행되어 개인별 맞춤 지도가 가능한 교육 환경을 제공합니다.
                </S.FacilityFeatureDescription>
              </S.FacilityFeatureContent>
            </S.FacilityFeatureItem>
            
            <S.FacilityFeatureItem>
              <S.FacilityFeatureIcon>✓</S.FacilityFeatureIcon>
              <S.FacilityFeatureContent>
                <S.FacilityFeatureTitle>편리한 접근성</S.FacilityFeatureTitle>
                <S.FacilityFeatureDescription>
                  부산 시내 중심가에 위치하여 대중교통으로 쉽게 접근할 수 있습니다.
                </S.FacilityFeatureDescription>
              </S.FacilityFeatureContent>
            </S.FacilityFeatureItem>
          </S.FacilityFeaturesList>
        </S.SectionInner>
      </S.ContentSection>
      
      <CTASection />
    </S.PageContainer>
  );
};

export default FacilitiesPage;
import React from 'react';
import { Helmet } from 'react-helmet';
import SubpageHeader from '../../components/SubpageHeader/SubpageHeader';
import FacilitiesSection from '../../components/FacilitiesSection/FacilitiesSection';
import CTASection from '../../components/CTASection/CTASection';
import * as S from './style';
import ceoImage from '../../assets/ceo.jpg';

const AboutPage = () => {
  const breadcrumbs = [
    { name: '학교 소개', link: '/about' },
    { name: '기관소개', link: null }
  ];

  return (
    <S.PageContainer>
      <Helmet>
        <title>학교 소개 - 금성기술직업전문학교</title>
        <meta name="description" content="전문적인 기술 교육으로 미래를 준비하는 금성기술직업전문학교를 소개합니다." />
      </Helmet>
      
      <SubpageHeader 
        title="학교 소개" 
        subtitle="금성기술직업전문학교는 실무 중심의 교육을 통해 우수한 기술 인재를 양성합니다"
        breadcrumbs={breadcrumbs}
      />
      
      <S.ContentSection>
        <S.SectionInner>
          <S.SectionTitle>기관 소개</S.SectionTitle>
          
          {/* <S.AboutImage 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=500"
            alt="금성기술직업전문학교 전경"
          /> */}
          
          <S.AboutContent>
            <S.ContentParagraph>
              금성기술직업전문학교는 1967년 설립 이래 57년의 역사를 자랑하는 명문학교로서, 
              7만 5천명의 기술자를 배출한 전문 교육기관입니다. 실무 중심의 교육과 현장 적응력 강화를 위한 
              다양한 프로그램을 운영하고 있습니다.
            </S.ContentParagraph>
            
            <S.ContentParagraph>
              국가기술자격증 취득을 위한 체계적인 교육 커리큘럼과 최신 설비를 갖춘 실습실에서의 
              실습 교육을 통해 현장에서 즉시 활용 가능한 실무 능력을 키우고 있습니다.
            </S.ContentParagraph>
            
            <S.ContentParagraph>
              또한, 취업 지원 시스템을 통해 졸업생들의 성공적인 커리어 시작을 적극 지원하며, 
              산업체와의 긴밀한 협력을 통해 높은 취업률을 자랑하고 있습니다.
            </S.ContentParagraph>
          </S.AboutContent>
          
          <S.FeatureGrid>
            <S.FeatureItem>
              <S.FeatureNumber>57+</S.FeatureNumber>
              <S.FeatureText>설립 연도</S.FeatureText>
            </S.FeatureItem>
            
            <S.FeatureItem>
              <S.FeatureNumber>75,000+</S.FeatureNumber>
              <S.FeatureText>졸업생 수</S.FeatureText>
            </S.FeatureItem>
            
            <S.FeatureItem>
              <S.FeatureNumber>95%</S.FeatureNumber>
              <S.FeatureText>취업률</S.FeatureText>
            </S.FeatureItem>
            
            <S.FeatureItem>
              <S.FeatureNumber>30+</S.FeatureNumber>
              <S.FeatureText>산학협력 기업</S.FeatureText>
            </S.FeatureItem>
          </S.FeatureGrid>
          
          <S.SectionTitle>학교장 인사말</S.SectionTitle>
          <S.AboutContent>
            <S.GreetingHeader>
              <S.GreetingTitle>희망찬 2025년을 맞이하여 귀하의 건승을 진심으로 기원합니다.</S.GreetingTitle>
              <S.DirectorImage 
                src={ceoImage}
                alt="금성기술직업전문학교 학교장 송성암"
              />
            </S.GreetingHeader>
            
            <S.ContentParagraph>
              안녕하십니까. 금성기술직업전문학교는 57년의 역사를 자랑하고 7만 5천명의 기술자를 배출시킨 명문학교입니다. 
              이번에 학교에 새로이 취임한 원장 송성암입니다. 저는 공조냉동기술사와 건축기계설비기술사를 취득하였고, 
              대학원의 박사과정을 수료하였습니다. 그래서 수강생 및 학생 여러분이 좋은 시설에서 훌륭한 선생님들에게 
              기술을 배워 산업현장에서 인정받는 기술자가 되도록 최선을 다하도록 노력하겠습니다.
            </S.ContentParagraph>
            
            <S.ContentParagraph>
              고사성어로 有志竟成이라는 말이 있습니다. 이것은 "뜻이 있으면 마침내 그 뜻을 이룰수 있다"는 말로 
              기술자로써 할려고 할의지가 있으면 어떠한 자격증이라고 취득할 수 있다라고 생각합니다. 
              그래서 금성기술직업 전문학교는 이러한 의지를 가진 수강생이나 학생들이 많이 들어와서 
              마음으로 배우고 머리로 생각하도록 하여 기술자격을 취득하는데 최대한의 도움을 드리겠습니다. 
              그리고 기술자격을 취득을 하면 자기자신의 가치를 높일수 있기 때문에 위기를 기회로 만드는 재도약의 
              발판으로 만들 수 있기를 바랍니다.
            </S.ContentParagraph>
            
            <S.DirectorSignature>학교장 송 성 암</S.DirectorSignature>
          </S.AboutContent>
          
          <S.SectionTitle>교육 목적</S.SectionTitle>
          <S.AboutContent>
            <S.ContentParagraph>
              현재 기계설비법이 2020년 6월9일 공포되어서 시행령, 시행규칙에 의해서 건축물 1만m2이상, 
              아파트500세대(중앙집중식300세대)이상은 2020년 4월18일부터 1년에 유지관리점검은 2회, 
              성능점검은 1회의 유지관리점검과 성능점검을 받도록 법적으로 의무화를 시행하고 있습니다. 
              그래서 유지관리자는 기계설비법 제19조의 ①항에 준해 기계설비유지관리자를 선임하도록 되어 있어서 
              1만m2이상과 아파트500세대이상는 초급자격(기사)이상이 상주하도록 되어 있으나 현재 기술자격증을 
              가진기술자가 많이 없어서 시행규칙의 부칙 제1조와 제2조의 ②항에 의하여 2026년 4월 18일 
              이전부터 근무한 직원에 한해서 임시적 기계설비유지관리기준의 자격을 부여하여 인정을 해주고 있으나 
              이것이 2026년 4월 17일까지 이기 때문에 이후부터는 유자격자만이 유지관리자로 선임이 가능합니다.
            </S.ContentParagraph>
            
            <S.ContentParagraph>
              그래서 기계설비종목인 공조냉동산업기사(기사), 설비보전기사(산업기사), 에너지관리산업기사(기사)를 
              취득할수 있도록 사전에 준비를 하여서 차후에는 유능한 기술인이 될수 있도록 해야 할 것입니다.
            </S.ContentParagraph>
          </S.AboutContent>
          
          <S.SectionTitle>본 학교의 특징</S.SectionTitle>
          <S.AboutContent>
            <S.FeatureList>
              <S.FeatureListItem>수료 후 취업 알선</S.FeatureListItem>
              <S.FeatureListItem>부산, 경남 최초로 설립된 58년의 전통 (유자격 교사 직강)</S.FeatureListItem>
              <S.FeatureListItem>우수한 강사진과 성의있는 강의, 책임감있는 지도</S.FeatureListItem>
              <S.FeatureListItem>전 강의실 냉난방완비</S.FeatureListItem>
              <S.FeatureListItem>부산시내 중심가로 편리한 교통(지하철 요지)</S.FeatureListItem>
              <S.FeatureListItem>충분한 실습기자재 및 실험실 보유</S.FeatureListItem>
              <S.FeatureListItem>초보자 및 여성수강생 환영</S.FeatureListItem>
            </S.FeatureList>
          </S.AboutContent>
          
          <S.SectionTitle>교육 방법</S.SectionTitle>
          <S.AboutContent>
            <S.FeatureList>
              <S.FeatureListItem>초보자를 위한 기초 중점 강의</S.FeatureListItem>
              <S.FeatureListItem>쉽게 이해할 수 있도록 열과 성의로서 강의</S.FeatureListItem>
              <S.FeatureListItem>정확한 시험 분석에 의한 책임있는 강의</S.FeatureListItem>
              <S.FeatureListItem>본학교 교재 및 특수 프린트물에 의한 성실성 있는 교육</S.FeatureListItem>
              <S.FeatureListItem>과목별 이론 정립 후 문제풀이</S.FeatureListItem>
            </S.FeatureList>
          </S.AboutContent>
        </S.SectionInner>
      </S.ContentSection>
      
      <FacilitiesSection />
      <CTASection />
    </S.PageContainer>
  );
};

export default AboutPage;

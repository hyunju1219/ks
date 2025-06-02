import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'wouter';
import SubpageHeader from '../../components/SubpageHeader/SubpageHeader';
import CTASection from '../../components/CTASection/CTASection';
import * as S from './style';
import energy from '../../assets/images/에너지.jpg';
const EnergyPage = () => {
  const breadcrumbs = [
    { name: '자격증 소개', link: '/certificate' },
    { name: '에너지관리', link: null }
  ];

  return (
    <S.PageContainer>
      <Helmet>
        <title>에너지관리 자격증 - 금성기술직업전문학교</title>
        <meta name="description" content="에너지관리 자격증 취득을 위한 전문 교육과정 안내. 기능사, 산업기사, 기사, 기능장 과정을 통해 에너지 전문가로 성장하세요." />
      </Helmet>
      
      <SubpageHeader 
        title="에너지관리 자격증" 
        subtitle="효율적인 에너지 사용 및 관리, 에너지 절약을 위한 전문 기술자격"
        breadcrumbs={breadcrumbs}
      />
      
      <S.ContentSection>
        <S.SectionInner>
          {/* 상단 네비게이션 */}
          <S.CertificateNav>
              <Link href="/certificate/energy">
                <S.CertificateNavItem isActive={true}>개요</S.CertificateNavItem>
              </Link>

              <Link href="/certificate/energy/master">
                <S.CertificateNavItem>기능사</S.CertificateNavItem>
              </Link>
   
              <Link href="/certificate/energy/industrial">
                <S.CertificateNavItem>산업기사</S.CertificateNavItem>
              </Link>
 
              <Link href="/certificate/energy/engineer">
                <S.CertificateNavItem>기사</S.CertificateNavItem>
              </Link>
     
              <Link href="/certificate/energy/craftsman">
                <S.CertificateNavItem>기능장</S.CertificateNavItem>
              </Link>
          </S.CertificateNav>
          
          {/* 상단 배너 이미지 */}
          <div style={{
            width: '100%',
            marginBottom: '2rem',
            borderRadius: '0.5rem',
            overflow: 'hidden',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb'
          }}>
            <img 
              src={energy}
              alt="에너지관리 자격증"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '350px',
                objectFit: 'cover',
                display: 'block'
              }} 
            />
          </div>
          
          {/* 타이틀 및 설명 */}
          <div style={{ marginBottom: '2rem' }}>
            <S.CertificateTitle>에너지관리 자격증</S.CertificateTitle>
            <S.CertificateDescription>
              에너지관리 자격증은, 산업 현장 및 건물에서 에너지 설비의 운전, 보수, 관리, 진단을 통해 에너지 효율성을 극대화하고 
              에너지 절약 방안을 수립하는 전문 인력을 검증하는 국가기술자격입니다. 보일러, 열교환기, 공조냉동기 등
              각종 에너지 관련 설비 운용 및 최적화 능력을 갖춘 전문가를 양성합니다.
            </S.CertificateDescription>
          </div>
          
          {/* 등급별 정보 */}
          <S.InfoSection>
            <S.InfoTitle>등급별 정보</S.InfoTitle>
            <S.FlexColumnDesktop>
              <S.DetailItem>
                <S.DetailTitle>기능사</S.DetailTitle>
                <S.DetailContent>
                  <p>- <strong>응시자격</strong>: 제한없음</p>
                  <p>- <strong>시험과목</strong>: 필기(열역학, 연소공학, 전기일반 등), 실기(보일러 취급 및 관리)</p>
                  <p>- <strong>검정방법</strong>: 필기 및 실기시험</p>
                  <p>- <strong>합격기준</strong>: 필기 60점 이상, 실기 60점 이상</p>
                </S.DetailContent>
              </S.DetailItem>
              
              <S.DetailItem>
                <S.DetailTitle>산업기사</S.DetailTitle>
                <S.DetailContent>
                  <p>- <strong>응시자격</strong>: 관련학과 졸업자 또는 실무경력자</p>
                  <p>- <strong>시험과목</strong>: 필기(열역학, 연소공학, 전기공학 등), 실기(에너지 설비 운용)</p>
                  <p>- <strong>검정방법</strong>: 필기 및 실기시험</p>
                  <p>- <strong>합격기준</strong>: 필기 60점 이상, 실기 60점 이상</p>
                </S.DetailContent>
              </S.DetailItem>
              
              <S.DetailItem>
                <S.DetailTitle>기사</S.DetailTitle>
                <S.DetailContent>
                  <p>- <strong>응시자격</strong>: 관련학과 졸업자 또는 실무경력자</p>
                  <p>- <strong>시험과목</strong>: 필기(열역학, 유체역학, 연소공학 등), 실기(에너지 관리, 진단)</p>
                  <p>- <strong>검정방법</strong>: 필기 및 실기시험</p>
                  <p>- <strong>합격기준</strong>: 필기 60점 이상, 실기 60점 이상</p>
                </S.DetailContent>
              </S.DetailItem>
              
              <S.DetailItem>
                <S.DetailTitle>기능장</S.DetailTitle>
                <S.DetailContent>
                  <p>- <strong>응시자격</strong>: 산업기사 + 실무경력 또는 기사 + 실무경력</p>
                  <p>- <strong>시험과목</strong>: 필기(열역학, 에너지관리, 열설비 등), 실기(종합 에너지관리)</p>
                  <p>- <strong>검정방법</strong>: 필기 및 실기시험</p>
                  <p>- <strong>합격기준</strong>: 필기 60점 이상, 실기 60점 이상</p>
                </S.DetailContent>
              </S.DetailItem>
            </S.FlexColumnDesktop>
          </S.InfoSection>
          
          {/* 취업 분야 */}
          <S.InfoSection>
            <S.InfoTitle>취업 분야</S.InfoTitle>
            <S.CareerList>
              <S.CareerItem>발전소 및 열병합 발전소</S.CareerItem>
              <S.CareerItem>에너지 효율 컨설팅 회사</S.CareerItem>
              <S.CareerItem>대형 건물 및 공장 에너지 관리</S.CareerItem>
              <S.CareerItem>지역난방 공사 및 관련 기관</S.CareerItem>
              <S.CareerItem>보일러 및 에너지 설비 제조업체</S.CareerItem>
              <S.CareerItem>에너지 진단 및 ESCO 관련 업체</S.CareerItem>
              <S.CareerItem>공공기관 및 대기업 에너지 관리 부서</S.CareerItem>
            </S.CareerList>
          </S.InfoSection>
          
          {/* 관련 직무 내용 */}
          <S.InfoSection>
            <S.InfoTitle>관련 직무 내용</S.InfoTitle>
            <S.JobDescription>
              <p>에너지관리 기술자는 다양한 에너지 설비의 운용 및 관리와 관련된 직무를 수행합니다:</p>
              <ul>
                <li>보일러, 터빈 등 에너지 설비의 운전 및 제어</li>
                <li>에너지 사용 현황 분석 및 절감 방안 수립</li>
                <li>난방, 급탕, 발전 시스템 설계 및 운영</li>
                <li>건물 및 산업체 에너지 진단 수행</li>
                <li>에너지 효율 향상을 위한 방안 연구</li>
                <li>신재생 에너지 시스템 적용 및 관리</li>
                <li>에너지 관련 법규 및 정책 이행</li>
              </ul>
            </S.JobDescription>
          </S.InfoSection>
          
          {/* 교육 과정 */}
          <S.InfoSection>
            <S.InfoTitle>금성기술직업전문학교 교육 과정</S.InfoTitle>
            <S.CourseInfo>
              <S.CourseItem>
                <S.CourseTitle>에너지관리 기능사 과정</S.CourseTitle>
                <S.CourseDetails>
                  <p>- <strong>교육기간</strong>: 3개월</p>
                  <p>- <strong>교육내용</strong>: 열역학, 보일러 운용, 전기 기초, 자격증 대비</p>
                  <p>- <strong>대상</strong>: 에너지관리 입문자</p>
                </S.CourseDetails>
              </S.CourseItem>
              
              <S.CourseItem>
                <S.CourseTitle>에너지관리 산업기사/기사 과정</S.CourseTitle>
                <S.CourseDetails>
                  <p>- <strong>교육기간</strong>: 6개월</p>
                  <p>- <strong>교육내용</strong>: 심화 열역학, 에너지 효율 분석, 유체역학, 에너지설비 실습</p>
                  <p>- <strong>대상</strong>: 기능사 자격 소지자 또는 관련 경력자</p>
                </S.CourseDetails>
              </S.CourseItem>
            </S.CourseInfo>
          </S.InfoSection>
          
          {/* 자격증 취득 로드맵 */}
          <S.InfoSection>
            <S.InfoTitle>자격증 취득 로드맵</S.InfoTitle>
            <S.StepList>
              <S.StepItem>
                <S.StepNumber>1</S.StepNumber>
                <S.StepContent>
                  <S.StepTitle>기초 이론 및 실습 교육</S.StepTitle>
                  <S.StepText>열역학, 유체역학, 전기공학 기초 학습 및 보일러 실습</S.StepText>
                </S.StepContent>
              </S.StepItem>
              
              <S.StepItem>
                <S.StepNumber>2</S.StepNumber>
                <S.StepContent>
                  <S.StepTitle>심화 실습 교육</S.StepTitle>
                  <S.StepText>에너지 설비 운전, 에너지 효율 측정, 진단 실무 실습</S.StepText>
                </S.StepContent>
              </S.StepItem>
              
              <S.StepItem>
                <S.StepNumber>3</S.StepNumber>
                <S.StepContent>
                  <S.StepTitle>필기 및 실기 시험 준비</S.StepTitle>
                  <S.StepText>기출문제 풀이 및 실기시험 모의훈련</S.StepText>
                </S.StepContent>
              </S.StepItem>
              
              <S.StepItem>
                <S.StepNumber>4</S.StepNumber>
                <S.StepContent>
                  <S.StepTitle>자격증 취득 및 취업 연계</S.StepTitle>
                  <S.StepText>자격증 취득 후 취업 지원 및 경력개발 코칭</S.StepText>
                </S.StepContent>
              </S.StepItem>
            </S.StepList>
          </S.InfoSection>
          
          {/* 교육과정 링크 */}
          <div style={{ marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
            <Link href="/course">
              <S.CourseButton>관련 교육과정 보기</S.CourseButton>
            </Link>
          </div>
        </S.SectionInner>
      </S.ContentSection>
      
      <CTASection />
    </S.PageContainer>
  );
};

export default EnergyPage;
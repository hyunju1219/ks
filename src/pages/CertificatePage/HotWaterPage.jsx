import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'wouter';
import SubpageHeader from '../../components/SubpageHeader/SubpageHeader';
import CTASection from '../../components/CTASection/CTASection';
import * as S from './style';
import hotWater from '../../assets/images/온수온돌.jpg';
const HotWaterPage = () => {
  const breadcrumbs = [
    { name: '자격증 소개', link: '/certificate' },
    { name: '온수온돌', link: null }
  ];

  return (
    <S.PageContainer>
      <Helmet>
        <title>온수온돌 자격증 - 금성기술직업전문학교</title>
        <meta name="description" content="온수온돌 자격증 취득을 위한 전문 교육과정 안내. 현재 기능사 과정만 운영 중입니다." />
      </Helmet>
      
      <SubpageHeader 
        title="온수온돌 자격증" 
        subtitle="쾌적한 주거환경을 위한 온수온돌 시공 및 관리 전문 기술자격"
        breadcrumbs={breadcrumbs}
      />
      
      <S.ContentSection>
        <S.SectionInner>
          {/* 상단 네비게이션 */}
          <S.CertificateNav>
            <div>
              <Link href="/certificate/heating">
                <S.CertificateNavItem isActive={true}>개요</S.CertificateNavItem>
              </Link>
            </div>
            <div>
              <Link href="/certificate/heating/master">
                <S.CertificateNavItem>기능사</S.CertificateNavItem>
              </Link>
            </div>
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
              src={hotWater}
              alt="온수온돌 자격증"
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
            <S.CertificateTitle>온수온돌 자격증 (준비중)</S.CertificateTitle>
            <S.CertificateDescription>
              금성기술직업전문학교에서는 온수온돌 자격증 과정을 현재 개설 준비 중입니다. 온수온돌 자격증은 한국의 전통적인 난방 방식인 온돌과 
              현대적인 온수 배관 시스템을 결합한 온수온돌의 시공, 유지관리, 보수 등에 관한 전문적인 기술을 검증하는 국가기술자격증입니다. 
              쾌적한 주거환경과 에너지 효율적인 난방 시스템 구축을 위한 전문 기술인력을 양성할 예정입니다.
            </S.CertificateDescription>
          </div>
          
          {/* 개설 예정 안내 */}
          <div style={{ 
            marginBottom: '2rem', 
            padding: '1.5rem',
            backgroundColor: '#f0f7ff',
            borderRadius: '0.5rem',
            border: '1px solid #cce5ff'
          }}>
            <div style={{ 
              fontSize: '1.25rem', 
              fontWeight: 'bold', 
              marginBottom: '0.75rem',
              color: '#0056b3'
            }}>
              개설 현황 안내
            </div>
            <p style={{ lineHeight: '1.6', color: '#4a5568' }}>
              현재 금성기술직업전문학교에서는 온수온돌 <strong>기능사</strong> 과정만 운영 중입니다. 
              향후 산업기사 및 기사 과정도 개설될 예정이며, 자세한 일정은 추후 공지할 예정입니다.
              온수온돌 관련 자격에 관심 있으신 분들은 기능사 과정부터 차근차근 준비하시는 것을 권장드립니다.
            </p>
          </div>
          
          {/* 등급별 정보 */}
          <S.InfoSection>
            <S.InfoTitle>등급별 정보</S.InfoTitle>
            <S.FlexColumnDesktop>
              <S.DetailItem>
                <S.DetailTitle>기능사</S.DetailTitle>
                <S.DetailContent>
                  <p>- <strong>응시자격</strong>: 제한없음</p>
                  <p>- <strong>시험과목</strong>: 필기(온수온돌 일반, 배관, 보일러 등), 실기(온수온돌 시공)</p>
                  <p>- <strong>검정방법</strong>: 필기 및 실기시험</p>
                  <p>- <strong>합격기준</strong>: 필기 60점 이상, 실기 60점 이상</p>
                </S.DetailContent>
              </S.DetailItem>
              
              <S.DetailItem>
                <S.DetailTitle>산업기사 (예정)</S.DetailTitle>
                <S.DetailContent>
                  <p>- <strong>상태</strong>: 현재 개설 준비 중</p>
                  <p>- <strong>예상 개설 일정</strong>: 미정</p>
                  <p>- <strong>문의</strong>: 자세한 사항은 학교로 문의 바랍니다.</p>
                </S.DetailContent>
              </S.DetailItem>
            </S.FlexColumnDesktop>
          </S.InfoSection>
          
          {/* 취업 분야 */}
          <S.InfoSection>
            <S.InfoTitle>취업 분야</S.InfoTitle>
            <S.CareerList>
              <S.CareerItem>온수온돌 시공 전문업체</S.CareerItem>
              <S.CareerItem>건설회사 온돌 시공 부문</S.CareerItem>
              <S.CareerItem>보일러 설치 및 난방공사 업체</S.CareerItem>
              <S.CareerItem>배관 설비 전문 업체</S.CareerItem>
              <S.CareerItem>주거용 건물 난방 시스템 유지보수</S.CareerItem>
              <S.CareerItem>난방설비 설계 및 시공</S.CareerItem>
              <S.CareerItem>에너지 효율 컨설팅</S.CareerItem>
            </S.CareerList>
          </S.InfoSection>
          
          {/* 관련 직무 내용 */}
          <S.InfoSection>
            <S.InfoTitle>관련 직무 내용</S.InfoTitle>
            <S.JobDescription>
              <p>온수온돌 기술자는 다음과 같은 업무를 수행합니다:</p>
              <ul>
                <li>온수온돌 배관 설계 및 시공</li>
                <li>보일러 및 난방설비 설치</li>
                <li>온수온돌 시스템 유지보수 및 점검</li>
                <li>난방 효율 진단 및 개선</li>
                <li>온수온돌 관련 자재 선정 및 품질관리</li>
                <li>온돌 하자 보수 및 문제 해결</li>
                <li>에너지 절약형 온돌 시스템 설계</li>
              </ul>
            </S.JobDescription>
          </S.InfoSection>
          
          {/* 교육 과정 */}
          <S.InfoSection>
            <S.InfoTitle>금성기술직업전문학교 교육 과정</S.InfoTitle>
            <S.CourseInfo>
              <S.CourseItem>
                <S.CourseTitle>온수온돌 기능사 과정</S.CourseTitle>
                <S.CourseDetails>
                  <p>- <strong>교육기간</strong>: 3개월</p>
                  <p>- <strong>교육내용</strong>: 온수온돌 이론, 배관 실습, 보일러 연결, 자격증 대비</p>
                  <p>- <strong>대상</strong>: 온수온돌 시공 입문자 및 관련 업계 종사자</p>
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
                  <S.StepText>온수온돌의 원리, 배관 이론, 보일러 연결 실습</S.StepText>
                </S.StepContent>
              </S.StepItem>
              
              <S.StepItem>
                <S.StepNumber>2</S.StepNumber>
                <S.StepContent>
                  <S.StepTitle>심화 실습 교육</S.StepTitle>
                  <S.StepText>실제 온수온돌 시공 실습, 문제 해결 능력 향상</S.StepText>
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

export default HotWaterPage;
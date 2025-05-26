import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'wouter';
import SubpageHeader from '../../components/SubpageHeader/SubpageHeader';
import CTASection from '../../components/CTASection/CTASection';
import * as S from './style';

const RefrigerationPage = () => {
  const breadcrumbs = [
    { name: '자격증 소개', link: '/certificate' },
    { name: '공조냉동기계', link: null }
  ];

  return (
    <S.PageContainer>
      <Helmet>
        <title>공조냉동기계 자격증 - 금성기술직업전문학교</title>
        <meta name="description" content="공조냉동기계 자격증 취득을 위한 전문 교육과정 안내. 기능사, 산업기사, 기사 과정을 통해 냉동설비 전문가로 성장하세요." />
      </Helmet>
      
      <SubpageHeader 
        title="공조냉동기계 자격증" 
        subtitle="냉동공조 설비의 설계, 시공, 운전, 관리에 필요한 전문 기술자격"
        breadcrumbs={breadcrumbs}
      />
      
      <S.ContentSection>
        <S.SectionInner>
          {/* 상단 네비게이션 */}
          <S.CertificateNav>
            <div>
              <Link href="/certificate/refrigeration">
                <S.CertificateNavItem isActive={true}>개요</S.CertificateNavItem>
              </Link>
            </div>
            <div>
              <Link href="/certificate/refrigeration/master">
                <S.CertificateNavItem>기능사</S.CertificateNavItem>
              </Link>
            </div>
            <div>
              <Link href="/certificate/refrigeration/industrial">
                <S.CertificateNavItem>산업기사</S.CertificateNavItem>
              </Link>
            </div>
            <div>
              <Link href="/certificate/refrigeration/engineer">
                <S.CertificateNavItem>기사</S.CertificateNavItem>
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
              src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=350" 
              alt="공조냉동기계 자격증"
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
            <S.CertificateTitle>공조냉동기계 자격증</S.CertificateTitle>
            <S.CertificateDescription>
              공조냉동기계 자격증은 공기조화, 냉방, 난방, 환기 및 냉동설비의 설계, 시공, 운전, 유지보수에 관한 전문 지식과 기술을 검정하는 국가기술자격입니다.
              냉동 관련 산업체 및 대형 건물의 설비 관리, 제조업체 등 다양한 분야에서 활용되는 실용적인 자격증입니다.
            </S.CertificateDescription>
          </div>
          
          {/* 등급별 정보 */}
          <S.InfoSection>
            <S.InfoTitle>등급별 정보</S.InfoTitle>
            <S.FlexColumnDesktop>
              <S.DetailItem>
                <S.DetailTitle>기능사</S.DetailTitle>
                <S.DetailContent>
                  <p>- <strong>응시자격</strong>: 제한 없음</p>
                  <p>- <strong>시험과목</strong>: 필기(냉동공학, 냉동설비, 전기제어 등), 실기(냉동기 실무 작업)</p>
                  <p>- <strong>검정방법</strong>: 필기 및 실기시험</p>
                  <p>- <strong>합격기준</strong>: 필기 60점 이상, 실기 60점 이상</p>
                </S.DetailContent>
              </S.DetailItem>
              
              <S.DetailItem>
                <S.DetailTitle>산업기사</S.DetailTitle>
                <S.DetailContent>
                  <p>- <strong>응시자격</strong>: 관련학과 졸업자 또는 실무경력자</p>
                  <p>- <strong>시험과목</strong>: 필기(냉동공학, 공기조화설비, 냉동설비, 전기제어), 실기(실무 관련 작업)</p>
                  <p>- <strong>검정방법</strong>: 필기 및 실기시험</p>
                  <p>- <strong>합격기준</strong>: 필기 60점 이상, 실기 60점 이상</p>
                </S.DetailContent>
              </S.DetailItem>
              
              <S.DetailItem>
                <S.DetailTitle>기사</S.DetailTitle>
                <S.DetailContent>
                  <p>- <strong>응시자격</strong>: 관련학과 졸업자 또는 실무경력자</p>
                  <p>- <strong>시험과목</strong>: 필기(냉동공학, 냉동장치, 냉방장치, 공기조화장치), 실기(실무 관련 작업)</p>
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
              <S.CareerItem>냉동설비 설계 및 시공업체</S.CareerItem>
              <S.CareerItem>대형 빌딩 냉난방 설비 관리</S.CareerItem>
              <S.CareerItem>공조설비 유지보수 업체</S.CareerItem>
              <S.CareerItem>냉동, 공조기계 제조업체</S.CareerItem>
              <S.CareerItem>식품 냉장, 냉동 창고 설비 관리</S.CareerItem>
              <S.CareerItem>대형 상업시설 냉동설비 관리</S.CareerItem>
            </S.CareerList>
          </S.InfoSection>
          
          {/* 관련 직무 내용 */}
          <S.InfoSection>
            <S.InfoTitle>관련 직무 내용</S.InfoTitle>
            <S.JobDescription>
              <p>공조냉동기계 기술자는 냉동 및 공조 시스템의 설계, 시공, 운전, 유지보수와 관련된 다양한 직무를 수행합니다:</p>
              <ul>
                <li>냉동, 냉장 및 공조 시스템의 설계 및 시공</li>
                <li>냉동기, 에어컨, 냉각탑 등의 설치, 운전, 점검, 정비</li>
                <li>시스템 효율 분석 및 에너지 절감 방안 도출</li>
                <li>냉매 관리 및 환경 규제 준수 관리</li>
                <li>설비 안전 관리 및 비상 대응</li>
                <li>냉난방 시스템 제어 및 자동화 관리</li>
              </ul>
            </S.JobDescription>
          </S.InfoSection>
          
          {/* 교육 과정 */}
          <S.InfoSection>
            <S.InfoTitle>금성기술직업전문학교 교육 과정</S.InfoTitle>
            <S.CourseInfo>
              <S.CourseItem>
                <S.CourseTitle>공조냉동기계 기능사 과정</S.CourseTitle>
                <S.CourseDetails>
                  <p>- <strong>교육기간</strong>: 3개월</p>
                  <p>- <strong>교육내용</strong>: 냉동이론, 전기제어, 냉동실습, 자격증 대비</p>
                  <p>- <strong>대상</strong>: 냉동기계 입문자</p>
                </S.CourseDetails>
              </S.CourseItem>
              
              <S.CourseItem>
                <S.CourseTitle>공조냉동기계 산업기사/기사 과정</S.CourseTitle>
                <S.CourseDetails>
                  <p>- <strong>교육기간</strong>: 6개월</p>
                  <p>- <strong>교육내용</strong>: 심화 냉동이론, 공조시스템 설계, 자동제어, 현장실습</p>
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
                  <S.StepText>냉동 이론, 전기제어, 기초 실습을 통한 기본기 확립</S.StepText>
                </S.StepContent>
              </S.StepItem>
              
              <S.StepItem>
                <S.StepNumber>2</S.StepNumber>
                <S.StepContent>
                  <S.StepTitle>심화 실습 교육</S.StepTitle>
                  <S.StepText>냉동설비 설치, 점검, 정비 등 실무 중심 심화 실습</S.StepText>
                </S.StepContent>
              </S.StepItem>
              
              <S.StepItem>
                <S.StepNumber>3</S.StepNumber>
                <S.StepContent>
                  <S.StepTitle>필기 및 실기 시험 준비</S.StepTitle>
                  <S.StepText>기출문제 풀이 및 실기시험 대비 집중 훈련</S.StepText>
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

export default RefrigerationPage;
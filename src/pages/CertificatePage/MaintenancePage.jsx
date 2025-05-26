import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'wouter';
import SubpageHeader from '../../components/SubpageHeader/SubpageHeader';
import CTASection from '../../components/CTASection/CTASection';
import * as S from './style';

const MaintenancePage = () => {
  const breadcrumbs = [
    { name: '자격증 소개', link: '/certificate' },
    { name: '설비보전', link: null }
  ];

  return (
    <S.PageContainer>
      <Helmet>
        <title>설비보전 자격증 - 금성기술직업전문학교</title>
        <meta name="description" content="설비보전 자격증 취득을 위한 전문 교육과정 안내. 산업기사, 기사 과정을 통해 설비 전문가로 성장하세요." />
      </Helmet>
      
      <SubpageHeader 
        title="설비보전 자격증" 
        subtitle="생산 설비 및 각종 산업 기계의 효율적인 운영과 보전을 위한 전문 기술자격"
        breadcrumbs={breadcrumbs}
      />
      
      <S.ContentSection>
        <S.SectionInner>
          {/* 상단 네비게이션 */}
          <S.CertificateNav>
            <div>
              <Link href="/certificate/maintenance">
                <S.CertificateNavItem isActive={true}>개요</S.CertificateNavItem>
              </Link>
            </div>
            <div>
              <Link href="/certificate/maintenance/industrial">
                <S.CertificateNavItem>산업기사</S.CertificateNavItem>
              </Link>
            </div>
            <div>
              <Link href="/certificate/maintenance/engineer">
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
              src="https://images.unsplash.com/photo-1565514158740-064f34bd6cfd?q=80&w=1200&h=350&auto=format&fit=crop" 
              alt="설비보전 자격증"
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
            <S.CertificateTitle>설비보전 자격증</S.CertificateTitle>
            <S.CertificateDescription>
              설비보전 자격증은 생산현장의 기계, 전기, 계장, 배관 등의 각종 설비를 안전하고 효율적으로 유지·관리하기 위한 
              기술을 검증하는 국가기술자격입니다. 설비 진단, 고장 예방, 수리, 개선 등의 업무를 수행할 수 있는
              종합적인 설비관리 능력을 갖춘 전문 인력을 양성합니다.
            </S.CertificateDescription>
          </div>
          
          {/* 등급별 정보 */}
          <S.InfoSection>
            <S.InfoTitle>등급별 정보</S.InfoTitle>
            <S.FlexColumnDesktop>
              <S.DetailItem>
                <S.DetailTitle>산업기사</S.DetailTitle>
                <S.DetailContent>
                  <p>- <strong>응시자격</strong>: 관련학과 졸업자 또는 실무경력자</p>
                  <p>- <strong>시험과목</strong>: 필기(기계설비, 전기설비, 설비진단 등), 실기(설비보전 실무)</p>
                  <p>- <strong>검정방법</strong>: 필기 및 실기시험</p>
                  <p>- <strong>합격기준</strong>: 필기 60점 이상, 실기 60점 이상</p>
                </S.DetailContent>
              </S.DetailItem>
              
              <S.DetailItem>
                <S.DetailTitle>기사</S.DetailTitle>
                <S.DetailContent>
                  <p>- <strong>응시자격</strong>: 관련학과 졸업자 또는 실무경력자</p>
                  <p>- <strong>시험과목</strong>: 필기(기계설비, 전기설비, 설비진단, 설비관리), 실기(종합 설비보전)</p>
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
              <S.CareerItem>제조업체 설비 유지보수 담당자</S.CareerItem>
              <S.CareerItem>설비 관리 및 진단 전문 업체</S.CareerItem>
              <S.CareerItem>대형 빌딩 및 공장 설비관리</S.CareerItem>
              <S.CareerItem>장비 수리 및 정비 서비스 분야</S.CareerItem>
              <S.CareerItem>공공기관 및 공기업 설비 담당</S.CareerItem>
              <S.CareerItem>생산라인 유지보수 관리자</S.CareerItem>
              <S.CareerItem>예지보전 및 설비 개선 컨설팅</S.CareerItem>
            </S.CareerList>
          </S.InfoSection>
          
          {/* 관련 직무 내용 */}
          <S.InfoSection>
            <S.InfoTitle>관련 직무 내용</S.InfoTitle>
            <S.JobDescription>
              <p>설비보전 기술자는 다양한 산업 설비의 유지보수 및 관리와 관련된 직무를 수행합니다:</p>
              <ul>
                <li>기계, 전기, 유압, 공압 등 각종 설비 운용 및 관리</li>
                <li>예지보전 및 예방정비 계획 수립</li>
                <li>설비 상태 진단 및 고장 분석</li>
                <li>설비 정비 및 수리 작업</li>
                <li>설비 개선 및 효율화 방안 수립</li>
                <li>보전 관련 문서 및 이력 관리</li>
                <li>유지보수 및 안전 교육</li>
              </ul>
            </S.JobDescription>
          </S.InfoSection>
          
          {/* 교육 과정 */}
          <S.InfoSection>
            <S.InfoTitle>금성기술직업전문학교 교육 과정</S.InfoTitle>
            <S.CourseInfo>
              <S.CourseItem>
                <S.CourseTitle>설비보전 산업기사 과정</S.CourseTitle>
                <S.CourseDetails>
                  <p>- <strong>교육기간</strong>: 4개월</p>
                  <p>- <strong>교육내용</strong>: 기계설비, 전기설비, 설비진단, 보전관리, 자격증 대비</p>
                  <p>- <strong>대상</strong>: 설비보전 입문자 및 현장 경력자</p>
                </S.CourseDetails>
              </S.CourseItem>
              
              <S.CourseItem>
                <S.CourseTitle>설비보전 기사 과정</S.CourseTitle>
                <S.CourseDetails>
                  <p>- <strong>교육기간</strong>: 6개월</p>
                  <p>- <strong>교육내용</strong>: 고급 설비진단, 종합 보전관리, TPM, 신뢰성공학, 현장 실습</p>
                  <p>- <strong>대상</strong>: 산업기사 자격 소지자 또는 관련 경력자</p>
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
                  <S.StepText>기계, 전기, 유압, 공압 등 설비 기초 학습 및 실습</S.StepText>
                </S.StepContent>
              </S.StepItem>
              
              <S.StepItem>
                <S.StepNumber>2</S.StepNumber>
                <S.StepContent>
                  <S.StepTitle>심화 실습 교육</S.StepTitle>
                  <S.StepText>설비 진단, 고장 원인 분석, 예방 보전 실무 실습</S.StepText>
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

export default MaintenancePage;
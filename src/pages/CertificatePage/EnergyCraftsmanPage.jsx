import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import SubpageHeader from '../../components/SubpageHeader/SubpageHeader';
import CTASection from '../../components/CTASection/CTASection';
import * as S from './style';

const EnergyCraftsmanPage = () => {
  const breadcrumbs = [
    { name: '자격증 소개', link: '/certificate' },
    { name: '에너지관리', link: '/certificate/energy' },
    { name: '기능장', link: null }
  ];

  return (
    <S.PageContainer>
      <Helmet>
        <title>에너지관리 기능장 - 금성기술직업전문학교</title>
        <meta name="description" content="에너지관리 기능장 자격증 취득 안내. 시험일정, 응시자격, 시험과목 등 상세 정보 제공" />
      </Helmet>
      
      <SubpageHeader 
        title="에너지관리 기능장" 
        subtitle="에너지 관련 종합적인 기술적 판단과 관리 능력을 갖춘 최고급 기술자 양성"
        breadcrumbs={breadcrumbs}
      />
      
      <S.ContentSection>
        <S.SectionInner>
          {/* 상단 네비게이션 */}
          <S.CertificateNav>
            <div>
              <Link to="/certificate/energy">
                <S.CertificateNavItem>개요</S.CertificateNavItem>
              </Link>
            </div>
            <div>
              <Link to="/certificate/energy/master">
                <S.CertificateNavItem>기능사</S.CertificateNavItem>
              </Link>
            </div>
            <div>
              <Link to="/certificate/energy/industrial">
                <S.CertificateNavItem>산업기사</S.CertificateNavItem>
              </Link>
            </div>
            <div>
              <Link to="/certificate/energy/engineer">
                <S.CertificateNavItem>기사</S.CertificateNavItem>
              </Link>
            </div>
            <div>
              <Link to="/certificate/energy/craftsman">
                <S.CertificateNavItem isActive={true}>기능장</S.CertificateNavItem>
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
            
          </div>
          
          {/* 타이틀 및 설명 */}
          <div style={{ marginBottom: '2rem' }}>
            <S.CertificateTitle>에너지관리 기능장</S.CertificateTitle>
            <S.CertificateDescription>
              에너지관리 기능장은 에너지 관련 최고 등급의 국가기술자격으로, 에너지 생산 및 이용 설비의 설계, 시공, 운영, 
              진단, 평가, 지도, 감독 등에 관한 모든 분야에서 종합적인 판단과 관리 능력을 검증합니다. 
              고도의 전문성과 현장경험을 바탕으로 기술적 문제를 해결하고 기술인력을 지도·감독할 수 있는 
              최고급 현장 기술자를 양성합니다.
            </S.CertificateDescription>
          </div>
          
          {/* 응시자격 */}
          <S.InfoSection>
            <S.InfoTitle>응시자격</S.InfoTitle>
            <S.FlexColumnDesktop>
              <S.DetailItem>
                <S.DetailTitle>학력 + 경력</S.DetailTitle>
                <S.DetailContent>
                  <p>다음 중 하나의 조건을 충족해야 합니다:</p>
                  <ul>
                    <li>에너지관리 산업기사 자격 취득 후 실무경력 6년 이상인 자</li>
                    <li>에너지관리 기사 자격 취득 후 실무경력 4년 이상인 자</li>
                    <li>동일 및 유사 직무분야의 기사 자격 취득 후 실무경력 7년 이상인 자</li>
                    <li>동일 및 유사 직무분야의 산업기사 자격 취득 후 실무경력 9년 이상인 자</li>
                    <li>동일 및 유사 직무분야의 석사학위 취득 후 실무경력 7년 이상인 자</li>
                  </ul>
                </S.DetailContent>
              </S.DetailItem>
              
              <S.DetailItem>
                <S.DetailTitle>실무 경력 요건</S.DetailTitle>
                <S.DetailContent>
                  <p>- <strong>분야</strong>: 에너지관리, 열설비, 발전설비 관련 분야</p>
                  <p>- <strong>직무 경력</strong>: 설계, 시공, 운영, 진단, 관리, 감독 등</p>
                  <p>- <strong>증빙서류</strong>: 경력증명서, 국민연금 가입이력 등 제출 필요</p>
                  <p>※ 응시자격에 대한 세부사항은 한국산업인력공단 홈페이지에서 확인하십시오.</p>
                </S.DetailContent>
              </S.DetailItem>
            </S.FlexColumnDesktop>
          </S.InfoSection>
          
          {/* 시험과목 */}
          <S.InfoSection>
            <S.InfoTitle>시험과목</S.InfoTitle>
            <S.FlexColumnDesktop>
              <S.DetailItem>
                <S.DetailTitle>필기시험</S.DetailTitle>
                <S.DetailContent>
                  <p>- <strong>과목수</strong>: 4과목</p>
                  <p>- <strong>시험시간</strong>: 2시간 30분</p>
                  <p>- <strong>문제수</strong>: 과목당 20문제(총 80문항, 객관식 4지선다)</p>
                  <p>- <strong>합격기준</strong>: 과목당 40점 이상, 전 과목 평균 60점 이상</p>
                  <p>- <strong>과목명</strong>:</p>
                  <ul>
                    <li>열역학 및 열전달</li>
                    <li>유체역학 및 연소공학</li>
                    <li>에너지관리 및 진단</li>
                    <li>열설비 및 자동제어</li>
                  </ul>
                </S.DetailContent>
              </S.DetailItem>
              
              <S.DetailItem>
                <S.DetailTitle>실기시험</S.DetailTitle>
                <S.DetailContent>
                  <p>- <strong>검정방법</strong>: 작업형</p>
                  <p>- <strong>시험시간</strong>: 6시간 내외</p>
                  <p>- <strong>합격기준</strong>: 60점 이상(100점 만점)</p>
                  <p>- <strong>주요 평가내용</strong>:</p>
                  <ul>
                    <li>종합적인 에너지 시스템 설계 및 계획</li>
                    <li>에너지 진단 및 최적화 방안 제시</li>
                    <li>복합 열시스템 문제 해결</li>
                    <li>에너지 설비 정밀 분석 및 판단</li>
                    <li>에너지 관련 통합 제어 시스템 구성</li>
                    <li>기술적 지도 및 감독 능력</li>
                  </ul>
                </S.DetailContent>
              </S.DetailItem>
            </S.FlexColumnDesktop>
          </S.InfoSection>
          
          {/* 시험일정 */}
          <S.InfoSection>
            <S.InfoTitle>2025년 시험일정</S.InfoTitle>
            <S.ExamScheduleTable>
              <thead>
                <tr>
                  <th>회차</th>
                  <th>필기시험 원서접수</th>
                  <th>필기시험</th>
                  <th>필기 합격발표</th>
                  <th>실기시험 원서접수</th>
                  <th>실기시험</th>
                  <th>최종 합격발표</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1회</td>
                  <td>01.06 ~ 01.09</td>
                  <td>01.21 ~ 01.25</td>
                  <td>02.06</td>
                  <td>02.10 ~ 02.13</td>
                  <td>03.15 ~ 04.02</td>
                  <td>04.18</td>
                </tr>
                <tr>
                  <td>2회</td>
                  <td>06.09 ~ 06.12</td>
                  <td>06.28 ~ 07.03</td>
                  <td>07.16</td>
                  <td>07.28 ~ 07.31</td>
                  <td>08.30 ~ 09.17</td>
                  <td>09.30</td>
                </tr>
              </tbody>
            </S.ExamScheduleTable>
            <S.ExamInfoNote>
              * 기능장 시험은 연 2회만 시행됩니다. 상기 일정은 해당 연도의 공식 일정이며, 시행기관의 사정에 따라 변경될 수 있습니다. 정확한 일정은 <a to="https://www.q-net.or.kr" target="_blank" rel="noopener noreferrer">Q-Net</a> 홈페이지에서 확인하시기 바랍니다.
            </S.ExamInfoNote>
          </S.InfoSection>
          
          {/* 취업 분야 */}
          <S.InfoSection>
            <S.InfoTitle>취업 및 활동 분야</S.InfoTitle>
            <S.CareerList>
              <S.CareerItem>대형 발전소 및 플랜트 총괄 관리자</S.CareerItem>
              <S.CareerItem>에너지 컨설팅 전문가</S.CareerItem>
              <S.CareerItem>에너지 진단 전문 기관 책임자</S.CareerItem>
              <S.CareerItem>에너지 관련 기업체 기술 총괄</S.CareerItem>
              <S.CareerItem>에너지 교육 및 훈련 강사</S.CareerItem>
              <S.CareerItem>공공기관 및 대기업 에너지 분야 총괄</S.CareerItem>
              <S.CareerItem>에너지 설비 설계 및 시공 분야 감독자</S.CareerItem>
              <S.CareerItem>에너지 관련 기술평가 및 자문위원</S.CareerItem>
            </S.CareerList>
          </S.InfoSection>
          
          {/* 교육 과정 */}
          <S.InfoSection>
            <S.InfoTitle>금성기술직업전문학교 교육 과정</S.InfoTitle>
            <S.CourseInfo>
              <S.CourseItem>
                <S.CourseTitle>에너지관리 기능장 취득 과정</S.CourseTitle>
                <S.CourseDetails>
                  <p>- <strong>교육기간</strong>: 8개월</p>
                  <p>- <strong>교육인원</strong>: 10명</p>
                  <p>- <strong>지원자격</strong>: 에너지관리 기사/산업기사 소지자 또는 관련 분야 장기 경력자</p>
                  <p>- <strong>교육내용</strong>:</p>
                  <ul>
                    <li>고급 열역학 및 열전달 이론</li>
                    <li>종합 에너지 설비 설계 및 분석</li>
                    <li>에너지 정밀 진단 기법</li>
                    <li>대형 플랜트 에너지 시스템 설계</li>
                    <li>에너지 효율 최적화 고급 기법</li>
                    <li>자동제어 시스템 통합설계</li>
                    <li>에너지 기술 지도 및 감독 방법론</li>
                    <li>에너지 관련 법규 및 정책 이해</li>
                    <li>실전 종합 문제해결 및 실기 심화 훈련</li>
                  </ul>
                </S.CourseDetails>
              </S.CourseItem>
            </S.CourseInfo>
          </S.InfoSection>
          
          {/* 교육과정 링크 */}
          <div style={{ marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
            <Link to="/course">
              <S.CourseButton>관련 교육과정 보기</S.CourseButton>
            </Link>
          </div>
        </S.SectionInner>
      </S.ContentSection>
      
      <CTASection />
    </S.PageContainer>
  );
};

export default EnergyCraftsmanPage;
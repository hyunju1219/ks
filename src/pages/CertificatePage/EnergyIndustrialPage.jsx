import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import SubpageHeader from '../../components/SubpageHeader/SubpageHeader';
import CTASection from '../../components/CTASection/CTASection';
import * as S from './style';

const EnergyIndustrialPage = () => {
  const breadcrumbs = [
    { name: '자격증 소개', link: '/certificate' },
    { name: '에너지관리', link: '/certificate/energy' },
    { name: '산업기사', link: null }
  ];

  return (
    <S.PageContainer>
      <Helmet>
        <title>에너지관리 산업기사 - 금성기술직업전문학교</title>
        <meta name="description" content="에너지관리 산업기사 자격증 취득 안내. 시험일정, 응시자격, 시험과목 등 상세 정보 제공" />
      </Helmet>
      
      <SubpageHeader 
        title="에너지관리 산업기사" 
        subtitle="에너지 설비의 설계, 시공, 운영 및 관리 능력을 갖춘 중견 기술인력 양성"
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
                <S.CertificateNavItem isActive={true}>산업기사</S.CertificateNavItem>
              </Link>
            </div>
            <div>
              <Link to="/certificate/energy/engineer">
                <S.CertificateNavItem>기사</S.CertificateNavItem>
              </Link>
            </div>
            <div>
              <Link to="/certificate/energy/craftsman">
                <S.CertificateNavItem>기능장</S.CertificateNavItem>
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
            <S.CertificateTitle>에너지관리 산업기사</S.CertificateTitle>
            <S.CertificateDescription>
              에너지관리 산업기사는 에너지 설비의 설계, 시공, 운전, 유지보수 및 에너지 효율 개선 분야에서 
              중견 기술자로서의 역량을 검증하는 자격증입니다. 기능사보다 심화된 이론 지식과 현장 경험을 바탕으로
              복합적인 에너지 시스템을 효율적으로 운용하고 관리할 수 있는 인재를 양성합니다.
            </S.CertificateDescription>
          </div>
          
          {/* 응시자격 */}
          <S.InfoSection>
            <S.InfoTitle>응시자격</S.InfoTitle>
            <S.FlexColumnDesktop>
              <S.DetailItem>
                <S.DetailTitle>학력</S.DetailTitle>
                <S.DetailContent>
                  <p>- 관련학과 전문대학 졸업자</p>
                  <p>- 관련학과 4년제 대학 2학년 이상 수료자</p>
                  <p>- 관련학과 기능대학 기능장과정 이수자</p>
                  <p>- 다른 법령에 의해 위와 동등 이상의 학력이 인정되는 자</p>
                </S.DetailContent>
              </S.DetailItem>
              
              <S.DetailItem>
                <S.DetailTitle>경력</S.DetailTitle>
                <S.DetailContent>
                  <p>- 관련 실무 경력 2년 이상인 자</p>
                  <p>- 기능사 자격 취득 후 실무 경력 1년 이상인 자</p>
                  <p>- 학력 + 경력(실무 + 기술훈련기관 교육 훈련) 조건 만족자</p>
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
                    <li>열역학</li>
                    <li>유체역학</li>
                    <li>연소공학</li>
                    <li>전기공학</li>
                  </ul>
                </S.DetailContent>
              </S.DetailItem>
              
              <S.DetailItem>
                <S.DetailTitle>실기시험</S.DetailTitle>
                <S.DetailContent>
                  <p>- <strong>검정방법</strong>: 작업형</p>
                  <p>- <strong>시험시간</strong>: 3시간 내외</p>
                  <p>- <strong>합격기준</strong>: 60점 이상(100점 만점)</p>
                  <p>- <strong>주요 평가내용</strong>:</p>
                  <ul>
                    <li>에너지 설비 효율 분석</li>
                    <li>에너지 절약 방안 수립</li>
                    <li>보일러 및 터빈 운전</li>
                    <li>열교환기 설계 및 계산</li>
                    <li>에너지 진단 기초</li>
                    <li>자동제어 시스템 운용</li>
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
                  <td>01.13 ~ 01.16</td>
                  <td>02.07 ~ 03.04</td>
                  <td>03.12</td>
                  <td>03.24 ~ 03.27</td>
                  <td>04.19 ~ 05.09</td>
                  <td>06.13</td>
                </tr>
                <tr>
                  <td>2회</td>
                  <td>04.14 ~ 04.17</td>
                  <td>05.10 ~ 05.30</td>
                  <td>06.11</td>
                  <td>06.23 ~ 06.26</td>
                  <td>07.19 ~ 08.06</td>
                  <td>09.12</td>
                </tr>
                <tr>
                  <td>3회</td>
                  <td>07.21 ~ 07.24</td>
                  <td>08.09 ~ 09.01</td>
                  <td>09.10</td>
                  <td>09.22 ~ 09.25</td>
                  <td>11.01 ~ 11.21</td>
                  <td>12.24</td>
                </tr>
              </tbody>
            </S.ExamScheduleTable>
            <S.ExamInfoNote>
              * 상기 일정은 해당 연도의 공식 일정이며, 시행기관의 사정에 따라 변경될 수 있습니다. 정확한 일정은 <a to="https://www.q-net.or.kr" target="_blank" rel="noopener noreferrer">Q-Net</a> 홈페이지에서 확인하시기 바랍니다.
            </S.ExamInfoNote>
          </S.InfoSection>
          
          {/* 취업 분야 */}
          <S.InfoSection>
            <S.InfoTitle>취업 분야</S.InfoTitle>
            <S.CareerList>
              <S.CareerItem>발전소 및 열병합 발전소 운영</S.CareerItem>
              <S.CareerItem>지역난방공사 및 관련 기관</S.CareerItem>
              <S.CareerItem>대형 건물 및 공장 에너지 관리자</S.CareerItem>
              <S.CareerItem>에너지 시스템 설계 및 시공업체</S.CareerItem>
              <S.CareerItem>에너지 진단 및 ESCO 관련 업체</S.CareerItem>
              <S.CareerItem>보일러 및 에너지 설비 제조업체</S.CareerItem>
              <S.CareerItem>공공기관 및 기업 에너지 관리부서</S.CareerItem>
            </S.CareerList>
          </S.InfoSection>
          
          {/* 교육 과정 */}
          <S.InfoSection>
            <S.InfoTitle>금성기술직업전문학교 교육 과정</S.InfoTitle>
            <S.CourseInfo>
              <S.CourseItem>
                <S.CourseTitle>에너지관리 산업기사 취득 과정</S.CourseTitle>
                <S.CourseDetails>
                  <p>- <strong>교육기간</strong>: 5개월</p>
                  <p>- <strong>교육인원</strong>: 15명</p>
                  <p>- <strong>교육내용</strong>:</p>
                  <ul>
                    <li>심화 열역학 및 유체역학</li>
                    <li>에너지 설비 설계 및 계산</li>
                    <li>보일러 및 연소관리 심화</li>
                    <li>자동제어 시스템 실습</li>
                    <li>에너지 진단 및 효율 분석</li>
                    <li>각종 열교환기 계산 및 설계</li>
                    <li>전력 설비 운용 및 관리</li>
                    <li>실전 문제풀이 및 실기 집중 훈련</li>
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

export default EnergyIndustrialPage;
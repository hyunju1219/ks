import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import SubpageHeader from '../../components/SubpageHeader/SubpageHeader';
import CTASection from '../../components/CTASection/CTASection';
import * as S from './style';

const EnergyEngineerPage = () => {
  const breadcrumbs = [
    { name: '자격증 소개', link: '/certificate' },
    { name: '에너지관리', link: '/certificate/energy' },
    { name: '기사', link: null }
  ];

  return (
    <S.PageContainer>
      <Helmet>
        <title>에너지관리 기사 - 금성기술직업전문학교</title>
        <meta name="description" content="에너지관리 기사 자격증 취득 안내. 시험일정, 응시자격, 시험과목 등 상세 정보 제공" />
      </Helmet>
      
      <SubpageHeader 
        title="에너지관리 기사" 
        subtitle="에너지 시스템의 계획, 설계, 진단, 평가 분야의 전문 기술인력 양성"
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
                <S.CertificateNavItem isActive={true}>기사</S.CertificateNavItem>
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
            <S.CertificateTitle>에너지관리 기사</S.CertificateTitle>
            <S.CertificateDescription>
              에너지관리 기사는 에너지 시스템을 계획, 설계, 진단, 평가, 최적화하는 고급 전문인력을 검증하는 자격증입니다. 
              에너지 및 열유체 시스템의 종합적인 이해와 복합적인 문제해결 능력을 기반으로 대규모 에너지 시스템의 설계와 
              에너지 효율화 방안 수립을 담당할 수 있는 전문 기술인력을 양성합니다.
            </S.CertificateDescription>
          </div>
          
          {/* 응시자격 */}
          <S.InfoSection>
            <S.InfoTitle>응시자격</S.InfoTitle>
            <S.FlexColumnDesktop>
              <S.DetailItem>
                <S.DetailTitle>학력</S.DetailTitle>
                <S.DetailContent>
                  <p>- 관련학과 4년제 대학 졸업자</p>
                  <p>- 관련학과 전문대학 졸업 후 실무경력 1년 이상인 자</p>
                  <p>- 관련학과 기능대학 전문학사 이상의 학위 취득자</p>
                  <p>- 다른 법령에 의해 위와 동등 이상의 학력이 인정되는 자</p>
                </S.DetailContent>
              </S.DetailItem>
              
              <S.DetailItem>
                <S.DetailTitle>경력</S.DetailTitle>
                <S.DetailContent>
                  <p>- 관련 실무 경력 4년 이상인 자</p>
                  <p>- 산업기사 자격 취득 후 실무 경력 1년 이상인 자</p>
                  <p>- 기능사 자격 취득 후 실무 경력 3년 이상인 자</p>
                  <p>- 학력 + 경력(실무 + 교육훈련) 조건 만족자</p>
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
                  <p>- <strong>과목수</strong>: 5과목</p>
                  <p>- <strong>시험시간</strong>: 2시간 30분</p>
                  <p>- <strong>문제수</strong>: 과목당 20문제(총 100문항, 객관식 4지선다)</p>
                  <p>- <strong>합격기준</strong>: 과목당 40점 이상, 전 과목 평균 60점 이상</p>
                  <p>- <strong>과목명</strong>:</p>
                  <ul>
                    <li>열역학</li>
                    <li>유체역학</li>
                    <li>연소공학</li>
                    <li>열전달</li>
                    <li>전기공학</li>
                  </ul>
                </S.DetailContent>
              </S.DetailItem>
              
              <S.DetailItem>
                <S.DetailTitle>실기시험</S.DetailTitle>
                <S.DetailContent>
                  <p>- <strong>검정방법</strong>: 작업형</p>
                  <p>- <strong>시험시간</strong>: 4시간 내외</p>
                  <p>- <strong>합격기준</strong>: 60점 이상(100점 만점)</p>
                  <p>- <strong>주요 평가내용</strong>:</p>
                  <ul>
                    <li>에너지 진단 및 분석</li>
                    <li>에너지 설비 종합 설계</li>
                    <li>열시스템 해석 및 최적화</li>
                    <li>에너지 경제성 평가</li>
                    <li>에너지 절약 방안 설계</li>
                    <li>자동제어 시스템 설계 및 관리</li>
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
              <S.CareerItem>발전소 및 대형 에너지 시설 설계</S.CareerItem>
              <S.CareerItem>에너지 효율화 컨설팅 기업</S.CareerItem>
              <S.CareerItem>에너지 진단 전문 기관</S.CareerItem>
              <S.CareerItem>신재생 에너지 관련 설계 및 R&D</S.CareerItem>
              <S.CareerItem>대형 공기업 및 기업체 에너지 담당자</S.CareerItem>
              <S.CareerItem>에너지 정책 연구 및 개발 기관</S.CareerItem>
              <S.CareerItem>중대형 플랜트 및 시스템 설계</S.CareerItem>
            </S.CareerList>
          </S.InfoSection>
          
          {/* 교육 과정 */}
          <S.InfoSection>
            <S.InfoTitle>금성기술직업전문학교 교육 과정</S.InfoTitle>
            <S.CourseInfo>
              <S.CourseItem>
                <S.CourseTitle>에너지관리 기사 취득 과정</S.CourseTitle>
                <S.CourseDetails>
                  <p>- <strong>교육기간</strong>: 6개월</p>
                  <p>- <strong>교육인원</strong>: 12명</p>
                  <p>- <strong>교육내용</strong>:</p>
                  <ul>
                    <li>고급 열역학 및 유체역학</li>
                    <li>에너지 진단 및 분석 기법</li>
                    <li>열전달 심화 및 응용</li>
                    <li>에너지 설비 종합 설계</li>
                    <li>에너지 시스템 최적화</li>
                    <li>열경제학 및 비용 분석</li>
                    <li>자동제어 시스템 고급설계</li>
                    <li>에너지 정책 및 법규</li>
                    <li>실전 문제풀이 및 실기 심화 훈련</li>
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

export default EnergyEngineerPage;
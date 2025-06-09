import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import SubpageHeader from '../../components/SubpageHeader/SubpageHeader';
import CTASection from '../../components/CTASection/CTASection';
import * as S from './style';

const EnergyMasterPage = () => {
  const breadcrumbs = [
    { name: '자격증 소개', link: '/certificate' },
    { name: '에너지관리', link: '/certificate/energy' },
    { name: '기능사', link: null }
  ];

  return (
    <S.PageContainer>
      <Helmet>
        <title>에너지관리 기능사 - 금성기술직업전문학교</title>
        <meta name="description" content="에너지관리 기능사 자격증 취득 안내. 시험일정, 응시자격, 시험과목 등 상세 정보 제공" />
      </Helmet>
      
      <SubpageHeader 
        title="에너지관리 기능사" 
        subtitle="에너지 설비의 효율적 운용 및 관리 능력을 갖춘 실무 인력 양성"
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
                <S.CertificateNavItem isActive={true}>기능사</S.CertificateNavItem>
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
            <S.CertificateTitle>에너지관리 기능사</S.CertificateTitle>
            <S.CertificateDescription>
              에너지관리 기능사는 보일러, 냉동기, 공조기 등 각종 에너지 설비의 운전, 취급, 점검 및 유지보수를 담당하는 
              현장 실무형 자격증입니다. 에너지 설비의 기초 운영 및 관리가 가능한 전문 인력을 양성하여 
              산업체의 에너지 효율 향상과 설비 안전성을 제고합니다.
            </S.CertificateDescription>
          </div>
          
          {/* 자격 개요 */}
          <S.InfoSection>
            <S.InfoTitle>자격 개요</S.InfoTitle>
            <S.FlexColumnDesktop>
              <div style={{ 
                backgroundColor: '#f3f8ff', 
                borderRadius: '0.5rem', 
                padding: '1.25rem', 
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)', 
                marginBottom: '0.75rem',
                transition: 'all 0.3s ease',
                border: '1px solid #e5e7eb',
                borderLeft: '4px solid #0056b3'
              }}>
                <div style={{ fontWeight: 600, fontSize: '1rem', color: '#1f2937', marginBottom: '0.75rem' }}>관련부처</div>
                <div style={{ color: '#4b5563', fontSize: '1rem' }}>산업통상자원부</div>
              </div>
              <div style={{ 
                backgroundColor: '#f3f8ff', 
                borderRadius: '0.5rem', 
                padding: '1.25rem', 
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)', 
                marginBottom: '0.75rem',
                transition: 'all 0.3s ease',
                border: '1px solid #e5e7eb',
                borderLeft: '4px solid #0056b3'
              }}>
                <div style={{ fontWeight: 600, fontSize: '1rem', color: '#1f2937', marginBottom: '0.75rem' }}>시행기관</div>
                <div style={{ color: '#4b5563', fontSize: '1rem' }}>한국산업인력공단</div>
              </div>
              <div style={{ 
                backgroundColor: '#f3f8ff', 
                borderRadius: '0.5rem', 
                padding: '1.25rem', 
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)', 
                marginBottom: '0.75rem',
                transition: 'all 0.3s ease',
                border: '1px solid #e5e7eb',
                borderLeft: '4px solid #0056b3' 
              }}>
                <div style={{ fontWeight: 600, fontSize: '1rem', color: '#1f2937', marginBottom: '0.75rem' }}>자격등급</div>
                <div style={{ color: '#4b5563', fontSize: '1rem' }}>기능사 (국가기술자격)</div>
              </div>
            </S.FlexColumnDesktop>
          </S.InfoSection>
          
          {/* 응시자격 */}
          <S.InfoSection>
            <S.InfoTitle>응시자격</S.InfoTitle>
            <S.JobDescription>
              <p>에너지관리 기능사는 응시자격에 제한이 없습니다. 누구나 시험에 응시할 수 있습니다.</p>
            </S.JobDescription>
          </S.InfoSection>
          
          {/* 시험과목 */}
          <S.InfoSection>
            <S.InfoTitle>시험과목</S.InfoTitle>
            <S.FlexColumnDesktop>
              <S.DetailItem>
                <S.DetailTitle>필기시험</S.DetailTitle>
                <S.DetailContent>
                  <p>- <strong>과목수</strong>: 4과목</p>
                  <p>- <strong>시험시간</strong>: 2시간</p>
                  <p>- <strong>문제수</strong>: 과목당 20문제(총 80문항, 객관식 4지선다)</p>
                  <p>- <strong>합격기준</strong>: 과목당 40점 이상, 전 과목 평균 60점 이상</p>
                  <p>- <strong>과목명</strong>:</p>
                  <ul>
                    <li>열역학</li>
                    <li>연소공학</li>
                    <li>전기일반</li>
                    <li>에너지관리</li>
                  </ul>
                </S.DetailContent>
              </S.DetailItem>
              
              <S.DetailItem>
                <S.DetailTitle>실기시험</S.DetailTitle>
                <S.DetailContent>
                  <p>- <strong>검정방법</strong>: 작업형</p>
                  <p>- <strong>시험시간</strong>: 2시간 30분 내외</p>
                  <p>- <strong>합격기준</strong>: 60점 이상(100점 만점)</p>
                  <p>- <strong>주요 평가내용</strong>:</p>
                  <ul>
                    <li>보일러 운전 및 취급</li>
                    <li>연료 및 연소관리</li>
                    <li>열교환기 운전 및 관리</li>
                    <li>에너지 설비 점검 및 유지보수</li>
                    <li>에너지 절약 실무</li>
                    <li>전기설비 기초 운용</li>
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
                  <td>04.11</td>
                </tr>
                <tr>
                  <td>2회</td>
                  <td>03.17 ~ 03.21</td>
                  <td>04.05 ~ 04.10</td>
                  <td>04.16</td>
                  <td>04.21 ~ 04.24</td>
                  <td>05.31 ~ 06.15</td>
                  <td>06.27</td>
                </tr>
                <tr>
                  <td>3회</td>
                  <td>06.09 ~ 06.12</td>
                  <td>06.28 ~ 07.03</td>
                  <td>07.16</td>
                  <td>07.28 ~ 07.31</td>
                  <td>08.30 ~ 09.17</td>
                  <td>09.26</td>
                </tr>
                <tr>
                  <td>4회</td>
                  <td>08.25 ~ 08.28</td>
                  <td>09.20 ~ 09.25</td>
                  <td>10.15</td>
                  <td>10.20 ~ 10.23</td>
                  <td>11.22 ~ 12.10</td>
                  <td>12.19</td>
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
              <S.CareerItem>산업용 보일러 관리 및 운전</S.CareerItem>
              <S.CareerItem>빌딩 및 공장 에너지 설비 운용</S.CareerItem>
              <S.CareerItem>에너지 관련 설비 유지보수</S.CareerItem>
              <S.CareerItem>열병합 발전소 운전원</S.CareerItem>
              <S.CareerItem>에너지 관련 업체 현장 기술자</S.CareerItem>
              <S.CareerItem>지역난방 공사 운전 및 유지보수</S.CareerItem>
            </S.CareerList>
          </S.InfoSection>
          
          {/* 교육 과정 */}
          <S.InfoSection>
            <S.InfoTitle>금성기술직업전문학교 교육 과정</S.InfoTitle>
            <S.CourseInfo>
              <S.CourseItem>
                <S.CourseTitle>에너지관리 기능사 취득 과정</S.CourseTitle>
                <S.CourseDetails>
                  <p>- <strong>교육기간</strong>: 3개월</p>
                  <p>- <strong>교육인원</strong>: 20명</p>
                  <p>- <strong>교육내용</strong>:</p>
                  <ul>
                    <li>열역학 기초 이론</li>
                    <li>보일러 및 연소 실습</li>
                    <li>전기 기초 및 제어</li>
                    <li>에너지 설비 운전 및 관리</li>
                    <li>에너지 절약 실무</li>
                    <li>안전관리 및 비상대응</li>
                    <li>기출문제 분석 및 실전 모의고사</li>
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

export default EnergyMasterPage;